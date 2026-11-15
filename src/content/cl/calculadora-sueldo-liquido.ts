import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Sueldo Líquido Chile 2026: Bruto a Líquido',
  metaDescription:
    'Calcula tu sueldo líquido en Chile para 2026. Descuentos de AFP, Fonasa/Isapre, Seguro de Cesantía e Impuesto Único del SII. Modo directo e inverso gratis.',
  h1: 'Calculadora de Sueldo Líquido en Chile: De Bruto a Neto',
  quickAnswer:
    'Para calcular el sueldo líquido en Chile a partir del sueldo bruto, se descuentan las cotizaciones previsionales obligatorias (AFP 10% + comisión, Fonasa 7% o Isapre, Seguro de Cesantía 0,6%) y el Impuesto Único de Segunda Categoría sobre la base tributable, sumando las asignaciones no imponibles.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinar la Remuneración Imponible',
      description:
        'Suma el sueldo base, la gratificación legal (25% tope 4,75 ingresos mínimos) y bonos imponibles. Aplica el tope legal de 85,6 UF para AFP/Salud.',
      legalArticle: 'Art. 41 y 50 del Código del Trabajo',
    },
    {
      step: 2,
      title: 'Calcular Descuentos Previsionales',
      description:
        'Descuenta la cotización para pensión en tu AFP (10% + comisión de 0,49% a 1,45%), la salud (7% Fonasa o plan Isapre en UF) y el Seguro de Cesantía (0,6%).',
    },
    {
      step: 3,
      title: 'Aplicar el Impuesto Único (SII)',
      description:
        'La base imponible tributable (imponible menos previsión) se convierte a UTM. Si supera las 13,5 UTM, se aplica la tabla progresiva del SII con rebaja por tramo.',
      formula: 'Impuesto = (Base_Tributable × Factor) - Rebaja_SII',
    },
    {
      step: 4,
      title: 'Sumar Asignaciones No Imponibles',
      description:
        'Suma colación, movilización y asignaciones familiares exentas para obtener el sueldo líquido final a pagar en tu cuenta.',
    },
  ],
  article: `## ¿Qué es el sueldo líquido y cómo se define en Chile?

En el derecho laboral chileno regulado por el Código del Trabajo (DFL Nº 1 de 2003), la remuneración que percibe un trabajador dependiente se divide claramente entre dos conceptos fundamentales: el **sueldo bruto imponible** y el **sueldo líquido** (o remuneración neta).

El **sueldo bruto** representa la totalidad de los estipendios en dinero que el empleador abona en compensación por los servicios laborales pactados, antes de aplicar deducciones legales. Por su parte, el **sueldo líquido** es el dinero efectivo que el trabajador recibe disponible en su cuenta bancaria, una vez efectuadas las retenciones obligatorias de seguridad social y tributarias que la ley impone al empleador retener e ingresar a las instituciones correspondientes.

Con el Ingreso Mínimo Mensual de **$500.000 CLP** para jornada ordinaria y los ajustes graduales de la Ley de 40 Horas, comprender minuciosamente cada ítem de la liquidación de sueldo es un derecho y una herramienta esencial para todo trabajador dependiente en Chile.

---

## Estructura de los haberes: imponibles vs no imponibles

La legislación laboral clasifica los ingresos de la liquidación en dos categorías bien diferenciadas:

### 1. Haberes Imponibles y Tributables (Artículo 41)
Constituyen remuneración por los servicios prestados y sobre ellos se aplican los porcentajes de retención previsional e impuesto a la renta:
- **Sueldo Base:** Monto fijo pagado por períodos iguales. Para una jornada completa de trabajo no puede ser inferior a $500.000 CLP.
- **Gratificación Legal (Artículo 50 del Código del Trabajo):** La modalidad más frecuente en las empresas consiste en pagar el 25% de lo devengado en el mes, con un tope máximo legal anual equivalente a **4,75 Ingresos Mínimos Mensuales** dividido en 12 cuotas (aproximadamente $197.917 CLP al mes).
- **Horas Extraordinarias:** Las horas trabajadas en exceso de la jornada ordinaria se remuneran con un recargo mínimo obligatorio del 50%.
- **Comisiones y Bonos:** Estipendios variables sujetos a producción, ventas o cumplimiento de metas operacionales.

### 2. Haberes No Imponibles (Artículo 41, inciso 2º)
Tienen por finalidad compensar gastos en que incurre el trabajador para realizar sus funciones y no constituyen ganancia personal. Están libres de cotizaciones previsionales y de impuestos:
- **Asignación de Colación:** Subsidio para costear alimentación durante la jornada de trabajo.
- **Asignación de Movilización:** Ayuda económica para el traslado entre el hogar y el centro laboral.
- **Viáticos y Reembolsos:** Gastos de hospedaje y alimentación por traslados laborales temporales.
- **Asignación Familiar:** Prestación estatal pagada por cada carga familiar legal acreditada.

---

## Descuentos previsionales obligatorios de la seguridad social

La legislación chilena (DL Nº 3.500 y Ley Nº 19.728) establece tres descuentos previsionales obligatorios sobre la remuneración imponible:

### 1. Fondo de Pensiones (AFP)
- **10% obligatorio:** Destinado a la cuenta individual de capitalización para la pensión de vejez.
- **Comisión de administración:** Porcentaje adicional cobrado por la AFP donde cotiza el trabajador. En 2026, las tasas totales fluctúan entre 10,49% (AFP Uno) y 11,45% (AFP Provida), pasando por AFP Modelo (10,58%), PlanVital (11,10%), Habitat (11,27%), Capital (11,44%) y Cuprum (11,44%).
- **Tope imponible:** Rige un tope legal máximo de **85,6 Unidades de Fomento (UF)** mensuales.

### 2. Salud (Fonasa o Isapre)
Todo trabajador debe cotizar obligatoriamente el **7% legal** sobre su remuneración imponible topada:
- **En Fonasa:** Se retiene el 7% exacto de la remuneración imponible.
- **En Isapre:** El trabajador pacta un plan médico en UF. Si el 7% legal supera el valor del plan, la Isapre retiene el 7% íntegro y abona la diferencia como **excedente de cotización** a favor del afiliado para compras de medicamentos y copagos.

### 3. Seguro de Cesantía (AFC)
- **Contrato indefinido:** El trabajador aporta un **0,6%** de su renta imponible, y el empleador financia el 2,4% restante.
- **Contrato a plazo fijo u obra:** El trabajador no aporta nada (**0%**), asumiendo el empleador el 3,0% completo.
- **Tope imponible especial:** Para cesantía rige un tope superior fijado en **128,4 UF** mensuales.

---

## Cálculo del Impuesto Único de Segunda Categoría (SII)

El **Impuesto Único de Segunda Categoría** grava progresivamente los ingresos del trabajo. Se calcula sobre la **Base Tributable**, obtenida restando del total imponible todos los descuentos previsionales (AFP, Salud y Seguro de Cesantía).

La base resultante se expresa en UTM para ubicar el tramo correspondiente:
- **Hasta 13,5 UTM:** Exento de impuesto (0%).
- **De 13,5 a 30 UTM:** Tasa del 4% con rebaja fija del SII.
- **Tramos superiores:** Factores del 8%, 13,5%, 23%, 30,4%, 35% y hasta 40%.

$\text{Impuesto} = (\text{Base Tributable} \times \text{Factor del Tramo}) - \text{Rebaja Oficial SII}$

---

## Modo inverso: de sueldo líquido a sueldo bruto

En muchas negociaciones se acuerda una renta líquida final (por ejemplo, "$1.300.000 líquidos a pagar en cuenta"). Para determinar el sueldo base contractual que origina ese valor líquido, se debe calcular en sentido inverso considerando la AFP, el plan de salud, la gratificación del artículo 50 y los tramos impositivos del SII. Nuestra calculadora resuelve este cálculo de manera automática con exactitud al peso.`,
  examples: [
    {
      title: 'Sueldo profesional medio en Fonasa',
      scenario: 'Sueldo base de $900.000, gratificación legal Art. 50, AFP Habitat y Fonasa.',
      inputs: {
        'Sueldo Base': '$900.000',
        'Gratificación': 'Art. 50 legal ($197.917)',
        'AFP': 'Habitat (11,27%)',
        'Salud': 'Fonasa (7%)',
        'Contrato': 'Indefinido (AFC 0,6%)',
      },
      breakdown: [
        { item: 'Total Imponible', amount: '$1.097.917' },
        { item: 'Descuento AFP (11,27%)', amount: '-$123.735' },
        { item: 'Descuento Fonasa (7%)', amount: '-$76.854' },
        { item: 'Seguro Cesantía (0,6%)', amount: '-$6.588' },
        { item: 'Base Tributable', amount: '$890.740 (Exento de impuesto, ≤ 13,5 UTM)' },
      ],
      total: '$890.740 CLP sueldo líquido a pagar',
    },
    {
      title: 'Sueldo ejecutivo con tramo de Impuesto Único',
      scenario: 'Sueldo base de $2.500.000 con gratificación tope y plan Isapre.',
      inputs: {
        'Sueldo Base': '$2.500.000',
        'Gratificación': 'Tope legal Art. 50',
        'AFP': 'Cuprum (11,44%)',
        'Isapre': 'Plan 4 UF',
      },
      breakdown: [
        { item: 'Total Imponible', amount: '$2.697.917' },
        { item: 'AFP Cuprum (11,44%)', amount: '-$308.642' },
        { item: 'Isapre (4 UF ≈ $165.320)', amount: '-$188.854 (Aplica 7% legal por ser mayor)' },
        { item: 'Seguro Cesantía (0,6%)', amount: '-$16.188' },
        { item: 'Impuesto Único 2ª Cat.', amount: '-$48.250' },
      ],
      total: '$2.135.983 CLP sueldo líquido',
    },
  ],
  faqs: [
    {
      q: '¿Cuál es la diferencia entre sueldo bruto y sueldo líquido?',
      a: 'El sueldo bruto es la remuneración total antes de cualquier descuento legal. El sueldo líquido es el dinero neto que efectivamente recibe el trabajador tras restar las cotizaciones de AFP, salud, seguro de cesantía e impuesto a la renta.',
    },
    {
      q: '¿Qué asignaciones no pagan impuestos ni cotizaciones?',
      a: 'Conforme al artículo 41 del Código del Trabajo, no son imponibles la asignación de movilización, de colación, los viáticos y las devoluciones de gastos en que incurra el trabajador por causa del trabajo.',
    },
    {
      q: '¿A partir de qué sueldo se paga Impuesto Único en Chile?',
      a: 'Se paga impuesto a la renta cuando la base tributable mensual (imponible menos previsión) supera las 13,5 UTM (aproximadamente $978.000 CLP en 2026).',
    },
    {
      q: '¿Cómo funciona la gratificación legal del artículo 50?',
      a: 'El empleador paga el 25% de la remuneración mensual con un tope legal de 4,75 Ingresos Mínimos Mensuales al año, eximiéndose de la obligación de liquidar utilidades anuales.',
    },
    {
      q: '¿Cuál es la AFP más barata en Chile en 2026?',
      a: 'AFP Uno tiene la comisión más baja del sistema con un 0,49%, totalizando una cotización de 10,49% de la remuneración imponible.',
    },
    {
      q: '¿Qué pasa si gano más que el tope imponible de la AFP?',
      a: 'El descuento de AFP y Salud se congela en el tope máximo legal de 85,6 UF (aproximadamente $3,5 millones de pesos). Cualquier remuneración por sobre ese monto no sufre descuentos previsionales, aunque sí paga Impuesto Único.',
    },
    {
      q: '¿Quién paga el Seguro de Cesantía?',
      a: 'En contratos indefinidos, el trabajador aporta el 0,6% de su remuneración y el empleador el 2,4%. En contratos a plazo fijo u obra, el empleador asume el 3% completo y no hay descuento para el trabajador.',
    },
    {
      q: '¿Cómo calculo el sueldo bruto si sé cuánto quiero ganar líquido?',
      a: 'Usa la pestaña "De Sueldo Líquido a Bruto (Inverso)" en nuestra calculadora. El sistema resuelve mediante aproximación analítica el sueldo base requerido considerando la gratificación legal y los tramos tributarios exactos.',
    },
  ],
  sources: [
    { label: 'Dirección del Trabajo de Chile: Remuneraciones y Descuentos Legales', url: 'https://www.dt.gob.cl' },
    { label: 'Superintendencia de Pensiones: Comisiones vigentes de las AFP', url: 'https://www.spensiones.cl' },
    { label: 'Servicio de Impuestos Internos (SII): Tabla de Impuesto Único de Segunda Categoría', url: 'https://www.sii.cl' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito Chile', path: '/cl/calculadora-finiquito/', description: 'Simula años de servicio, feriado proporcional y tope de 90 UF.' },
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor oficial de la UF para calcular topes imponibles y planes Isapre.' },
    { title: 'Valor UTM 2026', path: '/cl/valor-utm/', description: 'Tabla mensual de la UTM para los tramos del Impuesto Único.' },
  ],
  relatedGuides: [
    { title: 'De Sueldo Bruto a Líquido en Chile', path: '/cl/guias/de-sueldo-bruto-a-liquido/', description: 'Guía paso a paso para entender tu liquidación de sueldo mensual.' },
    { title: 'Cómo Calcular el Finiquito', path: '/cl/guias/como-calcular-el-finiquito/', description: 'Aprende a calcular tus derechos tras el término de la relación laboral.' },
  ],
  updatedAt: '2026-03-01',
};
