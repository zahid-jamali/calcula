import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Salario Neto Colombia 2026 | Calcula',
  metaDescription:
    'Calcule su salario neto 2026: salud 4%, pensión 4%, Fondo de Solidaridad, retención en la fuente y auxilio de transporte. Neto mensual y por quincena.',
  h1: 'Calculadora de Salario Neto en Colombia 2026',
  quickAnswer:
    'Del salario bruto se descuentan 4% para salud y 4% para pensión; desde cuatro salarios mínimos se suma el Fondo de Solidaridad Pensional, desde 1%. Si su ingreso es alto, también hay retención en la fuente. Quien gana hasta dos SMMLV recibe además $249.095 de auxilio de transporte. El neto quincenal es la mitad del mensual.',
  howItWorks: [
    { step: 1, title: 'Ingreso base de cotización', description: 'El salario, con un mínimo de 1 SMMLV y un máximo de 25. En salario integral, el 70%.', formula: 'IBC = salario (integral: 70%)', legalArticle: 'Ley 100 de 1993' },
    { step: 2, title: 'Salud, pensión y solidaridad', description: '4% salud, 4% pensión y Fondo de Solidaridad desde 1% si el IBC es de 4 SMMLV o más.', formula: 'Aportes = IBC × (4% + 4% + FSP)', legalArticle: 'Leyes 100 de 1993 y 797 de 2003' },
    { step: 3, title: 'Retención en la fuente', description: 'Ingreso menos aportes, menos deducciones y renta exenta del 25%, convertido a UVT y aplicado a la tabla del art. 383 ET.', formula: 'Retención = tabla(base en UVT) × $52.374', legalArticle: 'Arts. 383, 387 y 206 ET' },
    { step: 4, title: 'Neto', description: 'Salario menos aportes y retención, más el auxilio de transporte si aplica.', formula: 'Neto = salario − aportes − retención + auxilio' },
  ],
  article: `## De salario bruto a salario neto

El salario que figura en su contrato es el salario bruto. Cada mes, el empleador descuenta los aportes que le corresponden al trabajador para seguridad social y, si aplica, la retención en la fuente. Al mismo tiempo, si usted gana hasta dos salarios mínimos, le paga el auxilio de transporte, que no es salario pero sí llega a su cuenta. El resultado es el salario neto, el que realmente recibe.

## Aporte a salud

El trabajador aporta el 4% de su ingreso base de cotización al sistema de salud, a través de su EPS. El empleador aporta el 8,5% adicional, aunque está exonerado de esa parte para trabajadores que ganan menos de 10 salarios mínimos. El IBC no puede ser inferior a un salario mínimo ni superior a 25.

## Aporte a pensión

El trabajador aporta el 4% del IBC a pensión, y el empleador el 12%, para un total del 16%. Este aporte va a su fondo de pensiones o a Colpensiones. Desde la reforma pensional de 2024 el sistema está en transición; los porcentajes a cargo del trabajador siguen siendo los mismos en 2026.

## Fondo de Solidaridad Pensional

Si su IBC es igual o superior a cuatro salarios mínimos ($7.003.620 en 2026), debe aportar el 1% adicional al Fondo de Solidaridad Pensional. El porcentaje aumenta para salarios más altos: 1,2% desde 16 SMMLV, 1,4% desde 17, 1,6% desde 18, 1,8% desde 19 y 2% desde 20 salarios mínimos.

## Retención en la fuente

La retención en la fuente es un anticipo del impuesto de renta. Para asalariados se calcula con el procedimiento 1 del artículo 383 del Estatuto Tributario. Primero se toman los ingresos laborales del mes y se restan los ingresos no constitutivos de renta, como los aportes obligatorios a salud, pensión y solidaridad. Luego se restan las deducciones, como la de dependientes económicos (10% del ingreso, máximo 32 UVT al mes), y la renta exenta del 25%, con un tope anual de 790 UVT. La suma de deducciones y rentas exentas no puede superar el 40% del ingreso ni 1.340 UVT al año.

El resultado se convierte a UVT, que en 2026 vale $52.374. Hasta 95 UVT no hay retención; entre 95 y 150 UVT la tarifa marginal es del 19%; entre 150 y 360 UVT, del 28% más 10 UVT; y así sucesivamente hasta el 39%. En la práctica, con la renta exenta, la retención empieza para salarios de alrededor de $7,3 millones.

## Auxilio de transporte

Quien gana hasta dos salarios mínimos ($3.501.810 en 2026) recibe un auxilio de transporte de $249.095 mensuales. No se le descuentan aportes, porque no es salario, y se suma a su pago. Si el empleador le suministra el transporte o usted trabaja desde casa, en algunos casos se reemplaza por el auxilio de conectividad.

## Salario integral

El salario integral, de al menos 13 salarios mínimos más un factor prestacional del 30%, cotiza sobre el 70% de su valor. Quien lo devenga no recibe prima, cesantías ni intereses, ni auxilio de transporte. Active la opción en la calculadora si es su caso.

## Pago quincenal

Muchas empresas pagan por quincenas. El neto quincenal es la mitad del neto mensual, aunque algunas empresas aplican todos los descuentos en la segunda quincena. Revise su desprendible para saber cómo los distribuye su empleador.

## Lo que no incluye este cálculo

No se incluyen descuentos voluntarios como aportes a pensión voluntaria o cuentas AFC, que reducen la retención; libranzas, embargos, cuotas sindicales o cooperativas; ni pagos variables del mes como horas extra o comisiones. Para estimar las horas extra y recargos, use la calculadora de horas extras.

## Cómo reducir legalmente la retención

Los aportes voluntarios a pensión y a cuentas AFC son renta exenta dentro de ciertos límites, y la deducción por dependientes, los intereses de vivienda y la medicina prepagada reducen la base de retención. Para que el empleador los tenga en cuenta, debe entregarle los certificados correspondientes. Pida asesoría si su salario está cerca del umbral en el que empieza la retención.

## Cómo leer su desprendible de nómina

En el desprendible aparecen los devengados (salario, auxilio de transporte, horas extra, recargos y comisiones) y las deducciones (salud, pensión, Fondo de Solidaridad, retención en la fuente y descuentos voluntarios). Compare el ingreso base de cotización con su salario y verifique que los porcentajes sean los correctos. Si su empresa paga por quincenas, sume las dos para comparar con el resultado mensual de esta calculadora.

## Aportes del empleador

Además de lo que se descuenta al trabajador, el empleador paga el 12% de pensión, el aporte a riesgos laborales según la clase de riesgo, el 4% a la caja de compensación familiar y, para salarios desde 10 SMMLV, el 8,5% de salud y los aportes al SENA y al ICBF. Estos valores no se descuentan de su salario, pero forman parte del costo total de su contratación.

## Resumen rápido

Del salario bruto se descuentan 4% de salud, 4% de pensión, el Fondo de Solidaridad desde cuatro mínimos y la retención si aplica. Si gana hasta dos mínimos, suma $249.095 de auxilio de transporte.`,
  examples: [
    {
      title: 'Ejemplo 1: salario de $3.500.000',
      scenario: 'Ana gana $3.500.000, menos de dos mínimos, por lo que recibe auxilio de transporte. No tiene retención.',
      inputs: { 'Salario': '$3.500.000', 'Auxilio': '$249.095', 'Base de retención': '46,11 UVT' },
      breakdown: [
        { item: 'Salud 4%', amount: '−$140.000' },
        { item: 'Pensión 4%', amount: '−$140.000' },
        { item: 'Auxilio de transporte', amount: '+$249.095' },
        { item: 'Neto quincenal', amount: '$1.734.548' },
      ],
      total: '$3.469.095 netos al mes',
    },
    {
      title: 'Ejemplo 2: salario de $15.000.000',
      scenario: 'Ricardo gana $15.000.000 sin dependientes. Aporta al Fondo de Solidaridad y tiene retención.',
      inputs: { 'Salario': '$15.000.000', 'IBC': '$15.000.000', 'Base de retención': '195,47 UVT' },
      breakdown: [
        { item: 'Salud 4%', amount: '−$600.000' },
        { item: 'Pensión 4%', amount: '−$600.000' },
        { item: 'Fondo de Solidaridad 1%', amount: '−$150.000' },
        { item: 'Retención en la fuente', amount: '−$1.191.000' },
      ],
      total: '$12.459.000 netos al mes',
    },
  ],
  faqs: [
    { q: '¿Cuánto me descuentan de salud y pensión?', a: '4% para salud y 4% para pensión, sobre su ingreso base de cotización.' },
    { q: '¿Desde cuánto se paga el Fondo de Solidaridad?', a: 'Desde un IBC de 4 SMMLV ($7.003.620 en 2026), con una tarifa del 1% que sube hasta el 2%.' },
    { q: '¿Desde qué salario hay retención en la fuente?', a: 'Depende de deducciones y rentas exentas, pero sin ellas empieza alrededor de $7,3 millones mensuales.' },
    { q: '¿Cuánto vale la UVT en 2026?', a: '$52.374, según la Resolución DIAN 000238 de 2025.' },
    { q: '¿Quién recibe auxilio de transporte?', a: 'Quien gana hasta 2 SMMLV ($3.501.810 en 2026); son $249.095 al mes.' },
    { q: '¿Al auxilio de transporte le descuentan salud y pensión?', a: 'No, porque no es salario.' },
    { q: '¿Cómo cotiza el salario integral?', a: 'Sobre el 70% de su valor; no recibe prestaciones ni auxilio de transporte.' },
    { q: '¿Los dependientes reducen la retención?', a: 'Sí, con una deducción del 10% del ingreso, hasta 32 UVT mensuales.' },
  ],
  sources: [
    { label: 'Estatuto Tributario, arts. 206, 383 y 387', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
    { label: 'Resolución DIAN 000238 de 2025 (UVT 2026)', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm' },
    { label: 'Ley 100 de 1993', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html' },
    { label: 'Ministerio del Trabajo', url: 'https://www.mintrabajo.gov.co' },
  ],
  relatedTools: [
    { title: 'Calculadora de horas extras', path: '/co/calculadora-horas-extras/', description: 'Recargos y horas extra.' },
    { title: 'Calculadora de prima', path: '/co/calculadora-prima/', description: 'Prima de junio y diciembre.' },
    { title: 'Salario mínimo 2026', path: '/co/salario-minimo/', description: 'SMMLV, diario y por hora.' },
  ],
  relatedGuides: [
    { title: 'Auxilio de transporte 2026', path: '/co/auxilio-de-transporte/', description: 'Valor y requisitos.' },
    { title: 'Recargos nocturnos y dominicales', path: '/co/guias/recargos-nocturnos-y-dominicales/', description: 'Cómo se pagan en 2026.' },
  ],
  updatedAt: '2026-11-14',
};
