import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Sueldo Neto 2026 México | Calcula',
  metaDescription:
    'Calcula tu sueldo neto mensual y quincenal 2026: ISR con tarifa del SAT, subsidio para el empleo y cuotas del IMSS. Incluye modo neto a bruto.',
  h1: 'Calculadora de Sueldo Neto 2026 (ISR e IMSS)',
  quickAnswer:
    'Tu sueldo neto es el bruto menos el ISR y las cuotas obreras del IMSS. El ISR se calcula con la tarifa mensual 2026 del SAT; si ganas hasta $11,492.66 al mes recibes un subsidio para el empleo de $535.65 que reduce el impuesto. El IMSS descuenta alrededor del 2.4% de tu salario base de cotización.',
  howItWorks: [
    {
      step: 1,
      title: 'ISR con la tarifa mensual',
      description: 'Se ubica tu sueldo en la tarifa del Anexo 8 RMF 2026 y se calcula cuota fija más porcentaje sobre el excedente del límite inferior.',
      formula: 'ISR = cuota fija + (sueldo − límite inferior) × tasa',
      legalArticle: 'Art. 96 LISR',
    },
    {
      step: 2,
      title: 'Subsidio para el empleo',
      description: 'Si tu ingreso mensual no supera $11,492.66, se restan $535.65 del ISR (sin generar saldo a favor).',
      formula: 'ISR neto = máx(0, ISR − 535.65)',
      legalArticle: 'Decreto DOF 31-dic-2025',
    },
    {
      step: 3,
      title: 'Cuotas obreras del IMSS',
      description: 'Se calcula tu salario base de cotización (SBC) con el factor de integración y se aplican las cuotas a cargo del trabajador.',
      formula: '0.25% + 0.375% + 0.625% + 1.125% del SBC, más 0.40% del excedente de 3 UMA',
      legalArticle: 'Arts. 25, 106, 107, 147 y 168 LSS',
    },
    {
      step: 4,
      title: 'Neto mensual y quincenal',
      description: 'Al bruto se le restan ISR e IMSS. La quincena es la mitad del neto mensual.',
      formula: 'Neto = bruto − ISR − IMSS',
    },
  ],
  article: `## Bruto y neto: por qué no cobras lo que dice tu contrato

Cuando aceptas una oferta de trabajo en México, el sueldo que te mencionan casi siempre es bruto. De esa cantidad, tu patrón está obligado a retener el Impuesto sobre la Renta y tus cuotas al Instituto Mexicano del Seguro Social. Lo que llega a tu cuenta es el sueldo neto. Conocer la diferencia te ayuda a negociar, a comparar ofertas y a revisar que tu recibo de nómina esté bien calculado.

## Cómo se calcula el ISR de tu sueldo

El ISR de sueldos y salarios se calcula con la tarifa del artículo 96 de la Ley del ISR. Para 2026 el SAT actualizó las tarifas en el Anexo 8 de la Resolución Miscelánea Fiscal, publicado en el Diario Oficial el 28 de diciembre de 2025. El procedimiento es: ubicas tu ingreso mensual gravable en la tabla, le restas el límite inferior del renglón, multiplicas el excedente por la tasa y le sumas la cuota fija. Por ejemplo, un sueldo de $15,000 cae en el renglón que va de $14,644.65 a $17,533.64, con cuota fija de $1,339.14 y tasa de 17.92%; el ISR es de $1,402.82.

## El subsidio para el empleo en 2026

Desde mayo de 2024 el subsidio para el empleo funciona como una cantidad fija mensual para quienes ganan poco. El decreto publicado el 31 de diciembre de 2025 lo fijó en 15.02% de la UMA mensual, lo que con la UMA vigente desde febrero equivale a $535.65 al mes, para personas cuyo ingreso mensual no exceda de $11,492.66. En enero de 2026, mientras seguía vigente la UMA anterior, se aplicó un porcentaje transitorio de 15.59%. El subsidio se resta del ISR, pero si es mayor que el impuesto no te lo entregan en efectivo: simplemente tu ISR queda en cero.

## Cuotas obreras del IMSS

El IMSS se financia con aportaciones del patrón, del trabajador y del gobierno. Tu parte, llamada cuota obrera, se calcula sobre el salario base de cotización (SBC), que es tu salario diario integrado con un tope de 25 UMA. Las cuotas a tu cargo son: 0.25% por prestaciones en dinero del seguro de enfermedades y maternidad, 0.375% por gastos médicos de pensionados, 0.625% por invalidez y vida, 1.125% por cesantía en edad avanzada y vejez, y 0.40% sobre la parte del SBC que exceda de tres UMA. En total suelen representar entre el 2.4% y el 2.8% del SBC.

Si ganas exactamente el salario mínimo, el patrón debe cubrir tus cuotas obreras (artículo 36 de la Ley del Seguro Social) y además no se te retiene ISR, por lo que tu neto es igual a tu bruto.

## Modo inverso: de neto a bruto

Si te ofrecen un sueldo neto o sabes cuánto necesitas recibir en tu cuenta, usa el modo Neto → Bruto. La calculadora busca el sueldo bruto que, después de ISR e IMSS, deja el neto que indicaste. Por ejemplo, para recibir $20,000 netos al mes se necesita un bruto aproximado de $23,872.41. Esta función es útil para negociar un aumento o comparar una oferta en la que te dan el monto neto.

## Qué no incluye este cálculo

El cálculo considera un mes normal de sueldo. No incluye descuentos voluntarios como caja de ahorro o fondo de ahorro, ni créditos Infonavit o Fonacot, pensión alimenticia o cuotas sindicales, que también pueden aparecer en tu recibo. Tampoco incluye prestaciones exentas como vales de despensa. Las horas extra, los bonos y las comisiones pueden aumentar el ISR de una quincena en particular. Si tu nómina es semanal o catorcenal, el resultado mensual sirve como referencia, pero la retención exacta se hace con las tarifas del periodo correspondiente.

## Consejos para revisar tu recibo

Compara tu recibo con este cálculo. Si el ISR retenido es muy distinto, revisa si te aplicaron el subsidio cuando te correspondía, si hay percepciones extraordinarias en esa quincena o si te están aplicando la tarifa de otro periodo. Recuerda que la declaración anual puede generarte saldo a favor si tuviste deducciones personales o si cambiaste de trabajo durante el año. Guarda tus CFDI de nómina: son la prueba de lo que te retuvieron.

## Zona fronteriza

En los municipios de la Zona Libre de la Frontera Norte el salario mínimo es de $440.87 diarios. Si eliges esa zona, la calculadora aplica ese mínimo para determinar si tu salario está exento de retención y si el patrón cubre tus cuotas obreras. La tarifa de ISR es la misma en todo el país.

## Cómo aprovechar el resultado

Usa el neto mensual para armar tu presupuesto y el neto quincenal para planear pagos fijos como renta, servicios o créditos. Si estás comparando dos ofertas de trabajo, calcula el neto de ambas y suma el valor de las prestaciones superiores a la ley, como más días de aguinaldo, fondo de ahorro, vales o seguro de gastos médicos, que pueden pesar más que una diferencia pequeña en el sueldo bruto.`,
  examples: [
    {
      title: 'Ejemplo 1: sueldo de $10,000 con subsidio',
      scenario: 'Paola gana $10,000 brutos al mes en la zona general. Como su ingreso no supera $11,492.66, recibe subsidio para el empleo.',
      inputs: { 'Sueldo bruto': '$10,000.00', 'Zona': 'General', 'SBC diario': '$349.77' },
      breakdown: [
        { item: 'ISR según tarifa', amount: '−$729.02' },
        { item: 'Subsidio para el empleo', amount: '+$535.65' },
        { item: 'Cuotas IMSS', amount: '−$252.53' },
        { item: 'Neto por quincena', amount: '$4,777.05' },
      ],
      total: '$9,554.10 neto mensual',
    },
    {
      title: 'Ejemplo 2: sueldo de $35,000',
      scenario: 'Miguel gana $35,000 brutos mensuales. Ya no recibe subsidio y su SBC supera tres UMA, por lo que paga la cuota de excedente.',
      inputs: { 'Sueldo bruto': '$35,000.00', 'Zona': 'General', 'SBC diario': '$1,224.20' },
      breakdown: [
        { item: 'ISR según tarifa', amount: '−$5,587.65' },
        { item: 'Cuotas IMSS', amount: '−$989.95' },
        { item: 'Neto por quincena', amount: '$14,211.20' },
      ],
      total: '$28,422.40 neto mensual',
    },
  ],
  faqs: [
    { q: '¿Cuánto me descuentan de ISR si gano $15,000?', a: 'Con la tarifa mensual 2026 el ISR es de $1,402.82. A ese sueldo ya no le corresponde subsidio para el empleo.' },
    { q: '¿Quién recibe el subsidio para el empleo en 2026?', a: 'Quienes tienen ingresos mensuales de hasta $11,492.66. El subsidio es de $535.65 al mes desde febrero de 2026.' },
    { q: '¿Cuánto descuenta el IMSS de mi sueldo?', a: 'Entre 2.4% y 2.8% de tu salario base de cotización, según si superas tres UMA diarias.' },
    { q: '¿Si gano el salario mínimo me descuentan algo?', a: 'No. No se retiene ISR y el patrón paga tus cuotas obreras del IMSS, así que tu neto es igual al bruto.' },
    { q: '¿Cómo calculo mi sueldo quincenal neto?', a: 'Divide el neto mensual entre dos. La calculadora lo muestra directamente.' },
    { q: '¿Qué es el salario base de cotización?', a: 'Es el salario diario integrado que se reporta al IMSS, con un tope de 25 UMA ($2,932.75 diarios en 2026).' },
    { q: '¿Puedo calcular el bruto a partir del neto?', a: 'Sí, con el modo Neto → Bruto. Es útil para negociar sueldos o revisar ofertas netas.' },
    { q: '¿Por qué mi recibo tiene un ISR distinto?', a: 'Puede deberse a horas extra, bonos, días de ausencia o a que tu nómina se calcula con la tarifa semanal o quincenal.' },
    { q: '¿El Infonavit se descuenta de mi sueldo?', a: 'La aportación del 5% al Infonavit la paga el patrón. Solo se te descuenta si tienes un crédito Infonavit activo.' },
  ],
  sources: [
    { label: 'Anexo 8 RMF 2026 — Tarifas ISR (SAT)', url: 'https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf' },
    { label: 'Ley del ISR, art. 96', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'Ley del Seguro Social', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf' },
    { label: 'Diario Oficial de la Federación', url: 'https://www.dof.gob.mx' },
  ],
  relatedTools: [
    { title: 'Tabla ISR 2026 mensual', path: '/mx/tabla-isr/', description: 'Los 11 renglones de la tarifa mensual.' },
    { title: 'Salario Diario Integrado', path: '/mx/calculadora-salario-diario-integrado/', description: 'Factor de integración y SBC.' },
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'ISR de tu aguinaldo 2026.' },
  ],
  relatedGuides: [
    { title: 'Valor de la UMA 2026', path: '/mx/uma/', description: 'La unidad que define topes y exenciones.' },
    { title: 'Salario mínimo 2026', path: '/mx/salario-minimo/', description: 'General y frontera, diario y mensual.' },
  ],
  updatedAt: '2026-11-14',
};
