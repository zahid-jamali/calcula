import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClValorUtm } from '@/components/calculators/cl/ClValorUtm';
import { content as utmContent } from '@/content/cl/valor-utm';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/valor-utm',
    title: utmContent.metaTitle,
    description: utmContent.metaDescription,
  });
}

export default function ClValorUtmPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/valor-utm"
        type="calculator"
        title={utmContent.h1}
        description={utmContent.metaDescription}
        faqs={utmContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Tributario', path: '/cl/#finanzas' },
          { name: utmContent.h1, path: '/cl/valor-utm/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="impostos"
          categoryLabel="Tributario"
          content={utmContent}
          calculatorSlot={<ClValorUtm />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
