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
    slug: 'cl/contacto',
    title: 'Contacto y Soporte Calcula Chile 2026',
    description:
      'Comunícate con el equipo editorial y técnico de Calcula Chile. Envía sugerencias, consultas o reportes de cálculo con respuesta en menos de 48 horas.',
  });
}

export default function ContactoPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Contacto' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/contacto"
        type="info"
        title="Contacto y Soporte Calcula Chile"
        description="Canal directo de contacto de Calcula Chile: reporte de errores normativos y sugerencias con SLA de 48 horas."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Contacto', path: '/cl/contacto/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full border border-blue-200">
            <span>📫</span>
            <span>Canal Oficial • Red Zetawala</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contacto y Soporte de Calcula Chile
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos a tu disposición para resolver dudas sobre el funcionamiento técnico del portal, recibir propuestas de mejora y corregir cualquier discrepancia normativa en nuestras calculadoras.
          </p>
        </header>

        {/* Card Principal de Contacto */}
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Buzón de Atención Directa
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                contacto@zetawala.com
              </p>
            </div>
            <a
              href="mailto:contacto@zetawala.com?subject=Consulta%20Calcula%20Chile"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm sm:text-base transition-colors shadow-md"
            >
              ✉️ Enviar un Correo Ahora
            </a>
          </div>

          <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-300 font-bold">⏱️ SLA de Respuesta:</span>
              <span>Nos comprometemos a responder todas las comunicaciones en un plazo máximo de <strong>48 horas hábiles</strong>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-300 font-bold">🛡️ Privacidad Garantizada:</span>
              <span>No utilizamos formularios de servidor que almacenen tus datos en bases de datos externas. Tu mensaje viaja directamente desde tu cliente de correo.</span>
            </div>
          </div>
        </div>

        {/* Feedback Guidelines */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📝</span> Guía para el Envío de Consultas y Reportes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Para que nuestro equipo técnico y legal pueda responder con la máxima celeridad y precisión, te sugerimos estructurar tu mensaje de acuerdo a la naturaleza del requerimiento:
          </p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>🐛</span> 1. Reporte de Inconsistencias o Errores de Cálculo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Si detectas una discrepancia entre el resultado arrojado por una calculadora y tu liquidación o finiquito formal, por favor indícanos:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 ml-2">
                <li>Nombre de la herramienta utilizada (ej. Finiquito Laboral, Sueldo Líquido, Arriendo en UF).</li>
                <li>Parámetros ingresados (fechas, sueldo base, causal de desahucio, AFP seleccionada, etc.).</li>
                <li>El resultado obtenido y el cálculo esperado, citando de ser posible el dictamen de la Dirección del Trabajo o circular del SII correspondiente.</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>💡</span> 2. Sugerencias de Nuevas Herramientas
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ¿Existe algún cálculo financiero o laboral en Chile que te gustaría ver en la plataforma? Cuéntanos qué parámetros debería considerar y cómo podría simplificar tu gestión cotidiana.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>🔐</span> 3. Consultas sobre Privacidad o Ejercicio de Derechos ARCO
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para cualquier consulta relativa a la Ley N° 19.628 de Protección de la Vida Privada o derechos de acceso y supresión, nuestro oficial de privacidad atenderá tu comunicación en el mismo buzón institucional.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>📰</span> 4. Prensa, Colaboraciones y Alianzas Educativas
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Medios de comunicación, universidades e instituciones educativas interesadas en citar nuestros datos o colaborar con la red Zetawala pueden escribirnos directamente.
              </p>
            </div>
          </div>
        </section>

        {/* Nota Importante de Alcance */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-amber-950 flex items-center gap-2">
            <span>⚠️</span> Aviso de Alcance Legal y Asesoría Particular
          </h2>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Ten en cuenta que Calcula Chile es una plataforma de divulgación y simulación matemática. No somos un estudio jurídico ni prestamos servicios de defensa o asesoría legal personalizada para litigios individuales ante tribunales laborales o inspecciones del trabajo.
          </p>
          <p className="text-xs text-amber-800">
            Para orientación formal ante controversias graves con tu empleador, te recomendamos dirigirte a las oficinas de la{' '}
            <a
              href="https://www.dt.gob.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-amber-950"
            >
              Dirección del Trabajo (dt.gob.cl)
            </a>{' '}
            o a la Corporación de Asistencia Judicial de tu comuna.
          </p>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
