import { Translations } from './types';
import { esBase } from './es';

export const esCL: Translations = {
  ...esBase,
  common: {
    ...esBase.common,
    tagline: 'Calculadoras de sueldo y finiquito según el Código del Trabajo en Chile.',
    labels: {
      ...esBase.common.labels,
      salary: 'Sueldo base mensual imponible',
      reason: 'Causal de término de contrato',
      item: 'Concepto de finiquito',
      results: 'Resultado del finiquito',
    },
  },
};
