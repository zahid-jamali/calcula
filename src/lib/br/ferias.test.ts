import { describe, it, expect } from 'vitest';
import { calculateFerias, getVacationDaysByAbsences } from './ferias';

describe('calculateFerias', () => {
  it('1. calculates full 30 days of vacation with 1/3 for normal salary and checks payment deadline', () => {
    const res = calculateFerias({
      salary: 3000,
      unjustifiedAbsences: 0,
    });

    expect(res.vacationDaysAllowed).toBe(30);
    expect(res.entitlementDays).toBe(30);
    expect(res.vacationDaysTaken).toBe(30);
    expect(res.vacationGross).toBe(3000);
    expect(res.tercoConstitucional).toBe(1000);
    expect(res.inssDiscount).toBeGreaterThan(0);
    expect(res.deductions.inss).toBe(res.inssDiscount);
    expect(res.totalNet).toBeGreaterThan(3000);
    expect(res.paymentDeadline).toBe('Até 2 dias antes do início do período de férias (Art. 145 da CLT)');
    expect(res.items.some((i) => i.key === 'ferias_gozadas')).toBe(true);
    expect(res.items.some((i) => i.key === 'terco_constitucional')).toBe(true);
  });

  it('2. reduces vacation days according to CLT Art. 130 absence scale', () => {
    expect(getVacationDaysByAbsences(3)).toBe(30);
    expect(getVacationDaysByAbsences(8)).toBe(24);
    expect(getVacationDaysByAbsences(16)).toBe(18);
    expect(getVacationDaysByAbsences(25)).toBe(12);
    expect(getVacationDaysByAbsences(35)).toBe(0);

    const res = calculateFerias({
      salary: 3000,
      unjustifiedAbsences: 10, // 24 days
    });
    expect(res.vacationDaysAllowed).toBe(24);
    expect(res.entitlementDays).toBe(24);
    expect(res.vacationGross).toBe(2400); // 24 * 100
    expect(res.tercoConstitucional).toBe(800); // 2400 / 3
  });

  it('3. calculates abono pecuniário (selling 10 days) without taxes on abono', () => {
    const resWithoutAbono = calculateFerias({
      salary: 3000,
      sellAbono: false,
    });

    const resWithAbono = calculateFerias({
      salary: 3000,
      sellAbono: true,
    });

    expect(resWithAbono.abonoDays).toBe(10);
    expect(resWithAbono.vacationDaysTaken).toBe(20);
    expect(resWithAbono.abonoGross).toBe(1000);
    expect(resWithAbono.abonoTerco).toBeCloseTo(333.33, 1);
    // Taxes should only apply to 20 days + 1/3 (taxable base R$ 2666.67), not 30 days (R$ 4000)
    expect(resWithAbono.inssDiscount).toBeLessThan(resWithoutAbono.inssDiscount);
    expect(resWithAbono.items.some((i) => i.key === 'abono_pecuniario')).toBe(true);
  });

  it('4. calculates advance of 13th salary without deductions on the advance', () => {
    const res = calculateFerias({
      salary: 4000,
      advance13th: true,
    });

    expect(res.advance13thGross).toBe(2000); // 50% of 4000
    expect(res.totalGross).toBeGreaterThan(7000);
    expect(res.items.some((i) => i.key === 'adiantamento_13')).toBe(true);
  });

  it('5. returns zero vacation days and zero pay when unjustified absences exceed 32', () => {
    const res = calculateFerias({
      salary: 3000,
      unjustifiedAbsences: 35,
    });

    expect(res.vacationDaysAllowed).toBe(0);
    expect(res.entitlementDays).toBe(0);
    expect(res.totalGross).toBe(0);
    expect(res.totalNet).toBe(0);
    expect(res.items.length).toBe(0);
  });

  it('6. calculates higher salary with dependents reducing IRRF', () => {
    const withoutDep = calculateFerias({
      salary: 7000,
      dependentsCount: 0,
    });

    const withDep = calculateFerias({
      salary: 7000,
      dependentsCount: 2,
    });

    expect(withDep.irrfDiscount).toBeLessThan(withoutDep.irrfDiscount);
    expect(withDep.totalNet).toBeGreaterThan(withoutDep.totalNet);
  });
});
