import { describe, it, expect } from 'vitest';
import { calculateClFiniquito } from './finiquito';

describe('calculateClFiniquito', () => {
  it('calculates Chilean finiquito for renuncia voluntaria', () => {
    const res = calculateClFiniquito({
      monthlySalary: 800000,
      startDate: '2025-01-01',
      endDate: '2026-03-31',
      reason: 'renuncia',
    });

    expect(res.items.some((i) => i.key === 'sueldo_dias')).toBe(true);
    expect(res.items.some((i) => i.key === 'feriado_proporcional')).toBe(true);
    expect(res.items.some((i) => i.key === 'indemnizacion_anios_servicio')).toBe(false);
    expect(res.totalFiniquito).toBeGreaterThan(0);
  });

  it('calculates indemnizaciones for necesidades de la empresa', () => {
    const res = calculateClFiniquito({
      monthlySalary: 800000,
      startDate: '2023-01-01',
      endDate: '2026-01-01', // 3 years
      reason: 'necesidades_empresa',
      hasNotice: false,
    });

    expect(res.items.some((i) => i.key === 'indemnizacion_aviso_previo')).toBe(true);
    expect(res.items.some((i) => i.key === 'indemnizacion_anios_servicio')).toBe(true);
    expect(res.serviceYears).toBe(3);
  });
});
