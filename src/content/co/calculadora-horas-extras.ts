import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Horas Extras Colombia 2026 | Calcula',
  metaDescription:
    'Calcule horas extras y recargos 2026: extra diurna 25%, nocturna 75%, recargo nocturno 35% desde las 7 p. m. y dominical 90%. Jornada de 42 horas.',
  h1: 'Calculadora de Horas Extras y Recargos 2026',
  quickAnswer:
    'Desde el 15 de julio de 2026 la jornada máxima es de 42 horas semanales, así que la hora ordinaria es el salario entre 210. La extra diurna paga 25% adicional y la nocturna 75%. El recargo nocturno es del 35% desde las 7 p. m., y el dominical o festivo del 90% desde julio de 2026.',
  howItWorks: [
    { step: 1, title: 'Valor de la hora ordinaria', description: 'Salario mensual entre las horas mensuales de la jornada vigente (jornada semanal × 5).', formula: 'Hora = salario ÷ (horas semanales × 5); 42 h → 210', legalArticle: 'CST art. 161; Ley 2101 de 2021' },
    { step: 2, title: 'Horas extra', description: 'Las que exceden la jornada: hora completa más 25% (diurna) o 75% (nocturna).', formula: 'Extra diurna = hora × 1,25; extra nocturna = hora × 1,75', legalArticle: 'CST art. 168' },
    { step: 3, title: 'Recargos', description: 'Para horas ordinarias en horario nocturno o en domingo y festivo se paga solo el porcentaje adicional.', formula: 'Recargo nocturno = hora × 35%; dominical = hora × 90%', legalArticle: 'CST arts. 168 y 179' },
    { step: 4, title: 'Combinaciones', description: 'Los recargos se suman: extra dominical nocturna = hora × (1 + 90% + 75%).', formula: 'Extra dominical nocturna = hora × 2,65', legalArticle: 'CST art. 179 (Ley 2466 de 2025)' },
  ],
  article: `## La jornada máxima en 2026

La Ley 2101 de 2021 redujo gradualmente la jornada máxima legal en Colombia de 48 a 42 horas semanales, sin disminuir el salario. La reducción se hizo por etapas: 47 horas desde el 15 de julio de 2023, 46 horas desde el 15 de julio de 2024, 44 horas desde el 15 de julio de 2025 y 42 horas desde el 15 de julio de 2026. Cada reducción aumenta el valor de la hora ordinaria y, por lo tanto, el de las horas extra y los recargos.

Para calcular el valor de la hora, se divide el salario mensual entre las horas mensuales de la jornada, que equivalen a la jornada semanal por cinco. Con 42 horas son 210 horas al mes; con 44 eran 220; con 46, 230. Un salario de $2.100.000 da una hora ordinaria de $10.000 desde el 15 de julio de 2026.

## Horas extra diurnas y nocturnas

Son horas extra las que exceden la jornada máxima o la pactada si es menor. La hora extra diurna se paga con un recargo del 25% sobre el valor de la hora ordinaria y la nocturna con un recargo del 75%. Es decir, la extra diurna vale 125% de la hora ordinaria y la nocturna, 175%. La ley limita el trabajo suplementario a dos horas diarias y doce semanales, y requiere autorización del Ministerio del Trabajo en algunos casos.

## Trabajo nocturno desde las 7 p. m.

La Ley 2466 de 2025, conocida como reforma laboral, modificó el horario nocturno. Antes, el trabajo nocturno iba de las 9:00 p. m. a las 6:00 a. m.; desde el 25 de diciembre de 2025 va de las 7:00 p. m. a las 6:00 a. m. Las horas ordinarias que se trabajen en ese horario tienen un recargo del 35% sobre el valor de la hora ordinaria. El porcentaje no cambió; lo que cambió es que ahora más horas del día se consideran nocturnas.

## Recargo dominical y festivo

El trabajo en domingo o festivo se paga con un recargo que la reforma laboral aumentó de forma escalonada: 75% hasta el 30 de junio de 2025, 80% desde el 1 de julio de 2025, 90% desde el 1 de julio de 2026 y 100% desde el 1 de julio de 2027. La calculadora usa el porcentaje vigente en la fecha que usted indique, para que pueda liquidar también periodos anteriores.

Si el trabajo dominical es ocasional, el trabajador puede elegir entre un día de descanso compensatorio remunerado o la retribución en dinero. Si es habitual, tiene derecho a un día de descanso compensatorio además del recargo.

## Cómo se combinan los recargos

Los recargos se suman. Una hora ordinaria en domingo de noche paga el recargo dominical más el nocturno: 90% + 35% = 125% adicional en 2026. Una hora extra diurna en domingo paga la hora completa más el recargo dominical más el de extra diurna: 100% + 90% + 25% = 215%. Una hora extra nocturna en domingo vale 100% + 90% + 75% = 265% de la hora ordinaria.

## Recargo frente a hora completa

La calculadora distingue entre recargos y horas extra. En los recargos, como el nocturno y el dominical sobre horas ordinarias, solo se paga el porcentaje adicional, porque la hora ordinaria ya está incluida en su salario mensual. En las horas extra se paga la hora completa más el recargo, porque son horas por fuera de la jornada.

## Trabajadores de dirección y confianza

Los trabajadores de dirección, confianza y manejo no tienen derecho al pago de horas extra, porque están excluidos de la jornada máxima. Sí tienen derecho al recargo dominical y festivo cuando trabajan esos días. El salario integral tampoco excluye el pago de dominicales y festivos.

## Cómo usar la calculadora

Ingrese su salario mensual, la fecha del trabajo y la cantidad de horas de cada tipo. La calculadora toma la jornada máxima y los recargos vigentes en esa fecha, calcula el valor de la hora ordinaria y le muestra el valor por hora y el total de cada concepto.

## Horas extra y prestaciones sociales

Las horas extra y los recargos habituales son salario. Por eso se incluyen en el promedio con el que se liquidan las cesantías, la prima y, si el salario es variable, las vacaciones, y también en el ingreso base de cotización a salud y pensión. Si trabaja horas extra con frecuencia, verifique que aparezcan en su desprendible y en el cálculo de sus prestaciones.

## Cómo registrar sus horas

Lleve un registro propio de las horas trabajadas con fecha, hora de entrada y de salida, y compárelo cada quincena con su desprendible. El empleador está obligado a llevar el registro del trabajo suplementario. Si encuentra diferencias, reclame por escrito: la prueba de las horas extra corresponde en principio al trabajador, por lo que sus anotaciones, correos y mensajes pueden ser decisivos.

## Resumen rápido

En 2026 la hora ordinaria es el salario entre 210. La extra diurna vale 125% y la nocturna 175%. El recargo nocturno es del 35% desde las 7 p. m. y el dominical del 90% desde julio de 2026, y sube al 100% en julio de 2027.`,
  examples: [
    {
      title: 'Ejemplo 1: horas extra y domingo',
      scenario: 'Laura gana $2.100.000. En noviembre de 2026 trabajó 6 horas extra diurnas, 4 horas ordinarias nocturnas y 8 horas ordinarias un domingo.',
      inputs: { 'Salario': '$2.100.000', 'Horas mensuales': '210', 'Hora ordinaria': '$10.000' },
      breakdown: [
        { item: '6 h extra diurnas (125%)', amount: '$75.000' },
        { item: '4 h recargo nocturno (35%)', amount: '$14.000' },
        { item: '8 h recargo dominical (90%)', amount: '$72.000' },
      ],
      total: '$161.000',
    },
    {
      title: 'Ejemplo 2: salario mínimo en domingo de noche',
      scenario: 'Jaime gana el salario mínimo. Trabajó 4 horas extra nocturnas, 6 horas ordinarias un domingo de noche y 2 horas extra diurnas un festivo.',
      inputs: { 'Salario': '$1.750.905', 'Hora ordinaria': '$8.338' },
      breakdown: [
        { item: '4 h extra nocturnas (175%)', amount: '$58.364' },
        { item: '6 h dominical nocturno (125%)', amount: '$62.532' },
        { item: '2 h extra dominical diurna (215%)', amount: '$35.852' },
      ],
      total: '$156.748',
    },
  ],
  faqs: [
    { q: '¿Cuál es la jornada máxima en 2026?', a: '42 horas semanales desde el 15 de julio de 2026 (antes, 44 horas).' },
    { q: '¿Cómo calculo el valor de mi hora?', a: 'Divida su salario mensual entre 210 horas (42 horas × 5).' },
    { q: '¿Cuánto se paga la hora extra diurna?', a: 'La hora ordinaria más 25%, es decir, 125%.' },
    { q: '¿Cuánto se paga la hora extra nocturna?', a: 'La hora ordinaria más 75%, es decir, 175%.' },
    { q: '¿Desde qué hora empieza el recargo nocturno?', a: 'Desde las 7:00 p. m., a partir del 25 de diciembre de 2025.' },
    { q: '¿Cuánto es el recargo dominical en 2026?', a: '80% hasta el 30 de junio de 2026 y 90% desde el 1 de julio de 2026.' },
    { q: '¿Cuándo llega el recargo dominical al 100%?', a: 'El 1 de julio de 2027.' },
    { q: '¿Cuántas horas extra se pueden trabajar?', a: 'Máximo dos horas diarias y doce semanales.' },
    { q: '¿Los cargos de confianza reciben horas extra?', a: 'No, pero sí reciben el recargo dominical y festivo.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, arts. 161, 168 y 179', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 2101 de 2021', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2101_2021.html' },
    { label: 'Ley 2466 de 2025 (Función Pública)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de salario neto', path: '/co/calculadora-salario-neto/', description: 'Aportes y retención.' },
    { title: 'Calculadora de cesantías', path: '/co/calculadora-cesantias/', description: 'Las horas extra suben la base.' },
    { title: 'Reforma laboral 2025', path: '/co/reforma-laboral/', description: 'Fechas de cada cambio.' },
  ],
  relatedGuides: [
    { title: 'Recargos nocturnos y dominicales', path: '/co/guias/recargos-nocturnos-y-dominicales/', description: 'Guía completa 2026.' },
    { title: 'Salario mínimo 2026', path: '/co/salario-minimo/', description: 'Valor hora del mínimo.' },
  ],
  updatedAt: '2026-11-14',
};
