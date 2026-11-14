import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de PTU 2026 (Reparto de Utilidades) | Calcula',
  metaDescription:
    'Calcula tu PTU: 50% por días trabajados y 50% por salario, tope de 3 meses o promedio de 3 años, exención de 15 UMA e ISR. Se paga en mayo o junio.',
  h1: 'Calculadora de PTU 2026: Reparto de Utilidades',
  quickAnswer:
    'La PTU es el 10% de las utilidades de la empresa repartido entre su personal: mitad según los días trabajados y mitad según el salario. Tu pago tiene un tope de tres meses de salario o el promedio de los últimos tres años, lo que más te convenga. Las empresas la pagan a más tardar el 30 de mayo.',
  howItWorks: [
    {
      step: 1,
      title: 'Divide la PTU en dos partes iguales',
      description: 'La cantidad total a repartir se separa en dos mitades.',
      formula: 'Mitad = PTU total ÷ 2',
      legalArticle: 'Art. 123 LFT',
    },
    {
      step: 2,
      title: 'Primera mitad: por días trabajados',
      description: 'Se reparte en proporción a los días que cada trabajador laboró en el año.',
      formula: 'Por días = mitad × tus días ÷ días de todos',
      legalArticle: 'Art. 123 LFT',
    },
    {
      step: 3,
      title: 'Segunda mitad: por salario',
      description: 'Se reparte en proporción al salario devengado (cuota diaria, sin horas extra ni bonos).',
      formula: 'Por salario = mitad × tu salario anual ÷ salarios de todos',
      legalArticle: 'Arts. 123 y 124 LFT',
    },
    {
      step: 4,
      title: 'Aplica el tope del artículo 127',
      description: 'El monto no puede exceder tres meses de tu salario o el promedio de PTU de los últimos tres años, el que sea mayor.',
      formula: 'PTU = mín(reparto, máx(3 meses, promedio 3 años))',
      legalArticle: 'Art. 127 fr. VIII LFT',
    },
    {
      step: 5,
      title: 'Exención e ISR',
      description: 'La PTU está exenta hasta 15 UMA ($1,759.65 en 2026); el resto se grava.',
      formula: 'Gravado = PTU − 15 UMA',
      legalArticle: 'Art. 93 fr. XIV LISR',
    },
  ],
  article: `## Qué es la PTU y quién la recibe

La participación de los trabajadores en las utilidades de las empresas, conocida como PTU o reparto de utilidades, es un derecho constitucional. El artículo 123 de la Constitución y los artículos 117 a 131 de la Ley Federal del Trabajo establecen que las personas trabajadoras participan del 10% de la utilidad fiscal de la empresa, ajustada conforme a la ley. La reparten las empresas con utilidades, salvo algunas excepciones como las de nueva creación durante su primer año o las que tienen un capital menor al que fija la Secretaría del Trabajo.

Tienen derecho todas las personas trabajadoras que hayan laborado al menos 60 días en el año, incluidas las eventuales. No tienen derecho los directores, administradores y gerentes generales. Las personas de confianza sí participan, pero su salario para el reparto se limita al del trabajador sindicalizado o de base de mayor salario, aumentado en 20%.

## Cómo se reparte la PTU

La cantidad total se divide en dos partes iguales. La primera se reparte entre todas las personas trabajadoras en proporción a los días que trabajaron en el año, sin importar su salario. La segunda se reparte en proporción a los salarios devengados. Para este cálculo se considera la cuota diaria en efectivo, sin incluir gratificaciones, horas extra ni otras percepciones extraordinarias. Las incapacidades por maternidad y por riesgo de trabajo cuentan como días trabajados.

La empresa debe entregar a la comisión mixta una copia de su declaración anual y la comisión elabora un proyecto de reparto que debe exhibirse en un lugar visible del centro de trabajo. En ese proyecto aparecen la PTU total, la suma de días y la suma de salarios de todo el personal, que son los datos que necesitas para usar esta calculadora.

## El tope desde la reforma de 2021

La reforma en materia de subcontratación de 2021 agregó un tope al monto que recibe cada trabajador. La fracción VIII del artículo 127 dice que el monto de la PTU tendrá como límite máximo tres meses del salario del trabajador o el promedio de la participación recibida en los últimos tres años, aplicándose lo que resulte más favorable. Si el reparto te da más que el tope, se te paga el tope. La calculadora aplica automáticamente esta regla y te indica cuál de los dos límites resultó aplicable.

## Cuándo se paga la PTU

El artículo 122 establece que el reparto se hace dentro de los 60 días siguientes a la fecha en que la empresa debe pagar su impuesto anual. Para las personas morales, que presentan su declaración a más tardar el 31 de marzo, la fecha límite es el 30 de mayo. Para los patrones personas físicas, que declaran en abril, la fecha límite es el 29 de junio. Si tu empresa no paga a tiempo, puedes acudir a la Inspección del Trabajo o a la PROFEDET.

## ISR sobre la PTU

La PTU está exenta de ISR hasta 15 veces la UMA. Con la UMA de $117.31 de 2026, la exención es de $1,759.65. El excedente es gravable y tu patrón retiene ISR. La calculadora estima el impuesto sumando la parte gravada a tu sueldo mensual con la tarifa 2026; tu empresa puede usar el procedimiento del artículo 174 del Reglamento de la LISR, lo que puede dar una retención distinta.

## Si ya no trabajas en la empresa

Si trabajaste al menos 60 días en el año y después dejaste la empresa, sigues teniendo derecho a la PTU de ese ejercicio. La empresa debe pagártela en la misma fecha que al resto del personal. Si no te buscan, acude a reclamarla: el derecho prescribe en un año a partir de la fecha en que era exigible.

## Cómo usar esta calculadora

Captura la PTU total a repartir, tus días trabajados, tu salario devengado en el año (cuota diaria por días), los totales de días y salarios de la empresa, tu sueldo mensual y, si lo conoces, el promedio de PTU que recibiste en los tres años anteriores. Obtendrás la parte por días, la parte por salario, el tope aplicable, la exención, el ISR estimado y el neto.

## Qué hacer si no estás de acuerdo con el reparto

Las personas trabajadoras tienen 15 días a partir de que se exhibe el proyecto de reparto para presentar objeciones ante la comisión mixta. Si consideras que la utilidad declarada por la empresa es incorrecta, el sindicato o la mayoría de los trabajadores pueden presentar una objeción ante el SAT dentro de los 30 días siguientes a la entrega de la declaración anual. Revisar los totales de días y salarios del proyecto es la forma más sencilla de detectar errores en tu propio reparto. Guarda también tu recibo de pago de PTU, que debe ser un CFDI de nómina.

## Resumen rápido

La PTU se reparte mitad por días y mitad por salario, tiene un tope de tres meses de salario o del promedio de tres años, está exenta hasta 15 UMA y se paga a más tardar el 30 de mayo o el 29 de junio, según el tipo de patrón.`,
  examples: [
    {
      title: 'Ejemplo 1: reparto sin tope',
      scenario: 'Una empresa reparte $500,000 entre 50 personas. Sofía trabajó 365 días, devengó $146,000 en el año y gana $12,000 al mes. Los totales son 18,250 días y $9,500,000 en salarios.',
      inputs: { 'PTU total': '$500,000.00', 'Tus días': '365', 'Tu salario anual': '$146,000.00', 'Sueldo mensual': '$12,000.00' },
      breakdown: [
        { item: 'Parte por días', amount: '$5,000.00' },
        { item: 'Parte por salario', amount: '$3,842.11' },
        { item: 'Tope (3 meses)', amount: '$36,000.00' },
        { item: 'ISR estimado', amount: '−$1,241.05' },
      ],
      total: '$7,601.06 neto',
    },
    {
      title: 'Ejemplo 2: se aplica el tope de tres meses',
      scenario: 'Una empresa pequeña reparte $2,000,000 entre 20 personas. Iván gana $8,000 al mes; el reparto le daría $90,000, pero su tope es mayor entre 3 meses ($24,000) y su promedio de 3 años ($15,000).',
      inputs: { 'PTU total': '$2,000,000.00', 'Tus días': '365 de 7,300', 'Tu salario anual': '$96,000 de $2,400,000', 'Promedio 3 años': '$15,000.00' },
      breakdown: [
        { item: 'Reparto calculado', amount: '$90,000.00' },
        { item: 'Tope aplicado (3 meses)', amount: '$24,000.00' },
        { item: 'ISR estimado', amount: '−$4,059.57' },
      ],
      total: '$19,940.43 neto',
    },
  ],
  faqs: [
    { q: '¿Cuándo se paga la PTU en 2026?', a: 'A más tardar el 30 de mayo si la empresa es persona moral y el 29 de junio si el patrón es persona física.' },
    { q: '¿Cuál es el tope de la PTU?', a: 'Tres meses de tu salario o el promedio de lo que recibiste en los últimos tres años, lo que te convenga más (art. 127 fr. VIII LFT).' },
    { q: '¿Cuántos días necesito trabajar para recibir PTU?', a: 'Al menos 60 días en el año para trabajadores eventuales. Los de planta participan sin importar los días.' },
    { q: '¿Me toca PTU si ya renuncié?', a: 'Sí, si trabajaste en el ejercicio. Te la deben pagar en la misma fecha que al personal activo.' },
    { q: '¿Cuánto de la PTU está libre de ISR?', a: '15 UMA, es decir $1,759.65 con la UMA de 2026.' },
    { q: '¿Qué salario se usa para repartir la PTU?', a: 'La cuota diaria en efectivo por los días trabajados, sin horas extra, bonos ni gratificaciones.' },
    { q: '¿Los gerentes reciben PTU?', a: 'Los directores, administradores y gerentes generales no. El personal de confianza sí, con salario topado.' },
    { q: '¿Qué hago si mi empresa no reparte utilidades?', a: 'Pide el proyecto de reparto y la declaración anual. Si no te pagan, acude a la Inspección del Trabajo o a la PROFEDET.' },
    { q: '¿Las incapacidades cuentan como días trabajados?', a: 'Las de maternidad y riesgo de trabajo sí cuentan para el reparto por días.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 117-131', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Ley del ISR, art. 93 fr. XIV', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
    { label: 'STPS — Reparto de utilidades', url: 'https://www.gob.mx/stps' },
    { label: 'UMA 2026 (INEGI)', url: 'https://www.inegi.org.mx/temas/uma/' },
  ],
  relatedTools: [
    { title: 'Calculadora de Aguinaldo', path: '/mx/calculadora-aguinaldo/', description: 'Tu otra gran prestación anual.' },
    { title: 'Calculadora de Sueldo Neto', path: '/mx/calculadora-sueldo-neto/', description: 'ISR mensual e IMSS.' },
    { title: 'Tabla ISR 2026', path: '/mx/tabla-isr/', description: 'La tarifa con la que se grava la PTU.' },
  ],
  relatedGuides: [
    { title: 'Valor de la UMA 2026', path: '/mx/uma/', description: 'Exenciones medidas en UMA.' },
    { title: '¿Cuánto me toca si renuncio?', path: '/mx/guias/cuanto-me-toca-si-renuncio/', description: 'Incluida la PTU pendiente.' },
  ],
  updatedAt: '2026-11-14',
};
