import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable, StatBox } from '@/components/ui/DataTable';
import { content } from '@/content/co/auxilio-de-transporte';
import { co2026 } from '@/rules/co/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/auxilio-de-transporte',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

const cop = (n: number) => formatCurrency(n, 'co');

export default function CoAuxilioPage() {
  const aux = co2026.auxilioTransporte.value;
  const cap = co2026.auxilioMaxSmmlv.value * co2026.smmlv.value;
  const history = [...co2026.smmlvHistory.value].reverse();

  const table = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatBox label="Auxilio mensual 2026" value={cop(aux)} tone="emerald" />
        <StatBox label="Valor diario" value={cop(Math.round(aux / 30))} tone="blue" />
        <StatBox label="Tope de salario (2 SMMLV)" value={cop(cap)} tone="purple" />
      </div>
      <DataTable
        caption="Dónde se incluye el auxilio de transporte"
        headers={['Concepto', '¿Incluye auxilio?']}
        rows={[
          ['Cesantías e intereses', 'Sí (salario ≤ 2 SMMLV)'],
          ['Prima de servicios', 'Sí (salario ≤ 2 SMMLV)'],
          ['Vacaciones', 'No'],
          ['Indemnización por despido', 'No'],
          ['Aportes a salud y pensión', 'No'],
        ]}
      />
      <DataTable
        caption="Historial del auxilio de transporte"
        headers={['Año', 'Auxilio', 'SMMLV']}
        numericColumns={[1, 2]}
        highlightRow={0}
        rows={history.map((h) => [h.year, cop(h.auxilio), cop(h.smmlv)])}
      />
    </div>
  );

  return (
    <CountryInfoPage
      country="co"
      slug="co/auxilio-de-transporte"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Colombia', path: '/co/' },
        { name: 'Datos oficiales', path: '/co/#impostos' },
        { name: content.h1, path: '/co/auxilio-de-transporte/' },
      ]}
    />
  );
}
