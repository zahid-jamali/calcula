import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Simulador Crédito Hipotecario Chile 2026: Dividendo en UF',
  metaDescription:
    'Simula tu crédito hipotecario en Chile para 2026. Calcula tu dividendo mensual en UF y pesos chilenos a 15, 20, 25 o 30 años, pie y tabla comparativa.',
  h1: 'Simulador de Crédito Hipotecario en Chile: Dividendo en UF y Pesos',
  quickAnswer:
    'El simulador de crédito hipotecario calcula la cuota o dividendo mensual en UF y pesos chilenos según el precio de la propiedad, el porcentaje de pie aportado (10% a 30%), el plazo en años y la tasa de interés anual, comparando el costo financiero total en intereses.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinar el Monto del Crédito',
      description:
        'Se resta el pie inicial aportado (ej: 20%) al precio total de la propiedad en UF para calcular el capital financiado por el banco.',
      formula: 'Capital_UF = Precio_UF - Pie_UF',
    },
    {
      step: 2,
      title: 'Calcular el Dividendo en UF (Sistema Francés)',
      description:
        'Se aplica la fórmula de anualidad con cuota constante en UF según el número total de pagos mensuales y la tasa de interés efectiva.',
      formula: 'Dividendo_UF = Capital × [r(1+r)^n] / [(1+r)^n - 1]',
    },
    {
      step: 3,
      title: 'Conversión a Pesos Chilenos (CLP)',
      description:
        'El dividendo mensual en UF se multiplica por el valor oficial de la UF para estimar el costo en pesos que pagarás en tu cuenta.',
      formula: 'Dividendo_CLP = Dividendo_UF × Valor_UF',
    },
  ],
  article: `## ¿Cómo funciona un crédito hipotecario en Chile?

El **crédito hipotecario** es un préstamo bancario a mediano o largo plazo otorgado por bancos comerciales, cooperativas de ahorro y mutuarias para financiar la adquisición de una vivienda nueva o usada (casa o departamento), un terreno o la construcción de un inmueble. Como respaldo de la deuda contraída, la institución financiera inscribe una hipoteca y una prohibición de enajenar sobre la propiedad en el Conservador de Bienes Raíces respectivo.

En Chile, prácticamente el 100% de los créditos hipotecarios para vivienda se otorgan en **Unidades de Fomento (UF)** bajo el sistema francés de amortización con cuota fija en UF. Esto significa que el dividendo mensual se mantiene constante en UF a lo largo de todo el período pactado, y se convierte a pesos chilenos según el valor oficial que registre la UF en la fecha de pago de cada dividendo.

---

## Factores determinantes en la simulación de un crédito hipotecario

Para comprender el costo real de un crédito hipotecario y elegir la mejor alternativa de financiamiento, se deben analizar cuatro elementos esenciales:

### 1. El Pie o Enganche Inicial
Es el porcentaje del precio total del inmueble que el comprador debe desembolsar de sus propios ahorros. La política estándar del sistema financiero chileno exige un **20% de pie** (el banco financia hasta el 80% del valor de tasación). No obstante, en ciertos proyectos o mediante garantías estatales como el Fondo de Garantías Especiales (FOGAES), es posible acceder a créditos con un **10% de pie** (financiamiento del 90%).

### 2. El Plazo del Financiamiento (Años)
Los créditos habitacionales se contratan habitualmente a **15, 20, 25 o 30 años** (180 a 360 dividendos mensuales):
- **A menor plazo (15 o 20 años):** El dividendo mensual en UF es algo más alto, pero el costo total pagado en intereses al final de la vida del crédito se reduce de manera sustancial.
- **A mayor plazo (25 o 30 años):** El dividendo mensual disminuye, facilitando calificar en la evaluación de ingresos del banco, pero el monto total devengado en intereses se duplica o triplica.

### 3. La Tasa de Interés Anual
Es el porcentaje de interés real cobrado por la entidad financiera sobre el capital en UF adeudado. En el mercado bancario chileno actual, las tasas fijas anuales se ubican habitualmente entre el **4,2% y el 5,5%** anual. Existen alternativas de tasa fija para todo el período, tasa mixta (fija los primeros 3 o 5 años y luego variable) o tasa variable indexada a la Tasa de Política Monetaria (TPM).

### 4. Seguros Obligatorios por Ley
La Ley General de Bancos establece que todo crédito hipotecario debe incluir obligatoriamente dos seguros durante toda la vigencia de la deuda:
- **Seguro de Desgravamen:** Cubre el saldo insoluto de la deuda en caso de fallecimiento o invalidez total y permanente del titular deudor.
- **Seguro de Incendio y Sismo:** Resguarda el valor de reconstrucción material de la propiedad hipotecada.
Estos seguros agregan entre 0,3 y 0,8 UF mensuales adicionales al dividendo base del crédito.

---

## Requisitos de aprobación y capacidad de endeudamiento

Las entidades bancarias en Chile aplican estrictos criterios de solvencia financiera para otorgar créditos hipotecarios:
- **Carga Financiera Máxima (25% a 30%):** El dividendo mensual no debe superar entre el 25% y el 30% del ingreso líquido acreditado del solicitante o de la renta complementada entre cónyuges, convivientes civiles o codeudores solidarios.
- **Continuidad Laboral:** Se exige un mínimo de 12 meses continuos de antigüedad laboral para trabajadores dependientes con contrato indefinido, o dos años de declaraciones anuales de renta (Formulario 22) para profesionales independientes y emprendedores.
- **Historial Comercial Impecable:** No registrar morosidades, protestos de cheques ni anotaciones vigentes en los informes de crédito comercial (Boletín Comercial / Dicom).

---

## Gastos operacionales de formalización

Además del pie inicial, el comprador debe disponer de ahorros para cubrir los gastos operacionales asociados a la constitución de la hipoteca (equivalentes a entre el 1% y el 2% del valor de la propiedad):
- Tasación técnica del inmueble.
- Estudio de títulos legales por abogados del banco.
- Gastos de escritura pública ante Notario.
- Impuesto de timbres y estampillas.
- Derechos de inscripción en el Conservador de Bienes Raíces.

---

## La importancia del historial crediticio y solvencia previa

Antes de ingresar una solicitud formal de crédito hipotecario ante cualquier entidad bancaria en Chile, es altamente recomendable revisar minuciosamente el estado de tus informes comerciales y financieros en la Comisión para el Mercado Financiero (CMF) y en los registros del Boletín Comercial (DICOM). Cualquier deuda impaga, mora en tarjetas de crédito o atraso en créditos de consumo preexistentes puede traducirse de inmediato en el rechazo de la operación o en una exigencia mayor de pie inicial por parte del comité de riesgo crediticio. Mantener un comportamiento financiero responsable y sin sobreendeudamiento es la clave para obtener la tasa de interés más conveniente del mercado.

---

## Consejos para simular y cotizar un crédito hipotecario

1. **Compara la CAE (Carga Anual Equivalente):** No te fijes solo en la tasa de interés base; la CAE resume la totalidad de los costos, comisiones y seguros en un único porcentaje comparable entre bancos.
2. **Evalúa prepagos parciales:** La ley faculta a los deudores a realizar amortizaciones extraordinarias o prepagos totales en cualquier momento con una comisión máxima equivalente a 1,5 meses de intereses pactados.
3. **Simula diversos plazos:** Utiliza nuestra tabla comparativa para dimensionar cuánto dinero real ahorras en intereses eligiendo un plazo de 20 o 25 años en lugar de 30 años.`,
  examples: [
    {
      title: 'Departamento de 2.500 UF a 25 años',
      scenario: 'Pie del 20%, crédito de 2.000 UF con tasa anual del 4,8%.',
      inputs: {
        'Valor propiedad': '2.500 UF ($103.325.000 CLP)',
        'Pie (20%)': '500 UF ($20.665.000 CLP)',
        'Monto crédito': '2.000 UF a 25 años (300 meses)',
        'Tasa anual': '4,8% fija',
      },
      breakdown: [
        { item: 'Dividendo mensual base', amount: '11,46 UF' },
        { item: 'Valor en pesos (UF $41.330)', amount: '$473.642 CLP/mes' },
        { item: 'Total intereses pagados', amount: '1.438 UF (72% del crédito original)' },
      ],
      total: '$473.642 CLP/mes de dividendo base estimado',
    },
    {
      title: 'Casa de 4.000 UF a 20 años',
      scenario: 'Pie del 20% (800 UF), crédito de 3.200 UF con tasa del 4,5%.',
      inputs: {
        'Valor propiedad': '4.000 UF ($165.320.000 CLP)',
        'Pie (20%)': '800 UF ($33.064.000 CLP)',
        'Monto crédito': '3.200 UF a 20 años (240 meses)',
        'Tasa anual': '4,5% fija',
      },
      breakdown: [
        { item: 'Dividendo mensual base', amount: '20,24 UF' },
        { item: 'Valor en pesos', amount: '$836.519 CLP/mes' },
      ],
      total: '$836.519 CLP/mes de dividendo estimado',
    },
  ],
  faqs: [
    {
      q: '¿Qué porcentaje de pie exigen los bancos en Chile?',
      a: 'Lo habitual es un 20% de pie (financian hasta el 80% del valor de tasación). Con subsidios o garantías estatales como FOGAES, algunos bancos permiten financiar hasta el 90% (10% de pie).',
    },
    {
      q: '¿Cuánto sueldo necesito para que me aprueben un hipotecario?',
      a: 'Los bancos exigen que el dividendo mensual no supere entre el 25% y el 30% de tu sueldo líquido individual o complementado con tu cónyuge o pareja.',
    },
    {
      q: '¿Por qué el crédito hipotecario se paga en UF y no en pesos?',
      a: 'Porque la UF protege al banco de la inflación a lo largo de 20 o 30 años, garantizando que el capital prestado mantenga su valor real en el tiempo.',
    },
    {
      q: '¿Conviene tomar el crédito a 20 o a 30 años?',
      a: 'A 20 años el dividendo mensual es algo mayor, pero ahorras decenas de millones de pesos en intereses totales. A 30 años la cuota es más baja pero pagas mucho más interés final.',
    },
    {
      q: '¿Qué son los gastos operacionales de un hipotecario?',
      a: 'Son los costos iniciales necesarios para formalizar el crédito: tasación del inmueble, estudio de títulos por abogados, gastos notariales, impuesto de timbres y estampillas, e inscripción en el Conservador de Bienes Raíces.',
    },
    {
      q: '¿Puedo hacer prepagos de mi crédito hipotecario?',
      a: 'Sí. La Ley General de Bancos otorga el derecho a prepagar anticipadamente parte o el total de la deuda hipotecaria, pagando una comisión máxima de 1 a 1,5 meses de intereses pactados.',
    },
    {
      q: '¿Qué seguros son obligatorios al contratar un crédito hipotecario?',
      a: 'Por ley son obligatorios el seguro de desgravamen (muerte/invalidez) y el seguro de incendio con cobertura de sismo para la propiedad.',
    },
    {
      q: '¿Se puede complementar renta para calificar al crédito?',
      a: 'Sí. La mayoría de los bancos en Chile permiten complementar ingresos con tu cónyuge, conviviente civil, conviviente con hijos en común, padres o hermanos.',
    },
  ],
  sources: [
    { label: 'Comisión para el Mercado Financiero (CMF): Guía de Créditos Hipotecarios', url: 'https://www.cmfchile.cl' },
    { label: 'Banco Central de Chile: Tasas de Interés del Sistema Financiero', url: 'https://www.bcentral.cl' },
  ],
  relatedTools: [
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Consulta el valor de la UF para calcular tu dividendo al día de pago.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Verifica tu renta líquida para evaluar la carga financiera hipotecaria.' },
    { title: 'Calculadora de Arriendo en UF', path: '/cl/calculadora-arriendo-uf/', description: 'Compara cuánto pagarías de arriendo vs un dividendo propio.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Comprende el rol de la Unidad de Fomento en contratos financieros y préstamos.' },
    { title: 'De Sueldo Bruto a Líquido en Chile', path: '/cl/guias/de-sueldo-bruto-a-liquido/', description: 'Cómo calcular tu sueldo neto para presentar tus antecedentes al banco.' },
  ],
  updatedAt: '2026-03-01',
};
