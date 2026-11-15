'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  DateInput,
  Select,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateClFiniquito, ClSeparationReason } from '@/lib/cl/finiquito';
import { formatCurrency, formatNumber } from '@/lib/format';

export function ClFiniquitoCalculator() {
  const [salary, setSalary] = useState<number>(850000);
  const [startDate, setStartDate] = useState<string>('2023-01-01');
  const [endDate, setEndDate] = useState<string>('2026-03-31');
  const [reason, setReason] = useState<ClSeparationReason>('necesidades_empresa');
  const [hasNotice, setHasNotice] = useState<boolean>(false);
  const [pendingVacationDays, setPendingVacationDays] = useState<number>(0);

  const result = calculateClFiniquito({
    monthlySalary: salary,
    startDate,
    endDate,
    reason,
    hasNotice,
    pendingVacationDays,
  });

  const shareText = `Resultado de Finiquito Laboral Chile 2026 en Calcula:
Sueldo mensual: ${formatCurrency(salary, 'cl')}
Causal: ${reason}
Años de servicio reconocidos: ${result.serviceYears} años
Total Finiquito Estimado: ${formatCurrency(result.totalFiniquito, 'cl')} (${result.totalFiniquitoUf} UF)
Calcula gratis en: https://calcula.zetawala.com/cl/calculadora-finiquito/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🧮</span> Antecedentes de la relación laboral
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="monthly-salary"
            name="monthlySalary"
            label="Última Remuneración Mensual Imponible"
            currencySymbol="$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
            helpText="Sueldo base + gratificación + comisiones habituales (tope legal: 90 UF)."
          />

          <Select
            id="reason"
            name="reason"
            label="Causal de Término de Contrato"
            value={reason}
            onChange={(e) => setReason(e.target.value as ClSeparationReason)}
            options={[
              {
                value: 'necesidades_empresa',
                label: 'Necesidades de la empresa (Art. 161) - Indemnización legal',
              },
              {
                value: 'renuncia',
                label: 'Renuncia voluntaria del trabajador (Art. 159 Nº 2)',
              },
              {
                value: 'mutuo_acuerdo',
                label: 'Mutuo acuerdo entre las partes (Art. 159 Nº 1)',
              },
              {
                value: 'vencimiento_plazo',
                label: 'Vencimiento del plazo convenido (Art. 159 Nº 4)',
              },
              {
                value: 'despido',
                label: 'Despido disciplinario sin indemnización (Art. 160)',
              },
            ]}
          />

          <DateInput
            id="start-date"
            name="startDate"
            label="Fecha de Inicio de Contrato"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <DateInput
            id="end-date"
            name="endDate"
            label="Fecha de Cese o Finiquito"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Días hábiles de vacaciones pendientes de períodos anteriores
            </label>
            <input
              type="number"
              min="0"
              max="90"
              value={pendingVacationDays}
              onChange={(e) => setPendingVacationDays(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none"
              placeholder="0"
            />
            <p className="text-xs text-slate-500 mt-1">
              Días acumulados que no alcanzaste a tomar antes de la desvinculación.
            </p>
          </div>

          {reason === 'necesidades_empresa' && (
            <div className="flex items-center">
              <Checkbox
                id="notice"
                name="notice"
                label="El empleador dio aviso formal con 30 días de anticipación"
                checked={hasNotice}
                onChange={(e) => setHasNotice(e.target.checked)}
                description="Si no se dio aviso con 30 días, corresponde pagar 1 mes de sueldo (tope 90 UF) como indemnización sustitutiva."
              />
            </div>
          )}
        </div>
      </Card>

      {/* Results */}
      <ResultSummary
        country="cl"
        totalAmount={result.totalFiniquito}
        totalLabel="Total Finiquito Estimado"
        totalGross={result.totalFiniquito}
        items={result.items}
        badge="DT Chile 2026"
        footerActions={
          <div className="space-y-4 mt-4 pt-4 border-t border-slate-200">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-600 flex flex-wrap justify-between gap-2">
              <span>
                Antigüedad:{' '}
                <strong className="text-slate-900">{result.serviceYears} año(s) computables</strong>
              </span>
              <span>
                Valor UF aplicada:{' '}
                <strong className="text-slate-900">${formatNumber(result.ufValue, 2, 'cl')}</strong>
              </span>
              <span>
                Plazo legal de pago:{' '}
                <strong className="text-slate-900">10 días hábiles (Art. 177 CT)</strong>
              </span>
            </div>
            {result.isRemunerationCapped && (
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
                ℹ️ Tu remuneración mensual excede el tope legal de 90 UF ($
                {formatNumber(result.remuneracionTopeadaPesos, 0, 'cl')}), por lo que las
                indemnizaciones por despido se calcularon sobre dicho tope conforme al Art. 172 del
                Código del Trabajo.
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3">
              <CopyButton text={shareText} label="Copiar finiquito" />
              <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
              <PrintButton label="Imprimir propuesta" />
            </div>
          </div>
        }
      />
    </div>
  );
}
