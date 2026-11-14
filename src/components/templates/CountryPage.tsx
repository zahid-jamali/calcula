import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd, BreadcrumbItem } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { InfoPageTemplate } from '@/components/templates/InfoPageTemplate';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { CountryCode } from '@/config/site';
import { PageContent } from '@/content/types';

interface BaseProps {
  country: CountryCode;
  slug: string;
  content: PageContent;
  breadcrumbs: BreadcrumbItem[];
}

export function CountryToolPage({
  country,
  slug,
  content,
  breadcrumbs,
  calculator,
  banner,
  categoryLabel = 'Laboral',
  category = 'laboral',
}: BaseProps & {
  calculator: React.ReactNode;
  banner?: React.ReactNode;
  categoryLabel?: string;
  category?: string;
}) {
  return (
    <>
      <JsonLd
        country={country}
        slug={slug}
        type="calculator"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={breadcrumbs}
        content={content}
      />
      <Header country={country} />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country={country}
          category={category}
          categoryLabel={categoryLabel}
          content={content}
          calculatorSlot={calculator}
          banner={banner}
        />
      </main>
      <Footer country={country} />
    </>
  );
}

export function CountryInfoPage({
  country,
  slug,
  content,
  breadcrumbs,
  table,
}: BaseProps & { table: React.ReactNode }) {
  return (
    <>
      <JsonLd
        country={country}
        slug={slug}
        type="info"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={breadcrumbs}
        content={content}
      />
      <Header country={country} />
      <main className="flex-1 w-full">
        <InfoPageTemplate country={country} content={content} tableSlot={table} />
      </main>
      <Footer country={country} />
    </>
  );
}

export function CountryGuidePage({ country, slug, content, breadcrumbs }: BaseProps) {
  return (
    <>
      <JsonLd
        country={country}
        slug={slug}
        type="guide"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={breadcrumbs}
        content={content}
      />
      <Header country={country} />
      <main className="flex-1 w-full">
        <GuidePageTemplate country={country} content={content} />
      </main>
      <Footer country={country} />
    </>
  );
}
