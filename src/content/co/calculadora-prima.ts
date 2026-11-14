import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Prima de Servicios 2026 | Calcula',
  metaDescription:
    'Calcule su prima de servicios 2026 en Colombia: 15 días de salario por semestre, con auxilio de transporte si gana hasta 2 SMMLV. Fechas: 30 jun y 20 dic.',
  h1: 'Calculadora de Prima de Servicios 2026',
  quickAnswer:
    'La prima de servicios equivale a un mes de salario por año, pagado en dos cuotas de 15 días: a más tardar el 30 de junio y el 20 de diciembre. Si trabajó solo parte del semestre, recibe la parte proporcional. Con salario de hasta dos SMMLV, el auxilio de transporte entra en la base.',
  howItWorks: [
    { step: 1, title: 'Base de la prima', description: 'Salario mensual más el promedio de pagos variables y el auxilio de transporte si gana hasta 2 SMMLV.', formula: 'Base = salario + variables + auxilio', legalArticle: 'CST art. 306; Ley 1 de 1963' },
    { step: 2, title: 'Días trabajados en el semestre', description: 'Del 1 de enero al 30 de junio, o del 1 de julio al 31 de diciembre; máximo 180 días con meses de 30.', formula: 'Días = días del semestre (máx. 180)', legalArticle: 'CST art. 306' },
    { step: 3, title: 'Valor de la prima', description: 'Se multiplica la base por los días y se divide entre 360.', formula: 'Prima = base × días ÷ 360', legalArticle: 'CST art. 306' },
  ],
  article: `## Qué es la prima de servicios

La prima de servicios es una prestación social que el empleador paga a todos sus trabajadores, sin importar el tipo de contrato ni el monto del salario. El artículo 306 del Código Sustantivo del Trabajo, modificado por la Ley 1788 de 2016, dispone que corresponde a 30 días de salario por año, pagaderos por semestres: la mitad a más tardar el 30 de junio y la otra mitad a más tardar los primeros 20 días de diciembre. Desde 2016 también tienen derecho las trabajadoras y los trabajadores del servicio doméstico, los choferes de servicio familiar y quienes trabajan por días.

## Quién tiene derecho

Todo trabajador vinculado con contrato laboral tiene derecho a la prima, sea a término indefinido, a término fijo o por obra o labor, de tiempo completo o de medio tiempo. No tienen derecho quienes devengan salario integral, porque ese salario ya incluye el factor prestacional, ni quienes tienen contratos de prestación de servicios, porque no existe relación laboral. Los aprendices del SENA en etapa lectiva tampoco la reciben, ya que el apoyo de sostenimiento no es salario.

## Cómo calcular la prima

La fórmula es sencilla: base de liquidación por días trabajados en el semestre, dividido entre 360. La base es el salario mensual más el promedio de los pagos variables que constituyen salario, como horas extra, recargos y comisiones. Si su salario varió en el semestre, se usa el promedio. Si gana hasta dos salarios mínimos, también se suma el auxilio de transporte, aunque no sea salario, porque así lo ordena la Ley 1 de 1963.

En 2026, con un salario mínimo de $1.750.905 y un auxilio de transporte de $249.095, la base de quien gana el mínimo es de $2.000.000. Por un semestre completo de 180 días, la prima es de $1.000.000.

## Prima proporcional

Si ingresó a mitad de semestre o se retiró antes de que terminara, la prima se paga de forma proporcional a los días trabajados. Por ejemplo, si entró el 1 de septiembre, en diciembre recibirá la prima por 120 días. Si su contrato termina, la prima proporcional del semestre en curso se incluye en la liquidación final.

## Fechas de pago

La primera cuota se paga a más tardar el 30 de junio y la segunda a más tardar el 20 de diciembre. El empleador puede pagarla antes, pero no después. Si no la paga a tiempo, el trabajador puede reclamar ante la inspección de trabajo, y si el contrato ya terminó, la falta de pago puede generar la indemnización moratoria del artículo 65 del CST.

## La prima no es salario

La prima de servicios no constituye salario, por lo que no se tiene en cuenta para calcular otras prestaciones ni genera aportes a seguridad social. Tampoco se le descuenta salud ni pensión. Sí puede estar sujeta a retención en la fuente, porque es un ingreso laboral; para la mayoría de trabajadores, la renta exenta del 25% hace que no haya retención.

## Prima extralegal

Algunas empresas pagan primas adicionales, como prima de vacaciones, prima de navidad o primas de antigüedad, por convención colectiva o por política interna. Estas primas son distintas de la prima de servicios legal y se rigen por lo que establezca el acuerdo que las crea. Si su empresa las paga, verifique en su contrato o en la convención si se consideran salario y cómo se calculan.

## Errores comunes

Olvidar el auxilio de transporte en la base, calcular con 365 días, no incluir el promedio de horas extra o comisiones y descontar aportes de seguridad social sobre la prima son los errores más frecuentes. Otro error es pensar que la prima se pierde si el trabajador renuncia antes del pago: la parte proporcional siempre se debe.

## Cómo usar la calculadora

Ingrese su salario mensual, el promedio de pagos variables si los tiene, la fecha desde la cual trabajó en el semestre y la fecha de corte. La calculadora cuenta los días con meses de 30, aplica el auxilio si corresponde y le muestra el valor de la prima y la fecha límite de pago.

## Planear el uso de la prima

La prima de diciembre coincide con los gastos de fin de año y la de junio con las vacaciones de mitad de año. Destinar una parte a pagar deudas costosas o a un ahorro de emergencia ayuda a que este ingreso extra no se diluya. Si piensa usarla para compras grandes, tenga en cuenta que la fecha límite es el 20 de diciembre: no comprometa el dinero antes de recibirlo.

## Resumen rápido

La prima es un mes de salario por año, en dos pagos de 15 días. Se calcula con base por días entre 360, incluye el auxilio de transporte si gana hasta dos mínimos y se paga a más tardar el 30 de junio y el 20 de diciembre.`,
  examples: [
    {
      title: 'Ejemplo 1: salario mínimo, semestre completo',
      scenario: 'Sandra gana el salario mínimo de 2026 y trabajó todo el segundo semestre.',
      inputs: { 'Salario': '$1.750.905', 'Auxilio': '$249.095', 'Días': '180' },
      breakdown: [
        { item: 'Base', amount: '$2.000.000' },
        { item: 'Prima (180 ÷ 360)', amount: '$1.000.000' },
      ],
      total: '$1.000.000 a más tardar el 20 de diciembre',
    },
    {
      title: 'Ejemplo 2: ingreso el 1 de septiembre',
      scenario: 'Felipe gana $4.000.000 (sin auxilio) e ingresó el 1 de septiembre de 2026.',
      inputs: { 'Salario': '$4.000.000', 'Auxilio': 'No aplica', 'Días': '120' },
      breakdown: [
        { item: 'Base', amount: '$4.000.000' },
        { item: 'Prima (120 ÷ 360)', amount: '$1.333.333' },
      ],
      total: '$1.333.333',
    },
  ],
  faqs: [
    { q: '¿Cuándo se paga la prima en 2026?', a: 'La primera cuota a más tardar el 30 de junio y la segunda a más tardar el 20 de diciembre de 2026.' },
    { q: '¿Cuánto es la prima si gano el mínimo?', a: 'Por un semestre completo, $1.000.000 en 2026, porque la base incluye el auxilio de transporte.' },
    { q: '¿El auxilio de transporte se incluye en la prima?', a: 'Sí, si su salario es de hasta 2 SMMLV ($3.501.810 en 2026).' },
    { q: '¿Me pagan prima si entré hace dos meses?', a: 'Sí, la parte proporcional a los días trabajados en el semestre.' },
    { q: '¿La prima tiene descuentos de salud y pensión?', a: 'No. La prima no es salario y no genera aportes a seguridad social.' },
    { q: '¿Las empleadas domésticas reciben prima?', a: 'Sí, desde la Ley 1788 de 2016.' },
    { q: '¿Quien tiene salario integral recibe prima?', a: 'No, porque el salario integral ya incluye el factor prestacional.' },
    { q: '¿Qué hago si no me pagan la prima?', a: 'Reclame por escrito a su empleador y, si no paga, acuda a la inspección de trabajo del Ministerio del Trabajo.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, art. 306', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 1788 de 2016', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1788_2016.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de cesantías', path: '/co/calculadora-cesantias/', description: 'Cesantías e intereses.' },
    { title: 'Calculadora de liquidación', path: '/co/calculadora-liquidacion/', description: 'Prima proporcional al retirarse.' },
    { title: 'Auxilio de transporte 2026', path: '/co/auxilio-de-transporte/', description: 'Valor y quién lo recibe.' },
  ],
  relatedGuides: [
    { title: '¿Cuándo se paga la prima?', path: '/co/guias/cuando-se-paga-la-prima/', description: 'Fechas y sanciones.' },
    { title: 'Salario mínimo 2026', path: '/co/salario-minimo/', description: 'SMMLV y auxilio.' },
  ],
  updatedAt: '2026-11-14',
};
