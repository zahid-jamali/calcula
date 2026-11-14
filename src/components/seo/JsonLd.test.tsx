import { describe, it, expect } from 'vitest';
import { buildJsonLdData, JsonLd } from './JsonLd';
import { PageContent } from '@/content/types';

describe('JsonLd structured data', () => {
  const sampleContent: PageContent = {
    metaTitle: 'Calculadora de Rescisão Trabalhista CLT 2026',
    metaDescription:
      'Calcule sua rescisão CLT 2026 com FGTS e férias com rapidez e precisão no Calcula.',
    h1: 'Calculadora de Rescisão Trabalhista CLT',
    quickAnswer:
      'A rescisão de contrato pela CLT inclui saldo de salário, aviso prévio, 13º salário proporcional, férias vencidas e proporcionais com 1/3 e multa rescisória de 40% do FGTS em caso de dispensa sem justa causa.',
    howItWorks: [
      {
        step: 1,
        title: 'Informe a data de admissão e demissão',
        description: 'Necessário para calcular o tempo trabalhado.',
      },
    ],
    article:
      '## O que é rescisão trabalhista?\n\nA rescisão é o término formal do vínculo empregatício...',
    examples: [
      {
        title: 'Exemplo: Demissão sem justa causa',
        scenario: 'Salário de R$ 3.000, 2 anos de empresa.',
        inputs: { salario: '3000', tempo: '2 anos' },
        breakdown: [
          { item: 'Saldo de salário', amount: 'R$ 1.500,00' },
          { item: '13º proporcional', amount: 'R$ 750,00' },
        ],
        total: 'R$ 2.250,00',
      },
    ],
    faqs: [
      {
        q: 'Qual o prazo para pagamento da rescisão?',
        a: 'Pela Reforma Trabalhista (art. 477 da CLT), o pagamento deve ser realizado em até 10 dias corridos após o término do contrato.',
      },
      {
        q: 'Como é calculada a multa de 40% do FGTS?',
        a: 'A multa incide sobre todo o montante depositado pela empresa na conta vinculada do FGTS do trabalhador durante a vigência do contrato.',
      },
    ],
    sources: [
      {
        label: 'Consolidação das Leis do Trabalho (CLT) - Planalto',
        url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
      },
    ],
    relatedTools: [
      {
        title: 'Calculadora de Férias CLT',
        path: '/br/calculadora-ferias/',
        description: 'Simule o valor das suas férias com 1/3 constitucional.',
      },
    ],
    relatedGuides: [
      {
        title: 'Guia Completo da Rescisão',
        path: '/br/guia-rescisao-clt/',
        description: 'Passo a passo com todas as regras da rescisão trabalhista.',
      },
    ],
    updatedAt: '2026-01-15',
  };

  it('generates Organization with parentOrganization Zetawala', () => {
    const data = buildJsonLdData({
      country: 'br',
      slug: 'br/calculadora-rescisao',
      content: sampleContent,
    });

    const org = data['@graph'].find((item: any) => item['@type'] === 'Organization');
    expect(org).toBeDefined();
    expect(org.name).toBe('Calcula');
    expect(org.parentOrganization).toBeDefined();
    expect(org.parentOrganization['@type']).toBe('Organization');
    expect(org.parentOrganization.name).toBe('Zetawala');
    expect(org.parentOrganization.url).toBe('https://zetawala.com');
  });

  it('generates WebSite schema', () => {
    const data = buildJsonLdData({
      country: 'mx',
      slug: 'mx/calculadora-finiquito',
    });

    const website = data['@graph'].find(
      (item: any) => item['@type'] === 'WebSite'
    );
    expect(website).toBeDefined();
    expect(website.name).toBe('Calcula');
    expect(website.url).toBe('https://calcula.zetawala.com');
  });

  it('generates WebApplication with FinanceApplication category and 0 price', () => {
    const data = buildJsonLdData({
      country: 'br',
      slug: 'br/calculadora-rescisao',
      content: sampleContent,
      type: 'calculator',
    });

    const webApp = data['@graph'].find(
      (item: any) => item['@type'] === 'WebApplication'
    );
    expect(webApp).toBeDefined();
    expect(webApp.applicationCategory).toBe('FinanceApplication');
    expect(webApp.operatingSystem).toBe('Any');
    expect(webApp.offers).toBeDefined();
    expect(webApp.offers.price).toBe('0');
    expect(webApp.offers.priceCurrency).toBe('BRL');
  });

  it('generates BreadcrumbList schema', () => {
    const data = buildJsonLdData({
      country: 'co',
      slug: 'co/calculadora-liquidacion',
      title: 'Calculadora de Liquidación',
    });

    const breadcrumbs = data['@graph'].find(
      (item: any) => item['@type'] === 'BreadcrumbList'
    );
    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.itemListElement.length).toBeGreaterThanOrEqual(2);
    expect(breadcrumbs.itemListElement[0].name).toBe('Calcula');
    expect(breadcrumbs.itemListElement[1].name).toBe('Colombia');
  });

  it('generates FAQPage schema when FAQs are present', () => {
    const data = buildJsonLdData({
      country: 'br',
      slug: 'br/calculadora-rescisao',
      content: sampleContent,
    });

    const faqPage = data['@graph'].find(
      (item: any) => item['@type'] === 'FAQPage'
    );
    expect(faqPage).toBeDefined();
    expect(faqPage.mainEntity.length).toBe(2);
    expect(faqPage.mainEntity[0].name).toBe(
      'Qual o prazo para pagamento da rescisão?'
    );
  });

  it('generates Article schema when article content is present', () => {
    const data = buildJsonLdData({
      country: 'br',
      slug: 'br/calculadora-rescisao',
      content: sampleContent,
      includeArticle: true,
    });

    const article = data['@graph'].find(
      (item: any) => item['@type'] === 'Article'
    );
    expect(article).toBeDefined();
    expect(article.headline).toBe('Calculadora de Rescisão Trabalhista CLT');
    expect(article.dateModified).toBe('2026-01-15');
  });
});
