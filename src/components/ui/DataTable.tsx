import React from 'react';

export interface DataTableProps {
  caption?: string;
  headers: string[];
  rows: Array<Array<React.ReactNode>>;
  /** Index of the row to highlight (e.g. current year) */
  highlightRow?: number;
  /** Column indexes rendered right-aligned and monospaced */
  numericColumns?: number[];
}

export function DataTable({ caption, headers, rows, highlightRow, numericColumns = [] }: DataTableProps) {
  return (
    <div>
      {caption && <h3 className="text-base font-bold text-slate-900 mb-3">{caption}</h3>}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
            <tr>
              {headers.map((h, i) => (
                <th key={h} scope="col" className={`px-4 py-3 ${numericColumns.includes(i) ? 'text-right' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
            {rows.map((row, r) => (
              <tr key={r} className={r === highlightRow ? 'bg-brand-50 font-semibold' : 'hover:bg-slate-50/50'}>
                {row.map((cell, c) => (
                  <td key={c} className={`px-4 py-3 ${numericColumns.includes(c) ? 'text-right font-mono' : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StatBox({
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
