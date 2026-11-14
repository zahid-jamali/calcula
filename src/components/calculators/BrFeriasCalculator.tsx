'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateFerias, getVacationDaysByAbsences } from '@/lib/br/ferias';
import { formatCurrency } from '@/lib/format';

export function BrFeriasCalculator() {
  const [salary, setSalary] = useState<number>(3500);
  const [variablePay, setVariablePay] = useState<number>(0);
  const [unjustifiedAbsences, setUnjustifiedAbsences] = useState<number>(0);
  const [sellAbono, setSellAbono] = useState<boolean>(false);
  const [advance13th, setAdvance13th] = useState<boolean>(false);
  const [dependentsCount, setDependentsCount] = useState<number>(0);

  const result = calculateFerias({
    salary,
    variablePayAverage: variablePay,
    unjustifiedAbsences,
    sellAbono,
    advance13th,
    dependentsCount,
  });

  const daysEntitled = getVacationDaysByAbsences(unjustifiedAbsences);

  const shareText = `Resultado do Cálculo de Férias CLT 2026 na Calcula:
Salário Base: ${formatCurrency(result.baseSalary, 'br')}
Dias de Férias a Gozar: ${result.vacationDaysTaken} dias
Abono Pecuniário (Venda de 10 dias): ${sellAbono ? 'Sim' : 'Não'}
Adiantamento 13º: ${advance13th ? 'Sim' : 'Não'}
Total Bruto: ${formatCurrency(result.totalGross, 'br')}
Total Descontos: ${formatCurrency(result.totalDeductions, 'br')}
Total Líquido a Receber: ${formatCurrency(result.totalNet, 'br')}
Prazo de Pagamento: Até 2 dias antes do início do descanso (Art. 145 da CLT)
Simule grátis em: https://calcula.zetawala.com/br/calculadora-ferias/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏖️</span> Dados para o Cálculo de Férias
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="salary"
            name="salary"
            label="Salário Bruto Mensal"
            currencySymbol="R$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
            helpText="Salário contratual registrado na CTPS"
          />

          <MoneyInput
            id="variable-pay"
            name="variable-pay"
            label="Média de Horas Extras e Adicionais"
            currencySymbol="R$"
            value={variablePay}
            onChangeValue={(val) => setVariablePay(val)}
            helpText="Média de adicionais variáveis nos últimos 12 meses"
          />

          <NumberInput
            id="absences"
            name="absences"
            label="Faltas Injustificadas no Período Aquisitivo"
            value={unjustifiedAbsences}
            onChange={(e) => setUnjustifiedAbsences(Number(e.target.value))}
            min={0}
            max={60}
            helpText="Faltas reduzem os dias de férias conforme escala do Art. 130 da CLT"
          />

          <NumberInput
            id="dependents"
            name="dependents"
            label="Número de Dependentes (p/ dedução de IRRF)"
            value={dependentsCount}
            onChange={(e) => setDependentsCount(Number(e.target.value))}
            min={0}
            max={20}
            helpText="Dedução de R$ 189,59 por dependente na base de cálculo"
          />
        </div>

        <div className="space-y-3 pt-3 border-t border-slate-200">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <Checkbox
              id="sell-abono"
              name="sell-abono"
              label="Vender 10 dias de férias (Abono Pecuniário - Art. 143 da CLT)"
              checked={sellAbono}
              onChange={(e) => setSellAbono(e.target.checked)}
              helpTooltip="O abono pecuniário converte 1/3 do período de férias em dinheiro. É totalmente ISENTO de INSS e IRRF."
            />
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <Checkbox
              id="advance-13th"
              name="advance-13th"
              label="Adiantar 50% da 1ª parcela do 13º salário com as férias"
              checked={advance13th}
              onChange={(e) => setAdvance13th(e.target.checked)}
              helpTooltip="Art. 2º, § 2º da Lei 4.749/1965: o empregado tem direito a solicitar o adiantamento de 50% do 13º nas férias tiradas entre fevereiro e novembro."
            />
          </div>
        </div>
      </Card>

      {/* Summary Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dias de Direito (CLT Art. 130)
          </p>
          <p className="text-xl font-bold mt-1 text-slate-900">
            {daysEntitled} dias
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {unjustifiedAbsences <= 5
              ? 'Até 5 faltas: período integral (30 dias)'
              : `${unjustifiedAbsences} faltas: reduzido para ${daysEntitled} dias`}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Divisão das Férias
          </p>
          <p className="text-base font-bold mt-1 text-blue-950">
            {result.vacationDaysTaken} dias de descanso
            {sellAbono ? ` + ${result.abonoDays} dias vendidos` : ''}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            {sellAbono ? 'Abono pecuniário isento de tributação' : 'Gozados integralmente'}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Prazo Legal de Pagamento
          </p>
          <p className="text-sm font-bold mt-1 text-emerald-950">
            {result.paymentDeadline}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Art. 145 da CLT (pagamento antecipado obrigatório)
          </p>
        </div>
      </div>

      <ResultSummary
        country="br"
        totalAmount={result.totalNet}
        totalLabel="Total Líquido a Receber Antes das Férias"
        totalGross={result.totalGross}
        totalDeductions={result.totalDeductions}
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
