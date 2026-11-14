import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Finiquito por Renuncia Voluntaria 2026 | Calcula',
  metaDescription:
    'Calcula tu finiquito por renuncia voluntaria en México: días pendientes, aguinaldo, vacaciones, prima vacacional y prima de antigüedad con 15 años.',
  h1: 'Calculadora de Finiquito por Renuncia Voluntaria 2026',
  quickAnswer:
    'Si renuncias por tu cuenta, el patrón debe pagarte el finiquito: días trabajados pendientes, aguinaldo proporcional, vacaciones no disfrutadas y prima vacacional. No hay indemnización de tres meses. La prima de antigüedad de 12 días por año solo se suma si cumpliste al menos 15 años de servicio en la empresa.',
  howItWorks: [
    {
      step: 1,
      title: 'Captura tu salario y tus fechas',
      description:
        'El motivo ya está fijado en renuncia voluntaria. Indica tu sueldo mensual o diario, tu fecha de ingreso y el último día que trabajarás.',
      formula: 'SD = sueldo mensual ÷ 30',
      legalArticle: 'Art. 89 LFT',
    },
    {
      step: 2,
      title: 'Aguinaldo y vacaciones proporcionales',
      description:
        'Se calcula el aguinaldo por los días trabajados en el año y las vacaciones del año de servicio en curso, menos los días que ya tomaste.',
      formula: 'Vacaciones = días del año de servicio × días transcurridos ÷ 365 − días tomados',
      legalArticle: 'Arts. 76, 79 y 87 LFT',
    },
    {
      step: 3,
      title: 'Prima vacacional',
      description: 'Se paga al menos el 25% sobre el salario de las vacaciones pendientes.',
      formula: 'Prima = vacaciones × 25%',
      legalArticle: 'Art. 80 LFT',
    },
    {
      step: 4,
      title: 'Prima de antigüedad solo con 15 años',
      description:
        'Si tu antigüedad es de 15 años o más, se agregan 12 días por año con el salario topado a dos salarios mínimos.',
      formula: '12 × años × mín(SD, 2 × salario mínimo)',
      legalArticle: 'Art. 162 fr. III LFT',
    },
  ],
  article: `## Qué te toca cuando renuncias

Renunciar es un derecho: nadie te puede obligar a seguir trabajando. Pero renunciar también tiene consecuencias económicas, porque al ser una decisión tuya la ley no te concede la indemnización constitucional de tres meses que existe para los despidos injustificados. Lo que sí conservas íntegro es el finiquito, es decir, todo lo que ya ganaste con tu trabajo y que todavía no te han pagado.

En la práctica, el finiquito por renuncia voluntaria se compone de cuatro conceptos: los días trabajados que te deben, la parte proporcional del aguinaldo, las vacaciones que generaste y no disfrutaste y la prima vacacional que corresponde a esas vacaciones. Si además tienes 15 años o más en la empresa, se suma la prima de antigüedad.

## Cómo presentar tu renuncia sin perder dinero

La renuncia debe ser por escrito, con fecha y firma, y conviene entregarla con copia para que te firmen de recibido. No es obligatorio dar un aviso previo de 15 o 30 días: esa costumbre no está en la Ley Federal del Trabajo, aunque puede estar pactada en tu contrato y facilita una salida ordenada. Lo que sí debes cuidar es que la fecha de la renuncia coincida con tu último día real de trabajo, porque esa es la fecha de corte de todos los cálculos.

Un error frecuente es firmar una renuncia en blanco al ingresar a la empresa, o firmar una renuncia cuando en realidad te están corriendo. Si el patrón decidió terminar la relación, eso es un despido y te corresponde la liquidación. Nunca firmes una renuncia que no escribiste por voluntad propia.

## Aguinaldo proporcional

El aguinaldo mínimo es de 15 días de salario por año completo. Si te vas antes de diciembre, te corresponde la parte proporcional a los días trabajados desde el 1 de enero (o desde tu ingreso, si entraste ese año). La fórmula es sencilla: días trabajados entre 365, multiplicado por los días de aguinaldo y por tu salario diario. Si tu contrato te da 20 o 30 días, captúralos para que el cálculo use tu prestación real.

## Vacaciones y prima vacacional

Desde 2023 rige la reforma conocida como Vacaciones Dignas: 12 días el primer año, 14 el segundo, 16 el tercero, 18 el cuarto y 20 el quinto; del sexto al décimo año son 22 días y a partir de ahí se suman dos días por cada cinco años. Cuando renuncias a mitad de un año de servicio, la ley (artículo 79) te reconoce la parte proporcional de las vacaciones de ese año. A eso se le restan los días que ya tomaste y se suman las vacaciones que te hayan quedado pendientes de años anteriores. Sobre el monto resultante se paga una prima vacacional mínima del 25%.

## La prima de antigüedad y los 15 años

La prima de antigüedad equivale a 12 días de salario por cada año trabajado. En una renuncia solo es obligatoria si tienes 15 años de servicio o más. El salario para calcularla tiene tope: no puede ser mayor al doble del salario mínimo, es decir $630.08 diarios en 2026 para la zona general y $881.74 para la Zona Libre de la Frontera Norte. Si ganas menos que el tope, se usa tu salario real. Cuando cumples el requisito, este concepto suele ser el más grande del finiquito, como muestra el segundo ejemplo de esta página.

## Impuestos sobre tu finiquito

El aguinaldo está exento de ISR hasta 30 UMA ($3,519.30 con la UMA de 2026) y la prima vacacional hasta 15 UMA ($1,759.65). La prima de antigüedad, como pago por separación, está exenta hasta 90 UMA por cada año de servicio, lo que en muchos casos cubre todo el monto. Los días trabajados y las vacaciones sí son gravables. La calculadora estima el ISR sumando la parte gravada a tu sueldo mensual con la tarifa 2026; tu patrón puede usar otro procedimiento permitido, así que la retención real puede variar.

## Qué hacer si no te pagan

Si al salir no te entregan tu finiquito o te ofrecen menos de lo que corresponde, no firmes de conformidad. Solicita por escrito el desglose y compáralo con este cálculo. Puedes acudir gratis a la PROFEDET o al Centro Federal de Conciliación y Registro Laboral (o al centro de conciliación local, según la actividad de tu empresa). Tienes un año para reclamar las prestaciones del finiquito, contado desde que eran exigibles.

## Antes de entregar tu carta

Revisa tus recibos de nómina, confirma tu fecha de ingreso registrada ante el IMSS y anota cuántos días de vacaciones has tomado. Con esos datos el cálculo de esta página será muy cercano al que haga tu empresa, y tendrás argumentos claros si hay diferencias. Planear tu salida también te permite elegir la fecha: renunciar justo después de tu aniversario, por ejemplo, te asegura los días de vacaciones completos de ese año, y salir en diciembre después del pago del aguinaldo evita discusiones sobre la parte proporcional.`,
  examples: [
    {
      title: 'Ejemplo 1: renuncia con año y medio de antigüedad',
      scenario:
        'Mariana gana $9,500 al mes, entró el 15 de enero de 2025 y renuncia el 31 de julio de 2026. Le deben una quincena y ya tomó 6 días de vacaciones de su segundo año.',
      inputs: {
        'Salario diario': '$316.67',
        'Antigüedad': '1.54 años',
        'Vacaciones del año en curso': '14 días',
        'Días tomados': '6',
      },
      breakdown: [
        { item: 'Días pendientes (15)', amount: '$4,750.05' },
        { item: 'Aguinaldo proporcional (212 días)', amount: '$2,758.93' },
        { item: 'Vacaciones (1.59 días)', amount: '$503.51' },
        { item: 'Prima vacacional 25%', amount: '$125.88' },
        { item: 'ISR estimado', amount: '−$684.04' },
      ],
      total: '$7,454.33 neto',
    },
    {
      title: 'Ejemplo 2: renuncia con 16 años (sí hay prima de antigüedad)',
      scenario:
        'Ricardo gana $18,000 al mes, ingresó el 1 de marzo de 2010 y renuncia el 31 de octubre de 2026. Ya cobró su última quincena y tomó 10 días de vacaciones.',
      inputs: {
        'Salario diario': '$600.00',
        'Antigüedad': '16.68 años',
        'Tope prima de antigüedad': '$630.08',
        'Días tomados': '10',
      },
      breakdown: [
        { item: 'Aguinaldo proporcional (304 días)', amount: '$7,495.89' },
        { item: 'Vacaciones (7.45 días)', amount: '$4,470.00' },
        { item: 'Prima vacacional', amount: '$1,117.50' },
        { item: 'Prima de antigüedad (12 × 16.68 × $600)', amount: '$120,111.78' },
        { item: 'ISR estimado', amount: '−$1,804.19' },
      ],
      total: '$131,390.98 neto',
    },
  ],
  faqs: [
    {
      q: '¿Si renuncio me deben dar liquidación?',
      a: 'No. La liquidación (tres meses de salario) solo procede en despido injustificado o cuando terminas la relación por culpa del patrón. Al renunciar recibes el finiquito.',
    },
    {
      q: '¿Tengo que avisar con 15 días de anticipación?',
      a: 'La LFT no lo exige. Puede estar en tu contrato o reglamento interior, y es buena práctica, pero no condiciona el pago de tu finiquito.',
    },
    {
      q: '¿Me pagan prima de antigüedad si renuncio con 10 años?',
      a: 'No. En renuncia voluntaria la prima de antigüedad solo es obligatoria a partir de 15 años de servicio (art. 162 fr. III LFT). Algunas empresas la pagan antes por política interna.',
    },
    {
      q: '¿Me deben pagar el aguinaldo si renuncio en octubre?',
      a: 'Sí, la parte proporcional a los días que trabajaste en el año. Por ejemplo, con 304 días te corresponde 304/365 del aguinaldo anual.',
    },
    {
      q: '¿Qué pasa con las vacaciones que no tomé?',
      a: 'Se pagan en el finiquito con su prima vacacional, incluyendo las del año en curso en forma proporcional y las pendientes de años anteriores.',
    },
    {
      q: '¿Cuándo me deben pagar el finiquito si renuncio?',
      a: 'Lo usual es al momento de la separación o en la siguiente fecha de pago. Si se retrasa, pide una fecha por escrito y, si no cumplen, acude a la PROFEDET.',
    },
    {
      q: '¿Pago ISR por el finiquito de renuncia?',
      a: 'Sí sobre la parte gravada: días trabajados, vacaciones y lo que exceda de 30 UMA de aguinaldo y 15 UMA de prima vacacional. La prima de antigüedad está exenta hasta 90 UMA por año.',
    },
    {
      q: '¿Pierdo mi ahorro para el retiro si renuncio?',
      a: 'No. Tu cuenta en la Afore y tu subcuenta de vivienda en el Infonavit son tuyas y siguen contigo en tu siguiente empleo.',
    },
    {
      q: '¿Puedo retractarme después de firmar la renuncia?',
      a: 'Solo si el patrón acepta. Una vez entregada y aceptada, la renuncia surte efectos, por eso conviene calcular tu finiquito antes de firmarla.',
    },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 76-87 y 162', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del ISR, art. 93', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
    { label: 'PROFEDET', url: 'https://www.gob.mx/profedet' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito y Liquidación', path: '/mx/calculadora-finiquito/', description: 'Todos los motivos de separación en una sola herramienta.' },
    { title: 'Calculadora de Vacaciones', path: '/mx/calculadora-vacaciones/', description: 'Días por antigüedad y prima vacacional.' },
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'Aguinaldo proporcional y su ISR.' },
  ],
  relatedGuides: [
    { title: '¿Cuánto me toca si renuncio?', path: '/mx/guias/cuanto-me-toca-si-renuncio/', description: 'Guía práctica de la renuncia voluntaria.' },
    { title: '¿Qué es la prima de antigüedad?', path: '/mx/guias/que-es-la-prima-de-antiguedad/', description: 'Requisitos, tope salarial y ejemplos.' },
  ],
  updatedAt: '2026-11-14',
};
