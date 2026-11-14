import { getRules } from '@/rules';
import { BrazilRules2026 } from '@/rules/types';

/**
 * Safely parse an ISO date string (YYYY-MM-DD) into a Date object at noon UTC/local
 * to prevent timezone boundary bugs.
 */
export function parseIsoDate(dateStr: string): Date {
  const parts = dateStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  return new Date(year, month, day, 12, 0, 0);
}

/**
 * Format a Date object to YYYY-MM-DD string.
 */
export function formatIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Add days to a Date.
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Calculate full completed years between two dates.
 */
export function calculateCompletedYears(startDate: string, endDate: string): number {
  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);

  let years = end.getFullYear() - start.getFullYear();
  const m = end.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && end.getDate() < start.getDate())) {
    years--;
  }
  return Math.max(0, years);
}

/**
 * Calculates notice days under Lei 12.506/2011:
 * 30 days minimum + 3 days per completed year of service, up to 90 days max.
 */
export function calculateNoticeDays(completedYears: number): number {
  return Math.min(90, 30 + completedYears * 3);
}

/**
 * Calculate INSS progressive contribution for Brazil (2026 rules).
 */
export function calculateBrInss(grossSalary: number, rules?: BrazilRules2026): number {
  if (grossSalary <= 0) return 0;

  const brRules = rules || getRules('br');
  const brackets = brRules.inssBrackets.value;
  const ceiling = brRules.inssCeiling.value;

  const cappedSalary = Math.min(grossSalary, ceiling);

  let inss = 0;
  for (const bracket of brackets) {
    if (cappedSalary <= bracket.max) {
      inss = cappedSalary * bracket.rate - bracket.deduction;
      break;
    }
  }

  // If salary is at or above ceiling, use the highest bracket
  if (cappedSalary >= ceiling) {
    const topBracket = brackets[brackets.length - 1];
    inss = ceiling * topBracket.rate - topBracket.deduction;
  }

  return Math.max(0, Math.round(inss * 100) / 100);
}

/**
 * Calculate IRRF progressive withholding tax for Brazil (2026 rules).
 * Deducts INSS contribution and R$ 189.59 per dependent.
 */
export function calculateBrIrrf(
  grossTaxable: number,
  inssDeduction: number,
  dependentsCount = 0,
  rules?: BrazilRules2026
): number {
  if (grossTaxable <= 0) return 0;

  const brRules = rules || getRules('br');
  const dependentRate = brRules.irrfDeductionPerDependent.value;
  const brackets = brRules.irrfBrackets.value;

  const totalDeductions = inssDeduction + Math.max(0, dependentsCount) * dependentRate;
  const taxableBase = Math.max(0, grossTaxable - totalDeductions);

  let irrf = 0;
  for (const bracket of brackets) {
    if (taxableBase <= bracket.max) {
      irrf = taxableBase * bracket.rate - bracket.deduction;
      break;
    }
  }

  return Math.max(0, Math.round(irrf * 100) / 100);
}

/**
 * Count proportional 13th salary months (1/12 per month worked >= 15 days in termination calendar year).
 */
export function calculate13thMonths(startDate: string, effectiveEndDate: Date): number {
  const start = parseIsoDate(startDate);
  const end = effectiveEndDate;
  const terminationYear = end.getFullYear();

  const yearStart = new Date(terminationYear, 0, 1, 12, 0, 0);
  const actualStart = start > yearStart ? start : yearStart;

  if (actualStart > end) return 0;

  let months = 0;
  const startMonth = actualStart.getMonth();
  const endMonth = end.getMonth();

  for (let m = startMonth; m <= endMonth; m++) {
    const daysInMonth = new Date(terminationYear, m + 1, 0).getDate();
    const firstDay = m === startMonth ? actualStart.getDate() : 1;
    const lastDay = m === endMonth ? end.getDate() : daysInMonth;
    const workedDaysInMonth = lastDay - firstDay + 1;

    if (workedDaysInMonth >= 15) {
      months++;
    }
  }

  return Math.min(12, Math.max(0, months));
}

/**
 * Count proportional vacation months in the current period aquisitivo.
 * Fraction >= 15 days counts as a full month (Art. 146, parágrafo único da CLT).
 */
export function calculateProportionalVacationMonths(startDate: string, effectiveEndDate: Date): number {
  const start = parseIsoDate(startDate);
  const end = effectiveEndDate;
  if (start > end) return 0;

  // Advance to the current period aquisitivo anniversary
  let currentPeriodStart = new Date(start);
  while (true) {
    const nextAnniversary = new Date(currentPeriodStart);
    nextAnniversary.setFullYear(nextAnniversary.getFullYear() + 1);
    if (nextAnniversary <= end) {
      currentPeriodStart = nextAnniversary;
    } else {
      break;
    }
  }

  let months = 0;
  let cursor = new Date(currentPeriodStart);

  while (true) {
    const nextMonth = new Date(cursor);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    if (nextMonth <= end) {
      months++;
      cursor = nextMonth;
    } else {
      // Remaining fractional period
      const diffTime = end.getTime() - cursor.getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays >= 15) {
        months++;
      }
      break;
    }
  }

  return Math.min(12, Math.max(0, months));
}
