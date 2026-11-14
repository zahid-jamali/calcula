import { mx2026 } from '@/rules/mx/2026';
import type { CalculationLineItem } from '../br/rescisao';
import {
  round2,
  isoYear,
  daysInclusive,
  completedYears,
  lastAnniversary,
  serviceYearsDecimal,
  vacationDaysForYear,
  getUma,
  getMinimumWage,
  integrationFactor,
  isrMonthly,
  marginalIsr,
  dailyFromInput,
  MxZone,
} from './common';

export type MxSeparationReason =
  | 'renuncia'
  | 'despido_injustificado'
  | 'despido_justificado'
  | 'fin_contrato';

export interface MxFiniquitoInput {
  salaryMode?: 'monthly' | 'daily';
  /** Monthly salary (or daily salary when salaryMode = 'daily') */
  salary: number;
  startDate: string;
  endDate: string;
  reason: MxSeparationReason;
  /** Days of salary worked and not yet paid */
  owedDays?: number;
  /** Vacation days already enjoyed in the current service year */
  vacationDaysTaken?: number;
  /** Vacation days from previous service years still pending */
  pendingPriorVacationDays?: number;
  /** Aguinaldo days per year (legal minimum 15) */
  aguinaldoDays?: number;
  /** Prima vacacional rate (legal minimum 0.25) */
  primaVacacionalRate?: number;
  /** Include 20 días por año (LFT art. 50 fr. II) — only for despido injustificado */
  include20Days?: boolean;
  zone?: MxZone;
}

export type MxItemGroup = 'finiquito' | 'liquidacion';

export interface MxLineItem extends CalculationLineItem {
  group: MxItemGroup;
  exempt: number;
  taxable: number;
}

export interface MxFiniquitoResult {
  items: MxLineItem[];
  dailySalary: number;
  sdi: number;
  integrationFactor: number;
  serviceYears: number;
  completedYears: number;
  workedDaysInYear: number;
  vacationEntitlement: number;
  vacationDaysPaid: number;
  totalFiniquito: number;
  totalLiquidacion: number;
  totalGross: number;
  totalExempt: number;
  totalTaxable: number;
  isrOrdinary: number;
  isrSeparation: number;
  isrTotal: number;
  totalNet: number;
  primaAntiguedadDue: boolean;
  uma: number;
}

const fmt = (n: number) =>
  n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function calculateMxFiniquito(input: MxFiniquitoInput): MxFiniquitoResult {
  const {
    salaryMode = 'monthly',
    salary,
    startDate,
    endDate,
    reason,
    owedDays = 0,
    vacationDaysTaken = 0,
    pendingPriorVacationDays = 0,
    include20Days = false,
    zone = 'general',
  } = input;
  const aguinaldoDays = Math.max(mx2026.aguinaldoMinDays.value, input.aguinaldoDays ?? 15);
  const primaRate = Math.max(mx2026.primaVacacionalRate.value, input.primaVacacionalRate ?? 0.25);

  const sd = round2(dailyFromInput(salaryMode, salary));
  const monthlyOrdinary = round2(sd * 30);
  const uma = getUma(endDate).daily;

  const years = serviceYearsDecimal(startDate, endDate);
  const fullYears = completedYears(startDate, endDate);

  // --- Finiquito ---------------------------------------------------------
  const items: MxLineItem[] = [];

  // 1. Días trabajados pendientes
  const owed = Math.max(0, owedDays);
  const salarioPendiente = round2(owed * sd);
  items.push({
    key: 'salario_pendiente',
    group: 'finiquito',
    label: `Días trabajados pendientes de pago (${owed} días)`,
    amount: salarioPendiente,
    formula: `${owed} días × $${fmt(sd)}`,
    legalArticle: 'Arts. 82, 88 y 89 LFT',
    exempt: 0,
    taxable: salarioPendiente,
  });

  // 2. Aguinaldo proporcional
  const yearStart = `${isoYear(endDate)}-01-01`;
  const periodStart = startDate > yearStart ? startDate : yearStart;
  const workedDaysInYear = Math.min(365, daysInclusive(periodStart, endDate));
  const aguinaldo = round2((workedDaysInYear / 365) * aguinaldoDays * sd);
  const aguinaldoExempt = round2(Math.min(aguinaldo, mx2026.isrExemptions.value.aguinaldoUma * uma));
  items.push({
    key: 'aguinaldo_proporcional',
    group: 'finiquito',
    label: `Aguinaldo proporcional (${workedDaysInYear} días del año)`,
    amount: aguinaldo,
    formula: `${workedDaysInYear} ÷ 365 × ${aguinaldoDays} días × $${fmt(sd)}`,
    legalArticle: 'Art. 87 LFT',
    exempt: aguinaldoExempt,
    taxable: round2(aguinaldo - aguinaldoExempt),
  });

  // 3. Vacaciones proporcionales no disfrutadas
  const currentServiceYear = fullYears + 1;
  const vacationEntitlement = vacationDaysForYear(currentServiceYear);
  const anniversary = lastAnniversary(startDate, endDate);
  const daysSinceAnniversary = Math.min(365, daysInclusive(anniversary, endDate));
  const proportionalVacation = (vacationEntitlement * daysSinceAnniversary) / 365;
  const vacationDaysPaid = Math.max(
    0,
    round2(proportionalVacation - Math.max(0, vacationDaysTaken) + Math.max(0, pendingPriorVacationDays))
  );
  const vacaciones = round2(vacationDaysPaid * sd);
  items.push({
    key: 'vacaciones_proporcionales',
    group: 'finiquito',
    label: `Vacaciones no disfrutadas (${vacationDaysPaid.toFixed(2)} días)`,
    amount: vacaciones,
    formula: `(${vacationEntitlement} días × ${daysSinceAnniversary} ÷ 365 − ${vacationDaysTaken} tomados${
      pendingPriorVacationDays ? ` + ${pendingPriorVacationDays} pendientes` : ''
    }) × $${fmt(sd)}`,
    legalArticle: 'Arts. 76 y 79 LFT',
    exempt: 0,
    taxable: vacaciones,
  });

  // 4. Prima vacacional
  const primaVacacional = round2(vacaciones * primaRate);
  const primaExempt = round2(
    Math.min(primaVacacional, mx2026.isrExemptions.value.primaVacacionalUma * uma)
  );
  items.push({
    key: 'prima_vacacional',
    group: 'finiquito',
    label: `Prima vacacional (${Math.round(primaRate * 100)}%)`,
    amount: primaVacacional,
    formula: `$${fmt(vacaciones)} × ${Math.round(primaRate * 100)}%`,
    legalArticle: 'Art. 80 LFT',
    exempt: primaExempt,
    taxable: round2(primaVacacional - primaExempt),
  });

  // --- Liquidación -------------------------------------------------------
  const factor = integrationFactor(aguinaldoDays, vacationEntitlement, primaRate);
  const sdi = round2(sd * factor);
  const sepItems: MxLineItem[] = [];

  if (reason === 'despido_injustificado') {
    const days = mx2026.indemnizacionConstitucionalDays.value;
    const amount = round2(days * sdi);
    sepItems.push({
      key: 'indemnizacion_constitucional',
      group: 'liquidacion',
      label: 'Indemnización constitucional (3 meses de SDI)',
      amount,
      formula: `${days} días × SDI $${fmt(sdi)}`,
      legalArticle: 'Art. 123-A fr. XXII CPEUM; arts. 48 y 50 fr. III LFT',
      exempt: 0,
      taxable: 0,
    });

    if (include20Days) {
      const perYear = mx2026.veinteDiasPorAnio.value;
      const amount20 = round2(perYear * years * sdi);
      sepItems.push({
        key: 'veinte_dias_por_anio',
        group: 'liquidacion',
        label: `20 días por año de servicio (${years.toFixed(2)} años)`,
        amount: amount20,
        formula: `${perYear} días × ${years.toFixed(2)} años × SDI $${fmt(sdi)}`,
        legalArticle: 'Arts. 49, 50 fr. II y 52 LFT',
        exempt: 0,
        taxable: 0,
      });
    }
  }

  const primaAntiguedadDue =
    reason === 'despido_injustificado' ||
    reason === 'despido_justificado' ||
    (reason === 'renuncia' && fullYears >= mx2026.primaAntiguedadVoluntaryMinYears.value);

  if (primaAntiguedadDue) {
    const cap = round2(getMinimumWage(zone) * mx2026.primaAntiguedadSalaryCapMultiple.value);
    const base = Math.min(sd, cap);
    const perYear = mx2026.primaAntiguedadDaysPerYear.value;
    const amount = round2(perYear * years * base);
    sepItems.push({
      key: 'prima_antiguedad',
      group: 'liquidacion',
      label: `Prima de antigüedad (${years.toFixed(2)} años)`,
      amount,
      formula: `${perYear} días × ${years.toFixed(2)} años × $${fmt(base)}${
        base < sd ? ' (tope 2 salarios mínimos)' : ''
      }`,
      legalArticle: 'Arts. 162, 485 y 486 LFT',
      exempt: 0,
      taxable: 0,
    });
  }

  // ISR exemption for separation payments: 90 UMA per year of service (fraction > 6 months = 1 year)
  const exemptionYears = fullYears + (years - fullYears > 0.5 ? 1 : 0);
  const sepTotal = round2(sepItems.reduce((a, i) => a + i.amount, 0));
  const sepExemptTotal = round2(
    Math.min(sepTotal, mx2026.isrExemptions.value.separationUmaPerYear * uma * exemptionYears)
  );
  for (const it of sepItems) {
    const share = sepTotal > 0 ? it.amount / sepTotal : 0;
    it.exempt = round2(sepExemptTotal * share);
    it.taxable = round2(it.amount - it.exempt);
  }
  items.push(...sepItems);

  // --- ISR estimate ------------------------------------------------------
  const finiquitoItems = items.filter((i) => i.group === 'finiquito');
  let ordinaryTaxable = round2(finiquitoItems.reduce((a, i) => a + i.taxable, 0));
  const sepTaxable = round2(sepItems.reduce((a, i) => a + i.taxable, 0));

  let isrSeparation = 0;
  if (sepTaxable > 0) {
    if (sepTaxable <= monthlyOrdinary) {
      // Art. 96 LISR: if lower than the last ordinary monthly salary, it is added to ordinary income
      ordinaryTaxable = round2(ordinaryTaxable + sepTaxable);
    } else {
      // Art. 96 LISR: effective rate of the last ordinary monthly salary
      const effectiveRate = monthlyOrdinary > 0 ? isrMonthly(monthlyOrdinary) / monthlyOrdinary : 0;
      isrSeparation = round2(sepTaxable * effectiveRate);
    }
  }
  const isrOrdinary = marginalIsr(monthlyOrdinary, ordinaryTaxable);
  const isrTotal = round2(isrOrdinary + isrSeparation);

  const totalFiniquito = round2(finiquitoItems.reduce((a, i) => a + i.amount, 0));
  const totalLiquidacion = sepTotal;
  const totalGross = round2(totalFiniquito + totalLiquidacion);
  const totalExempt = round2(items.reduce((a, i) => a + i.exempt, 0));
  const totalTaxable = round2(totalGross - totalExempt);

  return {
    items,
    dailySalary: sd,
    sdi,
    integrationFactor: Math.round(factor * 10000) / 10000,
    serviceYears: round2(years),
    completedYears: fullYears,
    workedDaysInYear,
    vacationEntitlement,
    vacationDaysPaid,
    totalFiniquito,
    totalLiquidacion,
    totalGross,
    totalExempt,
    totalTaxable,
    isrOrdinary,
    isrSeparation,
    isrTotal,
    totalNet: round2(totalGross - isrTotal),
    primaAntiguedadDue,
    uma,
  };
}
