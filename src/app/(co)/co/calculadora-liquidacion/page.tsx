import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoLiquidacionCalculator } from '@/components/calculators/CoLiquidacionCalculator';
import { content } from '@/content/co/calculadora-liquidacion';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-liquidacion',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraLiquidacionPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-liquidacion"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-liquidacion/' },
      ]}
      calculator={<CoLiquidacionCalculator />}
    />
  );
}
