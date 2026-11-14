import { getRules } from '@/rules';

export interface SeguroDesempregoInput {
  lastThreeSalaries: number[];
  requestNumber: 1 | 2 | 3;
  monthsWorked: number;
  date?: string | Date;
}

export interface SeguroDesempregoResult {
  isEligible: boolean;
  averageSalary: number;
  installmentValue: number;
  installmentsCount: number;
  totalBenefit: number;
  bracketUsed: string;
  reasonIfNotEligible?: string;
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates Seguro-Desemprego benefits in Brazil for 2026.
 * Complies with Lei 7.998/1990 and Lei 13.134/2015.
 */
export function calculateSeguroDesemprego(input: SeguroDesempregoInput): SeguroDesempregoResult {
  const { lastThreeSalaries, requestNumber, monthsWorked, date } = input;
  const rules = getRules('br', date);

  // Validate salaries
  const validSalaries = lastThreeSalaries.filter((s) => typeof s === 'number' && !isNaN(s) && s > 0);

  if (validSalaries.length === 0) {
    return {
      isEligible: false,
      averageSalary: 0,
      installmentValue: 0,
      installmentsCount: 0,
      totalBenefit: 0,
      bracketUsed: 'nenhuma',
      reasonIfNotEligible: 'É necessário informar ao menos um salário válido dos últimos meses trabalhados.',
    };
  }

  // Calculate average salary of the provided salaries (1, 2, or 3 months)
  const sumSalaries = validSalaries.reduce((acc, curr) => acc + curr, 0);
  const averageSalary = round(sumSalaries / validSalaries.length);

  // Determine eligibility and number of installments
  let installmentsCount = 0;
  let reasonIfNotEligible: string | undefined;

  if (requestNumber === 1) {
    if (monthsWorked < 12) {
      reasonIfNotEligible = `Para a 1ª solicitação, são necessários pelo menos 12 meses de vínculo nos últimos 18 meses. Meses trabalhados informados: ${monthsWorked}.`;
    } else if (monthsWorked <= 23) {
      installmentsCount = 4;
    } else {
      installmentsCount = 5;
    }
  } else if (requestNumber === 2) {
    if (monthsWorked < 9) {
      reasonIfNotEligible = `Para a 2ª solicitação, são necessários pelo menos 9 meses de vínculo nos últimos 12 meses. Meses trabalhados informados: ${monthsWorked}.`;
    } else if (monthsWorked <= 11) {
      installmentsCount = 3;
    } else if (monthsWorked <= 23) {
      installmentsCount = 4;
    } else {
      installmentsCount = 5;
    }
  } else {
    // 3rd or more requests
    if (monthsWorked < 6) {
      reasonIfNotEligible = `A partir da 3ª solicitação, são necessários pelo menos 6 meses de vínculo. Meses trabalhados informados: ${monthsWorked}.`;
    } else if (monthsWorked <= 11) {
      installmentsCount = 3;
    } else if (monthsWorked <= 23) {
      installmentsCount = 4;
    } else {
      installmentsCount = 5;
    }
  }

  const isEligible = installmentsCount > 0;

  // Calculate installment value based on official brackets
  const minWage = rules.minimumWage.value; // R$ 1.518,00
  const sdConfig = rules.seguroDesemprego.value;
  const bracket1Limit = sdConfig.brackets[0].upTo; // 2074.47
  const bracket2Limit = sdConfig.brackets[1].upTo; // 3457.49
  const teto = sdConfig.maxInstallment; // 2351.09

  let rawInstallment = 0;
  let bracketUsed = '';

  if (averageSalary <= bracket1Limit) {
    rawInstallment = averageSalary * 0.8;
    bracketUsed = 'Até R$ 2.074,47 (80%)';
  } else if (averageSalary <= bracket2Limit) {
    rawInstallment = 1659.58 + (averageSalary - bracket1Limit) * 0.5;
    bracketUsed = 'De R$ 2.074,48 a R$ 3.457,49 (R$ 1.659,58 + 50%)';
  } else {
    rawInstallment = teto;
    bracketUsed = 'Acima de R$ 3.457,49 (Teto R$ 2.351,09)';
  }

  // Constitutional floor: cannot be less than minimum wage
  if (rawInstallment < minWage) {
    rawInstallment = minWage;
    bracketUsed = `${bracketUsed} [Piso Salário Mínimo R$ ${minWage.toFixed(2)}]`;
  }

  const finalInstallment = isEligible ? round(rawInstallment) : 0;
  const totalBenefit = isEligible ? round(finalInstallment * installmentsCount) : 0;

  return {
    isEligible,
    averageSalary,
    installmentValue: finalInstallment,
    installmentsCount,
    totalBenefit,
    bracketUsed: isEligible ? bracketUsed : 'não elegível',
    ...(reasonIfNotEligible ? { reasonIfNotEligible } : {}),
  };
}
