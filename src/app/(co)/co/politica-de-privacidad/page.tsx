import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/politica-de-privacidad',
    title: 'Política de Privacidad y Habeas Data - Calcula Colombia',
    description:
      'Política de privacidad y protección de datos personales de Calcula Colombia. Procesamiento 100% en el navegador, cookies de AdSense, analítica sin cookies y Ley 1581 de 2012.',
  });
}

export default function PoliticaPrivacidadCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Política de Privacidad', path: '/co/politica-de-privacidad/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/politica-de-privacidad"
        type="website"
        title="Política de Privacidad y Habeas Data - Calcula Colombia"
        description="Tratamiento de datos personales, cookies y privacidad de Calcula Colombia bajo la Ley 1581 de 2012."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Política de Privacidad' },
          ]}
        />

        <article className="mt-6 space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
              Última actualización: 2026 · Colombia
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Política de Privacidad y Protección de Datos (Habeas Data)
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              En Calcula Colombia (parte de la red Zetawala, https://zetawala.com) protegemos la intimidad y confidencialidad financiera de nuestros usuarios cumpliendo estrictamente la legislación colombiana y estándares globales de privacidad.
            </p>
          </header>

          {/* 100% Client-side Processing */}
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <h2 className="text-xl font-bold text-emerald-950">
                100% Procesamiento Local en tu Navegador
              </h2>
            </div>
            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
              Toda la información financiera y laboral ingresada en nuestras calculadoras (tu salario mensual, auxilio de transporte, fechas de inicio y finalización de contrato, o causas de liquidación) <strong>se procesa exclusivamente en la memoria de tu dispositivo mediante JavaScript</strong>. Ningún dato salarial viaja a través de Internet a servidores propios o de terceros, garantizando absoluta reserva de tu información personal.
            </p>
          </div>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Almacenamiento Local (localStorage)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula no requiere registro de cuenta de usuario ni perfiles individuales. Excepcionalmente, podemos utilizar la tecnología estándar de <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">localStorage</code> para recordar preferencias locales en tu propio navegador (como el cierre de un aviso o banner informativo). Estos registros residen en tu equipo y nunca se transmiten a bases de datos remotas.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Medición Web Sin Cookies (Cloudflare Web Analytics)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Para monitorear la salud técnica de los servidores y el rendimiento general de carga en Colombia, utilizamos <strong>Cloudflare Web Analytics</strong>. Este sistema opera bajo una estricta política de privacidad:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li>No utiliza cookies de seguimiento persistente ni almacena identificadores en tu dispositivo.</li>
              <li>No recopila ni perfila direcciones IP individuales de los usuarios.</li>
              <li>No realiza rastreo cruzado entre diferentes sitios web.</li>
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              3. Publicidad Digital y Cookies de Terceros (Google AdSense)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula Colombia financia la gratuidad de su servicio mediante la exhibición de anuncios publicitarios gestionados por <strong>Google AdSense</strong> y socios de la red publicitaria de Google:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 pl-2">
              <li>
                Google y sus proveedores terceros utilizan cookies para publicar anuncios basados en visitas previas de los usuarios a este u otros portales web en Internet.
              </li>
              <li>
                Puedes gestionar tus preferencias o inhabilitar la publicidad personalizada en cualquier momento mediante la{' '}
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
                Para más información sobre cómo Google gestiona los datos de los sitios asociados, consulta:{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-900 underline font-semibold"
                >
                  Cómo utiliza Google los datos al usar aplicaciones o sitios web asociados
                </a>.
              </li>
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Habeas Data y Marco Legal Colombiano (Ley Estatutaria 1581 de 2012)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              En caso de que el usuario envíe una comunicación por correo electrónico, el tratamiento de sus datos de contacto se regirá por la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y la doctrina de la <strong>Superintendencia de Industria y Comercio (SIC)</strong> de la República de Colombia.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Como titular de datos personales, tienes derecho a conocer, actualizar, rectificar y suprimir tus datos de contacto registrados en nuestras respuestas de soporte técnico escribiendo a:{' '}
              <a
                href="mailto:contacto@zetawala.com?subject=Habeas%20Data%20-%20Calcula%20Colombia"
                className="text-brand-900 font-bold underline"
              >
                contacto@zetawala.com
              </a>.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Enlaces Externos a Portales Oficiales
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcula contiene enlaces directos a sitios web gubernamentales colombianos (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">mintrabajo.gov.co</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">secretariasenado.gov.co</code> o <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">dian.gov.co</code>) y a la red matriz Zetawala (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">zetawala.com</code>). No somos responsables de las políticas de privacidad ni contenidos de dichos dominios externos.
            </p>
          </section>

          <footer className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-2">
            <p className="font-bold text-slate-900">Actualizaciones a esta política</p>
            <p>
              Cualquier cambio normativo o tecnológico será reflejado inmediatamente en esta página con indicación de su fecha de vigencia para 2026.
            </p>
            <p className="pt-1">
              Canal oficial de atención en privacidad: <strong>contacto@zetawala.com</strong>
            </p>
          </footer>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
