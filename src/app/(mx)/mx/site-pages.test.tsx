import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import AcercaDePage, { generateMetadata as acercaMetadata } from './acerca-de/page';
import MetodologiaPage, { generateMetadata as metodologiaMetadata } from './metodologia/page';
import ContactoPage, { generateMetadata as contactoMetadata } from './contacto/page';
import PoliticaPrivacidadPage, { generateMetadata as privacidadMetadata } from './politica-de-privacidad/page';
import TerminosDeUsoPage, { generateMetadata as terminosMetadata } from './terminos-de-uso/page';
import AvisoLegalPage, { generateMetadata as avisoLegalMetadata } from './aviso-legal/page';
import PreguntasFrecuentesPage, { generateMetadata as faqsMetadata } from './preguntas-frecuentes/page';
import MapaDelSitioPage, { generateMetadata as sitemapMetadata } from './mapa-del-sitio/page';

describe('Mexico Site Pages Rendering & Metadata', () => {
  it('1. acerca-de renders with Zetawala network, LFT transparency, and error reporting', () => {
    const meta = acercaMetadata();
    expect(meta.title).toContain('Acerca de Calcula México');

    const html = renderToString(<AcercaDePage />);
    expect(html).toContain('Acerca de Calcula México');
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('Ley Federal del Trabajo');
    expect(html).toContain('Vacaciones Dignas');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('Reporte de Errores y Transparencia');
  });

  it('2. metodologia renders detailed formulas and all official Mexican legal citations', () => {
    const meta = metodologiaMetadata();
    expect(meta.title).toContain('Metodología');

    const html = renderToString(<MetodologiaPage />);
    expect(html).toContain('Metodología de Cálculo y Base Legal (México)');
    // Finiquito
    expect(html).toContain('Art. 76 y 79 LFT');
    expect(html).toContain('Art. 80 LFT');
    expect(html).toContain('Art. 87 LFT');
    // Liquidación
    expect(html).toContain('Indemnización Constitucional');
    expect(html).toContain('90 días');
    expect(html).toContain('Art. 48 y 50 LFT');
    expect(html).toContain('Art. 162 LFT');
    expect(html).toContain('Art. 486 LFT');
    // Aguinaldo
    expect(html).toContain('15 días de salario');
    expect(html).toContain('30 Unidades de Medida y Actualización (UMA)');
    // Vacaciones Dignas
    expect(html).toContain('12 días');
    expect(html).toContain('Prima Vacacional Mínima (25%)');
    // Sueldo Neto e ISR
    expect(html).toContain('Art. 96 LISR');
    expect(html).toContain('Invalidez y Vida');
    expect(html).toContain('Cesantía en Edad Avanzada y Vejez');
    // SDI
    expect(html).toContain('Factor de Integración Mínimo de Ley');
    // PTU
    expect(html).toContain('Reparto de Utilidades');
    expect(html).toContain('Art. 127 fracción VIII LFT');
    // Official sources
    expect(html).toContain('diputados.gob.mx');
    expect(html).toContain('sat.gob.mx');
    expect(html).toContain('inegi.org.mx');
    expect(html).toContain('conasami.gob.mx');
    expect(html).toContain('imss.gob.mx');
  });

  it('3. contacto renders direct mailto link, 48h SLA, and feedback guidelines', () => {
    const meta = contactoMetadata();
    expect(meta.title).toContain('Contacto');

    const html = renderToString(<ContactoPage />);
    expect(html).toContain('mailto:contacto@zetawala.com');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('48 Horas');
    expect(html).toContain('Reporte de Discrepancias en Fórmulas');
  });

  it('4. politica-de-privacidad renders AdSense, Cloudflare, 100% client-side, and LFPDPPP/INAI', () => {
    const meta = privacidadMetadata();
    expect(meta.title).toContain('Política de Privacidad');

    const html = renderToString(<PoliticaPrivacidadPage />);
    expect(html).toContain('https://adssettings.google.com');
    expect(html).toContain('https://policies.google.com/technologies/partner-sites');
    expect(html).toContain('Cloudflare Web Analytics');
    expect(html).toContain('Client-Side');
    expect(html).toContain('localStorage');
    expect(html).toContain('LFPDPPP');
    expect(html).toContain('INAI');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('2026');
  });

  it('5. terminos-de-uso renders platform conditions, free access, and educational simulation', () => {
    const meta = terminosMetadata();
    expect(meta.title).toContain('Términos y Condiciones');

    const html = renderToString(<TerminosDeUsoPage />);
    expect(html).toContain('Términos de Uso de la Plataforma');
    expect(html).toContain('100% gratuita');
    expect(html).toContain('Propiedad Intelectual');
    expect(html).toContain('Zetawala');
  });

  it('6. aviso-legal renders educational simulation disclaimer and official LFT primacy', () => {
    const meta = avisoLegalMetadata();
    expect(meta.title).toContain('Aviso Legal');

    const html = renderToString(<AvisoLegalPage />);
    expect(html).toContain('Aviso Legal y Descargo de Responsabilidad');
    expect(html).toContain('Carácter Exclusivamente Informativo y Pedagógico');
    expect(html).toContain('Contratos Colectivos de Trabajo');
    expect(html).toContain('PROFEDET');
  });

  it('7. preguntas-frecuentes renders 30 FAQs with links and FAQPage schema', () => {
    const meta = faqsMetadata();
    expect(meta.title).toContain('Preguntas Frecuentes');

    const html = renderToString(<PreguntasFrecuentesPage />);
    expect(html).toContain('Preguntas Frecuentes sobre Derechos Laborales en México');
    expect(html).toContain('Finiquito y Liquidación Laboral');
    expect(html).toContain('Aguinaldo según la LFT');
    expect(html).toContain('Vacaciones Dignas y Prima Vacacional');
    expect(html).toContain('Impuestos ISR y UMA 2026');
    expect(html).toContain('Salario Neto y Cuotas IMSS');
    expect(html).toContain('Reparto de Utilidades (PTU) y Herramientas WhatsApp');
    expect(html).toContain('Q30.');
    // Check links to tools (Next.js Link renders href without trailing slash in renderToString)
    expect(html).toContain('href="/mx/calculadora-finiquito"');
    expect(html).toContain('href="/mx/calculadora-liquidacion"');
    expect(html).toContain('href="/mx/calculadora-aguinaldo"');
    expect(html).toContain('href="/mx/calculadora-vacaciones"');
    expect(html).toContain('href="/mx/calculadora-sueldo-neto"');
    expect(html).toContain('href="/mx/calculadora-ptu"');
    expect(html).toContain('href="/mx/uma"');
    expect(html).toContain('href="/mx/generador-de-link-whatsapp"');
    // Check JSON-LD
    expect(html).toContain('FAQPage');
  });

  it('8. mapa-del-sitio renders comprehensive categorized index', () => {
    const meta = sitemapMetadata();
    expect(meta.title).toContain('Mapa del Sitio');

    const html = renderToString(<MapaDelSitioPage />);
    expect(html).toContain('Mapa del Sitio Calcula México');
    expect(html).toContain('Calculadoras Laborales y Fiscales');
    expect(html).toContain('Tablas Oficiales e Indicadores Económicos');
    expect(html).toContain('Guías y Artículos Laborales LFT');
    expect(html).toContain('Herramientas de Comunicación Gratuita');
    expect(html).toContain('Páginas Institucionales y Legales');
    expect(html).toContain('/mx/calculadora-finiquito/');
    expect(html).toContain('/mx/salario-minimo/');
    expect(html).toContain('/mx/acerca-de/');
  });
});
