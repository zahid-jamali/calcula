'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  Select,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import {
  calculateSueldoLiquido,
  calculateSueldoBrutoFromLiquido,
  ChileAfpName,
  ChileSaludType,
  ChileContractType,
  ChileGratificacionType,
} from '@/lib/cl/sueldoLiquido';
import { formatCurrency, formatNumber } from '@/lib/format';

export function ClSueldoLiquidoCalculator() {
  const [mode, setMode] = useState<'bruto-a-liquido' | 'liquido-a-bruto'>('bruto-a-liquido');
  const [sueldoInput, setSueldoInput] = useState<number>(850000);
  const [gratificacionType, setGratificacionType] = useState<ChileGratificacionType>('art50');
  const [gratificacionCustom, setGratificacionCustom] = useState<number>(0);
  const [bonosImponibles, setBonosImponibles] = useState<number>(0);
  const [bonosNoImponibles, setBonosNoImponibles] = useState<number>(60000); // Colación / Movilización
  const [afp, setAfp] = useState<ChileAfpName>('Habitat');
  const [saludType, setSaludType] = useState<ChileSaludType>('fonasa');
  const [isaprePlanUf, setIsaprePlanUf] = useState<number>(2.5);
  const [contractType, setContractType] = useState<ChileContractType>('indefinido');

  // Compute based on mode
  let effectiveSueldoBase = sueldoInput;
  if (mode === 'liquido-a-bruto') {
    effectiveSueldoBase = calculateSueldoBrutoFromLiquido(sueldoInput, {
      gratificacionType,
      gratificacionCustom,
      bonosImponibles,
      bonosNoImponibles,
      afp,
      saludType,
      isaprePlanUf,
      contractType,
    });
  }

  const result = calculateSueldoLiquido({
    sueldoBase: effectiveSueldoBase,
    gratificacionType,
    gratificacionCustom,
    bonosImponibles,
    bonosNoImponibles,
    afp,
    saludType,
    isaprePlanUf,
    contractType,
  });

  const shareText = `Cálculo de Sueldo Líquido Chile 2026 en Calcula:
Sueldo Base: ${formatCurrency(result.sueldoBase, 'cl')}
Total Imponible: ${formatCurrency(result.totalImponible, 'cl')}
Descuentos Legales (AFP + Salud + AFC + Impuesto): ${formatCurrency(result.totalDescuentosLegales, 'cl')}
Sueldo Líquido a Pagar: ${formatCurrency(result.sueldoLiquido, 'cl')}
Calcula gratis en: https://calcula.zetawala.com/cl/calculadora-sueldo-liquido/`;

  return (
    <div className="space-y-6">
      {/* Mode Switcher */}
      <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200">
        <button
          type="button"
          onClick={() => setMode('bruto-a-liquido')}
          className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
            mode === 'bruto-a-liquido'
              ? 'bg-white text-brand-blue shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          De Sueldo Bruto a Líquido
        </button>
        <button
          type="button"
          onClick={() => setMode('liquido-a-bruto')}
          className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
            mode === 'liquido-a-bruto'
              ? 'bg-white text-brand-blue shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          De Sueldo Líquido a Bruto (Inverso)
        </button>
      </div>

      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>💼</span> Antecedentes de la Remuneración
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="sueldo-input"
            name="sueldoInput"
            label={mode === 'bruto-a-liquido' ? 'Sueldo Base Mensual' : 'Sueldo Líquido Deseado'}
            currencySymbol="$"
            value={sueldoInput}
            onChangeValue={(val) => setSueldoInput(val)}
            helpText={
              mode === 'bruto-a-liquido'
                ? 'Monto pactado en contrato de trabajo (mínimo legal $500.000).'
                : 'Monto neto que deseas recibir en tu cuenta bancaria.'
            }
          />

          <Select
            id="gratificacion-type"
            name="gratificacionType"
            label="Gratificación Legal"
            value={gratificacionType}
            onChange={(e) => setGratificacionType(e.target.value as ChileGratificacionType)}
            options={[
              { value: 'art50', label: 'Legal Art. 50 (25% con tope 4.75 IMM - Habitual)' },
              { value: 'none', label: 'Sin gratificación mensual (o pago anual)' },
              { value: 'custom', label: 'Monto fijo personalizado' },
            ]}
          />
        </div>

        {gratificacionType === 'custom' && (
          <div className="mb-4">
            <MoneyInput
              id="gratificacion-custom"
              name="gratificacionCustom"
              label="Monto de Gratificación Mensual"
              currencySymbol="$"
              value={gratificacionCustom}
              onChangeValue={(val) => setGratificacionCustom(val)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="bonos-imponibles"
            name="bonosImponibles"
            label="Otros Bonos Imponibles (Comisiones, metas)"
            currencySymbol="$"
            value={bonosImponibles}
            onChangeValue={(val) => setBonosImponibles(val)}
            helpText="Afectos a cotizaciones previsionales e impuesto."
          />

          <MoneyInput
            id="bonos-no-imponibles"
            name="bonosNoImponibles"
            label="Asignaciones No Imponibles (Colación + Movilización)"
            currencySymbol="$"
            value={bonosNoImponibles}
            onChangeValue={(val) => setBonosNoImponibles(val)}
            helpText="Libres de AFP, Fonasa e Impuesto Único (Art. 41 CT)."
          />
        </div>

        <h3 className="text-sm font-bold text-slate-800 pt-3 border-t border-slate-100 mb-3 flex items-center gap-1.5">
          <span>🏥</span> Cotizaciones Previsionales y Salud
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Select
            id="afp-select"
            name="afp"
            label="Administradora de Fondos de Pensiones (AFP)"
            value={afp}
            onChange={(e) => setAfp(e.target.value as ChileAfpName)}
            options={[
              { value: 'Capital', label: 'AFP Capital (11.44%)' },
              { value: 'Cuprum', label: 'AFP Cuprum (11.44%)' },
              { value: 'Habitat', label: 'AFP Habitat (11.27%)' },
              { value: 'Modelo', label: 'AFP Modelo (10.58%)' },
              { value: 'PlanVital', label: 'AFP PlanVital (11.10%)' },
              { value: 'Provida', label: 'AFP Provida (11.45%)' },
              { value: 'Uno', label: 'AFP Uno (10.49%)' },
            ]}
          />

          <Select
            id="salud-type"
            name="saludType"
            label="Sistema de Salud"
            value={saludType}
            onChange={(e) => setSaludType(e.target.value as ChileSaludType)}
            options={[
              { value: 'fonasa', label: 'Fonasa (7% legal obligatorio)' },
              { value: 'isapre', label: 'Isapre (Plan pactado en UF)' },
            ]}
          />

          <Select
            id="contract-type"
            name="contractType"
            label="Tipo de Contrato"
            value={contractType}
            onChange={(e) => setContractType(e.target.value as ChileContractType)}
            options={[
              { value: 'indefinido', label: 'Indefinido (0.6% Seguro Cesantía)' },
              { value: 'plazo-fijo', label: 'Plazo Fijo / Obra (0% trabajador)' },
            ]}
          />
        </div>

        {saludType === 'isapre' && (
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-2">
            <label className="block text-xs font-semibold text-blue-900 mb-1">
              Plan Isapre en UF (pactado con la aseguradora)
            </label>
            <div className="flex items-center gap-2 max-w-xs">
              <input
                type="number"
                step="0.01"
                min="0"
                value={isaprePlanUf}
                onChange={(e) => setIsaprePlanUf(parseFloat(e.target.value) || 0)}
                className="w-full rounded border border-blue-300 px-3 py-1.5 text-sm bg-white text-slate-800 focus:outline-none focus:border-brand-blue"
              />
              <span className="text-xs font-bold text-blue-800">UF</span>
            </div>
            <p className="text-[11px] text-blue-700 mt-1">
              * Si el 7% legal supera el valor pactado en UF, se descuenta el 7% íntegro (generando excedente).
            </p>
          </div>
        )}
      </Card>

      {/* Results */}
      <ResultSummary
        title="Resumen del Sueldo Líquido a Pagar"
        totalAmount={result.sueldoLiquido}
        currencySymbol="$"
        country="cl"
        items={[
          { label: 'Sueldo Base', amount: result.sueldoBase },
          { label: 'Gratificación Legal (Art. 50)', amount: result.gratificacion },
          ...(result.bonosImponibles > 0
            ? [{ label: 'Bonos Imponibles', amount: result.bonosImponibles }]
            : []),
          { label: 'Total Haberes Imponibles', amount: result.totalImponible },
          {
            label: `Descuento AFP ${result.afpName} (${result.afpRate}%)`,
            amount: result.afpDiscount,
            isDeduction: true,
          },
          {
            label: `Descuento Salud (${result.saludType === 'fonasa' ? '7% Fonasa' : 'Isapre'})`,
            amount: result.saludDiscount,
            isDeduction: true,
          },
          {
            label: `Seguro de Cesantía AFC (${result.cesantiaRate}%)`,
            amount: result.cesantiaDiscount,
            isDeduction: true,
          },
          ...(result.impuestoUnico > 0
            ? [
                {
                  label: 'Impuesto Único 2ª Categoría (SII)',
                  amount: result.impuestoUnico,
                  isDeduction: true,
                },
              ]
            : []),
          {
            label: 'Total Descuentos Legales',
            amount: result.totalDescuentosLegales,
            isDeduction: true,
          },
          ...(result.bonosNoImponibles > 0
            ? [
                {
                  label: 'Haberes No Imponibles (Colación / Movilización)',
                  amount: result.bonosNoImponibles,
                },
              ]
            : []),
        ]}
      />

      {/* Tax detail card */}
      <Card className="p-4 sm:p-6 bg-slate-50 border-slate-200">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
          Detalle Tributario y Topes Imponibles Vigentes 2026
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700">
          <div>
            <span className="text-slate-500 block">Base Tributable:</span>
            <strong className="text-slate-900 font-mono">
              ${formatNumber(result.baseTributable, 0, 'cl')} ({result.baseTributableUtm} UTM)
            </strong>
          </div>
          <div>
            <span className="text-slate-500 block">Tramo Impuesto:</span>
            <strong className="text-slate-900">
              {result.impuestoUnicoFactor === 0
                ? 'Exento (≤ 13.5 UTM)'
                : `${(result.impuestoUnicoFactor * 100).toFixed(1)}%`}
            </strong>
          </div>
          <div>
            <span className="text-slate-500 block">Tope AFP/Salud (85.6 UF):</span>
            <strong className="text-slate-900 font-mono">
              ${formatNumber(result.topeAfpSaludPesos, 0, 'cl')}
            </strong>
          </div>
          <div>
            <span className="text-slate-500 block">Tasa Descuento Efectiva:</span>
            <strong className="text-slate-900 font-mono">{result.effectiveRate.toFixed(2)}%</strong>
          </div>
        </div>
      </Card>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <CopyButton
          text={shareText}
          label="Copiar Liquidación"
          copiedLabel="¡Liquidación Copiada!"
        />
        <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
        <PrintButton />
      </div>
    </div>
  );
}
