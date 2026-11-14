import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Liquidación por Renuncia en Colombia 2026 | Calcula',
  metaDescription:
    'Calcule la liquidación por renuncia voluntaria en Colombia 2026: salario pendiente, cesantías, intereses, prima y vacaciones. Sin indemnización.',
  h1: 'Calculadora de Liquidación por Renuncia 2026',
  quickAnswer:
    'Si usted renuncia, el empleador debe pagarle la liquidación completa de prestaciones: salario pendiente, cesantías del año, intereses del 12%, prima proporcional del semestre y vacaciones no disfrutadas. No hay indemnización, porque la terminación fue decisión suya. El preaviso de 30 días solo es obligatorio si está pactado en el contrato.',
  howItWorks: [
    { step: 1, title: 'Salario y auxilio pendientes', description: 'Los días trabajados desde el último pago, con el auxilio de transporte proporcional si gana hasta 2 SMMLV.', formula: 'Salario ÷ 30 × días', legalArticle: 'CST art. 134' },
    { step: 2, title: 'Cesantías, intereses y prima', description: 'Proporcionales a los días trabajados en el año y en el semestre, con año de 360 días.', formula: 'Base × días ÷ 360', legalArticle: 'CST arts. 249 y 306' },
    { step: 3, title: 'Vacaciones compensadas', description: 'Quince días hábiles por año, menos los ya disfrutados, sin auxilio de transporte.', formula: 'Salario × días ÷ 720 − días disfrutados', legalArticle: 'CST art. 189' },
    { step: 4, title: 'Sin indemnización', description: 'La renuncia no genera la indemnización del artículo 64.', legalArticle: 'CST art. 64' },
  ],
  article: `## La renuncia y sus efectos

Todo trabajador puede terminar su contrato cuando lo decida. En Colombia la renuncia es un acto unilateral: no necesita aceptación del empleador para producir efectos, aunque sí conviene presentarla por escrito y conservar una copia con la fecha de recibido. Al renunciar, usted conserva el derecho a todas las prestaciones sociales causadas, pero pierde la indemnización por despido, que solo existe cuando es el empleador quien termina el contrato sin justa causa.

## ¿Hay que dar preaviso?

El Código Sustantivo del Trabajo no obliga al trabajador a dar un preaviso en el contrato a término indefinido. El antiguo preaviso de 30 días fue eliminado para el empleador y, para el trabajador, solo aplica si está pactado en el contrato o en el reglamento interno. En el contrato a término fijo, si usted no quiere renovarlo, el aviso de no renovación debe darlo el empleador; si usted renuncia antes del vencimiento, podría tener que indemnizar al empleador en los términos pactados. Revise su contrato antes de fijar la fecha de salida.

## Conceptos de la liquidación por renuncia

Al renunciar le deben pagar los siguientes conceptos:

- Salario pendiente: los días trabajados desde el último pago, con el auxilio de transporte proporcional si su salario es de hasta dos salarios mínimos.
- Cesantías: un mes de salario por año, proporcional a los días trabajados desde el 1 de enero o desde su ingreso.
- Intereses sobre cesantías: 12% anual sobre las cesantías, en proporción a los días.
- Prima de servicios: la parte proporcional del semestre en curso.
- Vacaciones: los días hábiles causados y no disfrutados, compensados en dinero.

## La base del cálculo

La base de cesantías y prima es su salario básico más el promedio de pagos variables, como horas extra o comisiones, y el auxilio de transporte si gana hasta $3.501.810 en 2026. Para las vacaciones se usa el salario básico, sin auxilio. Si su salario cambió en los últimos tres meses, las cesantías se liquidan con el promedio del último año.

## El caso del salario mínimo

Quien gana el salario mínimo de $1.750.905 recibe además $249.095 de auxilio de transporte, por lo que su base para cesantías y prima es de exactamente $2.000.000 en 2026. Un año completo de cesantías equivale a $2.000.000 y un semestre completo de prima a $1.000.000. Las vacaciones de un año equivalen a medio salario básico: $875.453.

## Cuándo le deben pagar

La liquidación debe pagarse el último día de trabajo. Si el empleador se demora, el artículo 65 del CST prevé una indemnización moratoria de un día de salario por cada día de retardo durante los primeros 24 meses; después se pagan intereses moratorios. Los jueces la aplican cuando el empleador actúa de mala fe, por lo que conviene dejar constancia escrita de la solicitud de pago.

## La carta de renuncia

La carta debe incluir su nombre, cargo, fecha de ingreso, la fecha en que se hace efectiva la renuncia y su firma. Evite expresiones que puedan interpretarse como un retiro forzado si en realidad lo están presionando: si el empleador lo obliga a renunciar, podría tratarse de un despido indirecto o de una renuncia viciada, casos en los que sí procedería la indemnización. Si está en esa situación, busque asesoría en la inspección de trabajo antes de firmar.

## Retiro de cesantías al renunciar

Al terminar el contrato usted puede retirar el saldo de su fondo de cesantías presentando la carta de terminación o la liquidación. Las cesantías que le pague el empleador en la liquidación se reciben directamente. Si piensa usar las cesantías para vivienda o educación, compare antes de retirarlas: mantenerlas en el fondo le sigue generando rendimientos.

## Errores frecuentes

Olvidar los días de vacaciones de periodos anteriores, no incluir el auxilio de transporte en la base de cesantías y prima, calcular con 365 días en lugar de 360 y descontar aportes a seguridad social sobre las prestaciones son los errores más comunes. Revise el comprobante y no firme el paz y salvo si encuentra diferencias.

## Documentos que debe recibir

Además del pago, solicite el comprobante detallado de la liquidación, la certificación laboral con cargo, tiempo de servicio y salario, el paz y salvo de aportes a seguridad social de los últimos tres meses y la carta para el retiro de cesantías del fondo. El empleador también debe hacer el examen médico de egreso si usted lo solicita dentro de los cinco días siguientes al retiro. Guarde todos estos documentos: los necesitará para un nuevo empleo, para trámites de vivienda y para cualquier reclamación posterior.

## Resumen rápido

Al renunciar recibe salario pendiente, cesantías, intereses, prima y vacaciones, pero no indemnización. Si gana hasta dos mínimos, el auxilio de transporte sube la base de cesantías y prima. Exija el pago el último día de trabajo y guarde copia de su carta de renuncia y del comprobante de liquidación.`,
  examples: [
    {
      title: 'Ejemplo 1: salario mínimo, 15 meses de trabajo',
      scenario: 'Diana gana el salario mínimo, entró el 1 de agosto de 2025 y renuncia el 15 de noviembre de 2026 sin haber tomado vacaciones. Le deben 15 días.',
      inputs: { 'Salario': '$1.750.905', 'Base con auxilio': '$2.000.000', 'Días trabajados': '465' },
      breakdown: [
        { item: 'Salario pendiente + auxilio', amount: '$1.000.000' },
        { item: 'Cesantías 2026 (315 días)', amount: '$1.750.000' },
        { item: 'Intereses', amount: '$183.750' },
        { item: 'Prima (135 días)', amount: '$750.000' },
        { item: 'Vacaciones (19,38 días)', amount: '$1.130.793' },
        { item: 'Salud y pensión', amount: '−$70.036' },
      ],
      total: '$4.744.507',
    },
    {
      title: 'Ejemplo 2: renuncia al cierre del semestre',
      scenario: 'Camilo gana $3.200.000, ingresó el 16 de mayo de 2022 y renuncia el 30 de junio de 2026. Ya le pagaron el salario y disfrutó 45 días de vacaciones.',
      inputs: { 'Salario': '$3.200.000', 'Base con auxilio': '$3.449.095', 'Días trabajados': '1.485' },
      breakdown: [
        { item: 'Cesantías 2026 (180 días)', amount: '$1.724.548' },
        { item: 'Intereses', amount: '$103.473' },
        { item: 'Prima del primer semestre', amount: '$1.724.548' },
        { item: 'Vacaciones (16,88 días)', amount: '$1.800.000' },
      ],
      total: '$5.352.569',
    },
  ],
  faqs: [
    { q: '¿Si renuncio me pagan liquidación?', a: 'Sí. Le pagan salario pendiente, cesantías, intereses, prima y vacaciones. Lo único que no recibe es la indemnización.' },
    { q: '¿Tengo que dar 30 días de preaviso?', a: 'Solo si está pactado en su contrato o en el reglamento interno. La ley no lo exige al trabajador en el contrato indefinido.' },
    { q: '¿Me pagan la prima si renuncio antes de junio?', a: 'Sí, la parte proporcional a los días trabajados en el semestre.' },
    { q: '¿Puedo retirar las cesantías del fondo si renuncio?', a: 'Sí. Con la terminación del contrato puede retirar el saldo del fondo de cesantías.' },
    { q: '¿Cuánto se demoran en pagarme?', a: 'Deben pagar el último día de trabajo. El retardo puede generar un día de salario por cada día de mora (art. 65 CST).' },
    { q: '¿Las vacaciones se pagan si no cumplí un año?', a: 'Sí, de forma proporcional al tiempo trabajado.' },
    { q: '¿Me descuentan seguridad social de las prestaciones?', a: 'No. Solo se descuenta salud y pensión del salario pendiente.' },
    { q: '¿Qué hago si me obligaron a renunciar?', a: 'Puede tratarse de un despido encubierto. Acuda a la inspección de trabajo del Ministerio del Trabajo antes de firmar.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
    { label: 'Ley 1 de 1963 (auxilio de transporte)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0001_1963.html' },
  ],
  relatedTools: [
    { title: 'Calculadora de liquidación laboral', path: '/co/calculadora-liquidacion/', description: 'Todos los motivos de terminación.' },
    { title: 'Calculadora de vacaciones', path: '/co/calculadora-vacaciones/', description: 'Días causados y su valor.' },
    { title: 'Calculadora de prima', path: '/co/calculadora-prima/', description: 'Prima proporcional del semestre.' },
  ],
  relatedGuides: [
    { title: 'Cesantías: cuándo y cómo retirarlas', path: '/co/guias/cesantias-cuando-y-como-retirarlas/', description: 'Retiro al terminar el contrato.' },
    { title: '¿Cuándo se paga la prima?', path: '/co/guias/cuando-se-paga-la-prima/', description: 'Fechas de junio y diciembre.' },
  ],
  updatedAt: '2026-11-14',
};
