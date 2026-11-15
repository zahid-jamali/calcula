import { describe, it, expect } from 'vitest';
import {
  calculateSueldoLiquido,
  calculateSueldoBrutoFromLiquido,
} from './sueldoLiquido';

describe('Chile Sueldo Liquido Calculator', () => {
  it('1. calculates sueldo liquido for minimum wage ($500.000) with Fonasa and AFP Modelo', () => {
    const result = calculateSueldoLiquido({
      sueldoBase: 500000,
      gratificacionType: 'art50',
      afp: 'Modelo', // 10.58%
      saludType: 'fonasa', // 7%
      contractType: 'indefinido', // 0.6%
      ufValue: 40000,
      utmValue: 70000,
    });

    expect(result.gratificacion).toBe(125000); // 25% of 500.000 (cap is 197.917)
    expect(result.totalImponible).toBe(625000);
    expect(result.afpDiscount).toBe(Math.round(625000 * 0.1058)); // 66.125
    expect(result.saludDiscount).toBe(Math.round(625000 * 0.07)); // 43.750
    expect(result.cesantiaDiscount).toBe(Math.round(625000 * 0.006)); // 3.750
    expect(result.impuestoUnico).toBe(0); // Under 13.5 UTM is exempt
    expect(result.sueldoLiquido).toBe(
      625000 - (result.afpDiscount + result.saludDiscount + result.cesantiaDiscount)
    );
  });

  it('2. caps gratificación legal art. 50 at 4.75 ingresos mínimos / 12 for high salary', () => {
    const result = calculateSueldoLiquido({
      sueldoBase: 2000000,
      gratificacionType: 'art50',
      ufValue: 40000,
      utmValue: 70000,
    });

    // 25% of 2.000.000 = 500.000, but cap = (4.75 * 500.000) / 12 = 197.917
    expect(result.gratificacion).toBe(197917);
  });

  it('3. enforces AFP and Salud taxable ceiling (tope imponible in UF)', () => {
    const result = calculateSueldoLiquido({
      sueldoBase: 6000000,
      gratificacionType: 'none',
      afp: 'Habitat',
      ufValue: 40000, // Tope AFP 85.6 UF * 40.000 = 3.424.000
      utmValue: 70000,
    });

    expect(result.baseAfpSalud).toBe(3424000);
    expect(result.baseAfpSalud).toBeLessThan(6000000);
    // Habitat rate = 10% + 1.27% = 11.27%
    expect(result.afpDiscount).toBe(Math.round(3424000 * 0.1127));
  });

  it('4. calculates Impuesto Único de Segunda Categoría correctly for taxable base > 13.5 UTM', () => {
    const result = calculateSueldoLiquido({
      sueldoBase: 3000000,
      gratificacionType: 'none',
      afp: 'Uno', // 10.49%
      saludType: 'fonasa',
      contractType: 'indefinido',
      ufValue: 40000,
      utmValue: 70000,
    });

    // Prevision = 3.000.000 * (0.1049 + 0.07 + 0.006) = 542.700
    // Base tributable = 3.000.000 - 542.700 = 2.457.300
    // UTM = 2.457.300 / 70.000 = 35.10 UTM -> Bracket 30-50 UTM (factor 0.08, rebaja 1.74 UTM)
    expect(result.baseTributableUtm).toBeGreaterThan(30);
    expect(result.impuestoUnicoFactor).toBe(0.08);
    expect(result.impuestoUnico).toBeGreaterThan(0);
  });

  it('5. handles Isapre plan in UF with 7% minimum compliance', () => {
    const result = calculateSueldoLiquido({
      sueldoBase: 1000000,
      gratificacionType: 'none',
      saludType: 'isapre',
      isaprePlanUf: 3.5, // 3.5 * 40.000 = 140.000
      ufValue: 40000,
      utmValue: 70000,
    });

    // Legal 7% on 1.000.000 = 70.000. Since plan (140.000) > legal 7%, pays 140.000.
    expect(result.saludDiscount).toBe(140000);
  });

  it('6. reverses sueldo bruto accurately from target sueldo liquido', () => {
    const targetNet = 850000;
    const grossNeeded = calculateSueldoBrutoFromLiquido(targetNet, {
      gratificacionType: 'art50',
      afp: 'Modelo',
      saludType: 'fonasa',
      contractType: 'indefinido',
      ufValue: 40000,
      utmValue: 70000,
    });

    const verification = calculateSueldoLiquido({
      sueldoBase: grossNeeded,
      gratificacionType: 'art50',
      afp: 'Modelo',
      saludType: 'fonasa',
      contractType: 'indefinido',
      ufValue: 40000,
      utmValue: 70000,
    });

    expect(Math.abs(verification.sueldoLiquido - targetNet)).toBeLessThanOrEqual(5);
  });
});
