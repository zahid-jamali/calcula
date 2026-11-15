import { describe, it, expect } from 'vitest';
import {
  convertUtmToPesos,
  convertPesosToUtm,
  getUtmYearTable,
} from './utm';

describe('Chile UTM Utility and Converter', () => {
  it('1. converts UTM to CLP accurately', () => {
    const pesos = convertUtmToPesos(2.5, 70000);
    expect(pesos).toBe(175000);
  });

  it('2. converts CLP to UTM accurately', () => {
    const utm = convertPesosToUtm(350000, 70000);
    expect(utm).toBe(5.0);
  });

  it('3. uses default indicator UTM when custom rate is omitted', () => {
    const pesos = convertUtmToPesos(1);
    expect(pesos).toBeGreaterThan(65000);
    expect(pesos).toBeLessThan(80000);
  });

  it('4. returns 12-month table for the year 2026', () => {
    const table = getUtmYearTable(2026);
    expect(table.year).toBe(2026);
    expect(table.months.length).toBe(12);
    expect(table.months[0].monthName).toBe('Enero');
    expect(table.months[11].monthName).toBe('Diciembre');
  });

  it('5. handles 2025 table with verified SII historical values', () => {
    const table2025 = getUtmYearTable(2025);
    expect(table2025.months[0].value).toBe(67294);
    expect(table2025.months[11].value).toBe(69756);
  });
});
