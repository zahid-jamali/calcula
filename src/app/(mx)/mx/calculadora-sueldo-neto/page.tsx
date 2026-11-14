import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxSueldoNetoCalculator } from '@/components/calculators/MxSueldoNetoCalculator';
import { content } from '@/content/mx/calculadora-sueldo-neto';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-sueldo-neto',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraSueldoNetoPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-sueldo-neto"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-sueldo-neto/' },
      ]}
      calculator={<MxSueldoNetoCalculator />}
    />
  );
}
