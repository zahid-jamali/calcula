import { describe, it, expect } from 'vitest';
import { PageContent } from '../types';

import { content as calc13 } from './calculadora-13-salario';
import { content as calcFerias } from './calculadora-ferias';
import { content as calcSalLiq } from './calculadora-salario-liquido';
import { content as calcSegDes } from './calculadora-seguro-desemprego';
import { content as calcHoraExt } from './calculadora-hora-extra';
import { content as calcFgts } from './calculadora-fgts';

import { content as rescSemJusta } from './rescisao-sem-justa-causa';
import { content as rescPedDem } from './rescisao-pedido-de-demissao';
import { content as rescAcordo } from './rescisao-acordo';
import { content as rescJusta } from './rescisao-justa-causa';
import { content as rescExp } from './rescisao-contrato-de-experiencia';

import { content as tabInss } from './tabela-inss';
import { content as tabIrrf } from './tabela-irrf';
import { content as salMin } from './salario-minimo';

import { content as guiaQuandoCai13 } from './guias/quando-cai-o-13-salario';
import { content as guiaComoCalcResc } from './guias/como-calcular-rescisao-passo-a-passo';
import { content as guiaDirSemJusta } from './guias/direitos-na-demissao-sem-justa-causa';
import { content as guiaPedDem } from './guias/pedido-de-demissao-quais-os-direitos';
import { content as guiaAvisoPrevio } from './guias/aviso-previo-trabalhado-ou-indenizado';
import { content as guiaAcordoTrab } from './guias/acordo-trabalhista-como-funciona';
import { content as guiaMulta40 } from './guias/multa-de-40-do-fgts';
import { content as guiaFeriasDobro } from './guias/ferias-vencidas-em-dobro';

const pages: Record<string, PageContent> = {
  'calculadora-13-salario': calc13,
  'calculadora-ferias': calcFerias,
  'calculadora-salario-liquido': calcSalLiq,
  'calculadora-seguro-desemprego': calcSegDes,
  'calculadora-hora-extra': calcHoraExt,
  'calculadora-fgts': calcFgts,
  'rescisao-sem-justa-causa': rescSemJusta,
  'rescisao-pedido-de-demissao': rescPedDem,
  'rescisao-acordo': rescAcordo,
  'rescisao-justa-causa': rescJusta,
  'rescisao-contrato-de-experiencia': rescExp,
  'tabela-inss': tabInss,
  'tabela-irrf': tabIrrf,
  'salario-minimo': salMin,
  'guias/quando-cai-o-13-salario': guiaQuandoCai13,
  'guias/como-calcular-rescisao-passo-a-passo': guiaComoCalcResc,
  'guias/direitos-na-demissao-sem-justa-causa': guiaDirSemJusta,
  'guias/pedido-de-demissao-quais-os-direitos': guiaPedDem,
  'guias/aviso-previo-trabalhado-ou-indenizado': guiaAvisoPrevio,
  'guias/acordo-trabalhista-como-funciona': guiaAcordoTrab,
  'guias/multa-de-40-do-fgts': guiaMulta40,
  'guias/ferias-vencidas-em-dobro': guiaFeriasDobro,
};

describe('Brazil Content Pages Validation', () => {
  for (const [name, page] of Object.entries(pages)) {
    describe(`Page: ${name}`, () => {
      it('metaTitle is at most 60 characters', () => {
        expect(page.metaTitle.length).toBeLessThanOrEqual(60);
        expect(page.metaTitle.length).toBeGreaterThan(10);
      });

      it('metaDescription is at most 155 characters', () => {
        expect(page.metaDescription.length).toBeLessThanOrEqual(155);
        expect(page.metaDescription.length).toBeGreaterThan(50);
      });

      it('h1 is non-empty', () => {
        expect(page.h1.trim().length).toBeGreaterThan(10);
      });

      it('quickAnswer is between 40 and 60 words', () => {
        const words = page.quickAnswer.trim().split(/\s+/).filter(Boolean);
        expect(words.length).toBeGreaterThanOrEqual(40);
        expect(words.length).toBeLessThanOrEqual(60);
      });

      it('howItWorks has at least 3 steps with step, title, and description', () => {
        expect(page.howItWorks.length).toBeGreaterThanOrEqual(3);
        page.howItWorks.forEach((step, idx) => {
          expect(step.step).toBe(idx + 1);
          expect(step.title.trim().length).toBeGreaterThan(0);
          expect(step.description.trim().length).toBeGreaterThan(0);
        });
      });

      it('article has markdown H2 headings', () => {
        expect(page.article).toContain('## ');
      });

      it('examples has at least 2 worked examples with breakdown and total', () => {
        expect(page.examples.length).toBeGreaterThanOrEqual(2);
        page.examples.forEach((example) => {
          expect(example.title.trim().length).toBeGreaterThan(0);
          expect(example.scenario.trim().length).toBeGreaterThan(0);
          expect(Object.keys(example.inputs).length).toBeGreaterThan(0);
          expect(example.breakdown.length).toBeGreaterThan(0);
          expect(example.total.trim().length).toBeGreaterThan(0);
        });
      });

      it('faqs has between 8 and 10 items', () => {
        expect(page.faqs.length).toBeGreaterThanOrEqual(8);
        expect(page.faqs.length).toBeLessThanOrEqual(10);
        page.faqs.forEach((faq) => {
          expect(faq.q.trim().length).toBeGreaterThan(5);
          expect(faq.a.trim().length).toBeGreaterThan(10);
        });
      });

      it('sources has at least 2 authoritative sources', () => {
        expect(page.sources.length).toBeGreaterThanOrEqual(2);
        page.sources.forEach((src) => {
          expect(src.label.trim().length).toBeGreaterThan(0);
          expect(src.url.trim().length).toBeGreaterThan(0);
        });
      });

      it('relatedTools has at least 2 links', () => {
        expect(page.relatedTools.length).toBeGreaterThanOrEqual(2);
      });

      it('relatedGuides has at least 2 links', () => {
        expect(page.relatedGuides.length).toBeGreaterThanOrEqual(2);
      });

      it('updatedAt is set to 2026', () => {
        expect(page.updatedAt).toContain('2026');
      });
    });
  }
});
