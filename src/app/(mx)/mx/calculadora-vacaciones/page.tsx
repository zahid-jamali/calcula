import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxVacacionesCalculator } from '@/components/calculators/MxVacacionesCalculator';
import { content } from '@/content/mx/calculadora-vacaciones';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-vacaciones',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraVacacionesPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-vacaciones"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-vacaciones/' },
      ]}
      calculator={<MxVacacionesCalculator />}
    />
  );
}
