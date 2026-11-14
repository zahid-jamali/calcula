export interface HoraExtraInput {
  salary: number;
  monthlyHours?: number; // default: 220 (or 200, 180)
  overtime50Hours?: number;
  overtime100Hours?: number;
  nightHours?: number; // Adicional noturno hours
  dsrWorkingDays?: number; // default: 25
  dsrNonWorkingDays?: number; // default: 5 (Sundays and holidays)
}

export interface HoraExtraLineItem {
  key: string;
  label: string;
  hoursOrDays: number;
  unitRate: number;
  multiplier: number;
  total: number;
  formula: string;
  legalArticle: string;
}

export interface HoraExtraResult {
  salary: number;
  monthlyHours: number;
  baseHourlyRate: number;
  overtime50Amount: number;
  overtime100Amount: number;
  nightBonusAmount: number;
  totalOvertimeAndNight: number;
  dsrAmount: number;
  totalGrossAdditions: number;
  items: HoraExtraLineItem[];
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Standard night hour reduction factor (hora noturna reduzida):
 * 60 minutes / 52.5 minutes = 1.14285714... (Art. 73, § 1º da CLT)
 */
export const NIGHT_HOUR_FACTOR = 60 / 52.5;

/**
 * Calculates overtime, night hours, DSR reflex, and total additions for Brazil.
 * Complies with Art. 59, 64, 73 da CLT, Lei 605/1949 and Súmula 172 do TST.
 */
export function calculateHoraExtra(input: HoraExtraInput): HoraExtraResult {
  const {
    salary,
    monthlyHours = 220,
    overtime50Hours = 0,
    overtime100Hours = 0,
    nightHours = 0,
    dsrWorkingDays = 25,
    dsrNonWorkingDays = 5,
  } = input;

  if (salary <= 0 || monthlyHours <= 0) {
    return {
      salary: Math.max(0, salary),
      monthlyHours: Math.max(1, monthlyHours),
      baseHourlyRate: 0,
      overtime50Amount: 0,
      overtime100Amount: 0,
      nightBonusAmount: 0,
      totalOvertimeAndNight: 0,
      dsrAmount: 0,
      totalGrossAdditions: 0,
      items: [],
    };
  }

  // 1. Base hourly rate (Art. 64 CLT)
  const baseHourlyRate = round(salary / monthlyHours);

  // 2. Overtime 50% (Art. 59 CLT e Art. 7º, XVI CF)
  const rate50 = baseHourlyRate * 1.5;
  const overtime50Amount = round(overtime50Hours * rate50);

  // 3. Overtime 100% (Art. 9º Lei 605/1949)
  const rate100 = baseHourlyRate * 2.0;
  const overtime100Amount = round(overtime100Hours * rate100);

  // 4. Adicional Noturno 20% com hora reduzida (Art. 73 CLT)
  // Hora noturna urbana: 52min30s -> fator 60/52.5 = 1.142857
  const nightBonusAmount = round(nightHours * NIGHT_HOUR_FACTOR * baseHourlyRate * 0.20);

  // 5. Total Overtime + Night Addition
  const totalOvertimeAndNight = round(overtime50Amount + overtime100Amount + nightBonusAmount);

  // 6. DSR Reflex (Lei 605/1949, Art. 7º e Súmula 172 TST)
  // DSR = (Total Horas Extras e Adicional Noturno / Dias Úteis) * Domingos e Feriados
  const dsrAmount =
    dsrWorkingDays > 0 ? round((totalOvertimeAndNight / dsrWorkingDays) * dsrNonWorkingDays) : 0;

  // 7. Total gross additions
  const totalGrossAdditions = round(totalOvertimeAndNight + dsrAmount);

  const items: HoraExtraLineItem[] = [];

  if (overtime50Hours > 0) {
    items.push({
      key: 'overtime_50',
      label: 'Horas Extras (50%)',
      hoursOrDays: overtime50Hours,
      unitRate: baseHourlyRate,
      multiplier: 1.5,
      total: overtime50Amount,
      formula: `${overtime50Hours}h × R$ ${baseHourlyRate.toFixed(2)} × 1.5`,
      legalArticle: 'Art. 59 da CLT e Art. 7º, XVI da CF/88',
    });
  }

  if (overtime100Hours > 0) {
    items.push({
      key: 'overtime_100',
      label: 'Horas Extras 100% (Domingos e Feriados)',
      hoursOrDays: overtime100Hours,
      unitRate: baseHourlyRate,
      multiplier: 2.0,
      total: overtime100Amount,
      formula: `${overtime100Hours}h × R$ ${baseHourlyRate.toFixed(2)} × 2.0`,
      legalArticle: 'Art. 9º da Lei 605/1949',
    });
  }

  if (nightHours > 0) {
    items.push({
      key: 'night_bonus',
      label: 'Adicional Noturno (20% c/ hora reduzida)',
      hoursOrDays: nightHours,
      unitRate: baseHourlyRate,
      multiplier: 0.2,
      total: nightBonusAmount,
      formula: `${nightHours}h × (60 ÷ 52.5) × R$ ${baseHourlyRate.toFixed(2)} × 20%`,
      legalArticle: 'Art. 73 da CLT',
    });
  }

  if (dsrAmount > 0) {
    items.push({
      key: 'dsr_reflex',
      label: `Reflexo em DSR (${dsrWorkingDays} dias úteis / ${dsrNonWorkingDays} repousos)`,
      hoursOrDays: dsrNonWorkingDays,
      unitRate: dsrWorkingDays > 0 ? round(totalOvertimeAndNight / dsrWorkingDays) : 0,
      multiplier: 1,
      total: dsrAmount,
      formula: `(R$ ${totalOvertimeAndNight.toFixed(2)} ÷ ${dsrWorkingDays}) × ${dsrNonWorkingDays}`,
      legalArticle: 'Lei 605/1949 e Súmula 172 do TST',
    });
  }

  return {
    salary: round(salary),
    monthlyHours,
    baseHourlyRate,
    overtime50Amount,
    overtime100Amount,
    nightBonusAmount,
    totalOvertimeAndNight,
    dsrAmount,
    totalGrossAdditions,
    items,
  };
}
