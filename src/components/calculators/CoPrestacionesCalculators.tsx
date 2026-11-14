'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, DateInput, ResultSummary } from '@/components/ui';
import {
  calculateCoPrima,
  calculateCoCesantias,
  calculateCoVacaciones,
  daysWorkedInSemester,
} from '@/lib/co/prestaciones';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard, useTodayState } from './shared';

const cop = (n: number) => formatCurrency(n, 'co');
const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(y, m - 1, d))
  );
};

export function CoPrimaCalculator() {
  const [salary, setSalary] = useState<number>(1750905);
  const [variable, setVariable] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('2026-07-01');
  const [refDate, setRefDate] = useState<string>('2026-12-31');
  const days = daysWorkedInSemester(startDate, refDate);
  const r = calculateCoPrima({ monthlySalary: salary, variableAverage: variable, daysInSemester: days, referenceDate: refDate });

  const shareText = `Mi prima de servicios (Calcula Colombia):
Días del semestre: ${r.days}
Prima: ${cop(r.prima)} · pago a más tardar el ${fmtDate(r.deadline)}
Calcula la tuya: https://calcula.zetawala.com/co/calculadora-prima/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎁</span> Calcula tu prima de servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput id="co-prima-salary" name="salary" label="Salario mensual" currencySymbol="$" value={salary} onChangeValue={(v) => setSalary(v)} />
          <MoneyInput id="co-prima-var" name="variable" label="Promedio de pagos variables (opcional)" currencySymbol="$" value={variable} onChangeValue={(v) => setVariable(v)} />
          <DateInput
            id="co-prima-start"
            name="startDate"
            label="Desde (ingreso o inicio del semestre)"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            hint="1 de enero o 1 de julio si trabajaste todo el semestre"
          />
          <DateInput
            id="co-prima-ref"
            name="refDate"
            label="Hasta (fin del semestre o fecha de retiro)"
            value={refDate}
            onChange={(e) => setRefDate(e.target.value)}
          />
        </div>
      </Card>
      <ResultSummary
        country="co"
        totalAmount={r.prima}
        totalLabel={`Prima del ${r.semester === 1 ? 'primer' : 'segundo'} semestre`}
        totalGross={r.prima}
        totalDeductions={0}
        badge="CST art. 306"
        subtitle={`Pago a más tardar el ${fmtDate(r.deadline)}`}
        items={[
          {
            key: 'base',
            label: 'Base: salario + variables + auxilio de transporte',
            amount: r.base,
            formula: r.auxilio ? `Incluye auxilio de ${cop(r.auxilio)} (salario ≤ 2 SMMLV)` : 'Sin auxilio (salario > 2 SMMLV)',
            legalArticle: 'Ley 1 de 1963',
          },
          {
            key: 'prima',
            label: `Prima por ${r.days} días`,
            amount: r.prima,
            formula: `${cop(r.base)} × ${r.days} ÷ 360`,
            legalArticle: 'CST art. 306',
          },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
    </div>
  );
}

export function CoCesantiasCalculator() {
  const [salary, setSalary] = useState<number>(2500000);
  const [variable, setVariable] = useState<number>(0);
  const [days, setDays] = useState<number>(360);
  const r = calculateCoCesantias({ monthlySalary: salary, variableAverage: variable, daysWorked: days, year: 2026 });

  const shareText = `Mis cesantías 2026 (Calcula Colombia):
Cesantías: ${cop(r.cesantias)} · Intereses: ${cop(r.intereses)}
Calcula las tuyas: https://calcula.zetawala.com/co/calculadora-cesantias/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏦</span> Cesantías e intereses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MoneyInput id="co-ces-salary" name="salary" label="Salario mensual" currencySymbol="$" value={salary} onChangeValue={(v) => setSalary(v)} />
          <MoneyInput id="co-ces-var" name="variable" label="Promedio de variables (opcional)" currencySymbol="$" value={variable} onChangeValue={(v) => setVariable(v)} />
          <NumberInput
            id="co-ces-days"
            name="days"
            label="Días trabajados en el año"
            value={days}
            min={0}
            max={360}
            onChange={(e) => setDays(Number(e.target.value))}
            helpText="Año completo = 360 días"
          />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard label="Consignación al fondo" value={fmtDate(r.depositDeadline)} hint="Cesantías del año 2026" tone="blue" />
        <StatCard label="Pago de intereses al trabajador" value={fmtDate(r.interestDeadline)} hint="Directamente en tu nómina" tone="emerald" />
      </div>
      <ResultSummary
        country="co"
        totalAmount={r.total}
        totalLabel="Cesantías + intereses"
        totalGross={r.total}
        totalDeductions={0}
        badge="CST art. 249"
        items={[
          { key: 'ces', label: `Cesantías (${r.days} días)`, amount: r.cesantias, formula: `${cop(r.base)} × ${r.days} ÷ 360`, legalArticle: 'CST art. 249' },
          { key: 'int', label: 'Intereses sobre cesantías (12% anual)', amount: r.intereses, formula: `${cop(r.cesantias)} × ${r.days} × 12% ÷ 360`, legalArticle: 'Ley 52 de 1975' },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
    </div>
  );
}

export function CoVacacionesCalculator() {
  const [salary, setSalary] = useState<number>(3000000);
  const [variable, setVariable] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('2024-02-01');
  const [refDate, setRefDate] = useTodayState('2026-11-14');
  const [taken, setTaken] = useState<number>(15);
  const [compensate, setCompensate] = useState<number>(0);
  const r = calculateCoVacaciones({
    monthlySalary: salary,
    variableAverage: variable,
    startDate,
    referenceDate: refDate,
    daysTaken: taken,
    daysToCompensate: compensate,
  });

  const shareText = `Mis vacaciones en Colombia (Calcula):
Días acumulados pendientes: ${r.pendingDays}
Valor: ${cop(r.pendingValue)}
Calcula las tuyas: https://calcula.zetawala.com/co/calculadora-vacaciones/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏖️</span> Vacaciones acumuladas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput id="co-vac-salary" name="salary" label="Salario mensual" currencySymbol="$" value={salary} onChangeValue={(v) => setSalary(v)} helpText="El auxilio de transporte no se incluye" />
          <MoneyInput id="co-vac-var" name="variable" label="Promedio de variables del último año (opcional)" currencySymbol="$" value={variable} onChangeValue={(v) => setVariable(v)} />
          <DateInput id="co-vac-start" name="startDate" label="Fecha de ingreso" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <DateInput id="co-vac-ref" name="refDate" label="Fecha de corte" value={refDate} onChange={(e) => setRefDate(e.target.value)} />
          <NumberInput id="co-vac-taken" name="taken" label="Días hábiles ya disfrutados" value={taken} min={0} onChange={(e) => setTaken(Number(e.target.value))} />
          <NumberInput
            id="co-vac-comp"
            name="compensate"
            label="Días que quieres compensar en dinero"
            value={compensate}
            min={0}
            onChange={(e) => setCompensate(Number(e.target.value))}
            helpText={`Máximo la mitad: ${r.maxCompensableDays} días`}
          />
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Días causados" value={String(r.accruedDays)} hint={`${r.workedDays} días trabajados`} />
        <StatCard label="Días pendientes" value={String(r.pendingDays)} tone="emerald" />
        <StatCard label="Días para disfrutar" value={String(r.daysToEnjoy)} tone="blue" />
      </div>
      <ResultSummary
        country="co"
        totalAmount={r.pendingValue}
        totalLabel="Valor de las vacaciones pendientes"
        totalGross={r.pendingValue}
        totalDeductions={0}
        badge="CST art. 186"
        items={[
          { key: 'pend', label: `Vacaciones pendientes (${r.pendingDays} días)`, amount: r.pendingValue, formula: `${cop(r.dailySalary)} × ${r.pendingDays} días`, legalArticle: 'CST arts. 186 y 192' },
          { key: 'comp', label: `Compensado en dinero (${r.compensatedDays} días)`, amount: r.compensatedValue, formula: 'Hasta la mitad de los días, por acuerdo escrito', legalArticle: 'CST art. 189' },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
    </div>
  );
}
