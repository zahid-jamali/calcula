import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/acerca-de',
    title: 'Acerca de Calcula Colombia - Misión, Transparencia y Red Zetawala',
    description:
      'Conoce Calcula Colombia, parte de la red de herramientas gratuitas de Zetawala. Transparencia, rigor legal y cálculo exacto de prestaciones conforme al CST.',
  });
}

export default function AcercaDeCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Acerca de', path: '/co/acerca-de/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/acerca-de"
        type="website"
        title="Acerca de Calcula Colombia"
        description="Misión, metodología y transparencia en el cálculo de liquidaciones y prestaciones sociales según el Código Sustantivo del Trabajo."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Acerca de' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              Institucional · Calcula Colombia
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Acerca de Calcula Colombia
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Herramientas de cálculo laboral y financiero abiertas, gratuitas y rigurosas, desarrolladas para que trabajadores, empleadores y profesionales en Colombia simulen con exactitud sus derechos bajo el Código Sustantivo del Trabajo (CST).
            </p>
          </header>

          <div className="bg-white border-l-4 border-brand-900 p-5 rounded-r-xl shadow-sm border border-slate-200">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Nuestra Misión en Colombia
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Facilitar el entendimiento y cálculo preciso de la liquidación laboral, cesantías, intereses, prima de servicios, vacaciones y horas extras. Eliminamos la complejidad aritmética y la falta de información para que ambas partes de la relación laboral gocen de certidumbre jurídica y económica.
            </p>
          </div>

          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Parte de la Red Zetawala
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              <strong>Calcula Colombia</strong> es una iniciativa tecnológica de la red internacional{' '}
              <a
                href="https://zetawala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-900 font-semibold underline hover:text-brand-700"
              >
                Zetawala
              </a>
              . Zetawala desarrolla software libre y plataformas web de cálculo financiero y legal en América Latina, promoviendo el acceso democrático a información crítica sin cobrar suscripciones ni comercializar datos de usuarios.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Nuestros modelos en Colombia integran las disposiciones del CST, la Ley 50 de 1990, la Ley 100 de 1993, los decretos de auxilio de transporte y la gradualidad de la <strong>Reforma Laboral 2026</strong> (reducción de la jornada semanal conforme a la Ley 2101 de 2021).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Principios de Operación Técnica y Jurídica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">🇨🇴 Fidelidad al CST</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Implementamos cada fórmula con base en los artículos oficiales del Código Sustantivo del Trabajo: indemnizaciones del Art. 64, prima del Art. 306, cesantías de la Ley 50/1990 y vacaciones del Art. 186.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">🔒 Privacidad y Habeas Data</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El procesamiento matemático es 100% del lado del cliente. No almacenamos salarios, datos contractuales ni nombres en servidores. Cumplimos con la Ley Estatutaria 1581 de 2012 de Colombia.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">⏱️ Actualizaciones 2026</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Incorporamos de inmediato los decretos gubernamentales de Salario Mínimo Mensual Legal Vigente (SMMLV), Auxilio de Transporte y los ajustes a la jornada laboral máxima semanal (Ley 2101).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">⚖️ Independencia y Neutralidad</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No tenemos afiliación con asociaciones gremiales, sindicatos ni bufetes de abogados litigantes. Ofrecemos herramientas imparciales de referencia técnica.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>📩</span> Canal de Observaciones y Reporte de Errores
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Si detectas alguna inconsistencia en un cálculo o deseas proponer un escenario laboral especial para Colombia (por ejemplo, salario integral o liquidación de trabajadores de dirección y confianza), nuestro equipo técnico revisa permanentemente las sugerencias.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Escríbenos a{' '}
              <a
                href="mailto:contacto@zetawala.com?subject=Calcula%20Colombia%20-%20Observaci%C3%B3n"
                className="text-brand-900 font-bold underline hover:text-brand-700"
              >
                contacto@zetawala.com
              </a>
              . Respondemos en un plazo máximo garantizado de 48 horas hábiles.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/co/metodologia/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition-colors"
              >
                Ver Metodología y Normas CST →
              </Link>
              <Link
                href="/co/contacto/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Canal de Contacto
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
