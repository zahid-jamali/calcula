'use client';

import React, { useState } from 'react';
import {
  Card,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateArriendoUf } from '@/lib/cl/arriendoUf';
import { formatCurrency, formatNumber } from '@/lib/format';

export function ClArriendoUfCalculator() {
  const [rentUf, setRentUf] = useState<number>(15.5);
  const [dayOfMonth, setDayOfMonth] = useState<number>(5);

  const result = calculateArriendoUf({
    rentUf,
    dayOfMonth,
  });

  const shareText = `Cálculo de Arriendo en UF Chile 2026 en Calcula:
Canon de Arriendo: ${rentUf} UF
Valor UF aplicada: ${formatCurrency(result.selectedUfValue, 'cl')}
Pago de este mes en pesos: ${formatCurrency(result.currentRentPesos, 'cl')}
Total proyectado en el año: ${formatCurrency(result.twelveMonthsTotalPesos, 'cl')}
Calcula gratis en: https://calcula.zetawala.com/cl/calculadora-arriendo-uf/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏠</span> Parámetros del Contrato de Arriendo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Canon Mensual de Arriendo en UF
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="0.1"
                min="1"
                max="500"
                value={rentUf}
                onChange={(e) => setRentUf(parseFloat(e.target.value) || 0)}
                className="block w-full rounded-md border border-slate-300 px-3 py-2 text-base font-bold text-slate-900 focus:border-brand-blue focus:outline-none"
                placeholder="15.5"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-semibold text-slate-400">
                UF
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Monto en UF pactado en tu contrato de arriendo.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Día habitual de pago del mes
            </label>
            <select
              value={dayOfMonth}
              onChange={(e) => setDayOfMonth(parseInt(e.target.value) || 5)}
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none bg-white"
            >
              {[1, 5, 10, 15, 20, 25, 30].map((d) => (
                <option key={d} value={d}>
                  Día {d} de cada mes
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Se utiliza la UF oficial de ese día específico de pago.
            </p>
          </div>
        </div>
      </Card>

      {/* Main Result */}
      <ResultSummary
        title="Monto a Pagar Este Mes"
        totalAmount={result.currentRentPesos}
        currencySymbol="$"
        country="cl"
        items={[
          { label: 'Valor UF del arriendo pactado', amount: result.rentUf },
          { label: 'Valor UF aplicada del día', amount: result.selectedUfValue },
          { label: 'Promedio mensual estimado del año', amount: result.annualAverageRentPesos },
          { label: 'Gasto total anual proyectado (12 meses)', amount: result.twelveMonthsTotalPesos },
        ]}
      />

      {/* 12-Month Table */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>📅</span> Proyección y Evolución del Arriendo (Últimos 12 Meses)
            </h3>
            <p className="text-xs text-slate-500">
              Valor exacto en pesos cobrado cada mes conforme al valor histórico oficial de la UF.
            </p>
          </div>
          <div className="text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
            Reajuste anual acumulado: <strong>+{result.oneYearInflationPercent.toFixed(2)}%</strong> (+
            {formatCurrency(result.oneYearInflationPesos, 'cl')})
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                <th className="py-2.5 px-3">Mes y Año</th>
                <th className="py-2.5 px-3 text-right">Valor UF del Día</th>
                <th className="py-2.5 px-3 text-right">Arriendo en Pesos</th>
                <th className="py-2.5 px-3 text-right">Variación Mensual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
              {result.history.map((m, idx) => {
                const isLatest = idx === result.history.length - 1;
                return (
                  <tr
                    key={m.monthKey}
                    className={`hover:bg-slate-50 transition-colors ${
                      isLatest ? 'bg-blue-50/50 font-bold text-blue-950' : ''
                    }`}
                  >
                    <td className="py-2.5 px-3">
                      {m.monthName} {m.year}
                      {isLatest && (
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-800">
                          Mes actual
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-medium">
                      ${formatNumber(m.ufValue, 2, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                      ${formatNumber(m.rentPesos, 0, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono">
                      {m.changePesosVsPrevMonth !== 0 ? (
                        <span
                          className={
                            m.changePesosVsPrevMonth > 0 ? 'text-rose-600' : 'text-emerald-600'
                          }
                        >
                          {m.changePesosVsPrevMonth > 0 ? '▲ +' : '▼ '}
                          ${formatNumber(Math.abs(m.changePesosVsPrevMonth), 0, 'cl')} (
                          {m.changePercentVsPrevMonth > 0 ? '+' : ''}
                          {m.changePercentVsPrevMonth.toFixed(2)}%)
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

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <CopyButton text={shareText} label="Copiar cálculo" />
        <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
        <PrintButton />
      </div>
    </div>
  );
}
