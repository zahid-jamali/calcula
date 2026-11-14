import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Liquidación por Despido 2026 | Calcula',
  metaDescription:
    'Calcula tu liquidación por despido injustificado en México: 3 meses de SDI, 20 días por año, prima de antigüedad, finiquito e ISR. Gratis.',
  h1: 'Calculadora de Liquidación por Despido Injustificado 2026',
  quickAnswer:
    'Si te despiden sin causa justificada, te corresponde el finiquito más la liquidación: indemnización de 90 días de salario diario integrado, prima de antigüedad de 12 días por año con tope de dos salarios mínimos y, cuando el patrón se niega a reinstalarte o la separación es por su culpa, 20 días por año trabajado.',
  howItWorks: [
    {
      step: 1,
      title: 'Calcula el salario diario integrado',
      description:
        'La indemnización se paga con SDI, que suma al salario diario la parte proporcional de aguinaldo y prima vacacional del año de servicio en curso.',
      formula: 'SDI = SD × [1 + (aguinaldo + vacaciones × prima %) ÷ 365]',
      legalArticle: 'Art. 84 LFT',
    },
    {
      step: 2,
      title: 'Indemnización constitucional',
      description: 'Tres meses de salario, que se calculan como 90 días de SDI.',
      formula: '90 × SDI',
      legalArticle: 'Art. 123-A fr. XXII CPEUM; arts. 48 y 50 fr. III LFT',
    },
    {
      step: 3,
      title: '20 días por año (si aplica)',
      description:
        'Actívalo si demandaste la reinstalación y el patrón se negó, o si tú rescindiste por una falta grave del patrón.',
      formula: '20 × años de servicio × SDI',
      legalArticle: 'Arts. 49, 50 fr. II y 52 LFT',
    },
    {
      step: 4,
      title: 'Prima de antigüedad',
      description: 'Doce días por año, con salario topado al doble del salario mínimo de tu zona.',
      formula: '12 × años × mín(SD, 2 × salario mínimo)',
      legalArticle: 'Arts. 162 y 486 LFT',
    },
    {
      step: 5,
      title: 'Suma el finiquito y estima el ISR',
      description:
        'Se agregan días pendientes, aguinaldo, vacaciones y prima vacacional. La indemnización está exenta hasta 90 UMA por año de servicio.',
      formula: 'Neto = finiquito + liquidación − ISR',
      legalArticle: 'Arts. 93 fr. XIII y 96 LISR',
    },
  ],
  article: `## Qué es la liquidación por despido injustificado

La liquidación es la compensación económica que la ley impone al patrón cuando termina la relación laboral sin una causa justificada. Las causas que sí permiten despedir sin responsabilidad están enumeradas en el artículo 47 de la Ley Federal del Trabajo: faltas de probidad, más de tres faltas injustificadas en 30 días, desobediencia, presentarse en estado de embriaguez, entre otras. Si el patrón no puede demostrar alguna de ellas, o no te entregó el aviso de rescisión por escrito con la causa y la fecha, el despido se considera injustificado.

En ese caso tienes dos caminos: pedir que te reinstalen en tu puesto o pedir la indemnización. La mayoría de las personas elige la indemnización, y es lo que estima esta calculadora: la indemnización constitucional, la prima de antigüedad, el finiquito que de todos modos te corresponde y, si aplica, los 20 días por año.

## Indemnización constitucional de tres meses

El artículo 123 de la Constitución y el artículo 48 de la LFT establecen que el trabajador despedido injustificadamente tiene derecho a una indemnización de tres meses de salario. En la práctica se calculan 90 días de salario diario integrado. El SDI no es tu sueldo neto ni tu sueldo base: es el salario diario más la parte diaria de tus prestaciones. Con 15 días de aguinaldo, 22 días de vacaciones y 25% de prima vacacional, por ejemplo, el factor de integración es de 1.0562, y un salario diario de $500 se convierte en un SDI de $528.08.

## Los 20 días por año trabajado

Este es el concepto que más confusión genera. El artículo 50 fracción II ordena pagar 20 días de salario por cada año de servicio cuando la relación es por tiempo indeterminado y el patrón se niega a reinstalar al trabajador en los casos del artículo 49, o cuando es el trabajador quien rescinde la relación por causas imputables al patrón (artículo 52). En un despido injustificado ordinario, sin juicio de por medio, la ley no lo exige automáticamente; sin embargo, es común que se incluya en los convenios de terminación para cerrar cualquier conflicto. Por eso la calculadora te deja activarlo o desactivarlo y te muestra la diferencia.

## Prima de antigüedad

Además de la indemnización, cualquier despido, justificado o injustificado, genera la prima de antigüedad: 12 días de salario por año de servicio, contando fracciones. El salario que se usa tiene un tope del doble del salario mínimo, por lo que en 2026 no puede superar $630.08 diarios en la zona general ni $881.74 en la Zona Libre de la Frontera Norte. Para quienes ganan más del tope, la prima de antigüedad se calcula con el tope, no con el salario real.

## El finiquito sigue incluido

La liquidación se suma al finiquito, no lo reemplaza. Por eso el resultado incluye los días trabajados pendientes, el aguinaldo proporcional, las vacaciones del año de servicio que no disfrutaste y su prima vacacional. Si tienes vacaciones de años anteriores pendientes, captúralas en el campo correspondiente.

## ISR de la liquidación

Los pagos por separación (indemnización, 20 días y prima de antigüedad) están exentos de ISR hasta 90 veces la UMA por cada año de servicio; toda fracción de más de seis meses cuenta como año completo. Con la UMA de $117.31, cada año exenta $10,557.90. Lo que exceda se grava con la tasa efectiva de tu último sueldo mensual ordinario, conforme al artículo 96 de la LISR, y si el excedente es menor que tu sueldo mensual se acumula a tus ingresos ordinarios. El aguinaldo y la prima vacacional tienen sus propias exenciones de 30 y 15 UMA.

## Plazos para reclamar y cómo negociar

Si no te pagan lo que corresponde, tienes dos meses a partir del día siguiente al despido para solicitar la conciliación prejudicial y, en su caso, demandar (artículo 518 LFT). Ese plazo es corto, así que no lo dejes pasar. Antes de demandar es obligatorio acudir al Centro de Conciliación; ahí puedes llegar a un convenio con el patrón. Tener un cálculo claro, con cada concepto y su fundamento, te permite negociar con datos. La PROFEDET te representa gratis si eres trabajador de una empresa de jurisdicción federal y te orienta en los demás casos.

## Errores comunes

Los errores más frecuentes son calcular la indemnización con el salario base en lugar del SDI, olvidar el aguinaldo proporcional, omitir vacaciones de años anteriores y aplicar la prima de antigüedad sin el tope de dos salarios mínimos, o al revés, topar el salario de la indemnización, que no tiene tope. Revisa cada línea del desglose antes de firmar cualquier convenio, y desconfía de cualquier documento que diga renuncia voluntaria si en realidad te despidieron.

Por último, guarda copia de tus recibos de nómina, de tu alta en el IMSS y de cualquier mensaje o correo donde te comuniquen el despido. Esos documentos prueban tu salario y tu antigüedad, que son las dos bases de toda la liquidación.`,
  examples: [
    {
      title: 'Ejemplo 1: despido con 5.4 años, sin 20 días',
      scenario:
        'Andrea gana $15,000 al mes, ingresó el 1 de junio de 2021 y la despiden sin causa el 31 de octubre de 2026. Ya le pagaron su sueldo y no tomó vacaciones de su sexto año.',
      inputs: {
        'Salario diario': '$500.00',
        'SDI (factor 1.0562)': '$528.08',
        'Antigüedad': '5.42 años',
        '20 días por año': 'No',
      },
      breakdown: [
        { item: 'Finiquito (aguinaldo, vacaciones y prima)', amount: '$12,009.08' },
        { item: 'Indemnización 90 días SDI', amount: '$47,527.20' },
        { item: 'Prima de antigüedad', amount: '$32,531.51' },
        { item: 'ISR estimado', amount: '−$4,030.33' },
      ],
      total: '$88,037.46 neto',
    },
    {
      title: 'Ejemplo 2: despido con 10.7 años y 20 días por año',
      scenario:
        'Héctor gana $30,000 al mes, ingresó el 15 de enero de 2016 y el despido ocurre el 30 de septiembre de 2026. Se negocia la indemnización completa con 20 días por año.',
      inputs: {
        'Salario diario': '$1,000.00',
        'SDI (factor 1.0575)': '$1,057.53',
        'Antigüedad': '10.72 años',
        '20 días por año': 'Sí',
      },
      breakdown: [
        { item: 'Finiquito', amount: '$32,506.68' },
        { item: 'Indemnización 90 días SDI', amount: '$95,177.70' },
        { item: '20 días por año', amount: '$226,688.07' },
        { item: 'Prima de antigüedad (tope $630.08)', amount: '$81,036.92' },
        { item: 'ISR estimado', amount: '−$49,587.45' },
      ],
      total: '$385,821.92 neto',
    },
  ],
  faqs: [
    {
      q: '¿Cuánto me deben pagar si me despiden sin causa?',
      a: 'Tu finiquito más tres meses de salario diario integrado y la prima de antigüedad de 12 días por año. Si el patrón se niega a reinstalarte tras una demanda, se agregan 20 días por año.',
    },
    {
      q: '¿Los 20 días por año siempre se pagan?',
      a: 'No. Proceden en los supuestos de los artículos 49, 50 fr. II y 52 de la LFT. En la práctica muchas empresas los incluyen en el convenio, pero conviene saber que no son automáticos.',
    },
    {
      q: '¿La indemnización de tres meses tiene tope?',
      a: 'No. Se calcula con tu salario diario integrado completo. El tope de dos salarios mínimos solo aplica a la prima de antigüedad.',
    },
    {
      q: '¿Cuánto tiempo tengo para demandar un despido injustificado?',
      a: 'Dos meses contados a partir del día siguiente a la separación (art. 518 LFT). Antes de demandar debes solicitar la conciliación prejudicial.',
    },
    {
      q: '¿El patrón me tiene que dar aviso por escrito?',
      a: 'Sí. El artículo 47 exige un aviso escrito con la conducta y la fecha. La falta de aviso por sí sola presume que el despido fue injustificado.',
    },
    {
      q: '¿La liquidación paga impuestos?',
      a: 'Solo lo que supere 90 UMA por año de servicio. El excedente se grava con la tasa efectiva de tu último sueldo mensual.',
    },
    {
      q: '¿Qué pasa si firmé una renuncia?',
      a: 'La renuncia firmada se presume voluntaria. Si te obligaron a firmarla, puedes impugnarla, pero tendrás que probarlo. Busca asesoría de la PROFEDET cuanto antes.',
    },
    {
      q: '¿Me corresponde liquidación en un contrato por tiempo determinado?',
      a: 'Si el contrato termina en la fecha pactada, no. Si te separan antes sin causa, el artículo 50 fija la indemnización según la duración del contrato.',
    },
    {
      q: '¿Puedo pedir mi reinstalación en lugar del dinero?',
      a: 'Sí. Es tu elección. Si el patrón se niega a reinstalarte, en los casos permitidos debe pagarte la indemnización completa con 20 días por año.',
    },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 47-52, 162 y 518', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Constitución, art. 123 apartado A', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf' },
    { label: 'Ley del ISR, arts. 93 y 96', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'Centro Federal de Conciliación y Registro Laboral', url: 'https://www.gob.mx/cfcrl' },
    { label: 'PROFEDET', url: 'https://www.gob.mx/profedet' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito', path: '/mx/calculadora-finiquito/', description: 'Todos los motivos de separación.' },
    { title: 'Salario Diario Integrado', path: '/mx/calculadora-salario-diario-integrado/', description: 'Calcula el SDI de tu indemnización.' },
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'ISR e IMSS de tu sueldo mensual.' },
  ],
  relatedGuides: [
    { title: 'Despido injustificado: qué hacer', path: '/mx/guias/despido-injustificado-que-hacer/', description: 'Pasos y plazos para reclamar.' },
    { title: 'Diferencia entre finiquito y liquidación', path: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/', description: 'Conceptos de cada pago.' },
    { title: '¿Qué es la prima de antigüedad?', path: '/mx/guias/que-es-la-prima-de-antiguedad/', description: 'Cuándo se paga y con qué tope.' },
  ],
  updatedAt: '2026-11-14',
};
