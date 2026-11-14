import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable, StatBox } from '@/components/ui/DataTable';
import { content } from '@/content/mx/salario-minimo';
import { mx2026 } from '@/rules/mx/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/salario-minimo',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

const m = (n: number) => formatCurrency(n, 'mx');
const monthly = (daily: number) => Math.round(daily * 30.4 * 100) / 100;

export default function MxSalarioMinimoPage() {
  const general = mx2026.minimumWageGeneralDaily.value;
  const border = mx2026.minimumWageBorderDaily.value;
  const history = [...mx2026.minimumWageHistory.value].reverse();

  const table = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatBox label="General · diario" value={m(general)} hint={`Mensual (× 30.4): ${m(monthly(general))}`} tone="emerald" />
        <StatBox
          label="Frontera Norte · diario"
          value={m(border)}
          hint={`Mensual (× 30.4): ${m(monthly(border))}`}
          tone="blue"
        />
      </div>
      <DataTable
        caption="Salario mínimo diario en México: últimos 10 años"
        headers={['Año', 'General (diario)', 'General (mensual)', 'Frontera Norte (diario)', 'Publicación']}
        numericColumns={[1, 2, 3]}
        highlightRow={0}
        rows={history.map((h) => [
          h.year,
          m(h.general),
          m(monthly(h.general)),
          h.border ? m(h.border) : '—',
          h.source,
        ])}
      />
      <p className="text-xs text-slate-500">
        La Zona Libre de la Frontera Norte existe desde 2019. Fuente: CONASAMI / Diario Oficial de la Federación.
      </p>
    </div>
  );

  return (
    <CountryInfoPage
      country="mx"
      slug="mx/salario-minimo"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'México', path: '/mx/' },
        { name: 'Tablas', path: '/mx/#impostos' },
        { name: content.h1, path: '/mx/salario-minimo/' },
      ]}
    />
  );
}
