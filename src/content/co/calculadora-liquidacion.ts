import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Liquidación Laboral 2026 | Calcula',
  metaDescription:
    'Calcule su liquidación laboral 2026 en Colombia: cesantías, intereses, prima, vacaciones, salario pendiente e indemnización del art. 64 CST. Gratis.',
  h1: 'Calculadora de Liquidación Laboral 2026 en Colombia',
  quickAnswer:
    'La liquidación laboral en Colombia suma el salario pendiente, las cesantías, los intereses sobre cesantías del 12% anual, la prima de servicios y las vacaciones no disfrutadas. Si lo despiden sin justa causa, se agrega la indemnización del artículo 64 del CST. Con salarios de hasta dos SMMLV, el auxilio de transporte entra en cesantías y prima.',
  howItWorks: [
    {
      step: 1,
      title: 'Base de liquidación',
      description:
        'Salario básico más el promedio de pagos variables. Si gana hasta 2 SMMLV ($3.501.810), se suma el auxilio de transporte de $249.095 para cesantías y prima, pero no para vacaciones.',
      formula: 'Base = salario + variables + auxilio (si aplica)',
      legalArticle: 'CST arts. 127 y 249; Ley 1 de 1963',
    },
    {
      step: 2,
      title: 'Cesantías e intereses',
      description: 'Un mes de salario por año, proporcional a los días trabajados con año de 360 días; los intereses son del 12% anual.',
      formula: 'Cesantías = base × días ÷ 360; intereses = cesantías × días × 12% ÷ 360',
      legalArticle: 'CST art. 249; Ley 52 de 1975',
    },
    {
      step: 3,
      title: 'Prima de servicios',
      description: 'Quince días de salario por semestre, proporcionales a los días trabajados en el semestre.',
      formula: 'Prima = base × días del semestre ÷ 360',
      legalArticle: 'CST art. 306',
    },
    {
      step: 4,
      title: 'Vacaciones',
      description: 'Quince días hábiles por año trabajado, con el salario básico y sin auxilio de transporte, menos los días ya disfrutados.',
      formula: 'Vacaciones = salario × días trabajados ÷ 720 − días disfrutados',
      legalArticle: 'CST arts. 186 y 189',
    },
    {
      step: 5,
      title: 'Indemnización si hay despido sin justa causa',
      description:
        'Indefinido: 30 días el primer año y 20 por cada año adicional (20 + 15 si gana 10 SMMLV o más). Término fijo: salarios del tiempo faltante. Obra o labor: tiempo faltante, mínimo 15 días.',
      formula: 'Indemnización = días × salario diario',
      legalArticle: 'CST art. 64',
    },
  ],
  article: `## Qué es la liquidación laboral

Cuando termina un contrato de trabajo, por la razón que sea, el empleador debe pagar al trabajador todas las prestaciones sociales causadas y no pagadas. Ese pago se conoce como liquidación del contrato o liquidación de prestaciones sociales. Incluye el salario de los últimos días trabajados, las cesantías y sus intereses, la prima de servicios proporcional y las vacaciones que no alcanzó a disfrutar. Si la terminación fue por decisión del empleador sin una justa causa, se suma la indemnización del artículo 64 del Código Sustantivo del Trabajo.

La liquidación se debe pagar al momento de terminar el contrato. Si el empleador no paga los salarios y prestaciones debidos, el artículo 65 del CST establece una indemnización moratoria de un día de salario por cada día de retardo durante los primeros 24 meses, salvo que demuestre buena fe.

## El año de 360 días

Para las prestaciones sociales en Colombia se usa el año comercial de 360 días: todos los meses cuentan como 30 días, incluso febrero. Por eso, si usted trabajó del 1 de enero al 31 de diciembre, la calculadora cuenta 360 días, y si trabajó del 1 de julio al 15 de septiembre cuenta 75 días. Esta convención es la que aplican los empleadores y la que verá en su comprobante de liquidación.

## Cuándo se incluye el auxilio de transporte

El auxilio de transporte no es salario, pero la Ley 1 de 1963 ordena incluirlo en la base de cesantías y prima para quienes ganan hasta dos salarios mínimos. En 2026 el salario mínimo es de $1.750.905 y el auxilio de $249.095, de modo que el tope es $3.501.810. Si su salario es mayor, el auxilio no se paga ni entra en la base. Las vacaciones nunca incluyen el auxilio, porque durante el descanso el trabajador no se desplaza a su sitio de trabajo.

## Cesantías e intereses

Las cesantías equivalen a un mes de salario por cada año trabajado y proporcionalmente por fracciones. Normalmente el empleador las consigna cada año en el fondo de cesantías antes del 14 de febrero, por lo que en la liquidación final solo se pagan las del año en curso. Si el empleador no consignó las del año anterior, debe pagarlas también; en la calculadora puede indicarlo con una casilla. Los intereses sobre cesantías son del 12% anual y se pagan directamente al trabajador.

## Prima de servicios

La prima equivale a 30 días de salario por año, pagados en dos cuotas: la primera a más tardar el 30 de junio y la segunda a más tardar el 20 de diciembre. En la liquidación se paga la parte proporcional del semestre en curso. Si no le pagaron la prima del semestre anterior, marque la casilla correspondiente para sumarla.

## Vacaciones

Por cada año trabajado usted tiene derecho a 15 días hábiles de vacaciones remuneradas. Si el contrato termina sin que las haya disfrutado, el empleador debe compensarlas en dinero, incluso por fracciones de año. La fórmula práctica es salario básico por días trabajados entre 720, a lo que se le restan los días que ya disfrutó. Para salarios variables se usa el promedio del último año.

## Indemnización por despido sin justa causa

Si el empleador termina el contrato sin una de las justas causas del artículo 62 del CST, debe indemnizar al trabajador. En un contrato a término indefinido, con salario inferior a 10 SMMLV, la indemnización es de 30 días de salario por el primer año y 20 días adicionales por cada año siguiente, proporcional por fracción. Con salario de 10 SMMLV o más ($17.509.050 en 2026), es de 20 días por el primer año y 15 por cada año adicional. En un contrato a término fijo, la indemnización equivale a los salarios del tiempo que faltaba para terminar el contrato. En un contrato por obra o labor, al tiempo que faltaba para terminar la obra, sin que sea inferior a 15 días.

## Descuentos de la liquidación

Las prestaciones sociales no tienen descuentos de seguridad social. El salario pendiente sí tiene los aportes del 4% a salud y 4% a pensión. La indemnización puede estar sujeta a retención en la fuente si supera ciertos montos; esta calculadora no la estima porque depende de su situación tributaria.

## Cómo usar la calculadora

Ingrese su salario básico, el promedio de pagos variables si los tiene, las fechas de ingreso y retiro, el tipo de contrato y el motivo de terminación. Indique cuántos días de vacaciones ha disfrutado durante todo el contrato y si ya le consignaron las cesantías del año anterior y le pagaron la prima del semestre pasado. Obtendrá cada concepto con su fórmula y su artículo legal.

## Resumen rápido

Toda liquidación incluye salario pendiente, cesantías, intereses, prima y vacaciones. El despido sin justa causa agrega la indemnización. El auxilio de transporte solo entra en cesantías y prima, y únicamente para salarios de hasta dos mínimos. Revise cada concepto antes de firmar el paz y salvo.`,
  examples: [
    {
      title: 'Ejemplo 1: renuncia con 2,5 años',
      scenario:
        'Andrés gana $2.000.000, ingresó el 1 de marzo de 2024 y renuncia el 15 de septiembre de 2026. Disfrutó 15 días de vacaciones y le deben 15 días de salario.',
      inputs: { 'Salario': '$2.000.000', 'Base con auxilio': '$2.249.095', 'Días trabajados': '915', 'Motivo': 'Renuncia' },
      breakdown: [
        { item: 'Salario pendiente + auxilio', amount: '$1.124.547' },
        { item: 'Cesantías 2026 (255 días)', amount: '$1.593.109' },
        { item: 'Intereses sobre cesantías', amount: '$135.414' },
        { item: 'Prima (75 días)', amount: '$468.561' },
        { item: 'Vacaciones (23,13 días)', amount: '$1.541.667' },
        { item: 'Salud y pensión', amount: '−$80.000' },
      ],
      total: '$4.783.298',
    },
    {
      title: 'Ejemplo 2: despido sin justa causa con 5,75 años',
      scenario:
        'Paula gana $4.500.000 con contrato indefinido desde el 1 de febrero de 2021. La despiden sin justa causa el 31 de octubre de 2026; disfrutó 60 días de vacaciones.',
      inputs: { 'Salario': '$4.500.000', 'Auxilio': 'No aplica', 'Antigüedad': '5,75 años', 'Contrato': 'Indefinido' },
      breakdown: [
        { item: 'Cesantías 2026', amount: '$3.750.000' },
        { item: 'Intereses', amount: '$375.000' },
        { item: 'Prima del semestre', amount: '$1.500.000' },
        { item: 'Vacaciones (26,25 días)', amount: '$3.937.500' },
        { item: 'Indemnización (125 días)', amount: '$18.750.000' },
      ],
      total: '$28.312.500',
    },
  ],
  faqs: [
    { q: '¿Qué incluye la liquidación laboral?', a: 'Salario pendiente, cesantías, intereses sobre cesantías, prima de servicios y vacaciones no disfrutadas. Si hay despido sin justa causa, también la indemnización del artículo 64 del CST.' },
    { q: '¿Cuándo deben pagarme la liquidación?', a: 'Al terminar el contrato. Si el empleador no paga, puede deberle un día de salario por cada día de retardo (art. 65 CST).' },
    { q: '¿El auxilio de transporte se incluye en la liquidación?', a: 'Sí en cesantías y prima, si su salario es de hasta 2 SMMLV. Nunca en vacaciones.' },
    { q: '¿Por qué se usa un año de 360 días?', a: 'Porque las prestaciones se liquidan con el año comercial, en el que cada mes tiene 30 días.' },
    { q: '¿Si renuncio me pagan indemnización?', a: 'No. La indemnización solo procede cuando el empleador termina el contrato sin justa causa.' },
    { q: '¿Cuánto es la indemnización por despido sin justa causa?', a: 'En contrato indefinido con salario menor a 10 SMMLV: 30 días por el primer año y 20 por cada año adicional, proporcional por fracción.' },
    { q: '¿Me descuentan salud y pensión de la liquidación?', a: 'Solo del salario pendiente. Las cesantías, intereses, prima y vacaciones compensadas no tienen aportes del trabajador.' },
    { q: '¿Qué pasa si no me consignaron las cesantías del año pasado?', a: 'El empleador debe pagarlas en la liquidación y puede deber una sanción de un día de salario por cada día de retardo en la consignación.' },
    { q: '¿Las vacaciones se pagan con el salario variable?', a: 'Sí. Si su salario es variable, se liquidan con el promedio de lo devengado en el último año (art. 192 CST).' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
    { label: 'Ley 52 de 1975 (intereses sobre cesantías)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0052_1975.html' },
    { label: 'Ley 50 de 1990', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0050_1990.html' },
  ],
  relatedTools: [
    { title: 'Liquidación por renuncia', path: '/co/calculadora-liquidacion/renuncia/', description: 'Lo que le corresponde si renuncia.' },
    { title: 'Liquidación por despido sin justa causa', path: '/co/calculadora-liquidacion/despido-sin-justa-causa/', description: 'Con indemnización del art. 64.' },
    { title: 'Liquidación de contrato a término fijo', path: '/co/calculadora-liquidacion/contrato-a-termino-fijo/', description: 'Vencimiento o terminación anticipada.' },
    { title: 'Calculadora de cesantías', path: '/co/calculadora-cesantias/', description: 'Cesantías e intereses del año.' },
  ],
  relatedGuides: [
    { title: 'Indemnización por despido sin justa causa', path: '/co/guias/indemnizacion-por-despido-sin-justa-causa/', description: 'Cómo se calcula y cuándo procede.' },
    { title: 'Cesantías: cuándo y cómo retirarlas', path: '/co/guias/cesantias-cuando-y-como-retirarlas/', description: 'Fondos, plazos y retiros.' },
  ],
  updatedAt: '2026-11-14',
};
