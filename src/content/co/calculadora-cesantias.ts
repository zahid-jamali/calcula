import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Cesantías e Intereses 2026 | Calcula',
  metaDescription:
    'Calcule sus cesantías e intereses 2026 en Colombia: un mes de salario por año y 12% de intereses. Consignación al fondo antes del 14 de febrero.',
  h1: 'Calculadora de Cesantías e Intereses 2026',
  quickAnswer:
    'Las cesantías equivalen a un mes de salario por cada año trabajado y proporcionalmente por fracción. El empleador debe consignarlas en su fondo antes del 14 de febrero del año siguiente y pagarle intereses del 12% anual a más tardar el 31 de enero. Con salario de hasta dos SMMLV, el auxilio de transporte entra en la base.',
  howItWorks: [
    { step: 1, title: 'Base de liquidación', description: 'Salario más promedio de variables y auxilio de transporte si gana hasta 2 SMMLV.', formula: 'Base = salario + variables + auxilio', legalArticle: 'CST art. 249; Ley 1 de 1963' },
    { step: 2, title: 'Cesantías', description: 'Proporcionales a los días trabajados en el año, con año de 360 días.', formula: 'Cesantías = base × días ÷ 360', legalArticle: 'CST art. 249' },
    { step: 3, title: 'Intereses', description: '12% anual sobre las cesantías, proporcional a los días.', formula: 'Intereses = cesantías × días × 12% ÷ 360', legalArticle: 'Ley 52 de 1975' },
    { step: 4, title: 'Plazos', description: 'Intereses al trabajador a más tardar el 31 de enero; cesantías al fondo antes del 14 de febrero.', legalArticle: 'Ley 50 de 1990 art. 99' },
  ],
  article: `## Qué son las cesantías

Las cesantías son una prestación social que funciona como un ahorro para proteger al trabajador cuando queda cesante, es decir, cuando pierde su empleo. El artículo 249 del Código Sustantivo del Trabajo establece que todo empleador está obligado a pagar a sus trabajadores, al terminar el contrato, un mes de salario por cada año de servicios y proporcionalmente por fracciones de año. En la práctica, desde la Ley 50 de 1990, las cesantías se liquidan cada 31 de diciembre y se consignan en un fondo de cesantías elegido por el trabajador.

## Cómo se calculan

La fórmula es base de liquidación por días trabajados en el año, dividido entre 360. La base es el último salario mensual devengado, siempre que no haya variado en los últimos tres meses; si varió, o si el salario es variable, se usa el promedio del último año. A la base se suma el promedio de horas extra, recargos y comisiones, y el auxilio de transporte para quienes ganan hasta dos salarios mínimos.

En 2026, quien gana el salario mínimo de $1.750.905 tiene una base de $2.000.000 con el auxilio de transporte. Por un año completo de 360 días sus cesantías son de $2.000.000 y sus intereses de $240.000.

## Intereses sobre las cesantías

La Ley 52 de 1975 obliga al empleador a pagar intereses del 12% anual sobre el saldo de cesantías al 31 de diciembre. Si el trabajador laboró solo una parte del año, los intereses son proporcionales: cesantías por días trabajados por 12%, dividido entre 360. Los intereses se pagan directamente al trabajador, no al fondo, a más tardar el 31 de enero del año siguiente. Si el empleador no los paga a tiempo, debe pagarlos dobles como sanción.

## Fechas clave

- 31 de diciembre: se liquidan las cesantías del año.
- 31 de enero: fecha límite para pagar los intereses directamente al trabajador.
- 14 de febrero: fecha límite para consignar las cesantías en el fondo.
- Al terminar el contrato: el empleador paga directamente al trabajador las cesantías del año en curso.

## Sanción por no consignar

Si el empleador no consigna las cesantías antes del 15 de febrero, el numeral 3 del artículo 99 de la Ley 50 de 1990 establece una sanción de un día de salario por cada día de retardo. Es una de las sanciones más costosas de la legislación laboral, por lo que conviene revisar cada año en su fondo que la consignación se haya hecho.

## Fondos de cesantías

El trabajador elige libremente el fondo de cesantías, que puede ser un fondo privado (Porvenir, Protección, Colfondos o Skandia) o el Fondo Nacional del Ahorro. Las cesantías consignadas generan rendimientos según el portafolio elegido. Usted puede cambiarse de fondo según las reglas de cada administradora.

## Cuándo se pueden retirar

Las cesantías se pueden retirar al terminar el contrato de trabajo, para comprar, construir, mejorar o liberar de gravámenes una vivienda, para pagar educación superior propia, del cónyuge o de los hijos, y en otros casos que permite la ley. Desde la Ley 1809 de 2016 también se pueden usar para ahorro en el programa AFC y para educación. Consulte nuestra guía sobre cómo retirarlas.

## Trabajadores con salario integral

Quienes devengan salario integral, de al menos 13 salarios mínimos, no reciben cesantías ni intereses, porque su salario ya incluye el factor prestacional. Tampoco las reciben los contratistas por prestación de servicios.

## Cómo usar la calculadora

Ingrese su salario mensual, el promedio de pagos variables y los días trabajados en el año, hasta 360. La calculadora aplica automáticamente el auxilio de transporte si corresponde, y le muestra las cesantías, los intereses y las fechas de consignación y pago.

## Revise su extracto cada año

Después del 14 de febrero, descargue el extracto de su fondo de cesantías y compare el valor consignado con el resultado de esta calculadora. Si la consignación no aparece o el valor es menor, pida a Recursos Humanos el soporte de la planilla. Detectar el problema a tiempo le permite reclamar la sanción por mora y evita sorpresas el día que necesite retirar el dinero para vivienda o educación.

## Cesantías parciales durante el contrato

No es necesario esperar a que termine el contrato para usar las cesantías. Puede solicitar un retiro parcial para vivienda o educación presentando al fondo los soportes de la compra, la construcción, la mejora o la matrícula. En los contratos anteriores a 1990 que conservan el régimen de retroactividad, los anticipos se piden directamente al empleador. En cualquier caso, el retiro parcial reduce el saldo que recibirá al terminar el contrato, así que conviene planearlo.

## Resumen rápido

Las cesantías son un mes de salario por año y los intereses el 12% anual. Los intereses se pagan al trabajador antes del 31 de enero y las cesantías se consignan en el fondo antes del 14 de febrero. Si gana hasta dos mínimos, la base incluye el auxilio de transporte.`,
  examples: [
    {
      title: 'Ejemplo 1: año completo con auxilio',
      scenario: 'Carolina gana $2.500.000 y trabajó todo 2026. Su salario es inferior a 2 SMMLV, así que la base incluye el auxilio.',
      inputs: { 'Salario': '$2.500.000', 'Base con auxilio': '$2.749.095', 'Días': '360' },
      breakdown: [
        { item: 'Cesantías', amount: '$2.749.095' },
        { item: 'Intereses (12%)', amount: '$329.891' },
      ],
      total: '$3.078.986',
    },
    {
      title: 'Ejemplo 2: 210 días sin auxilio',
      scenario: 'Hernán gana $6.000.000 e ingresó el 1 de junio de 2026.',
      inputs: { 'Salario': '$6.000.000', 'Auxilio': 'No aplica', 'Días': '210' },
      breakdown: [
        { item: 'Cesantías', amount: '$3.500.000' },
        { item: 'Intereses', amount: '$245.000' },
      ],
      total: '$3.745.000',
    },
  ],
  faqs: [
    { q: '¿Cuánto son las cesantías?', a: 'Un mes de salario por cada año trabajado y proporcionalmente por fracción.' },
    { q: '¿Cuándo consignan las cesantías?', a: 'A más tardar el 14 de febrero del año siguiente, en el fondo que usted elija.' },
    { q: '¿Cuándo pagan los intereses?', a: 'Directamente al trabajador, a más tardar el 31 de enero.' },
    { q: '¿Cuál es la tasa de los intereses?', a: 'El 12% anual, proporcional a los días trabajados.' },
    { q: '¿El auxilio de transporte entra en las cesantías?', a: 'Sí, si su salario es de hasta 2 SMMLV.' },
    { q: '¿Qué pasa si el empleador no consigna a tiempo?', a: 'Debe pagar un día de salario por cada día de retardo (Ley 50 de 1990, art. 99).' },
    { q: '¿Qué pasa si no pagan los intereses a tiempo?', a: 'Deben pagarlos dobles como sanción.' },
    { q: '¿Quién no recibe cesantías?', a: 'Quienes tienen salario integral y los contratistas por prestación de servicios.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, art. 249', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 50 de 1990, art. 99', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0050_1990.html' },
    { label: 'Ley 52 de 1975', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0052_1975.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de prima', path: '/co/calculadora-prima/', description: 'La otra prestación semestral.' },
    { title: 'Calculadora de liquidación', path: '/co/calculadora-liquidacion/', description: 'Cesantías al terminar el contrato.' },
    { title: 'Calculadora de salario neto', path: '/co/calculadora-salario-neto/', description: 'Descuentos mensuales.' },
  ],
  relatedGuides: [
    { title: 'Cesantías: cuándo y cómo retirarlas', path: '/co/guias/cesantias-cuando-y-como-retirarlas/', description: 'Retiros permitidos y trámites.' },
    { title: 'Auxilio de transporte 2026', path: '/co/auxilio-de-transporte/', description: 'Cuándo se incluye en la base.' },
  ],
  updatedAt: '2026-11-14',
};
