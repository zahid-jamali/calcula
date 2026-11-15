import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { WhatsAppLinkGenerator } from '@/components/calculators/WhatsAppLinkGenerator';
import { content as waContent } from '@/content/mx/generador-de-link-whatsapp';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/generador-de-link-whatsapp',
    title: waContent.metaTitle,
    description: waContent.metaDescription,
  });
}

export default function MxWhatsAppPage() {
  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/generador-de-link-whatsapp"
        type="calculator"
        title={waContent.h1}
        description={waContent.metaDescription}
        faqs={waContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'México', path: '/mx/' },
          { name: 'Herramientas', path: '/mx/#herramientas' },
          { name: waContent.h1, path: '/mx/generador-de-link-whatsapp/' },
        ]}
      />
      <Header country="mx" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="mx"
          category="geral"
          categoryLabel="Herramientas Útiles"
          content={waContent}
          calculatorSlot={<WhatsAppLinkGenerator country="mx" />}
        />
      </main>
      <Footer country="mx" />
    </>
  );
}
