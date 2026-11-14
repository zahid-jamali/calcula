import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: '¿Cuánto me Toca si Renuncio? México 2026 | Calcula',
  metaDescription:
    'Lo que te corresponde al renunciar en México: días pendientes, aguinaldo, vacaciones, prima vacacional, PTU y prima de antigüedad con 15 años.',
  h1: '¿Cuánto me Toca si Renuncio a mi Trabajo?',
  quickAnswer:
    'Si renuncias te corresponde el finiquito: los días trabajados sin pagar, el aguinaldo proporcional, las vacaciones no disfrutadas con su prima vacacional y cualquier prestación pendiente, como la PTU del año anterior. Si tienes 15 años o más, también la prima de antigüedad. No te corresponde la indemnización de tres meses.',
  howItWorks: [
    { step: 1, title: 'Días pendientes', description: 'Salario de los días trabajados que no te han pagado.', legalArticle: 'Art. 82 LFT' },
    { step: 2, title: 'Aguinaldo, vacaciones y prima', description: 'Partes proporcionales del año.', legalArticle: 'Arts. 76-87 LFT' },
    { step: 3, title: 'Prestaciones pendientes', description: 'PTU, bonos o comisiones ya generados.', legalArticle: 'Art. 117 LFT' },
    { step: 4, title: 'Prima de antigüedad con 15 años', description: '12 días por año con tope de 2 salarios mínimos.', legalArticle: 'Art. 162 LFT' },
  ],
  article: `## Renunciar no significa perder lo que ganaste

Cuando decides dejar tu empleo, la ley protege todo lo que ya generaste con tu trabajo. Puedes irte por una mejor oferta, por cambio de ciudad o simplemente porque ya no quieres seguir, y tu patrón está obligado a pagarte el finiquito. Lo que no recibirás es la indemnización por despido, porque la decisión de terminar fue tuya. Saber exactamente cuánto te toca te ayuda a planear tu salida y a revisar que el pago sea correcto.

## Concepto 1: días trabajados pendientes

Si renuncias a mitad de quincena, te deben pagar los días que trabajaste desde tu último pago. Se calculan multiplicando los días por tu salario diario, que es tu sueldo mensual entre 30. Si tu último día es el 10 del mes y cobras por quincena, te deben 10 días.

## Concepto 2: aguinaldo proporcional

Te corresponde la parte del aguinaldo por los días trabajados del 1 de enero a tu salida. Con 15 días de aguinaldo y un salario diario de $400, si renuncias el 15 de septiembre (258 días) recibes 258 ÷ 365 × 15 × $400 = $4,241.10. Si tu empresa da más días, se usan esos días.

## Concepto 3: vacaciones y prima vacacional

Cada año de servicio te da derecho a vacaciones según la tabla de Vacaciones Dignas. Si renuncias antes de tu aniversario, te pagan la parte proporcional del año en curso, menos los días que ya tomaste. Además te pagan las vacaciones de años anteriores que no hayas disfrutado. Sobre todo eso se suma una prima vacacional de al menos 25%.

## Concepto 4: PTU y otras prestaciones

Si trabajaste en el año anterior y la empresa tuvo utilidades, tienes derecho a tu PTU aunque ya no estés en la empresa cuando se reparta, en mayo o junio. También te deben pagar bonos, comisiones o incentivos que ya hayas ganado conforme a las reglas de tu contrato. Pide que se incluyan por escrito.

## Concepto 5: prima de antigüedad, solo con 15 años

Si tienes 15 años o más de servicio, te corresponde la prima de antigüedad: 12 días de salario por cada año trabajado, con el salario topado a dos salarios mínimos ($630.08 diarios en 2026). Con menos de 15 años no es obligatoria, aunque algunas empresas la pagan por política interna. Si estás a pocos meses de cumplir 15 años, considera esperar: la diferencia puede ser de decenas de miles de pesos.

## Lo que no te toca al renunciar

No recibes la indemnización constitucional de tres meses ni los 20 días por año, que son exclusivos del despido injustificado o de la rescisión por culpa del patrón. Tampoco tienes derecho al retiro por desempleo de la Afore inmediatamente, aunque podrás solicitarlo si sigues sin empleo 46 días después de tu salida, siempre que cumplas los demás requisitos.

## Cuánto ISR pagarás

Los días trabajados y las vacaciones se gravan completos. El aguinaldo está exento hasta 30 UMA ($3,519.30) y la prima vacacional hasta 15 UMA ($1,759.65). La prima de antigüedad, si te toca, está exenta hasta 90 UMA por año de servicio. Por eso, en un finiquito por renuncia el ISR suele ser moderado.

## Cómo renunciar correctamente

Redacta una carta de renuncia con tu nombre, puesto, fecha de ingreso y fecha de salida, fírmala y entrégala con copia para que te firmen de recibido. Pide en la misma carta que te entreguen tu finiquito y tus constancias. No firmes el recibo de finiquito si los montos no coinciden con tu cálculo; pide primero la corrección.

## Si la renuncia no es voluntaria

Si te están presionando para renunciar, o te piden firmar una renuncia porque la empresa quiere despedirte, no lo hagas sin asesoría. Firmar una renuncia te hace perder la liquidación. Acude a la PROFEDET, que te asesora de forma gratuita, y recuerda que tienes dos meses para reclamar un despido injustificado.

## Cuándo te deben pagar

El finiquito debe pagarse al terminar la relación o en tu siguiente fecha de pago. Si se retrasa, solicita una fecha por escrito. Si no cumplen, puedes reclamarlo ante el Centro de Conciliación Laboral: tienes un año para hacerlo.

## Elegir bien la fecha de salida

La fecha de tu renuncia cambia el monto. Si renuncias justo después de tu aniversario, ya ganaste los días de vacaciones completos de ese año; si renuncias a finales de diciembre después de cobrar el aguinaldo, no habrá discusión sobre la parte proporcional; y si estás cerca de cumplir 15 años, esperar te da derecho a la prima de antigüedad. Planear la fecha con nuestra calculadora te permite comparar escenarios antes de entregar tu carta.

## Documentos que debes pedir al salir

Además del pago, solicita tu constancia de percepciones y retenciones, la baja ante el IMSS, tu último CFDI de nómina y, si la necesitas, una carta de recomendación o constancia laboral. Con la baja del IMSS podrás tramitar el retiro por desempleo de tu Afore si lo necesitas y demostrar tu antigüedad en futuros trámites.`,
  examples: [
    {
      title: 'Renuncia con 4.5 años',
      scenario: 'Sueldo de $12,000; del 1 de abril de 2022 al 15 de septiembre de 2026; 15 días pendientes y 4 días de vacaciones tomados.',
      inputs: { 'Salario diario': '$400.00', 'Antigüedad': '4.46 años' },
      breakdown: [
        { item: 'Días pendientes', amount: '$6,000.00' },
        { item: 'Aguinaldo proporcional', amount: '$4,241.10' },
        { item: 'Vacaciones + prima', amount: '$2,605.00' },
        { item: 'ISR estimado', amount: '−$1,609.15' },
      ],
      total: '$11,236.95 neto',
    },
    {
      title: 'Renuncia con 16.7 años',
      scenario: 'Sueldo de $18,000; del 1 de marzo de 2010 al 31 de octubre de 2026.',
      inputs: { 'Salario diario': '$600.00', 'Antigüedad': '16.68 años' },
      breakdown: [
        { item: 'Finiquito ordinario', amount: '$13,083.39' },
        { item: 'Prima de antigüedad', amount: '$120,111.78' },
        { item: 'ISR estimado', amount: '−$1,804.19' },
      ],
      total: '$131,390.98 neto',
    },
  ],
  faqs: [
    { q: '¿Si renuncio me pagan liquidación?', a: 'No. Recibes finiquito; la liquidación es para despidos injustificados.' },
    { q: '¿Me pagan aguinaldo si renuncio antes de diciembre?', a: 'Sí, la parte proporcional a los días trabajados en el año.' },
    { q: '¿Me pagan las vacaciones que no tomé?', a: 'Sí, las del año en curso de forma proporcional y las pendientes de años anteriores, con prima vacacional.' },
    { q: '¿Cuántos años necesito para la prima de antigüedad?', a: '15 años de servicio en la misma empresa.' },
    { q: '¿Me toca PTU si ya renuncié?', a: 'Sí, la del año en que trabajaste, en la fecha en que se reparta.' },
    { q: '¿Tengo que dar aviso de 15 días?', a: 'La LFT no lo exige, aunque puede pactarse en tu contrato.' },
    { q: '¿Puedo retirar dinero de mi Afore?', a: 'Puedes solicitar el retiro por desempleo a partir del día 46 sin empleo, si cumples requisitos.' },
    { q: '¿Cuánto tiempo tengo para reclamar mi finiquito?', a: 'Un año desde que las prestaciones eran exigibles.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del ISR, art. 93', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'PROFEDET', url: 'https://www.gob.mx/profedet' },
  ],
  relatedTools: [
    { title: 'Finiquito por Renuncia Voluntaria', path: '/mx/calculadora-finiquito/renuncia-voluntaria/', description: 'Calcula tu finiquito.' },
    { title: 'Calculadora de PTU', path: '/mx/calculadora-ptu/', description: 'Tu reparto de utilidades.' },
  ],
  relatedGuides: [
    { title: '¿Qué es la prima de antigüedad?', path: '/mx/guias/que-es-la-prima-de-antiguedad/', description: 'Requisito de 15 años.' },
    { title: 'Diferencia entre finiquito y liquidación', path: '/mx/guias/diferencia-entre-finiquito-y-liquidacion/', description: 'Qué incluye cada uno.' },
  ],
  updatedAt: '2026-11-14',
};
