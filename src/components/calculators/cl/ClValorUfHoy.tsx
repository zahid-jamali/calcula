'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { ChileIndicatorsData, DEFAULT_INDICATORS, UfHistoryEntry } from '@/lib/cl/indicators';
import { formatCurrency, formatNumber } from '@/lib/format';

export interface ClValorUfHoyProps {
  initialIndicators?: ChileIndicatorsData;
  recentHistory?: UfHistoryEntry[];
}

export function ClValorUfHoy({ initialIndicators, recentHistory = [] }: ClValorUfHoyProps) {
  const [indicators, setIndicators] = useState<ChileIndicatorsData>(
    initialIndicators || DEFAULT_INDICATORS
  );
  const [history, setHistory] = useState<UfHistoryEntry[]>(recentHistory);
  const [amountUf, setAmountUf] = useState<string>('1');
  const [amountClp, setAmountClp] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Client-side re-fetch to ensure fresh data
  useEffect(() => {
    let isCancelled = false;
    fetch('/data/cl-indicators.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: ChileIndicatorsData | null) => {
        if (!isCancelled && data && data.uf?.value) {
          setIndicators(data);
        }
      })
      .catch(() => {
        // use initial
      });

    if (recentHistory.length === 0) {
      fetch('/data/cl-uf-history.json')
        .then((res) => (res.ok ? res.json() : null))
        .then((hist: UfHistoryEntry[] | null) => {
          if (!isCancelled && Array.isArray(hist) && hist.length > 0) {
            setHistory(hist.slice(-45));
          }
        })
        .catch(() => {});
    }

    return () => {
      isCancelled = true;
    };
  }, [recentHistory.length]);

  const todayStr = indicators.uf.date;
  const currentUfValue = indicators.uf.value;

  // Selected date value
  const activeUfValue = useMemo(() => {
    if (!selectedDate || selectedDate === todayStr) {
      return currentUfValue;
    }
    const found = history.find((h) => h.date === selectedDate);
    return found ? found.value : currentUfValue;
  }, [selectedDate, todayStr, currentUfValue, history]);

  // Sync initial CLP based on 1 UF
  useEffect(() => {
    const parsedUf = parseFloat(amountUf.replace(',', '.')) || 0;
    setAmountClp(Math.round(parsedUf * activeUfValue).toString());
  }, [activeUfValue, amountUf]);

  const handleUfChange = (val: string) => {
    setAmountUf(val);
    const num = parseFloat(val.replace(',', '.')) || 0;
    setAmountClp(Math.round(num * activeUfValue).toString());
  };

  const handleClpChange = (val: string) => {
    setAmountClp(val);
    const num = parseFloat(val.replace(/\./g, '').replace(',', '.')) || 0;
    const ufVal = activeUfValue > 0 ? (num / activeUfValue).toFixed(2) : '0';
    setAmountUf(ufVal);
  };

  // Find yesterday's UF and variation
  const { yesterdayVal, diffAmount, diffPercent } = useMemo(() => {
    if (history.length < 2) {
      return { yesterdayVal: currentUfValue, diffAmount: 0, diffPercent: 0 };
    }
    const todayIndex = history.findIndex((h) => h.date === todayStr);
    const prevEntry = todayIndex > 0 ? history[todayIndex - 1] : history[history.length - 2];
    const prev = prevEntry ? prevEntry.value : currentUfValue;
    const diff = currentUfValue - prev;
    const pct = prev > 0 ? (diff / prev) * 100 : 0;
    return {
      yesterdayVal: prev,
      diffAmount: diff,
      diffPercent: pct,
    };
  }, [history, todayStr, currentUfValue]);

  // Future days if published (Chile publishes UF until the 9th of next month)
  const futureDays = useMemo(() => {
    const todayIndex = history.findIndex((h) => h.date === todayStr);
    if (todayIndex >= 0 && todayIndex < history.length - 1) {
      return history.slice(todayIndex + 1, todayIndex + 6);
    }
    return [];
  }, [history, todayStr]);

  // Chart: Last 30 days
  const chartDays = useMemo(() => {
    if (history.length === 0) return [];
    return history.slice(-30);
  }, [history]);

  const chartMetrics = useMemo(() => {
    if (chartDays.length < 2) return null;
    const values = chartDays.map((d) => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const width = 600;
    const height = 160;
    const padding = 20;

    const points = chartDays.map((d, index) => {
      const x = padding + (index / (chartDays.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((d.value - min) / range) * (height - 2 * padding);
      return { x, y, ...d };
    });

    const pathD = points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, '');

    const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${
      height - padding
    } Z`;

    return { points, pathD, areaD, min, max, width, height };
  }, [chartDays]);

  const currentYear = new Date().getFullYear();
  const currentMonthNum = (new Date().getMonth() + 1).toString().padStart(2, '0');

  return (
    <div className="space-y-6">
      {/* Big Hero Card */}
      <div className="bg-gradient-to-br from-brand-blue to-blue-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/30 text-blue-100 border border-blue-400/20">
                Oficial Chile
              </span>
              <span className="text-xs text-blue-200">Fecha: {todayStr}</span>
            </div>
            <p className="text-xs font-medium text-blue-200 uppercase tracking-wider mb-1">
              Unidad de Fomento Hoy
            </p>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              ${formatNumber(currentUfValue, 2, 'cl')}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-blue-100">
                Ayer: <strong>${formatNumber(yesterdayVal, 2, 'cl')}</strong>
              </span>
              <span
                className={`inline-flex items-center font-bold px-2 py-0.5 rounded text-xs ${
                  diffAmount >= 0 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                }`}
              >
                {diffAmount >= 0 ? '▲ +' : '▼ '}
                ${formatNumber(Math.abs(diffAmount), 2, 'cl')} ({diffPercent >= 0 ? '+' : ''}
                {diffPercent.toFixed(3)}%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-xs">
            <div>
              <div className="text-blue-200">UTM {indicators.utm.month}</div>
              <div className="font-bold text-base text-white">
                ${formatNumber(indicators.utm.value, 0, 'cl')}
              </div>
            </div>
            <div>
              <div className="text-blue-200">Dólar Obs.</div>
              <div className="font-bold text-base text-white">
                ${formatNumber(indicators.dolar.value, 2, 'cl')}
              </div>
            </div>
            <div>
              <div className="text-blue-200">Euro</div>
              <div className="font-bold text-base text-white">
                ${formatNumber(indicators.euro.value, 2, 'cl')}
              </div>
            </div>
          </div>
        </div>

        {/* Source citation */}
        <div className="mt-6 pt-4 border-t border-blue-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-blue-200">
          <span>
            Fuente oficial:{' '}
            <a
              href="https://mindicador.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-100 hover:text-white"
            >
              Banco Central de Chile vía mindicador.cl
            </a>
          </span>
          <span className="text-blue-300">Actualización diaria automática 11:00 UTC</span>
        </div>
      </div>

      {/* Converter Section */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🔄</span> Conversor UF a Pesos Chilenos (CLP)
            </h2>
            <p className="text-xs text-slate-500">
              Convierte en ambos sentidos usando la UF de hoy o cualquier fecha histórica.
            </p>
          </div>
          {history.length > 0 && (
            <div className="flex items-center gap-2">
              <label htmlFor="uf-date-picker" className="text-xs font-medium text-slate-600">
                Fecha UF:
              </label>
              <input
                id="uf-date-picker"
                type="date"
                value={selectedDate || todayStr}
                onChange={(e) => setSelectedDate(e.target.value)}
                min="2020-01-01"
                max={history[history.length - 1]?.date || todayStr}
                className="text-xs border border-slate-300 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-brand-blue"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* UF Input */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Monto en UF
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                value={amountUf}
                onChange={(e) => handleUfChange(e.target.value)}
                className="block w-full rounded-md border border-slate-300 px-3 py-2.5 text-xl font-bold text-slate-900 focus:border-brand-blue focus:outline-none"
                placeholder="1"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-semibold text-slate-400">
                UF
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Valor UF aplicado: <strong>${formatNumber(activeUfValue, 2, 'cl')}</strong>
            </p>
          </div>

          {/* CLP Input */}
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
            <label className="block text-xs font-bold text-emerald-900 uppercase mb-1">
              Equivalente en Pesos Chilenos (CLP)
            </label>
            <div className="relative rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm font-semibold text-emerald-700">
                $
              </span>
              <input
                type="text"
                value={amountClp}
                onChange={(e) => handleClpChange(e.target.value)}
                className="block w-full rounded-md border border-emerald-300 pl-8 pr-3 py-2.5 text-xl font-bold text-emerald-950 focus:border-emerald-600 focus:outline-none bg-white"
                placeholder="41330"
              />
            </div>
            <p className="text-xs text-emerald-700 mt-2 font-medium">
              ≈ {formatCurrency(parseFloat(amountClp) || 0, 'cl')}
            </p>
          </div>
        </div>

        {/* Quick presets */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Valores frecuentes:</span>
          {[0.5, 1, 2, 5, 10, 20, 50, 100, 2000, 3000].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handleUfChange(preset.toString())}
              className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors font-medium"
            >
              {preset} UF (${formatNumber(Math.round(preset * activeUfValue), 0, 'cl')})
            </button>
          ))}
        </div>
      </Card>

      {/* 30-Day SVG Chart */}
      {chartMetrics && (
        <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>📈</span> Evolución de la UF en los últimos 30 días
              </h3>
              <p className="text-xs text-slate-500">
                Variación oficial día a día calculada a partir del IPC publicado por el INE.
              </p>
            </div>
            <div className="text-xs text-slate-600 flex gap-4">
              <span>
                Mínimo: <strong>${formatNumber(chartMetrics.min, 2, 'cl')}</strong>
              </span>
              <span>
                Máximo: <strong>${formatNumber(chartMetrics.max, 2, 'cl')}</strong>
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartMetrics.width} ${chartMetrics.height}`}
              className="w-full h-44 text-brand-blue"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ufGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line
                x1="20"
                y1="20"
                x2="580"
                y2="20"
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="80"
                x2="580"
                y2="80"
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="140"
                x2="580"
                y2="140"
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                strokeWidth="1"
              />

              {/* Area */}
              <path d={chartMetrics.areaD} fill="url(#ufGradient)" />

              {/* Line */}
              <path
                d={chartMetrics.pathD}
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* End circle */}
              {chartMetrics.points.length > 0 && (
                <circle
                  cx={chartMetrics.points[chartMetrics.points.length - 1].x}
                  cy={chartMetrics.points[chartMetrics.points.length - 1].y}
                  r="4"
                  fill="#1e40af"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              )}
            </svg>
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 mt-2 px-2">
            <span>{chartDays[0]?.date}</span>
            <span>{chartDays[Math.floor(chartDays.length / 2)]?.date}</span>
            <span>{chartDays[chartDays.length - 1]?.date}</span>
          </div>
        </Card>
      )}

      {/* Next published days if available */}
      {futureDays.length > 0 && (
        <Card className="p-4 sm:p-6 bg-slate-50 border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>📅</span> Valores UF de los próximos días (Ya publicados por el Banco Central)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {futureDays.map((f) => (
              <div key={f.date} className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">{f.date}</div>
                <div className="text-sm font-bold text-brand-blue mt-1">
                  ${formatNumber(f.value, 2, 'cl')}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Programmatic links banner */}
      <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div>
          <span className="font-bold text-slate-800">¿Buscas valores de meses anteriores?</span>
          <p className="text-xs text-slate-600">
            Revisa las tablas históricas completas con el promedio, mínimo y máximo mensual.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/cl/valor-uf/${currentYear}/${currentMonthNum}/`}
            className="px-3 py-1.5 bg-brand-blue hover:bg-blue-700 text-white text-xs font-semibold rounded shadow-sm transition-colors"
          >
            UF Mes Actual
          </Link>
          <Link
            href={`/cl/valor-uf/${currentYear}/`}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold rounded transition-colors"
          >
            Resumen {currentYear}
          </Link>
        </div>
      </div>
    </div>
  );
}
