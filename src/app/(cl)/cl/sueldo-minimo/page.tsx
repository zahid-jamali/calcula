import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable, StatBox } from '@/components/ui/DataTable';
import { content } from '@/content/cl/sueldo-minimo';
import { cl2026 } from '@/rules/cl/2026';
import { formatCurrency } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/sueldo-minimo',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

const clp = (n: number) => formatCurrency(n, 'cl');

export default function ClSueldoMinimoPage() {
  const imm = cl2026.ingresoMinimoMensual.value;
  const history = cl2026.sueldoMinimoHistory.value;
  const topeGratificacion = Math.round((4.75 * imm) / 12);

  const table = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatBox
          label="Sueldo Mínimo 2026"
          value={clp(imm)}
          hint="Jornada ordinaria (40 horas)"
          tone="emerald"
        />
        <StatBox
          label="Valor Día (30 días)"
          value={clp(Math.round(imm / 30))}
          tone="blue"
        />
        <StatBox
          label="Tope Gratificación Art. 50"
          value={clp(topeGratificacion)}
          hint="4,75 IMM al año (÷ 12 meses)"
          tone="purple"
        />
      </div>

      <DataTable
        caption="Evolución del Ingreso Mínimo Mensual en Chile (Últimos 10 años)"
        headers={['Año', 'Monto Bruto', 'Vigencia', 'Norma Legal']}
        numericColumns={[1]}
        highlightRow={0}
        rows={history.map((h) => [
          h.year.toString(),
          clp(h.value),
          h.effectiveDate,
          h.law,
        ])}
      />
      <p className="text-xs text-slate-500">
        Fuente oficial: Biblioteca del Congreso Nacional de Chile (Ley Nº 21.578 y leyes periódicas de reajuste).
      </p>
    </div>
  );

  return (
    <CountryInfoPage
      country="cl"
      slug="cl/sueldo-minimo"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Chile', path: '/cl/' },
        { name: 'Datos oficiales', path: '/cl/#laboral' },
        { name: 'Sueldo Mínimo 2026', path: '/cl/sueldo-minimo/' },
      ]}
    />
  );
}
