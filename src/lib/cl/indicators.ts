import rawIndicators from '../../../public/data/cl-indicators.json';
import rawHistory from '../../../public/data/cl-uf-history.json';

export interface ChileIndicatorItem {
  date?: string;
  month?: string;
  value: number;
}

export interface ChileIndicatorsData {
  updatedAt: string;
  uf: { date: string; value: number };
  utm: { month: string; value: number };
  dolar: { date: string; value: number };
  euro: { date: string; value: number };
  ipc: { date: string; value: number };
}

export interface UfHistoryEntry {
  date: string; // YYYY-MM-DD
  value: number;
}

export interface UfMonthDay {
  date: string;
  day: number;
  value: number;
}

export interface UfMonthSummary {
  year: number;
  month: number;
  monthName: string;
  firstValue: number;
  lastValue: number;
  averageValue: number;
  minValue: number;
  maxValue: number;
  changeAmount: number;
  changePercent: number;
  days: UfMonthDay[];
  prevMonthSlug?: string;
  nextMonthSlug?: string;
}

export interface UfYearMonthItem {
  month: number;
  monthName: string;
  firstValue: number;
  lastValue: number;
  averageValue: number;
  changePercent: number;
}

export interface UfYearSummary {
  year: number;
  firstValue: number;
  lastValue: number;
  averageValue: number;
  changePercent: number;
  months: UfYearMonthItem[];
  prevYear?: number;
  nextYear?: number;
}

const MONTH_NAMES_ES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

// Fallback values in case static files are not yet created
export const DEFAULT_INDICATORS: ChileIndicatorsData = {
  updatedAt: '2026-11-14T03:00:00.000Z',
  uf: { date: '2026-11-14', value: 41329.8 },
  utm: { month: '2026-11', value: 72440 },
  dolar: { date: '2026-11-13', value: 992.48 },
  euro: { date: '2026-11-13', value: 1096.91 },
  ipc: { date: '2025-12', value: -0.2 },
};

export function getStaticIndicators(): ChileIndicatorsData {
  return (rawIndicators as unknown as ChileIndicatorsData) || DEFAULT_INDICATORS;
}

export function getStaticUfHistory(): UfHistoryEntry[] {
  return (rawHistory as unknown as UfHistoryEntry[]) || [
    { date: '2026-01-01', value: 39500 },
    { date: '2026-11-14', value: 41329.8 },
  ];
}

/**
 * Finds the exact or closest previous UF value for a given YYYY-MM-DD date
 */
export function getUfForDate(targetDate: string): number {
  const history = getStaticUfHistory();
  if (history.length === 0) return DEFAULT_INDICATORS.uf.value;

  // Exact match
  const exact = history.find((h) => h.date === targetDate);
  if (exact) return exact.value;

  // Find latest entry <= targetDate
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].date <= targetDate) {
      return history[i].value;
    }
  }

  // If before all entries, return earliest
  return history[0]?.value || DEFAULT_INDICATORS.uf.value;
}

/**
 * Returns all month definitions available from 2020 to the latest date in history
 */
export function getAllUfMonths(): Array<{ year: number; month: number; slug: string }> {
  const history = getStaticUfHistory();
  const monthSet = new Set<string>();

  for (const entry of history) {
    if (entry.date >= '2020-01-01') {
      const ym = entry.date.substring(0, 7); // "YYYY-MM"
      monthSet.add(ym);
    }
  }

  return Array.from(monthSet)
    .sort()
    .map((ym) => {
      const [y, m] = ym.split('-').map(Number);
      return {
        year: y,
        month: m,
        slug: ym,
      };
    });
}

/**
 * Returns all years from 2020 to latest
 */
export function getAllUfYears(): number[] {
  const months = getAllUfMonths();
  const yearSet = new Set<number>();
  for (const m of months) {
    yearSet.add(m.year);
  }
  return Array.from(yearSet).sort((a, b) => a - b);
}

/**
 * Generates summary and daily list for a specific year and month
 */
export function getUfMonthSummary(year: number, month: number): UfMonthSummary | null {
  const history = getStaticUfHistory();
  const prefix = `${year}-${String(month).padStart(2, '0')}`;
  const monthEntries = history.filter((h) => h.date.startsWith(prefix));

  if (monthEntries.length === 0) return null;

  const days: UfMonthDay[] = monthEntries.map((e) => ({
    date: e.date,
    day: parseInt(e.date.split('-')[2], 10),
    value: e.value,
  }));

  const values = days.map((d) => d.value);
  const firstValue = values[0];
  const lastValue = values[values.length - 1];
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const averageValue = Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100;

  // Previous month change
  const prevMonthDate = new Date(Date.UTC(year, month - 2, 1));
  const prevY = prevMonthDate.getUTCFullYear();
  const prevM = prevMonthDate.getUTCMonth() + 1;
  const prevPrefix = `${prevY}-${String(prevM).padStart(2, '0')}`;
  const prevEntries = history.filter((h) => h.date.startsWith(prevPrefix));
  const prevLastVal = prevEntries.length > 0 ? prevEntries[prevEntries.length - 1].value : firstValue;

  const changeAmount = Math.round((lastValue - prevLastVal) * 100) / 100;
  const changePercent = Math.round(((lastValue - prevLastVal) / prevLastVal) * 10000) / 100;

  const allMonths = getAllUfMonths();
  const currentIndex = allMonths.findIndex((m) => m.year === year && m.month === month);
  const prevMonthSlug = currentIndex > 0 ? allMonths[currentIndex - 1].slug : undefined;
  const nextMonthSlug =
    currentIndex >= 0 && currentIndex < allMonths.length - 1
      ? allMonths[currentIndex + 1].slug
      : undefined;

  return {
    year,
    month,
    monthName: MONTH_NAMES_ES[month - 1] || `Mes ${month}`,
    firstValue,
    lastValue,
    averageValue,
    minValue,
    maxValue,
    changeAmount,
    changePercent,
    days,
    prevMonthSlug,
    nextMonthSlug,
  };
}

/**
 * Generates yearly summary across all months of that year
 */
export function getUfYearSummary(year: number): UfYearSummary | null {
  const allMonths = getAllUfMonths().filter((m) => m.year === year);
  if (allMonths.length === 0) return null;

  const monthItems: UfYearMonthItem[] = [];
  for (const m of allMonths) {
    const summary = getUfMonthSummary(year, m.month);
    if (summary) {
      monthItems.push({
        month: m.month,
        monthName: summary.monthName,
        firstValue: summary.firstValue,
        lastValue: summary.lastValue,
        averageValue: summary.averageValue,
        changePercent: summary.changePercent,
      });
    }
  }

  if (monthItems.length === 0) return null;

  const firstValue = monthItems[0].firstValue;
  const lastValue = monthItems[monthItems.length - 1].lastValue;
  const averageValue =
    Math.round(
      (monthItems.reduce((acc, m) => acc + m.averageValue, 0) / monthItems.length) * 100
    ) / 100;
  const changePercent = Math.round(((lastValue - firstValue) / firstValue) * 10000) / 100;

  const allYears = getAllUfYears();
  const yrIndex = allYears.indexOf(year);
  const prevYear = yrIndex > 0 ? allYears[yrIndex - 1] : undefined;
  const nextYear = yrIndex >= 0 && yrIndex < allYears.length - 1 ? allYears[yrIndex + 1] : undefined;

  return {
    year,
    firstValue,
    lastValue,
    averageValue,
    changePercent,
    months: monthItems,
    prevYear,
    nextYear,
  };
}
