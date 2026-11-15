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

    // Country flags (SVG vector badges with aria-labels)
    expect(html).toContain('aria-label="Bandeira do Brasil"');
    expect(html).toContain('aria-label="Bandera de México"');
    expect(html).toContain('aria-label="Bandera de Colombia"');
    expect(html).toContain('aria-label="Bandera de Chile"');

    // Active country indicator
    expect(html).toContain('BR');

    // Categories
    expect(html).toContain('Trabalhista');
    expect(html).toContain('Financeiro');
  });

  it('renders in Spanish for Mexico', () => {
    const html = renderToString(<Header country="mx" />);
    expect(html).toContain('Laboral');
    expect(html).toContain('Financiero');
    expect(html).toContain('href="/mx"');
  });
});

describe('Footer Component', () => {
  it('renders clean 4-column footer and single Zetawala credit for Brazil', () => {
    const html = renderToString(<Footer country="br" />);

    // 4 columns: tools, guides, info, legal
    expect(html).toContain('Calculadoras');
    expect(html).toContain('Guias e Artigos');
    expect(html).toContain('Institucional');
    expect(html).toContain('Legal');

    // Tools
    expect(html).toContain('Calculadora de Rescisão Trabalhista CLT 2026');

    // Single tasteful Zetawala credit in bottom footer
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('Zetawala');
  });

  it('renders Spanish layout and single Zetawala credit for Mexico', () => {
    const html = renderToString(<Footer country="mx" />);

    expect(html).toContain('Calculadoras');
    expect(html).toContain('Guías y Artículos');
    expect(html).toContain('Institucional');
    expect(html).toContain('Legal');
    expect(html).toContain('Calculadora de Finiquito y Liquidación 2026');
    expect(html).toContain('https://zetawala.com');
  });
});
