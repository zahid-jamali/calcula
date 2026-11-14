'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  Select,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateDecimoTerceiro } from '@/lib/br/decimoTerceiro';
import { formatCurrency } from '@/lib/format';

export function BrDecimoTerceiroCalculator() {
  const [salary, setSalary] = useState<number>(3000);
  const [variablePay, setVariablePay] = useState<number>(0);
  const [monthsWorked, setMonthsWorked] = useState<number>(12);
  const [dependentsCount, setDependentsCount] = useState<number>(0);
  const [isProportional, setIsProportional] = useState<boolean>(false);

  const result = calculateDecimoTerceiro({
    salary,
    variablePayAverage: variablePay,
    monthsWorked,
    dependentsCount,
    isProportional,
  });

  const shareText = `Resultado do Cálculo do 13º Salário 2026 na Calcula:
Salário Base: ${formatCurrency(result.baseSalary, 'br')}
Meses Trabalhados: ${result.monthsWorked}/12
1ª Parcela (até 30/11): ${formatCurrency(result.firstInstallment, 'br')}
2ª Parcela Líquida (até 20/12): ${formatCurrency(result.secondInstallmentNet, 'br')}
Total Líquido: ${formatCurrency(result.totalNet, 'br')}
Simule grátis em: https://calcula.zetawala.com/br/calculadora-13-salario/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎁</span> Simular 13º Salário (Gratificação Natalina)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="salary"
            name="salary"
            label="Salário Bruto Mensal"
            currencySymbol="R$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
            helpText="Salário base registrado na carteira de trabalho"
          />

          <MoneyInput
            id="variable-pay"
            name="variable-pay"
            label="Média de Adicionais (Horas extras, comissões)"
            currencySymbol="R$"
            value={variablePay}
            onChangeValue={(val) => setVariablePay(val)}
            helpText="Média mensal de variáveis recebidas no ano"
          />

          <Select
            id="months-worked"
            name="months-worked"
            label="Meses Trabalhados no Ano (Regra de 15 dias)"
            value={String(monthsWorked)}
            onChange={(e) => setMonthsWorked(Number(e.target.value))}
            options={Array.from({ length: 12 }, (_, i) => ({
              value: String(i + 1),
              label: `${i + 1} ${i === 0 ? 'mês' : 'meses'} (${i + 1}/12 avos)`,
            }))}
            helpText="Cada fração igual ou superior a 15 dias trabalhados no mês conta como mês integral"
          />

          <NumberInput
            id="dependents"
            name="dependents"
            label="Número de Dependentes (p/ dedução de IRRF)"
            value={dependentsCount}
            onChange={(e) => setDependentsCount(Number(e.target.value))}
            min={0}
            max={20}
            helpText="Dedução de R$ 189,59 por dependente na 2ª parcela"
          />

          <Select
            id="mode"
            name="mode"
            label="Modalidade de Cálculo"
            value={isProportional ? 'proportional' : 'installments'}
            onChange={(e) => setIsProportional(e.target.value === 'proportional')}
            options={[
              { value: 'installments', label: 'Duas parcelas normais (CLT)' },
              { value: 'proportional', label: 'Parcela única (Proporcional / Rescisão)' },
            ]}
          />
        </div>
      </Card>

      {!isProportional && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  1ª Parcela (50% Bruto)
                </p>
                <p className="text-2xl font-black mt-1 text-emerald-900">
                  {formatCurrency(result.firstInstallment, 'br')}
                </p>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                Sem descontos
              </span>
            </div>
            <p className="text-xs text-emerald-700 mt-2 font-medium">
              📅 Paga entre 1º de fevereiro e <strong>30 de novembro</strong> (Lei 4.749/1965)
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  2ª Parcela Líquida (com descontos)
                </p>
                <p className="text-2xl font-black mt-1 text-blue-900">
                  {formatCurrency(result.secondInstallmentNet, 'br')}
                </p>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                INSS e IRRF deduzidos
              </span>
            </div>
            <p className="text-xs text-blue-700 mt-2 font-medium">
              📅 Paga impreterivelmente até <strong>20 de dezembro</strong>
            </p>
          </div>
        </div>
      )}

      <ResultSummary
        country="br"
        totalAmount={result.totalNet}
        totalLabel={isProportional ? 'Total Líquido Proporcional' : 'Total Líquido das Duas Parcelas'}
        totalGross={result.totalGross}
        totalDeductions={result.deductions.total}
        items={result.items}
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar resultado" />
            <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
            <PrintButton label="Imprimir relatório" />
          </div>
        }
      />
    </div>
  );
}
