import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrRescisaoCalculator } from '@/components/calculators/BrRescisaoCalculator';
import { content as brRescisaoContent } from '@/content/br/calculadora-rescisao';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-rescisao',
    title: brRescisaoContent.metaTitle,
    description: brRescisaoContent.metaDescription,
  });
}

export default function BrRescisaoPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-rescisao"
        type="calculator"
        title={brRescisaoContent.h1}
        description={brRescisaoContent.metaDescription}
        faqs={brRescisaoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Trabalhista', path: '/br/#laboral' },
          { name: brRescisaoContent.h1, path: '/br/calculadora-rescisao/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={brRescisaoContent}
          calculatorSlot={<BrRescisaoCalculator />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
