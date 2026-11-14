import { ColombiaRules2026 } from '../types';

/**
 * Colombia — labor and payroll rules in force for 2026.
 *
 * Every value carries its official source. `verifiedOn: null` means the value has
 * NOT been checked against the official publication yet and is listed in VERIFY.md.
 */

const CST = 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html';
const MINTRABAJO = 'https://www.mintrabajo.gov.co';
const LEY_2101 = 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2101_2021.html';
const LEY_2466 = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676';
const ET = 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html';
const DIAN_UVT = 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm';

export const co2026: ColombiaRules2026 = {
  year: 2026,

  // Decreto 1469 de 2025 (suspendido provisionalmente) y Decreto transitorio 0159 de 2026, mismo valor.
  // Pendiente sentencia de fondo del Consejo de Estado -> ver VERIFY.md
  smmlv: { value: 1750905, source: MINTRABAJO, verifiedOn: '2026-11-14' },
  // Decreto 1470 de 2025
  auxilioTransporte: { value: 249095, source: MINTRABAJO, verifiedOn: '2026-11-14' },

  smmlvHistory: {
    value: [
      { year: 2017, smmlv: 737717, auxilio: 83140, decree: 'Decreto anual del Gobierno Nacional' },
      { year: 2018, smmlv: 781242, auxilio: 88211, decree: 'Decreto anual del Gobierno Nacional' },
      { year: 2019, smmlv: 828116, auxilio: 97032, decree: 'Decreto anual del Gobierno Nacional' },
      { year: 2020, smmlv: 877803, auxilio: 102854, decree: 'Decreto anual del Gobierno Nacional' },
      { year: 2021, smmlv: 908526, auxilio: 106454, decree: 'Decreto anual del Gobierno Nacional' },
      { year: 2022, smmlv: 1000000, auxilio: 117172, decree: 'Decretos 1724 y 1725 de 2021' },
      { year: 2023, smmlv: 1160000, auxilio: 140606, decree: 'Decretos 2613 y 2614 de 2022' },
      { year: 2024, smmlv: 1300000, auxilio: 162000, decree: 'Decretos 2292 y 2293 de 2023' },
      { year: 2025, smmlv: 1423500, auxilio: 200000, decree: 'Decretos 1572 y 1573 de 2024' },
      { year: 2026, smmlv: 1750905, auxilio: 249095, decree: 'Decretos 1469 y 1470 de 2025; transitorio 0159 de 2026' },
    ],
    source: MINTRABAJO,
    verifiedOn: null,
  },

  // Resolución DIAN 000238 del 15-dic-2025
  uvt: { value: 52374, source: DIAN_UVT, verifiedOn: '2026-11-14' },

  // Ley 2101 de 2021: reducción gradual de la jornada máxima (CST art. 161)
  maxWeeklyHours: {
    value: [
      { from: '1900-01-01', value: 48 },
      { from: '2023-07-15', value: 47 },
      { from: '2024-07-15', value: 46 },
      { from: '2025-07-15', value: 44 },
      { from: '2026-07-15', value: 42 },
    ],
    source: LEY_2101,
    verifiedOn: '2026-11-14',
  },

  // Ley 2466 de 2025: trabajo nocturno desde las 7:00 p. m. (antes 9:00 p. m.) a partir del 25-dic-2025
  nightWorkStartHour: {
    value: [
      { from: '1900-01-01', value: 21 },
      { from: '2025-12-25', value: 19 },
    ],
    source: LEY_2466,
    verifiedOn: null,
  },
  nightWorkEndHour: { value: 6, source: CST, verifiedOn: '2026-01-01' },

  // Ley 2466 de 2025 art. 14 (CST art. 179): recargo dominical y festivo escalonado
  dominicalSurcharge: {
    value: [
      { from: '1900-01-01', value: 0.75 },
      { from: '2025-07-01', value: 0.8 },
      { from: '2026-07-01', value: 0.9 },
      { from: '2027-07-01', value: 1.0 },
    ],
    source: LEY_2466,
    verifiedOn: '2026-11-14',
  },

  // CST arts. 168 y 179
  overtime: {
    value: { extraDiurna: 0.25, extraNocturna: 0.75, recargoNocturno: 0.35 },
    source: CST,
    verifiedOn: '2026-01-01',
  },

  // Ley 100 de 1993: salud 4% y pensión 4% a cargo del trabajador; IBC máximo 25 SMMLV;
  // salario integral (CST art. 132): mínimo 13 SMMLV, IBC = 70%
  employeeContributions: {
    value: {
      salud: 0.04,
      pension: 0.04,
      ibcMaxSmmlv: 25,
      integralSalaryMinSmmlv: 13,
      integralSalaryIbcFactor: 0.7,
    },
    source: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    verifiedOn: null,
  },

  // Fondo de Solidaridad Pensional (Ley 797 de 2003, art. 27 Ley 100)
  fondoSolidaridad: {
    value: [
      { fromSmmlv: 4, rate: 0.01 },
      { fromSmmlv: 16, rate: 0.012 },
      { fromSmmlv: 17, rate: 0.014 },
      { fromSmmlv: 18, rate: 0.016 },
      { fromSmmlv: 19, rate: 0.018 },
      { fromSmmlv: 20, rate: 0.02 },
    ],
    source: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0797_2003.html',
    verifiedOn: null,
  },

  // Tabla de retención en la fuente, procedimiento 1 (art. 383 ET), en UVT mensuales
  retencionProcedimiento1: {
    value: [
      { lower: 0, upper: 95, fixedFee: 0, rate: 0 },
      { lower: 95, upper: 150, fixedFee: 0, rate: 0.19 },
      { lower: 150, upper: 360, fixedFee: 10, rate: 0.28 },
      { lower: 360, upper: 640, fixedFee: 69, rate: 0.33 },
      { lower: 640, upper: 945, fixedFee: 162, rate: 0.35 },
      { lower: 945, upper: 2300, fixedFee: 268, rate: 0.37 },
      { lower: 2300, upper: null, fixedFee: 770, rate: 0.39 },
    ],
    source: ET,
    verifiedOn: null,
  },

  // Art. 206 num. 10 y art. 336 ET (Ley 2277 de 2022); art. 387 ET (dependientes)
  retencion: {
    value: {
      rentaExentaRate: 0.25,
      rentaExentaCapUvtAnnual: 790,
      globalLimitRate: 0.4,
      globalLimitUvtAnnual: 1340,
      dependentDeductionRate: 0.1,
      dependentDeductionCapUvtMonthly: 32,
    },
    source: ET,
    verifiedOn: null,
  },

  cesantiasDaysPerYear: { value: 30, source: CST, verifiedOn: '2026-01-01' },
  // Ley 52 de 1975
  interesesCesantiasRate: { value: 0.12, source: CST, verifiedOn: '2026-01-01' },
  primaServiciosDaysPerYear: { value: 30, source: CST, verifiedOn: '2026-01-01' },
  // CST art. 186: 15 días hábiles por año
  vacacionesDaysPerYear: { value: 15, source: CST, verifiedOn: '2026-01-01' },
  // Ley 15 de 1959 y decreto anual: auxilio para salarios de hasta 2 SMMLV
  auxilioMaxSmmlv: { value: 2, source: MINTRABAJO, verifiedOn: '2026-01-01' },

  // CST art. 64 (modificado por Ley 789 de 2002)
  indemnizacion: {
    value: {
      highSalaryThresholdSmmlv: 10,
      lowFirstYearDays: 30,
      lowAdditionalYearDays: 20,
      highFirstYearDays: 20,
      highAdditionalYearDays: 15,
      obraMinDays: 15,
    },
    source: CST,
    verifiedOn: '2026-01-01',
  },

  // CST art. 306 (prima), Ley 50 de 1990 art. 99 (cesantías e intereses)
  deadlines: {
    value: {
      primaFirst: { month: 6, day: 30 },
      primaSecond: { month: 12, day: 20 },
      cesantiasDeposit: { month: 2, day: 14 },
      interesesPayment: { month: 1, day: 31 },
    },
    source: CST,
    verifiedOn: '2026-01-01',
  },

  reformaTimeline: {
    value: [
      { date: '2023-07-15', title: 'Jornada máxima de 47 horas', detail: 'Primera reducción de la jornada semanal (antes 48 horas).', law: 'Ley 2101 de 2021' },
      { date: '2024-07-15', title: 'Jornada máxima de 46 horas', detail: 'Segunda reducción de la jornada semanal.', law: 'Ley 2101 de 2021' },
      { date: '2025-06-25', title: 'Promulgación de la reforma laboral', detail: 'Se sanciona la Ley 2466 de 2025; varios cambios rigen desde su publicación.', law: 'Ley 2466 de 2025' },
      { date: '2025-07-01', title: 'Recargo dominical y festivo al 80%', detail: 'Primer escalón del aumento del recargo (antes 75%).', law: 'Ley 2466 de 2025, art. 14' },
      { date: '2025-07-15', title: 'Jornada máxima de 44 horas', detail: 'Tercera reducción de la jornada semanal.', law: 'Ley 2101 de 2021' },
      { date: '2025-12-25', title: 'Trabajo nocturno desde las 7:00 p. m.', detail: 'La jornada nocturna empieza a las 7:00 p. m. y no a las 9:00 p. m.; el recargo sigue en 35%.', law: 'Ley 2466 de 2025' },
      { date: '2026-07-01', title: 'Recargo dominical y festivo al 90%', detail: 'Segundo escalón del aumento del recargo.', law: 'Ley 2466 de 2025, art. 14' },
      { date: '2026-07-15', title: 'Jornada máxima de 42 horas', detail: 'Última reducción: la jornada queda en 42 horas semanales.', law: 'Ley 2101 de 2021' },
      { date: '2027-07-01', title: 'Recargo dominical y festivo al 100%', detail: 'El recargo llega a su valor definitivo.', law: 'Ley 2466 de 2025, art. 14' },
    ],
    source: LEY_2466,
    verifiedOn: null,
  },
};
