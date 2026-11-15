import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/mapa-del-sitio',
    title: 'Mapa del Sitio Calcula Chile 2026',
    description:
      'Directorio completo y estructurado de todas las calculadoras, indicadores económicos, guías laborales y páginas legales de Calcula Chile.',
  });
}

interface SitemapCategory {
  title: string;
  icon: string;
  description: string;
  pages: {
    title: string;
    path: string;
    description: string;
    badge?: string;
  }[];
}

const SITEMAP_CATEGORIES: SitemapCategory[] = [
  {
    title: 'Calculadoras y Simuladores',
    icon: '🧮',
    description: 'Herramientas interactivas con procesamiento 100% en el cliente para el cálculo laboral y financiero en Chile.',
    pages: [
      {
        title: 'Calculadora de Finiquito Laboral 2026',
        path: '/cl/calculadora-finiquito/',
        description: 'Simula tu indemnización por años de servicio, aviso previo y feriado legal proporcional bajo el Código del Trabajo.',
        badge: 'Laboral',
      },
      {
        title: 'Calculadora de Sueldo Líquido 2026',
        path: '/cl/calculadora-sueldo-liquido/',
        description: 'Calcula tu sueldo líquido con descuentos de las 7 AFPs, Fonasa/Isapre, seguro de cesantía y tramos del Impuesto Único del SII.',
        badge: 'Remuneraciones',
      },
      {
        title: 'Calculadora de Arriendo en UF',
        path: '/cl/calculadora-arriendo-uf/',
        description: 'Convierte cánones de arrendamiento en UF a pesos chilenos según la fecha de pago y proyecta reajustes por inflación.',
        badge: 'Inmobiliario',
      },
      {
        title: 'Simulador de Crédito Hipotecario',
        path: '/cl/simulador-credito-hipotecario/',
        description: 'Proyecta tu dividendo mensual en UF y CLP con sistema de amortización francés y seguros obligatorios de desgravamen y sismo.',
        badge: 'Hipotecario',
      },
      {
        title: 'Generador de Enlaces de WhatsApp Chile',
        path: '/cl/generador-de-link-whatsapp/',
        description: 'Crea enlaces directos wa.me con código internacional +56 y mensajes personalizados sin guardar datos.',
        badge: 'Utilidad',
      },
    ],
  },
  {
    title: 'Indicadores y Tablas Económicas Oficiales',
    icon: '📊',
    description: 'Valores oficiales actualizados del Banco Central de Chile, SII y Ministerio del Trabajo.',
    pages: [
      {
        title: 'Valor UF Hoy',
        path: '/cl/valor-uf-hoy/',
        description: 'Consulta diaria del valor oficial de la Unidad de Fomento (UF) fijado por el Banco Central con reajuste por IPC.',
        badge: 'Diario',
      },
      {
        title: 'Histórico de la Unidad de Fomento (UF)',
        path: '/cl/valor-uf/2026/',
        description: 'Registro histórico y series mensuales de la UF para reajustes contractuales y auditorías financieras.',
        badge: 'Histórico',
      },
      {
        title: 'Valor UTM y UTA Oficial SII',
        path: '/cl/valor-utm/',
        description: 'Valores mensuales de la Unidad Tributaria Mensual (UTM) y Anual (UTA) según publicaciones del SII.',
        badge: 'Mensual',
      },
      {
        title: 'Sueldo Mínimo en Chile 2026',
        path: '/cl/sueldo-minimo/',
        description: 'Ingreso Mínimo Mensual ($500.000 CLP), asignaciones familiares, leyes aplicables y evolución histórica.',
        badge: 'Normativa',
      },
    ],
  },
  {
    title: 'Guías Laborales y Explicaciones Normativas',
    icon: '📚',
    description: 'Artículos explicativos redactados bajo estándares de divulgación jurídica y financiera.',
    pages: [
      {
        title: 'Cómo Calcular el Finiquito Laboral en Chile',
        path: '/cl/guias/como-calcular-el-finiquito/',
        description: 'Guía paso a paso sobre haberes adeudados, causal del despido, descuentos permitidos y ratificación ante ministro de fe.',
      },
      {
        title: 'De Sueldo Bruto a Líquido en Chile',
        path: '/cl/guias/de-sueldo-bruto-a-liquido/',
        description: 'Aprende cómo pasar del haber total a la cifra neta considerando los topes previsionales de 87,4 UF y 131,4 UF.',
      },
      {
        title: 'Indemnización por Años de Servicio y Topes Legales',
        path: '/cl/guias/indemnizacion-por-anos-de-servicio/',
        description: 'Conoce los requisitos del Artículo 163, el tope de 11 años de antigüedad y el límite de 90 UF del Artículo 172.',
      },
      {
        title: 'Qué es la UF y Cómo se Calcula su Reajuste Diario',
        path: '/cl/guias/que-es-la-uf-y-como-se-calcula/',
        description: 'Explicación del mecanismo de progresión geométrica basado en la inflación del IPC reportada por el INE.',
      },
      {
        title: 'Qué es la UTM, UTA y su Aplicación Tributaria',
        path: '/cl/guias/que-es-la-utm/',
        description: 'Funciones de la Unidad Tributaria Mensual y Anual en multas, aranceles fiscales e Impuesto a la Renta.',
      },
    ],
  },
  {
    title: 'Información Institucional, Soporte y Legal',
    icon: '🏛️',
    description: 'Documentación sobre nuestro equipo, metodología algorítmica, canales de atención y marco de privacidad.',
    pages: [
      {
        title: 'Portada Calcula Chile',
        path: '/cl/',
        description: 'Página principal con acceso centralizado a todos los simuladores, indicadores y resúmenes diarios.',
      },
      {
        title: 'Acerca de Calcula Chile y Red Zetawala',
        path: '/cl/acerca-de/',
        description: 'Misión institucional de transparencia en derechos laborales y pertenencia a la red global Zetawala.',
      },
      {
        title: 'Metodología de Cálculo y Base Legal',
        path: '/cl/metodologia/',
        description: 'Detalle de fórmulas matemáticas, artículos del Código del Trabajo, SII y tabla de fuentes oficiales.',
      },
      {
        title: 'Preguntas Frecuentes (FAQ Hub)',
        path: '/cl/preguntas-frecuentes/',
        description: '30 respuestas exhaustivas a dudas sobre finiquito, sueldo líquido, UF, arriendos y créditos hipotecarios.',
      },
      {
        title: 'Contacto y Soporte',
        path: '/cl/contacto/',
        description: 'Buzón directo para reporte de errores normativos y sugerencias con compromiso de respuesta en 48 horas.',
      },
      {
        title: 'Política de Privacidad',
        path: '/cl/politica-de-privacidad/',
        description: 'Compromiso de procesamiento en el cliente, cookies publicitarias de Google AdSense y Ley 19.628 de Chile.',
      },
      {
        title: 'Términos y Condiciones de Uso',
        path: '/cl/terminos-de-uso/',
        description: 'Condiciones de acceso gratuito, propiedad intelectual y límites de responsabilidad de la plataforma.',
      },
      {
        title: 'Aviso Legal y Descargo de Responsabilidad',
        path: '/cl/aviso-legal/',
        description: 'Carácter exclusivamente informativo de las simulaciones y primacía de la Dirección del Trabajo y del SII.',
      },
      {
        title: 'Mapa del Sitio Calcula Chile',
        path: '/cl/mapa-del-sitio/',
        description: 'Directorio HTML completo con todos los enlaces internos organizados por categoría temática.',
      },
    ],
  },
];

export default function MapaDelSitioPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Mapa del Sitio' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/mapa-del-sitio"
        type="info"
        title="Mapa del Sitio Calcula Chile"
        description="Directorio unificado de todas las calculadoras, indicadores económicos, guías normativas y páginas institucionales de Calcula Chile."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Mapa del Sitio', path: '/cl/mapa-del-sitio/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full border border-blue-200">
            <span>🗺️</span>
            <span>Directorio Integral • Estructura del Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mapa del Sitio Calcula Chile
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explora de manera ordenada todas las herramientas de cálculo, tablas de indicadores económicos, guías pedagógicas y documentos legales vigentes en nuestra plataforma para la República de Chile.
          </p>
        </header>

        {/* Categories Sections */}
        <div className="space-y-10">
          {SITEMAP_CATEGORIES.map((category, idx) => (
            <section key={idx} className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span>{category.icon}</span> {category.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.pages.map((p, pageIdx) => (
                  <Link
                    key={pageIdx}
                    href={p.path}
                    className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors text-base">
                          {p.title}
                        </h3>
                        {p.badge && (
                          <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 uppercase">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold group-hover:text-blue-900">
                      <span className="font-mono text-slate-400">{p.path}</span>
                      <span>Ver página →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Global Network Note */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            Red Internacional Calcula
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Calcula ofrece herramientas laborales y financieras adaptadas a las legislaciones locales de América Latina: además de Chile (<code>/cl/</code>), disponemos de calculadoras especializadas para Brasil (<code>/br/</code>), México (<code>/mx/</code>) y Colombia (<code>/co/</code>).
          </p>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
