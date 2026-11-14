import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrFeriasCalculator } from '@/components/calculators/BrFeriasCalculator';
import { content as feriasContent } from '@/content/br/calculadora-ferias';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-ferias',
    title: feriasContent.metaTitle,
    description: feriasContent.metaDescription,
  });
}

export default function BrFeriasPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-ferias"
        type="calculator"
        title={feriasContent.h1}
        description={feriasContent.metaDescription}
        faqs={feriasContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: feriasContent.h1, path: '/br/calculadora-ferias/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={feriasContent}
          calculatorSlot={<BrFeriasCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
