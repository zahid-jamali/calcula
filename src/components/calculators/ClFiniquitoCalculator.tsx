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
import { formatCurrency } from '@/lib/format';

export function ClFiniquitoCalculator() {
  const [salary, setSalary] = useState<number>(800000);
  const [startDate, setStartDate] = useState<string>('2023-01-01');
  const [endDate, setEndDate] = useState<string>('2026-03-31');
  const [reason, setReason] = useState<ClSeparationReason>('necesidades_empresa');
  const [hasNotice, setHasNotice] = useState<boolean>(false);

  const result = calculateClFiniquito({
    monthlySalary: salary,
    startDate,
    endDate,
    reason,
    hasNotice,
  });

  const shareText = `Resultado de Finiquito Laboral Chile 2026 en Calcula:
Sueldo mensual: ${formatCurrency(salary, 'cl')}
Total Finiquito Estimado: ${formatCurrency(result.totalFiniquito, 'cl')}
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
            label="Sueldo Base Mensual"
            currencySymbol="$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
          />

          <Select
            id="reason"
            name="reason"
            label="Causal de Término de Contrato"
            value={reason}
            onChange={(e) => setReason(e.target.value as ClSeparationReason)}
            options={[
              { value: 'necesidades_empresa', label: 'Necesidades de la empresa (Art. 161 inc. 1º)' },
              { value: 'renuncia', label: 'Renuncia voluntaria del trabajador (Art. 159 Nº 2)' },
              { value: 'despido_disciplinario', label: 'Causal disciplinaria o falta (Art. 160)' },
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

        {reason === 'necesidades_empresa' && (
          <div className="pt-2">
            <Checkbox
              id="notice"
              name="notice"
              label="El empleador dio aviso formal con 30 días de anticipación"
              checked={hasNotice}
              onChange={(e) => setHasNotice(e.target.checked)}
              description="Si no se dio aviso con 30 días, corresponde el pago de 1 mes de remuneración como indemnización sustitutiva."
            />
          </div>
        )}
      </Card>

      <ResultSummary
        country="cl"
        totalAmount={result.totalFiniquito}
        totalLabel="Total Finiquito Estimado"
        totalGross={result.totalFiniquito}
        items={result.items}
        badge="DT Chile 2026"
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar finiquito" />
            <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
            <PrintButton label="Imprimir propuesta" />
          </div>
        }
      />
    </div>
  );
}
