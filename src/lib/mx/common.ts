import { mx2026 } from '@/rules/mx/2026';
import type { RateBracket } from '@/rules/types';

export const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const round2 = (n: number): number => Math.round((n + Number.EPSILON) * 100) / 100;

/** Parses an ISO date (YYYY-MM-DD) as a UTC timestamp, avoiding timezone drift. */
export function parseIso(date: string): number {
  const [y, m, d] = date.split('-').map(Number);
  if (!y || !m || !d) return NaN;
  return Date.UTC(y, m - 1, d);
}

export function isoYear(date: string): number {
  return Number(date.slice(0, 4));
}

/** Calendar days between two ISO dates, both inclusive. Returns 0 if end < start. */
export function daysInclusive(start: string, end: string): number {
  const s = parseIso(start);
  const e = parseIso(end);
  if (isNaN(s) || isNaN(e) || e < s) return 0;
  return Math.round((e - s) / MS_PER_DAY) + 1;
}

/** Completed years of service between two dates (anniversary based). */
export function completedYears(start: string, end: string): number {
  const [sy, sm, sd] = start.split('-').map(Number);
  const [ey, em, ed] = end.split('-').map(Number);
  if (!sy || !ey) return 0;
  let years = ey - sy;
  if (em < sm || (em === sm && ed < sd)) years -= 1;
  return Math.max(0, years);
}

/** ISO date of the last anniversary on or before `end`. */
export function lastAnniversary(start: string, end: string): string {
  const years = completedYears(start, end);
  const [sy, sm, sd] = start.split('-').map(Number);
  const y = sy + years;
  // Handle 29-Feb anniversaries in non-leap years
  const date = new Date(Date.UTC(y, sm - 1, sd));
  if (date.getUTCMonth() !== sm - 1) return `${y}-${String(sm).padStart(2, '0')}-28`;
  return `${y}-${String(sm).padStart(2, '0')}-${String(sd).padStart(2, '0')}`;
}

/** Exact years of service as a decimal (days / 365). */
export function serviceYearsDecimal(start: string, end: string): number {
  const days = daysInclusive(start, end);
  return days / 365;
}

/**
 * Vacation days for a given year of service (LFT art. 76, reform in force since 1-Jan-2023).
 * year 1 = 12, 2 = 14, 3 = 16, 4 = 18, 5 = 20, 6-10 = 22, 11-15 = 24, ... (+2 every 5 years).
 */
export function vacationDaysForYear(year: number): number {
  if (year < 1) return 0;
  const row = mx2026.vacationTable.value.find((r) => year >= r.fromYear && year <= r.toYear);
  if (row) return row.days;
  // Beyond the published table the same rule continues: +2 days per 5-year block
  return 22 + 2 * Math.floor((year - 6) / 5);
}

/** UMA values valid on a given date (UMA changes every 1 February). */
export function getUma(date: string): { daily: number; monthly: number; annual: number } {
  const list = [...mx2026.uma.value].sort((a, b) => a.from.localeCompare(b.from));
  let current = list[0].value;
  for (const item of list) {
    if (date >= item.from) current = item.value;
  }
  return current;
}

export function getMinimumWage(zone: MxZone = 'general'): number {
  return zone === 'frontera'
    ? mx2026.minimumWageBorderDaily.value
    : mx2026.minimumWageGeneralDaily.value;
}

export type MxZone = 'general' | 'frontera';

export function applyBrackets(base: number, table: RateBracket[]): number {
  if (base <= 0) return 0;
  const row =
    table.find((b) => base >= b.lower && (b.upper === null || base <= b.upper)) ??
    table[table.length - 1];
  return round2(row.fixedFee + Math.max(0, base - row.lower) * row.rate);
}

/** Monthly ISR (art. 96 LISR, Anexo 8 RMF 2026) before subsidio para el empleo. */
export function isrMonthly(taxableMonthly: number): number {
  return applyBrackets(taxableMonthly, mx2026.isrMonthlyTable.value);
}

/** Subsidio para el empleo for a monthly income (decreto DOF 31-dic-2025). */
export function subsidioEmpleo(monthlyIncome: number): number {
  const s = mx2026.subsidioEmpleo.value;
  if (monthlyIncome <= 0 || monthlyIncome > s.incomeLimitMonthly) return 0;
  return s.monthlyAmount;
}

/**
 * Estimated ISR caused by an extra taxable amount paid together with an ordinary monthly salary:
 * ISR(salary + extra) − ISR(salary). Used for aguinaldo, PTU and finiquito ordinary items.
 */
export function marginalIsr(ordinaryMonthly: number, extraTaxable: number): number {
  if (extraTaxable <= 0) return 0;
  return round2(isrMonthly(ordinaryMonthly + extraTaxable) - isrMonthly(ordinaryMonthly));
}

/** Integration factor: 1 + (aguinaldo days + vacation days × prima %) / 365. */
export function integrationFactor(aguinaldoDays: number, vacationDays: number, primaRate: number): number {
  return 1 + (aguinaldoDays + vacationDays * primaRate) / 365;
}

export function dailyFromInput(mode: 'monthly' | 'daily', amount: number): number {
  const safe = isFinite(amount) && amount > 0 ? amount : 0;
  return mode === 'daily' ? safe : safe / 30;
}
