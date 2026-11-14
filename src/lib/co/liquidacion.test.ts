import { describe, it, expect } from 'vitest';
import { calculateCoLiquidacion } from './liquidacion';
import { days360, semesterStart, auxilioFor } from './common';

const amount = (r: ReturnType<typeof calculateCoLiquidacion>, key: string) =>
  r.items.find((i) => i.key === key)?.amount ?? 0;

describe('CO common helpers', () => {
  it('counts days with the 360-day commercial year', () => {
    expect(days360('2026-01-01', '2026-12-31')).toBe(360);
    expect(days360('2026-02-01', '2026-02-28')).toBe(30);
    expect(days360('2026-07-01', '2026-09-15')).toBe(75);
    expect(days360('2026-05-10', '2026-05-01')).toBe(0);
    expect(semesterStart('2026-09-15')).toBe('2026-07-01');
  });

  it('pays auxilio de transporte only up to 2 SMMLV', () => {
    expect(auxilioFor(1750905)).toBe(249095);
    expect(auxilioFor(3501810)).toBe(249095);
    expect(auxilioFor(3501811)).toBe(0);
  });
});

describe('calculateCoLiquidacion', () => {
  const base = {
    monthlySalary: 2000000,
    startDate: '2024-03-01',
    endDate: '2026-09-15',
    vacationDaysTaken: 15,
  };

  it('despido sin justa causa, contrato indefinido, salario con auxilio', () => {
    const r = calculateCoLiquidacion({ ...base, reason: 'despido_sin_justa_causa' });
    expect(r.basePrestaciones).toBe(2249095);
    expect(amount(r, 'salario_pendiente')).toBe(1124547);
    expect(amount(r, 'cesantias')).toBe(1593109);
    expect(amount(r, 'intereses_cesantias')).toBe(135414);
    expect(amount(r, 'prima')).toBe(468561);
    expect(amount(r, 'vacaciones')).toBe(1541667);
    // 30 days + 1.5417 additional years × 20 days = 60.83 days
    expect(r.indemnizacionDays).toBeCloseTo(60.83, 2);
    expect(amount(r, 'indemnizacion')).toBe(4055556);
    expect(r.totalDeductions).toBe(80000);
  });

  it('renuncia: no indemnización', () => {
    const r = calculateCoLiquidacion({ ...base, reason: 'renuncia' });
    expect(r.items.some((i) => i.key === 'indemnizacion')).toBe(false);
  });

  it('vacaciones never include the auxilio de transporte', () => {
    const r = calculateCoLiquidacion({ ...base, reason: 'renuncia', vacationDaysTaken: 0 });
    // 2,000,000 × 915 ÷ 720
    expect(amount(r, 'vacaciones')).toBe(2541667);
  });

  it('término fijo: salaries for the remaining time', () => {
    const r = calculateCoLiquidacion({
      monthlySalary: 3000000,
      startDate: '2026-01-01',
      endDate: '2026-06-30',
      contractType: 'fijo',
      fixedTermEndDate: '2026-12-31',
      reason: 'despido_sin_justa_causa',
    });
    expect(r.auxilio).toBe(249095); // 3,000,000 ≤ 2 SMMLV, but indemnización uses salary only
    expect(r.indemnizacionDays).toBe(180);
    expect(amount(r, 'indemnizacion')).toBe(18000000);
  });

  it('obra o labor: minimum 15 days', () => {
    const r = calculateCoLiquidacion({
      monthlySalary: 3000000,
      startDate: '2026-01-01',
      endDate: '2026-06-30',
      contractType: 'obra',
      obraEndDate: '2026-07-05',
      reason: 'despido_sin_justa_causa',
    });
    expect(r.indemnizacionDays).toBe(15);
    expect(amount(r, 'indemnizacion')).toBe(1500000);
  });

  it('salario ≥ 10 SMMLV: 20 days + 15 per additional year', () => {
    const r = calculateCoLiquidacion({
      monthlySalary: 20000000,
      startDate: '2023-01-01',
      endDate: '2025-12-30',
      reason: 'despido_sin_justa_causa',
    });
    expect(r.serviceYears).toBe(3);
    expect(r.indemnizacionDays).toBe(50);
    expect(amount(r, 'indemnizacion')).toBe(33333333);
  });

  it('adds previous-year cesantías and previous-semester prima when unpaid', () => {
    const paid = calculateCoLiquidacion({ ...base, reason: 'renuncia' });
    const unpaid = calculateCoLiquidacion({
      ...base,
      reason: 'renuncia',
      cesantiasPreviousYearPaid: false,
      primaPreviousSemesterPaid: false,
    });
    expect(amount(unpaid, 'cesantias_anterior')).toBe(2249095);
    expect(amount(unpaid, 'intereses_anterior')).toBe(269891);
    expect(amount(unpaid, 'prima_anterior')).toBe(Math.round(2249095 / 2));
    expect(unpaid.totalGross).toBeGreaterThan(paid.totalGross);
  });
});
