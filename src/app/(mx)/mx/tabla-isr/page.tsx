import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable } from '@/components/ui/DataTable';
import { content } from '@/content/mx/tabla-isr';
import { mx2026 } from '@/rules/mx/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'mx', slug: 'mx/tabla-isr', title: content.metaTitle, description: content.metaDescription });
}

const m = (n: number) => formatCurrency(n, 'mx');

export default function MxTablaIsrPage() {
  const s = mx2026.subsidioEmpleo.value;
  const table = (
    <div className="space-y-6">
      <DataTable
        caption="Tarifa mensual ISR 2026 (art. 96 LISR, Anexo 8 RMF 2026)"
        headers={['Límite inferior', 'Límite superior', 'Cuota fija', '% sobre excedente']}
        numericColumns={[0, 1, 2, 3]}
        rows={mx2026.isrMonthlyTable.value.map((b) => [
          m(b.lower),
          b.upper === null ? 'En adelante' : m(b.upper),
          m(b.fixedFee),
          `${(b.rate * 100).toFixed(2)}%`,
        ])}
      />
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
        <strong>Subsidio para el empleo 2026:</strong> {m(s.monthlyAmount)} mensuales (
        {(s.rateOfMonthlyUma * 100).toFixed(2)}% de la UMA mensual) para ingresos de hasta{' '}
        {m(s.incomeLimitMonthly)}. Se resta del ISR y no genera saldo a favor.
      </div>
    </div>
  );

  return (
    <CountryInfoPage
      country="mx"
      slug="mx/tabla-isr"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'México', path: '/mx/' },
        { name: 'Tablas', path: '/mx/#impostos' },
        { name: content.h1, path: '/mx/tabla-isr/' },
      ]}
    />
  );
}
