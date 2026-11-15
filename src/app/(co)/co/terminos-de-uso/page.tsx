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
    slug: 'co/terminos-de-uso',
    title: 'Términos y Condiciones de Uso - Calcula Colombia',
    description:
      'Términos y condiciones de servicio de Calcula Colombia. Acceso gratuito, reglas de uso educativo y condiciones de las herramientas laborales del CST.',
  });
}

export default function TerminosUsoCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Términos de Uso', path: '/co/terminos-de-uso/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/terminos-de-uso"
        type="website"
        title="Términos y Condiciones de Uso - Calcula Colombia"
        description="Condiciones de uso libre y gratuito de las herramientas de liquidación laboral en Colombia."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Términos de Uso' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
              Términos de Servicio · Vigencia 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Términos y Condiciones de Uso
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              El ingreso y uso de los servicios del portal web <strong>Calcula Colombia</strong> se encuentra sujeto a las siguientes condiciones generales que el usuario declara conocer y aceptar.
            </p>
          </header>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Naturaleza Gratuita del Servicio
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula Colombia brinda acceso libre y gratuito a la totalidad de sus herramientas de liquidación laboral, cálculo de cesantías, primas de servicios, vacaciones, retención de seguridad social y generador de enlaces. En ningún momento se exigirá pago de cuotas, suscripciones periódicas ni registro de tarjetas bancarias.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Carácter Simulador y Pedagógico
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Todas las calculadoras puestas a disposición del público constituyen simuladores pedagógicos orientativos basados en la normativa laboral general del Código Sustantivo del Trabajo (CST). Los cálculos emitidos no constituyen concepto jurídico, liquidación oficial ni peritaje contable con efectos vinculantes ante jueces o el Ministerio del Trabajo.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Para conocer las limitaciones legales completas, revisa nuestro{' '}
              <Link href="/co/aviso-legal/" className="text-brand-900 underline font-semibold">
                Aviso Legal y Descargo de Responsabilidad
              </Link>.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Propiedad Intelectual
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              El diseño de interfaz, código fuente, scripts de cálculo, contenido textual explicativo, infografías y marcas distintivas pertenecen a <strong>Zetawala</strong> y están protegidos por las leyes de propiedad intelectual de Colombia y tratados internacionales sobre derechos de autor.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Se autoriza la consulta y uso personal de las herramientas. Queda expresamente prohibida la copia no autorizada del código, la extracción masiva automatizada de datos (scraping) o el uso comercial con fines de lucro directo de la plataforma.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Obligaciones y Conducta del Usuario
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              El usuario se compromete a no realizar acciones que puedan deteriorar, sobrecargar, inutilizar o vulnerar la seguridad de la infraestructura digital de Calcula Colombia ni interferir con la navegación pacífica de otros usuarios.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Las presentes condiciones se rigen e interpretan de conformidad con la legislación de la República de Colombia. Cualquier diferendo derivado del acceso a la plataforma será sometido a los juzgados competentes de la República de Colombia.
            </p>
          </section>

          <footer className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Consultas sobre los términos</p>
            <p>
              Escribe a nuestro equipo a través del correo: <strong>contacto@zetawala.com</strong>
            </p>
          </footer>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
