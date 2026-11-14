import { mx2026 } from '@/rules/mx/2026';
import { round2, getUma, marginalIsr } from './common';

export interface MxPtuInput {
  /** Total PTU the company distributes (10% of its adjusted taxable profit) */
  totalPtu: number;
  employeeDays: number;
  /** Salary earned by the employee in the year (cuota diaria × days, without overtime or bonuses) */
  employeeSalary: number;
  companyTotalDays: number;
  companyTotalSalaries: number;
  /** Ordinary monthly salary (used for the 3-month cap and the ISR estimate) */
  monthlySalary: number;
  /** Average PTU received over the last 3 years (optional) */
  averageLast3Years?: number;
  paymentYear?: number;
}

export interface MxPtuResult {
  byDays: number;
  bySalary: number;
  share: number;
  cap: number;
  capRule: 'tres_meses' | 'promedio_3_anios';
  capped: boolean;
  payable: number;
  exempt: number;
  taxable: number;
  isr: number;
  net: number;
}

export function calculateMxPtu(input: MxPtuInput): MxPtuResult {
  const half = Math.max(0, input.totalPtu) / 2;
  const byDays =
    input.companyTotalDays > 0 ? round2((half * input.employeeDays) / input.companyTotalDays) : 0;
  const bySalary =
    input.companyTotalSalaries > 0
      ? round2((half * input.employeeSalary) / input.companyTotalSalaries)
      : 0;
  const share = round2(byDays + bySalary);

  // LFT art. 127 fr. VIII: cap = 3 months of salary or the average of the last 3 years,
  // whichever is more favorable to the worker
  const threeMonths = round2(Math.max(0, input.monthlySalary) * 3);
  const avg = Math.max(0, input.averageLast3Years ?? 0);
  const cap = Math.max(threeMonths, avg);
  const capRule = avg > threeMonths ? 'promedio_3_anios' : 'tres_meses';
  const capped = share > cap;
  const payable = round2(Math.min(share, cap));

  const year = input.paymentYear ?? 2026;
  const uma = getUma(`${year}-05-30`).daily;
  const exempt = round2(Math.min(payable, mx2026.isrExemptions.value.ptuUma * uma));
  const taxable = round2(payable - exempt);
  const isr = marginalIsr(Math.max(0, input.monthlySalary), taxable);

  return { byDays, bySalary, share, cap, capRule, capped, payable, exempt, taxable, isr, net: round2(payable - isr) };
}
