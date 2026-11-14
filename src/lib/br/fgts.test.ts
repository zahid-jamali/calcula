import { describe, it, expect } from 'vitest';
import { calculateFgts, calculateSaqueAniversario } from './fgts';

describe('fgts', () => {
  it('1. calculates standard 8% FGTS monthly deposits and rescisão fines', () => {
    // Salary 3000 * 0.08 = 240/month
    // 12 months without interest = 2880
    const result = calculateFgts({
      monthlySalary: 3000,
      monthsWorked: 12,
      currentBalance: 0,
      annualYieldRate: 0.035,
    });

    expect(result.depositRate).toBe(0.08);
    expect(result.monthlyDeposit).toBe(240);
    expect(result.totalDeposited).toBe(2880);
    expect(result.totalInterest).toBeGreaterThan(0);
    expect(result.projectedBalance).toBeGreaterThan(2880);

    // Rescisão fine 40% and 20%
    const expectedFine40 = Math.round(result.projectedBalance * 0.4 * 100) / 100;
    const expectedFine20 = Math.round(result.projectedBalance * 0.2 * 100) / 100;
    expect(result.fine40).toBe(expectedFine40);
    expect(result.fine20).toBe(expectedFine20);
    expect(result.totalWithFine40).toBe(Math.round((result.projectedBalance + expectedFine40) * 100) / 100);
    expect(result.totalWithFine20).toBe(Math.round((result.projectedBalance + expectedFine20) * 100) / 100);
  });

  it('2. applies 2% deposit rate for apprentice (Jovem Aprendiz)', () => {
    // Salary 1518 * 0.02 = 30.36
    const result = calculateFgts({
      monthlySalary: 1518,
      monthsWorked: 10,
      isApprentice: true,
    });

    expect(result.depositRate).toBe(0.02);
    expect(result.monthlyDeposit).toBe(30.36);
    expect(result.totalDeposited).toBe(303.6);
  });

  it('3. computes balance accumulation with previous balance and compound interest', () => {
    const initialBalance = 10000;
    const result = calculateFgts({
      monthlySalary: 5000, // 400/month
      monthsWorked: 24,
      currentBalance: initialBalance,
      annualYieldRate: 0.04,
    });

    expect(result.initialBalance).toBe(10000);
    expect(result.totalDeposited).toBe(400 * 24); // 9600
    // Total should be significantly higher due to interest on 10,000 + monthly deposits
    expect(result.totalInterest).toBeGreaterThan(800);
    expect(result.projectedBalance).toBe(
      Math.round((10000 + 9600 + result.totalInterest) * 100) / 100
    );
  });

  it('4. verifies Saque-Aniversário across all official Caixa brackets', () => {
    // Bracket 1: up to 500 (50% + 0)
    const b1 = calculateSaqueAniversario(400);
    expect(b1.rate).toBe(0.5);
    expect(b1.additionalParcel).toBe(0);
    expect(b1.saqueAmount).toBe(200);
    expect(b1.remainingBalance).toBe(200);

    // Bracket 2: 500.01 to 1000 (40% + 50)
    const b2 = calculateSaqueAniversario(1000);
    expect(b2.rate).toBe(0.4);
    expect(b2.additionalParcel).toBe(50);
    expect(b2.saqueAmount).toBe(450); // 400 + 50
    expect(b2.remainingBalance).toBe(550);

    // Bracket 3: 1000.01 to 5000 (30% + 150)
    const b3 = calculateSaqueAniversario(3000);
    expect(b3.rate).toBe(0.3);
    expect(b3.additionalParcel).toBe(150);
    expect(b3.saqueAmount).toBe(1050); // 900 + 150

    // Bracket 4: 5000.01 to 10000 (20% + 650)
    const b4 = calculateSaqueAniversario(8000);
    expect(b4.rate).toBe(0.2);
    expect(b4.additionalParcel).toBe(650);
    expect(b4.saqueAmount).toBe(2250); // 1600 + 650

    // Bracket 5: 10000.01 to 15000 (15% + 1150)
    const b5 = calculateSaqueAniversario(12000);
    expect(b5.rate).toBe(0.15);
    expect(b5.additionalParcel).toBe(1150);
    expect(b5.saqueAmount).toBe(2950); // 1800 + 1150

    // Bracket 6: 15000.01 to 20000 (10% + 1900)
    const b6 = calculateSaqueAniversario(18000);
    expect(b6.rate).toBe(0.1);
    expect(b6.additionalParcel).toBe(1900);
    expect(b6.saqueAmount).toBe(3700); // 1800 + 1900

    // Bracket 7: above 20000.01 (5% + 2900)
    const b7 = calculateSaqueAniversario(25000);
    expect(b7.rate).toBe(0.05);
    expect(b7.additionalParcel).toBe(2900);
    expect(b7.saqueAmount).toBe(4150); // 1250 + 2900
  });

  it('5. allows custom saqueAniversarioBalance override', () => {
    const result = calculateFgts({
      monthlySalary: 4000,
      monthsWorked: 6,
      currentBalance: 2000,
      saqueAniversarioBalance: 15000, // Explicit balance
    });

    // Saque-aniversario on 15,000: 15% + 1150 = 2250 + 1150 = 3400
    expect(result.saqueAniversario.balance).toBe(15000);
    expect(result.saqueAniversario.saqueAmount).toBe(3400);
  });

  it('6. handles zero months worked or zero balance gracefully', () => {
    const zeroRes = calculateFgts({
      monthlySalary: 3000,
      monthsWorked: 0,
      currentBalance: 500,
    });

    expect(zeroRes.projectedBalance).toBe(500);
    expect(zeroRes.totalDeposited).toBe(0);
    expect(zeroRes.totalInterest).toBe(0);

    const zeroSaque = calculateSaqueAniversario(0);
    expect(zeroSaque.balance).toBe(0);
    expect(zeroSaque.saqueAmount).toBe(0);
    expect(zeroSaque.remainingBalance).toBe(0);
  });
});
