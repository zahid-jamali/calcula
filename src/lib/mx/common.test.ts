import { describe, it, expect } from 'vitest';
import {
  vacationDaysForYear,
  completedYears,
  daysInclusive,
  getUma,
  isrMonthly,
  subsidioEmpleo,
  integrationFactor,
  lastAnniversary,
} from './common';

describe('MX common helpers', () => {
  it('vacation table follows LFT art. 76 (Vacaciones Dignas)', () => {
    expect([1, 2, 3, 4, 5].map(vacationDaysForYear)).toEqual([12, 14, 16, 18, 20]);
    expect(vacationDaysForYear(6)).toBe(22);
    expect(vacationDaysForYear(10)).toBe(22);
    expect(vacationDaysForYear(11)).toBe(24);
    expect(vacationDaysForYear(16)).toBe(26);
    expect(vacationDaysForYear(21)).toBe(28);
    expect(vacationDaysForYear(26)).toBe(30);
    expect(vacationDaysForYear(35)).toBe(32);
    expect(vacationDaysForYear(0)).toBe(0);
  });

  it('counts completed years by anniversary and inclusive days', () => {
    expect(completedYears('2024-01-01', '2026-06-30')).toBe(2);
    expect(completedYears('2024-07-01', '2026-06-30')).toBe(1);
    expect(daysInclusive('2026-01-01', '2026-12-31')).toBe(365);
    expect(daysInclusive('2026-02-01', '2026-01-01')).toBe(0);
    expect(lastAnniversary('2024-03-15', '2026-06-30')).toBe('2026-03-15');
  });

  it('switches UMA on 1 February', () => {
    expect(getUma('2026-01-31').daily).toBe(113.14);
    expect(getUma('2026-02-01').daily).toBe(117.31);
    expect(getUma('2026-12-01').monthly).toBe(3566.22);
  });

  it('applies the 2026 monthly ISR table', () => {
    expect(isrMonthly(0)).toBe(0);
    // 420.95 + (10,000 − 7,168.52) × 10.88%
    expect(isrMonthly(10000)).toBeCloseTo(729.02, 1);
    // 5,665.16 + (40,000 − 35,362.84) × 23.52%
    expect(isrMonthly(40000)).toBeCloseTo(6755.82, 1);
  });

  it('grants the subsidio para el empleo only up to the income limit', () => {
    expect(subsidioEmpleo(9000)).toBe(535.65);
    expect(subsidioEmpleo(11492.66)).toBe(535.65);
    expect(subsidioEmpleo(11492.67)).toBe(0);
  });

  it('computes the legal minimum integration factor (1.0493)', () => {
    expect(integrationFactor(15, 12, 0.25)).toBeCloseTo(1.0493, 4);
  });
});
