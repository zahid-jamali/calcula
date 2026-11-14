import { co2026 } from '@/rules/co/2026';
import type { DatedValue, RateBracket } from '@/rules/types';

/** COP amounts are shown without decimals. */
export const round0 = (n: number): number => Math.round(n);

/** Value in force on a date for a list of dated values. */
export function valueOn<T>(list: Array<DatedValue<T>>, date: string): T {
  const sorted = [...list].sort((a, b) => a.from.localeCompare(b.from));
  let v = sorted[0].value;
  for (const item of sorted) if (date >= item.from) v = item.value;
  return v;
}

function parts(date: string): [number, number, number] {
  const [y, m, d] = date.split('-').map(Number);
  return [y, m, d];
}

function isLastDayOfFebruary(y: number, m: number, d: number): boolean {
  if (m !== 2) return false;
  const last = new Date(Date.UTC(y, 2, 0)).getUTCDate();
  return d === last;
}

/**
 * Days between two dates with the commercial 360-day year used for prestaciones
 * (every month counts as 30 days), both dates inclusive. Returns 0 if end < start.
 */
export function days360(start: string, end: string): number {
  const [y1, m1, d1raw] = parts(start);
  const [y2, m2, d2raw] = parts(end);
  if (!y1 || !y2) return 0;
  const d1 = Math.min(30, isLastDayOfFebruary(y1, m1, d1raw) ? 30 : d1raw);
  const d2 = Math.min(30, isLastDayOfFebruary(y2, m2, d2raw) ? 30 : d2raw);
  const days = (y2 - y1) * 360 + (m2 - m1) * 30 + (d2 - d1) + 1;
  return Math.max(0, days);
}

export function maxDate(a: string, b: string): string {
  return a > b ? a : b;
}

export function addDaysIso(date: string, n: number): string {
  const [y, m, d] = parts(date);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return t.toISOString().slice(0, 10);
}

/** First day of the semester that contains `date` (1 January or 1 July). */
export function semesterStart(date: string): string {
  const [y, m] = parts(date);
  return m <= 6 ? `${y}-01-01` : `${y}-07-01`;
}

export function smmlv(): number {
  return co2026.smmlv.value;
}

/** Auxilio de transporte applies to salaries up to 2 SMMLV. */
export function auxilioFor(salary: number): number {
  return salary > 0 && salary <= co2026.auxilioMaxSmmlv.value * co2026.smmlv.value
    ? co2026.auxilioTransporte.value
    : 0;
}

export function applyBrackets(base: number, table: RateBracket[]): number {
  if (base <= 0) return 0;
  const row =
    table.find((b) => base > b.lower && (b.upper === null || base <= b.upper)) ?? table[0];
  return row.fixedFee + Math.max(0, base - row.lower) * row.rate;
}

export function weeklyHoursOn(date: string): number {
  return valueOn(co2026.maxWeeklyHours.value, date);
}

export function dominicalSurchargeOn(date: string): number {
  return valueOn(co2026.dominicalSurcharge.value, date);
}

export function nightStartOn(date: string): number {
  return valueOn(co2026.nightWorkStartHour.value, date);
}

export const formatCop = (n: number): string => `$${Math.round(n).toLocaleString('es-CO')}`;
