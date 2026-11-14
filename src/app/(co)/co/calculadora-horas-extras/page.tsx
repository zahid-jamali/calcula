import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoHorasExtrasCalculator } from '@/components/calculators/CoHorasExtrasCalculator';
import { content } from '@/content/co/calculadora-horas-extras';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-horas-extras',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraHorasExtrasPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-horas-extras"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-horas-extras/' },
      ]}
      calculator={<CoHorasExtrasCalculator />}
    />
  );
}
