import { describe, it, expect } from 'vitest';
import { PageContent } from '../types';
import { validateContentPages } from '../validateContent';
import { PAGE_REGISTRY } from '@/config/pages';
import { MX_GUIDES_MAP } from './guias';

import { content as finiquito } from './calculadora-finiquito';
import { content as renuncia } from './finiquito-renuncia-voluntaria';
import { content as liquidacion } from './calculadora-liquidacion';
import { content as aguinaldo } from './calculadora-aguinaldo';
import { content as vacaciones } from './calculadora-vacaciones';
import { content as sueldoNeto } from './calculadora-sueldo-neto';
import { content as sdi } from './calculadora-salario-diario-integrado';
import { content as ptu } from './calculadora-ptu';
import { content as salarioMinimo } from './salario-minimo';
import { content as uma } from './uma';
import { content as tablaIsr } from './tabla-isr';
import { content as tablaVacaciones } from './tabla-de-vacaciones';

const pages: Record<string, PageContent> = {
  'calculadora-finiquito': finiquito,
  'calculadora-finiquito/renuncia-voluntaria': renuncia,
  'calculadora-liquidacion': liquidacion,
  'calculadora-aguinaldo': aguinaldo,
  'calculadora-vacaciones': vacaciones,
  'calculadora-sueldo-neto': sueldoNeto,
  'calculadora-salario-diario-integrado': sdi,
  'calculadora-ptu': ptu,
  'salario-minimo': salarioMinimo,
  uma,
  'tabla-isr': tablaIsr,
  'tabla-de-vacaciones': tablaVacaciones,
  ...Object.fromEntries(Object.entries(MX_GUIDES_MAP).map(([k, v]) => [`guias/${k}`, v])),
};

validateContentPages('Mexico content pages', pages, { pathPrefix: '/mx/' });

describe('Mexico internal linking', () => {
  const registered = new Set(PAGE_REGISTRY.filter((p) => p.country === 'mx').map((p) => `/${p.slug}/`));

  it('every content page is in the page registry', () => {
    for (const key of Object.keys(pages)) {
      expect(registered.has(`/mx/${key}/`)).toBe(true);
    }
  });

  it('every related link points to a registered page', () => {
    for (const page of Object.values(pages)) {
      for (const link of [...page.relatedTools, ...page.relatedGuides]) {
        expect(registered.has(link.path)).toBe(true);
      }
    }
  });

  it('texts are not shared with Colombia (no Colombian legal terms)', () => {
    for (const page of Object.values(pages)) {
      expect(page.article).not.toMatch(/SMMLV|Código Sustantivo|cesantías/i);
    }
  });
});
