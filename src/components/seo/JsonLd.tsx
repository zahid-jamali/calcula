import React from 'react';
import { SITE_CONFIG, CountryCode, COUNTRIES } from '@/config/site';
import { FaqItem, PageContent } from '@/content/types';
import { buildCanonicalUrl } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface JsonLdArticleProps {
  headline?: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export interface JsonLdWebAppProps {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  price?: string | number;
  currency?: string;
}

export interface JsonLdProps {
  country?: CountryCode;
  slug?: string;
  type?: 'calculator' | 'guide' | 'website' | 'info';
  title?: string;
  description?: string;
  faqs?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
  article?: JsonLdArticleProps;
  webApplication?: JsonLdWebAppProps;
  content?: PageContent;
  datePublished?: string;
  dateModified?: string;
  includeWebApplication?: boolean;
  includeArticle?: boolean;
}

/**
 * Builds standard Schema.org structured data graph for Calcula pages.
 */
export function buildJsonLdData(props: JsonLdProps) {
  const {
    country,
    slug = '',
    type,
    breadcrumbs,
    article,
    webApplication,
    content,
  } = props;

  const canonicalUrl = buildCanonicalUrl(slug, country);
  const inLanguage = country ? COUNTRIES[country]?.lang : 'es';

  const effectiveTitle =
    props.title || content?.metaTitle || content?.h1 || SITE_CONFIG.name;
  const effectiveDescription =
    props.description ||
    content?.metaDescription ||
    (country ? COUNTRIES[country]?.tagline : 'Calculadoras gratuitas y precisas.');

  const effectiveDatePublished =
    props.datePublished || article?.datePublished || '2026-01-01';
  const effectiveDateModified =
    props.dateModified ||
    content?.updatedAt ||
    article?.dateModified ||
    '2026-01-01';

  // 1. Organization & Parent Organization (Zetawala)
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.baseUrl}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.baseUrl}/images/calcula-logo.png`,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: SITE_CONFIG.parentBrand.name,
      url: SITE_CONFIG.parentBrand.url,
      logo: `${SITE_CONFIG.baseUrl}/images/zetawala-logo.png`,
    },
  };

  // 2. WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.baseUrl}/#website`,
    url: SITE_CONFIG.baseUrl,
    name: SITE_CONFIG.name,
    inLanguage: country ? COUNTRIES[country]?.lang : ['pt-BR', 'es-MX', 'es-CO', 'es-CL'],
    publisher: {
      '@id': `${SITE_CONFIG.baseUrl}/#organization`,
    },
  };

  const graph: any[] = [organizationSchema, websiteSchema];

  // 3. WebApplication Schema (applicationCategory: "FinanceApplication", operatingSystem: "Any", price 0)
  const isCalculatorPage =
    type === 'calculator' ||
    props.includeWebApplication === true ||
    (props.includeWebApplication !== false &&
      (slug.includes('calculadora') || !!webApplication || type !== 'guide'));

  if (isCalculatorPage) {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${canonicalUrl}#webapp`,
      url: canonicalUrl,
      name: webApplication?.name || effectiveTitle,
      description: webApplication?.description || effectiveDescription,
      applicationCategory:
        webApplication?.applicationCategory || 'FinanceApplication',
      operatingSystem: webApplication?.operatingSystem || 'Any',
      inLanguage,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency:
          webApplication?.currency ||
          (country ? COUNTRIES[country]?.currency : 'USD'),
      },
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
    });
  }

  // 4. BreadcrumbList Schema
  let resolvedCrumbs: BreadcrumbItem[] = [];
  if (breadcrumbs && breadcrumbs.length > 0) {
    resolvedCrumbs = breadcrumbs;
  } else {
    // Generate default hierarchy: Home -> [Country] -> Page
    resolvedCrumbs.push({ name: 'Calcula', path: '/' });
    if (country && COUNTRIES[country]) {
      resolvedCrumbs.push({
        name: COUNTRIES[country].name,
        path: `/${country}/`,
      });
    }
    const clean = slug.replace(/^\/+|\/+$/g, '');
    if (clean && clean !== country) {
      resolvedCrumbs.push({
        name: effectiveTitle,
        path: `/${clean}/`,
      });
    }
  }

  if (resolvedCrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumbs`,
      itemListElement: resolvedCrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path.startsWith('http')
          ? crumb.path
          : `${SITE_CONFIG.baseUrl}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`,
      })),
    });
  }

  // 5. FAQPage Schema
  const effectiveFaqs = props.faqs || content?.faqs;
  if (effectiveFaqs && effectiveFaqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: effectiveFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  // 6. Article Schema
  const hasArticle =
    type === 'guide' ||
    type === 'info' ||
    props.includeArticle === true ||
    !!article ||
    !!content?.article;

  if (hasArticle) {
    graph.push({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: article?.headline || content?.h1 || effectiveTitle,
      description:
        article?.description || content?.metaDescription || effectiveDescription,
      inLanguage,
      datePublished: effectiveDatePublished,
      dateModified: effectiveDateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      author: {
        '@id': `${SITE_CONFIG.baseUrl}/#organization`,
      },
      publisher: {
        '@id': `${SITE_CONFIG.baseUrl}/#organization`,
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function JsonLd(props: JsonLdProps) {
  const structuredData = buildJsonLdData(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
