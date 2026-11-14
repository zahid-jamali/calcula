import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoSalarioNetoCalculator } from '@/components/calculators/CoSalarioNetoCalculator';
import { content } from '@/content/co/calculadora-salario-neto';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-salario-neto',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraSalarioNetoPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-salario-neto"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-salario-neto/' },
      ]}
      calculator={<CoSalarioNetoCalculator />}
    />
  );
}
