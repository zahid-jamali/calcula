import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: '¿Qué es la Prima de Antigüedad? Guía 2026 | Calcula',
  metaDescription:
    'Prima de antigüedad en México: 12 días por año con tope de 2 salarios mínimos. Cuándo se paga, renuncia con 15 años, ISR y ejemplos 2026.',
  h1: '¿Qué es la Prima de Antigüedad y Cuándo se Paga?',
  quickAnswer:
    'La prima de antigüedad es un pago de 12 días de salario por cada año trabajado, con el salario topado al doble del salario mínimo ($630.08 diarios en 2026). Se paga en cualquier despido, justificado o no, en la renuncia con 15 años o más de servicio y a los beneficiarios cuando fallece el trabajador.',
  howItWorks: [
    { step: 1, title: 'Años de servicio', description: 'Se cuentan los años completos y las fracciones.', legalArticle: 'Art. 162 fr. I LFT' },
    { step: 2, title: 'Salario con tope', description: 'El salario diario no puede exceder dos salarios mínimos.', formula: 'Salario = mín(SD, 2 × salario mínimo)', legalArticle: 'Arts. 162 fr. II, 485 y 486 LFT' },
    { step: 3, title: 'Monto', description: 'Doce días por año de servicio.', formula: 'Prima = 12 × años × salario topado', legalArticle: 'Art. 162 LFT' },
  ],
  article: `## Qué es la prima de antigüedad

La prima de antigüedad es una prestación que reconoce el tiempo que una persona ha trabajado para la misma empresa. Está regulada en el artículo 162 de la Ley Federal del Trabajo y consiste en el pago de 12 días de salario por cada año de servicios. A diferencia de la indemnización por despido, no depende de que la separación sea injusta: es un premio a la permanencia que se paga en varias situaciones.

## Cuándo se paga

La ley establece cuatro supuestos:

- Cuando la persona trabajadora se separa voluntariamente de su empleo, siempre que haya cumplido 15 años de servicios por lo menos.
- Cuando se separa por causa justificada, es decir, cuando rescinde la relación por una falta grave del patrón.
- Cuando es separada de su empleo, independientemente de la justificación o injustificación del despido.
- Cuando fallece, en cuyo caso se paga a sus beneficiarios, sin importar la antigüedad.

En resumen: si te despiden, siempre te toca; si renuncias, solo con 15 años o más. Un punto que mucha gente desconoce es que incluso en el despido justificado, por ejemplo por faltas, el patrón debe pagar la prima de antigüedad.

## Cómo se calcula

El cálculo tiene tres elementos: los años de servicio, los 12 días por año y el salario. Los años se cuentan desde tu fecha de ingreso hasta la fecha de separación, incluidas las fracciones; si trabajaste cinco años y medio, se pagan 5.5 años. El salario que se usa es tu salario diario, pero con un tope: los artículos 485 y 486 indican que si tu salario es mayor al doble del salario mínimo del área, se usa el doble del mínimo.

En 2026 el salario mínimo general es de $315.04, por lo que el tope es de $630.08 diarios. En la Zona Libre de la Frontera Norte, con un mínimo de $440.87, el tope es de $881.74. Si ganas menos que el tope, se usa tu salario real.

## Ejemplo con salario debajo del tope

Una persona que gana $15,000 al mes tiene un salario diario de $500, menor al tope de $630.08. Si la despiden después de 5.42 años, su prima de antigüedad es 12 × 5.42 × $500, lo que da aproximadamente $32,531.

## Ejemplo con salario arriba del tope

Una persona con $30,000 mensuales tiene un salario diario de $1,000, mayor al tope. Con 10.72 años de antigüedad, su prima se calcula con $630.08: 12 × 10.72 × $630.08, alrededor de $81,037. Si se usara su salario real, serían más de $128,000; por eso es importante aplicar el tope correctamente.

## La renuncia con 15 años

Si renuncias con 15 años o más de servicio, la prima de antigüedad puede ser el concepto más grande de tu finiquito. Una persona con $18,000 mensuales y 16.68 años recibe alrededor de $120,112 por este concepto. Si estás cerca de cumplir 15 años, vale la pena esperar a esa fecha antes de renunciar, porque un día antes no tendrías derecho y un día después sí.

## Impuestos

La prima de antigüedad es un pago por separación y, junto con las indemnizaciones, está exenta de ISR hasta 90 UMA por cada año de servicio. Con la UMA de 2026 ($117.31), cada año exenta $10,557.90. Como la prima de antigüedad con tope equivale como máximo a 12 × $630.08 = $7,560.96 por año, cuando se paga sola casi siempre queda totalmente exenta.

## Plazo para reclamarla

Si no te pagaron la prima de antigüedad, puedes reclamarla. Si deriva de un despido, el plazo es de dos meses; si deriva de una renuncia, la acción prescribe en un año. Acude a la PROFEDET o al Centro de Conciliación de tu estado con tus recibos de nómina y tu constancia de antigüedad.

## Errores frecuentes

No aplicar el tope de dos salarios mínimos, no pagarla en despidos justificados, olvidar las fracciones de año y usar el salario integrado en lugar del salario diario son los errores más comunes. Revisa cada uno con nuestra calculadora de finiquito, que aplica automáticamente la regla según el motivo de separación y tu zona salarial.

## Prima de antigüedad y planes de pensiones de la empresa

Algunas empresas tienen planes privados de pensiones o de jubilación que incluyen la prima de antigüedad, o que la sustituyen por un beneficio mayor. La ley permite que el plan de la empresa otorgue más, nunca menos. Si tu empresa tiene un plan así, pide las reglas por escrito y compara el beneficio con el cálculo legal: tienes derecho a lo que resulte más favorable.

## Cómo comprobar tu antigüedad

La fecha de ingreso que cuenta es la del inicio real de la relación laboral, no necesariamente la del alta en el IMSS si te registraron tarde. Si tu antigüedad está mal registrada, reúne pruebas como recibos de pago antiguos, gafetes, correos o testigos. La constancia anual de antigüedad que el patrón debe entregarte es otra prueba útil.`,
  examples: [
    {
      title: 'Despido con salario debajo del tope',
      scenario: 'Sueldo de $15,000 mensuales, 5.42 años de servicio, despido.',
      inputs: { 'Salario diario': '$500.00', 'Tope 2026': '$630.08' },
      breakdown: [
        { item: '12 días × 5.42 años', amount: '65.06 días' },
        { item: '× $500.00', amount: '$32,531.51' },
      ],
      total: '$32,531.51',
    },
    {
      title: 'Renuncia con 16.68 años',
      scenario: 'Sueldo de $18,000 mensuales; renuncia voluntaria con más de 15 años.',
      inputs: { 'Salario diario': '$600.00', 'Antigüedad': '16.68 años' },
      breakdown: [
        { item: '12 días × 16.68 años', amount: '200.19 días' },
        { item: '× $600.00', amount: '$120,111.78' },
      ],
      total: '$120,111.78 (exenta de ISR)',
    },
  ],
  faqs: [
    { q: '¿Cuántos días de prima de antigüedad me tocan por año?', a: '12 días de salario por cada año de servicio, incluidas las fracciones.' },
    { q: '¿Cuál es el tope de salario en 2026?', a: 'Dos salarios mínimos: $630.08 en la zona general y $881.74 en la frontera norte.' },
    { q: '¿Me pagan prima de antigüedad si renuncio?', a: 'Solo si tienes 15 años de servicio o más.' },
    { q: '¿Se paga en un despido justificado?', a: 'Sí. El art. 162 fr. III la concede independientemente de la justificación del despido.' },
    { q: '¿La prima de antigüedad paga ISR?', a: 'Está exenta hasta 90 UMA por año de servicio; normalmente queda exenta por completo.' },
    { q: '¿Qué pasa si el trabajador fallece?', a: 'Se paga a sus beneficiarios, sin importar la antigüedad.' },
    { q: '¿Se usa el salario integrado?', a: 'No. Se usa el salario diario con tope de dos salarios mínimos.' },
    { q: '¿Se cuentan las fracciones de año?', a: 'Sí, se paga de forma proporcional a la fracción trabajada.' },
  ],
  sources: [
    { label: 'Ley Federal del Trabajo, arts. 162, 485 y 486', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf' },
    { label: 'CONASAMI — Salarios mínimos 2026', url: 'https://www.gob.mx/conasami' },
    { label: 'Ley del ISR, art. 93 fr. XIII', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito', path: '/mx/calculadora-finiquito/', description: 'Incluye prima de antigüedad.' },
    { title: 'Finiquito por Renuncia Voluntaria', path: '/mx/calculadora-finiquito/renuncia-voluntaria/', description: 'Con y sin 15 años.' },
  ],
  relatedGuides: [
    { title: 'Salario mínimo 2026', path: '/mx/salario-minimo/', description: 'Base del tope.' },
    { title: 'Despido injustificado: qué hacer', path: '/mx/guias/despido-injustificado-que-hacer/', description: 'Plazos para reclamar.' },
  ],
  updatedAt: '2026-11-14',
};
