import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoPrimaCalculator } from '@/components/calculators/CoPrestacionesCalculators';
import { DeadlineBanner } from '@/components/ui/DeadlineBanner';
import { content } from '@/content/co/calculadora-prima';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-prima',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraPrimaPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-prima"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: content.h1, path: '/co/calculadora-prima/' },
      ]}
      calculator={<CoPrimaCalculator />}
      banner={
        <DeadlineBanner
          deadlines={[
            { month: 6, day: 30, label: 'Pago de la primera prima' },
            { month: 12, day: 20, label: 'Pago de la segunda prima' },
          ]}
          legalBasis="Art. 306 del Código Sustantivo del Trabajo."
          locale="es-CO"
        />
      }
    />
  );
}
