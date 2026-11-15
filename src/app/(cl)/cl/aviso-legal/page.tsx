import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/aviso-legal',
    title: 'Aviso Legal y Descargo de Responsabilidad 2026',
    description:
      'Descargo de responsabilidad de Calcula Chile: herramientas orientativas y educativas; primacía de la Dirección del Trabajo, SII y Banco Central de Chile.',
  });
}

export default function AvisoLegalPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Aviso Legal' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/aviso-legal"
        type="info"
        title="Aviso Legal y Descargo de Responsabilidad - Calcula Chile"
        description="Descargo de responsabilidad legal y técnica sobre el alcance meramente informativo y referencial de las calculadoras de Calcula Chile."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Aviso Legal', path: '/cl/aviso-legal/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 rounded-full border border-amber-200">
            <span>⚖️</span>
            <span>Descargo de Responsabilidad • Validez 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aviso Legal y Descargo de Responsabilidad
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Te invitamos a leer atentamente este descargo de responsabilidad sobre la naturaleza pedagógica, orientativa y de simulación de las herramientas provistas en Calcula Chile.
          </p>
        </header>

        {/* 1. Naturaleza Simulada y Educativa */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📚</span> 1. Naturaleza de Simulación y Carácter Educativo
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            Las calculadoras disponibles en Calcula Chile (incluyendo la Calculadora de Finiquito Laboral, Sueldo Líquido, Arriendo en UF, Simulador Hipotecario y consulta de UTM/UF) han sido programadas para reproducir fielmente las disposiciones del <strong>Código del Trabajo (DFL 1)</strong>, la <strong>Ley sobre Impuesto a la Renta (LIR)</strong> y las normativas del Banco Central de Chile.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-950 text-sm leading-relaxed font-medium">
            Sin embargo, todos los resultados arrojados constituyen simulaciones numéricas de carácter exclusivamente <strong>informativo, pedagógico y referencial</strong>. Bajo ningún concepto reemplazan el dictamen formal de un fiscalizador de la Dirección del Trabajo, la liquidación tributaria emitida por el SII, ni el patrocinio letrado de un abogado especialista en derecho laboral.
          </div>
        </section>

        {/* 2. Primacía de Organismos Oficiales */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🏛️</span> 2. Primacía Jerárquica de Organismos del Estado
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Ante cualquier discrepancia de interpretación, cálculo o criterio entre lo mostrado en este sitio web y las determinaciones de las instituciones públicas de la República de Chile, <strong>prevalecerán siempre y en todo momento</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-2">
            <li>
              Los dictámenes, resoluciones e instrucciones emitidas por la <strong>Dirección del Trabajo (DT)</strong> y sus Inspecciones Comunales o Provinciales.
            </li>
            <li>
              Las resoluciones, liquidaciones y circulares oficiales del <strong>Servicio de Impuestos Internos (SII)</strong>.
            </li>
            <li>
              Las publicaciones de series estadísticas del <strong>Banco Central de Chile (BCCh)</strong> y del <strong>Instituto Nacional de Estadísticas (INE)</strong>.
            </li>
            <li>
              Las circulares normativas de la <strong>Superintendencia de Pensiones (SP)</strong> y de la <strong>Superintendencia de Salud</strong>.
            </li>
          </ul>
        </section>

        {/* 3. Reserva de Derechos en el Finiquito */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
            <span>✍️</span> 3. Recomendación Crucial: Reserva de Derechos al Firmar el Finiquito
          </h2>
          <p className="text-sm sm:text-base text-blue-900 leading-relaxed">
            Si eres un trabajador dependiente y estás a punto de firmar tu finiquito ante notario o ministro de fe, y observas diferencias entre lo que te corresponde legalmente y lo ofrecido por tu empleador, <strong>nunca firmes el documento sin estampar previamente tu reserva de derechos</strong>.
          </p>
          <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
            Debes escribir de tu propio puño y letra sobre el texto del finiquito frases tales como: <em>«Me reservo el derecho a reclamar judicialmente la causal de despido, la base de cálculo de la indemnización por años de servicio y el feriado proporcional adeudado»</em>. El empleador no puede condicionar el pago de los haberes reconocidos a que no hagas reserva de derechos (Ley N° 21.361).
          </p>
        </section>

        {/* 4. Ausencia de Vínculo Gubernamental */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🏢</span> 4. Independencia Institucional
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Calcula Chile es un proyecto tecnológico privado perteneciente a la red{' '}
            <a
              href="https://zetawala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Zetawala
            </a>
            . No mantenemos relación societaria, dependencia funcional, subsidio ni patrocinio oficial de ningún ministerio, repartición pública o entidad gubernamental de Chile.
          </p>
        </section>

        {/* 5. Contacto Legal */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            Dudas o Precisiones Jurídicas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Para observaciones normativas o consultas de carácter regulatorio respecto al contenido expuesto en Calcula Chile, contáctanos en:{' '}
            <a href="mailto:contacto@zetawala.com" className="text-blue-700 underline font-semibold">
              contacto@zetawala.com
            </a>
            .
          </p>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
