import { describe, it, expect } from 'vitest';
import { calculateSeguroDesemprego } from './seguroDesemprego';

describe('seguroDesemprego', () => {
  it('1. calculates 1st request with minimum wage floor (average R$ 1.800,00)', () => {
    // 1800 * 0.8 = 1440, which is below minimum wage R$ 1518.00
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [1800, 1800, 1800],
      requestNumber: 1,
      monthsWorked: 16, // 12-23 months -> 4 installments
    });

    expect(result.isEligible).toBe(true);
    expect(result.averageSalary).toBe(1800);
    expect(result.installmentsCount).toBe(4);
    expect(result.installmentValue).toBe(1518);
    expect(result.totalBenefit).toBe(1518 * 4);
    expect(result.bracketUsed).toContain('Piso Salário Mínimo');
  });

  it('2. calculates 1st request in Bracket 2 with 5 installments (24+ months worked)', () => {
    // Average 2500 -> 1659.58 + (2500 - 2074.47) * 0.5 = 1659.58 + 212.765 = 1872.35
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [2400, 2500, 2600],
      requestNumber: 1,
      monthsWorked: 26,
    });

    expect(result.isEligible).toBe(true);
    expect(result.averageSalary).toBe(2500);
    expect(result.installmentsCount).toBe(5);
    expect(result.installmentValue).toBe(1872.35);
    expect(result.totalBenefit).toBe(1872.35 * 5);
    expect(result.bracketUsed).toContain('De R$ 2.074,48 a R$ 3.457,49');
  });

  it('3. caps benefit at legal ceiling (teto R$ 2.351,09) for high earners', () => {
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [5000, 5200, 4800],
      requestNumber: 1,
      monthsWorked: 24,
    });

    expect(result.isEligible).toBe(true);
    expect(result.averageSalary).toBe(5000);
    expect(result.installmentValue).toBe(2351.09);
    expect(result.installmentsCount).toBe(5);
    expect(result.totalBenefit).toBe(Math.round(2351.09 * 5 * 100) / 100);
    expect(result.bracketUsed).toContain('Teto R$ 2.351,09');
  });

  it('4. calculates 2nd request rules correctly (9-11 months = 3 installments)', () => {
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [3000, 3000, 3000],
      requestNumber: 2,
      monthsWorked: 10,
    });

    expect(result.isEligible).toBe(true);
    expect(result.installmentsCount).toBe(3);
    // 1659.58 + (3000 - 2074.47) * 0.5 = 1659.58 + 462.765 = 2122.35 (rounded)
    expect(result.installmentValue).toBe(2122.35);
    expect(result.totalBenefit).toBe(Math.round(2122.35 * 3 * 100) / 100);
  });

  it('5. calculates 3rd request rules correctly (6-11 months = 3 installments)', () => {
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [2000, 2000], // 2 salaries provided
      requestNumber: 3,
      monthsWorked: 7,
    });

    expect(result.isEligible).toBe(true);
    expect(result.averageSalary).toBe(2000);
    expect(result.installmentsCount).toBe(3);
    // 2000 * 0.8 = 1600 (> 1518 floor)
    expect(result.installmentValue).toBe(1600);
    expect(result.totalBenefit).toBe(4800);
  });

  it('6. rejects ineligible applicants based on minimum months worked for each request level', () => {
    // 1st request with 10 months (< 12)
    const req1 = calculateSeguroDesemprego({
      lastThreeSalaries: [2000, 2000, 2000],
      requestNumber: 1,
      monthsWorked: 10,
    });
    expect(req1.isEligible).toBe(false);
    expect(req1.installmentsCount).toBe(0);
    expect(req1.installmentValue).toBe(0);
    expect(req1.totalBenefit).toBe(0);
    expect(req1.reasonIfNotEligible).toContain('12 meses');

    // 2nd request with 8 months (< 9)
    const req2 = calculateSeguroDesemprego({
      lastThreeSalaries: [2000, 2000, 2000],
      requestNumber: 2,
      monthsWorked: 8,
    });
    expect(req2.isEligible).toBe(false);
    expect(req2.reasonIfNotEligible).toContain('9 meses');

    // 3rd request with 5 months (< 6)
    const req3 = calculateSeguroDesemprego({
      lastThreeSalaries: [2000, 2000, 2000],
      requestNumber: 3,
      monthsWorked: 5,
    });
    expect(req3.isEligible).toBe(false);
    expect(req3.reasonIfNotEligible).toContain('6 meses');
  });

  it('7. handles empty or invalid salaries gracefully', () => {
    const result = calculateSeguroDesemprego({
      lastThreeSalaries: [],
      requestNumber: 1,
      monthsWorked: 15,
    });

    expect(result.isEligible).toBe(false);
    expect(result.installmentValue).toBe(0);
    expect(result.reasonIfNotEligible).toBeDefined();
  });
});
