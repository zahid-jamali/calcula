import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrFgtsCalculator } from '@/components/calculators/BrFgtsCalculator';
import { content as fgtsContent } from '@/content/br/calculadora-fgts';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-fgts',
    title: fgtsContent.metaTitle,
    description: fgtsContent.metaDescription,
  });
}

export default function BrFgtsPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-fgts"
        type="calculator"
        title={fgtsContent.h1}
        description={fgtsContent.metaDescription}
        faqs={fgtsContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Financeiro', path: '/br/#finanzas' },
          { name: fgtsContent.h1, path: '/br/calculadora-fgts/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="finanzas"
          categoryLabel="Financeiro"
          content={fgtsContent}
          calculatorSlot={<BrFgtsCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
