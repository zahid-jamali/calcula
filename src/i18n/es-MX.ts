import { Translations } from './types';
import { esBase } from './es';

export const esMX: Translations = {
  ...esBase,
  common: {
    ...esBase.common,
    tagline: 'Calculadoras laborales y fiscales gratuitas para México bajo la LFT.',
    labels: {
      ...esBase.common.labels,
      salary: 'Sueldo o salario mensual bruto',
      reason: 'Causa de separación (renuncia o despido)',
      item: 'Concepto de finiquito / liquidación',
      disclaimerText:
        'Los resultados son estimaciones con base en la Ley Federal del Trabajo, la LISR y la LSS vigentes en 2026. Tu contrato individual o contrato colectivo puede otorgarte más prestaciones. Confirma tu cálculo con Recursos Humanos o acude gratis a la PROFEDET (Procuraduría Federal de la Defensa del Trabajo).',
      results: 'Resultado de finiquito y liquidación',
    },
  },
};
