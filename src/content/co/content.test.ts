import { describe, it, expect } from 'vitest';
import { PageContent } from '../types';
import { validateContentPages } from '../validateContent';
import { PAGE_REGISTRY } from '@/config/pages';
import { CO_GUIDES_MAP } from './guias';

import { content as liquidacion } from './calculadora-liquidacion';
import { content as renuncia } from './liquidacion-renuncia';
import { content as despido } from './liquidacion-despido-sin-justa-causa';
import { content as terminoFijo } from './liquidacion-contrato-a-termino-fijo';
import { content as prima } from './calculadora-prima';
import { content as cesantias } from './calculadora-cesantias';
import { content as vacaciones } from './calculadora-vacaciones';
import { content as salarioNeto } from './calculadora-salario-neto';
import { content as horasExtras } from './calculadora-horas-extras';
import { content as salarioMinimo } from './salario-minimo';
import { content as auxilio } from './auxilio-de-transporte';
import { content as reforma } from './reforma-laboral';

const pages: Record<string, PageContent> = {
  'calculadora-liquidacion': liquidacion,
  'calculadora-liquidacion/renuncia': renuncia,
  'calculadora-liquidacion/despido-sin-justa-causa': despido,
  'calculadora-liquidacion/contrato-a-termino-fijo': terminoFijo,
  'calculadora-prima': prima,
  'calculadora-cesantias': cesantias,
  'calculadora-vacaciones': vacaciones,
  'calculadora-salario-neto': salarioNeto,
  'calculadora-horas-extras': horasExtras,
  'salario-minimo': salarioMinimo,
  'auxilio-de-transporte': auxilio,
  'reforma-laboral': reforma,
  ...Object.fromEntries(Object.entries(CO_GUIDES_MAP).map(([k, v]) => [`guias/${k}`, v])),
};

validateContentPages('Colombia content pages', pages, { pathPrefix: '/co/' });

describe('Colombia internal linking', () => {
  const registered = new Set(PAGE_REGISTRY.filter((p) => p.country === 'co').map((p) => `/${p.slug}/`));

  it('every content page is in the page registry', () => {
    for (const key of Object.keys(pages)) {
      expect(registered.has(`/co/${key}/`)).toBe(true);
    }
  });

  it('every related link points to a registered page', () => {
    for (const page of Object.values(pages)) {
      for (const link of [...page.relatedTools, ...page.relatedGuides]) {
        expect(registered.has(link.path)).toBe(true);
      }
    }
  });

  it('texts are written for Colombia, not shared with Mexico', () => {
    for (const page of Object.values(pages)) {
      expect(page.article).not.toMatch(/aguinaldo|finiquito|\bUMA\b|\bLFT\b|IMSS|PROFEDET/i);
    }
  });
});
