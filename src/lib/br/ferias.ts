import { calculateInss, calculateIrrf } from './decimoTerceiro';

export interface CalculationLineItem {
  key: string;
  label: string;
  amount: number;
  formula: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface FeriasInput {
  salary: number;
  variablePayAverage?: number;
  unjustifiedAbsences?: number; // 0 to 50
  daysRequested?: number; // default 30 or days remaining after abono
  sellAbono?: boolean; // sell 10 days (abono pecuniário)
  advance13th?: boolean; // advance 1st installment of 13th
  dependentsCount?: number;
}

export interface FeriasDeductions {
  inss: number;
  irrf: number;
  total: number;
}

export interface FeriasResult {
  baseSalary: number;
  vacationDaysAllowed: number;
  entitlementDays: number;
  vacationDaysTaken: number;
  abonoDays: number;
  vacationGross: number;
  tercoConstitucional: number;
  abonoGross: number;
  abonoTerco: number;
  advance13thGross: number;
  totalGross: number;
  inssDiscount: number;
  irrfDiscount: number;
  deductions: FeriasDeductions;
  totalDeductions: number;
  totalNet: number;
  paymentDeadline: string;
  items: CalculationLineItem[];
}

export function getVacationDaysByAbsences(absences: number): number {
  if (absences <= 5) return 30;
  if (absences <= 14) return 24;
  if (absences <= 23) return 18;
  if (absences <= 32) return 12;
  return 0; // Lost right to vacation (Art. 130 CLT)
}

export function calculateFerias(input: FeriasInput): FeriasResult {
  const {
    salary,
    variablePayAverage = 0,
    unjustifiedAbsences = 0,
    sellAbono = false,
    advance13th = false,
    dependentsCount = 0,
  } = input;

  const baseSalary = salary + variablePayAverage;
  const vacationDaysAllowed = getVacationDaysByAbsences(unjustifiedAbsences);
  const entitlementDays = vacationDaysAllowed;
  const dailyRate = baseSalary / 30;

  // Abono pecuniário (sell 1/3, usually 10 days if 30 days allowed - Art. 143 CLT)
  let abonoDays = 0;
  let vacationDaysTaken = vacationDaysAllowed;

  if (sellAbono && vacationDaysAllowed >= 12) {
    abonoDays = Math.min(10, Math.floor(vacationDaysAllowed / 3));
    vacationDaysTaken = vacationDaysAllowed - abonoDays;
  }

  // 1. Férias gozadas + 1/3
  const vacationGross = Math.round(vacationDaysTaken * dailyRate * 100) / 100;
  const tercoConstitucional = Math.round((vacationGross / 3) * 100) / 100;
  const taxableVacationGross = Math.round((vacationGross + tercoConstitucional) * 100) / 100;

  // 2. Abono pecuniário (exempt from INSS and IRRF - Art. 144 CLT e Lei 7.713/88)
  let abonoGross = 0;
  let abonoTerco = 0;
  if (abonoDays > 0) {
    abonoGross = Math.round(abonoDays * dailyRate * 100) / 100;
    abonoTerco = Math.round((abonoGross / 3) * 100) / 100;
  }

  // 3. Adiantamento 1ª parcela do 13º (50% do salário, no deductions - Art. 138 CLT / Lei 4.749/65)
  let advance13thGross = 0;
  if (advance13th) {
    advance13thGross = Math.round(baseSalary * 0.5 * 100) / 100;
  }

  // Deductions: only apply to taxable vacation (férias + 1/3), NEVER on abono or 13th advance
  const inssDiscount = taxableVacationGross > 0 ? calculateInss(taxableVacationGross) : 0;
  const irrfDiscount =
    taxableVacationGross > 0
      ? calculateIrrf(taxableVacationGross, inssDiscount, dependentsCount)
      : 0;
  const totalDeductions = Math.round((inssDiscount + irrfDiscount) * 100) / 100;

  const totalGross =
    Math.round(
      (taxableVacationGross + abonoGross + abonoTerco + advance13thGross) * 100
    ) / 100;

  const totalNet = Math.max(0, Math.round((totalGross - totalDeductions) * 100) / 100);

  const items: CalculationLineItem[] = [];

  if (vacationGross > 0) {
    items.push({
      key: 'ferias_gozadas',
      label: `Remuneração de Férias (${vacationDaysTaken} dias)`,
      amount: vacationGross,
      formula: `${vacationDaysTaken} dias × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: 'Art. 129 e 130 da CLT',
    });
    items.push({
      key: 'terco_constitucional',
      label: '1/3 Constitucional de Férias',
      amount: tercoConstitucional,
      formula: `R$ ${vacationGross.toFixed(2)} ÷ 3`,
      legalArticle: 'Art. 7º, XVII da Constituição Federal',
    });
  }

  if (abonoGross > 0) {
    items.push({
      key: 'abono_pecuniario',
      label: `Abono Pecuniário (${abonoDays} dias - Isento de INSS/IRRF)`,
      amount: abonoGross,
      formula: `${abonoDays} dias × (R$ ${baseSalary.toFixed(2)} ÷ 30)`,
      legalArticle: 'Art. 143 da CLT',
    });
    items.push({
      key: 'terco_abono',
      label: '1/3 Constitucional sobre Abono Pecuniário (Isento)',
      amount: abonoTerco,
      formula: `R$ ${abonoGross.toFixed(2)} ÷ 3`,
      legalArticle: 'Art. 7º, XVII da CF e Art. 144 da CLT',
    });
  }

  if (advance13thGross > 0) {
    items.push({
      key: 'adiantamento_13',
      label: 'Adiantamento da 1ª Parcela do 13º Salário (50%)',
      amount: advance13thGross,
      formula: `50% de R$ ${baseSalary.toFixed(2)}`,
      legalArticle: 'Art. 2º, § 2º da Lei 4.749/1965',
    });
  }

  if (inssDiscount > 0) {
    items.push({
      key: 'inss_ferias',
      label: 'Desconto INSS sobre Férias + 1/3',
      amount: inssDiscount,
      formula: 'Tabela progressiva sobre férias + terço (abono isento)',
      legalArticle: 'Tabela INSS 2026',
      isDeduction: true,
    });
  }

  if (irrfDiscount > 0) {
    items.push({
      key: 'irrf_ferias',
      label: 'Desconto IRRF sobre Férias + 1/3',
      amount: irrfDiscount,
      formula: 'Tabela progressiva sobre base (férias - INSS - dependentes)',
      legalArticle: 'Tabela IRRF 2026',
      isDeduction: true,
    });
  }

  return {
    baseSalary,
    vacationDaysAllowed,
    entitlementDays,
    vacationDaysTaken,
    abonoDays,
    vacationGross,
    tercoConstitucional,
    abonoGross,
    abonoTerco,
    advance13thGross,
    totalGross,
    inssDiscount,
    irrfDiscount,
    deductions: {
      inss: inssDiscount,
      irrf: irrfDiscount,
      total: totalDeductions,
    },
    totalDeductions,
    totalNet,
    paymentDeadline: 'Até 2 dias antes do início do período de férias (Art. 145 da CLT)',
    items,
  };
}
