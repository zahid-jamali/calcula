import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/metodologia',
    title: 'Metodología y Fórmulas Laborales Chile 2026',
    description:
      'Detalle matemático, normativo y artículos de ley (Código del Trabajo, SII, Banco Central) aplicados en las calculadoras laborales y financieras de Calcula Chile.',
  });
}

export default function MetodologiaPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Metodología' },
  ];

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/metodologia"
        type="info"
        title="Metodología de Cálculo y Base Legal en Chile"
        description="Fórmulas matemáticas y fundamentación jurídica de cada herramienta de Calcula Chile bajo el Código del Trabajo, SII y Banco Central."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Metodología', path: '/cl/metodologia/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full border border-blue-200">
            <span>⚖️</span>
            <span>Estándar E-E-A-T • Transparencia Algorítmica</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Metodología de Cálculo y Fundamento Legal
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            En Calcula Chile creemos que la confianza se edifica mediante la total apertura algorítmica. Presentamos en esta página las fórmulas matemáticas, deducciones reglamentarias, topes legales y artículos normativos que dan vida a cada una de nuestras calculadoras.
          </p>
        </header>

        {/* 1. Valor UF y Reajuste IPC */}
        <section id="valor-uf" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>📈</span> 1. Unidad de Fomento (UF) y Reajuste Diario por IPC
            </h2>
            <Link
              href="/cl/valor-uf-hoy/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Ir al Valor UF Hoy →
            </Link>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Marco Legal:</strong> Decreto Supremo N° 40 de 1990 del Ministerio de Hacienda y Acuerdos de Consejo del Banco Central de Chile.
            </p>
            <p>
              <strong>Mecanismo de Reajuste:</strong> La variación del Índice de Precios al Consumidor (IPC) del mes calendario anterior —publicada por el Instituto Nacional de Estadísticas (INE) habitualmente el día 8 de cada mes— se distribuye geométricamente de manera uniforme entre el día 10 del mes en curso y el día 9 del mes subsiguiente.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-semibold text-slate-900 font-sans mb-1">Fórmula de progresión geométrica diaria:</p>
              <p>UF(t) = UF(t - 1) × (1 + ΔIPC)^(1 / k)</p>
              <p className="text-xs text-slate-500 font-sans mt-2">
                Donde <strong>ΔIPC</strong> es la tasa de inflación mensual y <strong>k</strong> es el número total de días calendario que componen el período comprendido entre el día 10 del mes actual y el día 9 del mes siguiente (típicamente 28, 29, 30 o 31 días).
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Ver guía explicativa detallada:{' '}
              <Link href="/cl/guias/que-es-la-uf-y-como-se-calcula/" className="text-blue-700 underline font-medium">
                Qué es la UF y cómo se calcula
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 2. Valor UTM y UTA */}
        <section id="valor-utm" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏛️</span> 2. Unidad Tributaria Mensual (UTM) y Anual (UTA)
            </h2>
            <Link
              href="/cl/valor-utm/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Consultar UTM →
            </Link>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Marco Legal:</strong> Artículo 8° N° 9 y N° 10 del Código Tributario (Decreto Ley N° 830) y Artículo 52 de la Ley sobre Impuesto a la Renta (LIR).
            </p>
            <p>
              <strong>Determinación:</strong> A diferencia de la UF, la UTM permanece invariable a lo largo de cada mes calendario. El Servicio de Impuestos Internos (SII) calcula su valor aplicando la variación del IPC del penúltimo mes anterior.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-semibold text-slate-900 font-sans mb-1">Equivalencia tributaria:</p>
              <p>UTA = 12 × UTM (del mes respectivo)</p>
            </div>
            <p className="text-xs text-slate-500">
              Ver guía completa:{' '}
              <Link href="/cl/guias/que-es-la-utm/" className="text-blue-700 underline font-medium">
                Qué es la UTM, UTA y sus aplicaciones tributarias
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 3. Sueldo Líquido e Impuesto Único */}
        <section id="sueldo-liquido" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>💼</span> 3. Sueldo Líquido e Impuesto Único de Segunda Categoría
            </h2>
            <Link
              href="/cl/calculadora-sueldo-liquido/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Simulador Sueldo Líquido →
            </Link>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Marco Normativo:</strong> Código del Trabajo (Artículos 41 y 50), Decreto Ley 3.500 (Sistema de Pensiones), Ley N° 19.728 (Seguro de Cesantía) y Ley sobre Impuesto a la Renta (Artículos 42 N° 1 y 43).
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">A. Remuneración Imponible y Gratificación Legal</h3>
              <p>
                La base imponible se compone de sueldo base, bonos habituales, horas extraordinarias y gratificación legal. Cuando se pacta la modalidad del <strong>Artículo 50 del Código del Trabajo</strong>, el empleador abona el 25% de lo percibido en el año por concepto de remuneraciones mensuales, con un tope máximo legal anual equivalente a 4,75 Ingresos Mínimos Mensuales (IMM):
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs sm:text-sm">
                Tope Mensual Gratificación Art. 50 = (4,75 × IMM) / 12
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">B. Topes Imponibles Previsionales Vigentes (2026)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Tope AFP y Salud:</strong> <strong>87,4 UF</strong>, convertidas a pesos con la UF del último día del mes trabajado.
                </li>
                <li>
                  <strong>Tope Seguro de Cesantía (AFC):</strong> <strong>131,4 UF</strong> al cierre del mes respectivo.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">C. Cotizaciones Obligatorias del Trabajador</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Fondo de Pensiones (AFP):</strong> 10% obligatorio de capitalización individual más la comisión porcentual de cada administradora (Capital 1,44%, Cuprum 1,44%, Habitat 1,27%, Modelo 0,58%, PlanVital 1,10%, Provida 1,45%, Uno 0,49%).
                </li>
                <li>
                  <strong>Salud:</strong> 7% legal obligatorio (Fonasa o Isapre institucional), o el monto pactado en UF si el afiliado a Isapre contrató un plan superior.
                </li>
                <li>
                  <strong>Seguro de Cesantía:</strong> 0,6% imponible a cargo del trabajador en contratos de duración indefinida. En contratos a plazo fijo o por obra, el trabajador no cotiza (0%), siendo íntegramente de cargo patronal (3,0%).
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">D. Escala Progresiva del Impuesto Único de Segunda Categoría</h3>
              <p>
                La base tributable se obtiene deduciendo del total imponible (topeado) la totalidad de los descuentos previsionales obligatorios. El monto en pesos se divide por la UTM del mes y se aplica la tabla legal de tramos:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-lg">
                  <thead className="bg-slate-100 font-semibold text-slate-700">
                    <tr>
                      <th className="p-2 border-b">Tramo (en UTM)</th>
                      <th className="p-2 border-b">Factor / Tasa Marginal</th>
                      <th className="p-2 border-b">Cantidad a Rebajar (UTM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="p-2">0 a 13,5 UTM</td><td className="p-2 font-medium text-emerald-700">Exento (0,00)</td><td className="p-2">0,00</td></tr>
                    <tr><td className="p-2">Más de 13,5 hasta 30 UTM</td><td className="p-2">0,04</td><td className="p-2">0,54</td></tr>
                    <tr><td className="p-2">Más de 30 hasta 50 UTM</td><td className="p-2">0,08</td><td className="p-2">1,74</td></tr>
                    <tr><td className="p-2">Más de 50 hasta 70 UTM</td><td className="p-2">0,135</td><td className="p-2">3,665</td></tr>
                    <tr><td className="p-2">Más de 70 hasta 90 UTM</td><td className="p-2">0,23</td><td className="p-2">8,415</td></tr>
                    <tr><td className="p-2">Más de 90 hasta 120 UTM</td><td className="p-2">0,304</td><td className="p-2">13,595</td></tr>
                    <tr><td className="p-2">Más de 120 hasta 310 UTM</td><td className="p-2">0,35</td><td className="p-2">19,115</td></tr>
                    <tr><td className="p-2">Más de 310 UTM</td><td className="p-2 font-medium text-red-700">0,40</td><td className="p-2">34,615</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600 font-mono mt-1">
                Fórmula de retención: Impuesto a Retener ($) = [(Renta Neta Tributable / UTM) × Factor - Rebaja] × UTM
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Guía paso a paso:{' '}
              <Link href="/cl/guias/de-sueldo-bruto-a-liquido/" className="text-blue-700 underline font-medium">
                Cómo calcular el sueldo de bruto a líquido en Chile
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 4. Finiquito Laboral */}
        <section id="finiquito" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>📑</span> 4. Finiquito Laboral e Indemnizaciones por Cese
            </h2>
            <Link
              href="/cl/calculadora-finiquito/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Calculadora Finiquito →
            </Link>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Marco Normativo:</strong> Artículos 67, 73, 159, 160, 161, 162, 163, 168, 172 y 177 del Código del Trabajo de Chile.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">A. Remuneración de Referencia y Tope del Artículo 172</h3>
              <p>
                Para el cómputo indemnizatorio se considera la <em>última remuneración mensual devengada</em>, comprensiva de sueldo base y todo estipendio regular devengado mes a mes. Conforme al inciso tercero del <strong>Artículo 172</strong>, la remuneración máxima computada no puede exceder el equivalente a <strong>90 UF</strong> al último día del mes precedente a la desvinculación.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">B. Indemnización por Años de Servicio (Art. 163)</h3>
              <p>
                Procede en despidos fundados en el <strong>Artículo 161</strong> (necesidades de la empresa o desahucio patronal). Corresponde a 1 mes de remuneración computable por cada año de servicios continuos y fracción superior a 6 meses, con un límite de 11 años para relaciones laborales pactadas desde el 14 de agosto de 1981 en adelante.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">C. Indemnización Sustitutiva del Aviso Previo (Art. 161 y 162)</h3>
              <p>
                Si el empleador desvincula con invocación del Artículo 161 sin otorgar una carta de aviso previo formal con al menos 30 días continuos de anticipación, debe pagar una suma indemnizatoria sustitutiva equivalente a un mes de remuneración íntegra.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">D. Feriado Proporcional (Art. 67 y 73)</h3>
              <p>
                Todo dependiente acumula legalmente 1,25 días hábiles de vacaciones por mes trabajado (15 días anuales). Al cese del contrato, los días hábiles adeudados se pagan proyectándolos en días naturales sucesivos a partir del día siguiente al despido, incorporando los días inhábiles (sábados, domingos y feriados calendarios) conforme al factor de conversión jurisprudencial <strong>7/5</strong> establecido por la Dirección del Trabajo.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Guías de referencia:{' '}
              <Link href="/cl/guias/como-calcular-el-finiquito/" className="text-blue-700 underline font-medium">
                Cómo calcular el finiquito laboral
              </Link>{' '}
              y{' '}
              <Link href="/cl/guias/indemnizacion-por-anos-de-servicio/" className="text-blue-700 underline font-medium">
                Indemnización por años de servicio en Chile
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 5. Arriendo en UF */}
        <section id="arriendo-uf" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏠</span> 5. Arriendo en UF y Reajustes Anuales
            </h2>
            <Link
              href="/cl/calculadora-arriendo-uf/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Calculadora de Arriendo →
            </Link>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Marco Legal:</strong> Ley N° 18.101 sobre Arrendamiento de Predios Urbanos y Código Civil chileno.
            </p>
            <p>
              <strong>Conversión Oficial a CLP:</strong> Cuando un contrato de arriendo se pacta en UF, el monto exacto en pesos exigible en cada período se calcula multiplicando las UF convenidas por el valor oficial de la UF a la fecha pactada de pago (usualmente los primeros 5 o 10 días del mes):
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs sm:text-sm">
              Canon en CLP = Monto en UF × Valor UF del día de pago
            </div>
          </div>
        </section>

        {/* 6. Crédito Hipotecario */}
        <section id="credito-hipotecario" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏦</span> 6. Simulador de Crédito Hipotecario (Sistema Francés)
            </h2>
            <Link
              href="/cl/simulador-credito-hipotecario/"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
            >
              Simulador Hipotecario →
            </Link>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Metodología Financiera:</strong> Sistema de amortización francés progresivo con cuotas constantes pactadas en UF.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-semibold text-slate-900 font-sans mb-1">Ecuación de cuota mensual (dividendo base):</p>
              <p>C = P × [ i × (1 + i)^n ] / [ (1 + i)^n - 1 ]</p>
              <p className="text-xs text-slate-500 font-sans mt-2">
                Donde <strong>P</strong> es el capital financiado (en UF), <strong>i</strong> es la tasa mensual equivalente derivada de la tasa de interés anual nominal (i = (1 + r_anual)^(1/12) - 1 o proporcional r / 12) y <strong>n</strong> es el número total de mensualidades (plazo en años × 12).
              </p>
            </div>
            <p className="text-xs text-slate-600">
              El dividendo total efectivo estimado incluye los seguros reglamentarios de desgravamen y de incendio/sismo obligatorios en las operaciones bancarias chilenas (Ley General de Bancos).
            </p>
          </div>
        </section>

        {/* Tabla de Fuentes Oficiales */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>🌐</span> Organismos Reguladores y Fuentes Oficiales
          </h2>
          <p className="text-sm text-slate-600">
            Todas las variables y tablas son contrastadas de forma periódica con los portales públicos del Estado de Chile:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-lg">
              <thead className="bg-slate-100 font-semibold text-slate-700">
                <tr>
                  <th className="p-3 border-b">Institución Oficial</th>
                  <th className="p-3 border-b">Indicador o Materia Supervisada</th>
                  <th className="p-3 border-b">Enlace Oficial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Banco Central de Chile</td>
                  <td className="p-3">Valor diario de la UF, Dólar Observado y Euro</td>
                  <td className="p-3">
                    <a href="https://www.bcentral.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      bcentral.cl ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Servicio de Impuestos Internos (SII)</td>
                  <td className="p-3">Valor mensual UTM, UTA y tramos Impuesto Único</td>
                  <td className="p-3">
                    <a href="https://www.sii.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      sii.cl ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Dirección del Trabajo (DT)</td>
                  <td className="p-3">Criterios de finiquito, feriado proporcional y años de servicio</td>
                  <td className="p-3">
                    <a href="https://www.dt.gob.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      dt.gob.cl ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Superintendencia de Pensiones</td>
                  <td className="p-3">Topes imponibles anuales (87,4 UF / 131,4 UF) y comisiones AFP</td>
                  <td className="p-3">
                    <a href="https://www.spensiones.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      spensiones.cl ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Instituto Nacional de Estadísticas (INE)</td>
                  <td className="p-3">Variación mensual del IPC y canasta familiar</td>
                  <td className="p-3">
                    <a href="https://www.ine.gob.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      ine.gob.cl ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Mindicador.cl</td>
                  <td className="p-3">API de sincronización diaria y datos en tiempo real</td>
                  <td className="p-3">
                    <a href="https://mindicador.cl" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      mindicador.cl ↗
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
