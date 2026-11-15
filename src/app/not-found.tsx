import Link from 'next/link';
import Image from 'next/image';
import { COUNTRIES, SITE_CONFIG } from '@/config/site';

const TOP_TOOLS_BY_COUNTRY = [
  {
    country: COUNTRIES.br,
    tools: [
      { name: 'Calculadora de Rescisão CLT', path: '/br/calculadora-rescisao/' },
      { name: '13º Salário (1ª e 2ª Parcelas)', path: '/br/calculadora-13-salario/' },
      { name: 'Salário Líquido 2026', path: '/br/calculadora-salario-liquido/' },
    ],
  },
  {
    country: COUNTRIES.mx,
    tools: [
      { name: 'Finiquito y Liquidación LFT', path: '/mx/calculadora-finiquito/' },
      { name: 'Sueldo Neto e ISR 2026', path: '/mx/calculadora-sueldo-neto/' },
      { name: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/' },
    ],
  },
  {
    country: COUNTRIES.co,
    tools: [
      { name: 'Liquidación de Contrato CST', path: '/co/calculadora-liquidacion/' },
      { name: 'Salario Neto con Deducciones', path: '/co/calculadora-salario-neto/' },
      { name: 'Prima y Cesantías 2026', path: '/co/calculadora-prima/' },
    ],
  },
  {
    country: COUNTRIES.cl,
    tools: [
      { name: 'Valor UF Hoy en Vivo', path: '/cl/valor-uf-hoy/' },
      { name: 'Sueldo Líquido e Impuesto Único', path: '/cl/calculadora-sueldo-liquido/' },
      { name: 'Finiquito e Indemnizaciones', path: '/cl/calculadora-finiquito/' },
    ],
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 font-sans">
      {/* Simple Header */}
      <header className="border-b border-slate-200 bg-white py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/images/calcula-logo.png"
              alt="Calcula"
              width={124}
              height={38}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <a
            href={SITE_CONFIG.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-brand-900 transition-colors"
          >
            <span>una herramienta de {SITE_CONFIG.parentBrand.name}</span>
            <Image
              src="/images/zetawala-logo.png"
              alt="Zetawala"
              width={20}
              height={20}
              className="h-5 w-auto object-contain"
            />
          </a>
        </div>
      </header>

      {/* Main 404 Hero */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 mb-4">
          <span>⚠️</span>
          <span>Error 404</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
          Página no encontrada / Página não encontrada
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl mb-8 leading-relaxed">
          Lo sentimos, la dirección a la que intentas acceder no existe o fue reubicada. A continuación puedes acceder directamente a las herramientas más consultadas de cada país:
        </p>

        {/* Search-free Top Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left mb-10">
          {TOP_TOOLS_BY_COUNTRY.map(({ country, tools }) => (
            <div
              key={country.code}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-brand-800 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <span className="text-2xl">{country.flag}</span>
                <Link
                  href={country.basePath}
                  className="font-bold text-sm text-slate-900 hover:text-brand-900 transition-colors"
                >
                  {country.name}
                </Link>
              </div>

              <ul className="space-y-2">
                {tools.map((t) => (
                  <li key={t.path}>
                    <Link
                      href={t.path}
                      className="text-xs font-medium text-slate-700 hover:text-brand-900 flex items-center gap-1.5 group"
                    >
                      <span className="text-brand-900 text-[10px] group-hover:translate-x-0.5 transition-transform">
                        ›
                      </span>
                      <span>{t.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back to Home CTA */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-900 text-white font-bold text-sm shadow hover:bg-brand-950 transition-colors"
          >
            <span>←</span>
            <span>Volver al Inicio / Voltar ao Início</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Image
              src="/images/zetawala-logo.png"
              alt="Zetawala"
              width={20}
              height={20}
              className="h-5 w-auto object-contain"
            />
            <span>Calcula es parte de la red de herramientas gratuitas de Zetawala.</span>
          </div>
          <div>© {SITE_CONFIG.year} Zetawala. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
