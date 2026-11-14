import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Vacaciones Dignas: Cómo Funcionan en 2026 | Calcula',
  metaDescription:
    'Guía de Vacaciones Dignas: 12 días desde el primer año, tabla por antigüedad, prima vacacional, plazos para disfrutarlas y qué hacer si no las respetan.',
  h1: 'Vacaciones Dignas: Cómo Funcionan',
  quickAnswer:
    'Vacaciones Dignas es la reforma al artículo 76 de la LFT vigente desde el 1 de enero de 2023. Duplicó las vacaciones del primer año de 6 a 12 días y aumentó dos días por año hasta 20 en el quinto año; después suman dos días cada cinco años. Aplica a todas las personas trabajadoras del sector privado.',
  howItWorks: [
    { step: 1, title: 'Primer año: 12 días', description: 'Al cumplir un año de servicio ganas 12 días de vacaciones pagadas.', legalArticle: 'Art. 76 LFT' },
    { step: 2, title: 'Años 2 a 5: +2 días por año', description: '14, 16, 18 y 20 días.', legalArticle: 'Art. 76 LFT' },
    { step: 3, title: 'Desde el año 6: +2 cada 5 años', description: '22, 24, 26, 28, 30 y 32 días por bloque de cinco años.', legalArticle: 'Art. 76 LFT' },
    { step: 4, title: 'Prima vacacional', description: 'Al menos 25% del salario de los días de vacaciones.', legalArticle: 'Art. 80 LFT' },
  ],
  article: `## Qué es Vacaciones Dignas

Vacaciones Dignas es el nombre con el que se conoce la reforma a los artículos 76 y 78 de la Ley Federal del Trabajo, publicada en el Diario Oficial de la Federación el 27 de diciembre de 2022. Entró en vigor el 1 de enero de 2023 y es la mayor ampliación de los días de descanso pagado en décadas. Antes de la reforma, una persona con un año de antigüedad tenía apenas seis días de vacaciones, una de las cifras más bajas de América Latina.

## La nueva tabla de días

Con la reforma, las vacaciones aumentan dos días por año durante los primeros cinco años: 12, 14, 16, 18 y 20 días. A partir del sexto año, aumentan dos días por cada cinco años de servicio: 22 días del año 6 al 10, 24 del 11 al 15, 26 del 16 al 20, 28 del 21 al 25, 30 del 26 al 30 y 32 del 31 al 35. La regla continúa después de los 35 años con dos días adicionales por cada bloque de cinco.

## A quién aplica

Aplica a todas las personas trabajadoras regidas por la LFT, sin importar su fecha de ingreso. Quien tenía tres años de antigüedad al 1 de enero de 2023 pasó a tener derecho a 16 días en su siguiente aniversario. También aplica a trabajadores de temporada o discontinuos, en proporción a los días trabajados, y a las trabajadoras del hogar. Los servidores públicos federales tienen su propia ley, con dos periodos de 10 días al año.

## Cómo se disfrutan las vacaciones

La reforma también modificó la forma de disfrutarlas. El artículo 78 establece que la persona trabajadora disfrutará en forma continua de al menos 12 días de vacaciones, y que puede distribuir el resto como lo decida, de común acuerdo con el patrón. Las vacaciones deben concederse dentro de los seis meses siguientes al cumplimiento del año de servicio. El patrón debe entregar anualmente una constancia con la antigüedad y el periodo de vacaciones que corresponde.

## La prima vacacional no cambió

La reforma no modificó el porcentaje de la prima vacacional: sigue siendo de al menos 25% sobre el salario de los días de vacaciones. Pero como ahora hay más días, la prima también es mayor. Con un salario diario de $500, por ejemplo, la prima del primer año pasó de $750 con 6 días a $1,500 con 12 días.

## Efecto en otras prestaciones

Más días de vacaciones también significan un salario diario integrado más alto. El factor de integración mínimo del primer año pasó de 1.0452 a 1.0493. Esto aumenta ligeramente las cuotas al IMSS, las aportaciones a la Afore y al Infonavit y, en caso de despido injustificado, la indemnización. También aumentan las vacaciones proporcionales que se pagan en el finiquito.

## Lo que la reforma no permite

Las vacaciones no se pueden cambiar por dinero mientras sigas trabajando. Tampoco se pueden contar los días de descanso semanal ni los días festivos como parte del periodo vacacional. El patrón no puede negarte las vacaciones indefinidamente: si no te las concede dentro del plazo, estás frente a un incumplimiento. Y nunca se pueden reducir los días por debajo de la tabla legal, ni siquiera con tu consentimiento.

## Qué hacer si tu empresa no aplica la reforma

Si tu empresa todavía aplica la tabla anterior o te niega tus días, solicita por escrito la corrección y conserva la respuesta. Si no se resuelve, acude a la PROFEDET para recibir orientación gratuita o presenta una queja ante la Inspección Federal del Trabajo. Las vacaciones no disfrutadas y su prima se pueden reclamar dentro del año siguiente al vencimiento del plazo de seis meses para concederlas.

## Debate sobre más días de descanso

Después de Vacaciones Dignas se ha discutido en el Congreso la reducción de la jornada laboral a 40 horas semanales, que avanza de forma gradual. Ese cambio es independiente de las vacaciones: la tabla del artículo 76 sigue siendo la misma en 2026. Mantendremos esta guía actualizada si hay nuevas reformas.

## Cómo calcular tus vacaciones paso a paso

Primero identifica tu fecha de ingreso y cuenta cuántos aniversarios has cumplido. Después ubica ese número en la tabla para conocer los días que te corresponden en el periodo actual. Multiplica los días por tu salario diario para obtener el pago de vacaciones y aplica tu porcentaje de prima vacacional, que como mínimo es 25%. Si estás por dejar la empresa, calcula también la parte proporcional del año en curso con nuestra calculadora de finiquito, porque ese monto se te debe pagar aunque no hayas cumplido el siguiente aniversario.

## Recomendaciones para las empresas

Para cumplir con la reforma, las empresas deben actualizar sus políticas internas, sus sistemas de nómina y las constancias anuales de vacaciones. También conviene planear los periodos de descanso con anticipación para que la operación no se afecte y documentar la fecha en que cada persona disfrutó sus días.`,
  examples: [
    {
      title: 'Primer año antes y después de la reforma',
      scenario: 'Salario diario de $500 con un año de antigüedad.',
      inputs: { 'Salario diario': '$500.00', 'Prima vacacional': '25%' },
      breakdown: [
        { item: 'Antes: 6 días + prima', amount: '$3,750.00' },
        { item: 'Ahora: 12 días', amount: '$6,000.00' },
        { item: 'Ahora: prima 25%', amount: '$1,500.00' },
      ],
      total: '$7,500.00 (doble que antes)',
    },
    {
      title: 'Cinco años de antigüedad',
      scenario: 'Salario diario de $600 con cinco años cumplidos.',
      inputs: { 'Salario diario': '$600.00', 'Días': '20' },
      breakdown: [
        { item: 'Pago de vacaciones', amount: '$12,000.00' },
        { item: 'Prima vacacional 25%', amount: '$3,000.00' },
      ],
      total: '$15,000.00',
    },
  ],
  faqs: [
    { q: '¿Desde cuándo aplica Vacaciones Dignas?', a: 'Desde el 1 de enero de 2023.' },
    { q: '¿Cuántos días tengo en el primer año?', a: '12 días.' },
    { q: '¿Cuántos días deben ser seguidos?', a: 'Al menos 12 días continuos; el resto puede dividirse.' },
    { q: '¿Aplica si entré antes de 2023?', a: 'Sí, aplica a todas las personas trabajadoras sin importar su fecha de ingreso.' },
    { q: '¿Cambió la prima vacacional?', a: 'No, sigue siendo al menos 25%, pero se paga sobre más días.' },
    { q: '¿Puedo vender mis vacaciones?', a: 'No mientras sigas trabajando. Solo se pagan en dinero al terminar la relación.' },
    { q: '¿Cuánto tiempo tiene el patrón para darme mis vacaciones?', a: 'Seis meses a partir de tu aniversario.' },
    { q: '¿Los trabajadores de temporada tienen vacaciones?', a: 'Sí, en proporción a los días trabajados en el año (art. 77 LFT).' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 76-81', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'Diario Oficial de la Federación (27-dic-2022)', url: 'https://www.dof.gob.mx' },
    { label: 'Secretaría del Trabajo y Previsión Social', url: 'https://www.gob.mx/stps' },
  ],
  relatedTools: [
    { title: 'Calculadora de Vacaciones', path: '/mx/calculadora-vacaciones/', description: 'Tus días y prima vacacional.' },
    { title: 'Tabla de Vacaciones 2026', path: '/mx/tabla-de-vacaciones/', description: 'Días de 1 a 35 años.' },
  ],
  relatedGuides: [
    { title: '¿Cuánto me toca si renuncio?', path: '/mx/guias/cuanto-me-toca-si-renuncio/', description: 'Vacaciones en el finiquito.' },
    { title: 'Salario diario integrado', path: '/mx/calculadora-salario-diario-integrado/', description: 'Impacto en tu SDI.' },
  ],
  updatedAt: '2026-11-14',
};
