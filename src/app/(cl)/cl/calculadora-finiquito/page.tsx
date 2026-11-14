import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClFiniquitoCalculator } from '@/components/calculators/ClFiniquitoCalculator';
import { content as clFiniquitoContent } from '@/content/cl/calculadora-finiquito';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/calculadora-finiquito',
    title: clFiniquitoContent.metaTitle,
    description: clFiniquitoContent.metaDescription,
  });
}

export default function ClFiniquitoPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/calculadora-finiquito"
        type="calculator"
        title={clFiniquitoContent.h1}
        description={clFiniquitoContent.metaDescription}
        faqs={clFiniquitoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Laboral', path: '/cl/#laboral' },
          { name: clFiniquitoContent.h1, path: '/cl/calculadora-finiquito/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="laboral"
          categoryLabel="Laboral"
          content={clFiniquitoContent}
          calculatorSlot={<ClFiniquitoCalculator />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
