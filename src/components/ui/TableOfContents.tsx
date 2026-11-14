import React from 'react';

export interface TocItem {
  id: string;
  title?: string;
  text?: string;
  level?: number;
}

export interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
  className?: string;
}

export function TableOfContents({
  items,
  title = 'Neste artigo',
  className = '',
}: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Índice de conteúdo"
      className={`bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-slate-100 font-semibold text-sm">
        <svg
          className="w-4 h-4 text-brand-900 dark:text-brand-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <span>{title}</span>
      </div>

      <ul className="space-y-1.5 text-sm">
        {items.map((item) => {
          const isH3 = item.level === 3;

          return (
            <li
              key={item.id}
              className={`${
                isH3
                  ? 'ml-4 pl-3 border-l-2 border-slate-200 dark:border-slate-700'
                  : ''
              }`}
            >
              <a
                href={`#${item.id}`}
                className="group flex items-start py-1 text-slate-600 dark:text-slate-400 hover:text-brand-900 dark:hover:text-brand-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              >
                <span className="text-slate-300 dark:text-slate-600 group-hover:text-brand-500 mr-2 select-none" aria-hidden="true">
                  #
                </span>
                <span className="group-hover:underline leading-snug">
                  {item.title || item.text || item.id}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
