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

describe('Colombia Site Pages Rendering & Metadata', () => {
  it('1. acerca-de renders with Zetawala network, CST transparency, and error reporting', () => {
    const meta = acercaMetadata();
    expect(meta.title).toContain('Acerca de Calcula Colombia');

    const html = renderToString(<AcercaDePage />);
    expect(html).toContain('Acerca de Calcula Colombia');
    expect(html).toContain('https://zetawala.com');
    expect(html).toContain('Código Sustantivo del Trabajo');
    expect(html).toContain('Reforma Laboral 2026');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('Canal de Observaciones y Reporte de Errores');
  });

  it('2. metodologia renders detailed formulas and all official Colombian legal citations', () => {
    const meta = metodologiaMetadata();
    expect(meta.title).toContain('Metodología');

    const html = renderToString(<MetodologiaPage />);
    expect(html).toContain('Metodología de Cálculo y Base Legal (Colombia)');
    // Liquidación & indemnización
    expect(html).toContain('CST Art. 64 y 65');
    expect(html).toContain('30 días de salario');
    expect(html).toContain('Indemnización Moratoria');
    // Prima de servicios
    expect(html).toContain('Prima de Servicios (CST Art. 306)');
    expect(html).toContain('Salario Base Mensual × Días Trabajados en el Semestre) / 360');
    // Cesantías e intereses
    expect(html).toContain('Ley 50 de 1990');
    expect(html).toContain('Ley 52 de 1975');
    expect(html).toContain('0.12');
    // Vacaciones
    expect(html).toContain('CST Art. 186 y 189');
    expect(html).toContain('auxilio de transporte NO se incluye');
    expect(html).toContain('/ 720');
    // Salud y pensión
    expect(html).toContain('Ley 100 de 1993');
    expect(html).toContain('4.0%');
    expect(html).toContain('Fondo de Solidaridad Pensional');
    // Auxilio transporte
    expect(html).toContain('Ley 15 de 1959');
    // Horas extras & reforma
    expect(html).toContain('Ley 2101 de 2021');
    expect(html).toContain('Recargo Nocturno Ordinario (desde las 7:00 pm)');
    expect(html).toContain('1.35 × Hora Ordinaria');
    // Official sources
    expect(html).toContain('secretariasenado.gov.co');
    expect(html).toContain('mintrabajo.gov.co');
    expect(html).toContain('dian.gov.co');
    expect(html).toContain('dane.gov.co');
  });

  it('3. contacto renders direct mailto link, 48h SLA, and feedback guidelines', () => {
    const meta = contactoMetadata();
    expect(meta.title).toContain('Contacto');

    const html = renderToString(<ContactoPage />);
    expect(html).toContain('mailto:contacto@zetawala.com');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('48 Horas');
    expect(html).toContain('Correcciones en Cálculos del CST');
  });

  it('4. politica-de-privacidad renders AdSense, Cloudflare, 100% client-side, and Ley 1581 Habeas Data', () => {
    const meta = privacidadMetadata();
    expect(meta.title).toContain('Política de Privacidad');

    const html = renderToString(<PoliticaPrivacidadPage />);
    expect(html).toContain('https://adssettings.google.com');
    expect(html).toContain('https://policies.google.com/technologies/partner-sites');
    expect(html).toContain('Cloudflare Web Analytics');
    expect(html).toContain('100% Procesamiento Local en tu Navegador');
    expect(html).toContain('localStorage');
    expect(html).toContain('Ley Estatutaria 1581 de 2012');
    expect(html).toContain('Habeas Data');
    expect(html).toContain('contacto@zetawala.com');
    expect(html).toContain('2026');
  });

  it('5. terminos-de-uso renders platform conditions, free access, and educational simulation', () => {
    const meta = terminosMetadata();
    expect(meta.title).toContain('Términos y Condiciones');

    const html = renderToString(<TerminosDeUsoPage />);
    expect(html).toContain('Términos y Condiciones de Uso');
    expect(html).toContain('Naturaleza Gratuita del Servicio');
    expect(html).toContain('Propiedad Intelectual');
    expect(html).toContain('República de Colombia');
  });

  it('6. aviso-legal renders educational simulation disclaimer and official CST primacy', () => {
    const meta = avisoLegalMetadata();
    expect(meta.title).toContain('Aviso Legal');

    const html = renderToString(<AvisoLegalPage />);
    expect(html).toContain('Aviso Legal y Descargo de Responsabilidad');
    expect(html).toContain('Finalidad Exclusivamente Orientativa e Informativa');
    expect(html).toContain('Ministerio del Trabajo');
    expect(html).toContain('Consultorios Jurídicos Universitarios');
  });

  it('7. preguntas-frecuentes renders 30 FAQs with links and FAQPage schema', () => {
    const meta = faqsMetadata();
    expect(meta.title).toContain('Preguntas Frecuentes');

    const html = renderToString(<PreguntasFrecuentesPage />);
    expect(html).toContain('Preguntas Frecuentes sobre Derechos Laborales en Colombia');
    expect(html).toContain('Liquidación Laboral y Despido');
    expect(html).toContain('Prima de Servicios');
    expect(html).toContain('Cesantías e Intereses sobre Cesantías');
    expect(html).toContain('Vacaciones Legales');
    expect(html).toContain('Salario Neto y Deducciones de Salud y Pensión');
    expect(html).toContain('Horas Extras, Recargos y Reforma Laboral 2026');
    expect(html).toContain('Q30.');
    // Check links to tools (Next.js Link renders href without trailing slash in renderToString)
    expect(html).toContain('href="/co/calculadora-liquidacion"');
    expect(html).toContain('href="/co/calculadora-prima"');
    expect(html).toContain('href="/co/calculadora-cesantias"');
    expect(html).toContain('href="/co/calculadora-vacaciones"');
    expect(html).toContain('href="/co/calculadora-salario-neto"');
    expect(html).toContain('href="/co/calculadora-horas-extras"');
    expect(html).toContain('href="/co/salario-minimo"');
    expect(html).toContain('href="/co/auxilio-de-transporte"');
    expect(html).toContain('href="/co/reforma-laboral"');
    expect(html).toContain('href="/co/generador-de-link-whatsapp"');
    // Check JSON-LD
    expect(html).toContain('FAQPage');
  });

  it('8. mapa-del-sitio renders comprehensive categorized index', () => {
    const meta = sitemapMetadata();
    expect(meta.title).toContain('Mapa del Sitio');

    const html = renderToString(<MapaDelSitioPage />);
    expect(html).toContain('Mapa del Sitio Calcula Colombia');
    expect(html).toContain('Calculadoras de Liquidación Laboral');
    expect(html).toContain('Prestaciones Sociales y Salarios');
    expect(html).toContain('Tablas Oficiales y Normativa Vigente');
    expect(html).toContain('Guías Explicativas del Derecho Laboral Colombiano');
    expect(html).toContain('Herramientas Digitales Gratuitas');
    expect(html).toContain('Páginas Institucionales y Legales');
    expect(html).toContain('/co/calculadora-liquidacion/');
    expect(html).toContain('/co/salario-minimo/');
    expect(html).toContain('/co/acerca-de/');
  });
});
