import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { CoLiquidacionCalculator } from '@/components/calculators/CoLiquidacionCalculator';
import { content as coLiquidacionContent } from '@/content/co/calculadora-liquidacion';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/calculadora-liquidacion',
    title: coLiquidacionContent.metaTitle,
    description: coLiquidacionContent.metaDescription,
  });
}

export default function CoLiquidacionPage() {
  return (
    <>
      <JsonLd
        country="co"
        slug="co/calculadora-liquidacion"
        type="calculator"
        title={coLiquidacionContent.h1}
        description={coLiquidacionContent.metaDescription}
        faqs={coLiquidacionContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Laboral', path: '/co/#laboral' },
          { name: coLiquidacionContent.h1, path: '/co/calculadora-liquidacion/' },
        ]}
      />
      <Header country="co" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="co"
          category="laboral"
          categoryLabel="Laboral"
          content={coLiquidacionContent}
          calculatorSlot={<CoLiquidacionCalculator />}
        />
      </main>
      <Footer country="co" />
    </>
  );
}
