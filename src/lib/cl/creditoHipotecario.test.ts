import { describe, it, expect } from 'vitest';
import { calculateCreditoHipotecario } from './creditoHipotecario';

describe('Chile Credito Hipotecario Simulator', () => {
  it('1. calculates standard 20-year mortgage with 20% pie and 4.5% rate', () => {
    const res = calculateCreditoHipotecario({
      propertyPriceUf: 3000,
      piePercentage: 20,
      annualRatePercentage: 4.5,
      years: 20,
      ufValue: 40000,
    });

    expect(res.pieUf).toBe(600);
    expect(res.loanAmountUf).toBe(2400);
    expect(res.totalPayments).toBe(240);
    expect(res.monthlyDividendoUf).toBeGreaterThan(15);
    expect(res.monthlyDividendoUf).toBeLessThan(20);
    expect(res.monthlyDividendoPesos).toBe(Math.round(res.monthlyDividendoUf * 40000));
    expect(res.totalInterestUf).toBeGreaterThan(1000);
  });

  it('2. calculates 30-year loan with 10% pie correctly', () => {
    const res = calculateCreditoHipotecario({
      propertyPriceUf: 4000,
      piePercentage: 10,
      annualRatePercentage: 5.0,
      years: 30,
      ufValue: 41000,
    });

    expect(res.pieUf).toBe(400);
    expect(res.loanAmountUf).toBe(3600);
    expect(res.totalPayments).toBe(360);
    expect(res.monthlyDividendoUf).toBeGreaterThan(18);
    expect(res.totalInterestUf).toBeGreaterThan(3000); // 30-year interest can exceed loan principal
  });

  it('3. handles 0% rate without division by zero', () => {
    const res = calculateCreditoHipotecario({
      propertyPriceUf: 1200,
      piePercentage: 0,
      annualRatePercentage: 0,
      years: 10,
      ufValue: 40000,
    });

    expect(res.loanAmountUf).toBe(1200);
    expect(res.monthlyDividendoUf).toBe(10); // 1200 / 120 = 10 UF
    expect(res.totalInterestUf).toBe(0);
  });

  it('4. converts amounts to pesos using custom or default UF value', () => {
    const customUf = 41329.8;
    const res = calculateCreditoHipotecario({
      propertyPriceUf: 2500,
      piePercentage: 15,
      annualRatePercentage: 4.0,
      years: 25,
      ufValue: customUf,
    });

    expect(res.propertyPricePesos).toBe(Math.round(2500 * customUf));
    expect(res.piePesos).toBe(Math.round(res.pieUf * customUf));
    expect(res.loanAmountPesos).toBe(Math.round(res.loanAmountUf * customUf));
  });

  it('5. provides insurance disclaimer in results', () => {
    const res = calculateCreditoHipotecario({
      propertyPriceUf: 2000,
      piePercentage: 20,
      annualRatePercentage: 4.2,
      years: 20,
    });

    expect(res.insuranceDisclaimer).toContain('desgravamen');
    expect(res.insuranceDisclaimer).toContain('incendio/sismo');
  });
});
