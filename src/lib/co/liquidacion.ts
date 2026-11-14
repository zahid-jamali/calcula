import { getRules } from '@/rules';
import { CalculationLineItem } from '../br/rescisao';

export type CoSeparationReason = 'renuncia' | 'despido_sin_justa_causa' | 'despido_justa_causa';

export interface CoLiquidacionInput {
  monthlySalary: number;
  startDate: string;
  endDate: string;
  reason: CoSeparationReason;
  hasAuxilioTransporte?: boolean;
}

export interface CoLiquidacionResult {
  items: CalculationLineItem[];
  totalGross: number;
  baseSalarioConAuxilio: number;
  workedDaysTotal: number;
  workedDaysYear: number;
  serviceYears: number;
}

export function calculateCoLiquidacion(input: CoLiquidacionInput): CoLiquidacionResult {
  const { monthlySalary, startDate, endDate, reason } = input;
  const rules = getRules('co', endDate);

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = Math.max(0, end.getTime() - start.getTime());
  const workedDaysTotal = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const serviceYears = workedDaysTotal / 365;

  // Days worked in the current year (max 360 for commercial year)
  const startOfYear = new Date(end.getFullYear(), 0, 1);
  const daysInYear = Math.max(
    1,
    Math.min(360, Math.floor((end.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1)
  );

  // Auxilio de Transporte applies if salary <= 2 SMMLV
  const isEligibleAuxilio =
    input.hasAuxilioTransporte ?? monthlySalary <= rules.smmlv.value * 2;
  const auxilioVal = isEligibleAuxilio ? rules.auxilioTransporte.value : 0;
  const basePrestaciones = monthlySalary + auxilioVal;

  // 1. Cesantías (Art. 249 CST): (Base × Días) / 360
  const cesantias = Math.round((basePrestaciones * daysInYear) / 360);

  // 2. Intereses sobre Cesantías (Ley 52 de 1975): (Cesantías × Días × 12%) / 360
  const interesesCesantias = Math.round((cesantias * daysInYear * 0.12) / 360);

  // 3. Prima de Servicios (Art. 306 CST): Semestre actual (días trabajados en el semestre actual, aprox daysInYear % 180 || 180)
  const daysInSemester = end.getMonth() < 6 ? daysInYear : daysInYear - 180;
  const primaServicios = Math.round((basePrestaciones * Math.max(1, daysInSemester)) / 360);

  // 4. Vacaciones (Art. 186 CST): (Salario básico × Días) / 720 (el auxilio de transporte NO computa para vacaciones)
  const vacaciones = Math.round((monthlySalary * daysInYear) / 720);

  const items: CalculationLineItem[] = [
    {
      key: 'cesantias',
      label: `Cesantías acumuladas (${daysInYear} días)`,
      amount: cesantias,
      formula: `($${basePrestaciones.toLocaleString('es-CO')} base × ${daysInYear} días) ÷ 360`,
      legalArticle: 'Art. 249 del Código Sustantivo del Trabajo',
    },
    {
      key: 'intereses_cesantias',
      label: 'Intereses sobre Cesantías (12% anual)',
      amount: interesesCesantias,
      formula: `($${cesantias.toLocaleString('es-CO')} × ${daysInYear} días × 12%) ÷ 360`,
      legalArticle: 'Ley 52 de 1975 y Decreto 116 de 1976',
    },
    {
      key: 'prima_servicios',
      label: `Prima de servicios proporcional (${Math.max(1, daysInSemester)} días)`,
      amount: primaServicios,
      formula: `($${basePrestaciones.toLocaleString('es-CO')} base × ${Math.max(1, daysInSemester)} días) ÷ 360`,
      legalArticle: 'Art. 306 del Código Sustantivo del Trabajo',
    },
    {
      key: 'vacaciones',
      label: `Vacaciones proporcionales (${daysInYear} días)`,
      amount: vacaciones,
      formula: `($${monthlySalary.toLocaleString('es-CO')} salario básico × ${daysInYear} días) ÷ 720`,
      legalArticle: 'Art. 186 a 192 del Código Sustantivo del Trabajo',
    },
  ];

  // 5. Indemnización por despido sin justa causa (Art. 64 CST)
  if (reason === 'despido_sin_justa_causa') {
    let indemnizacion = 0;
    const dailySalary = monthlySalary / 30;

    if (serviceYears <= 1) {
      indemnizacion = Math.round(30 * dailySalary);
    } else {
      const extraYears = serviceYears - 1;
      indemnizacion = Math.round((30 + extraYears * 20) * dailySalary);
    }

    items.push({
      key: 'indemnizacion_despido',
      label: `Indemnización por despido sin justa causa (${serviceYears.toFixed(1)} años)`,
      amount: indemnizacion,
      formula: `Art. 64 CST: 30 días (primer año) + 20 días por año adicional`,
      legalArticle: 'Art. 64 del CST (reformado Ley 789 de 2002)',
    });
  }

  const totalGross = items.reduce((acc, curr) => acc + curr.amount, 0);

  return {
    items,
    totalGross,
    baseSalarioConAuxilio: basePrestaciones,
    workedDaysTotal,
    workedDaysYear: daysInYear,
    serviceYears: Math.round(serviceYears * 10) / 10,
  };
}
