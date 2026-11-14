import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Aguinaldo 2026 México | Calcula',
  metaDescription:
    'Calcula tu aguinaldo 2026: completo o proporcional, parte exenta de 30 UMA, ISR estimado y neto. Se paga antes del 20 de diciembre (art. 87 LFT).',
  h1: 'Calculadora de Aguinaldo 2026',
  quickAnswer:
    'El aguinaldo mínimo en México es de 15 días de salario y debe pagarse antes del 20 de diciembre. Si no trabajaste el año completo, recibes la parte proporcional a los días laborados. En 2026 está exento de ISR hasta 30 UMA, es decir $3,519.30; sobre el excedente te retienen impuesto según la tarifa mensual.',
  howItWorks: [
    {
      step: 1,
      title: 'Salario diario',
      description: 'Se divide tu sueldo mensual entre 30, o se usa directamente tu salario diario si cobras por semana.',
      formula: 'SD = sueldo mensual ÷ 30',
      legalArticle: 'Art. 89 LFT',
    },
    {
      step: 2,
      title: 'Días trabajados en el año',
      description: 'Del 1 de enero (o de tu fecha de ingreso) al 31 de diciembre o a tu fecha de salida.',
      formula: 'Aguinaldo = días trabajados ÷ 365 × días de aguinaldo × SD',
      legalArticle: 'Art. 87 LFT',
    },
    {
      step: 3,
      title: 'Parte exenta y parte gravada',
      description: 'Los primeros 30 UMA no pagan ISR. Con la UMA de $117.31, la exención es de $3,519.30.',
      formula: 'Gravado = aguinaldo − mín(aguinaldo, 30 × UMA)',
      legalArticle: 'Art. 93 fr. XIV LISR',
    },
    {
      step: 4,
      title: 'ISR estimado y neto',
      description: 'El ISR se estima como el impuesto adicional de sumar la parte gravada a tu sueldo mensual.',
      formula: 'ISR = ISR(sueldo + gravado) − ISR(sueldo)',
      legalArticle: 'Art. 96 LISR',
    },
  ],
  article: `## Qué es el aguinaldo y quién tiene derecho

El aguinaldo es una prestación anual obligatoria que la Ley Federal del Trabajo concede a todas las personas trabajadoras subordinadas, sin importar si son de base, de confianza, eventuales o por obra determinada. El artículo 87 establece que debe ser equivalente a por lo menos 15 días de salario y que se paga antes del 20 de diciembre de cada año. Ningún contrato puede dar menos, pero sí puede dar más: en muchas empresas el aguinaldo es de 20, 30 o hasta 40 días.

Tienen derecho también quienes no trabajaron el año completo. Si entraste a mitad de año, si renunciaste o si te despidieron antes de diciembre, recibes la parte proporcional al tiempo trabajado, con independencia de que estés laborando en la fecha de pago.

## Cómo calcular el aguinaldo paso a paso

Primero obtén tu salario diario. Si te pagan por mes, divide el sueldo mensual entre 30; si te pagan por semana, divide el pago semanal entre 7. El aguinaldo se calcula sobre el salario ordinario, sin incluir horas extra, bonos de productividad ni comisiones extraordinarias, salvo que tu contrato diga otra cosa. Después multiplica el salario diario por los días de aguinaldo que te corresponden.

Si trabajaste todo el año, ese es tu aguinaldo bruto. Si no, divide los días trabajados entre 365 y multiplica el resultado por el aguinaldo anual. Por ejemplo, con un sueldo de $9,000 mensuales (salario diario de $300) y 245 días trabajados desde el 1 de mayo, el aguinaldo proporcional es de 245 ÷ 365 × 15 × $300 = $3,020.55.

## Fecha límite: antes del 20 de diciembre

La ley dice que el aguinaldo debe pagarse antes del 20 de diciembre, de modo que el último día para pagarlo es el 19. Muchas empresas lo pagan en la primera quincena del mes o incluso en noviembre. Si tu patrón no paga a tiempo, comete una infracción que la Inspección del Trabajo puede sancionar con multas de 50 a 5,000 UMA, y tú puedes reclamarlo ante la PROFEDET o el Centro de Conciliación. El derecho a reclamar el aguinaldo prescribe en un año.

## Cuánto ISR paga el aguinaldo

El aguinaldo está exento de ISR hasta el equivalente a 30 veces la UMA diaria. La UMA cambia cada 1 de febrero; la de 2026 es de $117.31, por lo que la exención asciende a $3,519.30. Si tu aguinaldo es menor a esa cantidad, no te deben retener nada. Si es mayor, solo el excedente es gravable.

Para estimar el impuesto, esta calculadora usa el método de sumar la parte gravada a tu sueldo mensual y calcular la diferencia de ISR con la tarifa mensual del Anexo 8 de la Resolución Miscelánea Fiscal 2026. Tu patrón también puede optar por el procedimiento del artículo 174 del Reglamento de la LISR, que en ocasiones produce una retención menor. Por eso el resultado es una estimación y puede variar algunos pesos respecto de tu recibo.

## Aguinaldo proporcional en finiquito

Cuando termina la relación laboral antes de diciembre, el aguinaldo proporcional forma parte del finiquito. Se calcula igual: días trabajados en el año entre 365, por los días de aguinaldo y por el salario diario. Si te pagaron un adelanto de aguinaldo, el patrón puede descontarlo. En la calculadora de finiquito puedes ver este concepto junto con vacaciones, prima vacacional y, en su caso, la indemnización.

## Situaciones especiales

Las incapacidades por riesgo de trabajo y por maternidad cuentan como días trabajados para el aguinaldo, porque la ley las considera tiempo efectivo de servicio. En cambio, las faltas injustificadas y los permisos sin goce de sueldo pueden descontarse si así está pactado. Quienes trabajan por honorarios no tienen derecho al aguinaldo de la LFT, porque no existe una relación laboral subordinada; si en los hechos cumples horario, recibes órdenes y te pagan un salario, podrías estar ante una relación laboral disfrazada.

Los trabajadores del Estado tienen su propia regla: la Ley Federal de los Trabajadores al Servicio del Estado les concede 40 días de aguinaldo, pagaderos en dos partes. Esta calculadora está pensada para el sector privado regido por la LFT, pero puedes capturar 40 días para estimar el monto.

## Consejos para revisar tu recibo

Verifica que el salario diario sea el correcto, que el número de días coincida con tu contrato y que la parte exenta se haya aplicado. Si cobras salario mínimo, recuerda que en 2026 es de $315.04 diarios en la zona general y de $440.87 en la Zona Libre de la Frontera Norte, por lo que tu aguinaldo mínimo de 15 días sería de $4,725.60 o $6,613.05, respectivamente. Si planeas en qué usarlo, considera primero pagar deudas con intereses altos y apartar una parte para la cuesta de enero. Tener claro el monto neto desde noviembre te permite organizar mejor tus gastos de fin de año.`,
  examples: [
    {
      title: 'Ejemplo 1: año completo con $12,000 al mes',
      scenario: 'Diana trabaja todo 2026 con un sueldo de $12,000 mensuales y recibe el aguinaldo mínimo de 15 días.',
      inputs: { 'Sueldo mensual': '$12,000.00', 'Salario diario': '$400.00', 'Días trabajados': '365', 'Días de aguinaldo': '15' },
      breakdown: [
        { item: 'Aguinaldo bruto (15 × $400)', amount: '$6,000.00' },
        { item: 'Exento (30 UMA)', amount: '$3,519.30' },
        { item: 'Gravado', amount: '$2,480.70' },
        { item: 'ISR estimado', amount: '−$366.29' },
      ],
      total: '$5,633.71 neto',
    },
    {
      title: 'Ejemplo 2: proporcional desde el 1 de mayo',
      scenario: 'Óscar entró el 1 de mayo de 2026 con un sueldo de $9,000 al mes. Le corresponden 245 días de aguinaldo proporcional.',
      inputs: { 'Sueldo mensual': '$9,000.00', 'Salario diario': '$300.00', 'Días trabajados': '245', 'Días de aguinaldo': '15' },
      breakdown: [
        { item: 'Aguinaldo proporcional (245 ÷ 365 × 15 × $300)', amount: '$3,020.55' },
        { item: 'Exento (menor a 30 UMA)', amount: '$3,020.55' },
        { item: 'ISR', amount: '$0.00' },
      ],
      total: '$3,020.55 neto',
    },
  ],
  faqs: [
    { q: '¿Cuándo se paga el aguinaldo en 2026?', a: 'Antes del 20 de diciembre de 2026, es decir, a más tardar el 19 de diciembre (art. 87 LFT).' },
    { q: '¿Cuántos días de aguinaldo me corresponden?', a: 'Mínimo 15 días de salario por año completo. Tu contrato individual o colectivo puede darte más.' },
    { q: '¿Cómo se calcula el aguinaldo proporcional?', a: 'Días trabajados en el año entre 365, multiplicado por los días de aguinaldo y por tu salario diario.' },
    { q: '¿Cuánto aguinaldo está libre de impuestos en 2026?', a: 'Hasta 30 UMA: $3,519.30 con la UMA vigente desde el 1 de febrero de 2026 ($117.31 diarios).' },
    { q: '¿Me toca aguinaldo si renuncié en septiembre?', a: 'Sí, la parte proporcional a los días trabajados del 1 de enero a tu fecha de salida, y se paga en tu finiquito.' },
    { q: '¿Las incapacidades se descuentan del aguinaldo?', a: 'Las incapacidades por maternidad y por riesgo de trabajo no se descuentan. Otras ausencias pueden afectar el cálculo si así está pactado.' },
    { q: '¿Qué hago si no me pagan el aguinaldo?', a: 'Pide el pago por escrito y, si no cumplen, acude a la PROFEDET o al Centro de Conciliación Laboral. Tienes un año para reclamarlo.' },
    { q: '¿El aguinaldo incluye horas extra o comisiones?', a: 'Se calcula con el salario ordinario. Las percepciones extraordinarias no se incluyen salvo que tu contrato lo establezca.' },
    { q: '¿Los trabajadores por honorarios reciben aguinaldo?', a: 'No bajo la LFT, porque no hay relación laboral. Si en realidad estás subordinado, podrías reclamar el reconocimiento de la relación.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, art. 87', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del ISR, art. 93 fr. XIV', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
    { label: 'Anexo 8 RMF 2026 (SAT)', url: 'https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf' },
  ],
  relatedTools: [
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'ISR, subsidio e IMSS de tu sueldo mensual.' },
    { title: 'Calculadora de Finiquito', path: '/mx/calculadora-finiquito/', description: 'Aguinaldo proporcional dentro de tu finiquito.' },
    { title: 'Calculadora de PTU', path: '/mx/calculadora-ptu/', description: 'Tu reparto de utilidades de mayo o junio.' },
  ],
  relatedGuides: [
    { title: '¿Cuándo se paga el aguinaldo?', path: '/mx/guias/cuando-se-paga-el-aguinaldo/', description: 'Fecha límite, sanciones y cómo reclamar.' },
    { title: 'Valor de la UMA 2026', path: '/mx/uma/', description: 'Cómo se calcula la exención del aguinaldo.' },
  ],
  updatedAt: '2026-11-14',
};
