import Link from 'next/link';
import Image from 'next/image';
import { COUNTRIES, SITE_CONFIG, CountryCode } from '@/config/site';
import { CountrySuggestionBar } from '@/components/layout/CountrySuggestionBar';
import { CountryFlag } from '@/components/ui';

interface PopularTool {
  name: string;
  desc: string;
  path: string;
}

const COUNTRY_POPULAR_TOOLS: Record<string, { framework: string; count: string; tools: PopularTool[] }> = {
  br: {
    framework: 'CLT & Receita Federal 2026',
    count: '12 ferramentas',
    tools: [
      { name: 'Rescisão CLT', desc: 'Aviso prévio, férias proporcionais, 13º e multa 40% FGTS', path: '/br/calculadora-rescisao/' },
      { name: 'Salário Líquido 2026', desc: 'Descontos progressivos do INSS e nova tabela IRRF', path: '/br/calculadora-salario-liquido/' },
      { name: '13º Salário', desc: 'Simulação exata da 1ª e 2ª parcelas sem erros', path: '/br/calculadora-13-salario/' },
      { name: 'Férias CLT', desc: 'Cálculo com 1/3 constitucional e abono pecuniário', path: '/br/calculadora-ferias/' },
    ],
  },
  mx: {
    framework: 'LFT & Tablas SAT 2026',
    count: '8 herramientas',
    tools: [
      { name: 'Finiquito y Liquidación', desc: 'Renuncia, despido injustificado y 3 meses de sueldo', path: '/mx/calculadora-finiquito/' },
      { name: 'Sueldo Neto e ISR 2026', desc: 'Tarifa mensual de ISR, cuotas IMSS y subsidio', path: '/mx/calculadora-sueldo-neto/' },
      { name: 'Aguinaldo LFT', desc: '15 días de salario con cálculo exento y gravado', path: '/mx/calculadora-aguinaldo/' },
      { name: 'Prima Vacacional', desc: 'Vacaciones dignas según años trabajados + 25%', path: '/mx/calculadora-vacaciones/' },
    ],
  },
  co: {
    framework: 'CST & DIAN / UVT 2026',
    count: '8 herramientas',
    tools: [
      { name: 'Liquidación Laboral', desc: 'Cesantías, intereses, prima y vacaciones causadas', path: '/co/calculadora-liquidacion/' },
      { name: 'Salario Neto con Aportes', desc: 'Salud 4%, pensión 4%, fondo de solidaridad y retención', path: '/co/calculadora-salario-neto/' },
      { name: 'Prima de Servicios', desc: 'Cálculo para pago semestral en junio y diciembre', path: '/co/calculadora-prima/' },
      { name: 'Horas Extras y Recargos', desc: 'Recargos nocturnos, dominicales y festivos al 75% y 110%', path: '/co/calculadora-horas-extras/' },
    ],
  },
  cl: {
    framework: 'Banco Central & DT 2026',
    count: '8 herramientas',
    tools: [
      { name: 'Valor UF Hoy en Línea', desc: 'Cotización diaria del Banco Central, series históricas y conversor', path: '/cl/valor-uf-hoy/' },
      { name: 'Sueldo Líquido', desc: 'AFP oficial, Fonasa/Isapre, AFC e Impuesto Único', path: '/cl/calculadora-sueldo-liquido/' },
      { name: 'Finiquito Laboral', desc: 'Indemnización por años de servicio, aviso previo y feriado proporcional', path: '/cl/calculadora-finiquito/' },
      { name: 'Valor UTM 2026', desc: 'Valor mensual oficial y conversor UTM a pesos chilenos', path: '/cl/valor-utm/' },
    ],
  },
};

export default function CountryPickerPage() {
  const countryList = Object.values(COUNTRIES);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Calcula',
    url: 'https://calcula.zetawala.com/',
    description:
      'Calculadoras laborales y financieras gratuitas para América Latina: Brasil, México, Colombia y Chile.',
    publisher: {
      '@type': 'Organization',
      name: 'Zetawala',
      url: 'https://zetawala.com',
      logo: 'https://calcula.zetawala.com/images/calcula-logo.png',
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Non-blocking suggestion bar */}
      <CountrySuggestionBar />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-0.5 group-hover:border-brand-500 transition-colors">
              <Image
                src="/images/calcula-emblem.png"
                alt="Calcula Logo"
                width={42}
                height={42}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-950 font-sans leading-none">
                CALCULA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 leading-none mt-1 hidden xs:block">
                Laboral & Financiero 2026
              </span>
            </div>
          </Link>

          {/* Quick Country Switcher Chips in Header */}
          <nav className="flex items-center gap-1 sm:gap-1.5" aria-label="Seleccionar país">
            {countryList.map((c) => (
              <Link
                key={c.code}
                href={c.basePath}
                title={`Ir a Calcula ${c.name}`}
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-brand-950 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
              >
                <CountryFlag country={c.code as CountryCode} size="sm" />
                <span className="text-[11px] font-mono">{c.code.toUpperCase()}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14 w-full flex flex-col items-center">
        
        {/* Brand Emblem Feature Lockup */}
        <div className="relative mb-6 flex flex-col items-center">
          <div className="p-3 sm:p-4 rounded-3xl bg-white shadow-lg shadow-brand-950/5 border border-slate-200/80 ring-8 ring-slate-100/60">
            <Image
              src="/images/calcula-emblem.png"
              alt="Calcula - Calculadoras para América Latina"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              priority
            />
          </div>
          <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal-900 bg-teal-50 border border-teal-200/60">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
            <span>Legislación y Tablas Oficiales 2026 Auditadas</span>
          </div>
        </div>

        {/* Exact H1 for SEO */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-center max-w-4xl mb-4 leading-tight">
          Calcula – Calculadoras laborales y financieras gratis | Calculadoras trabalhistas grátis
        </h1>

        <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mb-8 leading-relaxed">
          Plataforma abierta, precisa y 100% confidencial. Simula liquidaciones de trabajo, sueldo líquido, finiquitos, prestaciones e indicadores económicos oficiales para <strong>Brasil</strong>, <strong>México</strong>, <strong>Colombia</strong> y <strong>Chile</strong>.
        </p>

        {/* Mobile Quick Jump Pill Selector with Clean Vector Flags */}
        <div className="w-full max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
            Elige tu país para comenzar
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {countryList.map((c) => (
              <Link
                key={c.code}
                href={c.basePath}
                className="flex items-center justify-center gap-2.5 px-3 py-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-brand-900 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center group"
              >
                <CountryFlag country={c.code as CountryCode} size="md" />
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-950">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 4 Interactive Country Cards */}
        <section className="w-full mb-14" aria-label="Países disponibles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {countryList.map((c) => {
              const meta = COUNTRY_POPULAR_TOOLS[c.code];
              const popularTools = meta?.tools || [];
              return (
                <div
                  key={c.code}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-brand-900/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Country Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3.5">
                        <CountryFlag country={c.code as CountryCode} size="xl" className="shadow-xs" />
                        <div>
                          <Link href={c.basePath} className="inline-block">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-900 transition-colors flex items-center gap-1.5">
                              <span>Calcula {c.name}</span>
                              <span className="text-brand-900 text-base group-hover:translate-x-1 transition-transform">→</span>
                            </h2>
                          </Link>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="inline-block text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200/50 px-2 py-0.5 rounded-md">
                              {meta?.framework}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                              • {meta?.count}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {c.tagline}
                    </p>

                    {/* Tools List */}
                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Simuladores más utilizados:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {popularTools.map((t) => (
                          <Link
                            key={t.path}
                            href={t.path}
                            className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-brand-50/70 border border-slate-150 hover:border-brand-200 flex flex-col justify-center transition-all group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800 group-hover/item:text-brand-950 flex items-center gap-1.5">
                                <span className="text-brand-900 text-xs">›</span>
                                {t.name}
                              </span>
                              <span className="text-[11px] font-bold text-brand-900 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                Calcular →
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 pl-3 mt-0.5 line-clamp-1">
                              {t.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={c.basePath}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow-sm"
                    >
                      <span>Abrir todas las calculadoras de {c.name}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust & Architecture Feature Grid */}
        <section className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8" aria-label="Garantías de servicio">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
              ¿Por qué confiar en Calcula?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Diseñado desde el código para ofrecer cálculos exactos, rápidos y con total privacidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-start p-4 rounded-2xl bg-slate-50 border border-slate-150">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-xl mb-3 font-bold">
                🔒
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">100% Privado</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tus salarios y datos personales nunca se envían a ningún servidor. Todo el cómputo se ejecuta localmente en tu navegador.
              </p>
            </div>

            <div className="flex flex-col items-start p-4 rounded-2xl bg-slate-50 border border-slate-150">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-900 flex items-center justify-center text-xl mb-3 font-bold">
                ⚖️
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Leyes 2026 Auditadas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reglas basadas directamente en la CLT, LFT, CST, DT y resoluciones de Receita Federal, SAT, DIAN y SII.
              </p>
            </div>

            <div className="flex flex-col items-start p-4 rounded-2xl bg-slate-50 border border-slate-150">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center text-xl mb-3 font-bold">
                ⚡
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Sin Registro</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sin necesidad de crear cuenta, sin correos spam y sin barreras. Accede directo al resultado en un clic.
              </p>
            </div>

            <div className="flex flex-col items-start p-4 rounded-2xl bg-slate-50 border border-slate-150">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl mb-3 font-bold">
                📄
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Listo para Imprimir</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desglose detallado de cada concepto y retención, con vista optimizada para imprimir o guardar en PDF.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer - Only ONE elegant mention of Zetawala */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <Image
              src="/images/calcula-emblem.png"
              alt="Calcula"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-slate-700">Calcula</span>
            <span>·</span>
            <span>Un proyecto de la red <a href="https://zetawala.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-700 hover:text-brand-900 underline">Zetawala</a></span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/br/" className="hover:text-brand-950">Brasil</Link>
            <Link href="/mx/" className="hover:text-brand-950">México</Link>
            <Link href="/co/" className="hover:text-brand-950">Colombia</Link>
            <Link href="/cl/" className="hover:text-brand-950">Chile</Link>
          </div>

          <div>© {SITE_CONFIG.year} Zetawala. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
