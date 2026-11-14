import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Finiquito 2026 (LFT) | Calcula',
  metaDescription:
    'Calcula tu finiquito o liquidación 2026 según la LFT: aguinaldo, vacaciones, prima vacacional, indemnización, prima de antigüedad e ISR. Gratis.',
  h1: 'Calculadora de Finiquito y Liquidación 2026',
  quickAnswer:
    'El finiquito se paga siempre que termina la relación laboral e incluye los días trabajados pendientes, el aguinaldo proporcional, las vacaciones no disfrutadas y su prima vacacional. Si te despiden sin causa justificada, además te corresponde la liquidación: tres meses de salario integrado y la prima de antigüedad de 12 días por año.',
  howItWorks: [
    {
      step: 1,
      title: 'Obtén tu salario diario (SD)',
      description:
        'Si capturas tu sueldo mensual, la calculadora lo divide entre 30. Si ganas por día o por semana, captura directamente el salario diario de tu recibo.',
      formula: 'SD = sueldo mensual ÷ 30',
      legalArticle: 'Arts. 82, 84 y 89 LFT',
    },
    {
      step: 2,
      title: 'Suma las partes proporcionales del finiquito',
      description:
        'Días trabajados sin pagar, aguinaldo por los días laborados en el año, vacaciones del año de servicio en curso que no tomaste y la prima vacacional sobre esas vacaciones.',
      formula: 'Aguinaldo = días del año ÷ 365 × días de aguinaldo × SD',
      legalArticle: 'Arts. 76, 79, 80 y 87 LFT',
    },
    {
      step: 3,
      title: 'Agrega la liquidación si el despido fue injustificado',
      description:
        'Indemnización constitucional de 90 días de salario diario integrado (SDI) y, cuando aplique, 20 días por año. El SDI suma al salario la parte diaria de aguinaldo y prima vacacional.',
      formula: 'SDI = SD × [1 + (días de aguinaldo + días de vacaciones × prima %) ÷ 365]',
      legalArticle: 'Arts. 48, 50 y 84 LFT',
    },
    {
      step: 4,
      title: 'Calcula la prima de antigüedad',
      description:
        'Doce días por cada año de servicio (con fracciones), con el salario topado al doble del salario mínimo. Se paga en todo despido y en la renuncia con 15 años o más.',
      formula: '12 × años × mín(SD, 2 × salario mínimo)',
      legalArticle: 'Arts. 162, 485 y 486 LFT',
    },
    {
      step: 5,
      title: 'Separa lo exento de lo gravado y estima el ISR',
      description:
        'El aguinaldo está exento hasta 30 UMA, la prima vacacional hasta 15 UMA y los pagos por separación hasta 90 UMA por año de servicio. Sobre el resto se estima el ISR.',
      formula: 'Neto = total bruto − ISR estimado',
      legalArticle: 'Arts. 93 y 96 LISR',
    },
  ],
  article: `## Qué es el finiquito y cuándo te lo deben pagar

El finiquito es el pago que liquida todas las prestaciones que ya ganaste y que todavía no te han pagado al momento de terminar la relación laboral. No importa si renunciaste, si te despidieron o si se acabó tu contrato por obra o tiempo determinado: el finiquito siempre se debe. Es dinero que ya es tuyo porque corresponde a días que trabajaste, al aguinaldo que se fue acumulando día con día y a las vacaciones que generaste y no alcanzaste a disfrutar.

La Ley Federal del Trabajo no fija un plazo exacto en días para entregarlo, pero el criterio de la autoridad laboral y de los tribunales es que se pague al momento de la separación o en el periodo ordinario de pago siguiente. Cuando el patrón se retrasa, puedes acudir a la PROFEDET, que asesora gratis y puede citar al patrón a una conciliación.

## Conceptos que integran el finiquito

Los conceptos que toda persona trabajadora debe revisar en su finiquito son cuatro. Esta calculadora los obtiene por separado para que puedas compararlos con el documento que te entregue Recursos Humanos.

- Días trabajados pendientes: los días de la quincena o semana en curso que todavía no te pagaron, a razón de tu salario diario.
- Aguinaldo proporcional: la parte de los 15 días de salario (o más, si tu contrato lo mejora) que corresponde a los días que trabajaste desde el 1 de enero o desde tu ingreso.
- Vacaciones no disfrutadas: los días que llevas generados en tu año de servicio actual, según la tabla de Vacaciones Dignas, menos los que ya tomaste, más las que tengas pendientes de años anteriores.
- Prima vacacional: al menos el 25% del salario que corresponde a esas vacaciones.

## Finiquito contra liquidación

La liquidación no sustituye al finiquito: se suma. Solo procede cuando el patrón termina la relación sin una causa justificada de las previstas en el artículo 47 de la LFT, o cuando tú rescindes la relación por una falta grave del patrón (artículo 51). En esos casos la ley ordena pagar una indemnización constitucional de tres meses de salario y la prima de antigüedad.

La indemnización se calcula con el salario diario integrado. El SDI incluye la parte diaria del aguinaldo y de la prima vacacional; con las prestaciones mínimas de ley el factor de integración es de 1.0493 en el primer año y sube conforme aumentan tus días de vacaciones. Si tu empresa da más aguinaldo o más prima, captúralo y el factor se ajusta solo.

## Los 20 días por año: cuándo sí y cuándo no

Mucha gente cree que en todo despido se pagan 20 días por año trabajado. No es así. El artículo 50 fracción II los contempla cuando el patrón se niega a reinstalarte después de que tú lo demandaste, en los casos del artículo 49, y cuando tú terminas la relación por causas imputables al patrón (artículo 52). En un despido injustificado común, la base legal es de tres meses más prima de antigüedad, aunque en la práctica muchas empresas incluyen los 20 días en el convenio para evitar un juicio. Por eso la calculadora los muestra como una opción que puedes activar.

## Prima de antigüedad

La prima de antigüedad equivale a 12 días de salario por cada año de servicio, incluidas las fracciones. Para calcularla, el salario diario no puede ser mayor al doble del salario mínimo del área: en 2026 el tope es de $630.08 en la zona general y de $881.74 en la Zona Libre de la Frontera Norte. Se paga en cualquier despido, justificado o injustificado, y también cuando renuncias, siempre que tengas al menos 15 años de servicio.

## Cómo se calcula el ISR del finiquito

No todo tu finiquito paga impuestos. La Ley del ISR exenta el aguinaldo hasta 30 veces la UMA diaria, la prima vacacional hasta 15 UMA y las indemnizaciones, prima de antigüedad y demás pagos por separación hasta 90 UMA por cada año de servicio, contando como año completo cualquier fracción mayor a seis meses. Con la UMA vigente desde el 1 de febrero de 2026, de $117.31, el aguinaldo está exento hasta $3,519.30 y la prima vacacional hasta $1,759.65.

La parte gravada de los conceptos ordinarios se estima como el ISR adicional que causarían sumados a tu sueldo mensual, con la tarifa del Anexo 8 de la Resolución Miscelánea Fiscal 2026. La parte gravada de la indemnización se grava con la tasa efectiva de tu último sueldo mensual ordinario, como indica el artículo 96 de la LISR. El resultado es una estimación: tu patrón puede aplicar el procedimiento del artículo 174 del Reglamento, que en algunos casos da una retención distinta.

## Qué revisar antes de firmar

Antes de firmar tu renuncia o el convenio de terminación, compara cada concepto con este cálculo. Verifica que el salario diario sea el correcto, que no falten vacaciones de años anteriores y que el aguinaldo considere todos los días del año. Si te piden firmar una renuncia cuando en realidad te están despidiendo, no firmes sin asesoría: al firmarla pierdes la indemnización. La PROFEDET y los Centros de Conciliación Laboral te orientan sin costo.

## Datos que necesitas tener a la mano

Ten cerca tu último recibo de nómina, tu fecha exacta de ingreso, la fecha de baja y el registro de vacaciones que ya disfrutaste. Si tu contrato o el contrato colectivo te dan más aguinaldo o mayor prima vacacional, revisa esas cláusulas: esta herramienta usa como piso los mínimos de ley y te deja capturar prestaciones superiores. Recuerda que el cálculo es orientativo y no sustituye la revisión de un abogado laboral.`,
  examples: [
    {
      title: 'Ejemplo 1: renuncia voluntaria después de 4 años',
      scenario:
        'Laura gana $12,000 al mes, entró el 1 de abril de 2022 y renuncia el 15 de septiembre de 2026. Le deben 15 días y ya tomó 4 días de vacaciones en su quinto año de servicio.',
      inputs: {
        'Sueldo mensual': '$12,000.00',
        'Salario diario': '$400.00',
        'Antigüedad': '4.46 años',
        'Motivo': 'Renuncia voluntaria',
      },
      breakdown: [
        { item: 'Días pendientes (15)', amount: '$6,000.00' },
        { item: 'Aguinaldo proporcional (258 días)', amount: '$4,241.10' },
        { item: 'Vacaciones (5.21 días)', amount: '$2,084.00' },
        { item: 'Prima vacacional 25%', amount: '$521.00' },
        { item: 'ISR estimado', amount: '−$1,609.15' },
      ],
      total: '$11,236.95 neto',
    },
    {
      title: 'Ejemplo 2: despido injustificado después de 7.6 años',
      scenario:
        'Jorge gana $20,000 al mes, ingresó el 1 de febrero de 2019 y lo despiden sin causa el 31 de agosto de 2026. Ya le pagaron todos sus días y no ha tomado vacaciones de su octavo año.',
      inputs: {
        'Salario diario': '$666.67',
        'SDI (factor 1.0562)': '$704.11',
        'Antigüedad': '7.59 años',
        'Motivo': 'Despido injustificado',
      },
      breakdown: [
        { item: 'Aguinaldo proporcional', amount: '$6,657.57' },
        { item: 'Vacaciones (12.78 días)', amount: '$8,520.04' },
        { item: 'Prima vacacional', amount: '$2,130.01' },
        { item: 'Indemnización 90 días de SDI', amount: '$63,369.90' },
        { item: 'Prima de antigüedad (tope $630.08)', amount: '$57,359.72' },
        { item: 'ISR estimado', amount: '−$6,891.67' },
      ],
      total: '$131,145.57 neto',
    },
  ],
  faqs: [
    {
      q: '¿Qué diferencia hay entre finiquito y liquidación?',
      a: 'El finiquito paga lo que ya ganaste (días pendientes, aguinaldo, vacaciones y prima vacacional) y se debe en cualquier separación. La liquidación es la indemnización adicional por despido injustificado: tres meses de salario integrado, prima de antigüedad y, en ciertos casos, 20 días por año.',
    },
    {
      q: '¿Cuánto tiempo tiene el patrón para pagarme el finiquito?',
      a: 'La LFT no fija un número de días, pero lo correcto es pagarlo al momento de la separación o, a más tardar, en la fecha normal de pago siguiente. Si no te pagan, acude a la PROFEDET o al Centro de Conciliación Laboral de tu estado.',
    },
    {
      q: '¿Si renuncio me pagan prima de antigüedad?',
      a: 'Solo si tienes 15 años de servicio o más (art. 162 LFT). Con menos antigüedad, la renuncia voluntaria solo da derecho al finiquito.',
    },
    {
      q: '¿Con qué salario se calcula la indemnización de tres meses?',
      a: 'Con el salario diario integrado, que incluye la parte diaria del aguinaldo, la prima vacacional y otras prestaciones fijas. Con las prestaciones mínimas de ley el factor va de 1.0493 a cerca de 1.06 según tu antigüedad.',
    },
    {
      q: '¿El finiquito paga impuestos?',
      a: 'Solo la parte que supera las exenciones: 30 UMA para el aguinaldo, 15 UMA para la prima vacacional y 90 UMA por año de servicio para indemnizaciones y prima de antigüedad. Los días trabajados y las vacaciones sí son gravables.',
    },
    {
      q: '¿Me corresponden los 20 días por año si me despiden?',
      a: 'No en todos los casos. Aplican si demandaste reinstalación y el patrón se negó a reinstalarte, o si tú terminaste la relación por una falta del patrón. Muchas empresas los incluyen en el convenio, pero no siempre son obligatorios.',
    },
    {
      q: '¿Qué pasa con las vacaciones que no tomé de años anteriores?',
      a: 'Te las deben pagar en el finiquito con su prima vacacional. La acción para reclamarlas prescribe en un año contado a partir de que eran exigibles, así que no dejes pasar mucho tiempo.',
    },
    {
      q: '¿Puedo negarme a firmar el finiquito?',
      a: 'Sí. Si los montos no coinciden con lo que te corresponde, puedes no firmar y pedir una revisión. Firmar un recibo de finiquito no te obliga a renunciar a derechos que la ley considera irrenunciables, pero sí complica reclamar después.',
    },
    {
      q: '¿Cuál es el tope de la prima de antigüedad en 2026?',
      a: 'El salario para calcularla no puede exceder el doble del salario mínimo: $630.08 diarios en la zona general y $881.74 en la Zona Libre de la Frontera Norte.',
    },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo (Cámara de Diputados)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del Impuesto sobre la Renta', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'Anexo 8 RMF 2026 (SAT)', url: 'https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
    { label: 'Salarios mínimos 2026 (CONASAMI)', url: 'https://www.gob.mx/conasami' },
    { label: 'PROFEDET', url: 'https://www.gob.mx/profedet' },
  ],
  relatedTools: [
    { title: 'Calculadora de Liquidación por Despido', path: '/mx/calculadora-liquidacion/', description: 'Indemnización de 3 meses, 20 días por año y prima de antigüedad.' },
    { title: 'Finiquito por Renuncia Voluntaria', path: '/mx/calculadora-finiquito/renuncia-voluntaria/', description: 'Lo que te toca si renuncias, con y sin 15 años de antigüedad.' },
    { title: 'Calculadora de Salario Diario Integrado', path: '/mx/calculadora-salario-diario-integrado/', description: 'Factor de integración y SDI para tu indemnización.' },
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'Aguinaldo completo o proporcional con ISR.' },
  ],
  relatedGuides: [
    { title: 'Diferencia entre finiquito y liquidación', path: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/', description: 'Qué incluye cada uno y cuándo se paga.' },
    { title: '¿Cuánto me toca si renuncio?', path: '/mx/guias/cuanto-me-toca-si-renuncio/', description: 'Conceptos y ejemplos para la renuncia voluntaria.' },
    { title: 'Despido injustificado: qué hacer', path: '/mx/guias/despido-injustificado-que-hacer/', description: 'Plazos, PROFEDET y conciliación.' },
  ],
  updatedAt: '2026-11-14',
};
