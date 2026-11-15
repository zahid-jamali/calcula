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
    country: 'mx',
    slug: 'mx/aviso-legal',
    title: 'Aviso Legal y Descargo de Responsabilidad - Calcula México',
    description:
      'Descargo de responsabilidad de Calcula México. Las calculadoras ofrecen simulaciones estimativas y educativas que no sustituyen la asesoría legal o contable profesional.',
  });
}

export default function AvisoLegalMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Aviso Legal', path: '/mx/aviso-legal/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/aviso-legal"
        type="website"
        title="Aviso Legal - Calcula México"
        description="Descargo de responsabilidad y aviso legal de Calcula México."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Aviso Legal' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
              Descargo Legal · Ley Federal del Trabajo
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aviso Legal y Descargo de Responsabilidad
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Información fundamental sobre la naturaleza jurídica de nuestras calculadoras, el alcance de las simulaciones y la prevalencia de los convenios laborales formales en México.
            </p>
          </header>

          {/* Primary Legal Disclaimer Box */}
          <div className="bg-amber-50 border-2 border-amber-500 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              <h2 className="text-xl font-bold text-amber-950">
                Carácter Exclusivamente Informativo y Pedagógico
              </h2>
            </div>
            <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
              Las herramientas, calculadoras y contenidos proporcionados por <strong>Calcula México</strong> son simuladores con fines pedagógicos, educativos y referenciales. <strong>Bajo ninguna circunstancia constituyen asesoramiento jurídico, peritaje contable, dictamen fiscal vinculante o representación legal ante autoridades laborales o tributarias.</strong>
            </p>
          </div>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              1. Prevalencia de Contratos, Convenios y Resoluciones Judiciales
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              En toda relación laboral en los Estados Unidos Mexicanos, la determinación definitiva y vinculante de los montos a liquidar depende de múltiples factores específicos que exceden el alcance de una calculadora estándar en línea, entre ellos:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 pl-2">
              <li>
                <strong>Contratos Colectivos de Trabajo (CCT) o Contratos Ley:</strong> Los sindicatos y empresas pueden pactar válidamente prestaciones superiores a las mínimas de la LFT (por ejemplo, más de 15 días de aguinaldo, prima vacacional superior al 25%, fondos de ahorro o vales de despensa).
              </li>
              <li>
                <strong>Contrato Individual de Trabajo:</strong> Condiciones particulares pactadas por escrito entre trabajador y patrón.
              </li>
              <li>
                <strong>Prestaciones Extralegales y Comisiones Variables:</strong> La integración de comisiones, bonos de productividad, premios de asistencia o primas dominicales en el Salario Diario Integrado (SDI) requiere promedios aritméticos exactos basados en recibos de nómina timbrados (CFDI).
              </li>
              <li>
                <strong>Criterios Jurisdiccionales:</strong> Resoluciones emitidas por el Centro Federal de Conciliación y Registro Laboral (CFCRL), los Centros de Conciliación Locales o los Tribunales Laborales del Poder Judicial de la Federación.
              </li>
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              2. Exención de Responsabilidad por Decisiones Económicas
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ni <strong>Calcula</strong> ni su empresa matriz <strong>Zetawala</strong> responderán directa o indirectamente por pérdidas económicas, convenios firmados, renuncias presentadas, despidos ejecutados o sanciones derivadas del uso o mala interpretación de las cifras obtenidas en nuestras herramientas.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Cualquier decisión jurídica o fiscal relevante (como la aceptación de una indemnización por despido, la firma de un finiquito o la impugnación de una retención de ISR) debe ser validada previamente con un profesional certificado.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              3. Instancias Públicas de Asesoría Gratuita en México
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Si enfrentas un conflicto con tu empleador, un despido injustificado o requieres asistencia legal gratuita y con validez oficial ante las autoridades de la Secretaría del Trabajo y Previsión Social (STPS), te recomendamos acudir a:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                PROFEDET (Procuraduría Federal de la Defensa del Trabajo)
              </p>
              <p className="text-xs text-slate-600">
                Organismo público desconcentrado de la STPS que brinda asesoría legal gratuita, mediación y representación jurídica a trabajadores, beneficiarios y sindicatos.
              </p>
              <p className="text-xs">
                Portal web:{' '}
                <a
                  href="https://www.gob.mx/profedet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-900 underline font-semibold"
                >
                  gob.mx/profedet
                </a>{' '}
                · Teléfono gratuito nacional: 800 911 7877
              </p>
            </div>
          </section>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/mx/metodologia/"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition-colors"
            >
              Consultar Fórmulas Oficiales LFT →
            </Link>
            <Link
              href="/mx/terminos-de-uso/"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Términos de Uso
            </Link>
          </div>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
