import { ColombiaRules2026 } from '../types';

export const co2026: ColombiaRules2026 = {
  year: 2026,
  smmlv: {
    value: 1423500,
    source: 'https://www.mintrabajo.gov.co',
    verifiedOn: '2026-01-01',
  },
  auxilioTransporte: {
    value: 200000,
    source: 'https://www.mintrabajo.gov.co',
    verifiedOn: '2026-01-01',
  },
  cesantiasRate: {
    value: 1 / 12, // 1 month of salary per year (approx 8.33%)
    source: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo_pr009.html',
    verifiedOn: '2026-01-01',
  },
  interesesCesantiasRate: {
    value: 0.12, // 12% per year on cesantías
    source: 'http://www.secretariasenado.gov.co',
    verifiedOn: '2026-01-01',
  },
  primaServiciosDaysPerYear: {
    value: 30, // 30 days per year
    source: 'http://www.secretariasenado.gov.co',
    verifiedOn: '2026-01-01',
  },
  vacacionesDaysPerYear: {
    value: 15, // 15 business days per year
    source: 'http://www.secretariasenado.gov.co',
    verifiedOn: '2026-01-01',
  },
};
