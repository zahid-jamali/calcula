'use client';

import React from 'react';
import { CountryCode, COUNTRIES } from '@/config/site';
import { PageContent } from '@/content/types';
import {
  Breadcrumbs,
  TableOfContents,
  FaqAccordion,
  RelatedTools,
  AdSlot,
  UpdatedBadge,
} from '@/components/ui';
import { getDictionary } from '@/i18n';

export interface GuidePageTemplateProps {
  country: CountryCode;
  content: PageContent;
}

export function GuidePageTemplate({ country, content }: GuidePageTemplateProps) {
  const dict = getDictionary(country);
  const currentCountry = COUNTRIES[country];

  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: currentCountry.name, href: currentCountry.basePath },
    { label: dict.common.footerSections.guides, href: `${currentCountry.basePath}#guias` },
    { label: content.h1, href: '' },
  ];

  const articleHeaders = React.useMemo(() => {
    const lines = content.article.split('\n');
    const headers: Array<{ id: string; text: string; level: number }> = [];
    for (const line of lines) {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        headers.push({ id, text, level: 2 });
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        headers.push({ id, text, level: 3 });
      }
    }
    return headers;
  }, [content.article]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-6 w-full">
      {/* 1. Breadcrumbs */}
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* 2. H1 */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        {content.h1}
      </h1>

      {/* 3. Quick-answer box */}
      <div className="bg-brand-50 border-l-4 border-brand-900 p-4 rounded-r-xl mb-6 text-slate-800 text-sm sm:text-base leading-relaxed shadow-sm">
        <p className="font-medium">{content.quickAnswer}</p>
      </div>

      {/* Top Ad */}
      <div className="my-6">
        <AdSlot id="ad-guide-top" name="Guide Top Ad" />
      </div>

      {/* 4. Table of Contents & Article Body */}
      <section className="my-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {articleHeaders.length > 0 && (
          <div className="mb-8">
            <TableOfContents items={articleHeaders} title={dict.common.labels.tableOfContents} />
          </div>
        )}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          {content.article.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('## ')) {
              const text = trimmed.replace('## ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <h2 key={index} id={id} className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 mt-6 border-t border-slate-100">
                  {text}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              const text = trimmed.replace('### ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <h3 key={index} id={id} className="text-lg font-bold text-slate-900 mt-4">
                  {text}
                </h3>
              );
            }
            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n- ').map((item) => item.replace(/^- /, ''));
              return (
                <ul key={index} className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-sm sm:text-base leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>
      </section>

      {/* 5. Worked Examples */}
      {content.examples && content.examples.length > 0 && (
        <section className="my-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>💡</span> {dict.common.labels.examples}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.examples.map((ex, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{ex.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{ex.scenario}</p>

                  <div className="bg-white rounded-lg border border-slate-200 p-3 mb-4 text-xs space-y-1">
                    {Object.entries(ex.inputs).map(([k, v]) => (
                      <div key={k} className="flex justify-between text-slate-600">
                        <span>{k}:</span>
                        <span className="font-semibold text-slate-900">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs mb-4">
                    {ex.breakdown.map((b, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-200/50 pb-1">
                        <span className="text-slate-600">{b.item}</span>
                        <span className="font-mono font-medium text-slate-900">{b.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-brand-900">
                  <span>{dict.common.labels.total}:</span>
                  <span className="font-mono text-base">{ex.total}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. FAQ Accordion */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="my-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>❓</span> {dict.common.labels.faq}
          </h2>
          <FaqAccordion items={content.faqs} />
        </section>
      )}

      {/* 7. Related Tools & Guides */}
      <section className="my-8">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          {dict.common.labels.relatedTools}
        </h2>
        <RelatedTools tools={content.relatedTools} />
      </section>

      {content.relatedGuides && content.relatedGuides.length > 0 && (
        <section className="my-8">
          <RelatedTools tools={content.relatedGuides} title={dict.common.labels.relatedGuides} />
        </section>
      )}

      {/* 8. Sources & Disclaimer */}
      <footer className="my-8 border-t border-slate-200 pt-6 text-xs text-slate-500 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <UpdatedBadge date={content.updatedAt} country={country} />
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-700">{dict.common.labels.sources}:</span>
            {content.sources.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-900 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-amber-900 text-xs leading-relaxed">
          <strong className="block font-semibold mb-1">{dict.common.labels.disclaimer}:</strong>
          {dict.common.labels.disclaimerText}
        </div>
      </footer>

      {/* Bottom Ad */}
      <div className="my-6">
        <AdSlot id="ad-guide-bottom" name="Guide Bottom Ad" />
      </div>
    </article>
  );
}
