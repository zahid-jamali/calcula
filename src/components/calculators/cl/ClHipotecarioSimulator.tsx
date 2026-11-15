'use client';

import React, { useState } from 'react';
import {
  Card,
  Select,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateCreditoHipotecario } from '@/lib/cl/creditoHipotecario';
import { formatCurrency, formatNumber } from '@/lib/format';

export function ClHipotecarioSimulator() {
  const [propertyPriceUf, setPropertyPriceUf] = useState<number>(3000);
  const [piePercentage, setPiePercentage] = useState<number>(20);
  const [annualRate, setAnnualRate] = useState<number>(4.8);
  const [years, setYears] = useState<number>(25);

  const result = calculateCreditoHipotecario({
    propertyPriceUf,
    piePercentage,
    annualRatePercentage: annualRate,
    years,
  });

  // Comparisons for 15, 20, 25, 30 years
  const comparisons = [15, 20, 25, 30].map((y) => {
    const res = calculateCreditoHipotecario({
      propertyPriceUf,
      piePercentage,
      annualRatePercentage: annualRate,
      years: y,
    });
    return { years: y, ...res };
  });

  const shareText = `Simulación de Crédito Hipotecario Chile 2026 en Calcula:
Valor Propiedad: ${formatNumber(propertyPriceUf, 0, 'cl')} UF (${formatCurrency(result.propertyPricePesos, 'cl')})
Pie (${piePercentage}%): ${formatNumber(result.pieUf, 0, 'cl')} UF (${formatCurrency(result.piePesos, 'cl')})
Monto del Crédito: ${formatNumber(result.loanAmountUf, 0, 'cl')} UF
Plazo: ${years} años | Tasa: ${annualRate}% anual
Dividendo Mensual Estimado: ${result.monthlyDividendoUf} UF (${formatCurrency(result.monthlyDividendoPesos, 'cl')}/mes)
Calcula gratis en: https://calcula.zetawala.com/cl/simulador-credito-hipotecario/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏦</span> Datos de la Propiedad y Crédito Hipotecario
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Precio de la Propiedad en UF
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="50"
                min="500"
                max="50000"
                value={propertyPriceUf}
                onChange={(e) => setPropertyPriceUf(parseFloat(e.target.value) || 0)}
                className="block w-full rounded-md border border-slate-300 px-3 py-2 text-base font-bold text-slate-900 focus:border-brand-blue focus:outline-none"
                placeholder="3000"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-semibold text-slate-400">
                UF
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Equivalente aproximado: <strong>{formatCurrency(result.propertyPricePesos, 'cl')}</strong>
            </p>
          </div>

          <Select
            id="pie-select"
            name="piePercentage"
            label="Pie o Enganche Inicial (%)"
            value={piePercentage.toString()}
            onChange={(e) => setPiePercentage(parseFloat(e.target.value) || 20)}
            options={[
              { value: '10', label: '10% de Pie (Exigente/Fogaes)' },
              { value: '15', label: '15% de Pie' },
              { value: '20', label: '20% de Pie (Estándar bancario habitual)' },
              { value: '25', label: '25% de Pie' },
              { value: '30', label: '30% de Pie' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Tasa de Interés Anual Fija (%)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="0.05"
                min="1.0"
                max="12.0"
                value={annualRate}
                onChange={(e) => setAnnualRate(parseFloat(e.target.value) || 4.5)}
                className="block w-full rounded-md border border-slate-300 px-3 py-2 text-base font-bold text-slate-900 focus:border-brand-blue focus:outline-none"
                placeholder="4.8"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-semibold text-slate-400">
                %
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Promedio del sistema bancario chileno: 4.5% - 5.3% anual.
            </p>
          </div>

          <Select
            id="years-select"
            name="years"
            label="Plazo del Crédito (Años)"
            value={years.toString()}
            onChange={(e) => setYears(parseInt(e.target.value) || 25)}
            options={[
              { value: '15', label: '15 años (180 dividendos)' },
              { value: '20', label: '20 años (240 dividendos)' },
              { value: '25', label: '25 años (300 dividendos - Frecuente)' },
              { value: '30', label: '30 años (360 dividendos)' },
            ]}
          />
        </div>
      </Card>

      {/* Main Results */}
      <ResultSummary
        title="Dividendo Mensual Estimado"
        totalAmount={result.monthlyDividendoPesos}
        currencySymbol="$"
        country="cl"
        items={[
          { label: 'Valor propiedad en UF', amount: result.propertyPriceUf },
          { label: `Pie inicial (${piePercentage}%)`, amount: result.piePesos },
          { label: 'Monto total del crédito a financiar', amount: result.loanAmountPesos },
          { label: 'Dividendo mensual en UF', amount: result.monthlyDividendoUf },
          { label: 'Total intereses pagados en el plazo', amount: result.totalInterestPesos },
          { label: 'Costo total final del crédito (Capital + Intereses)', amount: result.totalPaidPesos },
        ]}
      />

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
        ℹ️ {result.insuranceDisclaimer} (Normalmente suman entre 0,4 y 0,8 UF adicionales al dividendo mensual).
      </div>

      {/* Comparison Table */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>📊</span> Comparativa de Plazos: 15 vs 20 vs 25 vs 30 Años
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          A mayor plazo disminuye el dividendo mensual pero aumenta drásticamente el costo total en intereses.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                <th className="py-2.5 px-3">Plazo</th>
                <th className="py-2.5 px-3 text-right">Dividendo (UF)</th>
                <th className="py-2.5 px-3 text-right">Dividendo (CLP)</th>
                <th className="py-2.5 px-3 text-right">Intereses Totales</th>
                <th className="py-2.5 px-3 text-right">Costo Total Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
              {comparisons.map((c) => {
                const isSelected = c.years === years;
                return (
                  <tr
                    key={c.years}
                    className={`hover:bg-slate-50 transition-colors ${
                      isSelected ? 'bg-blue-50/60 font-bold text-blue-950' : ''
                    }`}
                  >
                    <td className="py-2.5 px-3">
                      {c.years} años ({c.totalPayments} meses)
                      {isSelected && (
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-800">
                          Seleccionado
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-medium">
                      {c.monthlyDividendoUf} UF
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                      ${formatNumber(c.monthlyDividendoPesos, 0, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-rose-600">
                      ${formatNumber(c.totalInterestPesos, 0, 'cl')}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-700">
                      ${formatNumber(c.totalPaidPesos, 0, 'cl')}
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
        <CopyButton text={shareText} label="Copiar simulación" />
        <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
        <PrintButton />
      </div>
    </div>
  );
}
