import { ChileRules2026 } from '../types';

export const cl2026: ChileRules2026 = {
  year: 2026,
  ingresoMinimoMensual: {
    value: 500000,
    source: 'https://www.bcn.cl/leychile/navegar?idNorma=1191549',
    verifiedOn: '2026-01-01',
  },
  sueldoMinimoHistory: {
    value: [
      { year: 2026, value: 500000, law: 'Ley 21.578', effectiveDate: '01/01/2026' },
      { year: 2025, value: 500000, law: 'Ley 21.578', effectiveDate: '01/01/2025' },
      { year: 2024, value: 500000, law: 'Ley 21.578', effectiveDate: '01/07/2024' },
      { year: 2023, value: 460000, law: 'Ley 21.578', effectiveDate: '01/09/2023' },
      { year: 2022, value: 400000, law: 'Ley 21.456', effectiveDate: '01/08/2022' },
      { year: 2021, value: 337000, law: 'Ley 21.360', effectiveDate: '01/05/2021' },
      { year: 2020, value: 326500, law: 'Ley 21.283', effectiveDate: '01/09/2020' },
      { year: 2019, value: 301000, law: 'Ley 21.112', effectiveDate: '01/03/2019' },
      { year: 2018, value: 288000, law: 'Ley 20.935', effectiveDate: '01/01/2018' },
      { year: 2017, value: 270000, law: 'Ley 20.935', effectiveDate: '01/07/2017' },
    ],
    source: 'https://www.bcn.cl/leychile/historial-sueldo-minimo',
    verifiedOn: '2026-01-01',
  },
  topeImponibleAfpUf: {
    value: 85.6,
    source: 'https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-10359.html',
    verifiedOn: '2026-01-01',
  },
  topeImponibleCesantiaUf: {
    value: 128.4,
    source: 'https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-10359.html',
    verifiedOn: '2026-01-01',
  },
  afpMandatoryRate: {
    value: 0.1,
    source: 'https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-9918.html',
    verifiedOn: '2026-01-01',
  },
  afpCommissions: {
    value: {
      Capital: { name: 'Capital', commission: 0.0144, totalRate: 0.1144 },
      Cuprum: { name: 'Cuprum', commission: 0.0144, totalRate: 0.1144 },
      Habitat: { name: 'Habitat', commission: 0.0127, totalRate: 0.1127 },
      Modelo: { name: 'Modelo', commission: 0.0058, totalRate: 0.1058 },
      PlanVital: { name: 'PlanVital', commission: 0.0116, totalRate: 0.1116 },
      Provida: { name: 'Provida', commission: 0.0145, totalRate: 0.1145 },
      Uno: { name: 'Uno', commission: 0.0049, totalRate: 0.1049 },
    },
    source: 'https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-9918.html',
    verifiedOn: '2026-01-01',
  },
  fonasaRate: {
    value: 0.07,
    source: 'https://www.fonasa.cl',
    verifiedOn: '2026-01-01',
  },
  cesantiaEmployeeIndefinidoRate: {
    value: 0.006,
    source: 'https://www.afc.cl/empleados/como-funciona/cotizaciones/',
    verifiedOn: '2026-01-01',
  },
  cesantiaEmployeePlazoFijoRate: {
    value: 0.0,
    source: 'https://www.afc.cl/empleados/como-funciona/cotizaciones/',
    verifiedOn: '2026-01-01',
  },
  impuestoUnicoBrackets: {
    value: [
      { fromUtm: 0, toUtm: 13.5, factor: 0.0, rebajaUtm: 0 },
      { fromUtm: 13.5, toUtm: 30, factor: 0.04, rebajaUtm: 0.54 },
      { fromUtm: 30, toUtm: 50, factor: 0.08, rebajaUtm: 1.74 },
      { fromUtm: 50, toUtm: 70, factor: 0.135, rebajaUtm: 4.49 },
      { fromUtm: 70, toUtm: 90, factor: 0.23, rebajaUtm: 11.14 },
      { fromUtm: 90, toUtm: 120, factor: 0.304, rebajaUtm: 17.8 },
      { fromUtm: 120, toUtm: 310, factor: 0.35, rebajaUtm: 23.32 },
      { fromUtm: 310, toUtm: null, factor: 0.4, rebajaUtm: 38.82 },
    ],
    source: 'https://www.sii.cl/valores_y_fechas/impuesto_segunda_categoria/impuesto_segunda_categoria2026.htm',
    verifiedOn: '2026-01-01',
  },
  gratificacionArt50CapMultiple: {
    value: 4.75,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60140.html',
    verifiedOn: '2026-01-01',
  },
  gratificacionArt50Rate: {
    value: 0.25,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60140.html',
    verifiedOn: '2026-01-01',
  },
  indemnizacionCapUf: {
    value: 90,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60143.html',
    verifiedOn: '2026-01-01',
  },
  indemnizacionMaxYears: {
    value: 11,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60143.html',
    verifiedOn: '2026-01-01',
  },
  feriadoAnualDiasHabiles: {
    value: 15,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60141.html',
    verifiedOn: '2026-01-01',
  },
  feriadoMonthlyRate: {
    value: 1.25,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60141.html',
    verifiedOn: '2026-01-01',
  },
  indemnizacionAniosServicioTopeAnios: {
    value: 11,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60143.html',
    verifiedOn: '2026-01-01',
  },
  avisoPrevioMeses: {
    value: 1,
    source: 'https://www.dt.gob.cl/portal/1628/w3-article-60143.html',
    verifiedOn: '2026-01-01',
  },
};
