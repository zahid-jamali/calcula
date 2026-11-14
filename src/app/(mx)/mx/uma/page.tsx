import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable, StatBox } from '@/components/ui/DataTable';
import { content } from '@/content/mx/uma';
import { mx2026 } from '@/rules/mx/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'mx', slug: 'mx/uma', title: content.metaTitle, description: content.metaDescription });
}

const m = (n: number) => formatCurrency(n, 'mx');
const r2 = (n: number) => Math.round(n * 100) / 100;

export default function MxUmaPage() {
  const current = mx2026.uma.value[mx2026.uma.value.length - 1].value;
  const ex = mx2026.isrExemptions.value;
  const imss = mx2026.imssEmployee.value;
  const history = [...mx2026.umaHistory.value].reverse();

  const table = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatBox label="UMA diaria 2026" value={m(current.daily)} hint="Vigente desde el 1 de febrero de 2026" tone="emerald" />
        <StatBox label="UMA mensual" value={m(current.monthly)} tone="blue" />
        <StatBox label="UMA anual" value={m(current.annual)} tone="purple" />
      </div>
      <DataTable
        caption="Topes y exenciones laborales medidos en UMA (2026)"
        headers={['Concepto', 'Veces UMA', 'Monto 2026']}
        numericColumns={[1, 2]}
        rows={[
          ['Aguinaldo exento de ISR', ex.aguinaldoUma, m(r2(ex.aguinaldoUma * current.daily))],
          ['Prima vacacional exenta', ex.primaVacacionalUma, m(r2(ex.primaVacacionalUma * current.daily))],
          ['PTU exenta', ex.ptuUma, m(r2(ex.ptuUma * current.daily))],
          ['Pagos por separación exentos, por año de servicio', ex.separationUmaPerYear, m(r2(ex.separationUmaPerYear * current.daily))],
          ['Tope del salario base de cotización IMSS (diario)', imss.sbcCapUma, m(r2(imss.sbcCapUma * current.daily))],
          ['Umbral de la cuota de excedente IMSS (diario)', imss.excedenteThresholdUma, m(r2(imss.excedenteThresholdUma * current.daily))],
        ]}
      />
      <DataTable
        caption="Historial de la UMA"
        headers={['Año', 'Diaria', 'Mensual', 'Anual']}
        numericColumns={[1, 2, 3]}
        highlightRow={0}
        rows={history.map((h) => [h.year, m(h.daily), m(h.monthly), m(h.annual)])}
      />
    </div>
  );

  return (
    <CountryInfoPage
      country="mx"
      slug="mx/uma"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'México', path: '/mx/' },
        { name: 'Tablas', path: '/mx/#impostos' },
        { name: content.h1, path: '/mx/uma/' },
      ]}
    />
  );
}
