import type { Metadata } from 'next';
import { CountryToolPage } from '@/components/templates/CountryPage';
import { CoLiquidacionCalculator } from '@/components/calculators/CoLiquidacionCalculator';
import { content } from '@/content/co/liquidacion-despido-sin-justa-causa';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-liquidacion/despido-sin-justa-causa',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function CoCalculadoraLiquidacionDespidoSinJustaCausaPage() {
  return (
    <CountryToolPage
      country="co"
      slug="co/calculadora-liquidacion/despido-sin-justa-causa"
      content={content}
      breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Liquidación', path: '/co/calculadora-liquidacion/' },
          { name: content.h1, path: '/co/calculadora-liquidacion/despido-sin-justa-causa/' },
      ]}
      calculator={<CoLiquidacionCalculator initialReason="despido_sin_justa_causa" lockReason pageUrl="https://calcula.zetawala.com/co/calculadora-liquidacion/despido-sin-justa-causa/" />}
    />
  );
}
