import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { MxFiniquitoCalculator } from '@/components/calculators/MxFiniquitoCalculator';
import { content } from '@/content/mx/finiquito-renuncia-voluntaria';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/calculadora-finiquito/renuncia-voluntaria',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function MxCalculadoraFiniquitoRenunciaVoluntariaPage() {
  return (
    <CountryToolPage
      country="mx"
      slug="mx/calculadora-finiquito/renuncia-voluntaria"
      content={content}
      categoryLabel="Finiquito"
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Finiquito', path: '/mx/calculadora-finiquito/' },
          { name: content.h1, path: '/mx/calculadora-finiquito/renuncia-voluntaria/' },
      ]}
      calculator={<MxFiniquitoCalculator initialReason="renuncia" lockReason pageUrl="https://calcula.zetawala.com/mx/calculadora-finiquito/renuncia-voluntaria/" />}
    />
  );
}
