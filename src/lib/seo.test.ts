import { describe, it, expect } from 'vitest';
import {
  buildCanonicalUrl,
  buildSeoTitle,
  buildSeoDescription,
  buildMetadata,
} from './seo';

describe('SEO Utilities (buildCanonicalUrl)', () => {
  it('builds canonical URL with trailing slash for root', () => {
    expect(buildCanonicalUrl('')).toBe('https://calcula.zetawala.com/');
    expect(buildCanonicalUrl('/')).toBe('https://calcula.zetawala.com/');
  });

  it('builds canonical URL with trailing slash for country homepage', () => {
    expect(buildCanonicalUrl('br', 'br')).toBe('https://calcula.zetawala.com/br/');
    expect(buildCanonicalUrl('', 'br')).toBe('https://calcula.zetawala.com/br/');
    expect(buildCanonicalUrl('/mx/', 'mx')).toBe('https://calcula.zetawala.com/mx/');
  });

  it('builds canonical URL for country-specific tools', () => {
    expect(
      buildCanonicalUrl('calculadora-rescisao', 'br')
    ).toBe('https://calcula.zetawala.com/br/calculadora-rescisao/');

    expect(
      buildCanonicalUrl('br/calculadora-rescisao', 'br')
    ).toBe('https://calcula.zetawala.com/br/calculadora-rescisao/');

    expect(
      buildCanonicalUrl('/mx/calculadora-finiquito/', 'mx')
    ).toBe('https://calcula.zetawala.com/mx/calculadora-finiquito/');
  });
});

describe('SEO Title (buildSeoTitle)', () => {
  it('enforces main keyword first, year and | Calcula', () => {
    const title = buildSeoTitle('Calculadora de Rescisão Trabalhista CLT', 'br');
    expect(title).toBe('Calculadora de Rescisão Trabalhista CLT 2026 | Calcula');
    expect(title.length).toBeLessThanOrEqual(60);
    expect(title.endsWith(' | Calcula')).toBe(true);
  });

  it('enforces max 60 characters even with very long keywords', () => {
    const veryLongTitle =
      'Calculadora de Indenização Trabalhista e Rescisão Contratual Completa Super Extensa';
    const title = buildSeoTitle(veryLongTitle, 'br');
    expect(title.length).toBeLessThanOrEqual(60);
    expect(title.endsWith(' | Calcula')).toBe(true);
  });

  it('generates fallback title when rawTitle is omitted', () => {
    const titleBr = buildSeoTitle(undefined, 'br');
    expect(titleBr).toBe('Calculadoras Trabalhistas 2026 | Calcula');
    expect(titleBr.length).toBeLessThanOrEqual(60);

    const titleMx = buildSeoTitle(undefined, 'mx');
    expect(titleMx).toBe('Calculadoras Laborales México 2026 | Calcula');
    expect(titleMx.length).toBeLessThanOrEqual(60);
  });
});

describe('SEO Description (buildSeoDescription)', () => {
  it('provides benefit and CTA, respecting max 155 characters', () => {
    const brDesc = buildSeoDescription(undefined, 'br');
    expect(brDesc.length).toBeLessThanOrEqual(155);
    expect(brDesc).toContain('CLT');
    expect(brDesc).toContain('Calcula');

    const mxDesc = buildSeoDescription(undefined, 'mx');
    expect(mxDesc.length).toBeLessThanOrEqual(155);
    expect(mxDesc).toContain('LFT');
    expect(mxDesc).toContain('Calcula');
  });

  it('truncates override description exceeding 155 characters', () => {
    const longDesc =
      'A'.repeat(200) + ' Esta descrição é intencionalmente muito longa para testar o corte estrito de 155 caracteres.';
    const desc = buildSeoDescription(longDesc, 'br');
    expect(desc.length).toBeLessThanOrEqual(155);
    expect(desc.endsWith('…')).toBe(true);
  });
});

describe('buildMetadata', () => {
  it('creates complete metadata for country tool without hreflang cross-linking', () => {
    const meta = buildMetadata({
      country: 'br',
      slug: 'br/calculadora-rescisao',
    });

    expect(meta.alternates?.canonical).toBe(
      'https://calcula.zetawala.com/br/calculadora-rescisao/'
    );
    // MUST NOT link country-specific calculators via hreflang!
    expect(meta.alternates?.languages).toBeUndefined();

    // Title & Description
    expect(meta.title?.toString().length).toBeLessThanOrEqual(60);
    expect(meta.description?.length).toBeLessThanOrEqual(155);

    // OpenGraph
    expect(meta.openGraph?.locale).toBe('pt_BR');
    expect(meta.openGraph?.siteName).toBe('Calcula');
    expect(meta.openGraph?.url).toBe(
      'https://calcula.zetawala.com/br/calculadora-rescisao/'
    );
    expect((meta.openGraph?.images as any[])?.[0]?.url).toContain('calcula.jpg');

    // Twitter
    expect((meta.twitter as any)?.card).toBe('summary_large_image');
  });

  it('adds hreflang for true equivalents like country homepages and root', () => {
    const metaHomeBr = buildMetadata({
      country: 'br',
      slug: 'br',
    });

    expect(metaHomeBr.alternates?.canonical).toBe(
      'https://calcula.zetawala.com/br/'
    );
    expect(metaHomeBr.alternates?.languages).toBeDefined();
    expect(metaHomeBr.alternates?.languages?.['pt-BR']).toBe(
      'https://calcula.zetawala.com/br/'
    );
    expect(metaHomeBr.alternates?.languages?.['es-MX']).toBe(
      'https://calcula.zetawala.com/mx/'
    );
    expect(metaHomeBr.alternates?.languages?.['es-CO']).toBe(
      'https://calcula.zetawala.com/co/'
    );
    expect(metaHomeBr.alternates?.languages?.['es-CL']).toBe(
      'https://calcula.zetawala.com/cl/'
    );
    expect(metaHomeBr.alternates?.languages?.['x-default']).toBe(
      'https://calcula.zetawala.com/'
    );

    const metaRoot = buildMetadata({
      slug: '',
    });
    expect(metaRoot.alternates?.canonical).toBe('https://calcula.zetawala.com/');
    expect(metaRoot.alternates?.languages?.['x-default']).toBe(
      'https://calcula.zetawala.com/'
    );
  });

  it('correctly maps all country locales in OpenGraph', () => {
    expect(buildMetadata({ country: 'br', slug: 'br' }).openGraph?.locale).toBe(
      'pt_BR'
    );
    expect(buildMetadata({ country: 'mx', slug: 'mx' }).openGraph?.locale).toBe(
      'es_MX'
    );
    expect(buildMetadata({ country: 'co', slug: 'co' }).openGraph?.locale).toBe(
      'es_CO'
    );
    expect(buildMetadata({ country: 'cl', slug: 'cl' }).openGraph?.locale).toBe(
      'es_CL'
    );
  });
});
