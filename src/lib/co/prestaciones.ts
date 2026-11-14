import { co2026 } from '@/rules/co/2026';
import { round0, auxilioFor, days360, maxDate, semesterStart } from './common';

// ---------------------------------------------------------------------------
// Prima de servicios (CST art. 306)
// ---------------------------------------------------------------------------

export interface CoPrimaInput {
  monthlySalary: number;
  variableAverage?: number;
  /** Days worked in the semester (max 180) */
  daysInSemester: number;
  /** Any date inside the semester, used for the payment deadline */
  referenceDate?: string;
}

export interface CoPrimaResult {
  base: number;
  auxilio: number;
  days: number;
  prima: number;
  deadline: string;
  semester: 1 | 2;
}

export function calculateCoPrima(input: CoPrimaInput): CoPrimaResult {
  const salary = Math.max(0, input.monthlySalary || 0);
  const auxilio = auxilioFor(salary);
  const base = salary + Math.max(0, input.variableAverage ?? 0) + auxilio;
  const days = Math.min(180, Math.max(0, input.daysInSemester || 0));
  const ref = input.referenceDate ?? '2026-12-01';
  const year = ref.slice(0, 4);
  const semester: 1 | 2 = Number(ref.slice(5, 7)) <= 6 ? 1 : 2;
  const { primaFirst, primaSecond } = co2026.deadlines.value;
  const d = semester === 1 ? primaFirst : primaSecond;
  return {
    base,
    auxilio,
    days,
    prima: round0((base * days) / 360),
    deadline: `${year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`,
    semester,
  };
}

/** Days worked in the semester of `referenceDate`, counted with the 360-day convention. */
export function daysWorkedInSemester(startDate: string, referenceDate: string): number {
  return Math.min(180, days360(maxDate(startDate, semesterStart(referenceDate)), referenceDate));
}

// ---------------------------------------------------------------------------
// Cesantías e intereses (CST art. 249, Ley 52 de 1975, Ley 50 de 1990 art. 99)
// ---------------------------------------------------------------------------

export interface CoCesantiasInput {
  monthlySalary: number;
  variableAverage?: number;
  /** Days worked in the year (max 360) */
  daysWorked: number;
  year?: number;
}

export interface CoCesantiasResult {
  base: number;
  auxilio: number;
  days: number;
  cesantias: number;
  intereses: number;
  total: number;
  depositDeadline: string;
  interestDeadline: string;
}

export function calculateCoCesantias(input: CoCesantiasInput): CoCesantiasResult {
  const salary = Math.max(0, input.monthlySalary || 0);
  const auxilio = auxilioFor(salary);
  const base = salary + Math.max(0, input.variableAverage ?? 0) + auxilio;
  const days = Math.min(360, Math.max(0, input.daysWorked || 0));
  const cesantias = round0((base * days) / 360);
  const intereses = round0((cesantias * days * co2026.interesesCesantiasRate.value) / 360);
  const next = (input.year ?? 2026) + 1;
  const { cesantiasDeposit, interesesPayment } = co2026.deadlines.value;
  const iso = (m: number, d: number) => `${next}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  return {
    base,
    auxilio,
    days,
    cesantias,
    intereses,
    total: cesantias + intereses,
    depositDeadline: iso(cesantiasDeposit.month, cesantiasDeposit.day),
    interestDeadline: iso(interesesPayment.month, interesesPayment.day),
  };
}

// ---------------------------------------------------------------------------
// Vacaciones (CST arts. 186-189)
// ---------------------------------------------------------------------------

export interface CoVacacionesInput {
  monthlySalary: number;
  /** Average variable pay of the last year (CST art. 192) */
  variableAverage?: number;
  startDate: string;
  referenceDate: string;
  daysTaken?: number;
  /** Days the worker wants to receive in money (capped at half of pending days) */
  daysToCompensate?: number;
}

export interface CoVacacionesResult {
  dailySalary: number;
  workedDays: number;
  accruedDays: number;
  pendingDays: number;
  pendingValue: number;
  maxCompensableDays: number;
  compensatedDays: number;
  compensatedValue: number;
  daysToEnjoy: number;
}

export function calculateCoVacaciones(input: CoVacacionesInput): CoVacacionesResult {
  const salary = Math.max(0, input.monthlySalary || 0) + Math.max(0, input.variableAverage ?? 0);
  const daily = salary / 30;
  const workedDays = days360(input.startDate, input.referenceDate);
  const accrued = (workedDays * co2026.vacacionesDaysPerYear.value) / 360;
  const pending = Math.max(0, accrued - Math.max(0, input.daysTaken ?? 0));
  const maxComp = pending / 2;
  const compensated = Math.min(Math.max(0, input.daysToCompensate ?? 0), maxComp);
  const r2 = (n: number) => Math.round(n * 100) / 100;
  return {
    dailySalary: round0(daily),
    workedDays,
    accruedDays: r2(accrued),
    pendingDays: r2(pending),
    pendingValue: round0(daily * pending),
    maxCompensableDays: r2(maxComp),
    compensatedDays: r2(compensated),
    compensatedValue: round0(daily * compensated),
    daysToEnjoy: r2(pending - compensated),
  };
}
