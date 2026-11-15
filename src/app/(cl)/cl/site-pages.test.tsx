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

describe('Chile Site Pages Rendering & Metadata', () => {
  it('1. acerca-de renders with Zetawala network, mission, and error reporting', () => {
    const meta = acercaMetadata();
    expect(meta.title).toContain('Acerca de Calcula Chile');

    const html = renderToString(<AcercaDePage />);
    expect(html).toContain('Acerca de Calcula Chile');
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('Código del Trabajo');
    expect(html).toContain('Banco Central de Chile');
    expect(html).toContain('Servicio de Impuestos Internos');
    expect(html).toContain('Reporte de Errores y Retroalimentación');
  });

  it('2. metodologia renders detailed formulas and all legal citations', () => {
    const meta = metodologiaMetadata();
    expect(meta.title).toContain('Metodología');

    const html = renderToString(<MetodologiaPage />);
    expect(html).toContain('Metodología de Cálculo');
    // UF and IPC
    expect(html).toContain('Unidad de Fomento (UF)');
    expect(html).toContain('Decreto Supremo N° 40');
    // UTM and UTA
    expect(html).toContain('Unidad Tributaria Mensual (UTM)');
    expect(html).toContain('UTA = 12 × UTM');
    // Sueldo Liquido
    expect(html).toContain('87,4 UF');
    expect(html).toContain('131,4 UF');
    expect(html).toContain('Artículo 50');
    expect(html).toContain('Impuesto Único de Segunda Categoría');
    // Finiquito
    expect(html).toContain('90 UF');
    expect(html).toContain('Artículo 172');
    expect(html).toContain('Art. 163');
    expect(html).toContain('7/5');
    // Arriendo and Credito Hipotecario
    expect(html).toContain('Arriendo en UF');
    expect(html).toContain('Simulador de Crédito Hipotecario');
    // Official sources
    expect(html).toContain('bcentral.cl');
    expect(html).toContain('sii.cl');
    expect(html).toContain('dt.gob.cl');
    expect(html).toContain('spensiones.cl');
    expect(html).toContain('ine.gob.cl');
  });

  it('3. contacto renders direct mailto, 48h SLA, and guidelines', () => {
    const meta = contactoMetadata();
    expect(meta.title).toContain('Contacto');

    const html = renderToString(<ContactoPage />);
    expect(html).toContain('mailto:contacto@zetawala.com');
    expect(html).toContain('48 horas');
    expect(html).toContain('Reporte de Inconsistencias o Errores');
  });

  it('4. politica-de-privacidad renders AdSense, Cloudflare, 100% client-side, and Ley 19.628', () => {
    const meta = privacidadMetadata();
    expect(meta.title).toContain('Política de Privacidad');

    const html = renderToString(<PoliticaPrivacidadPage />);
    expect(html).toContain('https://adssettings.google.com');
    expect(html).toContain('https://policies.google.com/technologies/partner-sites');
    expect(html).toContain('Cloudflare Web Analytics');
    expect(html).toContain('Client-Side');
    expect(html).toContain('Ley N° 19.628');
    expect(html).toContain('contacto@zetawala.com');
  });

  it('5. terminos-de-uso renders platform conditions and free access', () => {
    const meta = terminosMetadata();
    expect(meta.title).toContain('Términos de Uso');

    const html = renderToString(<TerminosDeUsoPage />);
    expect(html).toContain('Términos y Condiciones de Uso');
    expect(html).toContain('Acceso Libre y Gratuito');
    expect(html).toContain('República de Chile');
  });

  it('6. aviso-legal renders educational disclaimer and authority primacy', () => {
    const meta = avisoLegalMetadata();
    expect(meta.title).toContain('Aviso Legal');

    const html = renderToString(<AvisoLegalPage />);
    expect(html).toContain('Aviso Legal y Descargo de Responsabilidad');
    expect(html).toContain('Dirección del Trabajo');
    expect(html).toContain('Servicio de Impuestos Internos');
    expect(html).toContain('reserva de derechos');
  });

  it('7. preguntas-frecuentes renders all 30 FAQs grouped across 6 categories', () => {
    const meta = faqsMetadata();
    expect(meta.title).toContain('Preguntas Frecuentes');

    const html = renderToString(<PreguntasFrecuentesPage />);
    expect(html).toContain('Preguntas Frecuentes de Finanzas y Trabajo en Chile');
    // Group titles
    expect(html).toContain('Finiquito Laboral e Indemnizaciones');
    expect(html).toContain('Sueldo Líquido, AFPs y Descuentos Legales');
    expect(html).toContain('Valor UF, IPC y Variación Diaria');
    expect(html).toContain('UTM y Obligaciones Tributarias');
    expect(html).toContain('Arriendos en UF y Crédito Hipotecario');
    expect(html).toContain('Generador de Enlaces de WhatsApp');
    // Key links in answers (Next.js Link renders href without trailing slash in renderToString)
    expect(html).toContain('href="/cl/calculadora-finiquito"');
    expect(html).toContain('href="/cl/calculadora-sueldo-liquido"');
    expect(html).toContain('href="/cl/valor-uf-hoy"');
    expect(html).toContain('href="/cl/valor-utm"');
    expect(html).toContain('href="/cl/calculadora-arriendo-uf"');
    expect(html).toContain('href="/cl/simulador-credito-hipotecario"');
    expect(html).toContain('href="/cl/generador-de-link-whatsapp"');
    expect(html).toContain('href="/cl/sueldo-minimo"');
    expect(html).toContain('href="/cl/guias/indemnizacion-por-anos-de-servicio"');
    expect(html).toContain('href="/cl/guias/de-sueldo-bruto-a-liquido"');
  });

  it('8. mapa-del-sitio renders all Chile sections and links', () => {
    const meta = sitemapMetadata();
    expect(meta.title).toContain('Mapa del Sitio');

    const html = renderToString(<MapaDelSitioPage />);
    expect(html).toContain('Mapa del Sitio Calcula Chile');
    expect(html).toContain('Calculadoras y Simuladores');
    expect(html).toContain('Indicadores y Tablas Económicas Oficiales');
    expect(html).toContain('Guías Laborales y Explicaciones Normativas');
    expect(html).toContain('Información Institucional, Soporte y Legal');
    expect(html).toContain('href="/cl/acerca-de"');
    expect(html).toContain('href="/cl/metodologia"');
    expect(html).toContain('href="/cl/contacto"');
    expect(html).toContain('href="/cl/politica-de-privacidad"');
    expect(html).toContain('href="/cl/terminos-de-uso"');
    expect(html).toContain('href="/cl/aviso-legal"');
    expect(html).toContain('href="/cl/preguntas-frecuentes"');
    expect(html).toContain('href="/cl/mapa-del-sitio"');
  });
});
