import { describe, it, expect } from 'vitest';
import { calculateCoLiquidacion } from './liquidacion';

describe('calculateCoLiquidacion', () => {
  it('calculates Colombian liquidación with auxilio de transporte when salary <= 2 SMMLV', () => {
    const res = calculateCoLiquidacion({
      monthlySalary: 1500000,
      startDate: '2026-01-01',
      endDate: '2026-06-30',
      reason: 'renuncia',
    });

    expect(res.baseSalarioConAuxilio).toBe(1500000 + 200000); // auxilio added
    expect(res.items.some((i) => i.key === 'cesantias')).toBe(true);
    expect(res.items.some((i) => i.key === 'intereses_cesantias')).toBe(true);
    expect(res.items.some((i) => i.key === 'prima_servicios')).toBe(true);
    expect(res.items.some((i) => i.key === 'vacaciones')).toBe(true);
    expect(res.totalGross).toBeGreaterThan(0);
  });

  it('calculates indemnización for despido sin justa causa', () => {
    const res = calculateCoLiquidacion({
      monthlySalary: 2000000,
      startDate: '2024-01-01',
      endDate: '2026-01-01', // 2 years
      reason: 'despido_sin_justa_causa',
    });

    expect(res.items.some((i) => i.key === 'indemnizacion_despido')).toBe(true);
  });
});
