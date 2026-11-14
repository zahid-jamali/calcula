import { describe, it, expect } from 'vitest';
import { PageContent } from './types';

/** Counts words of the article body (markdown markers excluded). */
export function articleWordCount(article: string): number {
  return article
    .replace(/^#+\s/gm, '')
    .split(/\s+/)
    .filter(Boolean).length;
}

/**
 * Shared content validation used by every country's content test:
 * SEO limits, quick answer length, 800-1,200 word article with H2s,
 * 2+ worked examples, 8-10 FAQs, sources, internal links and updatedAt.
 */
export function validateContentPages(
  label: string,
  pages: Record<string, PageContent>,
  { pathPrefix, minWords = 800, maxWords = 1200 }: { pathPrefix: string; minWords?: number; maxWords?: number }
) {
  describe(label, () => {
    for (const [name, page] of Object.entries(pages)) {
      describe(`Page: ${name}`, () => {
        it('metaTitle ≤ 60 and metaDescription ≤ 155 characters', () => {
          expect(page.metaTitle.length).toBeLessThanOrEqual(60);
          expect(page.metaTitle.length).toBeGreaterThan(10);
          expect(page.metaDescription.length).toBeLessThanOrEqual(155);
          expect(page.metaDescription.length).toBeGreaterThan(50);
        });

        it('quickAnswer has 40-60 words', () => {
          const words = page.quickAnswer.trim().split(/\s+/).length;
          expect(words).toBeGreaterThanOrEqual(40);
          expect(words).toBeLessThanOrEqual(60);
        });

        it('howItWorks has 3+ numbered steps', () => {
          expect(page.howItWorks.length).toBeGreaterThanOrEqual(3);
          page.howItWorks.forEach((s, i) => expect(s.step).toBe(i + 1));
        });

        it(`article has ${minWords}-${maxWords} words and H2 headings`, () => {
          const words = articleWordCount(page.article);
          expect(words).toBeGreaterThanOrEqual(minWords);
          expect(words).toBeLessThanOrEqual(maxWords);
          expect((page.article.match(/^## /gm) || []).length).toBeGreaterThanOrEqual(4);
        });

        it('has 2+ worked examples with breakdown and total', () => {
          expect(page.examples.length).toBeGreaterThanOrEqual(2);
          page.examples.forEach((ex) => {
            expect(ex.breakdown.length).toBeGreaterThan(0);
            expect(ex.total.trim().length).toBeGreaterThan(0);
          });
        });

        it('has 8-10 FAQs', () => {
          expect(page.faqs.length).toBeGreaterThanOrEqual(8);
          expect(page.faqs.length).toBeLessThanOrEqual(10);
        });

        it('has official sources with https/http URLs', () => {
          expect(page.sources.length).toBeGreaterThanOrEqual(2);
          page.sources.forEach((s) => expect(s.url).toMatch(/^https?:\/\//));
        });

        it('internal links stay inside the country section and end with a slash', () => {
          expect(page.relatedTools.length).toBeGreaterThanOrEqual(2);
          expect(page.relatedGuides.length).toBeGreaterThanOrEqual(2);
          [...page.relatedTools, ...page.relatedGuides].forEach((l) => {
            expect(l.path.startsWith(pathPrefix)).toBe(true);
            expect(l.path.endsWith('/')).toBe(true);
          });
        });

        it('updatedAt is an ISO date in 2026', () => {
          expect(page.updatedAt).toMatch(/^2026-\d{2}-\d{2}$/);
        });
      });
    }
  });
}
