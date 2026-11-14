import React from 'react';
import Link from 'next/link';

export interface RelatedToolItem {
  title: string;
  description?: string;
  href?: string;
  path?: string;
  badge?: string;
  category?: string;
  icon?: React.ReactNode;
}

export interface RelatedToolsProps {
  tools: RelatedToolItem[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const colStyles = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export function RelatedTools({
  tools,
  title = 'Calculadoras Relacionadas',
  subtitle,
  columns = 3,
  className = '',
}: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section
      aria-label={title}
      className={`w-full ${className}`}
    >
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

      <div className={`grid gap-4 ${colStyles[columns]}`}>
        {tools.map((tool, index) => {
          const destination = tool.href || tool.path || '#';

          return (
            <Link
              key={destination !== '#' ? destination : `${tool.title}-${index}`}
              href={destination}
              className="group relative flex flex-col justify-between p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                {tool.category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {tool.category}
                  </span>
                )}
                {tool.badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-50 text-brand-900 dark:bg-brand-950 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800">
                    {tool.badge}
                  </span>
                )}
              </div>

              <div className="flex items-start gap-3">
                {tool.icon && (
                  <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center text-brand-900 dark:text-brand-300 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-900 dark:group-hover:text-brand-300 transition-colors leading-snug">
                    {tool.title}
                  </h3>
                  {tool.description && (
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {tool.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-900 dark:text-brand-400">
              <span>Calcular agora</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        );
      })}
      </div>
    </section>
  );
}
