import { mx2026 } from '@/rules/mx/2026';
import {
  round2,
  getUma,
  isrMonthly,
  subsidioEmpleo,
  integrationFactor,
  getMinimumWage,
  MxZone,
} from './common';

export interface MxSueldoNetoInput {
  grossMonthly: number;
  zone?: MxZone;
  /** Integration factor for the SBC (default: legal minimum benefits, 1.0493) */
  integrationFactor?: number;
  referenceDate?: string;
}

export interface MxSueldoNetoResult {
  grossMonthly: number;
  isrBeforeSubsidy: number;
  subsidy: number;
  isr: number;
  imss: number;
  imssBreakdown: Array<{ key: string; label: string; amount: number }>;
  sbcDaily: number;
  netMonthly: number;
  netQuincena: number;
  isMinimumWage: boolean;
}

/** Average month used by IMSS for monthly quotas. */
const IMSS_DAYS = 30.4;

export function calculateMxSueldoNeto(input: MxSueldoNetoInput): MxSueldoNetoResult {
  const gross = Math.max(0, input.grossMonthly || 0);
  const zone = input.zone ?? 'general';
  const uma = getUma(input.referenceDate ?? '2026-06-01').daily;
  const r = mx2026.imssEmployee.value;

  const sd = gross / 30;
  // Art. 96 LISR: no ISR withholding for workers who only earn the minimum wage.
  // Art. 36 LSS: the employer pays the employee IMSS quotas of minimum-wage workers.
  const isMinimumWage = sd > 0 && sd <= getMinimumWage(zone) + 0.005;

  // ISR art. 96 LISR with the monthly table; the subsidio para el empleo cannot create a balance in favor
  const isrBeforeSubsidy = isMinimumWage ? 0 : isrMonthly(gross);
  const subsidy = round2(Math.min(subsidioEmpleo(gross), isrBeforeSubsidy));
  const isr = round2(isrBeforeSubsidy - subsidy);

  // IMSS employee quotas (cuotas obreras)
  const factor = input.integrationFactor ?? integrationFactor(15, 12, 0.25);
  const sbcDaily = round2(Math.min(sd * factor, uma * r.sbcCapUma));

  const base = sbcDaily * IMSS_DAYS;
  const excedente = Math.max(0, sbcDaily - r.excedenteThresholdUma * uma) * IMSS_DAYS;
  const breakdown = [
    {
      key: 'excedente',
      label: 'Enfermedad y maternidad (excedente de 3 UMA) 0.40%',
      amount: round2(excedente * r.enfermedadMaternidadExcedente),
    },
    { key: 'dinero', label: 'Prestaciones en dinero 0.25%', amount: round2(base * r.prestacionesDinero) },
    {
      key: 'pensionados',
      label: 'Gastos médicos de pensionados 0.375%',
      amount: round2(base * r.gastosMedicosPensionados),
    },
    { key: 'iv', label: 'Invalidez y vida 0.625%', amount: round2(base * r.invalidezVida) },
    {
      key: 'cv',
      label: 'Cesantía en edad avanzada y vejez 1.125%',
      amount: round2(base * r.cesantiaVejez),
    },
  ].map((b) => (isMinimumWage ? { ...b, amount: 0 } : b));
  const imss = round2(breakdown.reduce((a, b) => a + b.amount, 0));

  const netMonthly = round2(gross - isr - imss);
  return {
    grossMonthly: round2(gross),
    isrBeforeSubsidy,
    subsidy,
    isr,
    imss,
    imssBreakdown: breakdown,
    sbcDaily,
    netMonthly,
    netQuincena: round2(netMonthly / 2),
    isMinimumWage,
  };
}

/** Reverse mode (neto → bruto): finds the gross monthly salary that yields the target net. */
export function grossFromNetMx(
  targetNet: number,
  options: Omit<MxSueldoNetoInput, 'grossMonthly'> = {}
): MxSueldoNetoResult {
  if (!(targetNet > 0)) return calculateMxSueldoNeto({ ...options, grossMonthly: 0 });
  let lo = targetNet;
  let hi = targetNet * 2 + 10000;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (calculateMxSueldoNeto({ ...options, grossMonthly: mid }).netMonthly < targetNet) lo = mid;
    else hi = mid;
  }
  return calculateMxSueldoNeto({ ...options, grossMonthly: round2(hi) });
}
