import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable } from '@/components/ui/DataTable';
import { content } from '@/content/mx/tabla-de-vacaciones';
import { mx2026 } from '@/rules/mx/2026';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/tabla-de-vacaciones',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxTablaVacacionesPage() {
  const table = (
    <DataTable
      caption="Días de vacaciones por año de servicio (art. 76 LFT, vigente desde 2023)"
      headers={['Años de servicio', 'Días de vacaciones', 'Prima vacacional mínima (días de salario)']}
      numericColumns={[1, 2]}
      rows={mx2026.vacationTable.value.map((r) => [
        r.fromYear === r.toYear ? `${r.fromYear}` : `${r.fromYear} a ${r.toYear}`,
        r.days,
        (r.days * mx2026.primaVacacionalRate.value).toFixed(2),
      ])}
    />
  );

  return (
    <CountryInfoPage
      country="mx"
      slug="mx/tabla-de-vacaciones"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'México', path: '/mx/' },
        { name: 'Tablas', path: '/mx/#impostos' },
        { name: content.h1, path: '/mx/tabla-de-vacaciones/' },
      ]}
    />
  );
}
