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
    slug: 'mx/metodologia',
    title: 'Metodología y Fórmulas Laborales LFT 2026 - E-E-A-T | Calcula México',
    description:
      'Fundamentación jurídica, fórmulas matemáticas y fuentes oficiales de las calculadoras de finiquito, liquidación, aguinaldo, vacaciones dignas, ISR e IMSS en México.',
  });
}

export default function MetodologiaMxPage() {
  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Metodología', path: '/mx/metodologia/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/metodologia"
        type="website"
        title="Metodología y Fórmulas Laborales LFT 2026"
        description="Fórmulas matemáticas y fundamentación en la Ley Federal del Trabajo (LFT) y SAT para el cálculo de prestaciones en México."
        breadcrumbs={breadcrumbs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Metodología' },
          ]}
        />

        <article className="mt-6 space-y-10">
          {/* Header */}
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 mb-3">
              Rigor E-E-A-T · Ley Federal del Trabajo 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Metodología de Cálculo y Base Legal (México)
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              En Calcula México publicamos con total transparencia las fórmulas matemáticas, los artículos de la Ley Federal del Trabajo (LFT), las leyes fiscales aplicables y las fuentes gubernamentales oficiales que rigen cada uno de nuestros simuladores.
            </p>
          </header>

          {/* E-E-A-T Box */}
          <div className="bg-white border-l-4 border-emerald-600 p-5 rounded-r-xl shadow-sm border border-slate-200">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Compromiso de Exactitud y Verificabilidad
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nuestros algoritmos no aplican aproximaciones opacas. Todos los resultados se derivan de la legislación federal vigente publicada en el Diario Oficial de la Federación (DOF), resoluciones de la CONASAMI, tablas de retención del SAT y valores de la UMA certificados por el INEGI para el ejercicio fiscal 2026.
            </p>
          </div>

          {/* Section 1: Finiquito */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Calculadora de Finiquito Laboral
              </h2>
              <Link
                href="/mx/calculadora-finiquito/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              El finiquito corresponde a las prestaciones ordinarias y salarios devengados que el patrón adeuda al trabajador al momento de la extinción de la relación laboral, independientemente de la causa de terminación (renuncia voluntaria, término de contrato o despido justificado/injustificado).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Fórmula General del Finiquito:</p>
              <p>Total Finiquito = Días Devengados Pendientes + Aguinaldo Proporcional + Vacaciones Proporcionales + Prima Vacacional Proporcional</p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Fundamentación en la LFT:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li><strong>Art. 76 y 79 LFT:</strong> Si la relación de trabajo termina antes de cumplir el año de servicios, el trabajador tendrá derecho a una remuneración proporcional al tiempo de servicios prestados por concepto de vacaciones.</li>
                <li><strong>Art. 80 LFT:</strong> Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento (25%) sobre los salarios que les correspondan durante el período de vacaciones.</li>
                <li><strong>Art. 87 LFT:</strong> Los trabajadores que no hayan cumplido el año de servicios tendrán derecho a que se les pague la parte proporcional del aguinaldo conforme al tiempo trabajado.</li>
                <li><strong>Art. 82 y 84 LFT:</strong> El salario diario base para el finiquito ordinario es el salario cuota diaria ordinaria.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Liquidación por Despido */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Liquidación Constitucional (Despido Injustificado)
              </h2>
              <Link
                href="/mx/calculadora-liquidacion/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              La liquidación es una indemnización que procede exclusivamente cuando el patrón rescinde la relación de trabajo sin causa justificada o cuando el trabajador rescinde el contrato por causas imputables al patrón (Art. 51 LFT).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-bold text-slate-900">Componentes de la Liquidación Legal:</p>
              <p>1. Indemnización Constitucional = 90 días × Salario Diario Integrado (SDI) (Art. 48 y 50 LFT)</p>
              <p>2. Veinte Días por Año = 20 días de SDI × Años de Antigüedad (Art. 50 fracción II LFT, aplicable ante negativa de reinstalación)</p>
              <p>3. Prima de Antigüedad = 12 días × Salario Topado × Años de Servicio (Art. 162 LFT)</p>
              <p>4. Finiquito Proporcional = Prestaciones devengadas pendientes (Arts. 76, 80, 87 LFT)</p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Regla Especial del Salario Topado en la Prima de Antigüedad (Art. 486 LFT):</strong></p>
              <p className="text-slate-600">
                Para el cálculo de la prima de antigüedad (Art. 162), si el salario del trabajador excede del doble del salario mínimo de la zona geográfica aplicable (CONASAMI), se considerará esa cantidad máxima (2 veces el salario mínimo general vigente) como salario límite para los 12 días por año.
              </p>
            </div>
          </section>

          {/* Section 3: Aguinaldo */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Calculadora de Aguinaldo
              </h2>
              <Link
                href="/mx/calculadora-aguinaldo/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              El aguinaldo anual es una gratificación obligatoria equivalente a por lo menos 15 días de salario que debe cubrirse a más tardar el 20 de diciembre de cada año, conforme al Artículo 87 de la LFT.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Fórmula de Aguinaldo Proporcional:</p>
              <p>Aguinaldo = (Salario Diario × Días de Aguinaldo Anual / 365) × Días Trabajados en el Año Calendario</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Exención de Impuestos (LISR Art. 93 fracc. XIV):</strong> El aguinaldo se encuentra exento del Impuesto sobre la Renta (ISR) hasta por el equivalente a <strong>30 Unidades de Medida y Actualización (UMA)</strong> vigentes. El excedente acumulado se grava conforme a la tarifa mensual del Art. 96 de la LISR o al procedimiento del Art. 174 del Reglamento de la LISR.
            </p>
          </section>

          {/* Section 4: Vacaciones Dignas */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Vacaciones Dignas y Prima Vacacional
              </h2>
              <Link
                href="/mx/calculadora-vacaciones/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              A partir de la reforma a los Artículos 76 y 78 de la LFT, el periodo anual de vacaciones pagadas inicia en un mínimo de <strong>12 días laborales</strong> continuos tras el primer año de servicios, aumentando dos días laborales por cada año subsiguiente hasta llegar a 20 días. A partir del sexto año, aumenta en dos días por cada cinco de servicios.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-900 font-semibold">
                  <tr>
                    <th className="p-2.5 border-b border-slate-200">Años de Servicio</th>
                    <th className="p-2.5 border-b border-slate-200">Días de Vacaciones (LFT Reforma)</th>
                    <th className="p-2.5 border-b border-slate-200">Prima Vacacional Mínima (25%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr><td className="p-2.5 font-medium">1 año</td><td className="p-2.5">12 días</td><td className="p-2.5">3.0 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">2 años</td><td className="p-2.5">14 días</td><td className="p-2.5">3.5 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">3 años</td><td className="p-2.5">16 días</td><td className="p-2.5">4.0 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">4 años</td><td className="p-2.5">18 días</td><td className="p-2.5">4.5 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">5 años</td><td className="p-2.5">20 días</td><td className="p-2.5">5.0 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">6 a 10 años</td><td className="p-2.5">22 días</td><td className="p-2.5">5.5 días de salario</td></tr>
                  <tr><td className="p-2.5 font-medium">11 a 15 años</td><td className="p-2.5">24 días</td><td className="p-2.5">6.0 días de salario</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Exención Fiscal Prima Vacacional (Art. 93 fracc. XIV LISR):</strong> La prima vacacional legal cuenta con una exención de hasta <strong>15 UMAs</strong> para efectos del ISR.
            </p>
          </section>

          {/* Section 5: Sueldo Neto, ISR e IMSS */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Sueldo Neto, Retención de ISR y Cuotas IMSS
              </h2>
              <Link
                href="/mx/calculadora-sueldo-neto/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              El sueldo neto recibido por el colaborador se obtiene restando del salario bruto contractual las deducciones de ley: el Impuesto sobre la Renta (ISR) retenido por el patrón para la Secretaría de Hacienda (SAT) y las cuotas obreras de seguridad social (IMSS).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Fórmula de Retención del ISR (Art. 96 LISR):</p>
              <p>Base Gravable = Sueldo Bruto - Ingresos Exentos</p>
              <p>Excedente del Límite Inferior = Base Gravable - Límite Inferior del Rango</p>
              <p>Impuesto Marginal = Excedente × Tasa Aplicable del Rango (%)</p>
              <p>ISR Determinado = Impuesto Marginal + Cuota Fija del Rango</p>
              <p>ISR a Retener = ISR Determinado - Subsidio para el Empleo (si aplica)</p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Cuotas Obrero IMSS (Ley del Seguro Social):</strong></p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li><strong>Enfermedades y Maternidad:</strong> 0.40% sobre el SBC en prestaciones en dinero + excedente de 3 UMAs (cuota obrera del 0.40% sobre el diferencial de salario base de cotización).</li>
                <li><strong>Invalidez y Vida:</strong> 0.625% sobre el Salario Base de Cotización (SBC).</li>
                <li><strong>Cesantía en Edad Avanzada y Vejez:</strong> 1.125% a cargo del trabajador sobre el SBC.</li>
                <li><strong>Tope de Cotización IMSS:</strong> 25 veces el valor de la UMA vigente (Art. 28 LSS).</li>
              </ul>
            </div>
          </section>

          {/* Section 6: SDI */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Salario Diario Integrado (SDI / SBC)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              El Salario Diario Integrado (Arts. 84 y 89 LFT) incorpora la cuota diaria ordinaria más la parte proporcional de las prestaciones mínimas de ley (aguinaldo y prima vacacional) y percepciones fijas adicionales.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">Factor de Integración Mínimo de Ley:</p>
              <p>Factor = 1 + (Días Aguinaldo / 365) + (Días Vacaciones × % Prima / 365)</p>
              <p>Ejemplo Año 1: 1 + (15 / 365) + (12 × 0.25 / 365) = 1 + 0.04109 + 0.00822 = 1.0493</p>
            </div>
          </section>

          {/* Section 7: PTU */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Reparto de Utilidades (PTU Art. 117-127 LFT)
              </h2>
              <Link
                href="/mx/calculadora-ptu/"
                className="text-xs font-bold text-brand-900 hover:underline"
              >
                Abrir Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Las empresas están obligadas a repartir el 10% de su renta gravable entre sus trabajadores (personas morales pagan en mayo; personas físicas con actividad empresarial en junio).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-bold text-slate-900">Distribución en Dos Partes Iguales (Art. 123 LFT):</p>
              <p>50% en proporción a los días efectivamente trabajados por cada colaborador durante el año fiscal.</p>
              <p>50% en proporción al monto de los salarios devengados en el ejercicio.</p>
              <p className="font-bold text-slate-900 pt-1">Tope Legal Máximo (Art. 127 fracción VIII LFT):</p>
              <p>Límite = El mayor entre tres meses del salario actual del trabajador o el promedio del PTU recibido en los últimos tres años fiscales.</p>
            </div>
          </section>

          {/* Official Sources Table */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏛️</span> Fuentes Oficiales del Estado Mexicano
            </h2>
            <p className="text-sm text-slate-700">
              Nuestros sistemas monitorean permanentemente los portales y repositorios oficiales de las autoridades mexicanas:
            </p>
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
                    <td className="p-3 font-semibold">Cámara de Diputados del H. Congreso de la Unión</td>
                    <td className="p-3"><a href="https://www.diputados.gob.mx" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">diputados.gob.mx</a></td>
                    <td className="p-3">Ley Federal del Trabajo (LFT), Ley del Seguro Social (LSS) y Código Fiscal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Servicio de Administración Tributaria (SAT)</td>
                    <td className="p-3"><a href="https://www.sat.gob.mx" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">sat.gob.mx</a></td>
                    <td className="p-3">Tablas del Art. 96 de la LISR, Resolución Miscelánea Fiscal y Subsidio para el Empleo</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Instituto Nacional de Estadística y Geografía (INEGI)</td>
                    <td className="p-3"><a href="https://www.inegi.org.mx" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">inegi.org.mx</a></td>
                    <td className="p-3">Valor de la Unidad de Medida y Actualización (UMA diaria, mensual y anual)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Comisión Nacional de los Salarios Mínimos (CONASAMI)</td>
                    <td className="p-3"><a href="https://www.gob.mx/conasami" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">conasami.gob.mx</a></td>
                    <td className="p-3">Salario Mínimo General y Salario Mínimo de la Zona Libre de la Frontera Norte</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Instituto Mexicano del Seguro Social (IMSS)</td>
                    <td className="p-3"><a href="https://www.imss.gob.mx" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-mono">imss.gob.mx</a></td>
                    <td className="p-3">Porcentajes de cuotas obrero-patronales, ramos de aseguramiento y topes de cotización</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
