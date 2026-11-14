import { getRules } from '@/rules';

export interface SalarioLiquidoInput {
  grossSalary: number;
  dependentsCount?: number;
  otherDiscounts?: number;
  discountVT?: boolean;
  vtExpense?: number;
  healthPlan?: number;
  privatePension?: number;
  irrfMethod?: 'best' | 'legal' | 'simplified';
  date?: string | Date;
}

export interface InssBracketDetail {
  bracket: number;
  min: number;
  max: number;
  rate: number;
  baseCalculated: number;
  contribution: number;
}

export interface IrrfCalculationDetail {
  method: 'legal' | 'simplified';
  deductionsApplied: number;
  taxableBase: number;
  rate: number;
  bracketDeduction: number;
  tax: number;
  legalTax: number;
  simplifiedTax: number;
}

export interface SalarioLiquidoResult {
  grossSalary: number;
  inss: number;
  inssBrackets: InssBracketDetail[];
  irrf: number;
  irrfDetail: IrrfCalculationDetail;
  vtDiscount: number;
  healthPlan: number;
  privatePension: number;
  otherDiscounts: number;
  totalDiscounts: number;
  netSalary: number;
  effectiveRate: number; // percentage (0 - 100)
  effectiveInssRate: number;
  effectiveIrrfRate: number;
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates progressive INSS with detailed bracket breakdown for Brazil.
 */
export function calculateInss(grossSalary: number, date?: string | Date): {
  totalInss: number;
  brackets: InssBracketDetail[];
} {
  const rules = getRules('br', date);
  const brackets = rules.inssBrackets.value;
  const ceiling = rules.inssCeiling.value;

  if (grossSalary <= 0) {
    return {
      totalInss: 0,
      brackets: brackets.map((b, idx) => ({
        bracket: idx + 1,
        min: idx === 0 ? 0 : brackets[idx - 1].max,
        max: b.max,
        rate: b.rate,
        baseCalculated: 0,
        contribution: 0,
      })),
    };
  }

  const cappedSalary = Math.min(grossSalary, ceiling);
  let totalInss = 0;
  const bracketDetails: InssBracketDetail[] = [];

  let previousLimit = 0;
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    const currentLimit = bracket.max;

    let baseInBracket = 0;
    if (cappedSalary > previousLimit) {
      baseInBracket = Math.min(cappedSalary, currentLimit) - previousLimit;
    }

    const contribution = round(baseInBracket * bracket.rate);
    totalInss += contribution;

    bracketDetails.push({
      bracket: i + 1,
      min: previousLimit,
      max: currentLimit,
      rate: bracket.rate,
      baseCalculated: round(baseInBracket),
      contribution,
    });

    previousLimit = currentLimit;
  }

  return {
    totalInss: round(totalInss),
    brackets: bracketDetails,
  };
}

/**
 * Calculates IRRF based on a taxable base amount.
 */
function computeIrrfForBase(base: number, date?: string | Date): {
  tax: number;
  rate: number;
  bracketDeduction: number;
} {
  const rules = getRules('br', date);
  const brackets = rules.irrfBrackets.value;

  if (base <= 0) {
    return { tax: 0, rate: 0, bracketDeduction: 0 };
  }

  for (const bracket of brackets) {
    if (base <= bracket.max) {
      const rawTax = base * bracket.rate - bracket.deduction;
      return {
        tax: Math.max(0, round(rawTax)),
        rate: bracket.rate,
        bracketDeduction: bracket.deduction,
      };
    }
  }

  // Fallback for amounts exceeding last threshold
  const lastBracket = brackets[brackets.length - 1];
  const rawTax = base * lastBracket.rate - lastBracket.deduction;
  return {
    tax: Math.max(0, round(rawTax)),
    rate: lastBracket.rate,
    bracketDeduction: lastBracket.deduction,
  };
}

/**
 * Calculates Net Salary (Salário Líquido) in Brazil for 2026.
 */
export function calculateSalarioLiquido(input: SalarioLiquidoInput): SalarioLiquidoResult {
  const {
    grossSalary,
    dependentsCount = 0,
    otherDiscounts = 0,
    discountVT = false,
    vtExpense,
    healthPlan = 0,
    privatePension = 0,
    irrfMethod = 'best',
    date,
  } = input;

  const rules = getRules('br', date);

  if (grossSalary <= 0) {
    const emptyInss = calculateInss(0, date);
    return {
      grossSalary: 0,
      inss: 0,
      inssBrackets: emptyInss.brackets,
      irrf: 0,
      irrfDetail: {
        method: 'simplified',
        deductionsApplied: 0,
        taxableBase: 0,
        rate: 0,
        bracketDeduction: 0,
        tax: 0,
        legalTax: 0,
        simplifiedTax: 0,
      },
      vtDiscount: 0,
      healthPlan: 0,
      privatePension: 0,
      otherDiscounts: 0,
      totalDiscounts: 0,
      netSalary: 0,
      effectiveRate: 0,
      effectiveInssRate: 0,
      effectiveIrrfRate: 0,
    };
  }

  // 1. INSS progressive calculation
  const inssResult = calculateInss(grossSalary, date);
  const inss = inssResult.totalInss;

  // 2. IRRF calculation
  const dependentDeductionAmount = dependentsCount * rules.irrfDeductionPerDependent.value;
  const legalDeductions = inss + dependentDeductionAmount + privatePension;
  const baseLegal = Math.max(0, grossSalary - legalDeductions);
  const legalTaxResult = computeIrrfForBase(baseLegal, date);

  const simplifiedDeductionAmount = rules.irrfSimplifiedDeduction.value;
  const baseSimplified = Math.max(0, grossSalary - simplifiedDeductionAmount);
  const simplifiedTaxResult = computeIrrfForBase(baseSimplified, date);

  let selectedMethod: 'legal' | 'simplified' = 'legal';
  if (irrfMethod === 'simplified') {
    selectedMethod = 'simplified';
  } else if (irrfMethod === 'legal') {
    selectedMethod = 'legal';
  } else {
    // 'best': whichever produces lower tax
    if (simplifiedTaxResult.tax < legalTaxResult.tax) {
      selectedMethod = 'simplified';
    } else {
      selectedMethod = 'legal';
    }
  }

  const chosenTaxResult = selectedMethod === 'simplified' ? simplifiedTaxResult : legalTaxResult;
  const deductionsApplied = selectedMethod === 'simplified' ? simplifiedDeductionAmount : legalDeductions;
  const taxableBase = selectedMethod === 'simplified' ? baseSimplified : baseLegal;
  const irrf = chosenTaxResult.tax;

  // 3. Vale Transporte (VT)
  let vtDiscount = 0;
  if (discountVT) {
    const maxVTByLaw = round(grossSalary * 0.06);
    vtDiscount = vtExpense !== undefined ? Math.min(maxVTByLaw, vtExpense) : maxVTByLaw;
  }

  // 4. Totals and Net Salary
  const totalDiscounts = round(
    inss + irrf + vtDiscount + healthPlan + privatePension + otherDiscounts
  );
  const netSalary = Math.max(0, round(grossSalary - totalDiscounts));

  const effectiveRate = grossSalary > 0 ? round((totalDiscounts / grossSalary) * 100) : 0;
  const effectiveInssRate = grossSalary > 0 ? round((inss / grossSalary) * 100) : 0;
  const effectiveIrrfRate = grossSalary > 0 ? round((irrf / grossSalary) * 100) : 0;

  return {
    grossSalary: round(grossSalary),
    inss,
    inssBrackets: inssResult.brackets,
    irrf,
    irrfDetail: {
      method: selectedMethod,
      deductionsApplied: round(deductionsApplied),
      taxableBase: round(taxableBase),
      rate: chosenTaxResult.rate,
      bracketDeduction: chosenTaxResult.bracketDeduction,
      tax: irrf,
      legalTax: legalTaxResult.tax,
      simplifiedTax: simplifiedTaxResult.tax,
    },
    vtDiscount: round(vtDiscount),
    healthPlan: round(healthPlan),
    privatePension: round(privatePension),
    otherDiscounts: round(otherDiscounts),
    totalDiscounts,
    netSalary,
    effectiveRate,
    effectiveInssRate,
    effectiveIrrfRate,
  };
}

/**
 * Reverse mode: Calculates the gross salary needed to achieve a target net salary.
 * Uses binary search (bisection) with high numerical precision.
 */
export function calculateGrossFromNet(
  targetNetSalary: number,
  options: Omit<SalarioLiquidoInput, 'grossSalary'> = {}
): number {
  if (targetNetSalary <= 0) return 0;

  let low = targetNetSalary;
  let high = Math.max(targetNetSalary * 2.5 + 5000, 10000);

  // Ensure high bracket covers the target
  while (calculateSalarioLiquido({ grossSalary: high, ...options }).netSalary < targetNetSalary) {
    high *= 2;
  }

  for (let iter = 0; iter < 70; iter++) {
    const mid = (low + high) / 2;
    const currentNet = calculateSalarioLiquido({ grossSalary: mid, ...options }).netSalary;

    if (Math.abs(currentNet - targetNetSalary) < 0.001) {
      low = mid;
      high = mid;
      break;
    }

    if (currentNet < targetNetSalary) {
      low = mid;
    } else {
      high = mid;
    }
  }

  const candidate = round((low + high) / 2);

  // Fine check adjacent pennies to ensure closest match
  const offsets = [-0.02, -0.01, 0, 0.01, 0.02];
  let bestGross = candidate;
  let minDiff = Math.abs(calculateSalarioLiquido({ grossSalary: candidate, ...options }).netSalary - targetNetSalary);

  for (const off of offsets) {
    const testGross = round(candidate + off);
    const diff = Math.abs(calculateSalarioLiquido({ grossSalary: testGross, ...options }).netSalary - targetNetSalary);
    if (diff < minDiff) {
      minDiff = diff;
      bestGross = testGross;
    }
  }

  return bestGross;
}
