import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryGuidePage } from '@/components/templates/CountryPage';
import { MX_GUIDES_MAP } from '@/content/mx/guias';
import { buildMetadata } from '@/lib/seo';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(MX_GUIDES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = MX_GUIDES_MAP[slug];
  if (!guide) return {};
  return buildMetadata({
    country: 'mx',
    slug: `mx/guias/${slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
    type: 'article',
  });
}

export default async function MxGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = MX_GUIDES_MAP[slug];
  if (!guide) notFound();

  return (
    <CountryGuidePage
      country="mx"
      slug={`mx/guias/${slug}`}
      content={guide}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'México', path: '/mx/' },
        { name: 'Guías', path: '/mx/#guias' },
        { name: guide.h1, path: `/mx/guias/${slug}/` },
      ]}
    />
  );
}
