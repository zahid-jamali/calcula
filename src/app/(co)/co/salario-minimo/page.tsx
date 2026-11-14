import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable, StatBox } from '@/components/ui/DataTable';
import { content } from '@/content/co/salario-minimo';
import { co2026 } from '@/rules/co/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'co', slug: 'co/salario-minimo', title: content.metaTitle, description: content.metaDescription });
}

const cop = (n: number) => formatCurrency(n, 'co');

export default function CoSalarioMinimoPage() {
  const smmlv = co2026.smmlv.value;
  const aux = co2026.auxilioTransporte.value;
  const history = [...co2026.smmlvHistory.value].reverse();

  const table = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatBox label="SMMLV 2026" value={cop(smmlv)} hint={`+ auxilio ${cop(aux)} = ${cop(smmlv + aux)}`} tone="emerald" />
        <StatBox label="Salario diario" value={cop(Math.round(smmlv / 30))} tone="blue" />
        <StatBox label="Valor hora (42 h)" value={cop(Math.round(smmlv / 210))} hint="Desde el 15 de julio de 2026 (÷ 210)" tone="purple" />
      </div>
      <DataTable
        caption="Salario mínimo y auxilio de transporte: últimos 10 años"
        headers={['Año', 'SMMLV', 'Auxilio de transporte', 'Total', 'Norma']}
        numericColumns={[1, 2, 3]}
        highlightRow={0}
        rows={history.map((h) => [h.year, cop(h.smmlv), cop(h.auxilio), cop(h.smmlv + h.auxilio), h.decree])}
      />
      <p className="text-xs text-slate-500">
        2026: Decreto 1469 de 2025 suspendido provisionalmente por el Consejo de Estado; el Decreto transitorio 0159 de 2026 mantiene
        el mismo valor mientras se dicta sentencia.
      </p>
    </div>
  );

  return (
    <CountryInfoPage
      country="co"
      slug="co/salario-minimo"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Colombia', path: '/co/' },
        { name: 'Datos oficiales', path: '/co/#impostos' },
        { name: content.h1, path: '/co/salario-minimo/' },
      ]}
    />
  );
}
