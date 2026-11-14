'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  Select,
  Checkbox,
  SegmentedToggle,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import {
  calculateSalarioLiquido,
  calculateGrossFromNet,
  SalarioLiquidoResult,
} from '@/lib/br/salarioLiquido';
import { formatCurrency } from '@/lib/format';

export function BrSalarioLiquidoCalculator() {
  const [calculationMode, setCalculationMode] = useState<'gross-to-net' | 'net-to-gross'>('gross-to-net');
  const [grossInput, setGrossInput] = useState<number>(4500);
  const [targetNetInput, setTargetNetInput] = useState<number>(3500);
  const [dependentsCount, setDependentsCount] = useState<number>(0);
  const [discountVT, setDiscountVT] = useState<boolean>(false);
  const [healthPlan, setHealthPlan] = useState<number>(0);
  const [privatePension, setPrivatePension] = useState<number>(0);
  const [otherDiscounts, setOtherDiscounts] = useState<number>(0);
  const [irrfMethod, setIrrfMethod] = useState<'best' | 'legal' | 'simplified'>('best');

  let activeGross = grossInput;
  if (calculationMode === 'net-to-gross') {
    activeGross = calculateGrossFromNet(targetNetInput, {
      dependentsCount,
      discountVT,
      healthPlan,
      privatePension,
      otherDiscounts,
      irrfMethod,
    });
  }

  const result: SalarioLiquidoResult = calculateSalarioLiquido({
    grossSalary: activeGross,
    dependentsCount,
    discountVT,
    healthPlan,
    privatePension,
    otherDiscounts,
    irrfMethod,
  });

  const lineItems: Array<{
    key: string;
    label: string;
    amount: number;
    formula: string;
    legalArticle?: string;
    isDeduction?: boolean;
  }> = [
    {
      key: 'gross_salary',
      label: 'Salário Bruto',
      amount: result.grossSalary,
      formula: 'Salário base contratual',
    },
    {
      key: 'inss',
      label: `Desconto INSS (${result.effectiveInssRate.toFixed(2)}% efetivo)`,
      amount: result.inss,
      formula: 'Tabela progressiva INSS 2026 (faixas de 7,5% a 14%)',
      legalArticle: 'Portaria Interministerial MPS/MF 2026',
      isDeduction: true,
    },
    {
      key: 'irrf',
      label: `Desconto IRRF (${result.effectiveIrrfRate.toFixed(2)}% efetivo)`,
      amount: result.irrf,
      formula:
        result.irrfDetail.method === 'simplified'
          ? 'Desconto Simplificado de R$ 564,80 (mais vantajoso)'
          : `Deduções Legais (INSS + R$ ${(dependentsCount * 189.59).toFixed(2)} dep)`,
      legalArticle: 'Tabela Progressiva Receita Federal 2026',
      isDeduction: true,
    },
  ];

  if (result.vtDiscount > 0) {
    lineItems.push({
      key: 'vt',
      label: 'Vale-Transporte (6%)',
      amount: result.vtDiscount,
      formula: '6% do salário base (Art. 4º Lei 7.418/1985)',
      legalArticle: 'Lei 7.418/1985',
      isDeduction: true,
    });
  }

  if (result.healthPlan > 0) {
    lineItems.push({
      key: 'health',
      label: 'Plano de Saúde / Odontológico',
      amount: result.healthPlan,
      formula: 'Coparticipação / Mensalidade',
      isDeduction: true,
    });
  }

  if (result.privatePension > 0) {
    lineItems.push({
      key: 'pension',
      label: 'Previdência Privada (PGBL/Fundação)',
      amount: result.privatePension,
      formula: 'Contribuição facultativa do empregado',
      isDeduction: true,
    });
  }

  if (result.otherDiscounts > 0) {
    lineItems.push({
      key: 'other',
      label: 'Outros Descontos em Folha',
      amount: result.otherDiscounts,
      formula: 'Adiantamentos, vales ou pensão alimentícia',
      isDeduction: true,
    });
  }

  const shareText = `Cálculo de Salário Líquido 2026 na Calcula:
Salário Bruto: ${formatCurrency(result.grossSalary, 'br')}
Desconto INSS: ${formatCurrency(result.inss, 'br')}
Desconto IRRF: ${formatCurrency(result.irrf, 'br')}
Salário Líquido na Conta: ${formatCurrency(result.netSalary, 'br')}
Alíquota Efetiva Total: ${result.effectiveRate.toFixed(2)}%
Simule grátis em: https://calcula.zetawala.com/br/calculadora-salario-liquido/`;

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex justify-center">
        <SegmentedToggle
          value={calculationMode}
          onChange={(val) => setCalculationMode(val as 'gross-to-net' | 'net-to-gross')}
          options={[
            { value: 'gross-to-net', label: '💰 Bruto para Líquido' },
            { value: 'net-to-gross', label: '🔄 Líquido para Bruto (Inverso)' },
          ]}
        />
      </div>

      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>💼</span>{' '}
          {calculationMode === 'gross-to-net'
            ? 'Informe seu Salário Bruto e Descontos'
            : 'Informe o Salário Líquido Desejado'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {calculationMode === 'gross-to-net' ? (
            <MoneyInput
              id="gross-salary"
              name="gross-salary"
              label="Salário Bruto Mensal"
              currencySymbol="R$"
              value={grossInput}
              onChangeValue={(val) => setGrossInput(val)}
              helpText="Valor registrado na carteira antes dos descontos"
            />
          ) : (
            <MoneyInput
              id="target-net-salary"
              name="target-net-salary"
              label="Salário Líquido Desejado na Conta"
              currencySymbol="R$"
              value={targetNetInput}
              onChangeValue={(val) => setTargetNetInput(val)}
              helpText="Quanto você quer receber limpo todo mês"
            />
          )}

          <NumberInput
            id="dependents"
            name="dependents"
            label="Número de Dependentes"
            value={dependentsCount}
            onChange={(e) => setDependentsCount(Number(e.target.value))}
            min={0}
            max={20}
            helpText="R$ 189,59 de abatimento no IRRF por dependente"
          />

          <MoneyInput
            id="health-plan"
            name="health-plan"
            label="Plano de Saúde (opcional)"
            currencySymbol="R$"
            value={healthPlan}
            onChangeValue={(val) => setHealthPlan(val)}
            helpText="Desconto de assistência médica / odonto em folha"
          />

          <MoneyInput
            id="private-pension"
            name="private-pension"
            label="Previdência Privada (opcional)"
            currencySymbol="R$"
            value={privatePension}
            onChangeValue={(val) => setPrivatePension(val)}
            helpText="Dedução na base de cálculo do IRRF"
          />

          <MoneyInput
            id="other-discounts"
            name="other-discounts"
            label="Outros Descontos Fixos"
            currencySymbol="R$"
            value={otherDiscounts}
            onChangeValue={(val) => setOtherDiscounts(val)}
            helpText="Seguro de vida, empréstimo consignado, etc."
          />

          <Select
            id="irrf-method"
            name="irrf-method"
            label="Critério de Cálculo do Imposto de Renda"
            value={irrfMethod}
            onChange={(e) => setIrrfMethod(e.target.value as 'best' | 'legal' | 'simplified')}
            options={[
              { value: 'best', label: 'Mais vantajoso automaticamente (Recomendado)' },
              { value: 'simplified', label: 'Desconto Simplificado (R$ 564,80)' },
              { value: 'legal', label: 'Deduções Legais (INSS + dependentes)' },
            ]}
          />
        </div>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
          <Checkbox
            id="discount-vt"
            name="discount-vt"
            label="Descontar Vale-Transporte (6% sobre o salário base)"
            checked={discountVT}
            onChange={(e) => setDiscountVT(e.target.checked)}
            helpTooltip="Art. 4º da Lei 7.418/1985: o empregador pode descontar até 6% do salário base para fornecimento de vale-transporte."
          />
        </div>
      </Card>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {calculationMode === 'gross-to-net' ? 'Salário Líquido na Conta' : 'Salário Bruto Necessário'}
          </p>
          <p className="text-2xl font-black mt-1 text-emerald-900">
            {formatCurrency(
              calculationMode === 'gross-to-net' ? result.netSalary : result.grossSalary,
              'br'
            )}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            {calculationMode === 'gross-to-net'
              ? `Representa ${(100 - result.effectiveRate).toFixed(1)}% do salário bruto`
              : `Para sobrar ${formatCurrency(targetNetInput, 'br')} líquidos`}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Alíquota Efetiva Total
          </p>
          <p className="text-2xl font-black mt-1 text-blue-900">
            {result.effectiveRate.toFixed(2)}%
          </p>
          <p className="text-xs text-blue-700 mt-1">
            INSS: {result.effectiveInssRate.toFixed(2)}% | IRRF: {result.effectiveIrrfRate.toFixed(2)}%
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white text-slate-900">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Método IRRF Utilizado
          </p>
          <p className="text-sm font-bold mt-1 text-slate-800">
            {result.irrfDetail.method === 'simplified'
              ? '⚡ Desconto Simplificado'
              : '📋 Deduções Legais'}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {result.irrfDetail.simplifiedTax < result.irrfDetail.legalTax
              ? `Economia de ${formatCurrency(result.irrfDetail.legalTax - result.irrfDetail.simplifiedTax, 'br')} com simplificado`
              : 'Deduções legais resultaram em menor imposto'}
          </p>
        </div>
      </div>

      {/* Result Breakdown */}
      <ResultSummary
        country="br"
        totalAmount={result.netSalary}
        totalLabel="Salário Líquido Final"
        totalGross={result.grossSalary}
        totalDeductions={result.totalDiscounts}
        items={lineItems}
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar resultado" />
            <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
            <PrintButton label="Imprimir holerite" />
          </div>
        }
      />
    </div>
  );
}
