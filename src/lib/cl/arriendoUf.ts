import { getStaticIndicators, getUfForDate } from './indicators';

export interface ArriendoUfInput {
  rentUf: number;
  targetDate?: string; // YYYY-MM-DD
  dayOfMonth?: number; // 1 to 31, default 1 or 5 (standard rent payment day)
}

export interface ArriendoMonthEntry {
  monthKey: string; // YYYY-MM
  monthName: string;
  year: number;
  monthNumber: number;
  paymentDate: string;
  ufValue: number;
  rentPesos: number;
  changePesosVsPrevMonth: number;
  changePercentVsPrevMonth: number;
}

export interface ArriendoUfResult {
  rentUf: number;
  selectedDate: string;
  selectedUfValue: number;
  currentRentPesos: number;
  annualAverageRentPesos: number;
  twelveMonthsTotalPesos: number;
  oneYearInflationPesos: number;
  oneYearInflationPercent: number;
  history: ArriendoMonthEntry[];
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

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

export function calculateArriendoUf(input: ArriendoUfInput): ArriendoUfResult {
  const { rentUf, targetDate, dayOfMonth = 5 } = input;
  const indicators = getStaticIndicators();
  const selectedDate = targetDate || indicators.uf.date;
  const selectedUfValue = getUfForDate(selectedDate);
  const currentRentPesos = Math.round(rentUf * selectedUfValue);

  // Parse reference year and month
  const [refYearStr, refMonthStr] = selectedDate.split('-');
  const refYear = parseInt(refYearStr, 10);
  const refMonth = parseInt(refMonthStr, 10);

  // Generate 12 previous months ending with selected month
  const history: ArriendoMonthEntry[] = [];
  const safeDay = Math.min(28, Math.max(1, dayOfMonth));

  for (let i = 11; i >= 0; i--) {
    const d = new Date(Date.UTC(refYear, refMonth - 1 - i, safeDay));
    const yr = d.getUTCFullYear();
    const mo = d.getUTCMonth() + 1;
    const moStr = String(mo).padStart(2, '0');
    const dayStr = String(safeDay).padStart(2, '0');
    const dateStr = `${yr}-${moStr}-${dayStr}`;
    const ufVal = getUfForDate(dateStr);
    const rentPesos = Math.round(rentUf * ufVal);

    history.push({
      monthKey: `${yr}-${moStr}`,
      monthName: MONTH_NAMES_ES[mo - 1],
      year: yr,
      monthNumber: mo,
      paymentDate: dateStr,
      ufValue: ufVal,
      rentPesos,
      changePesosVsPrevMonth: 0,
      changePercentVsPrevMonth: 0,
    });
  }

  // Calculate changes between consecutive months
  for (let j = 1; j < history.length; j++) {
    const prev = history[j - 1];
    const curr = history[j];
    curr.changePesosVsPrevMonth = curr.rentPesos - prev.rentPesos;
    curr.changePercentVsPrevMonth =
      prev.rentPesos > 0
        ? round(((curr.rentPesos - prev.rentPesos) / prev.rentPesos) * 100)
        : 0;
  }

  const twelveMonthsTotalPesos = history.reduce((acc, h) => acc + h.rentPesos, 0);
  const annualAverageRentPesos = Math.round(twelveMonthsTotalPesos / history.length);

  const oldest = history[0];
  const newest = history[history.length - 1];
  const oneYearInflationPesos = newest.rentPesos - oldest.rentPesos;
  const oneYearInflationPercent =
    oldest.rentPesos > 0
      ? round(((newest.rentPesos - oldest.rentPesos) / oldest.rentPesos) * 100)
      : 0;

  return {
    rentUf,
    selectedDate,
    selectedUfValue,
    currentRentPesos,
    annualAverageRentPesos,
    twelveMonthsTotalPesos,
    oneYearInflationPesos,
    oneYearInflationPercent,
    history,
  };
}
