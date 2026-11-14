import Link from 'next/link';
import Image from 'next/image';
import { COUNTRIES, SITE_CONFIG } from '@/config/site';

export default function CountryPickerPage() {
  const countryList = Object.values(COUNTRIES);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Bar */}
      <header className="border-b border-slate-200 bg-white py-3 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/calcula-logo.png"
              alt="Calcula"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
          <a
            href={SITE_CONFIG.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-brand-900 transition-colors"
          >
            <span>por {SITE_CONFIG.parentBrand.name}</span>
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

      {/* Main Hero & Country Grid */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20 text-center flex-1 flex flex-col justify-center items-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-4">
          América Latina • Herramientas Gratuitas 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl mb-4">
          Calculadoras laborales y de dinero precisas para tu país
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-12">
          Elige tu país para acceder a cálculos legales exactos, actualizados con la legislación y tablas oficiales vigentes.
        </p>

        {/* 4 Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl text-left">
          {countryList.map((c) => (
            <Link
              key={c.code}
              href={c.basePath}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-900 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl" role="img" aria-label={c.name}>
                    {c.flag}
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-brand-900 uppercase">
                    {c.code.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-900 transition-colors mb-2">
                  {c.name}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {c.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-900">
                <span>Entrar a {c.name}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Network Brand */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
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
