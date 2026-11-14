'use client';

import React, { useEffect, useState } from 'react';
import { AnnualDeadline, UpcomingDeadline, getUpcomingDeadline } from '@/lib/deadlines';

export interface DeadlineBannerProps {
  deadlines: AnnualDeadline[];
  /** Legal basis shown in the banner, e.g. "Art. 87 LFT" */
  legalBasis: string;
  windowDays?: number;
  locale?: string;
}

/**
 * Seasonal callout with the legal payment deadline. It is computed on the client
 * (the site is statically exported) and only renders when the deadline is within the window.
 */
export function DeadlineBanner({ deadlines, legalBasis, windowDays = 60, locale = 'es-MX' }: DeadlineBannerProps) {
  const [upcoming, setUpcoming] = useState<UpcomingDeadline | null>(null);

  useEffect(() => {
    setUpcoming(getUpcomingDeadline(deadlines, new Date(), windowDays));
  }, [deadlines, windowDays]);

  if (!upcoming) return null;

  const [y, m, d] = upcoming.date.split('-').map(Number);
  const dateLabel = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, d)));

  const when =
    upcoming.daysLeft === 0
      ? 'vence hoy'
      : upcoming.daysLeft === 1
      ? 'vence mañana'
      : `faltan ${upcoming.daysLeft} días`;

  return (
    <div
      role="status"
      className="mb-6 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 shadow-sm"
    >
      <span className="text-xl leading-none" aria-hidden="true">
        📅
      </span>
      <p className="text-sm leading-relaxed">
        <strong>{upcoming.label}:</strong> la fecha límite legal es el <strong>{dateLabel}</strong> ({when}).{' '}
        <span className="text-amber-800">{legalBasis}</span>
      </p>
    </div>
  );
}
