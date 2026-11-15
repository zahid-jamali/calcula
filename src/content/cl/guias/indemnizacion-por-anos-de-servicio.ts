import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Indemnización por Años de Servicio Chile: Guía 2026',
  metaDescription:
    'Aprende cómo funciona la indemnización legal por años de servicio en Chile: regla de 1 mes por año, tope de 11 años, límite de 90 UF y causales aplicables.',
  h1: 'Indemnización por Años de Servicio en Chile: Reglas, Topes y Cálculo',
  quickAnswer:
    'La indemnización por años de servicio en Chile otorga un mes de remuneración por cada año completo de trabajo (o fracción superior a 6 meses), con un tope máximo legal de 11 años (330 días de sueldo) y un límite de remuneración mensual fijado en 90 Unidades de Fomento (UF).',
  howItWorks: [
    {
      step: 1,
      title: 'Verificar la Causal de Término',
      description: 'Aplica principalmente cuando el contrato finaliza por necesidades de la empresa, establecimiento o servicio (Art. 161 inc. 1º del Código del Trabajo).',
      legalArticle: 'Art. 161 y 163 del Código del Trabajo',
    },
    {
      step: 2,
      title: 'Computar la Antigüedad Laboral',
      description: 'Se cuenta 1 mes de sueldo por cada año completo de servicio continuo. Si tras el último año completo existe una fracción superior a 6 meses, se cuenta como un año completo adicional.',
      formula: 'Años = Años_Completos + (Fracción > 6 meses ? 1 : 0)',
    },
    {
      step: 3,
      title: 'Aplicar el Tope de Remuneración de 90 UF',
      description: 'La base mensual de cálculo incluye sueldo base, gratificación y comisiones, pero nunca puede superar el equivalente a 90 UF al momento del cese.',
      legalArticle: 'Art. 172 del Código del Trabajo',
    },
    {
      step: 4,
      title: 'Aplicar el Tope de 11 Años',
      description: 'El número máximo de años indemnizables por ley es de 11 años (salvo contratos anteriores a agosto de 1981 o pactos colectivos más favorables).',
    },
  ],
  article: `## Fundamento de la indemnización por años de servicio en Chile

La **indemnización por años de servicio** está regulada en los artículos 163 y siguientes del Código del Trabajo de Chile. Se trata de un derecho laboral irrenunciable de carácter resarcitorio que tiene como finalidad compensar al trabajador por la pérdida involuntaria de su fuente de trabajo, reconociendo la lealtad y el esfuerzo continuado dedicado a la empresa a lo largo de los años.

Esta prestación opera de forma obligatoria cuando el contrato de trabajo de plazo indefinido termina por causas no imputables a la conducta del trabajador, principalmente por la causal de **necesidades de la empresa, establecimiento o servicio (Artículo 161, inciso 1º)**, por desahucio escrito del empleador o en casos de liquidación concursal (quiebra) de la empresa.

---

## Regla de cómputo: un mes por año y fracción superior a seis meses

La norma legal estipula que el empleador debe pagar el equivalente a **un mes de la última remuneración mensual devengada por cada año de servicio continuo** prestado en la misma empresa.

Para determinar el número de años computables, la ley incorpora una regla muy favorable:
- Si tras completar uno o más años completos de servicio existe una **fracción de tiempo superior a seis meses**, dicha fracción se computa legalmente como si fuera un año completo adicional.
- Por ejemplo, un trabajador con 3 años y 7 meses de servicio continuo tendrá derecho a percibir **4 meses de sueldo** por concepto de indemnización por años de servicio.
- Por el contrario, si la antigüedad registra 3 años y 5 meses, la fracción no alcanza a superar los seis meses, por lo que solo se liquidarán **3 meses de sueldo**.
- Se requiere haber cumplido al menos un año continuo en la empresa para generar el derecho inicial a esta indemnización.

---

## ¿Qué conceptos integran la "última remuneración mensual"?

De acuerdo con el artículo 172 del Código del Trabajo, la remuneración base para liquidar la indemnización comprende:
1. **Sueldo base pactado:** Monto fijo contractual mensual.
2. **Gratificación legal:** Ya sea que se pague mensualmente (modalidad del artículo 50) o anualmente mediante reparto de utilidades.
3. **Comisiones y bonos de producción habituales:** Se promedian los montos variables percibidos en los últimos tres meses calendarios trabajados.
4. **Regalías en especies:** Avaluadas en dinero en el contrato de trabajo.

**Se excluyen expresamente por ley:**
- Asignación de colación y movilización (por ser haberes no imponibles).
- Viáticos de traslado y asignaciones familiares.
- Horas extraordinarias y beneficios de carácter voluntario u ocasional.

---

## El doble límite legal: tope de 11 años y tope de 90 UF

El Código del Trabajo impone dos restricciones cuantitativas al monto de la indemnización legal:

### 1. El tope máximo de 11 años de servicio
Para contratos suscritos con posterioridad al 14 de agosto de 1981, el artículo 163 establece un **límite máximo legal de 11 años de indemnización (equivalente a 330 días de remuneración)**. Aunque el trabajador acumule 15, 20 o más años de lealtad en la compañía, la ley solo obliga a pagar hasta 11 meses de sueldo, salvo que el contrato individual o un convenio colectivo estipule indemnización a todo evento o sin límite de años.

### 2. El tope de 90 Unidades de Fomento (Art. 172)
Ninguna de las mensualidades de indemnización puede superar el equivalente en pesos de **90 Unidades de Fomento (UF)** a la fecha del despido (aproximadamente $3,7 millones de pesos en 2026). Si un ejecutivo percibe $6.000.000 mensuales, cada mes de indemnización se pagará topado a 90 UF.

---

## El descuento del aporte patronal de la AFC (Artículo 13 de la Ley 19.728)

En despidos bajo la causal de necesidades de la empresa, el empleador está legalmente facultado para imputar (descontar) de la indemnización por años de servicio el monto total de sus aportes efectivos del 1,6% efectuados a la Cuenta Individual de Cesantía (CIC) del trabajador en la AFC, junto con la rentabilidad devengada. Este descuento reduce el pago directo que recibe el trabajador en el finiquito, el cual podrá retirar posteriormente como Seguro de Cesantía en la AFC.

---

## Tratamiento tributario y exención de impuestos

Un aspecto sumamente favorable para el trabajador desvinculado es que la indemnización legal por años de servicio, así como la indemnización sustitutiva del aviso previo, **se encuentran totalmente exentas de impuesto a la renta y de descuentos previsionales de AFP o salud**, siempre que se ajusten a los montos y topes estrictamente fijados por la ley. Solamente en aquellos casos excepcionales en que el empleador pacte voluntariamente una indemnización convencional superior a la legal (por ejemplo, sin tope de 11 años o por sobre las 90 UF), el exceso sobre el límite legal quedará afecto a la tributación general de la Ley sobre Impuesto a la Renta.

---

## Demandas por despido injustificado y recargo del 30%

Si el trabajador considera que las supuestas necesidades de la empresa son falsas, arbitrarias o injustificadas, puede acudir a los Juzgados de Letras del Trabajo. Si el juez acoge la demanda y declara improcedente el despido, condenará al empleador al pago de un **recargo legal del 30%** sobre el monto de la indemnización por años de servicio, además de ordenar la restitución de los descuentos indebidos de la AFC.`,
  examples: [
    {
      title: 'Trabajador con 4 años y 8 meses de servicio',
      scenario: 'Remuneración de $850.000. La fracción de 8 meses supera los 6 meses, por lo que suma un año extra.',
      inputs: {
        'Antigüedad': '4 años y 8 meses',
        'Última remuneración': '$850.000',
      },
      breakdown: [
        { item: 'Años computables', amount: '5 años (4 años + 1 año por fracción > 6 meses)' },
        { item: 'Cálculo', amount: '5 × $850.000', note: 'Sin tope de 90 UF por no excederlo' },
      ],
      total: '$4.250.000 CLP de indemnización por años de servicio',
    },
    {
      title: 'Trabajador con 14 años de servicio',
      scenario: 'Remuneración de $1.200.000. Aplica el tope legal de 11 años.',
      inputs: {
        'Antigüedad real': '14 años continuos',
        'Última remuneración': '$1.200.000',
      },
      breakdown: [
        { item: 'Años computables', amount: '11 años (Tope máximo legal Art. 163)' },
        { item: 'Cálculo', amount: '11 × $1.200.000' },
      ],
      total: '$13.200.000 CLP de indemnización legal',
    },
  ],
  faqs: [
    { q: '¿Qué pasa si tengo más de 11 años de antigüedad?', a: 'Por ley el empleador solo está obligado a pagar hasta 11 años, a menos que tu contrato individual o el convenio colectivo de la empresa elimine el tope.' },
    { q: '¿La indemnización paga impuesto a la renta?', a: 'No. La indemnización legal por años de servicio hasta el tope legal está totalmente exenta de Impuesto Único de Segunda Categoría.' },
    { q: '¿Qué es la fracción superior a seis meses?', a: 'Si tienes 2 años y 7 meses, la ley te reconoce 3 años de indemnización. Si tienes 2 años y 5 meses, solo te reconoce 2 años.' },
    { q: '¿El empleador puede pagar la indemnización en cuotas?', a: 'Solo si el trabajador lo consiente expresamente por escrito en el finiquito, pactando intereses y reajustes conforme al Art. 169 letra a) del Código del Trabajo.' },
    { q: '¿Qué ocurre si demando por despido injustificado?', a: 'Si el tribunal declara improcedente el despido por necesidades de la empresa, ordenará un recargo legal del 30% sobre el monto de la indemnización por años de servicio.' },
    { q: '¿Qué es el descuento de la AFC (aporte patronal)?', a: 'El artículo 13 de la Ley 19.728 permite al empleador descontar de la indemnización por años de servicio la suma de sus aportes efectivos al Seguro de Cesantía (1,6%), debidamente reajustados.' },
    { q: '¿Corresponde indemnización por renuncia?', a: 'No, la ley no otorga indemnización por años de servicio en caso de renuncia voluntaria del trabajador.' },
    { q: '¿Aplica el tope de 90 UF a la indemnización sustitutiva de aviso previo?', a: 'Sí, la jurisprudencia y la Dirección del Trabajo establecen que el tope de 90 UF del artículo 172 aplica tanto a los años de servicio como al aviso previo.' },
  ],
  sources: [
    { label: 'Dirección del Trabajo de Chile: Indemnización legal por años de servicio', url: 'https://www.dt.gob.cl' },
    { label: 'Código del Trabajo de Chile: Artículos 163 y 172', url: 'https://www.leychile.cl' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito Chile', path: '/cl/calculadora-finiquito/', description: 'Simula tus años de servicio y cálculo de finiquito completo.' },
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Comprueba el valor de la UF para revisar el tope de 90 UF.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Conoce tu remuneración líquida y base imponible.' },
  ],
  relatedGuides: [
    { title: 'Cómo Calcular el Finiquito', path: '/cl/guias/como-calcular-el-finiquito/', description: 'Guía paso a paso para calcular todos los ítems de tu liquidación final.' },
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Comprende el impacto de la Unidad de Fomento en contratos y topes legales.' },
  ],
  updatedAt: '2026-03-01',
};
