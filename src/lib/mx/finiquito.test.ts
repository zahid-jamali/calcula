import { describe, it, expect } from 'vitest';
import { calculateMxFiniquito } from './finiquito';

const base = {
  salary: 15000,
  startDate: '2024-01-01',
  endDate: '2026-06-30',
  owedDays: 15,
};

const amount = (r: ReturnType<typeof calculateMxFiniquito>, key: string) =>
  r.items.find((i) => i.key === key)?.amount ?? 0;

describe('calculateMxFiniquito', () => {
  it('renuncia voluntaria: finiquito only, with exact proportional amounts', () => {
    const r = calculateMxFiniquito({ ...base, reason: 'renuncia' });
    expect(r.dailySalary).toBe(500);
    expect(r.workedDaysInYear).toBe(181);
    expect(amount(r, 'salario_pendiente')).toBe(7500);
    expect(amount(r, 'aguinaldo_proporcional')).toBeCloseTo(3719.18, 2);
    expect(r.vacationEntitlement).toBe(16); // 3rd year of service
    expect(amount(r, 'vacaciones_proporcionales')).toBeCloseTo(3965, 2);
    expect(amount(r, 'prima_vacacional')).toBeCloseTo(991.25, 2);
    expect(r.totalFiniquito).toBeCloseTo(16175.43, 2);
    expect(r.totalLiquidacion).toBe(0);
    expect(r.primaAntiguedadDue).toBe(false);
  });

  it('despido injustificado: 3 months of SDI + prima de antigüedad', () => {
    const r = calculateMxFiniquito({ ...base, reason: 'despido_injustificado' });
    expect(r.integrationFactor).toBeCloseTo(1.0521, 4);
    expect(r.sdi).toBe(526.03);
    expect(amount(r, 'indemnizacion_constitucional')).toBeCloseTo(47342.7, 2);
    // 12 days × (912 / 365) years × $500 (below the 2× minimum wage cap)
    expect(amount(r, 'prima_antiguedad')).toBeCloseTo(14991.78, 2);
    expect(r.items.some((i) => i.key === 'veinte_dias_por_anio')).toBe(false);
  });

  it('adds 20 días por año only when the toggle is on', () => {
    const r = calculateMxFiniquito({ ...base, reason: 'despido_injustificado', include20Days: true });
    // 20 × 2.4986 years × 526.03
    expect(amount(r, 'veinte_dias_por_anio')).toBeCloseTo(26286.8, 0);
  });

  it('caps the prima de antigüedad salary at 2 minimum wages', () => {
    const r = calculateMxFiniquito({
      salary: 60000,
      startDate: '2016-01-01',
      endDate: '2026-01-01',
      reason: 'despido_justificado',
    });
    // 2 × $315.04 = $630.08 per day cap
    const item = r.items.find((i) => i.key === 'prima_antiguedad')!;
    expect(item.formula).toContain('630.08');
    expect(r.items.some((i) => i.key === 'indemnizacion_constitucional')).toBe(false);
  });

  it('pays prima de antigüedad on renuncia only with 15+ years', () => {
    const short = calculateMxFiniquito({ ...base, startDate: '2012-01-01', reason: 'renuncia' });
    const long = calculateMxFiniquito({ ...base, startDate: '2010-01-01', reason: 'renuncia' });
    expect(short.primaAntiguedadDue).toBe(false);
    expect(long.primaAntiguedadDue).toBe(true);
  });

  it('separates exempt and taxable parts (30 UMA aguinaldo, 15 UMA prima, 90 UMA per year)', () => {
    const r = calculateMxFiniquito({ ...base, reason: 'despido_injustificado' });
    const agui = r.items.find((i) => i.key === 'aguinaldo_proporcional')!;
    expect(agui.exempt).toBeCloseTo(3519.3, 2); // 30 × 117.31
    expect(agui.taxable).toBeCloseTo(199.88, 2);
    const prima = r.items.find((i) => i.key === 'prima_vacacional')!;
    expect(prima.taxable).toBe(0); // 991.25 < 15 UMA
    // 2.5 years -> 2 full years + fraction <= 6 months -> 2 × 90 UMA exempt on separation
    const sepExempt = r.items
      .filter((i) => i.group === 'liquidacion')
      .reduce((a, i) => a + i.exempt, 0);
    expect(sepExempt).toBeCloseTo(2 * 90 * 117.31, 0);
    expect(r.isrTotal).toBeGreaterThan(0);
    expect(r.totalNet).toBeCloseTo(r.totalGross - r.isrTotal, 2);
  });

  it('honours daily salary input, extra aguinaldo days and higher prima', () => {
    const r = calculateMxFiniquito({
      salaryMode: 'daily',
      salary: 400,
      startDate: '2025-06-30',
      endDate: '2026-06-29',
      reason: 'fin_contrato',
      aguinaldoDays: 30,
      primaVacacionalRate: 0.5,
      vacationDaysTaken: 2,
    });
    expect(r.dailySalary).toBe(400);
    expect(amount(r, 'aguinaldo_proporcional')).toBeCloseTo((180 / 365) * 30 * 400, 1);
    const vac = amount(r, 'vacaciones_proporcionales');
    expect(amount(r, 'prima_vacacional')).toBeCloseTo(vac * 0.5, 2);
    expect(r.totalLiquidacion).toBe(0);
  });

  it('never goes below the legal minimums', () => {
    const r = calculateMxFiniquito({ ...base, reason: 'renuncia', aguinaldoDays: 5, primaVacacionalRate: 0.1 });
    expect(amount(r, 'aguinaldo_proporcional')).toBeCloseTo(3719.18, 2);
    expect(amount(r, 'prima_vacacional')).toBeCloseTo(991.25, 2);
  });
});
