import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoVacacionesCalculator } from '@/components/calculators/CoPrestacionesCalculators';
import { content } from '@/content/co/calculadora-vacaciones';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-vacaciones',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraVacacionesPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-vacaciones"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-vacaciones/' },
      ]}
      calculator={<CoVacacionesCalculator />}
    />
  );
}
