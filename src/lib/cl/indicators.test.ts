import { describe, it, expect } from 'vitest';
import {
  getStaticIndicators,
  getStaticUfHistory,
  getUfForDate,
  getAllUfMonths,
  getAllUfYears,
  getUfMonthSummary,
  getUfYearSummary,
} from './indicators';

describe('Chile Indicators & UF History Pipeline', () => {
  it('loads valid static indicators with required keys', () => {
    const data = getStaticIndicators();
    expect(data).toBeDefined();
    expect(data.uf.value).toBeGreaterThan(30000);
    expect(data.utm.value).toBeGreaterThan(60000);
    expect(data.dolar.value).toBeGreaterThan(800);
    expect(data.euro.value).toBeGreaterThan(900);
  });

  it('loads UF history from 2020 onwards with thousands of entries', () => {
    const history = getStaticUfHistory();
    expect(history.length).toBeGreaterThan(1000);
    expect(history[0].date).toBe('2020-01-01');
    expect(history[0].value).toBeGreaterThan(28000);
  });

  it('correctly retrieves UF value for a given date or nearest past date', () => {
    const uf2020 = getUfForDate('2020-06-15');
    expect(uf2020).toBeGreaterThan(28000);
    expect(uf2020).toBeLessThan(30000);

    const uf2024 = getUfForDate('2024-01-01');
    expect(uf2024).toBeGreaterThan(36000);
  });

  it('returns valid months list from 2020 to current date', () => {
    const months = getAllUfMonths();
    expect(months.length).toBeGreaterThan(50);
    expect(months[0]).toEqual({ year: 2020, month: 1, slug: '2020-01' });
  });

  it('generates accurate month summary and day list for Jan 2024', () => {
    const jan2024 = getUfMonthSummary(2024, 1);
    expect(jan2024).not.toBeNull();
    expect(jan2024?.monthName).toBe('Enero');
    expect(jan2024?.days.length).toBe(31);
    expect(jan2024?.firstValue).toBeGreaterThan(36000);
    expect(jan2024?.lastValue).toBeGreaterThan(36000);
  });

  it('generates accurate year summary for 2023', () => {
    const summary2023 = getUfYearSummary(2023);
    expect(summary2023).not.toBeNull();
    expect(summary2023?.year).toBe(2023);
    expect(summary2023?.months.length).toBe(12);
  });

  it('returns valid years list containing 2020 through 2026', () => {
    const years = getAllUfYears();
    expect(years).toContain(2020);
    expect(years).toContain(2023);
    expect(years).toContain(2024);
    expect(years).toContain(2026);
  });
});
