import { co2026 } from '@/rules/co/2026';
import type { CalculationLineItem } from '../br/rescisao';
import {
  round0,
  days360,
  maxDate,
  addDaysIso,
  semesterStart,
  auxilioFor,
  formatCop,
} from './common';

export type CoContractType = 'indefinido' | 'fijo' | 'obra';
export type CoSeparationReason =
  | 'renuncia'
  | 'despido_sin_justa_causa'
  | 'despido_justa_causa'
  | 'fin_contrato';

export interface CoLiquidacionInput {
  monthlySalary: number;
  /** Average monthly variable pay (overtime, commissions) — optional */
  variableAverage?: number;
  startDate: string;
  endDate: string;
  contractType?: CoContractType;
  /** Agreed end date of a término fijo contract */
  fixedTermEndDate?: string;
  /** Expected end date of the obra o labor */
  obraEndDate?: string;
  reason: CoSeparationReason;
  /** Vacation days already enjoyed over the whole relationship */
  vacationDaysTaken?: number;
  /** Were last year's cesantías already deposited in the fund? (default yes) */
  cesantiasPreviousYearPaid?: boolean;
  /** Was the previous semester's prima already paid? (default yes) */
  primaPreviousSemesterPaid?: boolean;
  /** Days of salary owed (default: days of the final month, max 30) */
  pendingSalaryDays?: number;
}

export interface CoLiquidacionResult {
  items: CalculationLineItem[];
  totalGross: number;
  totalDeductions: number;
  totalNet: number;
  basePrestaciones: number;
  auxilio: number;
  workedDays360: number;
  serviceYears: number;
  vacationDaysAccrued: number;
  vacationDaysPending: number;
  indemnizacionDays: number;
}

export function calculateCoLiquidacion(input: CoLiquidacionInput): CoLiquidacionResult {
  const {
    monthlySalary,
    variableAverage = 0,
    startDate,
    endDate,
    contractType = 'indefinido',
    reason,
    vacationDaysTaken = 0,
    cesantiasPreviousYearPaid = true,
    primaPreviousSemesterPaid = true,
  } = input;

  const salary = Math.max(0, monthlySalary || 0);
  const variable = Math.max(0, variableAverage || 0);
  const auxilio = auxilioFor(salary);
  const base = salary + variable + auxilio; // cesantías and prima include auxilio when salary <= 2 SMMLV
  const rate = co2026.interesesCesantiasRate.value;
  const items: CalculationLineItem[] = [];
  const deductions: CalculationLineItem[] = [];

  const workedDays360 = days360(startDate, endDate);
  const endYear = Number(endDate.slice(0, 4));
  const endDay = Number(endDate.slice(8, 10));

  // 1. Salario pendiente (+ auxilio proporcional)
  const pendingDays = Math.min(30, Math.max(0, input.pendingSalaryDays ?? Math.min(30, endDay)));
  const salarioPendiente = round0(((salary + variable) / 30) * pendingDays);
  const auxPendiente = round0((auxilio / 30) * pendingDays);
  items.push({
    key: 'salario_pendiente',
    label: `Salario pendiente (${pendingDays} días)${auxPendiente ? ' + auxilio de transporte' : ''}`,
    amount: salarioPendiente + auxPendiente,
    formula: `${formatCop(salary + variable)} ÷ 30 × ${pendingDays}${auxPendiente ? ` + ${formatCop(auxilio)} ÷ 30 × ${pendingDays}` : ''}`,
    legalArticle: 'CST arts. 57 y 134',
  });
  // Salud and pensión (4% + 4%) on the salary part
  const ss = round0(salarioPendiente * (co2026.employeeContributions.value.salud + co2026.employeeContributions.value.pension));
  if (ss > 0) {
    deductions.push({
      key: 'seguridad_social',
      label: 'Aportes a salud (4%) y pensión (4%) sobre el salario pendiente',
      amount: ss,
      formula: `${formatCop(salarioPendiente)} × 8%`,
      legalArticle: 'Ley 100 de 1993',
      isDeduction: true,
    });
  }

  // 2. Cesantías + intereses (current year, and previous year if not deposited)
  const yearStart = `${endYear}-01-01`;
  const cesDays = days360(maxDate(startDate, yearStart), endDate);
  const cesantias = round0((base * cesDays) / 360);
  const intereses = round0((cesantias * cesDays * rate) / 360);
  items.push({
    key: 'cesantias',
    label: `Cesantías ${endYear} (${cesDays} días)`,
    amount: cesantias,
    formula: `${formatCop(base)} × ${cesDays} ÷ 360`,
    legalArticle: 'CST art. 249',
  });
  items.push({
    key: 'intereses_cesantias',
    label: 'Intereses sobre cesantías (12% anual)',
    amount: intereses,
    formula: `${formatCop(cesantias)} × ${cesDays} × 12% ÷ 360`,
    legalArticle: 'Ley 52 de 1975',
  });

  const prevYearStart = `${endYear - 1}-01-01`;
  if (!cesantiasPreviousYearPaid && startDate < yearStart) {
    const prevDays = days360(maxDate(startDate, prevYearStart), `${endYear - 1}-12-30`);
    const prevCes = round0((base * prevDays) / 360);
    const prevInt = round0((prevCes * prevDays * rate) / 360);
    items.push({
      key: 'cesantias_anterior',
      label: `Cesantías ${endYear - 1} no consignadas (${prevDays} días)`,
      amount: prevCes,
      formula: `${formatCop(base)} × ${prevDays} ÷ 360`,
      legalArticle: 'CST art. 249; Ley 50 de 1990 art. 99',
    });
    items.push({
      key: 'intereses_anterior',
      label: `Intereses sobre cesantías ${endYear - 1}`,
      amount: prevInt,
      formula: `${formatCop(prevCes)} × ${prevDays} × 12% ÷ 360`,
      legalArticle: 'Ley 52 de 1975',
    });
  }

  // 3. Prima de servicios (current semester, and previous if unpaid)
  const semStart = semesterStart(endDate);
  const primaDays = days360(maxDate(startDate, semStart), endDate);
  const prima = round0((base * primaDays) / 360);
  items.push({
    key: 'prima',
    label: `Prima de servicios del semestre (${primaDays} días)`,
    amount: prima,
    formula: `${formatCop(base)} × ${primaDays} ÷ 360`,
    legalArticle: 'CST art. 306',
  });
  if (!primaPreviousSemesterPaid && startDate < semStart) {
    const prevSemStart = semesterStart(addDaysIso(semStart, -1));
    const prevSemEnd = semStart.endsWith('01-01') ? `${endYear - 1}-12-30` : `${endYear}-06-30`;
    const prevDays = days360(maxDate(startDate, prevSemStart), prevSemEnd);
    items.push({
      key: 'prima_anterior',
      label: `Prima del semestre anterior no pagada (${prevDays} días)`,
      amount: round0((base * prevDays) / 360),
      formula: `${formatCop(base)} × ${prevDays} ÷ 360`,
      legalArticle: 'CST art. 306',
    });
  }

  // 4. Vacaciones: salario básico (sin auxilio) × días / 720 − días disfrutados
  const accrued = (workedDays360 * co2026.vacacionesDaysPerYear.value) / 360;
  const pendingVac = Math.max(0, accrued - Math.max(0, vacationDaysTaken));
  const vacaciones = round0((salary / 30) * pendingVac);
  items.push({
    key: 'vacaciones',
    label: `Vacaciones compensadas (${pendingVac.toFixed(2)} días)`,
    amount: vacaciones,
    formula: `${formatCop(salary)} × ${workedDays360} ÷ 720 − ${vacationDaysTaken} días disfrutados`,
    legalArticle: 'CST arts. 186 y 189',
  });

  // 5. Indemnización por despido sin justa causa (CST art. 64)
  let indemnizacionDays = 0;
  const serviceYears = workedDays360 / 360;
  if (reason === 'despido_sin_justa_causa') {
    const rules = co2026.indemnizacion.value;
    const daily = (salary + variable) / 30;
    let formula = '';
    let label = '';
    if (contractType === 'indefinido') {
      const high = salary >= rules.highSalaryThresholdSmmlv * co2026.smmlv.value;
      const first = high ? rules.highFirstYearDays : rules.lowFirstYearDays;
      const extra = high ? rules.highAdditionalYearDays : rules.lowAdditionalYearDays;
      const additionalYears = Math.max(0, serviceYears - 1);
      indemnizacionDays = first + additionalYears * extra;
      label = `Indemnización contrato a término indefinido (${serviceYears.toFixed(2)} años)`;
      formula = `${first} días + ${additionalYears.toFixed(2)} años × ${extra} días = ${indemnizacionDays.toFixed(2)} días × ${formatCop(daily)}`;
    } else if (contractType === 'fijo') {
      const until = input.fixedTermEndDate ?? endDate;
      indemnizacionDays = Math.max(0, days360(addDaysIso(endDate, 1), until));
      label = `Indemnización contrato a término fijo (${indemnizacionDays} días faltantes)`;
      formula = `Salarios del tiempo faltante hasta ${until}: ${indemnizacionDays} días × ${formatCop(daily)}`;
    } else {
      const until = input.obraEndDate ?? endDate;
      const remaining = Math.max(0, days360(addDaysIso(endDate, 1), until));
      indemnizacionDays = Math.max(rules.obraMinDays, remaining);
      label = `Indemnización contrato por obra o labor (${indemnizacionDays} días)`;
      formula = `Tiempo faltante estimado (${remaining} días), mínimo ${rules.obraMinDays} días × ${formatCop(daily)}`;
    }
    items.push({
      key: 'indemnizacion',
      label,
      amount: round0(indemnizacionDays * daily),
      formula,
      legalArticle: 'CST art. 64 (Ley 789 de 2002)',
    });
  }

  const totalGross = items.reduce((a, i) => a + i.amount, 0);
  const totalDeductions = deductions.reduce((a, i) => a + i.amount, 0);

  return {
    items: [...items, ...deductions],
    totalGross,
    totalDeductions,
    totalNet: totalGross - totalDeductions,
    basePrestaciones: base,
    auxilio,
    workedDays360,
    serviceYears: Math.round(serviceYears * 100) / 100,
    vacationDaysAccrued: Math.round(accrued * 100) / 100,
    vacationDaysPending: Math.round(pendingVac * 100) / 100,
    indemnizacionDays: Math.round(indemnizacionDays * 100) / 100,
  };
}
