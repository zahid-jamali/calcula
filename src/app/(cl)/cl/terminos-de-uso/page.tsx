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
    slug: 'cl/terminos-de-uso',
    title: 'Términos de Uso Calcula Chile 2026',
    description:
      'Condiciones de uso, acceso gratuito, propiedad intelectual y límites de responsabilidad de la plataforma de cálculo Calcula Chile y red Zetawala.',
  });
}

export default function TerminosDeUsoPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Términos de Uso' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/terminos-de-uso"
        type="info"
        title="Términos de Uso - Calcula Chile"
        description="Condiciones y términos generales que regulan el acceso y utilización de Calcula Chile y sus calculadoras laborales y monetarias."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Términos de Uso', path: '/cl/terminos-de-uso/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 rounded-full border border-slate-200">
            <span>📜</span>
            <span>Marco Contractual • Vigente 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Te damos la bienvenida a Calcula Chile (calcula.zetawala.com/cl/). Al navegar o utilizar nuestras herramientas de cálculo interactivo, aceptas sin reservas los presentes Términos y Condiciones de Uso.
          </p>
        </header>

        {/* 1. Naturaleza del Servicio y Gratuidad */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🆓</span> 1. Acceso Libre y Gratuito
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Calcula Chile se ofrece como una herramienta de servicio público digital, de acceso libre y 100% gratuito. No cobramos tarifas de uso, no requerimos tarjetas de crédito ni exigimos crear cuentas de usuario para realizar consultas de UF, UTM, finiquito laboral o sueldo líquido.
          </p>
        </section>

        {/* 2. Uso Aceptable y Prohibiciones */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>✅</span> 2. Uso Aceptable de la Plataforma
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Las calculadoras y contenidos de orientación están destinados para el uso personal, educativo, profesional y de investigación de los usuarios. Queda estrictamente prohibido:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-2">
            <li>
              Realizar ataques automatizados de denegación de servicio (DDoS) o cualquier acción que sature o degrade la infraestructura tecnológica de la red Zetawala.
            </li>
            <li>
              Emplear técnicas de raspado de datos (scraping) abusivo que perjudiquen el normal rendimiento del servicio para los demás usuarios.
            </li>
            <li>
              Presentar los resultados de la plataforma haciéndose pasar por un dictamen vinculante emanado de la Dirección del Trabajo o del Servicio de Impuestos Internos.
            </li>
          </ul>
        </section>

        {/* 3. Propiedad Intelectual */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>©️</span> 3. Propiedad Intelectual
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            El diseño gráfico, la arquitectura de software, los algoritmos de simulación en código fuente, la identidad de marca de Calcula y el sello de la red Zetawala son propiedad intelectual exclusiva de Zetawala.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Los textos de leyes, códigos normativos, artículos de decretos supremos e índices económicos oficiales (como el Código del Trabajo o las cifras del Banco Central) son de dominio público conforme a la legislación de la República de Chile.
          </p>
        </section>

        {/* 4. Límites de Responsabilidad */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>⚖️</span> 4. Limitación de Responsabilidad
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Los cálculos generados por la plataforma constituyen simulaciones estimativas basadas en fórmulas normativas estandarizadas. Calcula Chile y Zetawala no garantizan la aplicabilidad irrestricta de un cálculo a situaciones laborales atípicas (como convenios colectivos especiales, fueros maternales o sindicales con reglas particulares).
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            En ningún caso Calcula o sus operadores serán responsables de perjuicios directos o indirectos derivados de decisiones contractuales, financieras o judiciales tomadas por el usuario basadas en los resultados del sitio. Para mayor detalle, revisa nuestro{' '}
            <Link href="/cl/aviso-legal/" className="text-blue-700 underline font-semibold">
              Aviso Legal y Descargo de Responsabilidad
            </Link>
            .
          </p>
        </section>

        {/* 5. Disponibilidad del Servicio */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🌐</span> 5. Disponibilidad y Modificaciones
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Procuramos mantener una disponibilidad técnica continua (24/7/365). No obstante, nos reservamos el derecho de interrumpir temporalmente el servicio para mantenimientos técnicos, actualizaciones de índices o mejoras de seguridad sin previo aviso.
          </p>
        </section>

        {/* 6. Ley Aplicable y Jurisdicción */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>🏛️</span> 6. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Estos Términos y Condiciones se rigen e interpretan con arreglo a las leyes de la <strong>República de Chile</strong>. Cualquier controversia o reclamo que se suscite entre las partes será sometido a los tribunales ordinarios de justicia competentes.
          </p>
          <p className="text-xs text-slate-500">
            Última actualización: Enero de 2026. Consultas a:{' '}
            <a href="mailto:contacto@zetawala.com" className="text-blue-700 underline">
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
