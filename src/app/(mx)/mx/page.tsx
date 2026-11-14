import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/ui';
import { COUNTRIES } from '@/config/site';
import { MX_GUIDES_LIST } from '@/content/mx/guias';
import { buildMetadata } from '@/lib/seo';

const TITLE = 'Calculadoras Laborales y Financieras Gratis en México';
const DESCRIPTION =
  'Calcula gratis tu finiquito, liquidación, aguinaldo, vacaciones, sueldo neto, SDI y PTU con la LFT, la UMA y la tabla ISR 2026 del SAT.';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'mx', slug: 'mx', title: 'Calculadoras Laborales México 2026', description: DESCRIPTION });
}

const MEXICO_FAQS = [
  {
    q: '¿Cómo calculo mi finiquito en 2026?',
    a: 'Suma los días trabajados pendientes, el aguinaldo proporcional (días del año ÷ 365 × 15 × salario diario), las vacaciones no disfrutadas según la tabla de Vacaciones Dignas y la prima vacacional de al menos 25%. Si te despidieron sin causa, agrega la liquidación: 90 días de salario integrado y la prima de antigüedad.',
  },
  {
    q: '¿Cuál es el salario mínimo en México en 2026?',
    a: '$315.04 diarios en la zona general y $440.87 en la Zona Libre de la Frontera Norte, vigentes desde el 1 de enero de 2026.',
  },
  {
    q: '¿Cuánto vale la UMA en 2026?',
    a: '$117.31 diarios, $3,566.22 mensuales y $42,794.64 anuales, vigente desde el 1 de febrero de 2026.',
  },
  {
    q: '¿Cuándo se paga el aguinaldo?',
    a: 'Antes del 20 de diciembre. El mínimo es de 15 días de salario y está exento de ISR hasta 30 UMA ($3,519.30 en 2026).',
  },
  {
    q: '¿Cuántos días de vacaciones me tocan?',
    a: '12 días el primer año, 14 el segundo, 16 el tercero, 18 el cuarto y 20 el quinto. Del sexto al décimo año son 22 días y luego suben dos días cada cinco años.',
  },
  {
    q: '¿Cuándo se reparte la PTU?',
    a: 'A más tardar el 30 de mayo si la empresa es persona moral y el 29 de junio si el patrón es persona física.',
  },
];

interface CardLink {
  href: string;
  title: string;
  description: string;
}

const LABOR_TOOLS: CardLink[] = [
  { href: '/mx/calculadora-finiquito/', title: 'Finiquito y Liquidación', description: 'Aguinaldo, vacaciones, prima vacacional, indemnización, prima de antigüedad e ISR.' },
  { href: '/mx/calculadora-liquidacion/', title: 'Liquidación por Despido', description: '90 días de SDI, 20 días por año opcionales y prima de antigüedad.' },
  { href: '/mx/calculadora-aguinaldo/', title: 'Calculadora de Aguinaldo', description: 'Completo o proporcional, exención de 30 UMA e ISR estimado.' },
  { href: '/mx/calculadora-vacaciones/', title: 'Vacaciones y Prima Vacacional', description: 'Días por antigüedad con la tabla de Vacaciones Dignas.' },
  { href: '/mx/calculadora-sueldo-neto/', title: 'Sueldo Neto', description: 'ISR 2026, subsidio para el empleo y cuotas IMSS; modo neto a bruto.' },
  { href: '/mx/calculadora-salario-diario-integrado/', title: 'Salario Diario Integrado', description: 'Factor de integración, SDI y tope de 25 UMA.' },
];

const FINANCE_TOOLS: CardLink[] = [
  { href: '/mx/calculadora-ptu/', title: 'Reparto de Utilidades (PTU)', description: '50% por días, 50% por salario y tope del artículo 127.' },
];

const TABLES = [
  { href: '/mx/salario-minimo/', tag: 'CONASAMI', title: 'Salario Mínimo 2026', description: '$315.04 general y $440.87 frontera, con historial de 10 años.', color: 'purple' },
  { href: '/mx/uma/', tag: 'INEGI', title: 'Valor de la UMA 2026', description: '$117.31 diarios y todas las exenciones laborales en UMA.', color: 'blue' },
  { href: '/mx/tabla-isr/', tag: 'SAT', title: 'Tabla ISR 2026 mensual', description: 'Tarifa del artículo 96 y subsidio para el empleo.', color: 'emerald' },
  { href: '/mx/tabla-de-vacaciones/', tag: 'LFT art. 76', title: 'Tabla de Vacaciones 2026', description: 'Días de 1 a 35 años de servicio (Vacaciones Dignas).', color: 'amber' },
];

const TONE: Record<string, string> = {
  purple: 'hover:border-purple-700 text-purple-700',
  blue: 'hover:border-blue-700 text-blue-700',
  emerald: 'hover:border-emerald-700 text-emerald-700',
  amber: 'hover:border-amber-700 text-amber-700',
};

function ToolGrid({ items }: { items: CardLink[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((t) => (
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
  );
}

export default function MexicoHomePage() {
  const country = COUNTRIES.mx;

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx"
        type="website"
        title={TITLE}
        description={DESCRIPTION}
        faqs={MEXICO_FAQS}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
        ]}
      />
      <Header country="mx" />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-12 w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-3">
            <span>{country.flag}</span>
            <span>México • LFT, SAT e IMSS 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">{TITLE}</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Calcula tu finiquito, liquidación, aguinaldo, vacaciones, sueldo neto y reparto de utilidades con la Ley Federal del Trabajo,
            el salario mínimo 2026, la UMA y la tarifa ISR vigente.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <span>⚡</span> Las más usadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/mx/calculadora-finiquito/"
              className="p-5 bg-gradient-to-br from-brand-50 to-white border-2 border-brand-900/30 hover:border-brand-900 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💼</span>
                <span className="text-xs font-bold text-brand-900 bg-brand-100/60 px-2.5 py-0.5 rounded-full">Más popular</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-900">Finiquito y Liquidación</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Renuncia, despido injustificado o fin de contrato, con ISR exento y gravado.
              </p>
              <div className="mt-4 text-xs font-bold text-brand-900">Calcular finiquito →</div>
            </Link>
            <Link
              href="/mx/calculadora-aguinaldo/"
              className="p-5 bg-gradient-to-br from-emerald-50/50 to-white border border-slate-200 hover:border-emerald-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🎄</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Antes del 20 dic</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">Calculadora de Aguinaldo</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">15 días mínimos, parte proporcional y exención de 30 UMA.</p>
              <div className="mt-4 text-xs font-bold text-emerald-700">Calcular aguinaldo →</div>
            </Link>
            <Link
              href="/mx/calculadora-sueldo-neto/"
              className="p-5 bg-gradient-to-br from-blue-50/50 to-white border border-slate-200 hover:border-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💵</span>
                <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">ISR 2026</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">Sueldo Neto</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Tarifa del SAT, subsidio para el empleo y cuotas del IMSS.</p>
              <div className="mt-4 text-xs font-bold text-blue-700">Calcular sueldo neto →</div>
            </Link>
          </div>
        </section>

        <section id="laboral" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📋</span> Calculadoras Laborales (LFT)
            </h2>
            <span className="text-xs font-semibold text-slate-500">Normativa 2026</span>
          </div>
          <ToolGrid items={LABOR_TOOLS} />
        </section>

        <section id="financeiro" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏦</span> Calculadoras Financieras
            </h2>
            <span className="text-xs font-semibold text-slate-500">PTU</span>
          </div>
          <ToolGrid items={FINANCE_TOOLS} />
        </section>

        <section id="impostos" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Tablas Oficiales 2026
            </h2>
            <span className="text-xs font-semibold text-slate-500">Datos actualizados</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TABLES.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group ${TONE[t.color]}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">{t.tag}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">{t.title}</h3>
                <p className="text-xs text-slate-600 mb-3">{t.description}</p>
                <span className="text-xs font-bold">Ver tabla →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>⚖️</span> Calcula según tu caso
            </h2>
            <span className="text-xs font-semibold text-slate-500">Calculadoras dedicadas</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/mx/calculadora-finiquito/renuncia-voluntaria/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Renuncia voluntaria</p>
              <p className="text-xs text-slate-500 mt-0.5">Finiquito y prima de antigüedad con 15 años</p>
            </Link>
            <Link
              href="/mx/calculadora-liquidacion/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Despido injustificado</p>
              <p className="text-xs text-slate-500 mt-0.5">3 meses de SDI + prima de antigüedad + 20 días</p>
            </Link>
          </div>
        </section>

        <section id="guias" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📚</span> Guías sobre tus derechos laborales
            </h2>
            <span className="text-xs font-semibold text-slate-500">{MX_GUIDES_LIST.length} guías</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MX_GUIDES_LIST.map((guide) => (
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
              Desarrollamos calculadoras con base en fuentes oficiales (DOF, SAT, INEGI, CONASAMI e IMSS) para que cualquier persona
              conozca sus derechos laborales sin pagar nada.
            </p>
            <a
              href="https://zetawala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-950 hover:bg-slate-100 rounded-lg text-xs font-bold transition-colors"
            >
              <span>Conoce Zetawala</span>
              <span>→</span>
            </a>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Preguntas frecuentes sobre derechos laborales en México</h2>
            <p className="text-sm text-slate-600">Finiquito, aguinaldo, vacaciones, UMA y salario mínimo en 2026.</p>
          </div>
          <FaqAccordion items={MEXICO_FAQS} />
        </section>
      </main>
      <Footer country="mx" />
    </>
  );
}
