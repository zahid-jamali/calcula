import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { InfoPageTemplate } from '@/components/templates/InfoPageTemplate';
import { content } from '@/content/br/tabela-irrf';
import { br2026 } from '@/rules/br/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/tabela-irrf',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function BrTabelaIrrfPage() {
  const brackets = br2026.irrfBrackets.value;
  const depDeduction = br2026.irrfDeductionPerDependent.value;
  const simplified = br2026.irrfSimplifiedDeduction.value;

  const tableSlot = (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-4 py-3">Base de Cálculo Mensal</th>
              <th scope="col" className="px-4 py-3">Alíquota</th>
              <th scope="col" className="px-4 py-3">Parcela a Deduzir do IR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 font-mono text-xs sm:text-sm">
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                Até {formatCurrency(brackets[0].max, 'br')}
              </td>
              <td className="px-4 py-3 text-emerald-700 font-bold font-sans">Isento</td>
              <td className="px-4 py-3 text-slate-500 font-sans">R$ 0,00</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[0].max + 0.01, 'br')} até {formatCurrency(brackets[1].max, 'br')}
              </td>
              <td className="px-4 py-3 text-blue-700 font-bold font-sans">7,5%</td>
              <td className="px-4 py-3 text-slate-900 font-bold">{formatCurrency(brackets[1].deduction, 'br')}</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[1].max + 0.01, 'br')} até {formatCurrency(brackets[2].max, 'br')}
              </td>
              <td className="px-4 py-3 text-amber-700 font-bold font-sans">15,0%</td>
              <td className="px-4 py-3 text-slate-900 font-bold">{formatCurrency(brackets[2].deduction, 'br')}</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[2].max + 0.01, 'br')} até {formatCurrency(brackets[3].max, 'br')}
              </td>
              <td className="px-4 py-3 text-orange-700 font-bold font-sans">22,5%</td>
              <td className="px-4 py-3 text-slate-900 font-bold">{formatCurrency(brackets[3].deduction, 'br')}</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                Acima de {formatCurrency(brackets[3].max, 'br')}
              </td>
              <td className="px-4 py-3 text-purple-700 font-bold font-sans">27,5%</td>
              <td className="px-4 py-3 text-slate-900 font-bold">{formatCurrency(brackets[4].deduction, 'br')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deduction parameters box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-900">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Dedução por Dependente
          </p>
          <p className="text-2xl font-black mt-1 text-blue-950">
            {formatCurrency(depDeduction, 'br')} <span className="text-sm font-normal text-blue-700">/ mês</span>
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Abatimento direto na base de cálculo para cada dependente legal comprovado.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Desconto Simplificado Mensal
          </p>
          <p className="text-2xl font-black mt-1 text-emerald-950">
            {formatCurrency(simplified, 'br')} <span className="text-sm font-normal text-emerald-700">/ mês</span>
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Alternativa automática para quem tem poucas deduções legais (isenção efetiva até 2 salários mínimos).
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        country="br"
        slug="br/tabela-irrf"
        type="info"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Tabelas Oficiais', path: '/br/#tabelas' },
          { name: content.h1, path: '/br/tabela-irrf/' },
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
