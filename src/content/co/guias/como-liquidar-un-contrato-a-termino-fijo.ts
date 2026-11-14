import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Cómo Liquidar un Contrato a Término Fijo 2026 | Calcula',
  metaDescription:
    'Guía paso a paso para liquidar un contrato a término fijo en Colombia: preaviso, prórroga, prestaciones proporcionales e indemnización, con ejemplos.',
  h1: 'Cómo Liquidar un Contrato a Término Fijo',
  quickAnswer:
    'Para liquidar un contrato a término fijo, verifique primero si hubo preaviso escrito de 30 días; sin él, el contrato se prorrogó. Luego calcule salario pendiente, cesantías, intereses, prima y vacaciones proporcionales. Si el empleador lo terminó antes del vencimiento sin justa causa, sume los salarios de todo el tiempo que faltaba.',
  howItWorks: [
    { step: 1, title: 'Revise el preaviso', description: 'Aviso escrito de no renovación con al menos 30 días de anticipación.', legalArticle: 'CST art. 46' },
    { step: 2, title: 'Cuente los días trabajados', description: 'Con meses de 30 días, en el año y en el semestre.', formula: 'Días360(ingreso, retiro)' },
    { step: 3, title: 'Calcule las prestaciones', description: 'Cesantías, intereses, prima y vacaciones proporcionales.', formula: 'Base × días ÷ 360; vacaciones: salario × días ÷ 720', legalArticle: 'CST arts. 249, 306 y 189' },
    { step: 4, title: 'Sume la indemnización si aplica', description: 'Salarios del tiempo faltante si hubo terminación anticipada sin justa causa.', legalArticle: 'CST art. 64' },
  ],
  article: `## Paso 1: revise el contrato y las prórrogas

Lo primero es tener claro cuándo termina realmente el contrato. Busque el contrato original, que debe constar por escrito, y cualquier otrosí o prórroga. Si el contrato es inferior a un año, solo puede prorrogarse sucesivamente hasta por tres periodos iguales o inferiores; a partir de la cuarta prórroga, la renovación no puede ser inferior a un año. Si el contrato se prorrogó automáticamente, la fecha de vencimiento que cuenta es la de la prórroga vigente.

## Paso 2: verifique el preaviso

El artículo 46 del CST exige que la parte que no quiera renovar el contrato lo avise por escrito a la otra con una antelación no inferior a 30 días. Si el empleador no dio el aviso a tiempo, el contrato se renovó por un periodo igual al inicial. En ese caso, si el empleador insiste en terminar el contrato en la fecha original, está terminando la prórroga antes de tiempo y debe la indemnización por el tiempo faltante.

## Paso 3: calcule la base de liquidación

La base para cesantías y prima es el salario mensual más el promedio de pagos variables y, si el salario es de hasta dos SMMLV ($3.501.810 en 2026), el auxilio de transporte de $249.095. Para las vacaciones se usa el salario básico sin auxilio. Para la indemnización, el salario más variables, sin auxilio.

## Paso 4: liquide las prestaciones

Con la base y los días trabajados, aplique las fórmulas:

- Cesantías: base por días trabajados en el año, dividido entre 360.
- Intereses sobre cesantías: cesantías por días por 12%, dividido entre 360.
- Prima: base por días trabajados en el semestre, dividido entre 360.
- Vacaciones: salario básico por días trabajados entre 720, menos los días disfrutados.
- Salario pendiente: los días del último periodo no pagados, con su auxilio.

En los contratos inferiores a un año, la ley ordena pagar vacaciones y prima en proporción al tiempo trabajado, cualquiera que sea.

## Paso 5: la indemnización por terminación anticipada

Si el empleador termina el contrato antes del vencimiento sin una justa causa, debe pagar los salarios del tiempo que faltaba. Cuente los días desde el día siguiente al retiro hasta la fecha de vencimiento, con meses de 30 días, y multiplíquelos por el salario diario. Por ejemplo, si el contrato vencía el 31 de enero de 2027 y el despido fue el 31 de julio de 2026, faltaban 180 días.

## Paso 6: verifique el pago y los documentos

La liquidación debe pagarse el día de la terminación. Exija el comprobante detallado con cada concepto, la certificación laboral y la constancia de pago de aportes a seguridad social. Si encuentra diferencias, no firme el paz y salvo hasta que se corrijan.

## Qué cambió con la reforma laboral

La Ley 2466 de 2025 reforzó que el contrato a término indefinido es la regla general y que el contrato a término fijo debe constar por escrito. También fijó un tope de cuatro años para su duración, incluidas las prórrogas. Si no se cumplen estos requisitos, el contrato puede considerarse indefinido, lo que cambia el cálculo de la indemnización en caso de despido.

## Errores frecuentes

Los errores más comunes son: considerar terminado el contrato sin preaviso, olvidar las prestaciones proporcionales en contratos cortos, incluir el auxilio de transporte en vacaciones o en la indemnización, contar los días con 365 en lugar de 360, y no pagar la prima del semestre anterior cuando quedó pendiente.

## Si usted es quien no quiere renovar

El preaviso de 30 días aplica para ambas partes. Si usted no quiere continuar al vencimiento, avise por escrito con al menos 30 días de anticipación para evitar que el contrato se prorrogue. Si renuncia antes del vencimiento, el empleador debe pagarle sus prestaciones, pero no hay indemnización a su favor, y debe revisar si su contrato contempla alguna obligación en ese caso.

## Ejemplo paso a paso

Supongamos un contrato a término fijo del 1 de noviembre de 2025 al 31 de octubre de 2026 con salario de $2.200.000, que vence con preaviso. La base de cesantías y prima es de $2.449.095, porque el salario es inferior a dos mínimos y se suma el auxilio de transporte. En 2026 se trabajaron 300 días: las cesantías son $2.040.913 y los intereses $204.091. En el segundo semestre se trabajaron 120 días: la prima es de $816.365. Por todo el contrato se trabajaron 360 días y no se tomaron vacaciones: corresponden 15 días, es decir, $1.100.000 con el salario básico. Las cesantías de 2025 ya se consignaron al fondo en febrero.

## Contratos sucesivos con el mismo empleador

Si después del vencimiento firma un nuevo contrato con el mismo empleador sin interrupción real, los jueces pueden considerar que existió un solo contrato continuo, lo que afecta el cálculo de la antigüedad, de las vacaciones y de una eventual indemnización. Conserve las fechas exactas de cada contrato y de cada liquidación.

## Resumen rápido

Revise el preaviso y la fecha real de vencimiento, calcule las prestaciones proporcionales con meses de 30 días y, si hubo terminación anticipada sin justa causa, sume los salarios del tiempo faltante.`,
  examples: [
    {
      title: 'Terminación anticipada',
      scenario: 'Contrato de un año del 1-feb-2026 al 31-ene-2027, salario $2.800.000; despido el 31-jul-2026.',
      inputs: { 'Días trabajados': '180', 'Días faltantes': '180' },
      breakdown: [
        { item: 'Prestaciones', amount: '$2.570.112' },
        { item: 'Indemnización', amount: '$16.800.000' },
      ],
      total: '$19.370.112',
    },
    {
      title: 'Vencimiento con preaviso',
      scenario: 'Contrato del 1-nov-2025 al 31-oct-2026, salario $2.200.000, con preaviso.',
      inputs: { 'Días trabajados': '360', 'Indemnización': 'No aplica' },
      breakdown: [
        { item: 'Cesantías + intereses', amount: '$2.245.004' },
        { item: 'Prima', amount: '$816.365' },
        { item: 'Vacaciones', amount: '$1.100.000' },
      ],
      total: '$4.161.369',
    },
  ],
  faqs: [
    { q: '¿Qué pasa si no me dieron preaviso?', a: 'El contrato se prorrogó por un periodo igual al pactado.' },
    { q: '¿Con cuánta anticipación debe darse el preaviso?', a: 'Al menos 30 días antes del vencimiento, por escrito.' },
    { q: '¿Me pagan vacaciones en un contrato de 4 meses?', a: 'Sí, proporcionales al tiempo trabajado.' },
    { q: '¿Cuánto me pagan si me despiden antes de terminar?', a: 'Sus prestaciones más los salarios del tiempo faltante.' },
    { q: '¿Cuánto puede durar un contrato a término fijo?', a: 'Hasta cuatro años con prórrogas, según la Ley 2466 de 2025.' },
    { q: '¿El auxilio de transporte entra en la liquidación?', a: 'En cesantías y prima, si gana hasta 2 SMMLV; no en vacaciones ni en la indemnización.' },
    { q: '¿Cuándo deben pagarme?', a: 'El día de la terminación del contrato.' },
    { q: '¿Qué pasa si el contrato no está por escrito?', a: 'Se entiende celebrado a término indefinido.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, arts. 46 y 64', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 2466 de 2025', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Liquidación contrato a término fijo', path: '/co/calculadora-liquidacion/contrato-a-termino-fijo/', description: 'Calcule su caso.' },
    { title: 'Calculadora de vacaciones', path: '/co/calculadora-vacaciones/', description: 'Vacaciones proporcionales.' },
  ],
  relatedGuides: [
    { title: 'Indemnización por despido sin justa causa', path: '/co/guias/indemnizacion-por-despido-sin-justa-causa/', description: 'Tablas del art. 64.' },
    { title: 'Reforma laboral 2025', path: '/co/reforma-laboral/', description: 'Cambios en la contratación.' },
  ],
  updatedAt: '2026-11-14',
};
