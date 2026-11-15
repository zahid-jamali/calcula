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
    slug: 'cl/politica-de-privacidad',
    title: 'Política de Privacidad Calcula Chile 2026',
    description:
      'Política de privacidad de Calcula Chile: cálculo 100% en el navegador, sin recolección de salarios ni datos bancarios, cookies de Google AdSense y Ley 19.628.',
  });
}

export default function PoliticaPrivacidadPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Política de Privacidad' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/politica-de-privacidad"
        type="info"
        title="Política de Privacidad - Calcula Chile"
        description="Compromiso estricto de privacidad, procesamiento exclusivo en el cliente y protección de datos conforme a la Ley 19.628 de Chile."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Política de Privacidad', path: '/cl/politica-de-privacidad/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-50 rounded-full border border-emerald-200">
            <span>🛡️</span>
            <span>Privacidad por Diseño • Vigente 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Política de Privacidad de Calcula Chile
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            En Calcula Chile y la red Zetawala creemos que tus ingresos, indemnizaciones laborales y cálculos financieros personales te pertenecen exclusivamente a ti. Esta política detalla los principios técnicos de no recolección de información financiera y las reglas que rigen nuestro portal.
          </p>
        </header>

        {/* 1. Procesamiento 100% en el Cliente */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>💻</span> 1. Procesamiento 100% en el Navegador (Client-Side)
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A diferencia de otras plataformas financieras que envían los montos ingresados a servidores externos para su procesamiento, las calculadoras de Calcula Chile están construidas con una arquitectura <strong>Zero-Knowledge</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm sm:text-base">
            <li>
              <strong>Cálculos locales:</strong> Todo número ingresado (tu salario bruto, fecha de contratación, causal de despido, monto de arriendo en UF o dividendo hipotecario) se procesa en la memoria RAM del navegador de tu propio dispositivo mediante JavaScript.
            </li>
            <li>
              <strong>Sin bases de datos de usuarios:</strong> No contamos con bases de datos que guarden sueldos, RUTs, identificadores fiscales ni finiquitos de personas.
            </li>
            <li>
              <strong>Sin transmisión remota:</strong> Al pulsar los botones de cálculo, ningún dato financiero viaja por la red hacia los servidores de Calcula ni a servidores de terceros.
            </li>
          </ul>
        </section>

        {/* 2. Publicidad de Terceros y Requisitos de Google AdSense */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📢</span> 2. Publicidad de Terceros y Cookies de Google AdSense
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Para garantizar que todas nuestras calculadoras y guías se mantengan 100% gratuitas y de libre acceso, Calcula Chile exhibe anuncios provistos por proveedores externos, entre ellos <strong>Google AdSense</strong>.
          </p>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              Google y sus socios publicitarios utilizan <em>cookies</em> para publicar anuncios basados en las visitas previas de los usuarios a este sitio web o a otros portales de internet. El uso de cookies publicitarias permite a Google y a sus socios presentar anuncios orientados a tus intereses generales de navegación.
            </p>
            <p>
              Como usuario, dispones de total control sobre estas tecnologías y puedes inhabilitar en cualquier momento la publicidad personalizada a través de los siguientes canales oficiales:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong>Configuración de Anuncios de Google:</strong> Puedes gestionar o desactivar la personalización de anuncios en{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline"
                >
                  https://adssettings.google.com ↗
                </a>
                .
              </li>
              <li>
                <strong>Cómo utiliza Google la información:</strong> Para conocer los detalles de cómo Google recopila y utiliza datos en sitios asociados, consulta{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline"
                >
                  https://policies.google.com/technologies/partner-sites ↗
                </a>
                .
              </li>
              <li>
                <strong>Opt-out de terceros:</strong> También puedes inhabilitar cookies publicitarias de proveedores externos adicionales en el portal de la Digital Advertising Alliance:{' '}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  aboutads.info/choices ↗
                </a>
                .
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Analítica Web Sin Cookies (Cloudflare) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📊</span> 3. Analítica Web Ética y Sin Cookies (Cloudflare Web Analytics)
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Utilizamos <strong>Cloudflare Web Analytics</strong> con el exclusivo fin de monitorear el rendimiento técnico de la plataforma (tiempos de carga, disponibilidad de servidores y volumen agregado de páginas visitadas).
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Esta solución tecnológica <strong>no emplea cookies</strong>, no registra direcciones IP individuales, no genera identificadores persistentes de huella digital (fingerprinting) ni efectúa ningún rastreo cruzado entre distintos sitios web. Es una analítica completamente anónima y respetuosa de la privacidad.
          </p>
        </section>

        {/* 4. Uso de localStorage */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>⚙️</span> 4. Almacenamiento Local del Navegador (localStorage)
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Calcula Chile puede utilizar la tecnología de almacenamiento local (<code>localStorage</code>) exclusivamente dentro de tu navegador para recordar preferencias funcionales no identificables, tales como:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-2">
            <li>Tu preferencia de país o formato monetario regional.</li>
            <li>Configuraciones de accesibilidad o tema de visualización.</li>
          </ul>
          <p className="text-xs text-slate-500">
            Esta información permanece en tu dispositivo y puedes borrarla en cualquier momento vaciando la memoria caché de tu navegador web.
          </p>
        </section>

        {/* 5. Ley 19.628 de Chile */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🇨🇱</span> 5. Derechos de los Usuarios bajo la Ley N° 19.628 de Chile
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Calcula Chile ajusta sus operaciones al marco establecido por la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> y sus disposiciones complementarias en la República de Chile.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Los usuarios gozan de los derechos reconocidos de acceso, rectificación, cancelación y oposición (derechos ARCO). Al no almacenar datos personales, bases de usuarios ni perfiles comerciales, nuestro sitio minimiza desde su origen cualquier riesgo de fuga o uso no autorizado de datos de personas naturales.
          </p>
        </section>

        {/* 6. Enlaces a Sitios Externos */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>🔗</span> 6. Enlaces a Portales de Terceros
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Nuestro portal incluye enlaces hacia instituciones públicas (dt.gob.cl, sii.cl, bcentral.cl, ine.gob.cl). Calcula no ejerce control sobre las prácticas de privacidad de dichos sitios web externos, por lo que recomendamos revisar las políticas propias de cada organismo.
          </p>
        </section>

        {/* 7. Contacto y Actualizaciones */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>✉️</span> 7. Contacto y Vigencia
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Esta Política de Privacidad fue actualizada en <strong>enero de 2026</strong> y rige para todas las herramientas del subdirectorio chileno (<code>/cl/</code>) y el dominio calcula.zetawala.com.
          </p>
          <p className="text-xs sm:text-sm text-slate-600">
            Para dudas sobre el tratamiento de datos o consultas normativas, puedes escribir directamente a:{' '}
            <a
              href="mailto:contacto@zetawala.com?subject=Privacidad%20Calcula%20Chile"
              className="text-blue-700 font-semibold underline"
            >
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
