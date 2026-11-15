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
    slug: 'cl/acerca-de',
    title: 'Acerca de Calcula Chile y Red Zetawala 2026',
    description:
      'Conoce la misión, equipo y estándares editoriales de Calcula Chile: herramientas transparentes y gratuitas para el cálculo de derechos laborales y monetarios.',
  });
}

export default function AcercaDePage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Acerca de' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/acerca-de"
        type="info"
        title="Acerca de Calcula Chile y Red Zetawala"
        description="Misión, metodología y compromiso de transparencia en derechos laborales e indicadores monetarios oficiales de Chile."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Acerca de', path: '/cl/acerca-de/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full border border-blue-200">
            <span>🇨🇱</span>
            <span>Misión Institucional • Red Zetawala</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Acerca de Calcula Chile
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Calcula Chile es una plataforma de software de libre acceso concebida para brindar certidumbre y transparencia matemática a trabajadores, empleadores, arrendatarios y ciudadanos en la República de Chile.
          </p>
        </header>

        {/* Misión y Visión */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🎯</span> Nuestra Misión
          </h2>
          <p className="text-slate-700 leading-relaxed">
            En el ámbito de las finanzas personales y las relaciones laborales existe frecuentemente una marcada asimetría de información. Conceptos críticos como la indemnización legal por años de servicio, los topes imponibles previsionales de 87,4 UF y 131,4 UF, los tramos progresivos del Impuesto Único de Segunda Categoría o el reajuste diario de la Unidad de Fomento (UF) suelen generar dudas e inseguridad.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nuestra misión es transformar la complejidad del <strong>Código del Trabajo (DFL 1)</strong>, las normativas del <strong>Servicio de Impuestos Internos (SII)</strong> y las series estadísticas del <strong>Banco Central de Chile</strong> en herramientas interactivas, auditables, de alta fidelidad técnica y absolutamente gratuitas.
          </p>
        </section>

        {/* La Red Zetawala */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-500/30 text-blue-200 uppercase tracking-wider">
              Ecosistema Global
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Parte de la Red Zetawala
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Calcula forma parte de la red de plataformas digitales impulsadas por{' '}
            <a
              href="https://zetawala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 font-semibold underline underline-offset-4 hover:text-white transition-colors"
            >
              Zetawala (zetawala.com)
            </a>
            , un ecosistema enfocado en construir herramientas web de utilidad cívica, financieras y educativas para América Latina y el público hispanohablante global.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Bajo el liderazgo ético de Zetawala, la plataforma opera con rigurosas políticas de neutralidad, privacidad irrestricta y actualización periódica de parámetros ante cada publicación oficial en el Diario Oficial de Chile.
          </p>
        </section>

        {/* Tres Pilares Éticos y Técnicos */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Nuestros Pilares Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-lg">
                🔒
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Procesamiento en el Cliente
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ningún salario, finiquito, fecha ni información financiera se almacena en bases de datos remotas. El 100% del cálculo se ejecuta localmente en el navegador de tu dispositivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-lg">
                ⚖️
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Rigor Normativo Oficial
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada fórmula refleja las leyes vigentes: DFL 1 del Código del Trabajo, circulares de la Dirección del Trabajo (DT), Superintendencia de Pensiones (SP) y resoluciones tributarias del SII.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-lg">
                🌐
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Acceso 100% Gratuito
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sin registros obligatorios, sin suscripciones pagadas y sin límites en la cantidad de simulaciones laborales, hipotecarias o cambiarias que desees realizar.
              </p>
            </div>
          </div>
        </section>

        {/* Proceso Editorial y Fuentes */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📚</span> Proceso Editorial y Verificación de Datos
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Nuestro equipo revisa continuamente las variaciones publicadas por organismos oficiales:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm sm:text-base">
            <li>
              <strong>Banco Central de Chile:</strong> Registro del valor diario de la Unidad de Fomento (UF) y tipo de cambio oficial (Dólar Observado y Euro).
            </li>
            <li>
              <strong>Instituto Nacional de Estadísticas (INE):</strong> Variación mensual del Índice de Precios al Consumidor (IPC).
            </li>
            <li>
              <strong>Servicio de Impuestos Internos (SII):</strong> Valor mensual de la Unidad Tributaria Mensual (UTM), Unidad Tributaria Anual (UTA) y escalas de retención del Impuesto Único.
            </li>
            <li>
              <strong>Superintendencia de Pensiones:</strong> Topes imponibles anuales y estructura de comisiones de las 7 administradoras (Capital, Cuprum, Habitat, Modelo, PlanVital, Provida, Uno).
            </li>
            <li>
              <strong>Dirección del Trabajo (DT):</strong> Dictámenes sobre causal de desahucio, indemnizaciones por años de servicio, aviso previo y feriado legal proporcional.
            </li>
          </ul>
        </section>

        {/* Reporte de Errores y Soporte */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
            <span>📢</span> Reporte de Errores y Retroalimentación
          </h2>
          <p className="text-sm sm:text-base text-blue-900 leading-relaxed">
            Mantenemos un compromiso firme con la exactitud técnica. Si detectas alguna inconsistencia en los cálculos, un cambio legislativo reciente o deseas sugerir una nueva funcionalidad para la República de Chile, contáctanos directamente a nuestro buzón editorial.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/cl/contacto/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold text-sm hover:bg-blue-800 transition-colors shadow-sm"
            >
              Contactar al Equipo
            </Link>
            <Link
              href="/cl/metodologia/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-blue-900 border border-blue-300 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Ver Metodología Completa
            </Link>
          </div>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
