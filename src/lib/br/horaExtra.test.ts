import { describe, it, expect } from 'vitest';
import { calculateHoraExtra, NIGHT_HOUR_FACTOR } from './horaExtra';

describe('horaExtra', () => {
  it('1. calculates standard 50% overtime and DSR for 220h divisor', () => {
    // Salary 2200 / 220h = R$ 10.00/h
    // 10 hours at 50% = 10 * 10 * 1.5 = 150.00
    // DSR: (150 / 25) * 5 = 30.00
    // Total gross additions: 180.00
    const result = calculateHoraExtra({
      salary: 2200,
      monthlyHours: 220,
      overtime50Hours: 10,
      dsrWorkingDays: 25,
      dsrNonWorkingDays: 5,
    });

    expect(result.baseHourlyRate).toBe(10);
    expect(result.overtime50Amount).toBe(150);
    expect(result.overtime100Amount).toBe(0);
    expect(result.nightBonusAmount).toBe(0);
    expect(result.totalOvertimeAndNight).toBe(150);
    expect(result.dsrAmount).toBe(30);
    expect(result.totalGrossAdditions).toBe(180);
    expect(result.items.length).toBe(2); // overtime_50 and dsr_reflex
  });

  it('2. calculates 100% overtime for Sundays and holidays', () => {
    // Salary 3300 / 220h = R$ 15.00/h
    // 8 hours at 100% = 8 * 15 * 2.0 = 240.00
    // DSR: (240 / 24) * 6 = 60.00
    const result = calculateHoraExtra({
      salary: 3300,
      monthlyHours: 220,
      overtime100Hours: 8,
      dsrWorkingDays: 24,
      dsrNonWorkingDays: 6,
    });

    expect(result.baseHourlyRate).toBe(15);
    expect(result.overtime100Amount).toBe(240);
    expect(result.dsrAmount).toBe(60);
    expect(result.totalGrossAdditions).toBe(300);
  });

  it('3. calculates Adicional Noturno with reduced hour factor (60/52.5)', () => {
    // Salary 4400 / 220 = R$ 20.00/h
    // 21 hours night work: 21 * (60/52.5) * 20 * 0.20
    // 21 * 1.14285714 = 24 reduced hours -> 24 * 20 * 0.20 = 96.00
    const result = calculateHoraExtra({
      salary: 4400,
      monthlyHours: 220,
      nightHours: 21,
      dsrWorkingDays: 25,
      dsrNonWorkingDays: 5,
    });

    expect(result.baseHourlyRate).toBe(20);
    expect(result.nightBonusAmount).toBe(96);
    expect(result.totalOvertimeAndNight).toBe(96);
    // DSR = 96 / 25 * 5 = 19.20
    expect(result.dsrAmount).toBe(19.2);
    expect(result.totalGrossAdditions).toBe(115.2);
  });

  it('4. supports custom workday divisors (180h for bancários, 200h)', () => {
    // Salary 5400 / 180h = R$ 30.00/h
    // 10h overtime 50% = 10 * 30 * 1.5 = 450.00
    const result = calculateHoraExtra({
      salary: 5400,
      monthlyHours: 180,
      overtime50Hours: 10,
    });

    expect(result.monthlyHours).toBe(180);
    expect(result.baseHourlyRate).toBe(30);
    expect(result.overtime50Amount).toBe(450);
  });

  it('5. combines 50%, 100%, and night hours into total gross additions with DSR', () => {
    // Salary 2200 / 220 = 10/h
    // 50%: 10h * 15 = 150
    // 100%: 5h * 20 = 100
    // Night: 21h * (60/52.5) * 10 * 0.20 = 48
    // Total overtimes = 150 + 100 + 48 = 298
    // DSR (25/5): 298 / 25 * 5 = 59.60
    // Total additions = 357.60
    const result = calculateHoraExtra({
      salary: 2200,
      overtime50Hours: 10,
      overtime100Hours: 5,
      nightHours: 21,
      dsrWorkingDays: 25,
      dsrNonWorkingDays: 5,
    });

    expect(result.overtime50Amount).toBe(150);
    expect(result.overtime100Amount).toBe(100);
    expect(result.nightBonusAmount).toBe(48);
    expect(result.totalOvertimeAndNight).toBe(298);
    expect(result.dsrAmount).toBe(59.6);
    expect(result.totalGrossAdditions).toBe(357.6);
    expect(result.items.length).toBe(4);
  });

  it('6. handles zero or negative inputs cleanly without NaN or exceptions', () => {
    const zeroRes = calculateHoraExtra({
      salary: 0,
      overtime50Hours: 10,
    });

    expect(zeroRes.baseHourlyRate).toBe(0);
    expect(zeroRes.totalGrossAdditions).toBe(0);
    expect(zeroRes.items).toEqual([]);

    const noHoursRes = calculateHoraExtra({
      salary: 3000,
      overtime50Hours: 0,
      overtime100Hours: 0,
      nightHours: 0,
    });

    expect(noHoursRes.baseHourlyRate).toBe(13.64);
    expect(noHoursRes.totalGrossAdditions).toBe(0);
    expect(noHoursRes.items).toEqual([]);
  });

  it('7. verifies constant NIGHT_HOUR_FACTOR precision', () => {
    expect(NIGHT_HOUR_FACTOR).toBeCloseTo(1.142857, 5);
  });
});
