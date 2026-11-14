import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Navegação estrutural (Breadcrumb)"
      className={`py-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 ${className}`}
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex flex-wrap items-center gap-1.5 sm:gap-2"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 1;

          return (
            <li
              key={`${item.label}-${index}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="inline-flex items-center gap-1.5 sm:gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="hover:text-brand-900 dark:hover:text-brand-300 hover:underline transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded px-1 -mx-1"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  aria-current={isLast ? 'page' : undefined}
                  className={
                    isLast
                      ? 'font-medium text-slate-900 dark:text-slate-100 truncate max-w-[200px] sm:max-w-[320px]'
                      : ''
                  }
                >
                  {item.label}
                </span>
              )}

              <meta itemProp="position" content={String(position)} />

              {!isLast && (
                <span
                  className="text-slate-300 dark:text-slate-600 select-none"
                  aria-hidden="true"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
