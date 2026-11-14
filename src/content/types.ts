export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  formula?: string;
  legalArticle?: string;
}

export interface ExampleBreakdownItem {
  item: string;
  amount: string;
  note?: string;
}

export interface WorkedExample {
  title: string;
  scenario: string;
  inputs: Record<string, string>;
  breakdown: ExampleBreakdownItem[];
  total: string;
}

export type ExampleScenario = WorkedExample;

export interface FaqItem {
  q: string;
  a: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export type SourceItem = SourceLink;

export interface RelatedItem {
  title: string;
  path: string;
  description: string;
}

export type RelatedLink = RelatedItem;

export interface PageContent {
  metaTitle: string; // max 60 chars
  metaDescription: string; // max 155 chars
  h1: string;
  quickAnswer: string; // 40-60 words
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
    formula?: string;
    legalArticle?: string;
  }>;
  article: string; // markdown or HTML text with H2/H3
  examples: Array<{
    title: string;
    scenario: string;
    inputs: Record<string, string>;
    breakdown: Array<{
      item: string;
      amount: string;
      note?: string;
    }>;
    total: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  sources: Array<{
    label: string;
    url: string;
  }>;
  relatedTools: Array<{
    title: string;
    path: string;
    description: string;
  }>;
  relatedGuides: Array<{
    title: string;
    path: string;
    description: string;
  }>;
  updatedAt: string;
}
