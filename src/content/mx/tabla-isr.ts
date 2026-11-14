import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Tabla ISR 2026 Mensual (Art. 96 LISR) | Calcula',
  metaDescription:
    'Tabla ISR 2026 mensual del SAT para sueldos y salarios: límites, cuota fija y tasas del 1.92% al 35%, con ejemplos de cálculo y subsidio al empleo.',
  h1: 'Tabla ISR 2026 Mensual',
  quickAnswer:
    'La tarifa mensual de ISR 2026 para sueldos y salarios tiene 11 renglones, con tasas del 1.92% al 35%. El SAT la actualizó en el Anexo 8 de la Resolución Miscelánea Fiscal 2026. Para calcular tu ISR ubicas tu ingreso, restas el límite inferior, aplicas la tasa al excedente y sumas la cuota fija.',
  howItWorks: [
    {
      step: 1,
      title: 'Ubica tu ingreso en la tabla',
      description: 'Busca el renglón cuyo límite inferior y superior contengan tu ingreso mensual gravable.',
      legalArticle: 'Art. 96 LISR',
    },
    {
      step: 2,
      title: 'Calcula el excedente',
      description: 'Resta el límite inferior del renglón a tu ingreso.',
      formula: 'Excedente = ingreso − límite inferior',
    },
    {
      step: 3,
      title: 'Aplica la tasa y suma la cuota fija',
      description: 'Multiplica el excedente por el porcentaje del renglón y súmale la cuota fija.',
      formula: 'ISR = cuota fija + excedente × tasa',
      legalArticle: 'Anexo 8 RMF 2026',
    },
    {
      step: 4,
      title: 'Resta el subsidio si aplica',
      description: 'Si tu ingreso mensual no supera $11,492.66, resta $535.65 de subsidio para el empleo, sin generar saldo a favor.',
      formula: 'ISR a retener = máx(0, ISR − subsidio)',
      legalArticle: 'Decreto DOF 31-dic-2025',
    },
  ],
  article: `## La tarifa mensual de ISR 2026

El artículo 96 de la Ley del Impuesto sobre la Renta obliga a los patrones a retener cada mes el ISR de los sueldos y salarios que pagan. Para hacerlo usan una tarifa progresiva: a mayor ingreso, mayor tasa marginal. Las cantidades de la tarifa se actualizan por inflación cuando la inflación acumulada supera el 10% desde la última actualización. Eso ocurrió de nuevo, y el SAT publicó las tarifas actualizadas en el Anexo 8 de la Resolución Miscelánea Fiscal para 2026, en el Diario Oficial del 28 de diciembre de 2025.

La nueva tarifa conserva los mismos 11 renglones y las mismas tasas que la anterior, del 1.92% al 35%, pero los límites y las cuotas fijas aumentaron alrededor de 13.2%. En la práctica, esto significa que para un mismo sueldo pagas menos ISR que con la tabla anterior, porque cada peso cae en un renglón más bajo.

## Cómo leer la tabla

Cada renglón tiene cuatro datos: límite inferior, límite superior, cuota fija y porcentaje para aplicarse sobre el excedente del límite inferior. La cuota fija es el impuesto acumulado de todos los renglones anteriores; el porcentaje solo se aplica a la parte de tu ingreso que rebasa el límite inferior de tu renglón. Por eso la tasa del renglón no es la tasa que pagas sobre todo tu sueldo: tu tasa efectiva siempre es menor.

## Ejemplo de cálculo paso a paso

Supón un sueldo mensual de $15,000. Ese ingreso cae en el renglón que va de $14,644.65 a $17,533.64, con cuota fija de $1,339.14 y tasa del 17.92%. El excedente es $15,000 − $14,644.65 = $355.35. Al aplicarle la tasa obtienes $63.68. Sumado a la cuota fija, el ISR mensual es de $1,402.82. Tu tasa efectiva es de 9.35%, mucho menor que el 17.92% del renglón.

## Subsidio para el empleo

Si tu ingreso mensual es de hasta $11,492.66, tienes derecho al subsidio para el empleo de $535.65 al mes, que se resta del ISR calculado con la tabla. Si el subsidio es mayor que el impuesto, tu retención queda en cero; desde 2024 la diferencia ya no se entrega en efectivo. Quienes ganan solo el salario mínimo no tienen retención de ISR.

## Tarifas de otros periodos

Además de la mensual, el Anexo 8 incluye tarifas diaria, semanal, decenal y quincenal, que se obtienen dividiendo la mensual entre 30.4 y multiplicando por los días del periodo. Si te pagan por semana o por quincena, tu patrón usa la tarifa del periodo correspondiente. El resultado mensual de esta página es equivalente y te sirve para revisar que tus retenciones sean razonables.

## La declaración anual

La retención mensual es un pago provisional. Al final del año, tu patrón calcula el impuesto anual con la tarifa anual y te devuelve o te cobra la diferencia, salvo que ganes más de $400,000 al año, tengas dos o más patrones simultáneos o tengas otros ingresos, en cuyo caso debes presentar tu declaración anual en abril. En la declaración puedes aplicar deducciones personales, como gastos médicos, colegiaturas o intereses hipotecarios, que pueden generar saldo a favor.

## Ingresos que no se gravan con la tabla completa

No todo lo que recibes se suma a la base del ISR. El aguinaldo hasta 30 UMA, la prima vacacional y la PTU hasta 15 UMA, la prima dominical hasta 1 UMA por domingo, las horas extra dentro de ciertos límites y las indemnizaciones hasta 90 UMA por año de servicio están exentas. Solo la parte gravada se suma a tu ingreso para aplicar la tarifa.

## Por qué tu recibo puede ser distinto

Si comparas este cálculo con tu recibo, considera que el patrón puede haber incluido horas extra, bonos o premios gravables, o descontado días no laborados. También puede aplicar el procedimiento del artículo 174 del Reglamento de la LISR para el aguinaldo o la PTU. Pide a Recursos Humanos tu CFDI de nómina, donde aparece el detalle de percepciones gravadas y exentas y el ISR retenido.

## Conceptos que se confunden con frecuencia

La cuota fija no es un cobro adicional: es simplemente el impuesto de los renglones inferiores ya calculado. Tampoco existe un salto brusco al cambiar de renglón, porque la tasa más alta solo se aplica sobre el excedente. Un aumento de sueldo nunca te hace ganar menos en neto por cambiar de renglón; lo único que puede ocurrir es que pierdas el subsidio para el empleo al rebasar $11,492.66, lo que genera una pequeña diferencia en ese umbral.

## Cómo usar esta tabla con tu recibo

Toma de tu CFDI de nómina el total de percepciones gravadas del mes, ubícalo en la tabla y repite el cálculo de esta página. Si el resultado coincide con el ISR retenido, menos el subsidio que te corresponda, tu nómina está bien calculada. Si hay diferencias grandes, pregunta en Recursos Humanos qué tarifa y qué periodo usaron.`,
  examples: [
    {
      title: 'Sueldo de $8,000',
      scenario: 'Ingreso mensual de $8,000; renglón de $7,168.52 a $12,598.02.',
      inputs: { 'Cuota fija': '$420.95', 'Tasa': '10.88%' },
      breakdown: [
        { item: 'Excedente', amount: '$831.48' },
        { item: 'ISR tarifa', amount: '$511.42' },
        { item: 'Subsidio', amount: '−$511.42' },
      ],
      total: 'ISR retenido: $0.00',
    },
    {
      title: 'Sueldo de $15,000',
      scenario: 'Ingreso mensual de $15,000; renglón de $14,644.65 a $17,533.64.',
      inputs: { 'Cuota fija': '$1,339.14', 'Tasa': '17.92%' },
      breakdown: [
        { item: 'Excedente', amount: '$355.35' },
        { item: 'Impuesto marginal', amount: '$63.68' },
      ],
      total: 'ISR: $1,402.82',
    },
    {
      title: 'Sueldo de $40,000',
      scenario: 'Ingreso mensual de $40,000; renglón de $35,362.84 a $55,736.68.',
      inputs: { 'Cuota fija': '$5,665.16', 'Tasa': '23.52%' },
      breakdown: [
        { item: 'Excedente', amount: '$4,637.16' },
        { item: 'Impuesto marginal', amount: '$1,090.66' },
      ],
      total: 'ISR: $6,755.82',
    },
  ],
  faqs: [
    { q: '¿Dónde se publica la tabla de ISR 2026?', a: 'En el Anexo 8 de la Resolución Miscelánea Fiscal para 2026, publicado en el DOF el 28 de diciembre de 2025.' },
    { q: '¿Cuál es la tasa máxima de ISR para sueldos?', a: '35%, aplicable al excedente de $425,642.00 mensuales.' },
    { q: '¿Cambió la tabla de ISR en 2026?', a: 'Sí, los límites y cuotas fijas se actualizaron alrededor de 13.2% por inflación; las tasas se mantienen.' },
    { q: '¿Cuánto ISR pago si gano $15,000 al mes?', a: '$1,402.82 con la tarifa mensual 2026.' },
    { q: '¿Qué es la cuota fija?', a: 'El impuesto acumulado de los renglones anteriores. Se suma al resultado de aplicar la tasa al excedente.' },
    { q: '¿Quién recibe subsidio para el empleo?', a: 'Quienes ganan hasta $11,492.66 al mes. Se restan $535.65 del ISR.' },
    { q: '¿Qué tabla se usa para la nómina quincenal?', a: 'La tarifa quincenal del mismo Anexo 8, que equivale a la mensual ajustada a 15 días.' },
    { q: '¿La tasa del renglón es lo que pago sobre todo mi sueldo?', a: 'No. Solo se aplica al excedente del límite inferior; tu tasa efectiva es menor.' },
  ],
  sources: [
    { label: 'Anexo 8 RMF 2026 (SAT)', url: 'https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf' },
    { label: 'Ley del ISR, art. 96', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'Diario Oficial de la Federación', url: 'https://www.dof.gob.mx' },
  ],
  relatedTools: [
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'Aplica la tabla a tu sueldo.' },
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'ISR de tu aguinaldo.' },
    { title: 'Calculadora de PTU', path: '/mx/calculadora-ptu/', description: 'ISR del reparto de utilidades.' },
  ],
  relatedGuides: [
    { title: 'Valor de la UMA 2026', path: '/mx/uma/', description: 'Exenciones en UMA.' },
    { title: 'Salario mínimo 2026', path: '/mx/salario-minimo/', description: 'Exento de retención de ISR.' },
  ],
  updatedAt: '2026-11-14',
};
