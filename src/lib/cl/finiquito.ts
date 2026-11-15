import { getRules } from '@/rules';
import { getUfForDate } from './indicators';

export type ClSeparationReason =
  | 'renuncia' // Art. 159 N° 2
  | 'necesidades_empresa' // Art. 161
  | 'mutuo_acuerdo' // Art. 159 N° 1
  | 'vencimiento_plazo' // Art. 159 N° 4
  | 'despido'; // Art. 160

export interface ClFiniquitoInput {
  monthlySalary: number;
  startDate: string;
  endDate: string;
  reason: ClSeparationReason;
  hasNotice?: boolean; // true si el empleador avisó con 30 días de anticipación (no paga indemnización sustitutiva)
  pendingVacationDays?: number; // Días hábiles de vacaciones legales pendientes de períodos anteriores
  ufValue?: number; // Opcional, si no se pasa se obtiene para la fecha de término
}

export interface CalculationLineItem {
  key: string;
  label: string;
  amount: number;
  formula: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface ClFiniquitoResult {
  items: CalculationLineItem[];
  totalFiniquito: number;
  totalFiniquitoUf: number;
  serviceYears: number;
  workedDaysInFinalMonth: number;
  ufValue: number;
  remuneracionTopeadaPesos: number;
  isRemunerationCapped: boolean;
  businessVacationDays: number;
  totalVacationCalendarDays: number;
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates labor severance payout (finiquito) in Chile under Código del Trabajo.
 */
export function calculateClFiniquito(input: ClFiniquitoInput): ClFiniquitoResult {
  const {
    monthlySalary,
    startDate,
    endDate,
    reason,
    hasNotice = false,
    pendingVacationDays = 0,
  } = input;

  const rules = getRules('cl', endDate);
  const ufValue = input.ufValue || getUfForDate(endDate);

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = Math.max(0, end.getTime() - start.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const fullYears = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;

  // Art. 163: Fracción superior a 6 meses (180 días) cuenta como un año completo
  const computedServiceYears = Math.min(
    rules.indemnizacionMaxYears.value,
    remainingDays > 180 ? fullYears + 1 : fullYears
  );

  const dailySalary = monthlySalary / 30;
  const workedDaysInFinalMonth = Math.min(30, end.getDate());

  // 1. Días trabajados del mes de término (saldo de sueldo)
  const sueldoDias = Math.round(workedDaysInFinalMonth * dailySalary);

  // 2. Feriado Proporcional y Legal Pendiente (Art. 67 y 73 Código del Trabajo)
  // El trabajador devenga 1,25 días hábiles por mes laborado
  const monthsInAcquisitionCycle = Math.max(1, Math.floor(remainingDays / 30.4));
  const propBusinessDays = round(monthsInAcquisitionCycle * rules.feriadoMonthlyRate.value);
  const totalBusinessDays = round(propBusinessDays + pendingVacationDays);

  // Dirección del Trabajo: los días hábiles se proyectan considerando fines de semana inhábiles (factor 7/5)
  const calendarVacationDays = round(totalBusinessDays * (7 / 5));
  const feriadoProporcionalMonto = Math.round(calendarVacationDays * dailySalary);

  const items: CalculationLineItem[] = [
    {
      key: 'sueldo_dias',
      label: `Sueldo días trabajados mes (${workedDaysInFinalMonth} días)`,
      amount: sueldoDias,
      formula: `(${monthlySalary.toLocaleString('es-CL')} ÷ 30) × ${workedDaysInFinalMonth} días`,
      legalArticle: 'Art. 44 del Código del Trabajo',
    },
    {
      key: 'feriado_proporcional',
      label: `Feriado legal y proporcional (${totalBusinessDays} días hábiles / ~${calendarVacationDays} corridos)`,
      amount: feriadoProporcionalMonto,
      formula: `${calendarVacationDays} días corridos proyectados × (${monthlySalary.toLocaleString('es-CL')} ÷ 30)`,
      legalArticle: 'Art. 67 y 73 del Código del Trabajo',
    },
  ];

  // Tope legal de 90 UF para indemnizaciones por término (Art. 172 Código del Trabajo)
  const tope90UfPesos = Math.round(rules.indemnizacionCapUf.value * ufValue);
  const remuneracionTopeadaPesos = Math.min(monthlySalary, tope90UfPesos);
  const isRemunerationCapped = monthlySalary > tope90UfPesos;

  // 3. Indemnizaciones exclusivas para despido por Necesidades de la Empresa (Art. 161)
  if (reason === 'necesidades_empresa') {
    // Indemnización sustitutiva del aviso previo (si no se notificó con 30 días de anticipación)
    if (!hasNotice) {
      items.push({
        key: 'indemnizacion_aviso_previo',
        label: `Indemnización sustitutiva del aviso previo (1 mes${isRemunerationCapped ? ' - tope 90 UF' : ''})`,
        amount: remuneracionTopeadaPesos,
        formula: isRemunerationCapped
          ? `Tope legal de 90 UF (${rules.indemnizacionCapUf.value} × $${ufValue.toLocaleString('es-CL')})`
          : '1 mes de última remuneración devengada',
        legalArticle: 'Art. 161 inciso 2º y Art. 172 del Código del Trabajo',
      });
    }

    // Indemnización por años de servicio (si lleva 1 año o más)
    if (computedServiceYears >= 1) {
      const aniosServicioMonto = remuneracionTopeadaPesos * computedServiceYears;
      items.push({
        key: 'indemnizacion_anios_servicio',
        label: `Indemnización por años de servicio (${computedServiceYears} ${computedServiceYears === 1 ? 'año' : 'años'}${isRemunerationCapped ? ' - tope 90 UF' : ''})`,
        amount: aniosServicioMonto,
        formula: `${computedServiceYears} años × $${remuneracionTopeadaPesos.toLocaleString('es-CL')} (máx. 11 años)`,
        legalArticle: 'Art. 163 y Art. 172 del Código del Trabajo',
      });
    }
  }

  const totalFiniquito = items.reduce((acc, curr) => acc + curr.amount, 0);
  const totalFiniquitoUf = ufValue > 0 ? round(totalFiniquito / ufValue) : 0;

  return {
    items,
    totalFiniquito,
    totalFiniquitoUf,
    serviceYears: computedServiceYears,
    workedDaysInFinalMonth,
    ufValue,
    remuneracionTopeadaPesos,
    isRemunerationCapped,
    businessVacationDays: totalBusinessDays,
    totalVacationCalendarDays: calendarVacationDays,
  };
}
