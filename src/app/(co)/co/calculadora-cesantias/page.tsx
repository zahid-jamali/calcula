import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoCesantiasCalculator } from '@/components/calculators/CoPrestacionesCalculators';
import { content } from '@/content/co/calculadora-cesantias';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-cesantias',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraCesantiasPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-cesantias"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-cesantias/' },
      ]}
      calculator={<CoCesantiasCalculator />}
    />
  );
}
