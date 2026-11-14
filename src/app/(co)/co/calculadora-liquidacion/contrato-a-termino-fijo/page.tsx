import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoLiquidacionCalculator } from '@/components/calculators/CoLiquidacionCalculator';
import { content } from '@/content/co/liquidacion-contrato-a-termino-fijo';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-liquidacion/contrato-a-termino-fijo',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraLiquidacionContratoATerminoFijoPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-liquidacion/contrato-a-termino-fijo"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Liquidación', path: '/co/calculadora-liquidacion/' },
          { name: content.h1, path: '/co/calculadora-liquidacion/contrato-a-termino-fijo/' },
      ]}
      calculator={<CoLiquidacionCalculator initialContract="fijo" lockContract initialReason="despido_sin_justa_causa" pageUrl="https://calcula.zetawala.com/co/calculadora-liquidacion/contrato-a-termino-fijo/" />}
    />
  );
}
