import { describe, it, expect } from 'vitest';
import {
  calculateCoPrima,
  calculateCoCesantias,
  calculateCoVacaciones,
  daysWorkedInSemester,
} from './prestaciones';
import { calculateCoSalarioNeto } from './salarioNeto';
import { calculateCoHorasExtras, hourFactors } from './horasExtras';

describe('calculateCoPrima', () => {
  it('full semester at minimum wage + auxilio = half of 2,000,000', () => {
    const r = calculateCoPrima({ monthlySalary: 1750905, daysInSemester: 180, referenceDate: '2026-12-01' });
    expect(r.prima).toBe(1000000);
    expect(r.deadline).toBe('2026-12-20');
  });

  it('first semester deadline is 30 June', () => {
    expect(calculateCoPrima({ monthlySalary: 2000000, daysInSemester: 90, referenceDate: '2026-04-01' }).deadline).toBe(
      '2026-06-30'
    );
  });

  it('no auxilio above 2 SMMLV', () => {
    const r = calculateCoPrima({ monthlySalary: 5000000, daysInSemester: 180 });
    expect(r.auxilio).toBe(0);
    expect(r.prima).toBe(2500000);
  });

  it('includes variable pay and caps days at 180', () => {
    const r = calculateCoPrima({ monthlySalary: 4000000, variableAverage: 500000, daysInSemester: 200 });
    expect(r.days).toBe(180);
    expect(r.prima).toBe(2250000);
  });

  it('counts semester days from the start date', () => {
    expect(daysWorkedInSemester('2026-09-01', '2026-12-31')).toBe(120);
    expect(daysWorkedInSemester('2020-01-01', '2026-12-31')).toBe(180);
  });
});

describe('calculateCoCesantias', () => {
  it('full year at minimum wage with auxilio', () => {
    const r = calculateCoCesantias({ monthlySalary: 1750905, daysWorked: 360 });
    expect(r.cesantias).toBe(2000000);
    expect(r.intereses).toBe(240000);
    expect(r.total).toBe(2240000);
  });

  it('deadlines: deposit by 14 Feb, interest by 31 Jan of next year', () => {
    const r = calculateCoCesantias({ monthlySalary: 3000000, daysWorked: 360, year: 2026 });
    expect(r.depositDeadline).toBe('2027-02-14');
    expect(r.interestDeadline).toBe('2027-01-31');
  });

  it('proportional days', () => {
    const r = calculateCoCesantias({ monthlySalary: 5000000, daysWorked: 180 });
    expect(r.cesantias).toBe(2500000);
    expect(r.intereses).toBe(150000);
  });

  it('no auxilio above 2 SMMLV', () => {
    expect(calculateCoCesantias({ monthlySalary: 4000000, daysWorked: 360 }).auxilio).toBe(0);
  });

  it('caps days at 360', () => {
    expect(calculateCoCesantias({ monthlySalary: 5000000, daysWorked: 400 }).days).toBe(360);
  });
});

describe('calculateCoVacaciones', () => {
  it('one year = 15 business days paid as 15 days of salary', () => {
    const r = calculateCoVacaciones({ monthlySalary: 3000000, startDate: '2025-01-01', referenceDate: '2025-12-30' });
    expect(r.accruedDays).toBe(15);
    expect(r.pendingValue).toBe(1500000);
  });

  it('compensation in money is capped at half', () => {
    const r = calculateCoVacaciones({
      monthlySalary: 3000000,
      startDate: '2025-01-01',
      referenceDate: '2025-12-30',
      daysToCompensate: 10,
    });
    expect(r.maxCompensableDays).toBe(7.5);
    expect(r.compensatedDays).toBe(7.5);
    expect(r.compensatedValue).toBe(750000);
    expect(r.daysToEnjoy).toBe(7.5);
  });

  it('subtracts days already taken', () => {
    const r = calculateCoVacaciones({
      monthlySalary: 2400000,
      startDate: '2024-01-01',
      referenceDate: '2025-12-30',
      daysTaken: 15,
    });
    expect(r.accruedDays).toBe(30);
    expect(r.pendingDays).toBe(15);
    expect(r.pendingValue).toBe(1200000);
  });

  it('proportional accrual', () => {
    const r = calculateCoVacaciones({ monthlySalary: 1800000, startDate: '2026-01-01', referenceDate: '2026-06-30' });
    expect(r.accruedDays).toBe(7.5);
    expect(r.pendingValue).toBe(450000);
  });

  it('never negative', () => {
    const r = calculateCoVacaciones({ monthlySalary: 1800000, startDate: '2026-01-01', referenceDate: '2026-03-30', daysTaken: 10 });
    expect(r.pendingDays).toBe(0);
  });
});

describe('calculateCoSalarioNeto', () => {
  it('minimum wage: 4% + 4% and auxilio, no retención', () => {
    const r = calculateCoSalarioNeto({ grossMonthly: 1750905 });
    expect(r.salud).toBe(70036);
    expect(r.pension).toBe(70036);
    expect(r.auxilio).toBe(249095);
    expect(r.retencion).toBe(0);
    expect(r.netMonthly).toBe(1859928);
  });

  it('8,000,000: solidarity fund 1% and retención procedure 1', () => {
    const r = calculateCoSalarioNeto({ grossMonthly: 8000000 });
    expect(r.fondoSolidaridad).toBe(80000);
    expect(r.rentaExenta).toBe(1820000);
    expect(r.retencionBase).toBe(5460000);
    expect(r.retencion).toBe(92000);
    expect(r.netMonthly).toBe(7188000);
    expect(r.netQuincena).toBe(3594000);
  });

  it('dependents reduce the retención', () => {
    const a = calculateCoSalarioNeto({ grossMonthly: 12000000 });
    const b = calculateCoSalarioNeto({ grossMonthly: 12000000, hasDependents: true });
    expect(b.retencion).toBeLessThan(a.retencion);
  });

  it('salario integral: IBC 70% and no auxilio', () => {
    const r = calculateCoSalarioNeto({ grossMonthly: 25000000, integral: true });
    expect(r.ibc).toBe(17500000);
    expect(r.auxilio).toBe(0);
    expect(r.fondoSolidaridadRate).toBe(0.01);
  });

  it('IBC capped at 25 SMMLV with 2% solidarity', () => {
    const r = calculateCoSalarioNeto({ grossMonthly: 60000000 });
    expect(r.ibc).toBe(25 * 1750905);
    expect(r.fondoSolidaridadRate).toBe(0.02);
  });
});

describe('calculateCoHorasExtras', () => {
  it('Nov 2026: 42 h/week → 210 h/month, Sunday surcharge 90%', () => {
    const r = calculateCoHorasExtras({
      monthlySalary: 2100000,
      date: '2026-11-14',
      hours: { extra_diurna: 2, dominical_diurno: 8 },
    });
    expect(r.monthlyHours).toBe(210);
    expect(r.hourlyValue).toBe(10000);
    expect(r.dominicalRate).toBe(0.9);
    expect(r.lines.find((l) => l.key === 'extra_diurna')!.total).toBe(25000);
    expect(r.lines.find((l) => l.key === 'dominical_diurno')!.total).toBe(72000);
    expect(r.total).toBe(97000);
  });

  it('uses the percentages valid on the selected date', () => {
    expect(hourFactors('2025-06-01').dominical_diurno).toBe(0.75);
    expect(hourFactors('2025-08-01').dominical_diurno).toBe(0.8);
    expect(hourFactors('2027-07-01').dominical_diurno).toBe(1);
  });

  it('night work starts at 7 pm from 25 Dec 2025', () => {
    expect(calculateCoHorasExtras({ monthlySalary: 2000000, date: '2025-12-24', hours: {} }).nightStartHour).toBe(21);
    expect(calculateCoHorasExtras({ monthlySalary: 2000000, date: '2025-12-25', hours: {} }).nightStartHour).toBe(19);
  });

  it('weekly hours follow Ley 2101', () => {
    expect(calculateCoHorasExtras({ monthlySalary: 2200000, date: '2026-03-01', hours: {} }).monthlyHours).toBe(220);
    expect(calculateCoHorasExtras({ monthlySalary: 2300000, date: '2025-01-01', hours: {} }).monthlyHours).toBe(230);
  });

  it('extra dominical nocturna combines surcharges', () => {
    const r = calculateCoHorasExtras({ monthlySalary: 2100000, date: '2026-11-14', hours: { extra_dominical_nocturna: 1 } });
    // 1 + 0.90 + 0.75
    expect(r.lines.find((l) => l.key === 'extra_dominical_nocturna')!.factor).toBe(2.65);
    expect(r.total).toBe(26500);
  });
});
