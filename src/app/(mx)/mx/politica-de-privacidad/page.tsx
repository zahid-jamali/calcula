import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/politica-de-privacidad',
    title: 'Política de Privacidad y Protección de Datos - Calcula México',
    description:
      'Política de privacidad de Calcula México. Procesamiento 100% en el navegador, cumplimiento con AdSense, analítica sin cookies de Cloudflare y derechos ARCO (LFPDPPP/INAI).',
  });
}

export default function PoliticaPrivacidadMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Política de Privacidad', path: '/mx/politica-de-privacidad/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/politica-de-privacidad"
        type="website"
        title="Política de Privacidad - Calcula México"
        description="Compromiso de privacidad, procesamiento local en cliente y política de cookies de Calcula México."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Política de Privacidad' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
              Última actualización: 2026 · Válida para México
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Política de Privacidad y Tratamiento de Datos
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              En Calcula México (parte de la red Zetawala, accesible en https://zetawala.com), la privacidad no es un anexo: es el principio fundacional sobre el cual diseñamos nuestra arquitectura técnica.
            </p>
          </header>

          {/* Principle 1: 100% Client-Side */}
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💻</span>
              <h2 className="text-xl font-bold text-emerald-950">
                100% Procesamiento en el Navegador (Client-Side)
              </h2>
            </div>
            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
              Cuando utilizas nuestras calculadoras de finiquito, liquidación, aguinaldo, vacaciones o sueldo neto, <strong>ninguno de los datos que ingresas (tu salario, fechas de contrato, deducciones o motivos de despido) se envía a través de Internet ni se almacena en servidores o bases de datos externas</strong>. Todos los cálculos matemáticos se resuelven de forma exclusiva en la memoria de tu propio dispositivo mediante código JavaScript en tu navegador. Al cerrar o recargar la pestaña, los datos desaparecen por completo.
            </p>
          </div>

          {/* Section: Uso de localStorage */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Almacenamiento Local (localStorage)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula no utiliza almacenamiento persistente para perfilar usuarios. De forma excepcional, podemos hacer uso del mecanismo local <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">localStorage</code> del navegador exclusivamente para guardar preferencias de interfaz del usuario (por ejemplo, si has cerrado un aviso informativo o la preferencia de tema visual). Estos datos residen en tu equipo y nunca son transmitidos a servidores de Calcula ni a terceros.
            </p>
          </section>

          {/* Section: Cloudflare Cookieless Analytics */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Analítica Web Sin Cookies (Cloudflare Web Analytics)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Para conocer el volumen general de visitas y garantizar la estabilidad y velocidad de nuestra plataforma, empleamos <strong>Cloudflare Web Analytics</strong>. Este sistema está diseñado para respetar la privacidad por defecto:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li>No utiliza cookies de seguimiento (cookieless).</li>
              <li>No recopila direcciones IP personales ni huellas digitales (fingerprinting).</li>
              <li>No rastrea a los usuarios a través de diferentes sitios web.</li>
            </ul>
          </section>

          {/* Section: Google AdSense and Third Party Advertising */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              3. Publicidad de Terceros y Cookies de Google AdSense
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Para mantener el servicio completamente gratuito y de libre acceso, Calcula muestra anuncios publicitarios gestionados por proveedores externos, principalmente <strong>Google AdSense</strong>. Conforme a las políticas de Google y a los estándares de la industria publicitaria:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 pl-2">
              <li>
                Google y otros proveedores terceros utilizan cookies (como la cookie de DoubleClick) para publicar anuncios basados en visitas anteriores de los usuarios a este u otros sitios web.
              </li>
              <li>
                El uso de cookies de publicidad permite a Google y a sus socios mostrar anuncios a nuestros visitantes en función de sus visitas a nuestros sitios y a otros sitios en Internet.
              </li>
              <li>
                Los usuarios pueden inhabilitar la publicidad personalizada consultando la{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-900 underline font-semibold"
                >
                  Configuración de anuncios de Google (adssettings.google.com)
                </a>.
              </li>
              <li>
                Para conocer detalladamente cómo Google gestiona los datos de los sitios asociados, puedes visitar:{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-900 underline font-semibold"
                >
                  Cómo utiliza Google los datos cuando utilizas las aplicaciones o los sitios web de nuestros colaboradores
                </a>.
              </li>
            </ul>
          </section>

          {/* Section: Marco Legal Mexicano LFPDPPP / INAI */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Marco Legal en México y Derechos ARCO (LFPDPPP / INAI)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              En los supuestos en que un usuario decida voluntariamente comunicarse con nosotros por correo electrónico, el tratamiento de su dirección de correo y nombre se rige por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y los lineamientos del Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (<strong>INAI</strong>).
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Cualquier titular de datos puede ejercer en todo momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong> o revocar su consentimiento enviando una solicitud formal a nuestro responsable de privacidad al correo:{' '}
              <a
                href="mailto:contacto@zetawala.com?subject=Derechos%20ARCO%20-%20Calcula%20M%C3%A9xico"
                className="text-brand-900 font-bold underline"
              >
                contacto@zetawala.com
              </a>.
            </p>
          </section>

          {/* Section: Enlaces a Terceros */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Enlaces a Sitios Web de Terceros
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nuestro sitio web contiene enlaces a entidades gubernamentales oficiales (como <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">diputados.gob.mx</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">sat.gob.mx</code> o <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">inegi.org.mx</code>) y a la red Zetawala (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">zetawala.com</code>). Calcula no ejerce control sobre las prácticas de privacidad ni las políticas de cookies de dichos sitios externos.
            </p>
          </section>

          {/* Section: Modificaciones y Contacto */}
          <footer className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-2">
            <p className="font-bold text-slate-900">Modificaciones a esta Política</p>
            <p>
              Nos reservamos el derecho de actualizar esta política para reflejar cambios en la legislación mexicana o en los servicios de terceros. Toda modificación será publicada de forma inmediata en esta misma dirección URL con la indicación del año correspondiente.
            </p>
            <p className="pt-2">
              Para cualquier consulta o aclaración: <strong>contacto@zetawala.com</strong>
            </p>
          </footer>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
