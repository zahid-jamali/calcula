import { mx2026 } from '@/rules/mx/2026';
import {
  round2,
  completedYears,
  lastAnniversary,
  daysInclusive,
  vacationDaysForYear,
  dailyFromInput,
} from './common';

export interface MxVacacionesInput {
  salaryMode?: 'monthly' | 'daily';
  salary: number;
  startDate: string;
  referenceDate: string;
  primaVacacionalRate?: number;
}

export interface MxVacacionesResult {
  dailySalary: number;
  completedYears: number;
  /** Days earned for the last completed year of service (0 if less than 1 year) */
  daysEarned: number;
  /** Days that will be earned at the next anniversary */
  nextYearDays: number;
  /** Proportional days accrued in the current (incomplete) year */
  proportionalDays: number;
  vacationPay: number;
  primaRate: number;
  primaVacacional: number;
  total: number;
  table: Array<{ year: number; days: number; isCurrent: boolean }>;
}

export function calculateMxVacaciones(input: MxVacacionesInput): MxVacacionesResult {
  const { salaryMode = 'monthly', salary, startDate, referenceDate } = input;
  const primaRate = Math.max(mx2026.primaVacacionalRate.value, input.primaVacacionalRate ?? 0.25);
  const sd = round2(dailyFromInput(salaryMode, salary));
  const years = completedYears(startDate, referenceDate);
  const daysEarned = vacationDaysForYear(years);
  const nextYearDays = vacationDaysForYear(years + 1);
  const sinceAnniversary = Math.min(
    365,
    daysInclusive(lastAnniversary(startDate, referenceDate), referenceDate)
  );
  const proportionalDays = round2((nextYearDays * sinceAnniversary) / 365);

  const vacationPay = round2(daysEarned * sd);
  const primaVacacional = round2(vacationPay * primaRate);

  const table: MxVacacionesResult['table'] = [];
  for (let y = 1; y <= 35; y++) {
    table.push({ year: y, days: vacationDaysForYear(y), isCurrent: y === Math.max(1, years) });
  }

  return {
    dailySalary: sd,
    completedYears: years,
    daysEarned,
    nextYearDays,
    proportionalDays,
    vacationPay,
    primaRate,
    primaVacacional,
    total: round2(vacationPay + primaVacacional),
    table,
  };
}
