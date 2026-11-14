import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrDecimoTerceiroCalculator } from '@/components/calculators/BrDecimoTerceiroCalculator';
import { content as decimoTerceiroContent } from '@/content/br/calculadora-13-salario';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-13-salario',
    title: decimoTerceiroContent.metaTitle,
    description: decimoTerceiroContent.metaDescription,
  });
}

export default function BrDecimoTerceiroPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-13-salario"
        type="calculator"
        title={decimoTerceiroContent.h1}
        description={decimoTerceiroContent.metaDescription}
        faqs={decimoTerceiroContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: decimoTerceiroContent.h1, path: '/br/calculadora-13-salario/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={decimoTerceiroContent}
          calculatorSlot={<BrDecimoTerceiroCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
