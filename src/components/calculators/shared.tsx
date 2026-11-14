'use client';

import React, { useEffect, useState } from 'react';
import { CopyButton, WhatsAppShareButton, PrintButton } from '@/components/ui';

/** ISO date (YYYY-MM-DD) for today's local date. */
export function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * State initialised with a static fallback (safe for static export / hydration)
 * and replaced with today's date once mounted on the client.
 */
export function useTodayState(fallback: string): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState(fallback);
  useEffect(() => {
    setValue(todayIso());
  }, []);
  return [value, setValue];
}

export function ShareActions({ text, printLabel = 'Imprimir resultado' }: { text: string; printLabel?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <CopyButton text={text} label="Copiar resultado" />
      <WhatsAppShareButton text={text} label="Compartir en WhatsApp" />
      <PrintButton label={printLabel} />
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  tone = 'slate',
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: 'slate' | 'emerald' | 'blue' | 'amber' | 'purple';
}) {
  const tones: Record<string, string> = {
    slate: 'border-slate-200 bg-white text-slate-900',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-950',
    blue: 'border-blue-200 bg-blue-50 text-blue-950',
    amber: 'border-amber-200 bg-amber-50 text-amber-950',
    purple: 'border-purple-200 bg-purple-50 text-purple-950',
  };
  return (
    <div className={`p-4 rounded-xl border ${tones[tone]}`}>
      <p className="text-xs font-bold uppercase tracking-wider opacity-80">{label}</p>
      <p className="text-2xl font-black mt-1">{value}</p>
      {hint && <p className="text-xs mt-1 opacity-80">{hint}</p>}
    </div>
  );
}
