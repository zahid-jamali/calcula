import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Auxilio de Transporte 2026 en Colombia | Calcula',
  metaDescription:
    'Auxilio de transporte 2026: $249.095 al mes para salarios de hasta 2 SMMLV ($3.501.810). Quién lo recibe, valor diario y cuándo entra en prestaciones.',
  h1: 'Auxilio de Transporte 2026 en Colombia',
  quickAnswer:
    'El auxilio de transporte en 2026 es de $249.095 mensuales, unos $8.303 diarios. Lo reciben los trabajadores que ganan hasta dos salarios mínimos, es decir, hasta $3.501.810. No es salario, por lo que no paga aportes, pero sí se incluye en la base de cesantías y prima. No se tiene en cuenta para vacaciones.',
  howItWorks: [
    { step: 1, title: '¿Gana hasta 2 SMMLV?', description: 'Si su salario es igual o inferior a $3.501.810, tiene derecho al auxilio.', formula: 'Salario ≤ 2 × $1.750.905', legalArticle: 'Ley 15 de 1959; Decreto 1470 de 2025' },
    { step: 2, title: 'Valor proporcional', description: 'Se paga por los días trabajados en el mes.', formula: 'Auxilio = $249.095 ÷ 30 × días' },
    { step: 3, title: 'Prestaciones', description: 'Se suma a la base de cesantías, intereses y prima, pero no de vacaciones ni de aportes.', formula: 'Base prestaciones = salario + auxilio', legalArticle: 'Ley 1 de 1963' },
  ],
  article: `## Qué es el auxilio de transporte

El auxilio de transporte es un pago que el empleador hace a los trabajadores de menores ingresos para ayudarles a cubrir el costo de desplazarse de su casa al trabajo y de regreso. Fue creado por la Ley 15 de 1959 y su valor se fija cada año por decreto, junto con el salario mínimo. Para 2026, el Decreto 1470 del 29 de diciembre de 2025 lo fijó en $249.095 mensuales, un aumento del 24,5% frente a los $200.000 de 2025.

## Quién tiene derecho

Tienen derecho al auxilio de transporte los trabajadores que devengan hasta dos salarios mínimos mensuales legales vigentes. En 2026 el límite es de $3.501.810. Para determinar si se supera el tope se tiene en cuenta el salario, incluidos los pagos variables que constituyen salario, como las horas extra y las comisiones. Si en un mes el trabajador supera el tope por pagos variables, la jurisprudencia y el Ministerio del Trabajo han indicado que ese mes no se causa el auxilio.

No tienen derecho quienes ganan más de dos salarios mínimos, quienes tienen salario integral ni quienes viven en el mismo lugar de trabajo. Tampoco cuando el empleador suministra el transporte de manera gratuita. Para el trabajo en casa existe el auxilio de conectividad, que reemplaza al de transporte en los casos que señala la ley.

## Valor diario y proporcional

El auxilio se paga por los días efectivamente trabajados. El valor diario es de $8.303 ($249.095 entre 30). Si un trabajador está de vacaciones, incapacitado o en licencia, durante esos días no se causa el auxilio, porque no hay desplazamiento al trabajo. Quien trabaja medio tiempo pero asiste todos los días recibe el auxilio completo.

## El auxilio no es salario

El auxilio de transporte no constituye salario. Por eso no se tiene en cuenta para calcular los aportes a salud, pensión, riesgos laborales ni parafiscales, y no se descuenta salud ni pensión sobre él. Tampoco forma parte de la base para la indemnización por despido sin justa causa ni para las vacaciones.

## Sí entra en cesantías y prima

Aunque no es salario, la Ley 1 de 1963 dispone que el auxilio de transporte se incluye en la base para liquidar las prestaciones sociales. En la práctica, se suma al salario para calcular las cesantías, los intereses sobre cesantías y la prima de servicios. Por eso, quien gana el salario mínimo tiene una base prestacional de $2.000.000 en 2026: $1.750.905 de salario más $249.095 de auxilio.

## Historial del auxilio de transporte

En los últimos diez años el auxilio pasó de $83.140 en 2017 a $249.095 en 2026. Los aumentos han acompañado, e incluso superado en algunos años, al del salario mínimo. La tabla de esta página muestra el valor de cada año junto con el SMMLV.

## El auxilio de conectividad

Con la Ley 2088 de 2021 sobre trabajo en casa y la Ley 2121 de 2021 sobre trabajo remoto, los trabajadores que ganan hasta dos salarios mínimos y laboran desde su casa reciben un auxilio de conectividad digital por el mismo valor del auxilio de transporte, en lugar de este. Los dos auxilios no son acumulables por el mismo periodo.

## Errores frecuentes

Pagar el auxilio a quien gana más de dos mínimos, no pagarlo a quien trabaja medio tiempo, excluirlo de la base de cesantías y prima, incluirlo en la base de vacaciones o calcular aportes sobre él son los errores más comunes. La calculadora de liquidación de este sitio aplica estas reglas de forma automática.

## Auxilio de transporte y liquidación del contrato

Cuando termina el contrato, el auxilio de transporte de los días trabajados en el último periodo se paga junto con el salario pendiente, y el auxilio se incluye en la base de las cesantías, los intereses y la prima proporcionales. En cambio, no se incluye en las vacaciones compensadas ni en la indemnización. Revisar estos tres puntos en su comprobante de liquidación es la forma más rápida de saber si el auxilio se trató correctamente.

## Auxilio de transporte para trabajadores domésticos

Las trabajadoras y los trabajadores del servicio doméstico que ganan hasta dos salarios mínimos también tienen derecho al auxilio de transporte, salvo que vivan en la casa del empleador. Si trabajan por días, el auxilio se paga en proporción a los días laborados en el mes. Además, el auxilio se incluye en la base de su prima y sus cesantías, igual que para cualquier otro trabajador.

## Un dato para empleadores

Pagar el auxilio a quien no tiene derecho no lo convierte en salario, pero no incluirlo en la base de cesantías y prima de quien sí tiene derecho genera diferencias que el trabajador puede reclamar con intereses y sanciones.

## Resumen rápido

El auxilio de transporte de 2026 es de $249.095 al mes para quienes ganan hasta $3.501.810. No es salario ni paga aportes, pero entra en la base de cesantías, intereses y prima. No entra en vacaciones ni en la indemnización.`,
  examples: [
    {
      title: 'Prima con y sin auxilio',
      scenario: 'Comparación de la base de prima de dos trabajadores en 2026.',
      inputs: { 'Salario A': '$3.000.000', 'Salario B': '$3.600.000' },
      breakdown: [
        { item: 'Base A (con auxilio)', amount: '$3.249.095' },
        { item: 'Base B (sin auxilio)', amount: '$3.600.000' },
        { item: 'Prima semestral A', amount: '$1.624.548' },
      ],
      total: 'Prima B: $1.800.000',
    },
    {
      title: 'Auxilio proporcional',
      scenario: 'Trabajador que gana el mínimo y estuvo incapacitado 10 días del mes.',
      inputs: { 'Días trabajados': '20', 'Auxilio diario': '$8.303' },
      breakdown: [
        { item: 'Auxilio del mes (20 días)', amount: '$166.063' },
      ],
      total: '$166.063',
    },
    {
      title: 'Base de cesantías con el mínimo',
      scenario: 'Año completo con salario mínimo en 2026.',
      inputs: { 'Salario': '$1.750.905', 'Auxilio': '$249.095' },
      breakdown: [
        { item: 'Cesantías', amount: '$2.000.000' },
        { item: 'Intereses 12%', amount: '$240.000' },
      ],
      total: '$2.240.000',
    },
  ],
  faqs: [
    { q: '¿Cuánto es el auxilio de transporte en 2026?', a: '$249.095 mensuales, según el Decreto 1470 de 2025.' },
    { q: '¿Hasta qué salario se paga el auxilio?', a: 'Hasta dos salarios mínimos: $3.501.810 en 2026.' },
    { q: '¿Cuánto es el auxilio diario?', a: 'Aproximadamente $8.303 ($249.095 ÷ 30).' },
    { q: '¿El auxilio de transporte es salario?', a: 'No. No paga aportes a seguridad social ni se incluye en vacaciones ni en la indemnización.' },
    { q: '¿Se incluye en cesantías y prima?', a: 'Sí, por mandato de la Ley 1 de 1963.' },
    { q: '¿Se paga en vacaciones o incapacidades?', a: 'No, porque durante esos días no hay desplazamiento al trabajo.' },
    { q: '¿Quien trabaja desde casa recibe auxilio de transporte?', a: 'Recibe en su lugar el auxilio de conectividad, por el mismo valor.' },
    { q: '¿Quien trabaja medio tiempo recibe el auxilio completo?', a: 'Sí, si asiste todos los días y gana hasta dos salarios mínimos.' },
  ],
  sources: [
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
    { label: 'Ley 1 de 1963', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0001_1963.html' },
    { label: 'Ley 2088 de 2021 (trabajo en casa)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2088_2021.html' },
  ],
  relatedTools: [
    { title: 'Calculadora de prima', path: '/co/calculadora-prima/', description: 'Con auxilio en la base.' },
    { title: 'Calculadora de cesantías', path: '/co/calculadora-cesantias/', description: 'Con auxilio en la base.' },
    { title: 'Calculadora de salario neto', path: '/co/calculadora-salario-neto/', description: 'Neto con auxilio.' },
  ],
  relatedGuides: [
    { title: 'Salario mínimo 2026', path: '/co/salario-minimo/', description: 'SMMLV e historial.' },
    { title: '¿Cuándo se paga la prima?', path: '/co/guias/cuando-se-paga-la-prima/', description: 'Fechas de pago.' },
  ],
  updatedAt: '2026-11-14',
};
