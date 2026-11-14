import { mx2026 } from '@/rules/mx/2026';
import { round2, isoYear, daysInclusive, getUma, marginalIsr, dailyFromInput } from './common';

export interface MxAguinaldoInput {
  salaryMode?: 'monthly' | 'daily';
  salary: number;
  aguinaldoDays?: number;
  /** Start date of the relationship (for a partial year) */
  startDate?: string;
  /** End of the period counted (default: 31 December of the year) */
  periodEnd: string;
}

export interface MxAguinaldoResult {
  dailySalary: number;
  aguinaldoDays: number;
  daysWorked: number;
  proportional: boolean;
  gross: number;
  exempt: number;
  taxable: number;
  exemptLimit: number;
  isr: number;
  net: number;
  deadline: string;
}

export function calculateMxAguinaldo(input: MxAguinaldoInput): MxAguinaldoResult {
  const { salaryMode = 'monthly', salary, startDate, periodEnd } = input;
  const aguinaldoDays = Math.max(mx2026.aguinaldoMinDays.value, input.aguinaldoDays ?? 15);
  const sd = round2(dailyFromInput(salaryMode, salary));
  const year = isoYear(periodEnd);
  const yearStart = `${year}-01-01`;
  const from = startDate && startDate > yearStart ? startDate : yearStart;
  const daysWorked = Math.min(365, daysInclusive(from, periodEnd));
  const proportional = daysWorked < 365;
  const gross = round2((daysWorked / 365) * aguinaldoDays * sd);

  // Aguinaldo is paid in December -> UMA in force at the payment date
  const uma = getUma(`${year}-12-01`).daily;
  const exemptLimit = round2(mx2026.isrExemptions.value.aguinaldoUma * uma);
  const exempt = round2(Math.min(gross, exemptLimit));
  const taxable = round2(gross - exempt);
  const isr = marginalIsr(round2(sd * 30), taxable);
  const { month, day } = mx2026.aguinaldoDeadline.value;

  return {
    dailySalary: sd,
    aguinaldoDays,
    daysWorked,
    proportional,
    gross,
    exempt,
    taxable,
    exemptLimit,
    isr,
    net: round2(gross - isr),
    deadline: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  };
}
