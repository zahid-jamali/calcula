import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Valor UF Hoy en Chile 2026: Conversor y Gráfico Oficial',
  metaDescription:
    'Consulta el valor de la UF hoy en Chile actualizado con datos del Banco Central. Conversor UF a pesos chilenos (CLP), gráfico 30 días y valores futuros.',
  h1: 'Valor UF Hoy en Chile: Conversor a Pesos y Gráfico Histórico',
  quickAnswer:
    'El valor de la UF hoy en Chile se actualiza diariamente según la variación del Índice de Precios al Consumidor (IPC). Se utiliza para créditos hipotecarios, contratos de arriendo, planes de salud y seguros, protegiendo los montos del poder adquisitivo frente a la inflación.',
  howItWorks: [
    {
      step: 1,
      title: 'Publicación del IPC mensual',
      description:
        'El Instituto Nacional de Estadísticas (INE) publica la inflación del mes anterior durante los primeros días hábiles de cada mes.',
    },
    {
      step: 2,
      title: 'Cálculo del factor diario por el Banco Central',
      description:
        'El Banco Central de Chile calcula la variación geométrica diaria que regirá entre el día 10 del mes en curso y el 9 del mes siguiente.',
      formula: 'Factor = (1 + IPC)^(1 / días_período)',
    },
    {
      step: 3,
      title: 'Conversión a pesos chilenos (CLP)',
      description:
        'Para saber el valor en pesos de cualquier obligación pactada en UF, se multiplica el monto en UF por el valor diario oficial.',
      formula: 'Pesos = Monto_UF × Valor_UF_del_día',
    },
  ],
  article: `## ¿Qué es la Unidad de Fomento (UF) en Chile?

La **Unidad de Fomento (UF)** es una unidad de cuenta monetaria no circulante, reajustable según la inflación, creada en Chile en 1967 mediante el Decreto con Fuerza de Ley Nº 40. Aunque no existen billetes físicos de UF, se trata del instrumento financiero y contractual más relevante del país para resguardar compromisos económicos de mediano y largo plazo.

El propósito fundamental de su creación fue resolver el grave problema económico originado por los elevados niveles de inflación de la época, los cuales desincentivaban el ahorro y hacían inviable el otorgamiento de créditos hipotecarios a largo plazo. Al indexar los contratos a la UF, el sistema financiero garantiza que una deuda o un ahorro conserve exactamente el mismo poder de compra real a través de los años, independientemente del alza en el costo de la vida.

---

## Metodología y fórmula oficial de cálculo del Banco Central

El valor de la Unidad de Fomento es determinado y publicado diariamente por el **Banco Central de Chile**, conforme a las facultades que le confiere su Ley Orgánica Constitucional (Ley Nº 18.840).

El cálculo diario de la UF se fundamenta en la variación mensual del **Índice de Precios al Consumidor (IPC)**, elaborado por el Instituto Nacional de Estadísticas (INE):
1. **Publicación del IPC mensual:** Durante los primeros días hábiles de cada mes, el INE difunde la cifra de inflación del mes inmediatamente anterior.
2. **Distribución geométrica diaria:** El Banco Central calcula la tasa de variación diaria requerida para que, a lo largo de un ciclo mensual completo, la UF aumente o disminuya en el porcentaje del IPC respectivo.
3. **Fórmula matemática diaria:** La fórmula que rige cada jornada es:
   $UF_t = UF_{t-1} \times (1 + IPC)^{1/n}$
   donde $UF_t$ es el valor del día, $UF_{t-1}$ el del día anterior, $IPC$ la variación mensual de precios, y $n$ el número de días corridos que integran el período de vigencia.

---

## El ciclo mensual de la UF: del 10 al 9 del mes siguiente

Los valores diarios de la UF operan bajo un ciclo que **inicia el día 10 del mes en curso y concluye el día 9 del mes subsiguiente**.

Por ejemplo, la inflación informada a inicios de febrero determina los valores diarios de la UF desde el 10 de febrero hasta el 9 de marzo. Esta estructura confiere certeza y previsibilidad absoluta: **todos los valores diarios se conocen con semanas de anticipación**. Tanto las personas como las empresas pueden saber con exactitud cuánto deberán pagar al vencimiento de un dividendo hipotecario, arriendo o factura, facilitando una ordenada planificación presupuestaria familiar y empresarial sin sobresaltos imprevistos.

---

## Usos principales de la Unidad de Fomento en la economía chilena

La UF se aplica en las transacciones más significativas de la economía nacional:

1. **Créditos hipotecarios:** Casi la totalidad de los préstamos bancarios para adquirir viviendas se pactan en UF a 15, 20, 25 o 30 años, manteniendo el valor real del capital prestado.
2. **Contratos de arriendo:** Arrendadores y arrendatarios habitacionales y comerciales fijan el canon mensual en UF, asegurando que el ingreso mantenga su poder adquisitivo mes a mes.
3. **Planes de salud en Isapres:** Los planes complementarios de salud privada se cotizan formalmente en UF, reajustándose mensualmente en moneda nacional.
4. **Pólizas de seguro:** Seguros de vida, de hogar, contra sismos y de vehículos expresan primas, coberturas y deducibles en UF.
5. **Topes imponibles previsionales:** La Superintendencia de Pensiones fija los límites máximos para cotizar en AFP y salud en 85,6 UF, y en 128,4 UF para el Seguro de Cesantía.

---

## Diferencias fundamentales entre la UF y la UTM

Aunque ambas unidades están indexadas a la inflación, cumplen finalidades distintas:
- **Periodicidad:** La UF cambia a diario, mientras que la Unidad Tributaria Mensual (UTM) conserva un valor constante durante todo el mes calendario.
- **Ámbito:** La UF rige en el mercado financiero e inmobiliario privado (créditos, arriendos, seguros). La UTM se reserva para materias públicas, fiscales y judiciales (tramos del impuesto a la renta, multas de tránsito y aranceles).
- **Emisor:** La UF es calculada por el Banco Central; la UTM es oficializada por el Servicio de Impuestos Internos (SII).

---

## ¿Qué ocurre cuando hay deflación en Chile?

Cuando el IPC mensual es negativo (deflación), **el valor de la UF disminuye diariamente** durante todo el ciclo mensual correspondiente. En tales períodos, los dividendos hipotecarios, los arriendos y los planes de Isapre se reducen en pesos chilenos, representando un alivio financiero directo para las familias deudoras o arrendatarias en todo Chile.

---

## Recomendaciones para pagar compromisos en UF

- **Verifica la fecha exacta:** Aplica siempre la UF correspondiente al día pactado para el pago en el contrato respectivo.
- **Consulta fuentes oficiales:** Utiliza nuestra herramienta conectada a datos del Banco Central para evitar cobros con aproximaciones indebidas.
- **Presupuesta el efecto inflación:** Con una inflación anual del 3% al 4%, proyecta que tus obligaciones en UF aumentarán en esa misma proporción nominal a lo largo de un año.`,
  examples: [
    {
      title: 'Pago mensual de un crédito hipotecario',
      scenario: 'Dividendo hipotecario pactado en 14,5 UF con valor UF de $41.330.',
      inputs: {
        'Dividendo en UF': '14,5 UF',
        'Valor UF hoy': '$41.330',
      },
      breakdown: [
        { item: 'Monto pactado', amount: '14,5 UF' },
        { item: 'Cálculo', amount: '14,5 × $41.330', note: 'Multiplicación directa' },
      ],
      total: '$599.285 CLP a pagar en el banco',
    },
    {
      title: 'Canon de arriendo departamento',
      scenario: 'Arriendo fijado en 12 UF al día 5 del mes.',
      inputs: {
        'Arriendo mensual': '12 UF',
        'Valor UF al día 5': '$41.250',
      },
      breakdown: [
        { item: 'Canon UF', amount: '12 UF' },
        { item: 'Conversión', amount: '12 × $41.250', note: 'Valor exacto del día de pago' },
      ],
      total: '$495.000 CLP transferidos al propietario',
    },
  ],
  faqs: [
    {
      q: '¿Dónde se publica oficialmente el valor de la UF?',
      a: 'El valor oficial es calculado y publicado diariamente por el Banco Central de Chile en su sitio web institucional y en el Diario Oficial de la República.',
    },
    {
      q: '¿Por qué se conocen los valores de la UF con semanas de anticipación?',
      a: 'Porque una vez que el INE publica el IPC del mes anterior, el Banco Central fija por adelantado todos los valores diarios desde el día 10 del mes en curso hasta el día 9 del mes siguiente.',
    },
    {
      q: '¿La UF puede bajar?',
      a: 'Sí. Cuando el IPC mensual del INE es negativo (deflación), el valor de la UF disminuye diariamente durante todo el período de ajuste correspondiente.',
    },
    {
      q: '¿Cuál es la diferencia entre la UF y la UTM?',
      a: 'La UF cambia todos los días y se usa en el sector financiero y privado (créditos, arriendos). La UTM (Unidad Tributaria Mensual) cambia solo una vez al mes y se usa para impuestos, multas y trámites fiscales.',
    },
    {
      q: '¿Cómo afecta la UF a mi sueldo?',
      a: 'Afecta los topes imponibles previsionales de AFP y salud (85,6 UF) y el valor de los planes de Isapre pactados en UF, los cuales aumentan en pesos cada mes.',
    },
    {
      q: '¿Es legal cobrar el arriendo en UF en Chile?',
      a: 'Sí, la legislación chilena permite válidamente pactar contratos de arrendamiento en UF, en moneda extranjera o en pesos reajustables según la voluntad de las partes.',
    },
    {
      q: '¿Qué día de la UF se debe aplicar para pagar una cuenta?',
      a: 'La ley y la jurisprudencia establecen que se debe aplicar el valor de la UF correspondiente a la fecha efectiva de pago o vencimiento estipulada en el contrato respectivo.',
    },
    {
      q: '¿Por qué los créditos hipotecarios están en UF?',
      a: 'Porque al ser préstamos a 20 o 30 años, la UF asegura al banco que el capital prestado no perderá valor real frente a la inflación acumulada a lo largo de las décadas.',
    },
  ],
  sources: [
    { label: 'Banco Central de Chile: Base de Datos Estadísticos e Indicadores', url: 'https://www.bcentral.cl' },
    { label: 'Mindicador.cl: API pública de indicadores económicos oficiales de Chile', url: 'https://mindicador.cl' },
    { label: 'Instituto Nacional de Estadísticas (INE): Índice de Precios al Consumidor', url: 'https://www.ine.gob.cl' },
  ],
  relatedTools: [
    { title: 'Valor UTM 2026', path: '/cl/valor-utm/', description: 'Tabla mensual de la UTM y conversor a pesos chilenos.' },
    { title: 'Calculadora de Arriendo en UF', path: '/cl/calculadora-arriendo-uf/', description: 'Simula el pago mensual de arriendo y su evolución en 12 meses.' },
    { title: 'Simulador de Crédito Hipotecario', path: '/cl/simulador-credito-hipotecario/', description: 'Calcula tu dividendo en UF y pesos a 15, 20, 25 o 30 años.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Guía completa sobre la historia, fórmula y usos de la Unidad de Fomento.' },
    { title: 'Qué es la UTM', path: '/cl/guias/que-es-la-utm/', description: 'Conoce para qué sirve la Unidad Tributaria Mensual y cómo impacta tus impuestos.' },
  ],
  updatedAt: '2026-03-01',
};
