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
    slug: 'mx/terminos-de-uso',
    title: 'Términos y Condiciones de Uso - Calcula México',
    description:
      'Términos y condiciones de uso de Calcula México. Acceso libre, condiciones de navegación y reglas de utilización de nuestros simuladores laborales y fiscales.',
  });
}

export default function TerminosUsoMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Términos de Uso', path: '/mx/terminos-de-uso/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/terminos-de-uso"
        type="website"
        title="Términos y Condiciones de Uso - Calcula México"
        description="Condiciones de servicio y uso gratuito de las calculadoras de Calcula México."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Términos de Uso' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
              Condiciones de Servicio · Vigencia 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Términos de Uso de la Plataforma
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              El acceso y utilización del portal web <strong>Calcula México</strong> implica la aceptación plena y sin reservas de los presentes términos y condiciones por parte del usuario.
            </p>
          </header>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Gratuidad y Acceso Libre
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula México es una plataforma de libre acceso, abierta y 100% gratuita para personas trabajadoras, estudiantes, empleadores y profesionales. No requerimos registro previo, alta de usuario, vinculación de tarjeta de crédito ni la contratación de suscripciones de pago para utilizar ninguno de nuestros simuladores laborales o fiscales.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Carácter Informativo y Pedagógico de las Simulaciones
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Las herramientas puestas a disposición en este sitio han sido concebidas exclusivamente con fines <strong>educativos, referenciales y de simulación estimativa</strong>. Aunque nos esforzamos por mantener cada algoritmo en estricto apego a la Ley Federal del Trabajo (LFT), la Ley del Impuesto sobre la Renta (LISR) y la Ley del Seguro Social (LSS), los resultados generados no sustituyen el cálculo oficial que debe realizar un perito contador, un abogado laboralista o la Procuraduría Federal de la Defensa del Trabajo (PROFEDET).
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Para conocer el alcance detallado sobre la responsabilidad legal de las estimaciones, consulta nuestro{' '}
              <Link href="/mx/aviso-legal/" className="text-brand-900 underline font-semibold">
                Aviso Legal y Descargo de Responsabilidad
              </Link>.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Propiedad Intelectual
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Todos los elementos que componen este sitio web (incluyendo su código fuente, arquitectura de software, algoritmos matemáticos en JavaScript/TypeScript, diseño gráfico, logotipos, textos explicativos, tablas de datos y componentes visuales) son propiedad exclusiva de <strong>Zetawala</strong> o se utilizan bajo licencia.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Queda expresamente prohibida la copia, reproducción, ingeniería inversa, scraping automatizado no autorizado o explotación comercial de los contenidos sin el previo consentimiento por escrito de los titulares.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Uso Correcto de las Herramientas
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              El usuario se compromete a hacer un uso lícito y de buena fe de las herramientas disponibles. Queda terminantemente prohibido emplear el sitio para cometer actividades ilícitas, saturar o desestabilizar la infraestructura técnica mediante ataques de denegación de servicio o vulnerar la seguridad del servicio.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Disponibilidad y Enlaces Externos
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula México realiza sus mejores esfuerzos técnicos para asegurar la continuidad del servicio las 24 horas del día; no obstante, no garantiza la disponibilidad ininterrumpida ante eventuales mantenimientos técnicos o caídas de red de proveedores de infraestructura.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Los enlaces a recursos y portales de dependencias gubernamentales mexicanas se ofrecen para conveniencia del usuario, no asumiendo Calcula responsabilidad sobre la veracidad o estabilidad de sitios ajenos a la red Zetawala.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Legislación Aplicable y Jurisdicción
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Los presentes Términos de Uso se interpretan y rigen conforme a las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del sitio web, las partes se someten a la competencia de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <footer className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Dudas o consultas contractuales</p>
            <p>
              Puedes comunicarte con el equipo legal a través del correo oficial: <strong>contacto@zetawala.com</strong>
            </p>
          </footer>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
