import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoLiquidacionCalculator } from '@/components/calculators/CoLiquidacionCalculator';
import { content } from '@/content/co/liquidacion-renuncia';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-liquidacion/renuncia',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraLiquidacionRenunciaPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-liquidacion/renuncia"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Liquidación', path: '/co/calculadora-liquidacion/' },
          { name: content.h1, path: '/co/calculadora-liquidacion/renuncia/' },
      ]}
      calculator={<CoLiquidacionCalculator initialReason="renuncia" lockReason pageUrl="https://calcula.zetawala.com/co/calculadora-liquidacion/renuncia/" />}
    />
  );
}
