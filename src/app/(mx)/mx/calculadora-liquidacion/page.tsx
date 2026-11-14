import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxFiniquitoCalculator } from '@/components/calculators/MxFiniquitoCalculator';
import { content } from '@/content/mx/calculadora-liquidacion';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-liquidacion',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraLiquidacionPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-liquidacion"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-liquidacion/' },
      ]}
      calculator={<MxFiniquitoCalculator initialReason="despido_injustificado" lockReason pageUrl="https://calcula.zetawala.com/mx/calculadora-liquidacion/" />}
    />
  );
}
