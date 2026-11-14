import { co2026 } from '@/rules/co/2026';
import { round0, auxilioFor, applyBrackets } from './common';

export interface CoSalarioNetoInput {
  grossMonthly: number;
  /** Salario integral (≥ 13 SMMLV): contributions on 70% and no auxilio */
  integral?: boolean;
  /** Has economic dependents (deduction of 10%, max 32 UVT per month) */
  hasDependents?: boolean;
}

export interface CoSalarioNetoResult {
  gross: number;
  ibc: number;
  salud: number;
  pension: number;
  fondoSolidaridad: number;
  fondoSolidaridadRate: number;
  auxilio: number;
  retencionBase: number;
  retencionBaseUvt: number;
  rentaExenta: number;
  dependentDeduction: number;
  retencion: number;
  netMonthly: number;
  netQuincena: number;
}

/** DIAN withholdings are rounded to the nearest thousand pesos (art. 868 ET). */
const roundThousand = (n: number) => Math.round(n / 1000) * 1000;

export function calculateCoSalarioNeto(input: CoSalarioNetoInput): CoSalarioNetoResult {
  const gross = Math.max(0, input.grossMonthly || 0);
  const smmlv = co2026.smmlv.value;
  const uvt = co2026.uvt.value;
  const c = co2026.employeeContributions.value;
  const integral = !!input.integral;

  // IBC: 70% for integral salary; minimum 1 SMMLV, maximum 25 SMMLV
  const rawIbc = integral ? gross * c.integralSalaryIbcFactor : gross;
  const ibc = gross > 0 ? Math.min(Math.max(rawIbc, smmlv), c.ibcMaxSmmlv * smmlv) : 0;

  const salud = round0(ibc * c.salud);
  const pension = round0(ibc * c.pension);
  let fspRate = 0;
  for (const row of co2026.fondoSolidaridad.value) {
    if (ibc >= row.fromSmmlv * smmlv) fspRate = row.rate;
  }
  const fondoSolidaridad = round0(ibc * fspRate);
  const auxilio = integral ? 0 : auxilioFor(gross);

  // Retención en la fuente — procedimiento 1 (art. 383 ET)
  const r = co2026.retencion.value;
  const incr = salud + pension + fondoSolidaridad; // ingresos no constitutivos de renta
  const netIncome = Math.max(0, gross - incr);
  const dependentDeduction = input.hasDependents
    ? Math.min(gross * r.dependentDeductionRate, r.dependentDeductionCapUvtMonthly * uvt)
    : 0;
  const rentaExentaRaw = Math.min(
    (netIncome - dependentDeduction) * r.rentaExentaRate,
    (r.rentaExentaCapUvtAnnual / 12) * uvt
  );
  // Global limit: deductions + exempt income ≤ 40% of net income and ≤ 1,340 UVT a year
  const globalCap = Math.min(netIncome * r.globalLimitRate, (r.globalLimitUvtAnnual / 12) * uvt);
  const totalBenefits = Math.min(dependentDeduction + Math.max(0, rentaExentaRaw), globalCap);
  const rentaExenta = Math.max(0, totalBenefits - dependentDeduction);
  const retencionBase = Math.max(0, netIncome - totalBenefits);
  const baseUvt = retencionBase / uvt;
  const retencionUvt = applyBrackets(baseUvt, co2026.retencionProcedimiento1.value);
  const retencion = roundThousand(retencionUvt * uvt);

  const netMonthly = gross - salud - pension - fondoSolidaridad - retencion + auxilio;
  return {
    gross,
    ibc: round0(ibc),
    salud,
    pension,
    fondoSolidaridad,
    fondoSolidaridadRate: fspRate,
    auxilio,
    retencionBase: round0(retencionBase),
    retencionBaseUvt: Math.round(baseUvt * 100) / 100,
    rentaExenta: round0(rentaExenta),
    dependentDeduction: round0(Math.min(dependentDeduction, totalBenefits)),
    retencion,
    netMonthly: round0(netMonthly),
    netQuincena: round0(netMonthly / 2),
  };
}
