import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { InfoPageTemplate } from '@/components/templates/InfoPageTemplate';
import { content } from '@/content/br/salario-minimo';
import { br2026 } from '@/rules/br/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/salario-minimo',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function BrSalarioMinimoPage() {
  const currentWage = br2026.minimumWage.value;
  const dailyWage = Math.round((currentWage / 30) * 100) / 100;
  const hourlyWage = Math.round((currentWage / 220) * 100) / 100;
  const history = br2026.salarioMinimoHistory.value;

  const tableSlot = (
    <div className="space-y-6">
      {/* 2026 Primary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Salário Mínimo Mensal 2026
          </p>
          <p className="text-3xl font-black mt-1 text-emerald-900">
            {formatCurrency(currentWage, 'br')}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Vigência nacional a partir de 01/01/2026
          </p>
        </div>

        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Valor da Diária (Divisor 30)
          </p>
          <p className="text-3xl font-black mt-1 text-blue-900">
            {formatCurrency(dailyWage, 'br')}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Base para cálculo de saldo de salário
          </p>
        </div>

        <div className="p-4 rounded-xl border border-purple-200 bg-purple-50 text-purple-950">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Valor por Hora (Divisor 220)
          </p>
          <p className="text-3xl font-black mt-1 text-purple-900">
            {formatCurrency(hourlyWage, 'br')}
          </p>
          <p className="text-xs text-purple-700 mt-1">
            Base para horas extras e jornada CLT
          </p>
        </div>
      </div>

      {/* 10-Year Historical Table */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <span>📈</span> Histórico Oficial do Salário Mínimo no Brasil (Últimos 10 Anos)
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-4 py-3">Ano</th>
                <th scope="col" className="px-4 py-3">Valor Mensal</th>
                <th scope="col" className="px-4 py-3">Legislação / Decreto</th>
                <th scope="col" className="px-4 py-3">Vigência</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-sans text-xs sm:text-sm">
              {history.map((item) => (
                <tr key={item.year} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-bold text-slate-900">{item.year}</td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-800">
                    {formatCurrency(item.value, 'br')}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.law}</td>
                  <td className="px-4 py-3 text-slate-500 font-mono text-xs">{item.effectiveDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        country="br"
        slug="br/salario-minimo"
        type="info"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Tabelas Oficiais', path: '/br/#tabelas' },
          { name: content.h1, path: '/br/salario-minimo/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <InfoPageTemplate country="br" content={content} tableSlot={tableSlot} />
      </main>
      <Footer country="br" />
    </>
  );
}
