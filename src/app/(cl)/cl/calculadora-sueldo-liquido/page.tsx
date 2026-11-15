import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClSueldoLiquidoCalculator } from '@/components/calculators/cl/ClSueldoLiquidoCalculator';
import { content as sueldoContent } from '@/content/cl/calculadora-sueldo-liquido';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/calculadora-sueldo-liquido',
    title: sueldoContent.metaTitle,
    description: sueldoContent.metaDescription,
  });
}

export default function ClSueldoLiquidoPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/calculadora-sueldo-liquido"
        type="calculator"
        title={sueldoContent.h1}
        description={sueldoContent.metaDescription}
        faqs={sueldoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Laboral', path: '/cl/#laboral' },
          { name: sueldoContent.h1, path: '/cl/calculadora-sueldo-liquido/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="laboral"
          categoryLabel="Laboral"
          content={sueldoContent}
          calculatorSlot={<ClSueldoLiquidoCalculator />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
