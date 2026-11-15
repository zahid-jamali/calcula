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
    slug: 'mx/contacto',
    title: 'Contacto y Soporte - Calcula México | Red Zetawala',
    description:
      'Canal de contacto directo de Calcula México. Envíanos dudas, reportes de cálculo o sugerencias con compromiso de respuesta en 48 horas.',
  });
}

export default function ContactoMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Contacto', path: '/mx/contacto/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/contacto"
        type="website"
        title="Contacto y Soporte - Calcula México"
        description="Atención al usuario y soporte editorial de Calcula México."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Contacto' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 mb-3">
              Atención Directa · Red Zetawala
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contacto y Soporte al Usuario
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              En Calcula valoramos la comunicación transparente con nuestros usuarios, trabajadores, profesionales de recursos humanos y especialistas laborales en México.
            </p>
          </header>

          {/* SLA Callout */}
          <div className="bg-white border-2 border-brand-900 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⏱️</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Compromiso de Respuesta (SLA: 48 Horas)
                </h2>
                <p className="text-sm text-slate-600">
                  Damos respuesta personalizada a cada solicitud técnica o editorial en un plazo máximo de dos días hábiles.
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
                href="mailto:contacto@zetawala.com?subject=Calcula%20M%C3%A9xico%20-%20Consulta"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-900 text-white font-bold hover:bg-brand-800 transition-colors shadow-sm"
              >
                Enviar Correo Directo ✉️
              </a>
            </div>
          </div>

          {/* Feedback guidelines */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Guías para el Envío de Retroalimentación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🐞</span> Reporte de Discrepancias en Fórmulas
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Si consideras que un cálculo difiere de la LFT o de los criterios del SAT/IMSS, por favor indícanos: la calculadora utilizada, los datos simulados (salario, fecha de ingreso, etc.) y la normativa aplicable para revisarlo de inmediato.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>💡</span> Sugerencia de Nuevas Calculadoras
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ¿Echas en falta una herramienta para calcular horas extras triples, finiquito para trabajadoras del hogar o simulación de préstamos Infonavit? Evaluamos de forma constante nuevas adiciones a nuestro catálogo.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🛡️</span> Privacidad y Ejercicio de Derechos ARCO
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para consultas relativas al tratamiento de cookies o ejercicio de derechos ARCO bajo la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>🤝</span> Alianzas y Colaboraciones
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instituciones educativas, medios de comunicación y despachos laborales interesados en citar nuestras herramientas y tablas metodológicas.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy note */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-600">
            <p>
              <strong>Nota sobre tus datos:</strong> Calcula no almacena tus datos de nómina ni requiere registro para usar sus herramientas. Al contactarnos por correo electrónico, tu dirección será utilizada única y exclusivamente para responder a tu mensaje, conforme a nuestra{' '}
              <Link href="/mx/politica-de-privacidad/" className="text-brand-900 underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </div>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
