import { describe, it, expect } from 'vitest';
import { calculateMxAguinaldo } from './aguinaldo';
import { calculateMxVacaciones } from './vacaciones';
import { calculateMxSueldoNeto, grossFromNetMx } from './sueldoNeto';
import { calculateMxSdi } from './sdi';
import { calculateMxPtu } from './ptu';

describe('calculateMxAguinaldo', () => {
  it('full year: 15 days of salary', () => {
    const r = calculateMxAguinaldo({ salary: 15000, periodEnd: '2026-12-31' });
    expect(r.gross).toBe(7500);
    expect(r.proportional).toBe(false);
    expect(r.deadline).toBe('2026-12-20');
  });

  it('exempts 30 UMA and taxes the rest', () => {
    const r = calculateMxAguinaldo({ salary: 15000, periodEnd: '2026-12-31' });
    expect(r.exempt).toBeCloseTo(3519.3, 2);
    expect(r.taxable).toBeCloseTo(3980.7, 2);
    expect(r.isr).toBeGreaterThan(0);
    expect(r.net).toBeCloseTo(r.gross - r.isr, 2);
  });

  it('partial year from the start date', () => {
    const r = calculateMxAguinaldo({ salary: 15000, startDate: '2026-07-01', periodEnd: '2026-12-31' });
    expect(r.daysWorked).toBe(184);
    expect(r.gross).toBeCloseTo(3780.82, 2);
  });

  it('small aguinaldo is fully exempt (no ISR)', () => {
    const r = calculateMxAguinaldo({ salaryMode: 'daily', salary: 315.04, periodEnd: '2026-12-31' });
    expect(r.gross).toBeCloseTo(4725.6, 2);
    expect(r.taxable).toBeCloseTo(4725.6 - 3519.3, 2);
  });

  it('uses more days when the contract grants them', () => {
    const r = calculateMxAguinaldo({ salary: 30000, aguinaldoDays: 30, periodEnd: '2026-12-31' });
    expect(r.gross).toBe(30000);
  });
});

describe('calculateMxVacaciones', () => {
  it('first year: 12 days earned after one year', () => {
    const r = calculateMxVacaciones({ salary: 15000, startDate: '2025-06-01', referenceDate: '2026-06-01' });
    expect(r.completedYears).toBe(1);
    expect(r.daysEarned).toBe(12);
    expect(r.nextYearDays).toBe(14);
  });

  it('6 completed years -> 22 days and 25% prima', () => {
    const r = calculateMxVacaciones({ salary: 15000, startDate: '2020-03-01', referenceDate: '2026-06-01' });
    expect(r.daysEarned).toBe(22);
    expect(r.vacationPay).toBe(11000);
    expect(r.primaVacacional).toBe(2750);
    expect(r.total).toBe(13750);
  });

  it('less than a year: 0 earned, proportional accrual of 12', () => {
    const r = calculateMxVacaciones({ salary: 9000, startDate: '2026-01-01', referenceDate: '2026-07-01' });
    expect(r.daysEarned).toBe(0);
    expect(r.proportionalDays).toBeCloseTo((12 * 182) / 365, 2);
  });

  it('accepts a higher prima vacacional', () => {
    const r = calculateMxVacaciones({
      salary: 15000,
      startDate: '2023-01-10',
      referenceDate: '2026-02-01',
      primaVacacionalRate: 0.5,
    });
    expect(r.daysEarned).toBe(16);
    expect(r.primaVacacional).toBe(4000);
  });

  it('builds the 35-year table', () => {
    const r = calculateMxVacaciones({ salary: 15000, startDate: '2010-01-01', referenceDate: '2026-06-01' });
    expect(r.table).toHaveLength(35);
    expect(r.table[15]).toMatchObject({ year: 16, days: 26, isCurrent: true });
  });
});

describe('calculateMxSueldoNeto', () => {
  it('$10,000 gross: ISR with subsidio and IMSS employee quotas', () => {
    const r = calculateMxSueldoNeto({ grossMonthly: 10000 });
    expect(r.isrBeforeSubsidy).toBeCloseTo(729.02, 1);
    expect(r.subsidy).toBe(535.65);
    expect(r.isr).toBeCloseTo(193.37, 1);
    expect(r.imss).toBeCloseTo(252.53, 1);
    expect(r.netMonthly).toBeCloseTo(9554.1, 0);
    expect(r.netQuincena).toBeCloseTo(r.netMonthly / 2, 2);
  });

  it('minimum wage: employer pays the IMSS quota and subsidio offsets ISR', () => {
    const r = calculateMxSueldoNeto({ grossMonthly: 315.04 * 30 });
    expect(r.isMinimumWage).toBe(true);
    expect(r.imss).toBe(0);
    expect(r.isr).toBe(0);
  });

  it('no subsidio above the income limit', () => {
    const r = calculateMxSueldoNeto({ grossMonthly: 25000 });
    expect(r.subsidy).toBe(0);
    expect(r.isr).toBeCloseTo(1856.84 + (25000 - 17533.65) * 0.2136, 1);
  });

  it('applies the excedente of 3 UMA and the 25 UMA SBC cap', () => {
    const r = calculateMxSueldoNeto({ grossMonthly: 150000 });
    expect(r.sbcDaily).toBeCloseTo(25 * 117.31, 2);
    expect(r.imssBreakdown.find((b) => b.key === 'excedente')!.amount).toBeGreaterThan(0);
  });

  it('reverse mode returns the gross for a target net', () => {
    const r = grossFromNetMx(20000);
    expect(r.netMonthly).toBeCloseTo(20000, 0);
    expect(r.grossMonthly).toBeGreaterThan(20000);
  });
});

describe('calculateMxSdi', () => {
  it('legal minimum benefits -> factor 1.0493', () => {
    const r = calculateMxSdi({ dailySalary: 500 });
    expect(r.factor).toBe(1.0493);
    expect(r.sdi).toBe(524.65);
  });

  it('better benefits raise the factor', () => {
    const r = calculateMxSdi({ dailySalary: 500, aguinaldoDays: 30, vacationDays: 20, primaVacacionalRate: 0.5 });
    expect(r.factor).toBeCloseTo(1 + 40 / 365, 4);
  });

  it('caps the SBC at 25 UMA', () => {
    const r = calculateMxSdi({ dailySalary: 3000 });
    expect(r.isCapped).toBe(true);
    expect(r.sbcCapped).toBeCloseTo(2932.75, 2);
  });

  it('adds other integrating benefits', () => {
    const r = calculateMxSdi({ dailySalary: 500, otherDailyBenefits: 20 });
    expect(r.sdi).toBe(544.65);
  });

  it('never uses less than the legal aguinaldo or prima', () => {
    const r = calculateMxSdi({ dailySalary: 500, aguinaldoDays: 10, primaVacacionalRate: 0.1 });
    expect(r.factor).toBe(1.0493);
  });
});

describe('calculateMxPtu', () => {
  const base = {
    totalPtu: 1_000_000,
    employeeDays: 365,
    employeeSalary: 120000,
    companyTotalDays: 36500,
    companyTotalSalaries: 12_000_000,
    monthlySalary: 10000,
  };

  it('splits 50% by days and 50% by salary', () => {
    const r = calculateMxPtu(base);
    expect(r.byDays).toBe(5000);
    expect(r.bySalary).toBe(5000);
    expect(r.payable).toBe(10000);
  });

  it('exempts 15 UMA', () => {
    const r = calculateMxPtu(base);
    expect(r.exempt).toBeCloseTo(1759.65, 2);
    expect(r.taxable).toBeCloseTo(8240.35, 2);
  });

  it('caps at 3 months of salary', () => {
    const r = calculateMxPtu({ ...base, monthlySalary: 2000 });
    expect(r.cap).toBe(6000);
    expect(r.capped).toBe(true);
    expect(r.payable).toBe(6000);
  });

  it('uses the 3-year average when it is more favorable', () => {
    const r = calculateMxPtu({ ...base, monthlySalary: 2000, averageLast3Years: 8000 });
    expect(r.capRule).toBe('promedio_3_anios');
    expect(r.payable).toBe(8000);
  });

  it('handles zero company totals', () => {
    const r = calculateMxPtu({ ...base, companyTotalDays: 0, companyTotalSalaries: 0 });
    expect(r.payable).toBe(0);
  });
});
