import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxFiniquitoCalculator } from '@/components/calculators/MxFiniquitoCalculator';
import { content } from '@/content/mx/calculadora-finiquito';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-finiquito',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraFiniquitoPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-finiquito"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-finiquito/' },
      ]}
      calculator={<MxFiniquitoCalculator />}
    />
  );
}
