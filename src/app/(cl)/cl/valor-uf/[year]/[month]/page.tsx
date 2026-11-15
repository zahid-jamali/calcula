import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui';
import {
  getAllUfMonths,
  getUfMonthSummary,
} from '@/lib/cl/indicators';
import { formatNumber } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

interface MonthPageProps {
  params: Promise<{
    year: string;
    month: string;
  }>;
}

export async function generateStaticParams() {
  const months = getAllUfMonths();
  return months.map((m) => ({
    year: m.year.toString(),
    month: String(m.month).padStart(2, '0'),
  }));
}

export async function generateMetadata({ params }: MonthPageProps): Promise<Metadata> {
  const resolved = await params;
  const year = parseInt(resolved.year, 10);
  const month = parseInt(resolved.month, 10);
  const summary = getUfMonthSummary(year, month);

  if (!summary) {
    return buildMetadata({
      country: 'cl',
      slug: `cl/valor-uf/${resolved.year}/${resolved.month}`,
      title: `Valor UF ${resolved.month}/${resolved.year} en Chile`,
      description: `Tabla diaria del valor de la UF en Chile durante ${resolved.month}/${resolved.year}.`,
    });
  }

  const title = `Valor UF ${summary.monthName} ${summary.year} en Chile`;
  const description = `Consulta la tabla diaria del valor de la UF en ${summary.monthName} ${summary.year} en Chile. Promedio mensual: $${formatNumber(summary.averageValue, 2, 'cl')}, primer día y variación oficial.`;

  return buildMetadata({
    country: 'cl',
    slug: `cl/valor-uf/${resolved.year}/${resolved.month}`,
    title,
    description,
  });
}

export default async function UfMonthPage({ params }: MonthPageProps) {
  const resolved = await params;
  const year = parseInt(resolved.year, 10);
  const month = parseInt(resolved.month, 10);
  const summary = getUfMonthSummary(year, month);

  if (!summary) {
    notFound();
  }

  const prevMonthSlug = summary.prevMonthSlug;
  const nextMonthSlug = summary.nextMonthSlug;

  const prevLink = prevMonthSlug ? `/cl/valor-uf/${prevMonthSlug.replace('-', '/')}/` : null;
  const nextLink = nextMonthSlug ? `/cl/valor-uf/${nextMonthSlug.replace('-', '/')}/` : null;

  return (
    <>
      <JsonLd
        country="cl"
        slug={`cl/valor-uf/${resolved.year}/${resolved.month}`}
        type="website"
        title={`Valor UF ${summary.monthName} ${summary.year}`}
        description={`Tabla histórica oficial día a día del valor de la UF en ${summary.monthName} de ${summary.year} en Chile.`}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Valor UF Hoy', path: '/cl/valor-uf-hoy/' },
          { name: `UF ${summary.year}`, path: `/cl/valor-uf/${summary.year}/` },
          { name: `${summary.monthName} ${summary.year}`, path: `/cl/valor-uf/${resolved.year}/${resolved.month}/` },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        {/* Navigation Breadcrumb & Back */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Link href="/cl/" className="hover:text-brand-blue">
              Chile
            </Link>
            <span>/</span>
            <Link href="/cl/valor-uf-hoy/" className="hover:text-brand-blue">
              Valor UF Hoy
            </Link>
            <span>/</span>
            <Link href={`/cl/valor-uf/${summary.year}/`} className="hover:text-brand-blue">
              Año {summary.year}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{summary.monthName}</span>
          </div>

          <Link
            href="/cl/valor-uf-hoy/"
            className="text-brand-blue hover:underline font-semibold flex items-center gap-1"
          >
            ← Ir al valor de la UF hoy y conversor
          </Link>
        </div>

        {/* Hero Section */}
        <div>
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-900 bg-blue-100 rounded-full mb-2">
            Serie Oficial del Banco Central de Chile
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Valor UF {summary.monthName} {summary.year}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Revisa la tabla completa con el valor oficial de la Unidad de Fomento (UF) para cada día de {summary.monthName} de {summary.year}, promedio mensual y variación acumulada respecto al mes anterior.
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Promedio Mensual</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.averageValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Primer Día (Día 1)</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.firstValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Último Día ({summary.days[summary.days.length - 1]?.day})</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.lastValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Variación Mensual</span>
            <strong
              className={`text-lg sm:text-xl font-bold font-mono ${
                summary.changeAmount >= 0 ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {summary.changeAmount >= 0 ? '▲ +' : '▼ '}
              ${formatNumber(Math.abs(summary.changeAmount), 2, 'cl')} ({summary.changePercent >= 0 ? '+' : ''}
              {summary.changePercent.toFixed(2)}%)
            </strong>
          </Card>
        </div>

        {/* Daily Table Card */}
        <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>📅</span> Tabla Diaria: Valores de la UF en {summary.monthName} {summary.year}
            </h2>
            <div className="text-xs text-slate-500">
              Rango: ${formatNumber(summary.minValue, 2, 'cl')} – ${formatNumber(summary.maxValue, 2, 'cl')}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                  <th className="py-2.5 px-3">Día</th>
                  <th className="py-2.5 px-3">Fecha</th>
                  <th className="py-2.5 px-3 text-right">Valor UF Oficial</th>
                  <th className="py-2.5 px-3 text-right">Variación Diaria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-800 font-mono">
                {summary.days.map((d, index) => {
                  const prev = index > 0 ? summary.days[index - 1].value : null;
                  const diff = prev ? d.value - prev : 0;
                  return (
                    <tr key={d.date} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-slate-900 font-sans">
                        Día {d.day}
                      </td>
                      <td className="py-2.5 px-3 text-slate-500">{d.date}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                        ${formatNumber(d.value, 2, 'cl')}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        {prev ? (
                          <span className={diff >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                            {diff >= 0 ? '+' : ''}${formatNumber(diff, 2, 'cl')}
                          </span>
                        ) : (
                          <span className="text-slate-400 font-sans">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>
              Fuente oficial:{' '}
              <a
                href="https://mindicador.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-brand-blue hover:text-blue-800"
              >
                Banco Central de Chile vía mindicador.cl
              </a>
            </span>
            <Link
              href="/cl/valor-uf-hoy/"
              className="text-brand-blue hover:underline font-semibold"
            >
              Convertir este valor a pesos chilenos →
            </Link>
          </div>
        </Card>

        {/* Previous / Next Month Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
          {prevLink ? (
            <Link
              href={prevLink}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
            >
              ← Mes Anterior
            </Link>
          ) : (
            <span className="text-xs text-slate-400">Sin mes anterior</span>
          )}

          <Link
            href={`/cl/valor-uf/${summary.year}/`}
            className="text-xs font-bold text-slate-700 hover:text-brand-blue"
          >
            Ver resumen anual completo del {summary.year}
          </Link>

          {nextLink ? (
            <Link
              href={nextLink}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
            >
              Mes Siguiente →
            </Link>
          ) : (
            <span className="text-xs text-slate-400">Sin mes siguiente</span>
          )}
        </div>
      </main>

      <Footer country="cl" />
    </>
  );
}
