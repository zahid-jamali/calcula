import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxSdiCalculator } from '@/components/calculators/MxSdiCalculator';
import { content } from '@/content/mx/calculadora-salario-diario-integrado';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-salario-diario-integrado',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraSalarioDiarioIntegradoPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-salario-diario-integrado"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-salario-diario-integrado/' },
      ]}
      calculator={<MxSdiCalculator />}
    />
  );
}
