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
    slug: 'co/mapa-del-sitio',
    title: 'Mapa del Sitio Calcula Colombia - Calculadoras y Guías Laborales',
    description:
      'Directorio completo de todas las calculadoras laborales, prestaciones sociales del CST, tablas de salario mínimo, guías y páginas legales de Calcula Colombia.',
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

export default function MapaDelSitioCoPage() {
  const groups: SiteGroup[] = [
    {
      title: 'Calculadoras de Liquidación Laboral',
      icon: '💼',
      description: 'Simuladores de indemnizaciones y prestaciones sociales según el Código Sustantivo del Trabajo.',
      links: [
        {
          title: 'Calculadora de Liquidación Laboral Completa',
          href: '/co/calculadora-liquidacion/',
          desc: 'Simula el cálculo integral de prima, cesantías, intereses, vacaciones e indemnización por despido.',
        },
        {
          title: 'Liquidación por Despido sin Justa Causa',
          href: '/co/calculadora-liquidacion/despido-sin-justa-causa/',
          desc: 'Cálculo de la indemnización tarifada del Art. 64 CST para salarios menores o mayores a 10 SMMLV.',
        },
        {
          title: 'Liquidación Laboral por Renuncia Voluntaria',
          href: '/co/calculadora-liquidacion/renuncia/',
          desc: 'Determina las prestaciones acumuladas a cobrar cuando decides retirarte voluntariamente de tu empleo.',
        },
        {
          title: 'Liquidación de Contrato a Término Fijo',
          href: '/co/calculadora-liquidacion/contrato-a-termino-fijo/',
          desc: 'Indemnización por salarios faltantes ante terminación anticipada e injustificada del contrato.',
        },
      ],
    },
    {
      title: 'Prestaciones Sociales y Salarios',
      icon: '🧮',
      description: 'Herramientas específicas para prima, cesantías, vacaciones y deducciones de ley.',
      links: [
        {
          title: 'Calculadora de Prima de Servicios (CST Art. 306)',
          href: '/co/calculadora-prima/',
          desc: 'Simula la prima semestral de junio o diciembre con auxilio de transporte incluido.',
        },
        {
          title: 'Calculadora de Cesantías e Intereses (Ley 50/1990)',
          href: '/co/calculadora-cesantias/',
          desc: 'Cálculo del mes de cesantías por año y el 12% anual de intereses a las cesantías.',
        },
        {
          title: 'Calculadora de Vacaciones en Colombia (Art. 186)',
          href: '/co/calculadora-vacaciones/',
          desc: '15 días hábiles remunerados por año o compensación proporcional en dinero al retiro.',
        },
        {
          title: 'Calculadora de Salario Neto Colombia',
          href: '/co/calculadora-salario-neto/',
          desc: 'Desglose exacto de deducciones del 4% en salud, 4% en pensión y auxilio de transporte.',
        },
        {
          title: 'Calculadora de Horas Extras y Recargos Nocturnos',
          href: '/co/calculadora-horas-extras/',
          desc: 'Recargos nocturnos del 35%, horas extras diurnas y nocturnas ordinarias o festivas.',
        },
      ],
    },
    {
      title: 'Tablas Oficiales y Normativa Vigente',
      icon: '📊',
      description: 'Valores regulados por el Gobierno Nacional y decretos del Ministerio del Trabajo para 2026.',
      links: [
        {
          title: 'Salario Mínimo en Colombia 2026 (SMMLV)',
          href: '/co/salario-minimo/',
          desc: 'Histórico y valor diario/mensual del salario mínimo legal obligatorio en Colombia.',
        },
        {
          title: 'Auxilio de Transporte 2026 (Ley 15 de 1959)',
          href: '/co/auxilio-de-transporte/',
          desc: 'Valores oficiales, tope salarial de 2 SMMLV y reglas de inclusión en prima y cesantías.',
        },
        {
          title: 'Reforma Laboral y Reducción de Jornada (Ley 2101)',
          href: '/co/reforma-laboral/',
          desc: 'Reducción gradual de la jornada semanal a 42 horas y horario nocturno desde las 7:00 pm.',
        },
      ],
    },
    {
      title: 'Guías Explicativas del Derecho Laboral Colombiano',
      icon: '📚',
      description: 'Artículos prácticos y fundamentados para orientar tus trámites y reclamaciones.',
      links: [
        {
          title: '¿Cuándo se Paga la Prima de Servicios en Colombia?',
          href: '/co/guias/cuando-se-paga-la-prima/',
          desc: 'Plazos del 30 de junio y 20 de diciembre, sanciones moratorias y liquidación proporcional.',
        },
        {
          title: 'Cesantías: ¿Cuándo y Cómo Retirarlas?',
          href: '/co/guias/cesantias-cuando-y-como-retirarlas/',
          desc: 'Requisitos y documentos para retiros parciales de cesantías por vivienda y educación.',
        },
        {
          title: 'Indemnización por Despido sin Justa Causa',
          href: '/co/guias/indemnizacion-por-despido-sin-justa-causa/',
          desc: 'Paso a paso para calcular la indemnización según tiempo laborado y nivel salarial.',
        },
        {
          title: '¿Cómo Liquidar un Contrato a Término Fijo?',
          href: '/co/guias/como-liquidar-un-contrato-a-termino-fijo/',
          desc: 'Preaviso de 30 días, prórrogas automáticas y compensación por despido anticipado.',
        },
        {
          title: 'Recargos Nocturnos, Dominicales y Festivos',
          href: '/co/guias/recargos-nocturnos-y-dominicales/',
          desc: 'Factores multiplicadores y reglas de descanso compensatorio para trabajo dominical.',
        },
      ],
    },
    {
      title: 'Herramientas Digitales Gratuitas',
      icon: '💬',
      description: 'Utilidades para comunicación comercial y profesional.',
      links: [
        {
          title: 'Generador de Link de WhatsApp Colombia (+57)',
          href: '/co/generador-de-link-whatsapp/',
          desc: 'Crea enlaces directos para iniciar chats en WhatsApp con código QR para tu negocio.',
        },
      ],
    },
    {
      title: 'Páginas Institucionales y Legales',
      icon: '⚖️',
      description: 'Información institucional, metodología del CST, privacidad y condiciones de servicio.',
      links: [
        {
          title: 'Inicio Calcula Colombia',
          href: '/co/',
          desc: 'Portal principal de calculadoras laborales para Colombia.',
        },
        {
          title: 'Acerca de Calcula Colombia',
          href: '/co/acerca-de/',
          desc: 'Misión institucional, pertenencia a la red Zetawala y principios de neutralidad.',
        },
        {
          title: 'Metodología y Fórmulas del CST 2026',
          href: '/co/metodologia/',
          desc: 'Documentación técnica E-E-A-T con fórmulas y artículos de ley para cada calculadora.',
        },
        {
          title: 'Preguntas Frecuentes (FAQ Hub)',
          href: '/co/preguntas-frecuentes/',
          desc: '30 respuestas clave sobre liquidación, prima, cesantías y normas del trabajo en Colombia.',
        },
        {
          title: 'Contacto y Soporte',
          href: '/co/contacto/',
          desc: 'Canal directo de comunicación con compromiso de respuesta en 48 horas.',
        },
        {
          title: 'Política de Privacidad y Habeas Data',
          href: '/co/politica-de-privacidad/',
          desc: 'Procesamiento en el navegador y cumplimiento con la Ley 1581 de 2012.',
        },
        {
          title: 'Términos de Uso',
          href: '/co/terminos-de-uso/',
          desc: 'Condiciones generales de acceso libre y gratuito a la plataforma.',
        },
        {
          title: 'Aviso Legal y Descargo de Responsabilidad',
          href: '/co/aviso-legal/',
          desc: 'Carácter orientativo de las simulaciones y prevalencia de contratos oficiales.',
        },
      ],
    },
  ];

  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Mapa del Sitio', path: '/co/mapa-del-sitio/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/mapa-del-sitio"
        type="website"
        title="Mapa del Sitio - Calcula Colombia"
        description="Directorio completo de calculadoras de liquidación, prestaciones sociales del CST, tablas oficiales y guías laborales en Colombia."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Mapa del Sitio' },
          ]}
        />

        <article className="mt-6 space-y-10">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              Directorio General · Calcula Colombia
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mapa del Sitio Calcula Colombia
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Índice estructurado de todas las calculadoras laborales, simuladores de prestaciones sociales, tablas normativas del CST, guías jurídicas y páginas legales para Colombia.
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
      <Footer country="co" />
    </>
  );
}
