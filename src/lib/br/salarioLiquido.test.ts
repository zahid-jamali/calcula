import { describe, it, expect } from 'vitest';
import { calculateSalarioLiquido, calculateGrossFromNet } from './salarioLiquido';

describe('salarioLiquido', () => {
  it('1. calculates salario liquido for minimum wage (R$ 1.518,00)', () => {
    const result = calculateSalarioLiquido({ grossSalary: 1518 });

    // Bracket 1: 1518 * 0.075 = 113.85
    expect(result.inss).toBe(113.85);
    expect(result.inssBrackets[0].baseCalculated).toBe(1518);
    expect(result.inssBrackets[0].contribution).toBe(113.85);
    expect(result.inssBrackets[1].baseCalculated).toBe(0);

    // Exempt from IRRF
    expect(result.irrf).toBe(0);
    expect(result.netSalary).toBe(1404.15);
    expect(result.effectiveRate).toBe(7.5);
  });

  it('2. chooses simplified discount when more advantageous on R$ 3.000,00 salary', () => {
    const result = calculateSalarioLiquido({
      grossSalary: 3000,
      irrfMethod: 'best',
    });

    // INSS: 113.85 + 114.83 + 24.73 = 253.41
    expect(result.inss).toBe(253.41);
    expect(result.inssBrackets[0].contribution).toBe(113.85);
    expect(result.inssBrackets[1].contribution).toBe(114.83);
    expect(result.inssBrackets[2].contribution).toBe(24.73);

    // Simplified deduction (564.80) > Legal deduction (253.41)
    expect(result.irrfDetail.method).toBe('simplified');
    expect(result.irrfDetail.simplifiedTax).toBeLessThan(result.irrfDetail.legalTax);
    expect(result.irrf).toBe(result.irrfDetail.simplifiedTax);
    expect(result.netSalary).toBe(3000 - result.totalDiscounts);
  });

  it('3. respects legal deduction when dependents and pension make it more advantageous', () => {
    const result = calculateSalarioLiquido({
      grossSalary: 6000,
      dependentsCount: 3, // 3 * 189.59 = 568.77
      privatePension: 400,
      irrfMethod: 'best',
    });

    // Legal deductions: INSS (~629.80) + 568.77 + 400 = 1598.57 >> 564.80 simplified
    expect(result.irrfDetail.method).toBe('legal');
    expect(result.irrfDetail.legalTax).toBeLessThan(result.irrfDetail.simplifiedTax);
    expect(result.irrf).toBe(result.irrfDetail.legalTax);
  });

  it('4. caps INSS at ceiling for high salary and applies Vale-Transporte with cap', () => {
    const result = calculateSalarioLiquido({
      grossSalary: 12000,
      discountVT: true,
      vtExpense: 300, // less than 6% (720)
      healthPlan: 250,
      otherDiscounts: 50,
    });

    // INSS capped at ceiling 8157.41 -> 951.63
    expect(result.inss).toBe(951.63);
    expect(result.vtDiscount).toBe(300);
    expect(result.healthPlan).toBe(250);
    expect(result.otherDiscounts).toBe(50);
    expect(result.totalDiscounts).toBe(
      Math.round((951.63 + result.irrf + 300 + 250 + 50) * 100) / 100
    );
    expect(result.netSalary).toBe(12000 - result.totalDiscounts);
    expect(result.effectiveRate).toBeGreaterThan(0);
  });

  it('5. enforces specific irrfMethod when requested (simplified vs legal)', () => {
    const legalRes = calculateSalarioLiquido({
      grossSalary: 4000,
      irrfMethod: 'legal',
    });
    const simpRes = calculateSalarioLiquido({
      grossSalary: 4000,
      irrfMethod: 'simplified',
    });

    expect(legalRes.irrfDetail.method).toBe('legal');
    expect(simpRes.irrfDetail.method).toBe('simplified');
    expect(legalRes.irrf).toBe(legalRes.irrfDetail.legalTax);
    expect(simpRes.irrf).toBe(simpRes.irrfDetail.simplifiedTax);
  });

  it('6. reverse calculation calculates gross salary accurately from target net salary', () => {
    const targetNet = 3500;
    const computedGross = calculateGrossFromNet(targetNet);

    const checkResult = calculateSalarioLiquido({ grossSalary: computedGross });
    expect(Math.abs(checkResult.netSalary - targetNet)).toBeLessThanOrEqual(0.05);

    // Reverse calculation with options
    const targetNetWithOptions = 5000;
    const computedGrossWithOptions = calculateGrossFromNet(targetNetWithOptions, {
      dependentsCount: 2,
      healthPlan: 200,
      discountVT: true,
    });
    const checkWithOptions = calculateSalarioLiquido({
      grossSalary: computedGrossWithOptions,
      dependentsCount: 2,
      healthPlan: 200,
      discountVT: true,
    });
    expect(Math.abs(checkWithOptions.netSalary - targetNetWithOptions)).toBeLessThanOrEqual(0.05);
  });

  it('7. handles zero or negative salary gracefully', () => {
    const zeroRes = calculateSalarioLiquido({ grossSalary: 0 });
    expect(zeroRes.grossSalary).toBe(0);
    expect(zeroRes.netSalary).toBe(0);
    expect(zeroRes.inss).toBe(0);
    expect(zeroRes.irrf).toBe(0);
    expect(zeroRes.totalDiscounts).toBe(0);

    const reverseZero = calculateGrossFromNet(0);
    expect(reverseZero).toBe(0);
  });
});
