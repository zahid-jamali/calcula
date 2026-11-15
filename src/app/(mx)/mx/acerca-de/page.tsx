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
    slug: 'mx/acerca-de',
    title: 'Acerca de Calcula México - Misión, Transparencia y Red Zetawala',
    description:
      'Conoce Calcula México, parte de la red de herramientas gratuitas de Zetawala. Nuestra misión es brindar transparencia y precisión en el cálculo de prestaciones laborales bajo la LFT.',
  });
}

export default function AcercaDeMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Acerca de', path: '/mx/acerca-de/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/acerca-de"
        type="website"
        title="Acerca de Calcula México"
        description="Misión, metodología y transparencia en el cálculo de prestaciones laborales según la Ley Federal del Trabajo."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Acerca de' },
          ]}
        />

        <article className="mt-6 space-y-8">
          {/* Header */}
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              Institucional · Calcula México
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Acerca de Calcula México
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Herramientas digitales abiertas, transparentes y 100% gratuitas para que cualquier trabajador o empleador en México comprenda con exactitud sus derechos y obligaciones conforme a la Ley Federal del Trabajo (LFT).
            </p>
          </header>

          {/* Quick statement box */}
          <div className="bg-white border-l-4 border-brand-900 p-5 rounded-r-xl shadow-sm border border-slate-200">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Nuestra Misión
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Democratizar el acceso al derecho laboral mexicano eliminando la opacidad y los errores en las liquidaciones, finiquitos, aguinaldos y retenciones de nómina. Creemos que la información clara empodera relaciones laborales más justas y transparentes.
            </p>
          </div>

          {/* Section: Zetawala Network */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Parte de la Red Zetawala
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              <strong>Calcula México</strong> forma parte del ecosistema de herramientas digitales de{' '}
              <a
                href="https://zetawala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-900 font-semibold underline hover:text-brand-700"
              >
                Zetawala
              </a>
              . Zetawala diseña y mantiene plataformas independientes orientadas a resolver problemas cotidianos de cálculo financiero, laboral y de productividad en América Latina, sin muros de pago, sin suscripciones forzosas y con un compromiso inquebrantable hacia la privacidad del usuario.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              A través de nuestra presencia en México, Colombia, Brasil y Chile, desarrollamos modelos adaptados a la jurisprudencia y reformas fiscales de cada país, garantizando vigencia constante para el año 2026.
            </p>
          </section>

          {/* Section: Principios y Rigor Técnico */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Nuestros Pilares Editoriales y Técnicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">⚖️ Apego Estricto a la LFT</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cada fórmula implementa con fidelidad la Ley Federal del Trabajo vigente, incorporando la reforma de <strong>Vacaciones Dignas</strong> (Arts. 76 y 78), el cálculo constitucional de <strong>90 días</strong> de liquidación (Art. 48/50) y los topes de <strong>prima de antigüedad</strong> (Art. 162).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">🔒 Privacidad por Diseño</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El 100% de los cálculos se ejecutan en el navegador de tu dispositivo. Ningún salario, fecha de contratación o motivo de separación se envía a servidores externos ni se almacena en bases de datos.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">📊 Actualización 2026</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sincronizamos nuestros parámetros con la <strong>UMA del INEGI</strong>, las tarifas de <strong>retención de ISR del SAT</strong> (Art. 96 LISR), las cuotas del <strong>IMSS</strong> y los salarios mínimos de la <strong>CONASAMI</strong> (general y frontera norte).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-brand-900 text-xl font-bold mb-2">🤝 Independencia Total</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No pertenecemos a despachos jurídicos patronales ni a organizaciones sindicales. Nuestras calculadoras son neutrales, educativas y tienen el único objetivo de brindar exactitud numérica.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Reporte de Errores y Sugerencias */}
          <section className="bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>📩</span> Reporte de Errores y Transparencia
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              La legislación laboral y fiscal mexicana es compleja y está sujeta a interpretaciones y reformas continuas. Si encuentras alguna discrepancia con tu caso particular, un cambio normativo reciente o deseas sugerir una nueva herramienta para el mercado mexicano, nuestro equipo de desarrollo y contenidos revisa cada observación.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Puedes escribir directamente a nuestro buzón editorial:{' '}
              <a
                href="mailto:contacto@zetawala.com?subject=Calcula%20M%C3%A9xico%20-%20Observaci%C3%B3n"
                className="text-brand-900 font-bold underline hover:text-brand-700"
              >
                contacto@zetawala.com
              </a>
              . Respondemos con un compromiso de atención de menos de 48 horas hábiles.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/mx/metodologia/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition-colors"
              >
                Ver Metodología y Fórmulas LFT →
              </Link>
              <Link
                href="/mx/contacto/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Canal de Contacto
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
