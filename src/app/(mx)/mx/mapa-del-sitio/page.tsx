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
    slug: 'mx/mapa-del-sitio',
    title: 'Mapa del Sitio Calcula México - Todas las Calculadoras y Guías',
    description:
      'Índice completo de todas las calculadoras laborales, tablas de indicadores fiscales, guías de la LFT y páginas legales de Calcula México.',
  });
}

interface SiteGroup {
  title: string;
  icon: string;
  description: string;
  links: {
    title: string;
    href: string;
    desc: string;
  }[];
}

export default function MapaDelSitioMxPage() {
  const groups: SiteGroup[] = [
    {
      title: 'Calculadoras Laborales y Fiscales',
      icon: '🧮',
      description: 'Herramientas de simulación automática conforme a la Ley Federal del Trabajo vigente en 2026.',
      links: [
        {
          title: 'Calculadora de Finiquito y Liquidación',
          href: '/mx/calculadora-finiquito/',
          desc: 'Simula el desglose de prestaciones proporcionales y compensaciones según tu motivo de salida.',
        },
        {
          title: 'Calculadora de Renuncia Voluntaria',
          href: '/mx/calculadora-finiquito/renuncia-voluntaria/',
          desc: 'Calcula exactamente lo que te corresponde cobrar si decides renunciar a tu empleo.',
        },
        {
          title: 'Calculadora de Liquidación por Despido',
          href: '/mx/calculadora-liquidacion/',
          desc: 'Cálculo de los 90 días constitucionales, 20 días por año y prima de antigüedad.',
        },
        {
          title: 'Calculadora de Aguinaldo LFT',
          href: '/mx/calculadora-aguinaldo/',
          desc: 'Determina tus 15 días mínimos o la fracción proporcional exacta de tu aguinaldo anual.',
        },
        {
          title: 'Calculadora de Vacaciones y Prima Vacacional',
          href: '/mx/calculadora-vacaciones/',
          desc: 'Simula los días de descanso y el 25% de prima con la reforma de Vacaciones Dignas.',
        },
        {
          title: 'Calculadora de Sueldo Neto México',
          href: '/mx/calculadora-sueldo-neto/',
          desc: 'Desglose exacto de sueldo bruto a neto tras retención de ISR y deducciones IMSS.',
        },
        {
          title: 'Calculadora de Salario Diario Integrado (SDI)',
          href: '/mx/calculadora-salario-diario-integrado/',
          desc: 'Factor de integración legal de cuota diaria, aguinaldo y prima vacacional.',
        },
        {
          title: 'Calculadora de Reparto de Utilidades (PTU)',
          href: '/mx/calculadora-ptu/',
          desc: 'Cálculo de las utilidades de empresa con los topes de 3 meses de salario o promedio trianual.',
        },
      ],
    },
    {
      title: 'Tablas Oficiales e Indicadores Económicos',
      icon: '📊',
      description: 'Parámetros certificados por INEGI, SAT y CONASAMI para el año fiscal 2026.',
      links: [
        {
          title: 'Salario Mínimo en México 2026',
          href: '/mx/salario-minimo/',
          desc: 'Valores oficiales para la Zona Libre de la Frontera Norte y el resto del país.',
        },
        {
          title: 'Valor de la UMA 2026 (INEGI)',
          href: '/mx/uma/',
          desc: 'Unidad de Medida y Actualización diaria, mensual y anual para topes de exención fiscal.',
        },
        {
          title: 'Tabla de Retención de ISR 2026 (SAT)',
          href: '/mx/tabla-isr/',
          desc: 'Tarifas del Artículo 96 de la Ley del Impuesto sobre la Renta aplicables a nómina.',
        },
        {
          title: 'Tabla Oficial de Vacaciones Dignas',
          href: '/mx/tabla-de-vacaciones/',
          desc: 'Días de descanso remunerado y primas aplicables por cada año de antigüedad.',
        },
      ],
    },
    {
      title: 'Guías y Artículos Laborales LFT',
      icon: '📚',
      description: 'Explicaciones pedagógicas y recomendaciones prácticas para trabajadores y empleadores.',
      links: [
        {
          title: 'Diferencia entre Finiquito y Liquidación',
          href: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/',
          desc: 'Aprende a distinguir cuándo te toca solo finiquito y cuándo procede liquidación completa.',
        },
        {
          title: '¿Cuándo se Paga el Aguinaldo en México?',
          href: '/mx/guias/cuando-se-paga-el-aguinaldo/',
          desc: 'Fechas límite, sanciones para patrones morosos y derechos de cobro proporcional.',
        },
        {
          title: 'Vacaciones Dignas: ¿Cómo Funcionan?',
          href: '/mx/guias/vacaciones-dignas-como-funcionan/',
          desc: 'Análisis de la reforma a los Artículos 76 y 78 de la Ley Federal del Trabajo.',
        },
        {
          title: '¿Qué es la Prima de Antigüedad y Cómo se Paga?',
          href: '/mx/guias/que-es-la-prima-de-antiguedad/',
          desc: 'Requisitos de 15 años en renuncia o pago sin importar antigüedad en despido.',
        },
        {
          title: '¿Cuánto me Toca si Renuncio a mi Trabajo?',
          href: '/mx/guias/cuanto-me-toca-si-renuncio/',
          desc: 'Desglose de percepciones garantizadas al finalizar voluntariamente un contrato.',
        },
        {
          title: 'Despido Injustificado: ¿Qué Hacer Paso a Paso?',
          href: '/mx/guias/despido-injustificado-que-hacer/',
          desc: 'Guía para acudir al Centro de Conciliación Laboral y exigir tus 90 días de indemnización.',
        },
      ],
    },
    {
      title: 'Herramientas de Comunicación Gratuita',
      icon: '💬',
      description: 'Utilidades prácticas para empresas y profesionales independientes.',
      links: [
        {
          title: 'Generador de Link de WhatsApp México (+52)',
          href: '/mx/generador-de-link-whatsapp/',
          desc: 'Crea enlaces directos con mensaje personalizado y código QR para tu negocio.',
        },
      ],
    },
    {
      title: 'Páginas Institucionales y Legales',
      icon: '⚖️',
      description: 'Transparencia, metodología, protección de datos y términos de servicio de Calcula.',
      links: [
        {
          title: 'Inicio Calcula México',
          href: '/mx/',
          desc: 'Portal principal con acceso directo a todos los simuladores laborales.',
        },
        {
          title: 'Acerca de Calcula México',
          href: '/mx/acerca-de/',
          desc: 'Nuestra misión, pertenencia a la red Zetawala y principios de independencia.',
        },
        {
          title: 'Metodología y Fórmulas LFT 2026',
          href: '/mx/metodologia/',
          desc: 'Documentación técnica E-E-A-T con fórmulas y artículos de ley para cada calculadora.',
        },
        {
          title: 'Preguntas Frecuentes (FAQ Hub)',
          href: '/mx/preguntas-frecuentes/',
          desc: '30 respuestas clave a dudas sobre la Ley Federal del Trabajo y cálculos laborales.',
        },
        {
          title: 'Contacto y Soporte',
          href: '/mx/contacto/',
          desc: 'Canal directo de comunicación con compromiso de respuesta en 48 horas.',
        },
        {
          title: 'Política de Privacidad',
          href: '/mx/politica-de-privacidad/',
          desc: 'Detalles sobre procesamiento 100% en navegador y derechos ARCO (LFPDPPP).',
        },
        {
          title: 'Términos de Uso',
          href: '/mx/terminos-de-uso/',
          desc: 'Condiciones generales de acceso libre y gratuito a la plataforma.',
        },
        {
          title: 'Aviso Legal y Descargo de Responsabilidad',
          href: '/mx/aviso-legal/',
          desc: 'Carácter orientativo de las simulaciones y prevalencia de contratos oficiales.',
        },
      ],
    },
  ];

  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Mapa del Sitio', path: '/mx/mapa-del-sitio/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/mapa-del-sitio"
        type="website"
        title="Mapa del Sitio - Calcula México"
        description="Directorio completo de calculadoras laborales, tablas oficiales y guías de la Ley Federal del Trabajo."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Mapa del Sitio' },
          ]}
        />

        <article className="mt-6 space-y-10">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              Directorio General · Calcula México
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mapa del Sitio Calcula México
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Explora de forma estructurada todas las herramientas, simuladores, tablas de indicadores fiscales, guías explicativas y páginas institucionales disponibles para México.
            </p>
          </header>

          <div className="space-y-10">
            {groups.map((group, idx) => (
              <section key={idx} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                  <span className="text-2xl">{group.icon}</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {group.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.links.map((link, lIdx) => (
                    <div
                      key={lIdx}
                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-brand-900 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <Link
                          href={link.href}
                          className="font-bold text-slate-900 hover:text-brand-900 text-sm sm:text-base leading-snug hover:underline"
                        >
                          {link.title}
                        </Link>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">
                          {link.href}
                        </span>
                        <Link
                          href={link.href}
                          className="text-xs font-semibold text-brand-900 hover:text-brand-700"
                        >
                          Ir →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
