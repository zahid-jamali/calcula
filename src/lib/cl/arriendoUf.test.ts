import { describe, it, expect } from 'vitest';
import { calculateArriendoUf } from './arriendoUf';

describe('Chile Arriendo UF Calculator', () => {
  it('1. converts rent in UF to CLP for chosen date', () => {
    const res = calculateArriendoUf({
      rentUf: 15,
      targetDate: '2024-06-05',
    });

    expect(res.rentUf).toBe(15);
    expect(res.selectedUfValue).toBeGreaterThan(37000);
    expect(res.currentRentPesos).toBe(Math.round(15 * res.selectedUfValue));
  });

  it('2. generates exactly 12 months in the historical rent table', () => {
    const res = calculateArriendoUf({
      rentUf: 12,
      targetDate: '2024-12-05',
    });

    expect(res.history.length).toBe(12);
    expect(res.history[0].monthKey).toBe('2024-01');
    expect(res.history[11].monthKey).toBe('2024-12');
  });

  it('3. calculates 12-month inflation and average rent accurately', () => {
    const res = calculateArriendoUf({
      rentUf: 18,
      targetDate: '2024-12-05',
    });

    expect(res.annualAverageRentPesos).toBeGreaterThan(600000);
    expect(res.twelveMonthsTotalPesos).toBe(
      res.history.reduce((sum, h) => sum + h.rentPesos, 0)
    );
    expect(res.oneYearInflationPercent).toBeGreaterThan(0);
    expect(res.oneYearInflationPesos).toBeGreaterThan(0);
  });

  it('4. calculates month-over-month differences in rent pesos', () => {
    const res = calculateArriendoUf({
      rentUf: 20,
      targetDate: '2024-06-05',
    });

    const secondMonth = res.history[1];
    expect(secondMonth.changePesosVsPrevMonth).toBeDefined();
    expect(secondMonth.changePercentVsPrevMonth).toBeDefined();
  });

  it('5. defaults to today when targetDate is omitted', () => {
    const res = calculateArriendoUf({ rentUf: 10 });
    expect(res.selectedDate).toBeDefined();
    expect(res.selectedUfValue).toBeGreaterThan(39000);
    expect(res.history.length).toBe(12);
  });
});
