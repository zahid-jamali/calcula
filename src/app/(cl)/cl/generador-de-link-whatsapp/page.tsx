import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { WhatsAppLinkGenerator } from '@/components/calculators/WhatsAppLinkGenerator';
import { content as waContent } from '@/content/cl/generador-de-link-whatsapp';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/generador-de-link-whatsapp',
    title: waContent.metaTitle,
    description: waContent.metaDescription,
  });
}

export default function ClWhatsAppPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/generador-de-link-whatsapp"
        type="calculator"
        title={waContent.h1}
        description={waContent.metaDescription}
        faqs={waContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Herramientas', path: '/cl/#herramientas' },
          { name: waContent.h1, path: '/cl/generador-de-link-whatsapp/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="geral"
          categoryLabel="Herramientas Útiles"
          content={waContent}
          calculatorSlot={<WhatsAppLinkGenerator country="cl" />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
