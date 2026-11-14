import { Translations } from './types';
import { esBase } from './es';

export const esCO: Translations = {
  ...esBase,
  common: {
    ...esBase.common,
    tagline: 'Calculadoras laborales y prestaciones sociales gratuitas para Colombia según el CST.',
    labels: {
      ...esBase.common.labels,
      salary: 'Salario básico mensual',
      reason: 'Motivo de retiro (renuncia o despido)',
      item: 'Prestación social o acreencia',
      disclaimerText:
        'Los resultados son estimaciones con base en el Código Sustantivo del Trabajo y las normas vigentes en 2026. Tu contrato, el reglamento interno o una convención colectiva pueden otorgarte más. Confirma tu liquidación con Recursos Humanos o con el Ministerio del Trabajo.',
      results: 'Resultado de la liquidación laboral',
    },
  },
};
