import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxAguinaldoCalculator } from '@/components/calculators/MxAguinaldoCalculator';
import { DeadlineBanner } from '@/components/ui/DeadlineBanner';
import { content } from '@/content/mx/calculadora-aguinaldo';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-aguinaldo',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraAguinaldoPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-aguinaldo"
      content={content}
      categoryLabel="Laboral"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Laboral', path: '/mx/#laboral' },
          { name: content.h1, path: '/mx/calculadora-aguinaldo/' },
      ]}
      calculator={<MxAguinaldoCalculator />}
      banner={
        <DeadlineBanner
          deadlines={[{ month: 12, day: 19, label: 'Último día para pagar el aguinaldo' }]}
          legalBasis="Debe pagarse antes del 20 de diciembre (art. 87 LFT)."
          locale="es-MX"
        />
      }
    />
  );
}
