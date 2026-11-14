import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Liquidación por Despido Sin Justa Causa 2026 | Calcula',
  metaDescription:
    'Calcule su liquidación por despido sin justa causa en Colombia: prestaciones sociales más la indemnización del art. 64 CST según contrato y salario.',
  h1: 'Liquidación por Despido Sin Justa Causa 2026',
  quickAnswer:
    'Si lo despiden sin justa causa, además de las prestaciones sociales le deben pagar la indemnización del artículo 64 del CST. En contrato indefinido con salario menor a 10 SMMLV son 30 días por el primer año y 20 por cada año adicional. En término fijo, los salarios del tiempo faltante; en obra o labor, mínimo 15 días.',
  howItWorks: [
    { step: 1, title: 'Prestaciones sociales', description: 'Salario pendiente, cesantías, intereses, prima y vacaciones, como en cualquier terminación.', legalArticle: 'CST arts. 186, 249 y 306' },
    { step: 2, title: 'Años de servicio', description: 'Se cuentan con el año de 360 días, incluidas las fracciones.', formula: 'Años = días trabajados ÷ 360', legalArticle: 'CST art. 64' },
    { step: 3, title: 'Días de indemnización', description: 'Indefinido: 30 + 20 por año adicional (20 + 15 si gana 10 SMMLV o más). Fijo: días faltantes. Obra: faltante, mínimo 15.', formula: '30 + (años − 1) × 20', legalArticle: 'CST art. 64 (Ley 789 de 2002)' },
    { step: 4, title: 'Valor', description: 'Se multiplica por el salario diario (salario mensual más variables, entre 30).', formula: 'Indemnización = días × salario ÷ 30', legalArticle: 'CST art. 64' },
  ],
  article: `## Cuándo un despido es sin justa causa

El artículo 62 del Código Sustantivo del Trabajo enumera las justas causas para terminar el contrato, como el engaño con certificados falsos, los actos de violencia, el daño material grave, la revelación de secretos o el incumplimiento grave de las obligaciones. Si el empleador termina el contrato sin invocar ninguna de ellas, o invoca una causa que no puede demostrar, el despido es sin justa causa y debe indemnizar al trabajador. El empleador también debe informar por escrito la causa en el momento del despido; no puede alegar después causas distintas.

## La indemnización en el contrato a término indefinido

La Ley 789 de 2002 modificó el artículo 64 y fijó dos tablas según el salario. Para quienes ganan menos de 10 salarios mínimos ($17.509.050 en 2026), la indemnización es de 30 días de salario cuando el trabajador tiene hasta un año de servicio, más 20 días por cada año adicional y proporcionalmente por fracción. Para quienes ganan 10 salarios mínimos o más, es de 20 días por el primer año y 15 por cada año adicional.

Por ejemplo, con 3,75 años de servicio y salario inferior a 10 SMMLV, la indemnización es de 30 + 2,75 × 20 = 85 días. Con 7,5 años y salario de $20.000.000, es de 20 + 6,5 × 15 = 117,5 días.

Quienes al 27 de diciembre de 2002 tenían diez o más años de servicio conservan la tabla anterior, más favorable, de 45 días por el primer año y 30 por cada año adicional. Si es su caso, consulte con un abogado laboral, porque esta calculadora aplica la tabla vigente.

## La indemnización en contratos a término fijo y por obra

En el contrato a término fijo, la indemnización es igual al valor de los salarios correspondientes al tiempo que faltaba para cumplir el plazo pactado. Si el contrato terminaba el 31 de enero y lo despiden el 31 de julio, le deben seis meses de salario. En el contrato por obra o labor, la indemnización corresponde al tiempo que faltaba para terminar la obra, sin que pueda ser inferior a 15 días de salario. Para estos dos casos puede usar también nuestra calculadora de contrato a término fijo.

## Qué salario se usa

La indemnización se calcula con el último salario devengado, incluido el promedio de los pagos que constituyen salario, como horas extra habituales o comisiones. El auxilio de transporte no forma parte de la base de la indemnización, porque no es salario.

## Prestaciones que se suman

La indemnización se suma a las prestaciones sociales: salario pendiente, cesantías e intereses del año, prima proporcional del semestre y vacaciones no disfrutadas. Si el empleador no consignó las cesantías del año anterior o no pagó la prima del semestre pasado, también debe pagarlas. La calculadora le permite indicarlo para que el total sea completo.

## Retención en la fuente

La indemnización por despido puede estar sujeta a retención en la fuente cuando el salario del trabajador supera 204 UVT mensuales ($10.684.296 en 2026), con una tarifa del 20% según el artículo 401-3 del Estatuto Tributario. Para salarios menores, normalmente no hay retención. Esta calculadora muestra el valor bruto de la indemnización; consulte con su empleador la retención aplicable.

## Qué hacer si no le pagan

Si el empleador no paga la indemnización o las prestaciones, presente primero una reclamación escrita. Luego puede acudir a la inspección de trabajo del Ministerio del Trabajo para una conciliación. Si no hay acuerdo, puede demandar ante un juez laboral. Las acciones laborales prescriben en tres años desde que la obligación se hizo exigible, pero la moratoria del artículo 65 hace que actuar pronto le convenga.

## Casos de estabilidad reforzada

Algunas personas no pueden ser despedidas sin autorización del inspector de trabajo o sin justa causa demostrada: mujeres en embarazo o lactancia, personas en situación de discapacidad o con afectaciones graves de salud, prepensionados y trabajadores aforados por fuero sindical. Si usted está en uno de esos casos, además de la indemnización podría pedir el reintegro y una indemnización adicional de 180 días.

## La carta de despido

El empleador debe entregarle una comunicación escrita en la que conste la terminación y, si alega una justa causa, los hechos concretos que la sustentan. Antes de despedir por una justa causa disciplinaria, debe darle la oportunidad de ser escuchado y presentar descargos. Si la carta no menciona causa, o menciona una que no se puede probar, el despido se entiende sin justa causa. Conserve la carta y cualquier correo o mensaje relacionado.

## Resumen rápido

El despido sin justa causa le da derecho a todas las prestaciones sociales más la indemnización del artículo 64, que depende del tipo de contrato, de la antigüedad y del salario. Revise la carta de despido, calcule su liquidación y exija el pago completo.`,
  examples: [
    {
      title: 'Ejemplo 1: contrato indefinido, 3,75 años',
      scenario: 'Luisa gana $2.500.000, ingresó el 10 de enero de 2023 y la despiden sin justa causa el 9 de octubre de 2026. Disfrutó 30 días de vacaciones.',
      inputs: { 'Salario': '$2.500.000', 'Antigüedad': '3,75 años', 'Días de indemnización': '85' },
      breakdown: [
        { item: 'Salario pendiente + auxilio', amount: '$824.729' },
        { item: 'Cesantías + intereses', amount: '$2.328.690' },
        { item: 'Prima', amount: '$756.001' },
        { item: 'Vacaciones', amount: '$2.187.500' },
        { item: 'Indemnización (85 días)', amount: '$7.083.333' },
        { item: 'Salud y pensión', amount: '−$60.000' },
      ],
      total: '$13.120.253',
    },
    {
      title: 'Ejemplo 2: salario de 10 SMMLV o más',
      scenario: 'Jorge gana $20.000.000, ingresó el 1 de abril de 2019 y lo despiden el 30 de septiembre de 2026. Disfrutó 90 días de vacaciones.',
      inputs: { 'Salario': '$20.000.000', 'Antigüedad': '7,5 años', 'Días de indemnización': '117,5' },
      breakdown: [
        { item: 'Cesantías + intereses', amount: '$16.350.000' },
        { item: 'Prima', amount: '$5.000.000' },
        { item: 'Vacaciones', amount: '$15.000.000' },
        { item: 'Indemnización (20 + 6,5 × 15 días)', amount: '$78.333.333' },
      ],
      total: '$114.683.333',
    },
  ],
  faqs: [
    { q: '¿Cuánto me pagan por despido sin justa causa?', a: 'Las prestaciones sociales más la indemnización: en contrato indefinido con salario menor a 10 SMMLV, 30 días por el primer año y 20 por cada año adicional.' },
    { q: '¿Las fracciones de año cuentan?', a: 'Sí. Los 20 días por año adicional se pagan proporcionalmente por fracción.' },
    { q: '¿El auxilio de transporte entra en la indemnización?', a: 'No. La indemnización se calcula con el salario, y el auxilio no es salario.' },
    { q: '¿Qué pasa en un contrato a término fijo?', a: 'Le pagan los salarios del tiempo que faltaba para terminar el contrato.' },
    { q: '¿Y en un contrato por obra o labor?', a: 'El tiempo que faltaba para terminar la obra, mínimo 15 días de salario.' },
    { q: '¿La indemnización paga impuestos?', a: 'Puede tener retención del 20% si el salario supera 204 UVT mensuales ($10.684.296 en 2026).' },
    { q: '¿Cuánto tiempo tengo para reclamar?', a: 'Tres años desde que la obligación se hizo exigible, aunque conviene reclamar cuanto antes.' },
    { q: '¿Pueden despedirme si estoy embarazada?', a: 'Solo con autorización del inspector de trabajo y por justa causa. De lo contrario, procede el reintegro y una indemnización adicional.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, arts. 62 y 64', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 789 de 2002', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0789_2002.html' },
    { label: 'Estatuto Tributario, art. 401-3', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de liquidación laboral', path: '/co/calculadora-liquidacion/', description: 'Todos los motivos.' },
    { title: 'Contrato a término fijo', path: '/co/calculadora-liquidacion/contrato-a-termino-fijo/', description: 'Indemnización por tiempo faltante.' },
    { title: 'Calculadora de salario neto', path: '/co/calculadora-salario-neto/', description: 'Aportes y retención.' },
  ],
  relatedGuides: [
    { title: 'Indemnización por despido sin justa causa', path: '/co/guias/indemnizacion-por-despido-sin-justa-causa/', description: 'Guía completa del art. 64.' },
    { title: 'Cesantías: cuándo y cómo retirarlas', path: '/co/guias/cesantias-cuando-y-como-retirarlas/', description: 'Retiro tras el despido.' },
  ],
  updatedAt: '2026-11-14',
};
