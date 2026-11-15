import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { COUNTRIES } from '@/config/site';
import { getStaticIndicators } from '@/lib/cl/indicators';
import { formatNumber } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl',
    title: 'Calcula Chile - Calculadoras Laborales y Valor UF 2026',
    description:
      'Calculadoras gratuitas de Chile: Valor UF hoy, finiquito laboral, sueldo líquido 2026, valor UTM, arriendo en UF y simulador hipotecario.',
  });
}

export default function ChileHomePage() {
  const country = COUNTRIES.cl;
  const indicators = getStaticIndicators();

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl"
        type="website"
        title="Calcula Chile - Calculadoras Laborales y Valor UF 2026"
        description="Calculadoras gratuitas de Chile: Valor UF hoy, finiquito laboral, sueldo líquido 2026, valor UTM, arriendo en UF y simulador hipotecario."
      />
      <Header country="cl" />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-10 w-full space-y-10">
        {/* Country Hero */}
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full mb-3 border border-blue-200">
            <span>{country.flag}</span>
            <span>Chile • Indicadores Oficiales y Leyes 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Calculadoras Laborales y Valor UF en Chile
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Herramientas gratuitas y actualizadas: consulta la UF hoy, calcula tu finiquito conforme al Código del Trabajo, simula tu sueldo líquido o tu crédito hipotecario.
          </p>
        </div>

        {/* Big Live Indicators Widget */}
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-500/30 text-blue-200 uppercase">
                  Banco Central de Chile
                </span>
                <span className="text-xs text-slate-300">Fecha: {indicators.uf.date}</span>
              </div>
              <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                Valor UF Hoy
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                ${formatNumber(indicators.uf.value, 2, 'cl')}
              </div>
              <p className="text-xs text-blue-200 mt-2">
                Reajuste diario oficial conforme a la inflación (IPC) publicada por el INE.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-xs">
              <div>
                <span className="text-blue-200 block">UTM {indicators.utm.month}</span>
                <strong className="text-base text-white font-bold">
                  ${formatNumber(indicators.utm.value, 0, 'cl')}
                </strong>
              </div>
              <div>
                <span className="text-blue-200 block">Dólar Observado</span>
                <strong className="text-base text-white font-bold">
                  ${formatNumber(indicators.dolar.value, 2, 'cl')}
                </strong>
              </div>
              <div>
                <span className="text-blue-200 block">Euro</span>
                <strong className="text-base text-white font-bold">
                  ${formatNumber(indicators.euro.value, 2, 'cl')}
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <span>
              Fuente oficial:{' '}
              <a
                href="https://mindicador.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-white"
              >
                Banco Central de Chile vía mindicador.cl
              </a>
            </span>
            <Link
              href="/cl/valor-uf-hoy/"
              className="inline-flex items-center gap-1 font-bold text-white hover:text-blue-200"
            >
              Ver conversor completo y gráfico histórico →
            </Link>
          </div>
        </div>

        {/* Section: Indicadores y Finanzas */}
        <section id="finanzas">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📈</span> Indicadores y Finanzas
            </h2>
            <span className="text-xs font-semibold text-slate-500">Datos Oficiales</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/cl/valor-uf-hoy/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-3">
                  Diario Oficial
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Valor UF Hoy y Conversor a Pesos
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Valor oficial del día, gráfico de los últimos 30 días, valores futuros ya publicados y conversor bidireccional UF a CLP.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Consultar UF hoy</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/cl/valor-utm/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full mb-3">
                  SII Mensual
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Valor UTM 2026 y Conversor
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tabla mensual de la Unidad Tributaria Mensual (UTM), valor de la UTA y montos en pesos de multas de tránsito.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Ver tabla mensual</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/cl/simulador-credito-hipotecario/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full mb-3">
                  Simulador Bancario
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Simulador de Crédito Hipotecario
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calcula tu dividendo mensual en UF y pesos a 15, 20, 25 o 30 años, costos en intereses y pie inicial.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Simular dividendo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/cl/calculadora-arriendo-uf/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-amber-800 bg-amber-100 rounded-full mb-3">
                  Inmobiliario
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Calculadora de Arriendo en UF
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Convierte tu arriendo mensual a pesos chilenos según la UF del día de pago y revisa la proyección a 12 meses.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Calcular arriendo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section: Laboral */}
        <section id="laboral">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>💼</span> Calculadoras Laborales
            </h2>
            <span className="text-xs font-semibold text-slate-500">Código del Trabajo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/cl/calculadora-finiquito/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full mb-3">
                  DT Chile 2026
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Calculadora de Finiquito Laboral
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Años de servicio, feriado proporcional (1,25 días/mes), aviso previo sustitutivo y tope legal de 90 UF por causal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Calcular finiquito</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/cl/calculadora-sueldo-liquido/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-3">
                  Remuneraciones
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Calculadora de Sueldo Líquido
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Descuentos de AFP (7 administradoras), Fonasa 7% o Isapre, Seguro de Cesantía e Impuesto Único del SII. Modo inverso.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Calcular sueldo neto</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/cl/sueldo-minimo/"
              className="group p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full mb-3">
                  Ley Nº 21.578
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  Sueldo Mínimo en Chile 2026
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monto oficial vigente ($500.000 CLP), histórico de reajustes 2016-2026 y tope de gratificación del artículo 50.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue flex items-center justify-between">
                <span>Ver sueldo mínimo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section: Herramientas Útiles */}
        <section id="herramientas">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>⚡</span> Herramientas Digitales
            </h2>
            <span className="text-xs font-semibold text-slate-500">100% Gratuitas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/cl/generador-de-link-whatsapp/"
              className="group p-5 bg-white border border-slate-200 hover:border-emerald-500 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full mb-3">
                  WhatsApp Directo
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1.5">
                  Generador de Link de WhatsApp con QR
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Crea tu link wa.me personalizado con mensaje listo, código QR descargable en alta definición y botón para sitios web.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-600 flex items-center justify-between">
                <span>Crear link WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section: Guías Laborales y Financieras */}
        <section id="guias">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📚</span> Guías Prácticas de Chile
            </h2>
            <span className="text-xs font-semibold text-slate-500">Leyes y Derechos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/cl/guias/que-es-la-uf-y-como-se-calcula/"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors mb-1">
                ¿Qué es la UF y cómo se calcula?
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                Historia, fórmula de ajuste diario por IPC del Banco Central y usos cotidianos.
              </p>
            </Link>

            <Link
              href="/cl/guias/como-calcular-el-finiquito/"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors mb-1">
                Cómo calcular el finiquito paso a paso
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                Causales de despido, reserva de derechos y plazos legales ante ministro de fe.
              </p>
            </Link>

            <Link
              href="/cl/guias/indemnizacion-por-anos-de-servicio/"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors mb-1">
                Indemnización por años de servicio
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                Regla de 1 mes por año, fracción mayor a 6 meses, tope de 11 años y límite de 90 UF.
              </p>
            </Link>

            <Link
              href="/cl/guias/de-sueldo-bruto-a-liquido/"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors mb-1">
                De sueldo bruto a líquido en Chile
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                Cotizaciones previsionales obligatorias, gratificación legal e Impuesto Único del SII.
              </p>
            </Link>

            <Link
              href="/cl/guias/que-es-la-utm/"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors mb-1">
                ¿Qué es la UTM y para qué sirve?
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                Unidad Tributaria Mensual, cálculo de la UTA y multas de tránsito.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
