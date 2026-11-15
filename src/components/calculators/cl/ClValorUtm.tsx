'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui';
import { getUtmYearTable, convertUtmToClp, convertClpToUtm } from '@/lib/cl/utm';
import { formatNumber } from '@/lib/format';

export interface ClValorUtmProps {
  initialYear?: number;
}

export function ClValorUtm({ initialYear = 2026 }: ClValorUtmProps) {
  const [year, setYear] = useState<number>(initialYear);
  const [utmAmount, setUtmAmount] = useState<string>('1');
  const [clpAmount, setClpAmount] = useState<string>('');

  const tableData = useMemo(() => getUtmYearTable(year), [year]);
  const activeUtm = tableData.currentMonthUtm;

  // Sync initial CLP
  useState(() => {
    setClpAmount(Math.round(convertUtmToClp(1, activeUtm)).toString());
  });

  const handleUtmChange = (val: string) => {
    setUtmAmount(val);
    const num = parseFloat(val.replace(',', '.')) || 0;
    setClpAmount(Math.round(convertUtmToClp(num, activeUtm)).toString());
  };

  const handleClpChange = (val: string) => {
    setClpAmount(val);
    const num = parseFloat(val.replace(/\./g, '').replace(',', '.')) || 0;
    const utmVal = convertClpToUtm(num, activeUtm);
    setUtmAmount(utmVal.toFixed(3));
  };

  const utaValue = activeUtm * 12;

  return (
    <div className="space-y-6">
      {/* Hero Badge Card */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/20">
                Servicio de Impuestos Internos (SII)
              </span>
              <span className="text-xs text-indigo-300">Mes: {tableData.currentMonthName} {year}</span>
            </div>
            <p className="text-xs font-medium text-indigo-200 uppercase tracking-wider mb-1">
              Unidad Tributaria Mensual (UTM)
            </p>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              ${formatNumber(activeUtm, 0, 'cl')}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-indigo-200">
              <span>
                UTA (Unidad Tributaria Anual = 12 UTM):{' '}
                <strong className="text-white">${formatNumber(utaValue, 0, 'cl')}</strong>
              </span>
              <span>
                1,5 UTM (Multa grave tránsito):{' '}
                <strong className="text-white">${formatNumber(Math.round(activeUtm * 1.5), 0, 'cl')}</strong>
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-xs max-w-xs space-y-1.5">
            <div className="font-bold text-white text-sm">¿Para qué se usa la UTM?</div>
            <p className="text-indigo-200 text-[11px] leading-relaxed">
              La UTM se utiliza para calcular los tramos del Impuesto Único de Segunda Categoría (sueldos), multas de los Juzgados de Policía Local, aranceles aduaneros y trámites notariales.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-indigo-800/60 flex items-center justify-between text-xs text-indigo-300">
          <span>Fuente oficial: SII (Servicio de Impuestos Internos)</span>
          <span>Reajuste mensual por IPC</span>
        </div>
      </div>

      {/* Converter */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>🔄</span> Conversor UTM a Pesos Chilenos (CLP)
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Calcula el valor en pesos de cualquier cantidad de UTM usando el valor vigente de{' '}
          <strong>${formatNumber(activeUtm, 0, 'cl')}</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Monto en UTM
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                value={utmAmount}
                onChange={(e) => handleUtmChange(e.target.value)}
                className="block w-full rounded-md border border-slate-300 px-3 py-2 text-xl font-bold text-slate-900 focus:border-indigo-600 focus:outline-none"
                placeholder="1"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-semibold text-slate-400">
                UTM
              </span>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
            <label className="block text-xs font-bold text-indigo-900 uppercase mb-1">
              Monto en Pesos Chilenos (CLP)
            </label>
            <div className="relative rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm font-semibold text-indigo-700">
                $
              </span>
              <input
                type="text"
                value={clpAmount}
                onChange={(e) => handleClpChange(e.target.value)}
                className="block w-full rounded-md border border-indigo-300 pl-8 pr-3 py-2 text-xl font-bold text-indigo-950 focus:border-indigo-600 focus:outline-none bg-white"
                placeholder="72440"
              />
            </div>
          </div>
        </div>

        {/* Fines & common presets */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Multas y trámites habituales:</span>
          {[
            { label: '0.5 UTM (Leve)', val: 0.5 },
            { label: '1.0 UTM (Media)', val: 1 },
            { label: '1.5 UTM (Grave)', val: 1.5 },
            { label: '3.0 UTM (Gravísima)', val: 3 },
            { label: '5.0 UTM', val: 5 },
            { label: '10 UTM', val: 10 },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleUtmChange(item.val.toString())}
              className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors font-medium"
            >
              {item.label}: ${formatNumber(Math.round(item.val * activeUtm), 0, 'cl')}
            </button>
          ))}
        </div>
      </Card>

      {/* Annual Monthly Table */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>📅</span> Tabla Mensual de la UTM en Chile ({year})
            </h3>
            <p className="text-xs text-slate-500">
              Valores oficiales mes a mes publicados por el Servicio de Impuestos Internos (SII).
            </p>
          </div>
          <div className="flex gap-2">
            {[2026, 2025, 2024].map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                className={`text-xs px-3 py-1 rounded font-semibold transition-colors ${
                  year === y
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                <th className="py-2.5 px-3">Mes</th>
                <th className="py-2.5 px-3 text-right">Valor UTM</th>
                <th className="py-2.5 px-3 text-right">Valor UTA (x12)</th>
                <th className="py-2.5 px-3 text-right">Variación Mensual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
              {tableData.months.map((m, idx) => {
                const prev = idx > 0 ? tableData.months[idx - 1].value : null;
                const diff = prev ? m.value - prev : 0;
                const pct = prev ? (diff / prev) * 100 : 0;
                const isCurrent = m.value === activeUtm;
                return (
                  <tr
                    key={m.month}
                    className={`hover:bg-slate-50 transition-colors ${
                      isCurrent ? 'bg-indigo-50/50 font-bold text-indigo-950' : ''
                    }`}
                  >
                    <td className="py-2.5 px-3 flex items-center gap-2">
                      {m.monthName}
                      {isCurrent && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 text-indigo-800">
                          Vigente
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-medium">
                      ${formatNumber(m.value, 0, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-500">
                      ${formatNumber(m.value * 12, 0, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono">
                      {prev ? (
                        <span
                          className={
                            diff >= 0 ? 'text-emerald-600' : 'text-rose-600'
                          }
                        >
                          {diff >= 0 ? '+' : ''}${formatNumber(diff, 0, 'cl')} ({pct.toFixed(2)}%)
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
