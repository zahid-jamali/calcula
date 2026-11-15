import { getRules } from '@/rules';
import { getStaticIndicators } from './indicators';

export type ChileAfpName =
  | 'Capital'
  | 'Cuprum'
  | 'Habitat'
  | 'Modelo'
  | 'PlanVital'
  | 'Provida'
  | 'Uno';

export type ChileSaludType = 'fonasa' | 'isapre';
export type ChileContractType = 'indefinido' | 'plazo-fijo';
export type ChileGratificacionType = 'none' | 'art50' | 'custom';

export interface SueldoLiquidoInput {
  sueldoBase: number;
  gratificacionType?: ChileGratificacionType;
  gratificacionCustom?: number;
  bonosImponibles?: number;
  bonosNoImponibles?: number;
  afp?: ChileAfpName;
  saludType?: ChileSaludType;
  isaprePlanUf?: number;
  contractType?: ChileContractType;
  ufValue?: number;
  utmValue?: number;
  date?: string | Date;
}

export interface CalculationLineItem {
  key: string;
  label: string;
  amount: number;
  formula: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface SueldoLiquidoResult {
  sueldoBase: number;
  gratificacion: number;
  bonosImponibles: number;
  totalImponible: number;
  topeAfpSaludPesos: number;
  baseAfpSalud: number;
  topeCesantiaPesos: number;
  baseCesantia: number;
  afpName: ChileAfpName;
  afpRate: number;
  afpDiscount: number;
  saludType: ChileSaludType;
  saludDiscount: number;
  cesantiaRate: number;
  cesantiaDiscount: number;
  totalPrevision: number;
  baseTributable: number;
  baseTributableUtm: number;
  impuestoUnicoFactor: number;
  impuestoUnicoRebajaUtm: number;
  impuestoUnico: number;
  totalDescuentosLegales: number;
  bonosNoImponibles: number;
  sueldoLiquido: number;
  effectiveRate: number;
  items: CalculationLineItem[];
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

export function calculateSueldoLiquido(input: SueldoLiquidoInput): SueldoLiquidoResult {
  const {
    sueldoBase,
    gratificacionType = 'art50',
    gratificacionCustom = 0,
    bonosImponibles = 0,
    bonosNoImponibles = 0,
    afp = 'Modelo',
    saludType = 'fonasa',
    isaprePlanUf = 0,
    contractType = 'indefinido',
    date,
  } = input;

  const rules = getRules('cl', date);
  const indicators = getStaticIndicators();
  const ufValue = input.ufValue || indicators.uf.value;
  const utmValue = input.utmValue || indicators.utm.value;

  const imm = rules.ingresoMinimoMensual.value;

  // 1. Gratificación
  let gratificacion = 0;
  if (gratificacionType === 'art50') {
    const rawGrat = sueldoBase * rules.gratificacionArt50Rate.value;
    const monthlyCap = Math.round((rules.gratificacionArt50CapMultiple.value * imm) / 12);
    gratificacion = Math.min(rawGrat, monthlyCap);
  } else if (gratificacionType === 'custom') {
    gratificacion = gratificacionCustom;
  }

  // 2. Total Imponible
  const totalImponible = Math.round(sueldoBase + gratificacion + bonosImponibles);

  // 3. Topes imponibles
  const topeAfpSaludPesos = Math.round(rules.topeImponibleAfpUf.value * ufValue);
  const baseAfpSalud = Math.min(totalImponible, topeAfpSaludPesos);

  const topeCesantiaPesos = Math.round(rules.topeImponibleCesantiaUf.value * ufValue);
  const baseCesantia = Math.min(totalImponible, topeCesantiaPesos);

  // 4. AFP Discount
  const afpInfo = rules.afpCommissions.value[afp] || rules.afpCommissions.value['Modelo'];
  const afpRate = afpInfo.totalRate;
  const afpDiscount = Math.round(baseAfpSalud * afpRate);

  // 5. Salud Discount (7% Fonasa or Isapre plan in UF, with 7% minimum)
  const legal7Percent = Math.round(baseAfpSalud * rules.fonasaRate.value);
  let saludDiscount = legal7Percent;
  if (saludType === 'isapre' && isaprePlanUf > 0) {
    const isaprePesos = Math.round(isaprePlanUf * ufValue);
    saludDiscount = Math.max(isaprePesos, legal7Percent);
  }

  // 6. Seguro de Cesantía (0.6% employee for indefinido, 0% for plazo fijo)
  const cesantiaRate =
    contractType === 'indefinido' ? rules.cesantiaEmployeeIndefinidoRate.value : 0;
  const cesantiaDiscount = Math.round(baseCesantia * cesantiaRate);

  // 7. Total Previsión
  const totalPrevision = afpDiscount + saludDiscount + cesantiaDiscount;

  // 8. Base Tributable e Impuesto Único de Segunda Categoría
  const baseTributable = Math.max(0, totalImponible - totalPrevision);
  const baseTributableUtm = utmValue > 0 ? baseTributable / utmValue : 0;

  let impuestoUnicoFactor = 0;
  let impuestoUnicoRebajaUtm = 0;
  let impuestoUnico = 0;

  for (const bracket of rules.impuestoUnicoBrackets.value) {
    const matchesLower = baseTributableUtm > bracket.fromUtm;
    const matchesUpper = bracket.toUtm === null || baseTributableUtm <= bracket.toUtm;

    if (matchesLower && matchesUpper) {
      impuestoUnicoFactor = bracket.factor;
      impuestoUnicoRebajaUtm = bracket.rebajaUtm;
      const taxInUtm = Math.max(0, baseTributableUtm * bracket.factor - bracket.rebajaUtm);
      impuestoUnico = Math.round(taxInUtm * utmValue);
      break;
    }
  }

  // 9. Total Descuentos y Sueldo Líquido
  const totalDescuentosLegales = totalPrevision + impuestoUnico;
  const sueldoLiquido = Math.max(
    0,
    totalImponible - totalDescuentosLegales + bonosNoImponibles
  );
  const effectiveRate =
    totalImponible > 0 ? round((totalDescuentosLegales / totalImponible) * 100) : 0;

  // 10. Items breakdown
  const items: CalculationLineItem[] = [
    {
      key: 'sueldo_base',
      label: 'Sueldo Base Mensual',
      amount: sueldoBase,
      formula: 'Remuneración fija pactada en el contrato',
      legalArticle: 'Art. 42 letra a) del Código del Trabajo',
    },
  ];

  if (gratificacion > 0) {
    items.push({
      key: 'gratificacion',
      label: 'Gratificación Legal (Art. 50)',
      amount: gratificacion,
      formula:
        gratificacionType === 'art50'
          ? '25% del sueldo base con tope mensual de 4,75 IMM / 12'
          : 'Gratificación pactada',
      legalArticle: 'Art. 50 del Código del Trabajo',
    });
  }

  if (bonosImponibles > 0) {
    items.push({
      key: 'bonos_imponibles',
      label: 'Otros Bonos Imponibles',
      amount: bonosImponibles,
      formula: 'Comisiones, bonos de producción o antigüedad',
      legalArticle: 'Art. 41 del Código del Trabajo',
    });
  }

  items.push({
    key: 'descuento_afp',
    label: `Cotización AFP ${afp} (${(afpRate * 100).toFixed(2)}%)`,
    amount: afpDiscount,
    formula: `Base imponible topeada ${baseAfpSalud.toLocaleString('es-CL')} × ${(afpRate * 100).toFixed(2)}% (10% fondo + ${((afpRate - 0.1) * 100).toFixed(2)}% comisión)`,
    legalArticle: 'D.L. 3.500 de 1980',
    isDeduction: true,
  });

  items.push({
    key: 'descuento_salud',
    label:
      saludType === 'fonasa'
        ? 'Salud Fonasa (7%)'
        : `Salud Isapre (${isaprePlanUf} UF)`,
    amount: saludDiscount,
    formula:
      saludType === 'fonasa'
        ? '7% sobre la base imponible topeada'
        : `Plan Isapre ${isaprePlanUf} UF (mínimo legal 7%)`,
    legalArticle: 'Art. 84 D.L. 3.500 y Ley 18.933',
    isDeduction: true,
  });

  if (cesantiaDiscount > 0) {
    items.push({
      key: 'descuento_cesantia',
      label: 'Seguro de Cesantía Trabajador (0,6%)',
      amount: cesantiaDiscount,
      formula: `0,6% sobre la base imponible cesantía (${baseCesantia.toLocaleString('es-CL')})`,
      legalArticle: 'Ley 19.728',
      isDeduction: true,
    });
  }

  if (impuestoUnico > 0) {
    items.push({
      key: 'impuesto_unico',
      label: `Impuesto Único Segunda Categoría (Tramo ${(impuestoUnicoFactor * 100).toFixed(1)}%)`,
      amount: impuestoUnico,
      formula: `Base tributable ${baseTributable.toLocaleString('es-CL')} (${baseTributableUtm.toFixed(2)} UTM) × ${impuestoUnicoFactor} - ${impuestoUnicoRebajaUtm} UTM`,
      legalArticle: 'Art. 43 N° 1 Ley de Impuesto a la Renta (SII)',
      isDeduction: true,
    });
  }

  if (bonosNoImponibles > 0) {
    items.push({
      key: 'haberes_no_imponibles',
      label: 'Haberes No Imponibles (Colación y Movilización)',
      amount: bonosNoImponibles,
      formula: 'Asignaciones de colación, movilización o viáticos exentas de cotización',
      legalArticle: 'Art. 41 inciso 2º del Código del Trabajo',
    });
  }

  return {
    sueldoBase,
    gratificacion,
    bonosImponibles,
    totalImponible,
    topeAfpSaludPesos,
    baseAfpSalud,
    topeCesantiaPesos,
    baseCesantia,
    afpName: afp,
    afpRate,
    afpDiscount,
    saludType,
    saludDiscount,
    cesantiaRate,
    cesantiaDiscount,
    totalPrevision,
    baseTributable,
    baseTributableUtm: round(baseTributableUtm),
    impuestoUnicoFactor,
    impuestoUnicoRebajaUtm,
    impuestoUnico,
    totalDescuentosLegales,
    bonosNoImponibles,
    sueldoLiquido,
    effectiveRate,
    items,
  };
}

/**
 * Reverse mode: Calculates the sueldo base (gross) required to reach target net salary.
 */
export function calculateSueldoBrutoFromLiquido(
  targetLiquido: number,
  options: Omit<SueldoLiquidoInput, 'sueldoBase'> = {}
): number {
  if (targetLiquido <= 0) return 0;

  let low = 0;
  let high = Math.max(targetLiquido * 3, 2000000);

  while (calculateSueldoLiquido({ sueldoBase: high, ...options }).sueldoLiquido < targetLiquido) {
    high *= 2;
  }

  for (let iter = 0; iter < 60; iter++) {
    const mid = (low + high) / 2;
    const currentNet = calculateSueldoLiquido({ sueldoBase: mid, ...options }).sueldoLiquido;

    if (Math.abs(currentNet - targetLiquido) < 0.5) {
      return Math.round(mid);
    }

    if (currentNet < targetLiquido) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return Math.round((low + high) / 2);
}
