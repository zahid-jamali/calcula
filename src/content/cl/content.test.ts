import { describe, it, expect } from 'vitest';
import { PageContent } from '../types';
import { validateContentPages } from '../validateContent';
import { PAGE_REGISTRY } from '@/config/pages';
import { CHILE_GUIDES } from './guias';

import { content as finiquito } from './calculadora-finiquito';
import { content as valorUfHoy } from './valor-uf-hoy';
import { content as valorUtm } from './valor-utm';
import { content as sueldoLiquido } from './calculadora-sueldo-liquido';
import { content as arriendoUf } from './calculadora-arriendo-uf';
import { content as hipotecario } from './simulador-credito-hipotecario';
import { content as sueldoMinimo } from './sueldo-minimo';
import { content as whatsapp } from './generador-de-link-whatsapp';

const pages: Record<string, PageContent> = {
  'calculadora-finiquito': finiquito,
  'valor-uf-hoy': valorUfHoy,
  'valor-utm': valorUtm,
  'calculadora-sueldo-liquido': sueldoLiquido,
  'calculadora-arriendo-uf': arriendoUf,
  'simulador-credito-hipotecario': hipotecario,
  'sueldo-minimo': sueldoMinimo,
  'generador-de-link-whatsapp': whatsapp,
  ...Object.fromEntries(Object.entries(CHILE_GUIDES).map(([k, v]) => [`guias/${k}`, v])),
};

validateContentPages('Chile content pages', pages, { pathPrefix: '/cl/' });

describe('Chile internal linking', () => {
  const registered = new Set(PAGE_REGISTRY.filter((p) => p.country === 'cl').map((p) => `/${p.slug}/`));

  it('every content page is in the page registry', () => {
    for (const key of Object.keys(pages)) {
      expect(registered.has(`/cl/${key}/`)).toBe(true);
    }
  });

  it('every related link points to a registered page', () => {
    for (const page of Object.values(pages)) {
      for (const link of [...page.relatedTools, ...page.relatedGuides]) {
        expect(registered.has(link.path)).toBe(true);
      }
    }
  });
});
