import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Valor UTM 2026 Chile: Tabla Mensual y Conversor Oficial',
  metaDescription:
    'Consulta el valor actualizado de la UTM en Chile para 2026. Tabla mensual del SII, conversor a pesos chilenos (CLP), valor de la UTA y multas de tránsito.',
  h1: 'Valor UTM 2026 en Chile: Tabla Mensual y Conversor a Pesos',
  quickAnswer:
    'La Unidad Tributaria Mensual (UTM) es una medida económica fijada por ley en Chile que se reajusta mensualmente según el IPC. Se utiliza para determinar los tramos del Impuesto Único de Segunda Categoría, multas de juzgados de policía local, aranceles fiscales y derechos municipales.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinación mensual por el SII',
      description:
        'El Servicio de Impuestos Internos (SII) publica el valor oficial de la UTM aplicable para cada mes del año calendario.',
    },
    {
      step: 2,
      title: 'Reajuste por inflación (IPC)',
      description:
        'El valor varía mensualmente considerando la variación experimentada por el IPC en el penúltimo mes anterior.',
      formula: 'UTM_mes = UTM_mes_anterior × (1 + IPC_penultimo_mes)',
    },
    {
      step: 3,
      title: 'Cálculo de la UTA (Unidad Tributaria Anual)',
      description:
        'La UTA corresponde al valor de la UTM del mes multiplicado por 12, empleada en balances y declaraciones anuales de renta.',
      formula: 'UTA = UTM × 12',
    },
  ],
  article: `## ¿Qué es la Unidad Tributaria Mensual (UTM) en Chile?

La **Unidad Tributaria Mensual (UTM)** es una unidad económica de referencia creada en Chile por el Decreto Ley Nº 830 de 1974 (Código Tributario), en su artículo 8º. Su propósito fundamental es servir como instrumento de indexación y reajustabilidad para mantener constante el valor real de las obligaciones tributarias, sanciones administrativas, aranceles públicos y multas judiciales frente a los efectos acumulados de la inflación.

A diferencia del peso chileno, cuyo poder de compra disminuye con el aumento general de los precios, la UTM se reajusta periódicamente sobre la base del **Índice de Precios al Consumidor (IPC)** elaborado por el Instituto Nacional de Estadísticas (INE). De esta forma, el Estado asegura que las sanciones mantengan su carácter disuasivo y que los tramos impositivos no castiguen injustamente a los contribuyentes.

Una particularidad esencial de la UTM es que **mantiene un valor fijo e invariable durante todo el mes calendario**. A diferencia de la Unidad de Fomento (UF), que varía día a día, la UTM tiene una vigencia mensual continua desde el día 1 hasta el último día del mes respectivo, facilitando la contabilidad y las liquidaciones de sueldos.

---

## Cálculo oficial y reajuste mensual por el Servicio de Impuestos Internos

El valor oficial de la UTM es determinado y formalizado mensualmente por el **Servicio de Impuestos Internos (SII)**, organismo que publica la tabla oficial en su sitio web institucional y en el Diario Oficial.

La norma legal de reajuste establece que para fijar el valor de la UTM de un determinado mes, se toma el valor del mes anterior y se le aplica la variación porcentual del IPC del **penúltimo mes anterior**. Por ejemplo, para determinar la UTM de marzo se utiliza la inflación de enero; para la de abril, la de febrero, y así sucesivamente. Si la variación es positiva, la UTM sube; si es negativa (deflación), la ley contempla una reducción proporcional en moneda nacional.

---

## Principales usos de la UTM en la legislación chilena

La UTM cumple un rol estratégico en múltiples materias del ordenamiento legal:

### 1. Impuesto Único de Segunda Categoría (Sueldos)
La aplicación más directa de la UTM en los trabajadores dependientes se encuentra en la escala progresiva del **Impuesto Único de Segunda Categoría** de la Ley de la Renta:
- **Tramo Exento (hasta 13,5 UTM):** Las rentas tributables mensuales inferiores a 13,5 UTM están exentas de impuesto (tasa 0%). Con una UTM de aproximadamente $72.440 en 2026, el tramo exento protege sueldos líquidos de hasta cerca de $978.000 CLP.
- **Tramos gravados:** A partir de 13,5 UTM rigen tasas escalonadas del 4%, 8%, 13,5%, 23%, 30,4%, 35% y hasta el 40%, cada uno con una cantidad fija a rebajar fijada por el SII.

### 2. Multas de tránsito y Juzgados de Policía Local
Todas las sanciones de la Ley de Tránsito (Ley Nº 18.290) se fijan en UTM:
- **Gravísimas (1,5 a 3 UTM):** Cruzar con luz roja, manejar sin licencia u sobrepasar la velocidad en más de 20 km/h.
- **Graves (1 a 1,5 UTM):** Conducir sin revisión técnica, no usar cinturón o manipular el celular sin manos libres.
- **Menos Graves (0,5 a 1 UTM) y Leves (0,2 a 0,5 UTM):** Estacionar en sitios prohibidos y faltas reglamentarias menores.

### 3. Pensiones de alimentos en Tribunales de Familia
Los jueces de familia fijan frecuentemente las pensiones alimenticias en porcentajes de UTM. Esto asegura que la manutención de los hijos se reajuste de manera automática cada mes según la inflación, sin necesidad de trámites judiciales de reliquidación.

### 4. Patentes comerciales y aranceles notariales
Los derechos municipales por patentes de negocios y las tarifas de notarios y conservadores de bienes raíces están determinados en fracciones de UTM.

---

## Qué es la UTA (Unidad Tributaria Anual)

La **Unidad Tributaria Anual (UTA)** equivale exactamente al valor de la UTM de un determinado mes multiplicado por doce ($12 \times \text{UTM}$).

Se utiliza en el ámbito tributario y corporativo anual:
- En la declaración anual de renta (abril) para los tramos del **Impuesto Global Complementario**.
- Para definir los límites de ventas que permiten a las micro y pequeñas empresas ingresar al régimen tributario Pro Pyme.
- Para el cómputo de multas anuales impuestas por organismos fiscalizadores estatales.

---

## Comparativa resumida: UF frente a UTM

- **Frecuencia:** La UF cambia diariamente; la UTM cambia mensualmente el primer día del mes.
- **Ámbito:** La UF rige en finanzas privadas (créditos hipotecarios, arriendos, planes Isapre, seguros). La UTM rige en el ámbito público (impuestos a la renta, multas de tránsito, juzgados y aranceles).
- **Institución:** La UF depende del Banco Central; la UTM es formalizada por el Servicio de Impuestos Internos (SII).

---

## Consejos para los ciudadanos

1. **Revisa tu liquidación mensual:** Asegúrate de que el empleador aplique la UTM correcta del mes para la rebaja tributaria.
2. **Descuento en multas de tránsito:** La ley concede un 25% de rebaja en multas de tránsito si se pagan dentro de los primeros 5 días hábiles desde la notificación.
3. **Consulta valores oficiales:** Usa nuestra tabla mensual para conocer los valores vigentes e históricos de la UTM.`,
  examples: [
    {
      title: 'Multa de tránsito grave (1,5 UTM)',
      scenario: 'Infracción por circular sin revisión técnica con UTM de $72.440.',
      inputs: {
        'Monto de la infracción': '1,5 UTM',
        'Valor UTM del mes': '$72.440',
      },
      breakdown: [
        { item: 'Cálculo', amount: '1,5 × $72.440', note: 'Multiplicación directa' },
      ],
      total: '$108.660 CLP a pagar en la Tesorería Municipal',
    },
    {
      title: 'Tramo exento de Impuesto Único (13,5 UTM)',
      scenario: 'Límite de sueldo imponible libre de impuesto con UTM de $72.440.',
      inputs: {
        'Límite exento legal': '13,5 UTM',
        'Valor UTM': '$72.440',
      },
      breakdown: [
        { item: 'Fórmula', amount: '13,5 × $72.440', note: 'Base tributable máxima exenta' },
      ],
      total: '$977.940 CLP mensuales libres de retención tributaria',
    },
  ],
  faqs: [
    {
      q: '¿Quién fija el valor de la UTM en Chile?',
      a: 'El valor es calculado y oficializado por el Servicio de Impuestos Internos (SII) de acuerdo con los datos de variación del IPC entregados por el INE.',
    },
    {
      q: '¿Con qué frecuencia cambia la UTM?',
      a: 'Cambia exactamente una vez al mes, el día 1 de cada mes calendario.',
    },
    {
      q: '¿A cuánto equivale una UTA?',
      a: 'Una UTA (Unidad Tributaria Anual) equivale exactamente a 12 UTM del mes correspondiente (UTA = 12 × UTM).',
    },
    {
      q: '¿Por qué las multas de tránsito se expresan en UTM?',
      a: 'Para evitar que las sanciones pierdan severidad económica con el paso de los años producto de la inflación.',
    },
    {
      q: '¿Cómo influye la UTM en mi sueldo líquido?',
      a: 'Los tramos del Impuesto Único se miden en UTM. Cuando la UTM sube, el monto en pesos del tramo exento también sube, lo que protege a los trabajadores de pagar más impuesto si no han recibido un aumento real de sueldo.',
    },
    {
      q: '¿La UTM puede disminuir su valor?',
      a: 'Sí. Si el IPC de dos meses atrás fue negativo, el valor de la UTM para el mes siguiente experimenta una reducción.',
    },
    {
      q: '¿Dónde se pagan las multas expresadas en UTM?',
      a: 'En las Tesorerías Municipales del respectivo Juzgado de Policía Local o a través de sus plataformas de pago electrónico en línea.',
    },
    {
      q: '¿Cuál es la diferencia de uso entre la UF y la UTM?',
      a: 'La UF se utiliza en el mercado financiero privado (préstamos, seguros, arriendos, planes médicos) y cambia día a día. La UTM se utiliza en el ámbito tributario, judicial y administrativo estatal, y cambia mensualmente.',
    },
  ],
  sources: [
    { label: 'Servicio de Impuestos Internos (SII): Valores y Fechas de la UTM', url: 'https://www.sii.cl' },
    { label: 'Código Tributario de Chile: Decreto Ley Nº 830 de 1974', url: 'https://www.leychile.cl' },
  ],
  relatedTools: [
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor actualizado hoy de la UF y conversor a pesos chilenos.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Descuentos de AFP, salud e Impuesto Único medido en UTM.' },
    { title: 'Calculadora de Finiquito Chile', path: '/cl/calculadora-finiquito/', description: 'Cálculo de indemnizaciones laborales y feriado proporcional.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UTM', path: '/cl/guias/que-es-la-utm/', description: 'Conoce en profundidad para qué sirve la Unidad Tributaria Mensual y cómo calcularla.' },
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Explicación detallada del funcionamiento de la Unidad de Fomento en Chile.' },
  ],
  updatedAt: '2026-03-01',
};
