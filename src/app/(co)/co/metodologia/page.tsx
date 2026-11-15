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
    slug: 'co/metodologia',
    title: 'Metodología y Fórmulas Laborales CST 2026 - E-E-A-T | Calcula Colombia',
    description:
      'Fundamentación jurídica, fórmulas oficiales y normas del CST aplicadas en la liquidación laboral, prima, cesantías, vacaciones, retenciones y horas extras en Colombia.',
  });
}

export default function MetodologiaCoPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Metodología', path: '/co/metodologia/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/metodologia"
        type="website"
        title="Metodología y Fórmulas Laborales CST 2026"
        description="Fórmulas matemáticas y fundamentación en el Código Sustantivo del Trabajo (CST) para el cálculo de liquidaciones y prestaciones sociales en Colombia."
        breadcrumbs={breadcrumbs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Metodología' },
          ]}
        />

        <article className="mt-6 space-y-10">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 mb-3">
              Rigor E-E-A-T · Código Sustantivo del Trabajo 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Metodología de Cálculo y Base Legal (Colombia)
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Calcula Colombia publica las bases jurídicas, las fórmulas matemáticas exactas y las fuentes gubernamentales del Estado Colombiano que sustentan cada simulador de liquidación y prestaciones sociales.
            </p>
          </header>

          <div className="bg-white border-l-4 border-emerald-600 p-5 rounded-r-xl shadow-sm border border-slate-200">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Rigor Metodológico y Estándar Laboral Colombiano
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              En el derecho laboral colombiano, el año laboral consta de 360 días (meses contables de 30 días). Nuestras fórmulas aplican con total precisión este estándar contable avalado por el Ministerio del Trabajo y la Sala de Casación Laboral de la Corte Suprema de Justicia.
            </p>
          </div>

          {/* Section 1: Liquidación Laboral */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Liquidación Laboral e Indemnización por Despido (CST Art. 64 y 65)
              </h2>
              <Link
                href="/co/calculadora-liquidacion/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              La liquidación definitiva comprende la suma de todas las prestaciones sociales devengadas pendientes de pago (prima, cesantías, intereses, vacaciones) más la indemnización por despido sin justa causa cuando la terminación es unilateral por parte del empleador.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-bold text-slate-900">Indemnización por Despido Injustificado (Art. 64 CST):</p>
              <p className="text-slate-700 font-semibold">Contrato a Término Indefinido (Trabajadores con salario &lt; 10 SMMLV):</p>
              <p>• Primer año de servicio (o fracción menor a 1 año): 30 días de salario.</p>
              <p>• Años subsiguientes: 20 días de salario adicionales por cada año adicional (o proporcional por fracción).</p>
              <p className="text-slate-700 font-semibold pt-1">Contrato a Término Indefinido (Trabajadores con salario ≥ 10 SMMLV):</p>
              <p>• Primer año de servicio: 20 días de salario.</p>
              <p>• Años subsiguientes: 15 días de salario adicionales por cada año adicional (o proporcional).</p>
              <p className="text-slate-700 font-semibold pt-1">Contrato a Término Fijo (Art. 64 numeral 2 CST):</p>
              <p>• Indemnización = Valor de los salarios que falten para cumplir el plazo acordado.</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Indemnización Moratoria (Art. 65 CST):</strong> Si a la terminación del contrato el empleador no paga al trabajador los salarios y prestaciones debidas, debe pagar al asalariado una suma igual al último salario diario por cada día de retardo durante los primeros 24 meses.
            </p>
          </section>

          {/* Section 2: Prima de Servicios */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Prima de Servicios (CST Art. 306)
              </h2>
              <Link
                href="/co/calculadora-prima/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              La prima de servicios es una prestación social que equivale a 30 días de salario por año laborado, pagadera en dos cuotas semestrales: la primera a más tardar el 30 de junio y la segunda dentro de los primeros 20 días del mes de diciembre.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Fórmula Legal de la Prima de Servicios:</p>
              <p>Prima de Servicios = (Salario Base Mensual × Días Trabajados en el Semestre) / 360</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Base Salarial:</strong> El salario base incluye el salario ordinario, horas extras, recargos y el <strong>auxilio de transporte</strong> para quienes devenguen hasta 2 salarios mínimos mensuales (Art. 7 Ley 1ra de 1963).
            </p>
          </section>

          {/* Section 3: Cesantías e Intereses */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Cesantías e Intereses sobre Cesantías (Ley 50 de 1990 y Ley 52 de 1975)
              </h2>
              <Link
                href="/co/calculadora-cesantias/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Las cesantías corresponden a un mes de salario por cada año completo de servicios prestados o proporcionalmente al tiempo trabajado (Art. 249 CST). Durante la relación laboral activa deben ser consignadas al Fondo de Cesantías a más tardar el 14 de febrero del año siguiente.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-bold text-slate-900">Fórmulas Oficiales:</p>
              <p>Cesantías = (Salario Base con Auxilio de Transporte × Días Trabajados en el Año) / 360</p>
              <p>Intereses sobre Cesantías = (Monto de Cesantías × Días Trabajados × 0.12) / 360</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Intereses sobre Cesantías (Ley 52 de 1975):</strong> El empleador debe cancelar al trabajador intereses del 12% anual sobre el saldo de las cesantías acumuladas al 31 de diciembre, pagaderos directamente al trabajador a más tardar el 31 de enero de cada año (o en la liquidación final).
            </p>
          </section>

          {/* Section 4: Vacaciones */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Vacaciones Legales y Compensación (CST Art. 186 y 189)
              </h2>
              <Link
                href="/co/calculadora-vacaciones/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Los trabajadores tienen derecho a 15 días hábiles consecutivos de vacaciones remuneradas por cada año laborado (Art. 186 CST). Si la relación laboral concluye antes de disfrutarlas, se deben compensar en dinero proporcionalmente al tiempo servido (Art. 189 CST).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Fórmula de Compensación de Vacaciones:</p>
              <p>Vacaciones en Dinero = (Salario Básico Mensual × Días Trabajados) / 720</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg text-xs sm:text-sm text-amber-900">
              <strong>Regla Jurídica Clave:</strong> A diferencia de la prima y las cesantías, el <strong>auxilio de transporte NO se incluye</strong> en la base salarial para liquidar las vacaciones (Art. 192 CST).
            </div>
          </section>

          {/* Section 5: Salario Neto, Aportes a Salud y Pensión */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Salario Neto y Seguridad Social (Ley 100 de 1993)
              </h2>
              <Link
                href="/co/calculadora-salario-neto/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              El salario neto a pagar en cada nómina quincenal o mensual se calcula restando del salario básico los aportes obligatorios a la seguridad social que legalmente corresponden al empleado:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-900 font-semibold">
                  <tr>
                    <th className="p-2.5 border-b border-slate-200">Concepto</th>
                    <th className="p-2.5 border-b border-slate-200">Aporte del Trabajador</th>
                    <th className="p-2.5 border-b border-slate-200">Aporte del Empleador</th>
                    <th className="p-2.5 border-b border-slate-200">Base de Cotización (IBC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2.5 font-medium">Salud (EPS)</td>
                    <td className="p-2.5 font-bold text-brand-900">4.0%</td>
                    <td className="p-2.5">8.5% (exonerado &lt; 10 SMMLV Art. 114-1 ET)</td>
                    <td className="p-2.5">Salario sin auxilio de transporte</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium">Pensión (Fondo)</td>
                    <td className="p-2.5 font-bold text-brand-900">4.0%</td>
                    <td className="p-2.5">12.0%</td>
                    <td className="p-2.5">Salario sin auxilio de transporte</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium">Fondo de Solidaridad Pensional</td>
                    <td className="p-2.5 font-bold text-brand-900">1.0% a 2.0%</td>
                    <td className="p-2.5">0.0%</td>
                    <td className="p-2.5">Aplica para salarios superiores a 4 SMMLV</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Auxilio de Transporte */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Auxilio de Transporte (Ley 15 de 1959)
              </h2>
              <Link
                href="/co/auxilio-de-transporte/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Consultar Valores Oficiales →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              El auxilio de transporte es obligatorio para todos los colaboradores que devenguen hasta <strong>dos salarios mínimos legales mensuales vigentes (2 SMMLV)</strong>. Por mandato de la Ley 1ra de 1963, se incorpora como factor salarial exclusivamente para liquidar la prima de servicios y las cesantías.
            </p>
          </section>

          {/* Section 7: Recargos y Horas Extras con Reforma Laboral 2026 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Recargos y Horas Extras (Reforma Laboral y Ley 2101 de 2021)
              </h2>
              <Link
                href="/co/calculadora-horas-extras/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nuestras herramientas incorporan la <strong>reducción gradual de la jornada máxima legal</strong> semanal (Ley 2101 de 2021), la cual recalcula el valor ordinario de la hora de trabajo (Salario Mensual / Horas Mensuales de la Jornada) sin desmejorar la remuneración:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-900 font-semibold">
                  <tr>
                    <th className="p-2.5 border-b border-slate-200">Concepto de Jornada Extra o Recargo</th>
                    <th className="p-2.5 border-b border-slate-200">Porcentaje Adicional</th>
                    <th className="p-2.5 border-b border-slate-200">Factor Multiplicador de la Hora</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr><td className="p-2.5 font-medium">Recargo Nocturno Ordinario (desde las 7:00 pm)</td><td className="p-2.5">+35%</td><td className="p-2.5 font-mono">1.35 × Hora Ordinaria</td></tr>
                  <tr><td className="p-2.5 font-medium">Hora Extra Diurna Ordinaria</td><td className="p-2.5">+25%</td><td className="p-2.5 font-mono">1.25 × Hora Ordinaria</td></tr>
                  <tr><td className="p-2.5 font-medium">Hora Extra Nocturna Ordinaria</td><td className="p-2.5">+75%</td><td className="p-2.5 font-mono">1.75 × Hora Ordinaria</td></tr>
                  <tr><td className="p-2.5 font-medium">Recargo Dominical o Festivo Ordinario</td><td className="p-2.5">+75% (actualizado según reforma)</td><td className="p-2.5 font-mono">1.75 × Hora Ordinaria</td></tr>
                  <tr><td className="p-2.5 font-medium">Hora Extra Diurna Dominical / Festiva</td><td className="p-2.5">+100%</td><td className="p-2.5 font-mono">2.00 × Hora Ordinaria</td></tr>
                  <tr><td className="p-2.5 font-medium">Hora Extra Nocturna Dominical / Festiva</td><td className="p-2.5">+150%</td><td className="p-2.5 font-mono">2.50 × Hora Ordinaria</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Official Sources Table */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏛️</span> Fuentes Oficiales del Estado Colombiano
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-slate-100 text-slate-900 font-semibold">
                  <tr>
                    <th className="p-3 border-b border-slate-200">Institución</th>
                    <th className="p-3 border-b border-slate-200">Dominio Oficial</th>
                    <th className="p-3 border-b border-slate-200">Normativa / Indicador Regulado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold">Secretaría General del Senado de la República</td>
                    <td className="p-3"><a href="https://www.secretariasenado.gov.co" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">secretariasenado.gov.co</a></td>
                    <td className="p-3">Código Sustantivo del Trabajo (CST), Ley 50 de 1990 y Ley 2101 de 2021</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Ministerio del Trabajo de Colombia</td>
                    <td className="p-3"><a href="https://www.mintrabajo.gov.co" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">mintrabajo.gov.co</a></td>
                    <td className="p-3">Decretos de Salario Mínimo (SMMLV), Auxilio de Transporte y circulares laborales</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Dirección de Impuestos y Aduanas Nacionales (DIAN)</td>
                    <td className="p-3"><a href="https://www.dian.gov.co" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">dian.gov.co</a></td>
                    <td className="p-3">Valor de la UVT y tablas de retención en la fuente sobre ingresos laborales</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">DANE (Departamento Administrativo Nacional de Estadística)</td>
                    <td className="p-3"><a href="https://www.dane.gov.co" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">dane.gov.co</a></td>
                    <td className="p-3">Índice de Precios al Consumidor (IPC) y parámetros macroeconómicos oficiales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
