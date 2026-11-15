import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Qué es la UF y Cómo se Calcula en Chile 2026',
  metaDescription:
    'Guía completa sobre la Unidad de Fomento (UF) en Chile: origen histórico, fórmula de cálculo diario según IPC, usos en créditos, arriendos y salud.',
  h1: 'Qué es la UF y Cómo se Calcula: Guía Completa de la Unidad de Fomento',
  quickAnswer:
    'La Unidad de Fomento (UF) es una unidad financiera no circulante en Chile que se reajusta a diario conforme a la variación del Índice de Precios al Consumidor (IPC). Protege los ahorros, préstamos hipotecarios y arriendos contra la pérdida de valor por inflación.',
  howItWorks: [
    {
      step: 1,
      title: 'Publicación del IPC por el INE',
      description: 'El INE calcula y publica la inflación del mes anterior durante los primeros días de cada mes.',
    },
    {
      step: 2,
      title: 'Fórmula geométrica del Banco Central',
      description: 'El Banco Central distribuye uniformemente la variación del IPC entre el día 10 del mes y el 9 del siguiente.',
      formula: 'Factor_diario = (1 + IPC)^(1 / n_dias)',
    },
    {
      step: 3,
      title: 'Aplicación en transacciones financieras',
      description: 'Cualquier contrato pactado en UF se multiplica por el valor del día para obtener el importe en pesos.',
    },
  ],
  article: `## Origen histórico y propósito de la Unidad de Fomento en Chile

La **Unidad de Fomento (UF)** constituye una de las innovaciones financieras más trascendentes en la historia económica de Chile. Creada formalmente el 20 de enero de 1967 bajo la presidencia de Eduardo Frei Montalva mediante el Decreto con Fuerza de Ley Nº 40, surgió como una respuesta estructural a las persistentes y elevadas tasas de inflación que afectaron a la economía chilena durante gran parte del siglo XX.

En aquel escenario inflacionario, el valor del dinero se depreciaba aceleradamente mes a mes. Esta situación desincentivaba de forma crítica el ahorro voluntario en las instituciones bancarias y hacía inviable la concesión de créditos a largo plazo, ya que cualquier préstamo concedido en pesos fijos retornaba al cabo de unos pocos años con un valor real prácticamente pulverizado.

Para superar este dilema, el Estado chileno ideó una unidad de cuenta monetaria no circulante (sin monedas ni billetes físicos) cuyo valor en moneda de curso legal se reajustara de manera sistemática y continua de acuerdo con la inflación efectiva, manteniendo constante el poder adquisitivo real de las obligaciones y capitales a través del tiempo.

---

## La fórmula matemática y el ciclo de cálculo del Banco Central

El cálculo y la oficialización diaria de la Unidad de Fomento recaen por mandato legal en el **Banco Central de Chile**, de conformidad con las disposiciones de su Ley Orgánica Constitucional (Ley Nº 18.840).

El procedimiento de actualización diaria de la UF sigue una metodología matemática rigurosa basada en el **Índice de Precios al Consumidor (IPC)** que elabora el Instituto Nacional de Estadísticas (INE):
1. **Publicación del IPC mensual:** En los primeros días de cada mes calendario, el INE entrega la cifra oficial de variación de precios experimentada en el mes inmediatamente anterior.
2. **Distribución geométrica diaria:** Con dicha cifra en mano, el Banco Central determina la tasa de variación geométrica diaria que se aplicará durante el ciclo correspondiente, de modo que al completar el período, el valor de la UF haya variado exactamente en el mismo porcentaje que el IPC mensual.
3. **Fórmula de cálculo diario:**
   $UF_t = UF_{t-1} \times (1 + IPC)^{1/n}$
   donde $n$ representa la cantidad de días corridos que integran el período de ajuste mensual.

---

## El calendario de vigencia: del 10 al 9 de cada mes

Una característica esencial que todo ciudadano debe conocer sobre la UF es su calendario de ajuste desfasado:
- El valor calculado a partir de la inflación de un determinado mes no rige del 1 al 30 del mes siguiente, sino que **comienza a aplicarse el día 10 del mes en curso y finaliza el día 9 del mes siguiente**.
- Por ejemplo, el IPC registrado en el mes de marzo (publicado a inicios de abril) se utiliza para reajustar los valores diarios de la UF comprendidos entre el **10 de abril y el 9 de mayo**.
- Esta regla otorga una enorme ventaja de transparencia y certidumbre: los valores diarios de la UF se publican con semanas de antelación en el Diario Oficial y en el sitio web del Banco Central, permitiendo a cualquier deudor o acreedor conocer con exactitud matemática el monto en pesos que deberá pagar en la fecha convenida.

---

## Usos cotidianos de la UF en las finanzas personales chilenas

La presencia de la UF en Chile se manifiesta en las decisiones financieras más trascendentales de las personas:

1. **Financiamiento hipotecario:** El mercado de créditos para la compra de viviendas en Chile está denominado prácticamente en su totalidad en UF, permitiendo a los bancos ofrecer préstamos a 20 o 30 años con tasas de interés reales muy estables.
2. **Contratos de arriendo:** Tanto en departamentos y casas como en locales comerciales, es habitual fijar el arriendo mensual en UF para proteger la rentabilidad del inmueble frente a la inflación.
3. **Planes de salud en Isapres:** Los planes complementarios de salud privada se expresan en UF, ajustándose mensualmente en moneda nacional.
4. **Seguros y deducibles:** Las coberturas de seguros de vida, sismo, incendio y deducibles de autos están fijadas en UF.
5. **Topes legales de cotización previsional:** La Superintendencia de Pensiones establece los límites máximos para cotizaciones obligatorias en AFP y Fonasa en 85,6 UF mensuales.

---

## Mitos y realidades: ¿puede bajar la Unidad de Fomento?

A menudo se asume erróneamente que la UF solo sube. Sin embargo, en aquellos períodos en que la economía chilena registra una variación negativa en el IPC (deflación de precios), **el valor de la UF desciende diariamente** a lo largo de todo el ciclo mensual respectivo.

Durante estos meses de deflación, los dividendos hipotecarios, los arriendos pactados en UF y los planes médicos de Isapre experimentan una rebaja efectiva en pesos chilenos, lo que representa un alivio directo para el presupuesto de los hogares deudores.

---

## Consejos para gestionar compromisos pactados en UF

- **Planifica tus pagos bancarios:** Revisa siempre con anticipación en nuestra herramienta el valor oficial que tendrá la UF el día de vencimiento de tu dividendo o arriendo.
- **Comprueba el reajuste anual:** Ten presente que una inflación anual esperada del 3,5% implicará que tus obligaciones en UF aumentarán en esa misma proporción en pesos al cabo de 12 meses.
- **Exige valores oficiales:** Asegúrate de que las instituciones financieras y arrendadores apliquen estrictamente el valor del Banco Central sin recargos arbitrarios.`,
  examples: [
    {
      title: 'Cálculo de dividendo hipotecario',
      scenario: 'Crédito con dividendo mensual de 12 UF y valor UF de $41.330.',
      inputs: { 'Dividendo': '12 UF', 'UF hoy': '$41.330' },
      breakdown: [{ item: 'Operación', amount: '12 × $41.330', note: 'Multiplicación directa' }],
      total: '$495.960 CLP pagados en el banco',
    },
    {
      title: 'Plan de Isapre pactado en UF',
      scenario: 'Plan de salud de 3,2 UF con UF de $41.250.',
      inputs: { 'Plan Isapre': '3,2 UF', 'UF': '$41.250' },
      breakdown: [{ item: 'Cálculo', amount: '3,2 × $41.250' }],
      total: '$132.000 CLP de cotización de salud',
    },
  ],
  faqs: [
    { q: '¿La UF existe en forma física?', a: 'No. La UF es exclusivamente una unidad de cuenta monetaria y no existen billetes ni monedas de UF.' },
    { q: '¿Quién fija oficialmente el valor de la UF?', a: 'El Banco Central de Chile calcula y publica diariamente su valor oficial.' },
    { q: '¿Puede bajar la UF?', a: 'Sí, siempre que el IPC mensual del INE sea negativo.' },
    { q: '¿Por qué la UF no se reemplaza por pesos fijos?', a: 'Porque otorga certidumbre financiera a 20 o 30 años, permitiendo que Chile cuente con uno de los mercados de crédito hipotecario a más largo plazo de América Latina.' },
    { q: '¿Cuál es la diferencia entre la UF y la UTM?', a: 'La UF cambia diariamente y se usa en finanzas privadas; la UTM cambia mensualmente y se usa en impuestos y multas.' },
    { q: '¿Cómo afecta la UF mi contrato de trabajo?', a: 'Determina los topes imponibles de cotizaciones de AFP y de planes de Isapre.' },
    { q: '¿Es legal pagar el arriendo en UF?', a: 'Sí, está plenamente respaldado por la Ley Nº 18.101.' },
    { q: '¿Dónde puedo ver los valores proyectados de los próximos días?', a: 'En nuestra herramienta "Valor UF Hoy", donde se publican con anticipación los valores autorizados por el Banco Central.' },
  ],
  sources: [
    { label: 'Banco Central de Chile: Definición y Metodología de la UF', url: 'https://www.bcentral.cl' },
    { label: 'Decreto con Fuerza de Ley Nº 40 de 1967', url: 'https://www.leychile.cl' },
  ],
  relatedTools: [
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor actualizado hoy, conversor y gráfico de 30 días.' },
    { title: 'Simulador de Crédito Hipotecario', path: '/cl/simulador-credito-hipotecario/', description: 'Simula dividendos mensuales en UF y pesos.' },
    { title: 'Calculadora de Arriendo en UF', path: '/cl/calculadora-arriendo-uf/', description: 'Convierte tu arriendo mensual a pesos chilenos.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UTM', path: '/cl/guias/que-es-la-utm/', description: 'Aprende qué es la Unidad Tributaria Mensual y para qué sirve.' },
    { title: 'De Sueldo Bruto a Líquido en Chile', path: '/cl/guias/de-sueldo-bruto-a-liquido/', description: 'Aprende a calcular los descuentos previsionales e impuestos en tu sueldo.' },
  ],
  updatedAt: '2026-03-01',
};
