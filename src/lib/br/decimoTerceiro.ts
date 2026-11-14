import { getRules } from '@/rules';

export interface CalculationLineItem {
  key: string;
  label: string;
  amount: number;
  formula: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface DecimoTerceiroInput {
  salary: number;
  variablePayAverage?: number;
  monthsWorked: number; // 1 to 12
  dependentsCount?: number;
  isProportional?: boolean; // single payout for mid-year termination or single installment
}

export interface DecimoTerceiroDeductions {
  inss: number;
  irrf: number;
  total: number;
}

export interface DecimoTerceiroPaymentDeadlines {
  firstInstallment: string;
  secondInstallment: string;
}

export interface DecimoTerceiroResult {
  baseSalary: number;
  monthsWorked: number;
  totalGross: number;
  firstInstallment: number;
  secondInstallmentGross: number;
  inssDiscount: number;
  irrfDiscount: number;
  secondInstallmentNet: number;
  totalNet: number;
  deductions: DecimoTerceiroDeductions;
  paymentDeadlines: DecimoTerceiroPaymentDeadlines;
  firstInstallmentDeadline: string;
  secondInstallmentDeadline: string;
  items: CalculationLineItem[];
  isProportional: boolean;
}

/**
 * Calculates progressive INSS tax for Brazil (2026 rules)
 */
export function calculateInss(gross: number): number {
  if (gross <= 0) return 0;
  const rules = getRules('br');
  const ceiling = rules.inssCeiling.value;
  const cappedGross = Math.min(gross, ceiling);
  let totalInss = 0;

  for (const bracket of rules.inssBrackets.value) {
    if (cappedGross <= bracket.max) {
      totalInss = Math.max(0, cappedGross * bracket.rate - bracket.deduction);
      break;
    }
  }

  // If above last bracket max, use the last bracket's ceiling tax
  if (cappedGross >= ceiling) {
    const last = rules.inssBrackets.value[rules.inssBrackets.value.length - 1];
    totalInss = ceiling * last.rate - last.deduction;
  }

  return Math.round(totalInss * 100) / 100;
}

/**
 * Calculates progressive IRRF tax for Brazil (2026 rules)
 */
export function calculateIrrf(
  gross: number,
  inssDiscount: number,
  dependentsCount: number = 0,
  preferSimplified: boolean = true
): number {
  if (gross <= 0) return 0;
  const rules = getRules('br');
  const legalDeductions = inssDiscount + Math.max(0, dependentsCount) * rules.irrfDeductionPerDependent.value;
  const simplifiedDeduction = rules.irrfSimplifiedDeduction.value;

  const deductionUsed = preferSimplified
    ? Math.max(legalDeductions, simplifiedDeduction)
    : legalDeductions;

  const baseTaxable = Math.max(0, gross - deductionUsed);

  let irrf = 0;
  for (const bracket of rules.irrfBrackets.value) {
    if (baseTaxable <= bracket.max) {
      irrf = Math.max(0, baseTaxable * bracket.rate - bracket.deduction);
      break;
    }
  }

  return Math.round(irrf * 100) / 100;
}

export function calculateDecimoTerceiro(input: DecimoTerceiroInput): DecimoTerceiroResult {
  const {
    salary,
    variablePayAverage = 0,
    monthsWorked,
    dependentsCount = 0,
    isProportional = false,
  } = input;

  const safeMonths = Math.max(1, Math.min(12, Math.round(monthsWorked)));
  const baseSalary = salary + variablePayAverage;

  // Total gross proportional: (base * months) / 12
  const totalGross = Math.round(((baseSalary * safeMonths) / 12) * 100) / 100;

  // Deductions calculated on full gross 13th
  const inssDiscount = calculateInss(totalGross);
  const irrfDiscount = calculateIrrf(totalGross, inssDiscount, dependentsCount);
  const totalDeductionsAmount = Math.round((inssDiscount + irrfDiscount) * 100) / 100;

  let firstInstallment = 0;
  let secondInstallmentGross = totalGross;
  let secondInstallmentNet = 0;
  let totalNet = 0;

  const items: CalculationLineItem[] = [];

  if (isProportional) {
    // Single proportional payout (e.g. termination or single payment)
    firstInstallment = 0;
    secondInstallmentGross = totalGross;
    secondInstallmentNet = Math.max(0, Math.round((totalGross - totalDeductionsAmount) * 100) / 100);
    totalNet = secondInstallmentNet;

    items.push({
      key: 'decimo_proporcional',
      label: `13º Salário Proporcional (${safeMonths}/12)`,
      amount: totalGross,
      formula: `(R$ ${baseSalary.toFixed(2)} ÷ 12) × ${safeMonths} meses`,
      legalArticle: 'Lei 4.090/1962 e Lei 4.749/1965',
    });
  } else {
    // Standard two-installment model
    // 1st installment (paid between Feb 1 and Nov 30): 50% of gross, NO deductions
    firstInstallment = Math.round((totalGross * 0.5) * 100) / 100;

    // 2nd installment (paid by Dec 20): remaining gross minus all deductions
    secondInstallmentGross = Math.round((totalGross - firstInstallment) * 100) / 100;
    secondInstallmentNet = Math.max(
      0,
      Math.round((secondInstallmentGross - inssDiscount - irrfDiscount) * 100) / 100
    );
    totalNet = Math.round((firstInstallment + secondInstallmentNet) * 100) / 100;

    items.push({
      key: 'primeira_parcela',
      label: `1ª Parcela do 13º Salário (50% adiantamento sem descontos)`,
      amount: firstInstallment,
      formula: `50% de R$ ${totalGross.toFixed(2)}`,
      legalArticle: 'Lei 4.749/1965, Art. 2º',
    });

    items.push({
      key: 'segunda_parcela',
      label: `2ª Parcela do 13º Salário (saldo bruto)`,
      amount: secondInstallmentGross,
      formula: `R$ ${totalGross.toFixed(2)} - R$ ${firstInstallment.toFixed(2)}`,
      legalArticle: 'Lei 4.090/1962, Art. 1º',
    });
  }

  if (inssDiscount > 0) {
    items.push({
      key: 'inss_13',
      label: 'Desconto INSS sobre 13º Salário',
      amount: inssDiscount,
      formula: 'Tributação exclusiva na fonte sobre valor bruto integral',
      legalArticle: 'Art. 7º da Lei 8.620/1993',
      isDeduction: true,
    });
  }

  if (irrfDiscount > 0) {
    items.push({
      key: 'irrf_13',
      label: 'Desconto IRRF sobre 13º Salário',
      amount: irrfDiscount,
      formula: 'Tabela progressiva s/ base (13º bruto - INSS - dependentes)',
      legalArticle: 'Art. 638 do RIR/2018 (Decreto 9.580/2018)',
      isDeduction: true,
    });
  }

  const firstInstallmentDeadline = isProportional
    ? 'Pagamento proporcional único na rescisão'
    : 'Até 30 de novembro (Lei 4.749/1965)';
  const secondInstallmentDeadline = isProportional
    ? 'No prazo da rescisão contratual'
    : 'Até 20 de dezembro (Lei 4.749/1965)';

  return {
    baseSalary,
    monthsWorked: safeMonths,
    totalGross,
    firstInstallment,
    secondInstallmentGross,
    inssDiscount,
    irrfDiscount,
    secondInstallmentNet,
    totalNet,
    deductions: {
      inss: inssDiscount,
      irrf: irrfDiscount,
      total: totalDeductionsAmount,
    },
    paymentDeadlines: {
      firstInstallment: firstInstallmentDeadline,
      secondInstallment: secondInstallmentDeadline,
    },
    firstInstallmentDeadline,
    secondInstallmentDeadline,
    items,
    isProportional,
  };
}
