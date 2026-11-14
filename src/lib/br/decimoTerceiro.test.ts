import { describe, it, expect } from 'vitest';
import { calculateDecimoTerceiro } from './decimoTerceiro';

describe('calculateDecimoTerceiro', () => {
  it('1. calculates full 12 months with 1st and 2nd installment for standard salary', () => {
    const res = calculateDecimoTerceiro({
      salary: 3000,
      monthsWorked: 12,
    });

    expect(res.totalGross).toBe(3000);
    expect(res.firstInstallment).toBe(1500);
    expect(res.secondInstallmentGross).toBe(1500);
    expect(res.inssDiscount).toBeGreaterThan(0);
    expect(res.deductions.inss).toBe(res.inssDiscount);
    expect(res.totalNet).toBe(Math.round((res.firstInstallment + res.secondInstallmentNet) * 100) / 100);
    expect(res.firstInstallmentDeadline).toBe('Até 30 de novembro (Lei 4.749/1965)');
    expect(res.secondInstallmentDeadline).toBe('Até 20 de dezembro (Lei 4.749/1965)');
    expect(res.paymentDeadlines.firstInstallment).toBe('Até 30 de novembro (Lei 4.749/1965)');
    expect(res.items.some((i) => i.key === 'primeira_parcela')).toBe(true);
    expect(res.items.some((i) => i.key === 'segunda_parcela')).toBe(true);
  });

  it('2. calculates proportional 13th for 6 months in standard mode', () => {
    const res = calculateDecimoTerceiro({
      salary: 4000,
      monthsWorked: 6,
    });

    expect(res.totalGross).toBe(2000); // 4000 * 6 / 12
    expect(res.firstInstallment).toBe(1000);
    expect(res.secondInstallmentGross).toBe(1000);
    expect(res.monthsWorked).toBe(6);
  });

  it('3. includes variable pay in the base salary calculation', () => {
    const res = calculateDecimoTerceiro({
      salary: 5000,
      variablePayAverage: 1000,
      monthsWorked: 12,
    });

    expect(res.baseSalary).toBe(6000);
    expect(res.totalGross).toBe(6000);
    expect(res.firstInstallment).toBe(3000);
    expect(res.secondInstallmentGross).toBe(3000);
  });

  it('4. calculates single payout proportional mode for mid-year termination', () => {
    const res = calculateDecimoTerceiro({
      salary: 3600,
      monthsWorked: 5,
      isProportional: true,
    });

    expect(res.isProportional).toBe(true);
    expect(res.totalGross).toBe(1500); // 3600 * 5 / 12
    expect(res.firstInstallment).toBe(0);
    expect(res.secondInstallmentGross).toBe(1500);
    expect(res.totalNet).toBe(res.secondInstallmentNet);
    expect(res.items.some((i) => i.key === 'decimo_proporcional')).toBe(true);
    expect(res.items.some((i) => i.key === 'primeira_parcela')).toBe(false);
  });

  it('5. reduces IRRF when dependents are declared', () => {
    const withoutDep = calculateDecimoTerceiro({
      salary: 6000,
      monthsWorked: 12,
      dependentsCount: 0,
    });

    const withDep = calculateDecimoTerceiro({
      salary: 6000,
      monthsWorked: 12,
      dependentsCount: 3,
    });

    expect(withDep.irrfDiscount).toBeLessThan(withoutDep.irrfDiscount);
    expect(withDep.totalNet).toBeGreaterThan(withoutDep.totalNet);
  });

  it('6. clamps high salary to INSS ceiling and calculates correct top bracket tax', () => {
    const highEarner = calculateDecimoTerceiro({
      salary: 20000,
      monthsWorked: 12,
    });

    // INSS ceiling contribution in 2026 is R$ 951.64
    expect(highEarner.inssDiscount).toBeLessThanOrEqual(952);
    expect(highEarner.inssDiscount).toBeGreaterThanOrEqual(951);
    expect(highEarner.totalNet).toBeGreaterThan(14000);
  });
});
