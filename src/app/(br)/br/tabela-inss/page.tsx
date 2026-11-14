import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { InfoPageTemplate } from '@/components/templates/InfoPageTemplate';
import { content } from '@/content/br/tabela-inss';
import { br2026 } from '@/rules/br/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/tabela-inss',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function BrTabelaInssPage() {
  const brackets = br2026.inssBrackets.value;

  const tableSlot = (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-4 py-3">Faixa Salarial</th>
              <th scope="col" className="px-4 py-3">Alíquota Progressiva</th>
              <th scope="col" className="px-4 py-3">Parcela a Deduzir</th>
              <th scope="col" className="px-4 py-3">Contribuição Máxima da Faixa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 font-mono text-xs sm:text-sm">
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                Até {formatCurrency(brackets[0].max, 'br')}
              </td>
              <td className="px-4 py-3 text-emerald-700 font-bold font-sans">7,5%</td>
              <td className="px-4 py-3">Isento</td>
              <td className="px-4 py-3 text-slate-900 font-bold">
                {formatCurrency(brackets[0].max * 0.075, 'br')}
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[0].max + 0.01, 'br')} até {formatCurrency(brackets[1].max, 'br')}
              </td>
              <td className="px-4 py-3 text-blue-700 font-bold font-sans">9,0%</td>
              <td className="px-4 py-3">{formatCurrency(brackets[1].deduction, 'br')}</td>
              <td className="px-4 py-3 text-slate-900 font-bold">
                {formatCurrency((brackets[1].max - brackets[0].max) * 0.09, 'br')}
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[1].max + 0.01, 'br')} até {formatCurrency(brackets[2].max, 'br')}
              </td>
              <td className="px-4 py-3 text-amber-700 font-bold font-sans">12,0%</td>
              <td className="px-4 py-3">{formatCurrency(brackets[2].deduction, 'br')}</td>
              <td className="px-4 py-3 text-slate-900 font-bold">
                {formatCurrency((brackets[2].max - brackets[1].max) * 0.12, 'br')}
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-4 py-3 font-medium text-slate-900 font-sans">
                De {formatCurrency(brackets[2].max + 0.01, 'br')} até {formatCurrency(brackets[3].max, 'br')} (Teto)
              </td>
              <td className="px-4 py-3 text-purple-700 font-bold font-sans">14,0%</td>
              <td className="px-4 py-3">{formatCurrency(brackets[3].deduction, 'br')}</td>
              <td className="px-4 py-3 text-slate-900 font-bold">
                {formatCurrency((brackets[3].max - brackets[2].max) * 0.14, 'br')}
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-slate-100/70 border-t border-slate-200 text-xs font-sans text-slate-800">
            <tr>
              <td colSpan={3} className="px-4 py-3 font-bold">
                Teto Previdenciário de Contribuição (Desconto Máximo 2026)
              </td>
              <td className="px-4 py-3 font-extrabold text-slate-950 font-mono text-sm">
                R$ 951,64
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="text-xs text-slate-500">
        Fonte oficial: Portaria Interministerial MPS/MF publicada no Diário Oficial da União (DOU).
        Valores vigentes a partir de 1º de janeiro de 2026.
      </p>
    </div>
  );

  return (
    <>
      <JsonLd
        country="br"
        slug="br/tabela-inss"
        type="info"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Tabelas Oficiais', path: '/br/#tabelas' },
          { name: content.h1, path: '/br/tabela-inss/' },
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
