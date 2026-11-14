import { ChileRules2026 } from '../types';

export const cl2026: ChileRules2026 = {
  year: 2026,
  ingresoMinimoMensual: {
    value: 500000,
    source: 'https://www.bcn.cl/leychile',
    verifiedOn: '2026-01-01',
  },
  feriadoAnualDiasHabiles: {
    value: 15,
    source: 'https://www.dt.gob.cl',
    verifiedOn: '2026-01-01',
  },
  topeImponibleAfpUf: {
    value: 84.3,
    source: 'https://www.spensiones.cl',
    verifiedOn: '2026-01-01',
  },
  indemnizacionAniosServicioTopeAnios: {
    value: 11,
    source: 'https://www.dt.gob.cl',
    verifiedOn: '2026-01-01',
  },
  avisoPrevioMeses: {
    value: 1,
    source: 'https://www.dt.gob.cl',
    verifiedOn: '2026-01-01',
  },
};
