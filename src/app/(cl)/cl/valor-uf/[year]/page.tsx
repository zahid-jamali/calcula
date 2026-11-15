import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui';
import {
  getAllUfYears,
  getUfYearSummary,
} from '@/lib/cl/indicators';
import { formatNumber } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

interface YearPageProps {
  params: Promise<{
    year: string;
  }>;
}

export async function generateStaticParams() {
  const years = getAllUfYears();
  return years.map((y) => ({
    year: y.toString(),
  }));
}

export async function generateMetadata({ params }: YearPageProps): Promise<Metadata> {
  const resolved = await params;
  const year = parseInt(resolved.year, 10);
  const summary = getUfYearSummary(year);

  if (!summary) {
    return buildMetadata({
      country: 'cl',
      slug: `cl/valor-uf/${resolved.year}`,
      title: `Valor UF ${resolved.year} en Chile`,
      description: `Resumen anual del valor de la UF en Chile durante el año ${resolved.year}.`,
    });
  }

  const title = `Valor UF ${summary.year} en Chile: Resumen y Tablas Mensuales`;
  const description = `Consulta la evolución anual de la UF en Chile durante ${summary.year}. Tabla mes a mes con promedio anual de $${formatNumber(summary.averageValue, 2, 'cl')} y variación por inflación.`;

  return buildMetadata({
    country: 'cl',
    slug: `cl/valor-uf/${resolved.year}`,
    title,
    description,
  });
}

export default async function UfYearPage({ params }: YearPageProps) {
  const resolved = await params;
  const year = parseInt(resolved.year, 10);
  const summary = getUfYearSummary(year);

  if (!summary) {
    notFound();
  }

  const allYears = getAllUfYears();

  return (
    <>
      <JsonLd
        country="cl"
        slug={`cl/valor-uf/${resolved.year}`}
        type="website"
        title={`Valor UF ${summary.year} en Chile`}
        description={`Evolución y tabla mensual de la Unidad de Fomento (UF) en Chile durante el año ${summary.year}.`}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Valor UF Hoy', path: '/cl/valor-uf-hoy/' },
          { name: `Año ${summary.year}`, path: `/cl/valor-uf/${summary.year}/` },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-10 w-full space-y-8">
        {/* Breadcrumb Navigation */}
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
            <span className="text-slate-800 font-semibold">Año {summary.year}</span>
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
            Serie Anual Oficial
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Valor UF {summary.year} en Chile
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Resumen estadístico y evolución mes a mes de la Unidad de Fomento (UF) en Chile durante el año {summary.year}, con promedio anual, primer valor, último valor y enlaces a las tablas diarias de cada mes.
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Promedio Anual</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.averageValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Inicio de Año</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.firstValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Cierre de Año</span>
            <strong className="text-lg sm:text-xl text-slate-900 font-bold font-mono">
              ${formatNumber(summary.lastValue, 2, 'cl')}
            </strong>
          </Card>

          <Card className="p-4 bg-white border-slate-200 shadow-sm text-center">
            <span className="text-xs text-slate-500 block mb-1">Variación Anual</span>
            <strong
              className={`text-lg sm:text-xl font-bold font-mono ${
                summary.changePercent >= 0 ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {summary.changePercent >= 0 ? '▲ +' : '▼ '}
              {summary.changePercent.toFixed(2)}%
            </strong>
          </Card>
        </div>

        {/* Monthly Summary Table */}
        <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Resumen Mes a Mes de la UF ({summary.year})
            </h2>
            <div className="text-xs text-slate-500">
              Haz clic en cada mes para ver los valores día a día
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                  <th className="py-2.5 px-3">Mes</th>
                  <th className="py-2.5 px-3 text-right">Primer Día</th>
                  <th className="py-2.5 px-3 text-right">Último Día</th>
                  <th className="py-2.5 px-3 text-right">Promedio</th>
                  <th className="py-2.5 px-3 text-right">Variación</th>
                  <th className="py-2.5 px-3 text-center">Detalle Diario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-800 font-mono">
                {summary.months.map((m) => {
                  const monthSlug = String(m.month).padStart(2, '0');
                  return (
                    <tr key={m.month} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-slate-900 font-sans">
                        {m.monthName}
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600">
                        ${formatNumber(m.firstValue, 2, 'cl')}
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600">
                        ${formatNumber(m.lastValue, 2, 'cl')}
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                        ${formatNumber(m.averageValue, 2, 'cl')}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <span className={m.changePercent >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                          {m.changePercent >= 0 ? '+' : ''}
                          {m.changePercent.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center font-sans">
                        <Link
                          href={`/cl/valor-uf/${summary.year}/${monthSlug}/`}
                          className="inline-block px-2.5 py-1 text-xs font-semibold text-brand-blue hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded transition-colors"
                        >
                          Ver días →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            Fuente oficial:{' '}
            <a
              href="https://mindicador.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-brand-blue hover:text-blue-800"
            >
              Banco Central de Chile vía mindicador.cl
            </a>
          </div>
        </Card>

        {/* Other Years Links */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <span className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
            Consultar otros años:
          </span>
          <div className="flex flex-wrap gap-2">
            {allYears.map((y) => (
              <Link
                key={y}
                href={`/cl/valor-uf/${y}/`}
                className={`text-xs px-3 py-1.5 rounded font-semibold transition-colors ${
                  y === summary.year
                    ? 'bg-slate-900 text-white'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                }`}
              >
                Año {y}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer country="cl" />
    </>
  );
}
