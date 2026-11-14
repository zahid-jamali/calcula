import { CountryCode } from '@/config/site';

/**
 * Parses user input string into a valid number.
 * Accepts both dot and comma as decimal separator and strips currency symbols, spaces, etc.
 */
export function parseLocalizedNumber(input: string | number | undefined | null): number {
  if (input === null || input === undefined) return 0;
  if (typeof input === 'number') return isNaN(input) ? 0 : input;

  let cleaned = input.trim();
  if (!cleaned) return 0;

  // Remove currency symbols, non-breaking spaces, and regular spaces
  cleaned = cleaned.replace(/[R$\s\u00A0]/g, '');

  const lastDot = cleaned.lastIndexOf('.');
  const lastComma = cleaned.lastIndexOf(',');

  if (lastDot !== -1 && lastComma !== -1) {
    if (lastComma > lastDot) {
      // European/LatAm style: 1.234.567,89 -> remove dots, comma to dot
      cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      // US/MX style: 1,234,567.89 -> remove commas
      cleaned = cleaned.replace(/,/g, '');
    }
  } else if (lastDot !== -1) {
    // Only dot(s) present
    const dotCount = (cleaned.match(/\./g) || []).length;
    if (dotCount > 1) {
      // Multiple dots: thousand separators (e.g. 1.423.500)
      cleaned = cleaned.replace(/\./g, '');
    }
    // If single dot, let parseFloat handle it as standard decimal (e.g. 1500.50)
  } else if (lastComma !== -1) {
    // Only comma(s) present
    const commaCount = (cleaned.match(/,/g) || []).length;
    if (commaCount > 1) {
      // Multiple commas: thousand separators (e.g. 1,423,500)
      cleaned = cleaned.replace(/,/g, '');
    } else {
      // Single comma: decimal separator (e.g. 1500,50)
      cleaned = cleaned.replace(',', '.');
    }
  }

  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

/**
 * Formats a number as currency according to the country's local convention:
 * - Brazil: R$ 1.234,56
 * - Mexico: $1,234.56
 * - Colombia: $ 1.423.500 (no decimals)
 * - Chile: $500.000 (no decimals)
 */
export function formatCurrency(amount: number, country: CountryCode): string {
  const safeAmount = isNaN(amount) ? 0 : amount;

  switch (country) {
    case 'br':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(safeAmount);

    case 'mx':
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(safeAmount);

    case 'co':
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(safeAmount);

    case 'cl':
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(safeAmount);

    default:
      return safeAmount.toFixed(2);
  }
}

/**
 * Formats a plain number with thousand separators
 */
export function formatNumber(
  value: number,
  country: CountryCode,
  decimals: number = 0
): string {
  const safeVal = isNaN(value) ? 0 : value;
  const localeMap: Record<CountryCode, string> = {
    br: 'pt-BR',
    mx: 'es-MX',
    co: 'es-CO',
    cl: 'es-CL',
  };

  return new Intl.NumberFormat(localeMap[country] || 'es', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(safeVal);
}
