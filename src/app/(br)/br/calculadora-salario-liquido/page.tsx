import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrSalarioLiquidoCalculator } from '@/components/calculators/BrSalarioLiquidoCalculator';
import { content as salarioLiquidoContent } from '@/content/br/calculadora-salario-liquido';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-salario-liquido',
    title: salarioLiquidoContent.metaTitle,
    description: salarioLiquidoContent.metaDescription,
  });
}

export default function BrSalarioLiquidoPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-salario-liquido"
        type="calculator"
        title={salarioLiquidoContent.h1}
        description={salarioLiquidoContent.metaDescription}
        faqs={salarioLiquidoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: salarioLiquidoContent.h1, path: '/br/calculadora-salario-liquido/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={salarioLiquidoContent}
          calculatorSlot={<BrSalarioLiquidoCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
