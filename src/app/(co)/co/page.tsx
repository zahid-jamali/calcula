import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/ui';
import { COUNTRIES } from '@/config/site';
import { CO_GUIDES_LIST } from '@/content/co/guias';
import { buildMetadata } from '@/lib/seo';

const TITLE = 'Calculadoras Laborales Gratis en Colombia';
const DESCRIPTION =
  'Calcule gratis su liquidación, prima, cesantías, vacaciones, salario neto y horas extras con el CST, el SMMLV 2026 y la reforma laboral.';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'co', slug: 'co', title: 'Calculadoras Laborales Colombia 2026', description: DESCRIPTION });
}

const COLOMBIA_FAQS = [
  {
    q: '¿Cómo se calcula la liquidación laboral en 2026?',
    a: 'Se suman el salario pendiente, las cesantías (base × días ÷ 360), los intereses del 12%, la prima proporcional del semestre y las vacaciones no disfrutadas (salario × días ÷ 720). Si el despido fue sin justa causa, se agrega la indemnización del artículo 64 del CST.',
  },
  {
    q: '¿Cuánto es el salario mínimo en Colombia en 2026?',
    a: '$1.750.905 mensuales, más $249.095 de auxilio de transporte para quienes ganan hasta dos salarios mínimos.',
  },
  {
    q: '¿Cuándo se paga la prima de servicios?',
    a: 'A más tardar el 30 de junio y el 20 de diciembre. Cada cuota equivale a 15 días de salario por semestre completo.',
  },
  {
    q: '¿Cuándo consignan las cesantías?',
    a: 'Antes del 14 de febrero del año siguiente. Los intereses del 12% se pagan al trabajador antes del 31 de enero.',
  },
  {
    q: '¿Cuál es el recargo dominical en 2026?',
    a: '80% hasta el 30 de junio de 2026 y 90% desde el 1 de julio de 2026; llegará al 100% el 1 de julio de 2027.',
  },
  {
    q: '¿Desde qué hora se paga recargo nocturno?',
    a: 'Desde las 7:00 p. m., a partir del 25 de diciembre de 2025, por la reforma laboral (Ley 2466 de 2025).',
  },
];

interface CardLink {
  href: string;
  title: string;
  description: string;
}

const LABOR_TOOLS: CardLink[] = [
  { href: '/co/calculadora-liquidacion/', title: 'Liquidación Laboral', description: 'Cesantías, intereses, prima, vacaciones e indemnización del art. 64.' },
  { href: '/co/calculadora-prima/', title: 'Prima de Servicios', description: '15 días por semestre, con auxilio de transporte si aplica.' },
  { href: '/co/calculadora-cesantias/', title: 'Cesantías e Intereses', description: 'Un mes por año e intereses del 12% anual.' },
  { href: '/co/calculadora-vacaciones/', title: 'Vacaciones', description: '15 días hábiles por año y compensación de hasta la mitad.' },
  { href: '/co/calculadora-salario-neto/', title: 'Salario Neto', description: 'Salud, pensión, Fondo de Solidaridad, retención y auxilio.' },
  { href: '/co/calculadora-horas-extras/', title: 'Horas Extras y Recargos', description: 'Jornada de 42 horas, nocturno desde las 7 p. m. y dominical al 90%.' },
];

const DATA_PAGES = [
  { href: '/co/salario-minimo/', tag: 'Mintrabajo', title: 'Salario Mínimo 2026', description: '$1.750.905, valor diario, hora e historial de 10 años.', tone: 'hover:border-purple-700 text-purple-700' },
  { href: '/co/auxilio-de-transporte/', tag: 'Decreto 1470/2025', title: 'Auxilio de Transporte 2026', description: '$249.095 para salarios de hasta 2 SMMLV.', tone: 'hover:border-blue-700 text-blue-700' },
  { href: '/co/reforma-laboral/', tag: 'Ley 2466/2025', title: 'Reforma Laboral 2025', description: 'Qué cambia y desde cuándo: jornada y recargos.', tone: 'hover:border-emerald-700 text-emerald-700' },
];

export default function ColombiaHomePage() {
  const country = COUNTRIES.co;

  return (
    <>
      <JsonLd
        country="co"
        slug="co"
        type="website"
        title={TITLE}
        description={DESCRIPTION}
        faqs={COLOMBIA_FAQS}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
        ]}
      />
      <Header country="co" />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-12 w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-3">
            <span>{country.flag}</span>
            <span>Colombia • CST y reforma laboral 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">{TITLE}</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Calcule su liquidación, prima, cesantías, vacaciones, salario neto y horas extras con el Código Sustantivo del Trabajo,
            el salario mínimo 2026 y los recargos de la Ley 2466 de 2025.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <span>⚡</span> Las más usadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/co/calculadora-liquidacion/"
              className="p-5 bg-gradient-to-br from-brand-50 to-white border-2 border-brand-900/30 hover:border-brand-900 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💼</span>
                <span className="text-xs font-bold text-brand-900 bg-brand-100/60 px-2.5 py-0.5 rounded-full">Más popular</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-900">Liquidación Laboral</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Renuncia, despido sin justa causa o fin del contrato.</p>
              <div className="mt-4 text-xs font-bold text-brand-900">Calcular liquidación →</div>
            </Link>
            <Link
              href="/co/calculadora-prima/"
              className="p-5 bg-gradient-to-br from-emerald-50/50 to-white border border-slate-200 hover:border-emerald-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🎁</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">30 jun · 20 dic</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">Prima de Servicios</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Prima del semestre completa o proporcional.</p>
              <div className="mt-4 text-xs font-bold text-emerald-700">Calcular prima →</div>
            </Link>
            <Link
              href="/co/calculadora-salario-neto/"
              className="p-5 bg-gradient-to-br from-blue-50/50 to-white border border-slate-200 hover:border-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💵</span>
                <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">UVT 2026</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">Salario Neto</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Salud, pensión, solidaridad y retención en la fuente.</p>
              <div className="mt-4 text-xs font-bold text-blue-700">Calcular salario neto →</div>
            </Link>
          </div>
        </section>

        <section id="laboral" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📋</span> Calculadoras Laborales (CST)
            </h2>
            <span className="text-xs font-semibold text-slate-500">Normas 2026</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LABOR_TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">{t.title}</h3>
                <p className="text-xs text-slate-600 mb-3">{t.description}</p>
                <span className="text-xs font-bold text-brand-900">Calcular ahora →</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="impostos" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Datos Oficiales 2026
            </h2>
            <span className="text-xs font-semibold text-slate-500">Actualizados</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DATA_PAGES.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group ${t.tone}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">{t.tag}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">{t.title}</h3>
                <p className="text-xs text-slate-600 mb-3">{t.description}</p>
                <span className="text-xs font-bold">Ver datos →</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="financeiro" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>⚖️</span> Liquidación según su caso
            </h2>
            <span className="text-xs font-semibold text-slate-500">Calculadoras dedicadas</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/co/calculadora-liquidacion/renuncia/" className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all">
              <p className="text-sm font-bold text-slate-900">Renuncia</p>
              <p className="text-xs text-slate-500 mt-0.5">Prestaciones sin indemnización</p>
            </Link>
            <Link href="/co/calculadora-liquidacion/despido-sin-justa-causa/" className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all">
              <p className="text-sm font-bold text-slate-900">Despido sin justa causa</p>
              <p className="text-xs text-slate-500 mt-0.5">Indemnización del art. 64 CST</p>
            </Link>
            <Link href="/co/calculadora-liquidacion/contrato-a-termino-fijo/" className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all">
              <p className="text-sm font-bold text-slate-900">Contrato a término fijo</p>
              <p className="text-xs text-slate-500 mt-0.5">Vencimiento o terminación anticipada</p>
            </Link>
          </div>
        </section>

        <section id="guias" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📚</span> Guías sobre sus derechos laborales
            </h2>
            <span className="text-xs font-semibold text-slate-500">{CO_GUIDES_LIST.length} guías</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CO_GUIDES_LIST.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.path}
                className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-2 line-clamp-2">{guide.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{guide.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-900 flex items-center justify-between">
                  <span>Leer guía</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-3">
              <span>Red Zetawala</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Calcula es parte de la red Zetawala de herramientas gratuitas</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Nuestras calculadoras se basan en fuentes oficiales (Código Sustantivo del Trabajo, Ministerio del Trabajo y DIAN) para que
              cualquier persona conozca sus derechos laborales sin costo.
            </p>
            <a
              href="https://zetawala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-950 hover:bg-slate-100 rounded-lg text-xs font-bold transition-colors"
            >
              <span>Conozca Zetawala</span>
              <span>→</span>
            </a>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Preguntas frecuentes sobre derechos laborales en Colombia</h2>
            <p className="text-sm text-slate-600">Liquidación, prima, cesantías, salario mínimo y reforma laboral en 2026.</p>
          </div>
          <FaqAccordion items={COLOMBIA_FAQS} />
        </section>
      </main>
      <Footer country="co" />
    </>
  );
}
