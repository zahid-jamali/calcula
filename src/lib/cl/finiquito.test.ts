import { describe, it, expect } from 'vitest';
import { calculateClFiniquito } from './finiquito';

describe('Chile Finiquito Calculator', () => {
  it('1. calculates despido por necesidades de la empresa with aviso previo and anos de servicio', () => {
    const res = calculateClFiniquito({
      monthlySalary: 1200000,
      startDate: '2023-01-01',
      endDate: '2025-01-01', // 2 full years
      reason: 'necesidades_empresa',
      hasNotice: false,
      ufValue: 40000,
    });

    expect(res.serviceYears).toBe(2);
    expect(res.items.some((i) => i.key === 'sueldo_dias')).toBe(true);
    expect(res.items.some((i) => i.key === 'feriado_proporcional')).toBe(true);

    const aviso = res.items.find((i) => i.key === 'indemnizacion_aviso_previo');
    expect(aviso).toBeDefined();
    expect(aviso?.amount).toBe(1200000);

    const anios = res.items.find((i) => i.key === 'indemnizacion_anios_servicio');
    expect(anios).toBeDefined();
    expect(anios?.amount).toBe(2400000); // 2 * 1.200.000

    expect(res.totalFiniquito).toBeGreaterThan(3600000);
    expect(res.totalFiniquitoUf).toBeGreaterThan(90);
  });

  it('2. calculates renuncia voluntaria (Art. 159 N° 2) without notice or severance indemnity', () => {
    const res = calculateClFiniquito({
      monthlySalary: 800000,
      startDate: '2022-01-01',
      endDate: '2024-06-30',
      reason: 'renuncia',
      ufValue: 40000,
    });

    expect(res.items.some((i) => i.key === 'indemnizacion_aviso_previo')).toBe(false);
    expect(res.items.some((i) => i.key === 'indemnizacion_anios_servicio')).toBe(false);
    expect(res.items.some((i) => i.key === 'sueldo_dias')).toBe(true);
    expect(res.items.some((i) => i.key === 'feriado_proporcional')).toBe(true);
  });

  it('3. enforces the 90 UF remuneration cap on anos de servicio and aviso previo (Art. 172)', () => {
    const ufVal = 40000;
    const tope90Uf = 90 * ufVal; // 3.600.000
    const highSalary = 5000000; // Above 90 UF

    const res = calculateClFiniquito({
      monthlySalary: highSalary,
      startDate: '2020-01-01',
      endDate: '2024-01-01', // 4 years
      reason: 'necesidades_empresa',
      hasNotice: false,
      ufValue: ufVal,
    });

    expect(res.isRemunerationCapped).toBe(true);
    expect(res.remuneracionTopeadaPesos).toBe(tope90Uf);

    const aviso = res.items.find((i) => i.key === 'indemnizacion_aviso_previo');
    expect(aviso?.amount).toBe(tope90Uf);

    const anios = res.items.find((i) => i.key === 'indemnizacion_anios_servicio');
    expect(anios?.amount).toBe(tope90Uf * 4); // 4 * 3.600.000
  });

  it('4. grants an extra year of service when fraction exceeds 6 months (180 days)', () => {
    const res = calculateClFiniquito({
      monthlySalary: 1000000,
      startDate: '2022-01-01',
      endDate: '2023-08-15', // 1 year and 7.5 months (> 180 days)
      reason: 'necesidades_empresa',
      hasNotice: true,
      ufValue: 40000,
    });

    // 1 year + >6 months = 2 years of severance
    expect(res.serviceYears).toBe(2);
    const anios = res.items.find((i) => i.key === 'indemnizacion_anios_servicio');
    expect(anios?.amount).toBe(2000000);
    // Has notice is true, so no substitute notice indemnity
    expect(res.items.some((i) => i.key === 'indemnizacion_aviso_previo')).toBe(false);
  });

  it('5. caps years of service indemnity at maximum 11 years (330 days)', () => {
    const res = calculateClFiniquito({
      monthlySalary: 1000000,
      startDate: '2005-01-01',
      endDate: '2025-01-01', // 20 years
      reason: 'necesidades_empresa',
      hasNotice: true,
      ufValue: 40000,
    });

    expect(res.serviceYears).toBe(11);
    const anios = res.items.find((i) => i.key === 'indemnizacion_anios_servicio');
    expect(anios?.amount).toBe(11000000); // 11 * 1.000.000
  });

  it('6. correctly adds pending vacation days to feriado proporcional', () => {
    const res = calculateClFiniquito({
      monthlySalary: 900000,
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      reason: 'vencimiento_plazo',
      pendingVacationDays: 5,
      ufValue: 40000,
    });

    expect(res.businessVacationDays).toBeGreaterThan(5);
    expect(res.totalVacationCalendarDays).toBeGreaterThan(res.businessVacationDays);
    expect(res.totalFiniquito).toBeGreaterThan(0);
  });
});
