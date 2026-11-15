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
    slug: 'co/contacto',
    title: 'Contacto y Soporte - Calcula Colombia | Red Zetawala',
    description:
      'Canal de contacto de Calcula Colombia. Envíanos consultas, reportes de fórmulas del CST o sugerencias con compromiso de respuesta en 48 horas.',
  });
}

export default function ContactoCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Contacto', path: '/co/contacto/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/contacto"
        type="website"
        title="Contacto y Soporte - Calcula Colombia"
        description="Atención al usuario y soporte editorial de Calcula Colombia."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Contacto' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 mb-3">
              Atención Directa · Red Zetawala Colombia
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contacto y Soporte al Usuario
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              En Calcula Colombia mantenemos una línea directa de comunicación para responder inquietudes de trabajadores, líderes de talento humano y asesores laborales colombianos.
            </p>
          </header>

          {/* SLA Card */}
          <div className="bg-white border-2 border-brand-900 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⏱️</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Compromiso de Respuesta (SLA: 48 Horas)
                </h2>
                <p className="text-sm text-slate-600">
                  Nuestro equipo responde todas las consultas recibidas en un plazo máximo de dos días hábiles.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">Correo Electrónico Oficial</span>
                <p className="text-lg sm:text-xl font-mono font-bold text-brand-900">
                  contacto@zetawala.com
                </p>
              </div>
              <a
                href="mailto:contacto@zetawala.com?subject=Calcula%20Colombia%20-%20Consulta"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-900 text-white font-bold hover:bg-brand-800 transition-colors shadow-sm"
              >
                Enviar Correo Directo ✉️
              </a>
            </div>
          </div>

          {/* Feedback guidelines */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Directrices de Atención y Retroalimentación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🐞</span> Correcciones en Cálculos del CST
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Si consideras que algún simulador no refleja adecuadamente una sentencia reciente de la Corte Suprema o un cambio normativo, describe la situación y los artículos relevantes para evaluarlo.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>💡</span> Nuevas Herramientas para Colombia
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ¿Necesitas un simulador de salario integral, liquidación para empleados de servicio doméstico o cálculo de retención en la fuente por procedimientos 1 y 2? Recibimos tus sugerencias.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🛡️</span> Habeas Data (Ley 1581 de 2012)
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para consultas relativas al tratamiento de cookies o solicitudes de Habeas Data bajo la legislación colombiana de protección de datos personales.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🤝</span> Prensa y Enlaces Educativos
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Universidades, consultorios jurídicos y medios informativos interesados en citar nuestras calculadoras y tablas metodológicas.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-600">
            <p>
              <strong>Privacidad garantizada:</strong> Las calculadoras no guardan tus salarios. Tu correo solo se utilizará para atender tu solicitud, conforme a nuestra{' '}
              <Link href="/co/politica-de-privacidad/" className="text-brand-900 underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </div>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
