import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Header } from './Header';
import { Footer } from './Footer';

describe('Header Component', () => {
  it('renders brand logo linking to country home and flags for all 4 countries', () => {
    const html = renderToString(<Header country="br" />);

    // Brand logo
    expect(html).toContain('alt="Calcula"');
    expect(html).toContain('href="/br"');

    // Country flags
    expect(html).toContain('🇧🇷');
    expect(html).toContain('🇲🇽');
    expect(html).toContain('🇨🇴');
    expect(html).toContain('🇨🇱');

    // Active country indicator
    expect(html).toContain('BR');

    // Categories
    expect(html).toContain('Trabalhista');
    expect(html).toContain('Financeiro');

    // Zetawala badge
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('por Zetawala');
    expect(html).toContain('alt="Zetawala"');
  });

  it('renders in Spanish for Mexico', () => {
    const html = renderToString(<Header country="mx" />);
    expect(html).toContain('Laboral');
    expect(html).toContain('Financiero');
    expect(html).toContain('href="/mx"');
  });
});

describe('Footer Component', () => {
  it('renders parent-brand block with zetawala-logo and Portuguese copy for Brazil', () => {
    const html = renderToString(<Footer country="br" />);

    // Zetawala block
    expect(html).toContain(
      'A Calcula faz parte da rede Zetawala de ferramentas gratuitas.'
    );
    expect(html).toContain('Conheça a Zetawala →');
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('alt="Zetawala"');

    // 4 columns: tools, guides, info, site pages
    expect(html).toContain('Calculadoras');
    expect(html).toContain('Guias e Artigos');
    expect(html).toContain('Institucional');
    expect(html).toContain('Páginas do Site');

    // Tools
    expect(html).toContain('Calculadora de Rescisão Trabalhista CLT 2026');

    // Copyright
    expect(html).toContain('© 2026 Zetawala');
  });

  it('renders Spanish parent-brand block and copy for Mexico', () => {
    const html = renderToString(<Footer country="mx" />);

    expect(html).toContain(
      'Calcula es parte de la red Zetawala de herramientas gratuitas.'
    );
    expect(html).toContain('Conoce Zetawala →');
    expect(html).toContain('Calculadoras');
    expect(html).toContain('Guías y Artículos');
    expect(html).toContain('Páginas del Sitio');
    expect(html).toContain('Calculadora de Finiquito y Liquidación 2026');
    expect(html).toContain('© 2026 Zetawala');
  });
});
