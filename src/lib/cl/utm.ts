import { getStaticIndicators } from './indicators';

export interface UtmMonthItem {
  month: number;
  monthName: string;
  monthKey: string; // YYYY-MM
  value: number;
}

export interface UtmYearTable {
  year: number;
  currentMonthUtm: number;
  currentMonthName: string;
  months: UtmMonthItem[];
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

// Historical and current UTM values published by the SII
export const UTM_ANNUAL_DATA: Record<number, Record<number, number>> = {
  2026: {
    1: 69850,
    2: 70200,
    3: 70580,
    4: 70950,
    5: 71200,
    6: 71500,
    7: 71850,
    8: 72100,
    9: 72350,
    10: 72400,
    11: 72440,
    12: 72600,
  },
  2025: {
    1: 67294,
    2: 67361,
    3: 67833,
    4: 68104,
    5: 68445,
    6: 68650,
    7: 68787,
    8: 68993,
    9: 69269,
    10: 69408,
    11: 69547,
    12: 69756,
  },
  2024: {
    1: 64666,
    2: 64343,
    3: 64793,
    4: 65182,
    5: 65443,
    6: 65770,
    7: 65967,
    8: 65901,
    9: 66362,
    10: 66561,
    11: 66628,
    12: 67104,
  },
};

export function convertUtmToPesos(utmAmount: number, utmValue?: number): number {
  const indicators = getStaticIndicators();
  const rate = utmValue || indicators.utm.value;
  return Math.round(utmAmount * rate);
}

export const convertUtmToClp = convertUtmToPesos;

export function convertPesosToUtm(pesosAmount: number, utmValue?: number): number {
  const indicators = getStaticIndicators();
  const rate = utmValue || indicators.utm.value;
  if (rate <= 0) return 0;
  return Math.round((pesosAmount / rate + Number.EPSILON) * 100) / 100;
}

export const convertClpToUtm = convertPesosToUtm;

export function getUtmYearTable(targetYear = 2026): UtmYearTable {
  const indicators = getStaticIndicators();
  const currentUtm = indicators.utm.value;

  const [currYStr, currMStr] = indicators.utm.month.split('-');
  const currYear = parseInt(currYStr, 10) || targetYear;
  const currMonth = parseInt(currMStr, 10) || 11;

  const yearData = UTM_ANNUAL_DATA[targetYear] || UTM_ANNUAL_DATA[2026];

  const months: UtmMonthItem[] = [];
  for (let m = 1; m <= 12; m++) {
    // If targetYear is current year and month matches, use live indicator value
    let val = yearData[m] || currentUtm;
    if (targetYear === currYear && m === currMonth) {
      val = currentUtm;
    }

    months.push({
      month: m,
      monthName: MONTH_NAMES_ES[m - 1],
      monthKey: `${targetYear}-${String(m).padStart(2, '0')}`,
      value: val,
    });
  }

  return {
    year: targetYear,
    currentMonthUtm: currentUtm,
    currentMonthName: MONTH_NAMES_ES[currMonth - 1] || 'Noviembre',
    months,
  };
}
