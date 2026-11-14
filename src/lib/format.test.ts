import { describe, it, expect } from 'vitest';
import { parseLocalizedNumber, formatCurrency } from './format';

describe('format & parse utilities', () => {
  it('parses various localized number representations', () => {
    expect(parseLocalizedNumber('1.234,56')).toBe(1234.56);
    expect(parseLocalizedNumber('1,234.56')).toBe(1234.56);
    expect(parseLocalizedNumber('R$ 2.500,00')).toBe(2500);
    expect(parseLocalizedNumber('$1,500.50')).toBe(1500.5);
    expect(parseLocalizedNumber('$ 1.423.500')).toBe(1423500);
    expect(parseLocalizedNumber('500000')).toBe(500000);
    expect(parseLocalizedNumber('')).toBe(0);
    expect(parseLocalizedNumber(undefined)).toBe(0);
  });

  it('formats currencies according to local convention', () => {
    // Brazil
    const br = formatCurrency(1234.56, 'br');
    expect(br).toContain('1.234,56');

    // Mexico
    const mx = formatCurrency(1234.56, 'mx');
    expect(mx).toContain('1,234.56');

    // Colombia (no decimals)
    const co = formatCurrency(1423500, 'co');
    expect(co).toContain('1.423.500');

    // Chile (no decimals)
    const cl = formatCurrency(500000, 'cl');
    expect(cl).toContain('500.000');
  });
});
