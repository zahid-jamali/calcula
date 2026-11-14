import { MexicoRules2026 } from '../types';

/**
 * Mexico — labor and payroll rules in force for 2026.
 *
 * Every value carries its official source. `verifiedOn: null` means the value
 * has NOT been checked against the official publication yet and is listed in
 * VERIFY.md for audit.
 */

const LFT = 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf';
const LISR = 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf';
const LSS = 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf';
const CONASAMI = 'https://www.gob.mx/conasami';
const INEGI_UMA = 'https://www.inegi.org.mx/temas/uma/';
const SAT_ANEXO8 =
  'https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf';

export const mx2026: MexicoRules2026 = {
  year: 2026,

  // Resolución CONASAMI publicada en el DOF el 9-dic-2025, vigente desde el 1-ene-2026 (+13% general, +5% ZLFN)
  minimumWageGeneralDaily: { value: 315.04, source: CONASAMI, verifiedOn: '2026-11-14' },
  minimumWageBorderDaily: { value: 440.87, source: CONASAMI, verifiedOn: '2026-11-14' },

  minimumWageHistory: {
    value: [
      { year: 2017, general: 80.04, border: null, source: 'DOF 19-dic-2016' },
      { year: 2018, general: 88.36, border: null, source: 'DOF 21-dic-2017' },
      { year: 2019, general: 102.68, border: 176.72, source: 'DOF 26-dic-2018' },
      { year: 2020, general: 123.22, border: 185.56, source: 'DOF 23-dic-2019' },
      { year: 2021, general: 141.7, border: 213.39, source: 'DOF 23-dic-2020' },
      { year: 2022, general: 172.87, border: 260.34, source: 'DOF 8-dic-2021' },
      { year: 2023, general: 207.44, border: 312.41, source: 'DOF 7-dic-2022' },
      { year: 2024, general: 248.93, border: 374.89, source: 'DOF 12-dic-2023' },
      { year: 2025, general: 278.8, border: 419.88, source: 'DOF 23-dic-2024' },
      { year: 2026, general: 315.04, border: 440.87, source: 'DOF 9-dic-2025' },
    ],
    source: CONASAMI,
    verifiedOn: null,
  },

  // INEGI, DOF 9-ene-2026: UMA 2026 vigente desde el 1-feb-2026. En enero de 2026 seguía la UMA 2025.
  uma: {
    value: [
      { from: '2025-02-01', value: { daily: 113.14, monthly: 3439.46, annual: 41273.52 } },
      { from: '2026-02-01', value: { daily: 117.31, monthly: 3566.22, annual: 42794.64 } },
    ],
    source: INEGI_UMA,
    verifiedOn: '2026-11-14',
  },

  umaHistory: {
    value: [
      { year: 2017, daily: 75.49, monthly: 2294.9, annual: 27538.8 },
      { year: 2018, daily: 80.6, monthly: 2450.24, annual: 29402.88 },
      { year: 2019, daily: 84.49, monthly: 2568.5, annual: 30822.0 },
      { year: 2020, daily: 86.88, monthly: 2641.15, annual: 31693.8 },
      { year: 2021, daily: 89.62, monthly: 2724.45, annual: 32693.4 },
      { year: 2022, daily: 96.22, monthly: 2925.09, annual: 35101.08 },
      { year: 2023, daily: 103.74, monthly: 3153.7, annual: 37844.4 },
      { year: 2024, daily: 108.57, monthly: 3300.53, annual: 39606.36 },
      { year: 2025, daily: 113.14, monthly: 3439.46, annual: 41273.52 },
      { year: 2026, daily: 117.31, monthly: 3566.22, annual: 42794.64 },
    ],
    source: INEGI_UMA,
    verifiedOn: null,
  },

  // Tarifa mensual art. 96 LISR — Anexo 8 RMF 2026 (DOF 28-dic-2025).
  // Brackets 1-7 cross-checked; brackets 8-11 derived with the same 13.21% update factor -> VERIFY.md
  isrMonthlyTable: {
    value: [
      { lower: 0.01, upper: 844.59, fixedFee: 0, rate: 0.0192 },
      { lower: 844.6, upper: 7168.51, fixedFee: 16.22, rate: 0.064 },
      { lower: 7168.52, upper: 12598.02, fixedFee: 420.95, rate: 0.1088 },
      { lower: 12598.03, upper: 14644.64, fixedFee: 1011.68, rate: 0.16 },
      { lower: 14644.65, upper: 17533.64, fixedFee: 1339.14, rate: 0.1792 },
      { lower: 17533.65, upper: 35362.83, fixedFee: 1856.84, rate: 0.2136 },
      { lower: 35362.84, upper: 55736.68, fixedFee: 5665.16, rate: 0.2352 },
      { lower: 55736.69, upper: 106410.5, fixedFee: 10457.09, rate: 0.3 },
      { lower: 106410.51, upper: 141880.66, fixedFee: 25659.23, rate: 0.32 },
      { lower: 141880.67, upper: 425641.99, fixedFee: 37009.69, rate: 0.34 },
      { lower: 425642.0, upper: null, fixedFee: 133488.54, rate: 0.35 },
    ],
    source: SAT_ANEXO8,
    verifiedOn: null,
  },

  // Decreto DOF 31-dic-2025: 15.02% de la UMA mensual (enero 2026 transitorio: 15.59% de la UMA 2025)
  subsidioEmpleo: {
    value: {
      rateOfMonthlyUma: 0.1502,
      monthlyAmount: 535.65,
      incomeLimitMonthly: 11492.66,
    },
    source: 'https://www.dof.gob.mx',
    verifiedOn: '2026-11-14',
  },

  // Cuotas obreras IMSS (LSS arts. 25, 106, 107, 147, 168)
  imssEmployee: {
    value: {
      enfermedadMaternidadExcedente: 0.004,
      excedenteThresholdUma: 3,
      prestacionesDinero: 0.0025,
      gastosMedicosPensionados: 0.00375,
      invalidezVida: 0.00625,
      cesantiaVejez: 0.01125,
      sbcCapUma: 25,
    },
    source: LSS,
    verifiedOn: null,
  },

  // LISR art. 93 fracc. XIII (separación: 90 UMA por año), XIV (aguinaldo 30 UMA; prima vacacional y PTU 15 UMA)
  isrExemptions: {
    value: {
      aguinaldoUma: 30,
      primaVacacionalUma: 15,
      ptuUma: 15,
      separationUmaPerYear: 90,
    },
    source: LISR,
    verifiedOn: null,
  },

  aguinaldoMinDays: { value: 15, source: LFT, verifiedOn: '2026-01-01' },
  primaVacacionalRate: { value: 0.25, source: LFT, verifiedOn: '2026-01-01' },

  // LFT art. 76 reformado (DOF 27-dic-2022, vigente 1-ene-2023) "Vacaciones Dignas"
  vacationTable: {
    value: [
      { fromYear: 1, toYear: 1, days: 12 },
      { fromYear: 2, toYear: 2, days: 14 },
      { fromYear: 3, toYear: 3, days: 16 },
      { fromYear: 4, toYear: 4, days: 18 },
      { fromYear: 5, toYear: 5, days: 20 },
      { fromYear: 6, toYear: 10, days: 22 },
      { fromYear: 11, toYear: 15, days: 24 },
      { fromYear: 16, toYear: 20, days: 26 },
      { fromYear: 21, toYear: 25, days: 28 },
      { fromYear: 26, toYear: 30, days: 30 },
      { fromYear: 31, toYear: 35, days: 32 },
    ],
    source: LFT,
    verifiedOn: '2026-01-01',
  },

  indemnizacionConstitucionalDays: { value: 90, source: LFT, verifiedOn: '2026-01-01' },
  veinteDiasPorAnio: { value: 20, source: LFT, verifiedOn: '2026-01-01' },
  primaAntiguedadDaysPerYear: { value: 12, source: LFT, verifiedOn: '2026-01-01' },
  primaAntiguedadSalaryCapMultiple: { value: 2, source: LFT, verifiedOn: '2026-01-01' },
  primaAntiguedadVoluntaryMinYears: { value: 15, source: LFT, verifiedOn: '2026-01-01' },

  // LFT art. 87: antes del 20 de diciembre
  aguinaldoDeadline: { value: { month: 12, day: 20 }, source: LFT, verifiedOn: '2026-01-01' },

  // LFT art. 122: dentro de los 60 días siguientes a la fecha en que deba pagarse el impuesto anual
  ptuDeadlines: {
    value: { companies: { month: 5, day: 30 }, individuals: { month: 6, day: 29 } },
    source: LFT,
    verifiedOn: '2026-01-01',
  },
};
