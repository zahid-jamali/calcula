import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Liquidación Contrato a Término Fijo 2026 | Calcula',
  metaDescription:
    'Liquide un contrato a término fijo en Colombia: prestaciones al vencimiento, preaviso de 30 días, prórroga e indemnización por terminación anticipada.',
  h1: 'Liquidación de Contrato a Término Fijo 2026',
  quickAnswer:
    'Al terminar un contrato a término fijo se pagan salario pendiente, cesantías, intereses, prima y vacaciones proporcionales. Si el contrato vence y el empleador avisó con 30 días de anticipación, no hay indemnización. Si lo terminan antes sin justa causa, deben pagarle los salarios de todo el tiempo que faltaba para el vencimiento.',
  howItWorks: [
    { step: 1, title: 'Fecha de vencimiento', description: 'Indique la fecha pactada de terminación del contrato.', legalArticle: 'CST art. 46' },
    { step: 2, title: 'Prestaciones proporcionales', description: 'Cesantías, intereses, prima y vacaciones por el tiempo trabajado, con año de 360 días.', formula: 'Base × días ÷ 360', legalArticle: 'CST arts. 249, 306 y 189' },
    { step: 3, title: 'Terminación anticipada sin justa causa', description: 'Se pagan los salarios del tiempo que faltaba hasta el vencimiento.', formula: 'Días faltantes × salario ÷ 30', legalArticle: 'CST art. 64' },
    { step: 4, title: 'Vencimiento sin preaviso', description: 'Si no hubo aviso escrito con 30 días, el contrato se prorroga y no termina.', legalArticle: 'CST art. 46' },
  ],
  article: `## Qué es el contrato a término fijo

El contrato a término fijo es el que tiene una fecha de terminación pactada desde el inicio. Debe constar por escrito y su duración no puede ser superior a tres años, aunque puede renovarse indefinidamente. Los trabajadores con contrato a término fijo tienen exactamente las mismas prestaciones sociales que los de contrato indefinido: cesantías, intereses, prima, vacaciones, seguridad social y dotación.

## El preaviso de 30 días y la prórroga

Según el artículo 46 del CST, si ninguna de las partes avisa por escrito a la otra su decisión de no prorrogar el contrato, con una antelación no inferior a 30 días, el contrato se renueva por un periodo igual al inicialmente pactado. En los contratos de menos de un año, solo pueden renovarse sucesivamente hasta por tres periodos iguales o inferiores; a partir de ahí, la renovación no puede ser inferior a un año.

Esto significa que, si su empleador no le avisó con 30 días de anticipación que no renovaría el contrato, este se prorrogó automáticamente. Si aun así le dice que ya terminó, en la práctica estaría terminando el nuevo periodo antes de tiempo y podría deberle la indemnización.

## Liquidación al vencimiento

Cuando el contrato termina en la fecha pactada y hubo preaviso, el empleador debe pagar la liquidación de prestaciones: salario pendiente, cesantías e intereses del año, prima proporcional del semestre y vacaciones no disfrutadas. No hay indemnización, porque la terminación por vencimiento del plazo es un modo legal de terminar el contrato.

## Terminación anticipada sin justa causa

Si el empleador termina el contrato antes del vencimiento y sin justa causa, el artículo 64 ordena pagar como indemnización el valor de los salarios correspondientes al tiempo que faltaba para cumplir el plazo. No hay mínimos ni topes: si faltaban seis meses, le deben seis meses de salario; si faltaban 20 días, 20 días de salario. La calculadora cuenta el tiempo faltante desde el día siguiente al retiro hasta la fecha pactada de vencimiento, con meses de 30 días.

## Contratos de menos de un año

En los contratos inferiores a un año, las vacaciones y la prima se pagan proporcionalmente al tiempo trabajado, cualquiera que sea este. Es decir, aunque su contrato sea de tres meses, tiene derecho a cesantías, intereses, prima y vacaciones proporcionales. Esta regla está en el mismo artículo 46.

## Renuncia en un contrato a término fijo

Si usted renuncia antes del vencimiento, el empleador debe pagarle igual sus prestaciones sociales. La ley no establece una indemnización a cargo del trabajador en el contrato a término fijo, salvo lo que se haya pactado expresamente, pero algunos contratos incluyen cláusulas al respecto. Revise el suyo antes de renunciar.

## Contrato por obra o labor

El contrato por obra o labor termina cuando se finaliza la obra para la que se contrató al trabajador. Si el empleador lo termina antes sin justa causa, la indemnización es el tiempo que faltaba para terminar la obra, con un mínimo de 15 días de salario. En la calculadora general de liquidación puede seleccionar este tipo de contrato e indicar la fecha estimada de finalización.

## La reforma laboral de 2025

La Ley 2466 de 2025 reforzó la regla de que el contrato a término indefinido es la forma general de contratación y que el contrato a término fijo debe constar por escrito y tener una justificación. También limitó su duración máxima a cuatro años, incluidas las prórrogas, según el texto aprobado. Le recomendamos revisar la página de reforma laboral para conocer los cambios y sus fechas de vigencia.

## Cómo contar el tiempo faltante

El tiempo faltante se cuenta desde el día siguiente a la fecha de retiro hasta la fecha pactada de terminación. Se usa el mes de 30 días, igual que en las prestaciones sociales. Por ejemplo, si el contrato vence el 31 de enero de 2027 y el retiro es el 31 de julio de 2026, faltan seis meses completos, es decir, 180 días de salario. Si el contrato ya había sido prorrogado, la fecha que cuenta es la del vencimiento de la prórroga vigente, no la del contrato inicial.

## Documentos para revisar su caso

Tenga a mano el contrato original, las prórrogas o los otrosí, la carta de preaviso o de terminación y sus desprendibles de nómina. Con esa información puede verificar la fecha real de vencimiento, el salario que se debe usar y si el preaviso se dio a tiempo. Si encuentra inconsistencias, solicite una aclaración por escrito antes de firmar el paz y salvo y, si no hay acuerdo, acuda a la inspección de trabajo del Ministerio del Trabajo para una conciliación gratuita.

## Resumen rápido

Al vencimiento con preaviso se paga solo la liquidación de prestaciones. Sin preaviso, el contrato se prorroga. Si lo terminan antes sin justa causa, además de las prestaciones le deben los salarios de todo el tiempo que faltaba. Guarde su contrato, las prórrogas y la carta de terminación.`,
  examples: [
    {
      title: 'Ejemplo 1: terminación anticipada sin justa causa',
      scenario: 'Natalia tiene un contrato a término fijo del 1 de febrero de 2026 al 31 de enero de 2027, con salario de $2.800.000. La despiden el 31 de julio de 2026.',
      inputs: { 'Salario': '$2.800.000', 'Días trabajados': '180', 'Días faltantes': '180' },
      breakdown: [
        { item: 'Cesantías + intereses', amount: '$1.616.021' },
        { item: 'Prima (julio)', amount: '$254.091' },
        { item: 'Vacaciones (7,5 días)', amount: '$700.000' },
        { item: 'Indemnización: salarios faltantes', amount: '$16.800.000' },
      ],
      total: '$19.370.112',
    },
    {
      title: 'Ejemplo 2: vencimiento con preaviso',
      scenario: 'Mauricio tuvo un contrato de un año del 1 de noviembre de 2025 al 31 de octubre de 2026, con salario de $2.200.000, y recibió preaviso. No tomó vacaciones.',
      inputs: { 'Salario': '$2.200.000', 'Base con auxilio': '$2.449.095', 'Días trabajados': '360' },
      breakdown: [
        { item: 'Cesantías 2026 (300 días)', amount: '$2.040.913' },
        { item: 'Intereses', amount: '$204.091' },
        { item: 'Prima (120 días)', amount: '$816.365' },
        { item: 'Vacaciones (15 días)', amount: '$1.100.000' },
      ],
      total: '$4.161.369',
    },
  ],
  faqs: [
    { q: '¿Qué pasa si no me avisan que no renuevan el contrato?', a: 'Si no hay aviso escrito con al menos 30 días de anticipación, el contrato se prorroga por un periodo igual.' },
    { q: '¿Cuánto me pagan si me despiden antes del vencimiento?', a: 'Los salarios del tiempo que faltaba para terminar el contrato, además de sus prestaciones.' },
    { q: '¿Al vencimiento me pagan indemnización?', a: 'No, si hubo preaviso. Solo le pagan la liquidación de prestaciones.' },
    { q: '¿Tengo derecho a vacaciones en un contrato de 3 meses?', a: 'Sí, de forma proporcional al tiempo trabajado.' },
    { q: '¿Cuántas veces se puede renovar?', a: 'Indefinidamente, pero los contratos de menos de un año solo tres veces por periodos iguales o inferiores; luego, mínimo por un año.' },
    { q: '¿Si renuncio debo indemnizar al empleador?', a: 'La ley no lo impone de forma general; revise si su contrato tiene una cláusula al respecto.' },
    { q: '¿El auxilio de transporte entra en la liquidación?', a: 'Sí en cesantías y prima si gana hasta 2 SMMLV; no en vacaciones ni en la indemnización.' },
    { q: '¿Y si mi contrato es por obra o labor?', a: 'Si lo terminan antes sin justa causa, le pagan el tiempo faltante de la obra, mínimo 15 días.' },
  ],
  sources: [
    { label: 'Código Sustantivo del Trabajo, arts. 46 y 64', url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html' },
    { label: 'Ley 2466 de 2025 (Función Pública)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de liquidación laboral', path: '/co/calculadora-liquidacion/', description: 'Indefinido, fijo y obra.' },
    { title: 'Despido sin justa causa', path: '/co/calculadora-liquidacion/despido-sin-justa-causa/', description: 'Indemnización del art. 64.' },
    { title: 'Calculadora de cesantías', path: '/co/calculadora-cesantias/', description: 'Cesantías e intereses.' },
  ],
  relatedGuides: [
    { title: 'Cómo liquidar un contrato a término fijo', path: '/co/guias/como-liquidar-un-contrato-a-termino-fijo/', description: 'Paso a paso con ejemplos.' },
    { title: 'Reforma laboral 2025', path: '/co/reforma-laboral/', description: 'Cambios en la contratación.' },
  ],
  updatedAt: '2026-11-14',
};
