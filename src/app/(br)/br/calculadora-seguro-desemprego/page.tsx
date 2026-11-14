import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrSeguroDesempregoCalculator } from '@/components/calculators/BrSeguroDesempregoCalculator';
import { content as seguroDesempregoContent } from '@/content/br/calculadora-seguro-desemprego';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-seguro-desemprego',
    title: seguroDesempregoContent.metaTitle,
    description: seguroDesempregoContent.metaDescription,
  });
}

export default function BrSeguroDesempregoPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-seguro-desemprego"
        type="calculator"
        title={seguroDesempregoContent.h1}
        description={seguroDesempregoContent.metaDescription}
        faqs={seguroDesempregoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: seguroDesempregoContent.h1, path: '/br/calculadora-seguro-desemprego/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={seguroDesempregoContent}
          calculatorSlot={<BrSeguroDesempregoCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
