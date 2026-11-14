import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrHoraExtraCalculator } from '@/components/calculators/BrHoraExtraCalculator';
import { content as horaExtraContent } from '@/content/br/calculadora-hora-extra';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-hora-extra',
    title: horaExtraContent.metaTitle,
    description: horaExtraContent.metaDescription,
  });
}

export default function BrHoraExtraPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-hora-extra"
        type="calculator"
        title={horaExtraContent.h1}
        description={horaExtraContent.metaDescription}
        faqs={horaExtraContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: horaExtraContent.h1, path: '/br/calculadora-hora-extra/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={horaExtraContent}
          calculatorSlot={<BrHoraExtraCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
