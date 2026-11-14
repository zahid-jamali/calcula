import { getRules } from '@/rules';
import {
  parseIsoDate,
  formatIsoDate,
  addDays,
  calculateCompletedYears,
  calculateNoticeDays,
  calculate13thMonths,
  calculateProportionalVacationMonths,
} from './taxUtils';
import { calculateInss, calculateIrrf } from './decimoTerceiro';

export type BrRescisaoReason =
  | 'sem-justa-causa'
  | 'pedido-demissao'
  | 'acordo'
  | 'justa-causa'
  | 'termino-experiencia'
  | 'rescisao-antecipada-experiencia-empregador'
  | 'acordo-mutuo'
  | 'com-justa-causa';

export type BrNoticeType = 'trabalhado' | 'indenizado' | 'dispensado' | 'nao-cumprido';

export interface BrRescisaoInput {
  salary: number;
  variablePayAverage?: number;
  startDate: string;
  endDate: string;
  reason: BrRescisaoReason;
  noticeType: BrNoticeType;
  expiredVacations?: number; // 0 | 1 | 2 (number of expired periods)
  vacationsInDouble?: boolean; // vencidas há mais de 1 período concessivo -> CLT art. 137, pays em dobro
  fgtsBalance?: number; // if undefined, estimate: (salary + variable) * 0.08 * monthsWorked
  dependentsCount?: number;
  remainingContractDays?: number; // for rescisao antecipada experiencia art. 479: half salary for remaining days
}

export interface CalculationLineItem {
  key: string;
  label: string;
  amount: number;
  formula: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface BrRescisaoResult {
  items: CalculationLineItem[];
  baseSalary: number;
  totalGross: number;
  totalDeductions: number;
  totalNet: number;
  fgtsBalanceEstimated: number;
  fgtsTotalBalance: number;
  fgtsWithdrawalAmount: number;
  multaFgtsAmount: number;
  paymentDeadline: string;
  rightToSeguroDesemprego: boolean;
  workedDaysFinalMonth: number;
  totalServiceYears: number;
  noticeDays: number;
  projectedEndDate?: string;
}

export function calculateBrRescisao(input: BrRescisaoInput): BrRescisaoResult {
  const {
    salary,
    variablePayAverage = 0,
    startDate,
    endDate,
    reason: rawReason,
    noticeType = 'indenizado',
    expiredVacations = 0,
    vacationsInDouble = false,
    fgtsBalance,
    dependentsCount = 0,
    remainingContractDays = 0,
  } = input;

  // Normalize reason aliases
  const reason: BrRescisaoReason =
    rawReason === 'acordo-mutuo'
      ? 'acordo'
      : rawReason === 'com-justa-causa'
        ? 'justa-causa'
        : rawReason;

  const rules = getRules('br', endDate);
  const baseSalary = salary + variablePayAverage;
  const dailyRate = baseSalary / 30;

  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);

  // Full years of service
  const serviceYears = calculateCompletedYears(startDate, endDate);

  // Notice days under Lei 12.506/2011 (30 days + 3 days per full year completed, max 90 days)
  const noticeDays = calculateNoticeDays(serviceYears);

  // Notice projection: OJ 82 / Súmula 441 TST
  const isNoticeIndemnified =
    noticeType === 'indenizado' && (reason === 'sem-justa-causa' || reason === 'acordo');

  const projectedEnd = isNoticeIndemnified ? addDays(end, noticeDays) : new Date(end);
  const projectedEndDateStr = isNoticeIndemnified ? formatIsoDate(projectedEnd) : undefined;

  // Days in final month
  const daysInFinalMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  const workedDaysFinalMonth =
    end.getDate() === daysInFinalMonth ? 30 : Math.min(30, end.getDate());
  const saldoSalario = Math.round(workedDaysFinalMonth * dailyRate * 100) / 100;

  // 1. Notice indemnity or deduction
  let avisoPrevioValue = 0;
  let noticeDeduction = 0;

  if (reason === 'sem-justa-causa' && noticeType === 'indenizado') {
    avisoPrevioValue = Math.round(noticeDays * dailyRate * 100) / 100;
  } else if (reason === 'acordo' && noticeType === 'indenizado') {
    // Art. 484-A, I, "a" da CLT: 50% de aviso prévio
    avisoPrevioValue = Math.round(noticeDays * dailyRate * 0.5 * 100) / 100;
  } else if (reason === 'pedido-demissao' && noticeType === 'nao-cumprido') {
    // Art. 487, § 2º da CLT: desconto de 30 dias de salário
    noticeDeduction = Math.round(30 * dailyRate * 100) / 100;
  }

  // 2. 13º Salário Proporcional (>= 15 dias no mês = 1/12, com projeção se aviso indenizado)
  let months13 = 0;
  let decimoTerceiro = 0;
  if (reason !== 'justa-causa') {
    months13 = calculate13thMonths(startDate, projectedEnd);
    decimoTerceiro = Math.round(((baseSalary * months13) / 12) * 100) / 100;
  }

  // 3. Férias Proporcionais + 1/3 (com projeção se aviso indenizado)
  let monthsFerias = 0;
  let feriasProporcionais = 0;
  let tercoProporcionais = 0;
  if (reason !== 'justa-causa') {
    monthsFerias = calculateProportionalVacationMonths(startDate, projectedEnd);
    feriasProporcionais = Math.round(((baseSalary * monthsFerias) / 12) * 100) / 100;
    tercoProporcionais = Math.round((feriasProporcionais / 3) * 100) / 100;
  }

  // 4. Férias Vencidas + 1/3 (devidas mesmo em justa causa - Súmula 171 TST)
  let feriasVencidas = 0;
  let tercoVencidas = 0;
  if (expiredVacations > 0) {
    const multiplier = vacationsInDouble ? 2 : 1;
    feriasVencidas = Math.round(baseSalary * expiredVacations * multiplier * 100) / 100;
    tercoVencidas = Math.round((feriasVencidas / 3) * 100) / 100;
  }

  // 5. Indenização Art. 479 CLT (Rescisão antecipada pelo empregador no contrato de experiência)
  let indenizacaoArt479 = 0;
  if (reason === 'rescisao-antecipada-experiencia-empregador' && remainingContractDays > 0) {
    indenizacaoArt479 = Math.round(remainingContractDays * dailyRate * 0.5 * 100) / 100;
  }

  // 6. FGTS Balance and Fine Calculation
  const diffDays = Math.max(0, Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const totalMonthsWorked = Math.max(1, Math.round(diffDays / 30.4375));
  const estimatedFgts = Math.round(baseSalary * rules.fgtsRate.value * totalMonthsWorked * 100) / 100;
  const effectiveFgts = fgtsBalance !== undefined ? fgtsBalance : estimatedFgts;

  let multaFgtsRate = 0;
  if (reason === 'sem-justa-causa' || reason === 'rescisao-antecipada-experiencia-empregador') {
    multaFgtsRate = rules.fgtsPenaltyRate.value; // 40%
  } else if (reason === 'acordo') {
    multaFgtsRate = rules.fgtsPenaltyRate.value / 2; // 20%
  }

  const multaFgtsAmount = Math.round(effectiveFgts * multaFgtsRate * 100) / 100;

  // FGTS withdrawal amount
  let fgtsWithdrawalAmount = 0;
  if (reason === 'sem-justa-causa' || reason === 'rescisao-antecipada-experiencia-empregador') {
    fgtsWithdrawalAmount = Math.round((effectiveFgts + multaFgtsAmount) * 100) / 100;
  } else if (reason === 'acordo') {
    fgtsWithdrawalAmount = Math.round((effectiveFgts * 0.8 + multaFgtsAmount) * 100) / 100;
  } else if (reason === 'termino-experiencia') {
    fgtsWithdrawalAmount = Math.round(effectiveFgts * 100) / 100;
  }

  // 7. Deductions
  // INSS & IRRF on Saldo de Salário
  const inssSaldo = calculateInss(saldoSalario);
  const irrfSaldo = calculateIrrf(saldoSalario, inssSaldo, dependentsCount);

  // INSS & IRRF on 13º Salário (tributação exclusiva na fonte)
  const inss13 = decimoTerceiro > 0 ? calculateInss(decimoTerceiro) : 0;
  const irrf13 = decimoTerceiro > 0 ? calculateIrrf(decimoTerceiro, inss13, dependentsCount) : 0;

  // Build items list
  const items: CalculationLineItem[] = [
    {
      key: 'saldo_salario',
      label: `Saldo de Salário (${workedDaysFinalMonth} dias)`,
      amount: saldoSalario,
      formula: `${workedDaysFinalMonth} dias × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: 'Art. 457 e 462 da CLT',
    },
  ];

  if (avisoPrevioValue > 0) {
    items.push({
      key: 'aviso_previo',
      label: `Aviso Prévio Indenizado (${noticeDays} dias)`,
      amount: avisoPrevioValue,
      formula:
        reason === 'acordo'
          ? `${noticeDays} dias × R$ ${dailyRate.toFixed(2)} × 50% (Acordo Art. 484-A)`
          : `${noticeDays} dias (30 + ${serviceYears * 3} adicionais) × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: reason === 'acordo' ? 'Art. 484-A da CLT' : 'Lei 12.506/2011 e Art. 487 da CLT',
    });
  }

  if (decimoTerceiro > 0) {
    items.push({
      key: 'decimo_terceiro',
      label: `13º Salário Proporcional (${months13}/12)${isNoticeIndemnified ? ' (com projeção do aviso)' : ''}`,
      amount: decimoTerceiro,
      formula: `(R$ ${baseSalary.toFixed(2)} ÷ 12) × ${months13} meses`,
      legalArticle: 'Lei 4.090/1962 e Lei 4.749/1965',
    });
  }

  if (feriasProporcionais > 0) {
    items.push({
      key: 'ferias_proporcionais',
      label: `Férias Proporcionais (${monthsFerias}/12)${isNoticeIndemnified ? ' (com projeção do aviso)' : ''}`,
      amount: feriasProporcionais,
      formula: `(R$ ${baseSalary.toFixed(2)} ÷ 12) × ${monthsFerias} meses`,
      legalArticle: 'Art. 146 e 147 da CLT',
    });
    items.push({
      key: 'terco_ferias',
      label: '1/3 Constitucional de Férias Proporcionais',
      amount: tercoProporcionais,
      formula: `R$ ${feriasProporcionais.toFixed(2)} ÷ 3`,
      legalArticle: 'Art. 7º, XVII da Constituição Federal',
    });
  }

  if (feriasVencidas > 0) {
    const labelDouble = vacationsInDouble ? ' (Pagas em Dobro - Art. 137 CLT)' : '';
    items.push({
      key: 'ferias_vencidas',
      label: `Férias Vencidas (${expiredVacations} período${expiredVacations > 1 ? 's' : ''})${labelDouble}`,
      amount: feriasVencidas,
      formula: `${expiredVacations} período(s) × R$ ${baseSalary.toFixed(2)}${vacationsInDouble ? ' × 2 (em dobro)' : ''}`,
      legalArticle: vacationsInDouble ? 'Art. 134 e 137 da CLT' : 'Art. 134 da CLT',
    });
    items.push({
      key: 'terco_ferias_vencidas',
      label: `1/3 Constitucional sobre Férias Vencidas${vacationsInDouble ? ' (em dobro)' : ''}`,
      amount: tercoVencidas,
      formula: `R$ ${feriasVencidas.toFixed(2)} ÷ 3`,
      legalArticle: vacationsInDouble
        ? 'Art. 7º, XVII da CF e Art. 137 da CLT'
        : 'Art. 7º, XVII da Constituição Federal',
    });
  }

  if (indenizacaoArt479 > 0) {
    items.push({
      key: 'indenizacao_art_479',
      label: `Indenização Art. 479 CLT (${remainingContractDays} dias restantes)`,
      amount: indenizacaoArt479,
      formula: `50% × ${remainingContractDays} dias × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: 'Art. 479 da CLT',
    });
  }

  if (multaFgtsAmount > 0) {
    const rateText = reason === 'acordo' ? '20%' : '40%';
    items.push({
      key: 'multa_fgts',
      label: `Multa Rescisória do FGTS (${rateText})`,
      amount: multaFgtsAmount,
      formula: `R$ ${effectiveFgts.toFixed(2)} × ${rateText}`,
      legalArticle:
        reason === 'acordo' ? 'Art. 484-A, § 1º, II da CLT' : 'Art. 18, § 1º da Lei 8.036/1990',
    });
  }

  // Deductions
  if (noticeDeduction > 0) {
    items.push({
      key: 'desconto_aviso_previo',
      label: 'Desconto de Aviso Prévio Não Cumprido (30 dias)',
      amount: noticeDeduction,
      formula: `30 dias × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: 'Art. 487, § 2º da CLT',
      isDeduction: true,
    });
  }

  if (inssSaldo > 0) {
    items.push({
      key: 'inss_saldo',
      label: 'Desconto INSS sobre Saldo de Salário',
      amount: inssSaldo,
      formula: 'Tabela progressiva INSS 2026',
      legalArticle: 'Tabela INSS 2026',
      isDeduction: true,
    });
  }

  if (irrfSaldo > 0) {
    items.push({
      key: 'irrf_saldo',
      label: 'Desconto IRRF sobre Saldo de Salário',
      amount: irrfSaldo,
      formula: 'Tabela progressiva s/ base (saldo - INSS - dependentes)',
      legalArticle: 'Tabela IRRF 2026',
      isDeduction: true,
    });
  }

  if (inss13 > 0) {
    items.push({
      key: 'inss_13',
      label: 'Desconto INSS sobre 13º Salário',
      amount: inss13,
      formula: 'Tributação exclusiva na fonte sobre 13º proporcional',
      legalArticle: 'Art. 7º da Lei 8.620/1993',
      isDeduction: true,
    });
  }

  if (irrf13 > 0) {
    items.push({
      key: 'irrf_13',
      label: 'Desconto IRRF sobre 13º Salário',
      amount: irrf13,
      formula: 'Tabela progressiva s/ base (13º - INSS - dependentes)',
      legalArticle: 'Art. 638 do RIR/2018 (Decreto 9.580/2018)',
      isDeduction: true,
    });
  }

  const totalGross = items
    .filter((i) => !i.isDeduction)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalDeductions = items
    .filter((i) => i.isDeduction)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalNet = Math.max(0, Math.round((totalGross - totalDeductions) * 100) / 100);

  const rightToSeguroDesemprego =
    reason === 'sem-justa-causa' || reason === 'rescisao-antecipada-experiencia-empregador';

  const paymentDeadline = '10 dias corridos a partir do término (Art. 477, § 6º da CLT)';

  return {
    items,
    baseSalary,
    totalGross: Math.round(totalGross * 100) / 100,
    totalDeductions: Math.round(totalDeductions * 100) / 100,
    totalNet,
    fgtsBalanceEstimated: effectiveFgts,
    fgtsTotalBalance: effectiveFgts,
    fgtsWithdrawalAmount,
    multaFgtsAmount,
    paymentDeadline,
    rightToSeguroDesemprego,
    workedDaysFinalMonth,
    totalServiceYears: serviceYears,
    noticeDays,
    projectedEndDate: projectedEndDateStr,
  };
}
