import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: '¿Cuándo se Paga el Aguinaldo 2026? | Calcula',
  metaDescription:
    'El aguinaldo 2026 se paga antes del 20 de diciembre (art. 87 LFT). Quién tiene derecho, cuánto es, multas por no pagarlo y cómo reclamarlo.',
  h1: '¿Cuándo se Paga el Aguinaldo en 2026?',
  quickAnswer:
    'El aguinaldo debe pagarse antes del 20 de diciembre, así que en 2026 la fecha límite es el sábado 19 de diciembre. Es de al menos 15 días de salario, o la parte proporcional si no trabajaste todo el año. Si no te lo pagan, puedes acudir a la PROFEDET y el patrón puede recibir multas.',
  howItWorks: [
    { step: 1, title: 'Fecha límite', description: 'Antes del 20 de diciembre de cada año.', legalArticle: 'Art. 87 LFT' },
    { step: 2, title: 'Monto mínimo', description: '15 días de salario por año completo o la parte proporcional.', formula: 'días trabajados ÷ 365 × 15 × SD', legalArticle: 'Art. 87 LFT' },
    { step: 3, title: 'Si no te pagan', description: 'Queja ante la PROFEDET o la Inspección del Trabajo; multas de 50 a 5,000 UMA.', legalArticle: 'Art. 1002 LFT' },
  ],
  article: `## La fecha que marca la ley

El artículo 87 de la Ley Federal del Trabajo dice textualmente que las personas trabajadoras tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre. Esto significa que el último día válido para pagarlo es el 19 de diciembre. En 2026 el 19 de diciembre cae en sábado, por lo que muchas empresas lo pagarán el viernes 18 o antes, junto con la primera quincena del mes. No existe una fecha mínima: el patrón puede adelantarlo a noviembre o pagarlo en partes, siempre que el total esté cubierto antes del 20 de diciembre.

## Quién tiene derecho

Todas las personas con una relación de trabajo subordinada regidas por la LFT: de planta, eventuales, por temporada, por obra determinada, de confianza, sindicalizadas o no. También tienen derecho las trabajadoras del hogar. El derecho no depende de que sigas trabajando en diciembre: si dejaste la empresa durante el año, te corresponde la parte proporcional y debe incluirse en tu finiquito.

No tienen derecho al aguinaldo de la LFT quienes prestan servicios profesionales independientes por honorarios, porque no existe subordinación. Si en los hechos trabajas con horario, bajo órdenes y con un pago periódico, podrías tener una relación laboral encubierta y reclamar todas las prestaciones.

## Cuánto te corresponde

El mínimo legal son 15 días de salario. Muchas empresas dan más por contrato individual o colectivo, y en ese caso rige lo pactado. Para quienes no completaron el año, el aguinaldo se calcula de forma proporcional: días trabajados entre 365, por los días de aguinaldo y por el salario diario. Con un sueldo de $12,000 al mes, el aguinaldo de un año completo es de $6,000; si trabajaste seis meses, de alrededor de $3,000.

## Cuánto ISR pagas

El aguinaldo está exento de ISR hasta 30 UMA, que en 2026 equivale a $3,519.30. Si tu aguinaldo no supera esa cifra, no te deben retener impuesto. Si la supera, el excedente se grava. Con un aguinaldo de $6,000, por ejemplo, la parte gravada es de $2,480.70 y el ISR estimado ronda los $366, de modo que recibirías alrededor de $5,634.

## Qué pasa si no te pagan a tiempo

No pagar el aguinaldo en tiempo es una infracción a la ley. El artículo 1002 de la LFT permite imponer multas de 50 a 5,000 veces la UMA, es decir, desde $5,865.50 hasta $586,550 en 2026. La autoridad que vigila el cumplimiento es la Inspección Federal del Trabajo o, según la actividad de la empresa, la inspección local. Además, tú puedes reclamar el pago.

## Cómo reclamar tu aguinaldo

El primer paso es pedirlo por escrito a Recursos Humanos, con fecha y acuse de recibo. Si no hay respuesta, acude a la PROFEDET, que ofrece asesoría gratuita y puede citar al patrón a una conciliación. Desde la reforma laboral de 2019, antes de demandar debes pasar por el Centro de Conciliación correspondiente. El derecho a reclamar el aguinaldo prescribe en un año, contado a partir del día siguiente a la fecha en que debió pagarse; en el caso del aguinaldo de 2026, hasta el 20 de diciembre de 2027.

## Aguinaldo en el sector público

Las personas que trabajan para el gobierno federal se rigen por la Ley Federal de los Trabajadores al Servicio del Estado. Su aguinaldo es de 40 días de salario, que se pagan en dos partes: al menos la mitad antes del 15 de diciembre y el resto a más tardar el 15 de enero, aunque en la práctica suele pagarse completo en diciembre. Los gobiernos estatales y municipales tienen sus propias leyes y fechas.

## Consejos para recibir tu aguinaldo

Revisa que el monto coincida con tu salario y con los días que marca tu contrato, que se haya aplicado la exención de 30 UMA y que el recibo sea un CFDI de nómina. Si notas descuentos que no entiendes, como faltas o anticipos, pide la explicación por escrito. Y antes de gastarlo, considera usar una parte para liquidar deudas caras o para el fondo de emergencia de inicio de año.

## Aguinaldo y trabajadoras del hogar

Desde la reforma de 2019, las trabajadoras y trabajadores del hogar tienen derecho expreso al aguinaldo de 15 días, a vacaciones con prima vacacional y a la seguridad social. Si empleas a una persona en tu hogar, también estás obligado a pagarle el aguinaldo antes del 20 de diciembre, en proporción a los días trabajados si no completó el año.

## Calendario práctico para diciembre de 2026

Si tu empresa paga por quincena, lo más probable es que recibas el aguinaldo junto con la quincena del 15 de diciembre o en un pago especial entre el 1 y el 18 de diciembre. Si el 18 de diciembre no ves el depósito, pregunta de inmediato en Recursos Humanos: a partir del 20 de diciembre el pago ya es extemporáneo y puedes iniciar tu reclamación.`,
  examples: [
    {
      title: 'Aguinaldo completo',
      scenario: 'Sueldo de $12,000 mensuales, todo 2026 trabajado.',
      inputs: { 'Salario diario': '$400.00', 'Días': '365' },
      breakdown: [
        { item: 'Aguinaldo bruto', amount: '$6,000.00' },
        { item: 'ISR estimado', amount: '−$366.29' },
      ],
      total: '$5,633.71 neto',
    },
    {
      title: 'Aguinaldo proporcional',
      scenario: 'Sueldo de $9,000 mensuales, ingreso el 1 de mayo de 2026.',
      inputs: { 'Salario diario': '$300.00', 'Días': '245' },
      breakdown: [
        { item: 'Aguinaldo proporcional', amount: '$3,020.55' },
        { item: 'ISR (exento)', amount: '$0.00' },
      ],
      total: '$3,020.55 neto',
    },
  ],
  faqs: [
    { q: '¿Cuál es la fecha límite para pagar el aguinaldo 2026?', a: 'Antes del 20 de diciembre; el último día válido es el 19 de diciembre de 2026.' },
    { q: '¿Me pueden pagar el aguinaldo en partes?', a: 'Sí, siempre que el total quede pagado antes del 20 de diciembre.' },
    { q: '¿Cuánto es la multa por no pagar el aguinaldo?', a: 'De 50 a 5,000 UMA, es decir, de $5,865.50 a $586,550 en 2026.' },
    { q: '¿Tengo derecho a aguinaldo si entré en octubre?', a: 'Sí, a la parte proporcional de los días trabajados.' },
    { q: '¿Me toca aguinaldo si me despidieron en julio?', a: 'Sí, la parte proporcional, que debe pagarse en tu finiquito.' },
    { q: '¿Cuánto tiempo tengo para reclamar mi aguinaldo?', a: 'Un año desde la fecha en que debió pagarse.' },
    { q: '¿A dónde acudo si no me pagan?', a: 'A la PROFEDET, a la Inspección del Trabajo o al Centro de Conciliación Laboral.' },
    { q: '¿Cuánto aguinaldo reciben los trabajadores del gobierno federal?', a: '40 días de salario, según la Ley Federal de los Trabajadores al Servicio del Estado.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 87 y 1002', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'PROFEDET', url: 'https://www.gob.mx/profedet' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
  ],
  relatedTools: [
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'Calcula tu aguinaldo y su ISR.' },
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'Tu neto mensual y quincenal.' },
  ],
  relatedGuides: [
    { title: 'Valor de la UMA 2026', path: '/mx/uma/', description: 'Exención de 30 UMA.' },
    { title: 'Diferencia entre finiquito y liquidación', path: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/', description: 'El aguinaldo en tu finiquito.' },
  ],
  updatedAt: '2026-11-14',
};
