import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Salario Diario Integrado 2026 | Calcula',
  metaDescription:
    'Calcula tu factor de integración y salario diario integrado (SDI) con aguinaldo, vacaciones y prima vacacional. Incluye tope de 25 UMA del IMSS.',
  h1: 'Calculadora de Salario Diario Integrado (SDI) 2026',
  quickAnswer:
    'El salario diario integrado (SDI) es tu salario diario más la parte diaria de las prestaciones que recibes, como aguinaldo y prima vacacional. Con las prestaciones mínimas de ley el factor de integración es 1.0493 en el primer año. El SDI se usa para la indemnización por despido y, con tope de 25 UMA, para cotizar al IMSS.',
  howItWorks: [
    {
      step: 1,
      title: 'Parte diaria del aguinaldo',
      description: 'Divide los días de aguinaldo anuales entre 365.',
      formula: 'Aguinaldo diario = días de aguinaldo ÷ 365',
      legalArticle: 'Art. 87 LFT',
    },
    {
      step: 2,
      title: 'Parte diaria de la prima vacacional',
      description: 'Multiplica los días de vacaciones por el porcentaje de prima y divide entre 365.',
      formula: 'Prima diaria = días de vacaciones × prima % ÷ 365',
      legalArticle: 'Arts. 76 y 80 LFT',
    },
    {
      step: 3,
      title: 'Factor de integración',
      description: 'Suma 1 más las dos partes diarias anteriores.',
      formula: 'Factor = 1 + (aguinaldo + vacaciones × prima) ÷ 365',
      legalArticle: 'Art. 84 LFT; art. 27 LSS',
    },
    {
      step: 4,
      title: 'Salario diario integrado y SBC',
      description: 'Multiplica tu salario diario por el factor y suma otras prestaciones fijas que integren. Para el IMSS, el SBC se topa en 25 UMA.',
      formula: 'SDI = SD × factor + otras prestaciones',
      legalArticle: 'Art. 28 LSS',
    },
  ],
  article: `## Qué es el salario diario integrado

En la nómina mexicana conviven varios salarios. El salario diario (SD) es lo que ganas por día de trabajo: tu sueldo mensual dividido entre 30. El salario diario integrado (SDI) va más allá, porque el artículo 84 de la Ley Federal del Trabajo dice que el salario se integra con los pagos en efectivo por cuota diaria, gratificaciones, percepciones, habitación, primas, comisiones, prestaciones en especie y cualquier otra cantidad o prestación que se entregue al trabajador por su trabajo. En otras palabras, el SDI reparte día por día el valor de prestaciones que recibes una vez al año, como el aguinaldo y la prima vacacional.

## Para qué sirve el SDI

El SDI tiene dos usos principales. El primero es la indemnización por despido injustificado: los tres meses de salario y, en su caso, los 20 días por año se calculan con el salario integrado, no con el salario base. Usar el salario base en lugar del SDI es uno de los errores más comunes en las liquidaciones y puede costarte varios miles de pesos.

El segundo uso es la cotización al Instituto Mexicano del Seguro Social. El salario base de cotización (SBC) es, en esencia, el SDI que tu patrón reporta al IMSS, con algunas exclusiones previstas en el artículo 27 de la Ley del Seguro Social y con un tope máximo de 25 UMA diarias. De tu SBC dependen las incapacidades que te pague el IMSS, tu pensión y tus aportaciones a la Afore y al Infonavit.

## El factor de integración mínimo

Con las prestaciones mínimas de ley (15 días de aguinaldo, 12 días de vacaciones en el primer año y 25% de prima vacacional), el factor de integración se calcula así: 1 + (15 + 12 × 0.25) ÷ 365 = 1 + 18 ÷ 365 = 1.0493. Esto significa que tu SDI es 4.93% mayor que tu salario diario. Conforme ganas más días de vacaciones, el factor sube: con 14 días es 1.0507, con 20 días es 1.0548 y con 22 días es 1.0562.

Si tu empresa te da prestaciones superiores, el factor aumenta. Por ejemplo, con 30 días de aguinaldo, 20 días de vacaciones y 50% de prima, el factor es 1 + (30 + 20 × 0.5) ÷ 365 = 1.1096.

## Otras prestaciones que integran

Además de aguinaldo y prima vacacional, pueden integrar al salario los bonos fijos, las comisiones habituales, el fondo de ahorro que exceda los límites legales, los vales de despensa por encima del 40% de la UMA y otras prestaciones que se entreguen de forma regular. No integran, entre otros, los instrumentos de trabajo, la parte del fondo de ahorro dentro de los límites, las aportaciones al Infonavit y las horas extra dentro de los límites del artículo 27 de la LSS. La calculadora incluye un campo para que sumes la parte diaria de prestaciones fijas que sí integren.

## El tope de 25 UMA

Para el IMSS, el SBC no puede ser mayor a 25 veces la UMA diaria. Con la UMA de $117.31 vigente desde el 1 de febrero de 2026, el tope es de $2,932.75 diarios. Si tu SDI supera esa cifra, cotizas con el tope. Este tope no aplica a la indemnización laboral: si te despiden, la indemnización se calcula con tu SDI completo.

## Cómo usar esta calculadora

Captura tu salario diario, los días de aguinaldo que te da tu empresa, los días de vacaciones de tu año de servicio actual y el porcentaje de prima vacacional. Si recibes otras prestaciones fijas que integran, escribe su valor diario. La herramienta te muestra el factor de integración, el SDI, el equivalente mensual y si tu SBC queda topado. Si no sabes cuántos días de vacaciones te tocan, consulta nuestra tabla de Vacaciones Dignas.

## Errores comunes al calcular el SDI

Usar 360 días en lugar de 365 para el factor, olvidar actualizar los días de vacaciones cada aniversario y no incluir la prima vacacional son los errores más frecuentes. También es común confundir el SDI con el SBC topado. Revisa tu alta y tus modificaciones salariales en el IMSS: puedes consultar tus semanas cotizadas y tu salario registrado en el portal del IMSS con tu CURP y tu número de seguridad social.

## Por qué conviene revisarlo cada año

El factor cambia cada vez que cumples un aniversario, porque tus días de vacaciones aumentan. El patrón debe comunicar al IMSS las modificaciones de salario dentro de los plazos legales, y cuando no lo hace tus cotizaciones quedan por debajo de lo que corresponde. Revisar tu SDI una vez al año te permite detectar diferencias a tiempo y pedir la corrección, en lugar de descubrirlas cuando solicitas una incapacidad, un crédito de vivienda o tu pensión. Un SDI correcto hoy es una mejor pensión mañana.

## Resumen rápido

El SDI siempre es mayor que tu salario diario, porque reparte por día el aguinaldo, la prima vacacional y otras prestaciones fijas. Úsalo para revisar tu indemnización y tu alta en el IMSS, y recalcúlalo cada vez que cambie tu sueldo o tus días de vacaciones.`,
  examples: [
    {
      title: 'Ejemplo 1: prestaciones de ley, primer año',
      scenario: 'Carla gana $12,000 al mes (SD de $400) y recibe las prestaciones mínimas: 15 días de aguinaldo, 12 de vacaciones y 25% de prima.',
      inputs: { 'Salario diario': '$400.00', 'Aguinaldo': '15 días', 'Vacaciones': '12 días', 'Prima vacacional': '25%' },
      breakdown: [
        { item: 'Factor de integración', amount: '1.0493' },
        { item: 'SDI diario', amount: '$419.72' },
        { item: 'Equivalente mensual (30.4 días)', amount: '$12,759.49' },
      ],
      total: 'SDI $419.72',
    },
    {
      title: 'Ejemplo 2: prestaciones superiores a la ley',
      scenario: 'Luis tiene un SD de $800, 30 días de aguinaldo, 20 días de vacaciones y 50% de prima vacacional por contrato colectivo.',
      inputs: { 'Salario diario': '$800.00', 'Aguinaldo': '30 días', 'Vacaciones': '20 días', 'Prima vacacional': '50%' },
      breakdown: [
        { item: 'Factor de integración', amount: '1.1096' },
        { item: 'SDI diario', amount: '$887.68' },
        { item: 'Tope SBC 25 UMA', amount: '$2,932.75' },
      ],
      total: 'SDI $887.68',
    },
  ],
  faqs: [
    { q: '¿Cuál es el factor de integración mínimo en 2026?', a: '1.0493 en el primer año, con 15 días de aguinaldo, 12 de vacaciones y 25% de prima vacacional.' },
    { q: '¿Qué diferencia hay entre SDI y SBC?', a: 'El SDI es el salario integrado para efectos laborales. El SBC es el que se reporta al IMSS, con exclusiones del art. 27 LSS y tope de 25 UMA.' },
    { q: '¿Con qué salario se paga la indemnización por despido?', a: 'Con el salario diario integrado completo, sin el tope de 25 UMA.' },
    { q: '¿Cuál es el tope del SBC en 2026?', a: '25 UMA diarias: $2,932.75 con la UMA vigente desde febrero de 2026.' },
    { q: '¿Por qué se divide entre 365 y no entre 360?', a: 'Porque el aguinaldo y las vacaciones son prestaciones anuales y el año calendario tiene 365 días. Es el criterio que usa el IMSS.' },
    { q: '¿El factor cambia cada año?', a: 'Sí, cuando aumentan tus días de vacaciones en cada aniversario. Por ejemplo, con 14 días el factor mínimo es 1.0507.' },
    { q: '¿Los vales de despensa integran al salario?', a: 'Solo la parte que excede el 40% de la UMA mensual, conforme al art. 27 de la LSS.' },
    { q: '¿Las horas extra integran al SDI?', a: 'Para el IMSS no integran si están dentro de los límites legales. Para la indemnización depende de si son habituales.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, art. 84', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del Seguro Social, arts. 27 y 28', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
    { label: 'IMSS', url: 'https://www.imss.gob.mx' },
  ],
  relatedTools: [
    { title: 'Calculadora de Liquidación', path: '/mx/calculadora-liquidacion/', description: 'Indemnización con tu SDI.' },
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'Cuotas del IMSS con tu SBC.' },
    { title: 'Calculadora de Vacaciones', path: '/mx/calculadora-vacaciones/', description: 'Días por antigüedad para el factor.' },
  ],
  relatedGuides: [
    { title: 'Tabla de Vacaciones 2026', path: '/mx/tabla-de-vacaciones/', description: 'Días de vacaciones de 1 a 35 años.' },
    { title: 'Diferencia entre finiquito y liquidación', path: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/', description: 'Dónde se usa el SDI.' },
  ],
  updatedAt: '2026-11-14',
};
