import { getRules } from '@/rules';
import { CalculationLineItem } from '../br/rescisao';

export type ClSeparationReason = 'renuncia' | 'necesidades_empresa' | 'despido_disciplinario';

export interface ClFiniquitoInput {
  monthlySalary: number;
  startDate: string;
  endDate: string;
  reason: ClSeparationReason;
  hasNotice?: boolean; // false si no hubo aviso de 30 días y se paga mes de aviso
  pendingVacationDays?: number;
}

export interface ClFiniquitoResult {
  items: CalculationLineItem[];
  totalFiniquito: number;
  serviceYears: number;
  workedDaysInFinalMonth: number;
}

export function calculateClFiniquito(input: ClFiniquitoInput): ClFiniquitoResult {
  const { monthlySalary, startDate, endDate, reason, hasNotice = false, pendingVacationDays = 0 } = input;
  const rules = getRules('cl', endDate);

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = Math.max(0, end.getTime() - start.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const fullYears = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;
  // Art. 163: Fracción superior a 6 meses (180 días) cuenta como un año completo
  const computedServiceYears = Math.min(
    rules.indemnizacionAniosServicioTopeAnios.value,
    remainingDays > 180 ? fullYears + 1 : fullYears
  );

  const dailySalary = monthlySalary / 30;
  const workedDaysInFinalMonth = end.getDate();

  // 1. Días trabajados del mes de salida
  const sueldoDias = Math.round(workedDaysInFinalMonth * dailySalary);

  // 2. Feriado Proporcional (Art. 67 y 73 Código del Trabajo: 1.25 días hábiles por mes)
  const monthsInFinalYear = Math.floor(remainingDays / 30);
  const propVacationDays = monthsInFinalYear * 1.25 + pendingVacationDays;
  const feriadoProporcional = Math.round(propVacationDays * dailySalary);

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
      label: `Feriado legal y proporcional (${propVacationDays.toFixed(1)} días)`,
      amount: feriadoProporcional,
      formula: `${propVacationDays.toFixed(1)} días × (${monthlySalary.toLocaleString('es-CL')} ÷ 30)`,
      legalArticle: 'Art. 67 y 73 del Código del Trabajo',
    },
  ];

  // Si es por Necesidades de la Empresa (Art. 161)
  if (reason === 'necesidades_empresa') {
    // Mes de aviso previo si no se dio con 30 días de anticipación
    if (!hasNotice) {
      items.push({
        key: 'indemnizacion_aviso_previo',
        label: 'Indemnización sustitutiva del aviso previo (1 mes)',
        amount: monthlySalary,
        formula: `1 mes de última remuneración devengada`,
        legalArticle: 'Art. 161 y 162 del Código del Trabajo',
      });
    }

    // Años de servicio (si lleva 1 año o más)
    if (computedServiceYears >= 1) {
      const aniosServicioMonto = monthlySalary * computedServiceYears;
      items.push({
        key: 'indemnizacion_anios_servicio',
        label: `Indemnización por años de servicio (${computedServiceYears} ${computedServiceYears === 1 ? 'año' : 'años'})`,
        amount: aniosServicioMonto,
        formula: `${computedServiceYears} años × ${monthlySalary.toLocaleString('es-CL')} (tope 11 años)`,
        legalArticle: 'Art. 163 del Código del Trabajo',
      });
    }
  }

  const totalFiniquito = items.reduce((acc, curr) => acc + curr.amount, 0);

  return {
    items,
    totalFiniquito,
    serviceYears: computedServiceYears,
    workedDaysInFinalMonth,
  };
}
