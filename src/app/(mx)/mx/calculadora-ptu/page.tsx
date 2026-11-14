import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxPtuCalculator } from '@/components/calculators/MxPtuCalculator';
import { content } from '@/content/mx/calculadora-ptu';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-ptu',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraPtuPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-ptu"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-ptu/' },
      ]}
      calculator={<MxPtuCalculator />}
    />
  );
}
