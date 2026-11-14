import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Liquidación Laboral 2026 | Calcula',
  metaDescription:
    'Calcula tu liquidación laboral en Colombia 2026 con base en el CST: cesantías, intereses, prima de servicios y vacaciones. Consulta gratis.',
  h1: 'Calculadora de Liquidación Laboral 2026',
  quickAnswer:
    'La liquidación laboral en Colombia comprende el pago de las prestaciones sociales pendientes al finalizar el contrato: cesantías acumuladas, intereses sobre cesantías del 12% anual, prima de servicios semestral y vacaciones proporcionales. Además, incluye el auxilio de transporte para salarios de hasta dos salarios mínimos y la indemnización legal por despido injustificado.',
  howItWorks: [
    {
      step: 1,
      title: 'Cesantías Acumuladas',
      description:
        'Ahorro obligatorio equivalente a un mes de salario por cada año laborado o proporcionalmente a la fracción de tiempo servida en el año civil.',
      formula: '(Salario Base + Auxilio de Transporte) × Días Trabajados ÷ 360',
      legalArticle: 'Art. 249 del Código Sustantivo del Trabajo (CST)',
    },
    {
      step: 2,
      title: 'Intereses sobre Cesantías (12%)',
      description:
        'Rendimiento legal del 12% anual sobre el saldo consolidado de cesantías, pagadero directamente al trabajador al término del contrato.',
      formula: '(Cesantías × Días Trabajados en el Año × 12%) ÷ 360',
      legalArticle: 'Ley 52 de 1975 y Decreto 116 de 1976',
    },
    {
      step: 3,
      title: 'Prima de Servicios Proporcional',
      description:
        'Prestación social de un mes de salario por año pagadero en dos partes; en la liquidación se reconoce la fracción del semestre en curso.',
      formula: '(Salario Base + Auxilio de Transporte) × Días del Semestre ÷ 360',
      legalArticle: 'Art. 306 del CST',
    },
    {
      step: 4,
      title: 'Vacaciones Proporcionales',
      description:
        'Descanso remunerado de 15 días hábiles por año de servicios. Para su cálculo no se incluye el auxilio de transporte.',
      formula: '(Salario Básico Mensual × Días Trabajados) ÷ 720',
      legalArticle: 'Art. 186 y 189 del CST',
    },
    {
      step: 5,
      title: 'Indemnización por Despido Sin Justa Causa',
      description:
        'Compensación pecuniaria obligatoria cuando la empresa termina el contrato de manera unilateral sin existir una justa causa comprobada.',
      formula: 'Término Indefinido: 30 días (año 1) + 20 días por año adicional',
      legalArticle: 'Art. 64 del CST (reformado por Ley 789 de 2002)',
    },
  ],
  article: `
## ¿Qué es la Liquidación Laboral en Colombia?

La liquidación laboral en Colombia es el balance económico final mediante el cual el empleador salda todas las obligaciones salariales, prestacionales e indemnizatorias derivadas del contrato de trabajo al momento de su extinción, bajo las disposiciones del Código Sustantivo del Trabajo (CST).

Para el año 2026, con el Salario Mínimo Mensual Legal Vigente (SMMLV) fijado en $1.423.500 y el auxilio de transporte obligatorio en $200.000 para quienes devengan hasta dos salarios mínimos ($2.847.000 mensuales), conocer con precisión matemática cada concepto evita controversias laborales y garantiza que el trabajador perciba el total de sus acreencias de ley.

---

## Componentes Esenciales de la Liquidación Laboral

El cálculo de la liquidación en el régimen laboral colombiano se estructura sobre la base del año comercial (meses de 30 días y año de 360 días), integrando cuatro prestaciones fundamentales:

### 1. Cesantías (Artículo 249 del CST)
Las cesantías corresponden a un mes de salario por cada año completo de servicios prestados, o proporcionalmente por cualquier fracción de tiempo laborada. Su objetivo legal es constituir un auxilio económico para el trabajador cuando quede desempleado.
- **Fórmula**: \`(Salario Base + Auxilio de Transporte) × Días Laborados en el Año ÷ 360\`
- En caso de terminación del contrato, las cesantías generadas en el año en curso no se consignan en el fondo de cesantías, sino que se pagan directamente al trabajador en el acta de liquidación.

### 2. Intereses sobre Cesantías (Ley 52 de 1975)
El empleador debe reconocer un interés del 12% anual sobre el valor acumulado de las cesantías causadas durante el año.
- **Fórmula**: \`(Monto de Cesantías × Días Trabajados en el Año × 0.12) ÷ 360\`
- Este concepto se cancela íntegramente al trabajador al momento de la liquidación final.

### 3. Prima de Servicios (Artículo 306 del CST)
La prima de servicios equivale a 30 días de salario por año laborado, dividida comúnmente en dos pagos semestrales (junio y diciembre). Al extinguirse el vínculo laboral, se liquida la porción correspondiente a los días laborados durante el semestre en que ocurre el retiro.
- **Fórmula**: \`(Salario Base + Auxilio de Transporte) × Días Trabajados en el Semestre ÷ 360\`

### 4. Vacaciones Compensadas en Dinero (Artículo 186 y 189 del CST)
El trabajador tiene derecho a 15 días hábiles de descanso remunerado por cada año de servicios continuos. Si el contrato finaliza sin haber disfrutado las vacaciones causadas o si existen fracciones pendientes, estas se compensan en dinero.
- **Regla crucial**: a diferencia de las cesantías y la prima, **el auxilio de transporte no hace parte de la base para liquidar vacaciones**, ya que estas constituyen descanso remunerado y no prestación social sujeta a desplazamiento físico.
- **Fórmula**: \`(Salario Básico Mensual × Días Laborados) ÷ 720\`

---

## Incidencia del Auxilio de Transporte en la Liquidación

De acuerdo con el Artículo 7º de la Ley 1ª de 1963, el auxilio de transporte se incorpora por mandato legal a la base de cálculo de las prestaciones sociales (cesantías y prima de servicios) para todos los trabajadores que perciban hasta dos (2) SMMLV.

En consecuencia, para quienes devenguen en 2026 hasta $2.847.000, la base prestacional de cesantías y prima es igual al salario pactado más $200.000 del auxilio de transporte. Por el contrario, los trabajadores con sueldos superiores a dos salarios mínimos calculan sus prestaciones con base exclusivamente en su salario básico ordinario.

---

## Indemnización por Despido Sin Justa Causa (Artículo 64 del CST)

Cuando la empresa decide rescindir el contrato de manera unilateral y sin una causa legal válida consignada en el Artículo 62 del CST, debe pagar una indemnización tasada según el tipo de vinculación:

### Contrato a Término Indefinido (para trabajadores que ganan menos de 10 SMMLV)
- **Por el primer año de servicio o fracción menor**: 30 días de salario.
- **Por cada año subsiguiente o fracción proporcional**: 20 días adicionales de salario.

*(Para sueldos iguales o superiores a 10 SMMLV, la escala indemnizatoria es de 20 días por el primer año y 15 días por cada año siguiente).*

### Contrato a Término Fijo
La indemnización equivale al valor total de los salarios correspondientes al tiempo que faltare para vencer el plazo estipulado en el contrato, sin que en ningún caso la indemnización sea inferior a quince (15) días de salario.

---

## Plazo de Pago y la Sanción Moratoria del Artículo 65 del CST ("Brazo Caído")

El Código Sustantivo del Trabajo no otorga un periodo de gracia prolongado: la liquidación debe pagarse **el mismo día de la terminación del contrato**. Si por razones operativas de nómina no fuere posible, la jurisprudencia laboral de la Corte Suprema de Justicia admite que se efectúe en la fecha más próxima de pago de la empresa.

Sin embargo, si el empleador retiene injustificadamente el pago de los salarios y prestaciones sociales debidas, incurre en la severa sanción del **Artículo 65 del CST (indemnización moratoria)**: el patrón debe pagar al trabajador una suma igual al último salario diario por cada día de retraso hasta por 24 meses, transcurridos los cuales se generan intereses moratorios a la tasa máxima legal certificada por la Superintendencia Financiera.
`,
  examples: [
    {
      title: 'Exemplo 1: Despido Sin Justa Causa con Salario Mínimo y Auxilio de Transporte',
      scenario:
        'Trabajador despedido sin justa causa el 30 de junio de 2026 con 1 año y 6 meses de servicio continuo (180 días trabajados en 2026), salario básico de $1,500,000 más auxilio de transporte de $200,000 (Base: $1,700,000).',
      inputs: {
        'Salario Básico': '$1.500.000',
        'Auxilio de Transporte': '$200.000',
        'Base Prestacional': '$1.700.000',
        'Antigüedad Total': '1.5 años (540 días)',
        'Días en Semestre 2026': '180 días',
        'Motivo': 'Despido sin justa causa',
      },
      breakdown: [
        {
          item: 'Cesantías del periodo (180 días)',
          amount: '$850.000',
          note: '($1.700.000 base × 180 días) ÷ 360',
        },
        {
          item: 'Intereses sobre Cesantías (12%)',
          amount: '$51.000',
          note: '($850.000 × 180 días × 12%) ÷ 360',
        },
        {
          item: 'Prima de Servicios (primer semestre)',
          amount: '$850.000',
          note: '($1.700.000 base × 180 días) ÷ 360',
        },
        {
          item: 'Vacaciones proporcionales (180 días)',
          amount: '$375.000',
          note: '($1.500.000 básico × 180 días) ÷ 720',
        },
        {
          item: 'Indemnización Art. 64 CST (40 días de sueldo)',
          amount: '$2.000.000',
          note: '30 días (año 1) + 10 días (0.5 año) × $50.000/día',
        },
      ],
      total: '$4.126.000 Total Liquidación e Indemnización',
    },
    {
      title: 'Exemplo 2: Renuncia Voluntaria a Término Indefinido (Sueldo $3.500.000)',
      scenario:
        'Profesional que presenta renuncia voluntaria al 30 de junio de 2026 (180 días laborados en el semestre) con salario de $3,500,000 (superior a 2 SMMLV, sin auxilio de transporte).',
      inputs: {
        'Salario Mensual': '$3.500.000',
        'Auxilio de Transporte': '$0 (supera 2 SMMLV)',
        'Fecha de Retiro': '30 de junio de 2026',
        'Días Semestre': '180 días',
        'Motivo': 'Renuncia Voluntaria',
      },
      breakdown: [
        {
          item: 'Cesantías del periodo (180 días)',
          amount: '$1.750.000',
          note: '($3.500.000 × 180 días) ÷ 360',
        },
        {
          item: 'Intereses sobre Cesantías (12% anual)',
          amount: '$105.000',
          note: '($1.750.000 × 180 días × 12%) ÷ 360',
        },
        {
          item: 'Prima de Servicios (primer semestre)',
          amount: '$1.750.000',
          note: '($3.500.000 × 180 días) ÷ 360',
        },
        {
          item: 'Vacaciones proporcionales (180 días)',
          amount: '$875.000',
          note: '($3.500.000 × 180 días) ÷ 720',
        },
      ],
      total: '$4.480.000 Total Liquidación de Prestaciones',
    },
  ],
  faqs: [
    {
      q: '¿Qué conceptos integran la liquidación laboral en Colombia?',
      a: 'La liquidación comprende salarios pendientes, cesantías acumuladas, intereses sobre cesantías del 12%, prima de servicios semestral, vacaciones no disfrutadas y, en caso de despido sin justa causa, la respectiva indemnización legal del Artículo 64 del CST.',
    },
    {
      q: '¿El auxilio de transporte se suma para liquidar vacaciones?',
      a: 'No. El auxilio de transporte se incluye únicamente para calcular cesantías y prima de servicios. Para las vacaciones, la base de cálculo corresponde estrictamente al salario básico devengado por el trabajador, según el Artículo 192 del CST.',
    },
    {
      q: '¿Por qué se usa el divisor 360 para cesantías y 720 para vacaciones?',
      a: 'En la legislación laboral colombiana se aplica el año comercial de 360 días. Para cesantías y prima (un mes por año) se divide entre 360. Para vacaciones (15 días por año, es decir medio mes), se divide el salario mensual entre 720 (360 × 2).',
    },
    {
      q: '¿Cómo se calcula la indemnización por despido injustificado a término indefinido?',
      a: 'Para trabajadores que ganan menos de 10 SMMLV, la indemnización es de 30 días de salario por el primer año trabajado y 20 días adicionales por cada año siguiente o fracción proporcional, conforme a la reforma de la Ley 789 de 2002.',
    },
    {
      q: '¿Cómo se calcula la indemnización en un contrato a término fijo?',
      a: 'En contratos a término fijo, la indemnización equivale al valor total de los salarios correspondientes al tiempo que falte para la fecha de expiración del plazo pactado, con un piso legal mínimo de 15 días de salario.',
    },
    {
      q: '¿Qué sanción legal enfrenta la empresa si retiene o atrasa el pago de la liquidación?',
      a: 'Aplica el Artículo 65 del CST ("brazo caído"), que impone una sanción equivalente a un día de salario por cada día de mora hasta por 24 meses, tras los cuales se causan intereses moratorios a la tasa máxima bancaria.',
    },
    {
      q: '¿Las prestaciones sociales en la liquidación sufren descuentos de salud y pensión?',
      a: 'No. Las cesantías, los intereses de cesantías y la prima de servicios están exoneradas de descuentos para el sistema de seguridad social (salud 4% y pensión 4%). Únicamente se descuenta seguridad social sobre los días trabajados de salario y sobre las vacaciones.',
    },
    {
      q: '¿A quién le corresponden los intereses del 12% sobre cesantías?',
      a: 'Corresponden en su totalidad al trabajador. En el curso regular del contrato se pagan anualmente a más tardar el 31 de enero de cada año; en la liquidación de retiro se pagan proporcionalmente junto con el valor de las cesantías.',
    },
    {
      q: '¿Qué ocurre con las cesantías de años anteriores consignadas en el fondo privado?',
      a: 'Las cesantías causadas en años anteriores ya fueron consignadas por el empleador en tu fondo de cesantías (Porvenir, Protección, Colfondos, etc.). Tras la terminación laboral, la empresa te entrega una carta de retiro para que retires el saldo total directamente del fondo.',
    },
    {
      q: '¿Qué plazo exacto tiene el empleador para entregar la liquidación?',
      a: 'El CST establece que el pago de salarios y prestaciones debe realizarse a la terminación del contrato. Por operatividad de nómina, la jurisprudencia acepta que se efectúe en la fecha habitual más inmediata de pago de la empresa.',
    },
  ],
  sources: [
    {
      label: 'Código Sustantivo del Trabajo (Secretaría del Senado de la República)',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      label: 'Ministerio del Trabajo de Colombia (Portal Oficial)',
      url: 'https://www.mintrabajo.gov.co',
    },
    {
      label: 'Ley 52 de 1975 - Régimen de Intereses sobre Cesantías',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0052_1975.html',
    },
    {
      label: 'Ley 789 de 2002 - Reforma Laboral e Indemnizaciones del Art. 64 CST',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0789_2002.html',
    },
    {
      label: 'Unidad de Gestión Pensional y Parafiscales (UGPP)',
      url: 'https://www.ugpp.gov.co',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Prima de Servicios',
      path: '/co/calculadora-prima-servicios',
      description: 'Calcula el pago de la prima semestral de junio o diciembre con auxilio de transporte.',
    },
    {
      title: 'Calculadora de Cesantías e Intereses',
      path: '/co/calculadora-cesantias',
      description: 'Liquida tus cesantías acumuladas y el 12% de intereses para retiro o consignación anual.',
    },
    {
      title: 'Calculadora de Salario Neto Colombia',
      path: '/co/calculadora-salario-neto',
      description: 'Calcula tu salario neto mensual tras deducciones de pensión, salud y retención en la fuente.',
    },
  ],
  relatedGuides: [
    {
      title: 'Guía Completa de Liquidación Laboral bajo el CST',
      path: '/co/guia-liquidacion-laboral',
      description: 'Paso a paso de las fórmulas de prestaciones sociales y derechos de retiro en Colombia.',
    },
    {
      title: 'El Artículo 65 del CST y la Sanción Moratoria por Retardo',
      path: '/co/guia-art-65-cst',
      description: 'Conoce cómo reclamar un día de salario por cada día de mora si la empresa no te liquida a tiempo.',
    },
  ],
  updatedAt: '2026-01-01',
};
