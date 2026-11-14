import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: '¿Cuándo se Paga la Prima en Colombia 2026? | Calcula',
  metaDescription:
    'La prima de servicios se paga a más tardar el 30 de junio y el 20 de diciembre. Quién tiene derecho, cuánto es, qué pasa si no la pagan y ejemplos 2026.',
  h1: '¿Cuándo se Paga la Prima de Servicios en Colombia?',
  quickAnswer:
    'La prima de servicios se paga en dos cuotas: la primera a más tardar el 30 de junio y la segunda a más tardar el 20 de diciembre. Cada cuota equivale a 15 días de salario por semestre completo, o la parte proporcional. En 2026, quien gana el mínimo recibe $1.000.000 por semestre con el auxilio de transporte incluido.',
  howItWorks: [
    { step: 1, title: 'Primera cuota', description: 'A más tardar el 30 de junio, por el semestre de enero a junio.', legalArticle: 'CST art. 306' },
    { step: 2, title: 'Segunda cuota', description: 'A más tardar el 20 de diciembre, por el semestre de julio a diciembre.', legalArticle: 'CST art. 306' },
    { step: 3, title: 'Monto', description: 'Base por días trabajados en el semestre entre 360.', formula: 'Prima = base × días ÷ 360', legalArticle: 'CST art. 306' },
  ],
  article: `## Las dos fechas de la prima

El artículo 306 del Código Sustantivo del Trabajo, modificado por la Ley 1788 de 2016, establece que todo empleador está obligado a pagar a sus trabajadores una prima de servicios equivalente a 30 días de salario por año, pagadera por semestres. La primera mitad debe pagarse a más tardar el 30 de junio y la segunda a más tardar los primeros 20 días de diciembre. En 2026, el 30 de junio cae martes y el 20 de diciembre domingo, por lo que muchas empresas pagan la segunda cuota el viernes 18 de diciembre o junto con la primera quincena del mes.

El empleador puede pagar la prima antes de esas fechas, pero nunca después. Tampoco puede dividirla en más cuotas sin acuerdo del trabajador, ni condicionarla a metas o resultados.

## Quién recibe la prima

Tienen derecho a la prima todos los trabajadores con contrato laboral, sin importar el tipo de contrato o el monto del salario, incluidos los de medio tiempo, los de contrato a término fijo, los de obra o labor y, desde 2016, los trabajadores del servicio doméstico, los choferes de servicio familiar y quienes trabajan por días o en fincas. No la reciben quienes tienen salario integral ni los contratistas por prestación de servicios.

## Cuánto es la prima

Por un semestre completo, la prima es igual a 15 días de salario, es decir, medio salario mensual. Si el trabajador gana hasta dos salarios mínimos, la base incluye el auxilio de transporte. En 2026, con el salario mínimo de $1.750.905 y el auxilio de $249.095, la prima de un semestre completo es de $1.000.000. Para quien gana $4.000.000, es de $2.000.000.

Si el trabajador laboró solo parte del semestre, recibe la parte proporcional. Por ejemplo, quien ingresó el 1 de septiembre de 2026 y gana $4.000.000 recibe en diciembre $1.333.333 por 120 días.

## ¿Se pierde la prima por faltas?

Antes de 2016 existía una regla que hacía perder la prima a quien no trabajaba al menos la mitad del semestre o era despedido por justa causa. Esa regla ya no aplica: la prima se paga siempre en proporción al tiempo trabajado. Las ausencias no remuneradas, como las licencias no pagadas o las suspensiones disciplinarias, sí pueden descontarse de los días que se cuentan.

## Qué pasa si no la pagan

Si el empleador no paga la prima a tiempo, el trabajador puede presentar un reclamo por escrito y, si no hay respuesta, acudir a la inspección de trabajo del Ministerio del Trabajo, que puede imponer multas. Si el contrato ya terminó y la prima no se pagó en la liquidación, puede aplicarse la indemnización moratoria del artículo 65, de un día de salario por cada día de retardo, cuando el empleador actúa de mala fe. La acción para reclamar la prima prescribe en tres años.

## Prima y retención en la fuente

La prima no es salario, por lo que no tiene descuentos de salud ni pensión. Sí es un ingreso laboral sujeto a retención en la fuente. Sin embargo, gracias a la renta exenta del 25%, en la gran mayoría de los casos no se practica retención. Los trabajadores con salarios altos pueden ver una retención en el mes en que reciben la prima.

## Prima en la liquidación

Si el contrato termina antes del 30 de junio o del 20 de diciembre, la prima proporcional del semestre en curso se paga en la liquidación final. Si el empleador no pagó la prima del semestre anterior, también debe incluirla. Nuestra calculadora de liquidación le permite indicarlo.

## Diferencia con otras primas

No confunda la prima de servicios con la prima de vacaciones, la prima de navidad del sector público o las primas extralegales que algunas empresas pagan por convención colectiva. Estas son beneficios adicionales con reglas propias. La prima de servicios es la única obligatoria para todos los empleadores privados.

## Calendario práctico de 2026

Para la primera cuota, el pago llega usualmente con la quincena del 15 o del 30 de junio. Para la segunda, revise su cuenta entre el 1 y el 18 de diciembre. Si el 21 de diciembre todavía no ve el pago, el plazo ya venció y puede iniciar el reclamo por escrito.

## Prima y salario variable

Si su salario cambia de un mes a otro por comisiones, horas extra o recargos, la base de la prima es el promedio de lo devengado en el semestre. Por ejemplo, si su salario básico es de $2.000.000 y en el semestre recibió en promedio $300.000 mensuales por horas extra, la base es de $2.300.000 más el auxilio de transporte, porque sigue ganando menos de dos salarios mínimos. Pida el detalle del promedio en el comprobante de pago.

## Resumen rápido

La prima se paga a más tardar el 30 de junio y el 20 de diciembre. Son 15 días de salario por semestre completo, incluido el auxilio de transporte para quien gana hasta dos mínimos, y la parte proporcional si trabajó menos tiempo.`,
  examples: [
    {
      title: 'Prima de diciembre con salario mínimo',
      scenario: 'Trabajadora que ganó el mínimo todo el segundo semestre de 2026.',
      inputs: { 'Base': '$2.000.000', 'Días': '180' },
      breakdown: [{ item: 'Prima (180 ÷ 360)', amount: '$1.000.000' }],
      total: '$1.000.000 a más tardar el 20 de diciembre',
    },
    {
      title: 'Prima proporcional',
      scenario: 'Trabajador con $4.000.000 que ingresó el 1 de septiembre de 2026.',
      inputs: { 'Base': '$4.000.000', 'Días': '120' },
      breakdown: [{ item: 'Prima (120 ÷ 360)', amount: '$1.333.333' }],
      total: '$1.333.333',
    },
  ],
  faqs: [
    { q: '¿Cuándo se paga la prima de junio?', a: 'A más tardar el 30 de junio.' },
    { q: '¿Cuándo se paga la prima de diciembre?', a: 'A más tardar el 20 de diciembre.' },
    { q: '¿Cuánto es la prima con el salario mínimo en 2026?', a: '$1.000.000 por semestre completo, incluido el auxilio de transporte.' },
    { q: '¿Me pagan prima si trabajé solo tres meses?', a: 'Sí, la parte proporcional a los días trabajados.' },
    { q: '¿Se pierde la prima si me despiden por justa causa?', a: 'No. Desde 2016 la prima se paga siempre en proporción al tiempo trabajado.' },
    { q: '¿La prima tiene descuentos?', a: 'No tiene descuentos de salud ni pensión; podría tener retención en la fuente en salarios altos.' },
    { q: '¿Las empleadas domésticas tienen prima?', a: 'Sí, desde la Ley 1788 de 2016.' },
    { q: '¿Qué hago si no me pagan la prima?', a: 'Reclame por escrito y, si no paga, acuda a la inspección de trabajo del Ministerio del Trabajo.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, art. 306', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 1788 de 2016', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1788_2016.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de prima', path: '/co/calculadora-prima/', description: 'Calcule su prima.' },
    { title: 'Calculadora de liquidación', path: '/co/calculadora-liquidacion/', description: 'Prima proporcional al retiro.' },
  ],
  relatedGuides: [
    { title: 'Auxilio de transporte 2026', path: '/co/auxilio-de-transporte/', description: 'Por qué sube la base.' },
    { title: 'Cesantías: cuándo y cómo retirarlas', path: '/co/guias/cesantias-cuando-y-como-retirarlas/', description: 'La otra prestación anual.' },
  ],
  updatedAt: '2026-11-14',
};
