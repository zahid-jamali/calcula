import React from 'react';
import { CountryCode } from '@/config/site';

export interface UpdatedBadgeProps {
  date: string | Date;
  country?: CountryCode;
  locale?: string;
  prefix?: string;
  verified?: boolean;
  className?: string;
}

export function UpdatedBadge({
  date,
  country = 'br',
  locale,
  prefix,
  verified = true,
  className = '',
}: UpdatedBadgeProps) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const isoDate = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : String(date);

  // Determine language and default prefix
  const isPortuguese = country === 'br' || locale?.startsWith('pt');
  const resolvedLocale = locale || (isPortuguese ? 'pt-BR' : 'es-MX');
  const defaultPrefix = isPortuguese ? 'Atualizado em' : 'Actualizado el';
  const displayPrefix = prefix !== undefined ? prefix : defaultPrefix;

  // Format date nicely
  let formattedDate = isoDate;
  if (!isNaN(dateObj.getTime())) {
    try {
      formattedDate = new Intl.DateTimeFormat(resolvedLocale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(dateObj);
    } catch {
      formattedDate = isoDate;
    }
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium 
        bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 
        border border-emerald-200/80 dark:border-emerald-800/80 shadow-xs ${className}`}
    >
      {verified ? (
        <svg
          className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ) : (
        <svg
          className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}

      <span>
        {displayPrefix}{' '}
        <time dateTime={isoDate} className="font-semibold text-emerald-900 dark:text-emerald-200">
          {formattedDate}
        </time>
      </span>
    </div>
  );
}
