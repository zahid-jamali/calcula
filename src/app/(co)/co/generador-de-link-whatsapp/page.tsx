import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { WhatsAppLinkGenerator } from '@/components/calculators/WhatsAppLinkGenerator';
import { content as waContent } from '@/content/co/generador-de-link-whatsapp';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'co',
    slug: 'co/generador-de-link-whatsapp',
    title: waContent.metaTitle,
    description: waContent.metaDescription,
  });
}

export default function CoWhatsAppPage() {
  return (
    <>
      <JsonLd
        country="co"
        slug="co/generador-de-link-whatsapp"
        type="calculator"
        title={waContent.h1}
        description={waContent.metaDescription}
        faqs={waContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Colombia', path: '/co/' },
          { name: 'Herramientas', path: '/co/#herramientas' },
          { name: waContent.h1, path: '/co/generador-de-link-whatsapp/' },
        ]}
      />
      <Header country="co" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="co"
          category="geral"
          categoryLabel="Herramientas Útiles"
          content={waContent}
          calculatorSlot={<WhatsAppLinkGenerator country="co" />}
        />
      </main>
      <Footer country="co" />
    </>
  );
}
