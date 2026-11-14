import { mx2026 } from '@/rules/mx/2026';
import { round2, integrationFactor, getUma } from './common';

export interface MxSdiInput {
  dailySalary: number;
  aguinaldoDays?: number;
  vacationDays?: number;
  primaVacacionalRate?: number;
  /** Other fixed daily benefits that integrate into the salary */
  otherDailyBenefits?: number;
  referenceDate?: string;
}

export interface MxSdiResult {
  factor: number;
  sdi: number;
  sdiMonthly: number;
  sbcCapped: number;
  sbcCap: number;
  isCapped: boolean;
  minimumFactor: number;
}

export function calculateMxSdi(input: MxSdiInput): MxSdiResult {
  const aguinaldoDays = Math.max(mx2026.aguinaldoMinDays.value, input.aguinaldoDays ?? 15);
  const vacationDays = Math.max(0, input.vacationDays ?? 12);
  const primaRate = Math.max(mx2026.primaVacacionalRate.value, input.primaVacacionalRate ?? 0.25);
  const sd = Math.max(0, input.dailySalary || 0);
  const factor =
    Math.round(integrationFactor(aguinaldoDays, vacationDays, primaRate) * 10000) / 10000;
  const sdi = round2(sd * factor + Math.max(0, input.otherDailyBenefits ?? 0));
  const uma = getUma(input.referenceDate ?? '2026-06-01').daily;
  const sbcCap = round2(uma * mx2026.imssEmployee.value.sbcCapUma);
  const minimumFactor =
    Math.round(
      integrationFactor(mx2026.aguinaldoMinDays.value, 12, mx2026.primaVacacionalRate.value) * 10000
    ) / 10000;
  return {
    factor,
    sdi,
    sdiMonthly: round2(sdi * 30.4),
    sbcCapped: Math.min(sdi, sbcCap),
    sbcCap,
    isCapped: sdi > sbcCap,
    minimumFactor,
  };
}
