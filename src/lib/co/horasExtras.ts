import { co2026 } from '@/rules/co/2026';
import { round0, weeklyHoursOn, dominicalSurchargeOn, nightStartOn } from './common';

export type CoHourType =
  | 'extra_diurna'
  | 'extra_nocturna'
  | 'recargo_nocturno'
  | 'dominical_diurno'
  | 'dominical_nocturno'
  | 'extra_dominical_diurna'
  | 'extra_dominical_nocturna';

export const CO_HOUR_TYPES: Array<{ key: CoHourType; label: string; surchargeOnly: boolean }> = [
  { key: 'extra_diurna', label: 'Hora extra diurna', surchargeOnly: false },
  { key: 'extra_nocturna', label: 'Hora extra nocturna', surchargeOnly: false },
  { key: 'recargo_nocturno', label: 'Recargo nocturno (hora ordinaria de noche)', surchargeOnly: true },
  { key: 'dominical_diurno', label: 'Recargo dominical o festivo diurno', surchargeOnly: true },
  { key: 'dominical_nocturno', label: 'Recargo dominical o festivo nocturno', surchargeOnly: true },
  { key: 'extra_dominical_diurna', label: 'Hora extra dominical o festiva diurna', surchargeOnly: false },
  { key: 'extra_dominical_nocturna', label: 'Hora extra dominical o festiva nocturna', surchargeOnly: false },
];

export interface CoHorasExtrasInput {
  monthlySalary: number;
  /** Date of the work, used to pick the surcharges and the maximum weekly hours in force */
  date: string;
  /** Override for the weekly working hours (default: legal maximum on the date) */
  weeklyHours?: number;
  hours: Partial<Record<CoHourType, number>>;
}

export interface CoHorasExtrasLine {
  key: CoHourType;
  label: string;
  hours: number;
  /** Multiplier applied to the ordinary hour value */
  factor: number;
  valuePerHour: number;
  total: number;
  surchargeOnly: boolean;
}

export interface CoHorasExtrasResult {
  weeklyHours: number;
  monthlyHours: number;
  hourlyValue: number;
  dominicalRate: number;
  nightStartHour: number;
  lines: CoHorasExtrasLine[];
  total: number;
}

/** Multiplier over the ordinary hour for each type (surcharges are paid on top of the ordinary hour). */
export function hourFactors(date: string): Record<CoHourType, number> {
  const o = co2026.overtime.value;
  const d = dominicalSurchargeOn(date);
  return {
    extra_diurna: 1 + o.extraDiurna,
    extra_nocturna: 1 + o.extraNocturna,
    recargo_nocturno: o.recargoNocturno,
    dominical_diurno: d,
    dominical_nocturno: d + o.recargoNocturno,
    extra_dominical_diurna: 1 + d + o.extraDiurna,
    extra_dominical_nocturna: 1 + d + o.extraNocturna,
  };
}

export function calculateCoHorasExtras(input: CoHorasExtrasInput): CoHorasExtrasResult {
  const weeklyHours = input.weeklyHours && input.weeklyHours > 0 ? input.weeklyHours : weeklyHoursOn(input.date);
  // Monthly hours = weekly hours ÷ 6 days × 30 days = weekly × 5 (e.g. 42 h → 210 h)
  const monthlyHours = weeklyHours * 5;
  const hourly = Math.max(0, input.monthlySalary || 0) / monthlyHours;
  const factors = hourFactors(input.date);

  const lines = CO_HOUR_TYPES.map((t) => {
    const hours = Math.max(0, input.hours[t.key] ?? 0);
    const valuePerHour = hourly * factors[t.key];
    return {
      key: t.key,
      label: t.label,
      hours,
      factor: Math.round(factors[t.key] * 10000) / 10000,
      valuePerHour: round0(valuePerHour),
      total: round0(valuePerHour * hours),
      surchargeOnly: t.surchargeOnly,
    };
  });

  return {
    weeklyHours,
    monthlyHours,
    hourlyValue: round0(hourly),
    dominicalRate: dominicalSurchargeOn(input.date),
    nightStartHour: nightStartOn(input.date),
    lines,
    total: lines.reduce((a, l) => a + l.total, 0),
  };
}
