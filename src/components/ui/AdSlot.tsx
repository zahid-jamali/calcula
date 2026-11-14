import React from 'react';

export interface AdSlotProps {
  id?: string;
  slotId?: string;
  name?: string;
  slotName?: string;
  adClient?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  minHeight?: string;
  className?: string;
  showPlaceholderInDev?: boolean;
}

export function AdSlot({
  id,
  slotId: explicitSlotId,
  name,
  slotName: explicitSlotName,
  adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
  format = 'auto',
  responsive = true,
  minHeight = '280px',
  className = '',
  showPlaceholderInDev = true,
}: AdSlotProps) {
  const slotId = explicitSlotId || id;
  const slotName = explicitSlotName || name || 'Anúncio';
  const isDev = process.env.NODE_ENV !== 'production';

  // In development (or before ad client is configured), render a reserved placeholder to prevent CLS
  if (isDev || !adClient || !slotId) {
    if (!showPlaceholderInDev && !slotId) {
      return (
        <div
          className={`ad-slot w-full select-none ${className}`}
          style={{ minHeight }}
          aria-hidden="true"
        />
      );
    }

    return (
      <div
        className={`ad-slot w-full flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-center select-none ${className}`}
        style={{ minHeight }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.14 2.14a1.5 1.5 0 002.12 0l3.74-3.74"
            />
          </svg>
          <span>{slotName}</span>
        </div>
        <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
          Espaço Reservado ({minHeight}) · Sem impacto de CLS
        </p>
      </div>
    );
  }

  return (
    <div
      className={`ad-slot w-full overflow-hidden flex items-center justify-center text-center ${className}`}
      style={{ minHeight }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight }}
        data-ad-client={adClient}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
