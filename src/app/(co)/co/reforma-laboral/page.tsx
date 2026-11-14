import type { Metadata } from 'next';
import { CountryInfoPage } from '@/components/templates/CountryPage';
import { DataTable } from '@/components/ui/DataTable';
import { content } from '@/content/co/reforma-laboral';
import { co2026 } from '@/rules/co/2026';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({ country: 'co', slug: 'co/reforma-laboral', title: content.metaTitle, description: content.metaDescription });
}

const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(y, m - 1, d))
  );
};

export default function CoReformaLaboralPage() {
  const today = co2026.reformaTimeline.value;
  const table = (
    <DataTable
      caption="Calendario de vigencias: jornada y recargos"
      headers={['Fecha', 'Cambio', 'Detalle', 'Norma']}
      rows={today.map((t) => [fmtDate(t.date), t.title, t.detail, t.law])}
    />
  );

  return (
    <CountryInfoPage
      country="co"
      slug="co/reforma-laboral"
      content={content}
      table={table}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Colombia', path: '/co/' },
        { name: 'Datos oficiales', path: '/co/#impostos' },
        { name: content.h1, path: '/co/reforma-laboral/' },
      ]}
    />
  );
}
