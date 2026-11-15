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
    slug: 'co/aviso-legal',
    title: 'Aviso Legal y Descargo de Responsabilidad - Calcula Colombia',
    description:
      'Descargo de responsabilidad de Calcula Colombia. Las simulaciones tienen carácter educativo y no reemplazan el asesoramiento jurídico o dictamen oficial del Ministerio del Trabajo.',
  });
}

export default function AvisoLegalCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Aviso Legal', path: '/co/aviso-legal/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/aviso-legal"
        type="website"
        title="Aviso Legal - Calcula Colombia"
        description="Descargo de responsabilidad y aviso legal de Calcula Colombia."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Aviso Legal' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
              Descargo Legal · Código Sustantivo del Trabajo
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aviso Legal y Descargo de Responsabilidad
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Alcance normativo de las simulaciones de liquidación y prestaciones laborales en Colombia, y límites de responsabilidad de la plataforma.
            </p>
          </header>

          {/* Primary Legal Disclaimer Box */}
          <div className="bg-amber-50 border-2 border-amber-500 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              <h2 className="text-xl font-bold text-amber-950">
                Finalidad Exclusivamente Orientativa e Informativa
              </h2>
            </div>
            <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
              Las herramientas y contenidos ofrecidos en <strong>Calcula Colombia</strong> son simulaciones estimativas elaboradas para fines pedagógicos e ilustrativos. <strong>No constituyen concepto jurídico vinculante, liquidación definitiva de acreencias laborales, asesoría fiscal ni dictamen de peritaje contable ante juzgados laborales o autoridades administrativas.</strong>
            </p>
          </div>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              1. Prevalencia de Acuerdos Convencionales y Sentencias Judiciales
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              En las relaciones de trabajo en Colombia, la determinación exacta de las sumas a pagar puede variar sustancialmente según factores específicos del vínculo laboral, incluyendo:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 pl-2">
              <li>
                <strong>Convenciones Colectivas de Trabajo y Pactos Colectivos:</strong> Acuerdos sindicales con el empleador que estipulen primas extralegales, quinquenios, auxilios de alimentación o tablas indemnizatorias superiores a las mínimas del Art. 64 del CST.
              </li>
              <li>
                <strong>Modalidad Contractual Específica:</strong> Contratos a término fijo, obra o labor determinada, de aprendizaje o contratos de dirección, confianza y manejo.
              </li>
              <li>
                <strong>Pagos no constitutivos de salario:</strong> Acuerdos de desalarización suscritos bajo el Artículo 128 del CST y sujeción al límite del 40% del Artículo 30 de la Ley 1393 de 2010 para cotizaciones a seguridad social.
              </li>
              <li>
                <strong>Decisiones Judiciales:</strong> Sentencias de los Jueces Laborales del Circuito, Tribunales Superiores de Distrito Judicial y la Sala de Casación Laboral de la Corte Suprema de Justicia.
              </li>
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              2. Exoneración de Responsabilidad
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ni <strong>Calcula</strong> ni su red matriz <strong>Zetawala</strong> asumen responsabilidad alguna por las decisiones de terminación laboral, firma de finiquitos, transacciones o acuerdos conciliatorios que trabajadores o empresas celebren tomando como base los cálculos de este portal.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ante cualquier conflicto laboral o duda sobre una suma liquidada, se recomienda encarecidamente acudir a profesionales del derecho laboral o a las entidades públicas de protección al trabajador.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              3. Canales Oficiales de Asesoría Laboral Gratuita en Colombia
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Si requieres orientación jurídica oficial, acompañamiento de un inspector de trabajo o mediación en un conflicto de liquidación, te sugerimos consultar las siguientes dependencias públicas:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                Ministerio del Trabajo de la República de Colombia
              </p>
              <p className="text-xs text-slate-600">
                Entidad rectora encargada de formular políticas laborales, vigilar el cumplimiento del CST y prestar servicios de inspección, vigilancia y control en todas las direcciones territoriales del país.
              </p>
              <p className="text-xs">
                Portal web:{' '}
                <a
                  href="https://www.mintrabajo.gov.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-900 underline font-semibold"
                >
                  mintrabajo.gov.co
                </a>{' '}
                · Línea nacional gratuita: 01 8000 112518
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1 text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                Consultorios Jurídicos Universitarios
              </p>
              <p className="text-xs text-slate-600">
                Las facultades de derecho reconocidas en Colombia prestan asistencia legal gratuita a trabajadores de estratos 1 y 2 en materia de reclamación de derechos laborales y liquidaciones.
              </p>
            </div>
          </section>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/co/metodologia/"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition-colors"
            >
              Consultar Fórmulas del CST →
            </Link>
            <Link
              href="/co/terminos-de-uso/"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Términos de Uso
            </Link>
          </div>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
