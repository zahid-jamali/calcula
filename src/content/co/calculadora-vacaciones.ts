import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Vacaciones Colombia 2026 | Calcula',
  metaDescription:
    'Calcule sus vacaciones en Colombia: 15 días hábiles por año, días acumulados, valor en pesos y compensación en dinero de hasta la mitad (CST art. 189).',
  h1: 'Calculadora de Vacaciones en Colombia 2026',
  quickAnswer:
    'En Colombia usted tiene derecho a 15 días hábiles de vacaciones remuneradas por cada año trabajado. Se pagan con el salario ordinario, sin auxilio de transporte. Con acuerdo escrito, puede compensar en dinero hasta la mitad de las vacaciones; el resto debe disfrutarse. Al terminar el contrato, las vacaciones pendientes se pagan en la liquidación.',
  howItWorks: [
    { step: 1, title: 'Días trabajados', description: 'Desde la fecha de ingreso hasta la fecha de corte, con año de 360 días.', formula: 'Días = días360(ingreso, corte)', legalArticle: 'CST art. 186' },
    { step: 2, title: 'Días causados', description: 'Quince días hábiles por cada 360 días trabajados.', formula: 'Días causados = días trabajados × 15 ÷ 360', legalArticle: 'CST art. 186' },
    { step: 3, title: 'Valor', description: 'Salario ordinario (más promedio de variables) entre 30, por los días pendientes.', formula: 'Valor = salario ÷ 30 × días pendientes', legalArticle: 'CST art. 192' },
    { step: 4, title: 'Compensación en dinero', description: 'Hasta la mitad de los días, por acuerdo escrito entre las partes.', formula: 'Máximo compensable = días pendientes ÷ 2', legalArticle: 'CST art. 189' },
  ],
  article: `## El derecho a las vacaciones

El artículo 186 del Código Sustantivo del Trabajo establece que los trabajadores que hayan prestado sus servicios durante un año tienen derecho a 15 días hábiles consecutivos de vacaciones remuneradas. Son días hábiles, por lo que no se cuentan los domingos ni los festivos, y tampoco los sábados si en su empresa no se trabaja ese día. Por eso, en la práctica, 15 días hábiles equivalen a unas tres semanas de descanso.

## Cómo se pagan

Durante las vacaciones usted recibe el salario ordinario que devengue el día en que empiece a disfrutarlas. Si su salario es variable, se toma el promedio de lo devengado en el año anterior. Para el pago se toman 15 días de salario, que equivalen a medio salario mensual: quien gana $3.000.000 recibe $1.500.000 por un periodo completo de vacaciones. El auxilio de transporte no se incluye, porque durante el descanso no hay desplazamiento al trabajo, y tampoco el valor del trabajo en horas extra.

## Vacaciones acumuladas

El empleador debe conceder las vacaciones dentro del año siguiente a la fecha en que se causaron. El trabajador puede acumularlas hasta por dos años, y hasta por cuatro años en ciertos casos, como trabajadores técnicos o de confianza o quienes prestan servicios en lugares distintos a su residencia. En todo caso, debe disfrutar al menos seis días hábiles continuos al año, que no son acumulables.

## Compensación en dinero

Desde la Ley 1429 de 2010, el artículo 189 permite que empleador y trabajador acuerden, por escrito, compensar en dinero hasta la mitad de las vacaciones. La otra mitad debe disfrutarse en descanso. Cuando el contrato termina, todas las vacaciones causadas y no disfrutadas se compensan en dinero, incluso por fracciones de año.

## Vacaciones proporcionales

No hace falta cumplir un año para tener derecho al pago de vacaciones al terminar el contrato: se reconocen proporcionalmente al tiempo trabajado. La fórmula práctica es salario por días trabajados entre 720, que equivale a 15 días por cada 360. Mientras el contrato sigue vigente, las vacaciones se disfrutan cuando se completa el año.

## Interrupción y fraccionamiento

Si durante las vacaciones el empleador lo llama a trabajar, conserva el derecho a reanudarlas después. Si usted se incapacita durante sus vacaciones, la jurisprudencia ha reconocido que puede solicitar que se suspendan y se disfruten luego. Las vacaciones también pueden fraccionarse por acuerdo, por ejemplo para atender necesidades del servicio, respetando el mínimo de seis días continuos.

## Vacaciones colectivas

Algunas empresas cierran operaciones a fin de año y dan vacaciones colectivas. Si un trabajador todavía no ha cumplido el año, esos días se consideran anticipados y se descuentan de las vacaciones futuras. Revise su desprendible para saber cuántos días le quedan pendientes.

## Cómo usar la calculadora

Ingrese su salario mensual, el promedio de pagos variables si los tiene, la fecha de ingreso, la fecha de corte, los días hábiles ya disfrutados y, si lo desea, los días que quiere compensar en dinero. La calculadora le muestra los días causados, los pendientes, el valor en pesos, el máximo que puede compensar y los días que le quedarían para descansar.

## Las vacaciones y la reforma laboral

La Ley 2466 de 2025 no cambió el número de días de vacaciones, que sigue siendo de 15 días hábiles por año. Sí reforzó otros derechos, como los recargos dominicales y la jornada nocturna, que pueden influir en el promedio salarial con el que se liquidan las vacaciones de quienes tienen salario variable.

## Planear el descanso

Pida sus vacaciones por escrito con anticipación y deje constancia de la fecha de inicio y de regreso. El empleador debe informarle con 15 días de antelación la fecha en que le concederá las vacaciones, según el artículo 187. Si pasa más de un año sin que se las concedan, insista por escrito: acumular demasiados días puede generar discusiones en el momento de la liquidación.

## Vacaciones en contratos especiales

Los trabajadores con contrato a término fijo inferior a un año tienen derecho a vacaciones proporcionales al tiempo trabajado. Quienes trabajan en actividades con riesgo de exposición a sustancias peligrosas, como el personal de radiología, tienen regímenes especiales con más días de descanso. Los trabajadores de medio tiempo tienen los mismos 15 días hábiles, pagados con el salario que efectivamente devengan.

## Vacaciones y terminación del contrato

Si el contrato termina y usted tiene vacaciones pendientes, el empleador debe pagarlas en la liquidación con el último salario devengado. No es posible obligar al trabajador a disfrutar las vacaciones pendientes durante el periodo de preaviso para evitar pagarlas, salvo que ambas partes lo acuerden por escrito. Revise que el comprobante de liquidación muestre los días pendientes y el salario usado.

## Resumen rápido

Son 15 días hábiles por año, pagados con el salario ordinario y sin auxilio de transporte. Puede compensar en dinero hasta la mitad por acuerdo escrito, y al terminar el contrato todas las vacaciones pendientes se pagan en la liquidación, incluso por fracción.`,
  examples: [
    {
      title: 'Ejemplo 1: un año completo',
      scenario: 'Valentina gana $3.000.000 e ingresó el 1 de noviembre de 2025. Al 30 de octubre de 2026 completa 360 días.',
      inputs: { 'Salario': '$3.000.000', 'Días trabajados': '360', 'Días disfrutados': '0' },
      breakdown: [
        { item: 'Días causados', amount: '15' },
        { item: 'Valor día', amount: '$100.000' },
        { item: 'Máximo compensable', amount: '7,5 días' },
      ],
      total: '$1.500.000',
    },
    {
      title: 'Ejemplo 2: vacaciones acumuladas con compensación',
      scenario: 'Óscar gana $2.400.000, ingresó el 1 de marzo de 2023, disfrutó 30 días y quiere compensar 10 días en dinero.',
      inputs: { 'Salario': '$2.400.000', 'Días trabajados': '1.334', 'Días disfrutados': '30' },
      breakdown: [
        { item: 'Días causados', amount: '55,58' },
        { item: 'Días pendientes', amount: '25,58 ($2.046.667)' },
        { item: 'Compensación de 10 días', amount: '$800.000' },
        { item: 'Días que quedan para disfrutar', amount: '15,58' },
      ],
      total: '$2.046.667 pendientes',
    },
  ],
  faqs: [
    { q: '¿Cuántos días de vacaciones tengo por año?', a: '15 días hábiles consecutivos de vacaciones remuneradas.' },
    { q: '¿Los sábados cuentan como días de vacaciones?', a: 'Solo si en su empresa se trabaja el sábado. Domingos y festivos nunca cuentan.' },
    { q: '¿El auxilio de transporte se paga en vacaciones?', a: 'No, porque durante las vacaciones no hay desplazamiento al trabajo.' },
    { q: '¿Puedo pedir que me paguen las vacaciones en dinero?', a: 'Hasta la mitad, por acuerdo escrito con el empleador. La otra mitad debe disfrutarse.' },
    { q: '¿Cuántos años puedo acumular?', a: 'Hasta dos años, y hasta cuatro en casos especiales, pero debe disfrutar al menos seis días al año.' },
    { q: '¿Si renuncio me pagan las vacaciones?', a: 'Sí, todas las causadas y no disfrutadas, incluso por fracción de año.' },
    { q: '¿Con cuánto anticipo deben avisarme las vacaciones?', a: 'Con 15 días de antelación (art. 187 CST).' },
    { q: '¿Cambió la reforma laboral los días de vacaciones?', a: 'No. Siguen siendo 15 días hábiles por año.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, arts. 186-192', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 1429 de 2010', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1429_2010.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de liquidación', path: '/co/calculadora-liquidacion/', description: 'Vacaciones al terminar el contrato.' },
    { title: 'Calculadora de horas extras', path: '/co/calculadora-horas-extras/', description: 'Recargos que afectan el promedio.' },
    { title: 'Liquidación por renuncia', path: '/co/calculadora-liquidacion/renuncia/', description: 'Vacaciones al renunciar.' },
  ],
  relatedGuides: [
    { title: 'Reforma laboral 2025', path: '/co/reforma-laboral/', description: 'Qué cambió y desde cuándo.' },
    { title: 'Cómo liquidar un contrato a término fijo', path: '/co/guias/como-liquidar-un-contrato-a-termino-fijo/', description: 'Vacaciones proporcionales.' },
  ],
  updatedAt: '2026-11-14',
};
