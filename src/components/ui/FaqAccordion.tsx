import React from 'react';

export interface FaqItem {
  question?: string;
  answer?: React.ReactNode;
  q?: string;
  a?: React.ReactNode;
  id?: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  defaultOpenIndex?: number;
  className?: string;
}

export function FaqAccordion({
  items,
  title,
  subtitle,
  defaultOpenIndex,
  className = '',
}: FaqAccordionProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, index) => {
          const isDefaultOpen = defaultOpenIndex === index;
          const questionText = item.question || item.q || '';
          const answerContent = item.answer ?? item.a ?? null;

          return (
            <details
              key={item.id || `faq-${index}`}
              open={isDefaultOpen ? true : undefined}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 open:border-brand-200 dark:open:border-brand-800/80"
            >
              <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 min-h-[44px] cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-900 dark:group-hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                <span className="text-base sm:text-lg leading-snug">
                  {questionText}
                </span>

                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-brand-50 dark:group-hover:bg-brand-950 group-hover:text-brand-900 dark:group-hover:text-brand-300 transition-colors"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1">
                <div className="pt-4">{answerContent}</div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
