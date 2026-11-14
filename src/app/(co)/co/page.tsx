import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { COUNTRIES } from '@/config/site';

export const metadata = {
  title: 'Calcula Colombia - Calculadoras Laborales y Prestaciones 2026',
  description:
    'Calculadoras laborales gratuitas de liquidación laboral, cesantías, intereses y prima de servicios según el Código Sustantivo del Trabajo en Colombia 2026.',
};

export default function ColombiaHomePage() {
  const country = COUNTRIES.co;

  return (
    <>
      <JsonLd country="co" slug="co" type="website" title={metadata.title} description={metadata.description} />
      <Header country="co" />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Country Hero */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-3">
            <span>{country.flag}</span>
            <span>Colombia • CST 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Calculadoras Laborales y Prestaciones Sociales
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Herramientas gratuitas actualizadas según el Código Sustantivo del Trabajo, SMMLV y Auxilio de Transporte 2026.
          </p>
        </div>

        {/* Section: Laboral */}
        <section id="laboral" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📋</span> Calculadoras Laborales (CST)
            </h2>
            <span className="text-xs font-medium text-slate-500">Reglas 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Featured Active Tool */}
            <Link
              href="/co/calculadora-liquidacion/"
              className="group p-5 bg-white border-2 border-brand-900/30 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full mb-3">
                  ✓ Disponible 2026
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-900 transition-colors mb-2">
                  Calculadora de Liquidación Laboral
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calcula cesantías, intereses sobre cesantías, prima de servicios proporcional, vacaciones e indemnización por despido sin justa causa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-900 flex items-center justify-between">
                <span>Calcular liquidación ahora</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Placeholders */}
            <div className="p-5 bg-slate-50/70 border border-dashed border-slate-300 rounded-xl flex flex-col justify-between opacity-80">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium text-slate-500 bg-slate-200/60 rounded-full mb-3">
                  Próximamente
                </span>
                <h3 className="text-base font-semibold text-slate-800 mb-1">
                  Calculadora de Horas Extras y Recargos
                </h3>
                <p className="text-xs text-slate-500">
                  Recargo nocturno, dominical, festivo y horas extras diurnas/nocturnas.
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-50/70 border border-dashed border-slate-300 rounded-xl flex flex-col justify-between opacity-80">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium text-slate-500 bg-slate-200/60 rounded-full mb-3">
                  Próximamente
                </span>
                <h3 className="text-base font-semibold text-slate-800 mb-1">
                  Calculadora de Salario Neto
                </h3>
                <p className="text-xs text-slate-500">
                  Deducciones de salud (4%), pensión (4%) y fondo de solidaridad pensional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer country="co" />
    </>
  );
}
