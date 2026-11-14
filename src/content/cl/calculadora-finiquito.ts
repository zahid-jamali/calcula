import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Finiquito Laboral 2026 | Calcula',
  metaDescription:
    'Calcula tu finiquito laboral en Chile 2026 según el Código del Trabajo: feriado proporcional, aviso previo y años de servicio al instante.',
  h1: 'Calculadora de Finiquito Laboral 2026',
  quickAnswer:
    'El finiquito laboral en Chile es el acto legal que ratifica el término del contrato ante ministro de fe. Su cálculo incluye los días trabajados del mes, feriado legal y proporcional (1,25 días hábiles por mes) y, en despidos por necesidades de la empresa, la indemnización sustitutiva de aviso previo y años de servicio.',
  howItWorks: [
    {
      step: 1,
      title: 'Sueldo de Días Trabajados en el Mes de Salida',
      description:
        'Remuneração devengada correspondiente a los días laborados durante el último mes antes de que opere la separación formal del empleo.',
      formula: '(Sueldo Base Mensual ÷ 30) × Días Trabajados en el Mes',
      legalArticle: 'Art. 44 del Código del Trabajo',
    },
    {
      step: 2,
      title: 'Feriado Legal y Proporcional',
      description:
        'Compensación pecuniaria del descanso anual básico de 15 días hábiles, calculada a razón de 1,25 días hábiles por cada mes completo trabajado.',
      formula: 'Días Acumulados de Vacaciones × (Sueldo Mensual ÷ 30)',
      legalArticle: 'Art. 67 y 73 del Código del Trabajo',
    },
    {
      step: 3,
      title: 'Indemnización Sustitutiva del Aviso Previo',
      description:
        'Equivale a un mes de la última remuneración devengada cuando el empleador no comunica el despido con al menos 30 días de anticipación.',
      formula: '1 Mes de Última Remuneración Íntegra',
      legalArticle: 'Art. 161 y 162 del Código del Trabajo',
    },
    {
      step: 4,
      title: 'Indemnización por Años de Servicio',
      description:
        'Un mes de sueldo por cada año completo de servicio continuo o fracción superior a seis meses, con tope legal máximo de 11 años.',
      formula: 'Años Computados (Tope 11) × Última Remuneración Mensual',
      legalArticle: 'Art. 163 del Código del Trabajo',
    },
    {
      step: 5,
      title: 'Ratificación y Pago ante Ministro de Fe',
      description:
        'El finiquito debe otorgarse y pagarse dentro de los 10 días hábiles siguientes al cese, ratificado ante Notario o la Dirección del Trabajo.',
      formula: 'Plazo Legal Máximo: 10 Días Hábiles (Art. 177)',
      legalArticle: 'Art. 177 del Código del Trabajo',
    },
  ],
  article: `
## ¿Qué es el Finiquito Laboral en Chile?

En el ordenamiento jurídico de Chile, el finiquito laboral es la convención legal escrita emanada con motivo de la extinción de la relación de trabajo, suscrita por el trabajador y el empleador. A través de este documento, ambas partes dejan constancia del término de la vinculación jurídica, detallan pormenorizadamente los pagos y prestaciones devengadas e indemnizaciones adeudadas, y otorgan el recíproco y amplio finiquito, reconociendo que no existen deudas pendientes, salvo manifestación expresa de reserva de derechos.

Con el Ingreso Mínimo Mensual (IMM) situado en $500.000 para el ejercicio 2026 y la aplicación estricta de las normas de la Dirección del Trabajo (DT), calcular el monto certero que te corresponde percibir es una salvaguarda indispensable para proteger tus derechos laborales.

---

## Causales de Término del Contrato y su Impacto en el Cálculo

El Código del Trabajo clasifica con rigurosidad las causales legales de desvinculación laboral, las cuales determinan directamente si procede o no el pago de indemnizaciones:

### 1. Necesidades de la Empresa (Artículo 161, inciso 1º)
Es la causal más representativa de desvinculación de iniciativa patronal, fundada en cambios económicos, reestructuraciones tecnológicas, baja en la productividad o modernización de procesos. Otorga al trabajador el paquete más amplio de indemnizaciones legales:
- Días trabajados del mes en curso;
- Feriado legal y proporcional pendiente (vacaciones);
- **Indemnización sustitutiva del aviso previo**: equivalente a un mes de la última remuneración si no se notificó el término con 30 días de anticipación;
- **Indemnización por años de servicio**: un mes de salario por cada año trabajado o fracción superior a seis meses.

*(Nota: De conformidad con el Artículo 13 de la Ley 19.728, en esta causal el empleador puede imputar a la indemnización por años de servicio el aporte patronal del 1,6% efectuado a la Cuenta Individual de Cesantía - CIC de la AFC más su rentabilidad acumulada).*

### 2. Renuncia Voluntaria del Trabajador (Artículo 159 Nº 2)
Procede cuando el trabajador decide autónomamente poner término a su contrato de trabajo, debiendo comunicarlo por escrito a su empleador con treinta días de anticipación.
- **Qué se paga**: exclusivamente los días trabajados del mes de salida y el feriado proporcional o legal no utilizado.
- **Qué no se paga**: la renuncia voluntaria no confiere derecho a indemnización por años de servicio ni a indemnización de aviso previo.

### 3. Vencimiento del Plazo Convenido (Artículo 159 Nº 4)
Aplica en contratos a plazo fijo al expirar la fecha establecida. Solo da derecho a sueldo pendiente y feriado proporcional devengado.

### 4. Despido Disciplinario o por Falta Imputable (Artículo 160)
Opera por conductas reprochables graves del trabajador (falta de probidad, injurias graves, conductas de acoso sexual o laboral, vías de hecho, abandono injustificado de tareas por dos días seguidos, etc.). En esta hipótesis no procede el pago de indemnización alguna por término de contrato, limitándose el pago a los días efectivamente trabajados y a las vacaciones adeudadas.

---

## Cálculo del Feriado Legal y Proporcional (Artículos 67 y 73)

En Chile, todo trabajador con más de un año de servicio adquiere el derecho a un feriado anual básico de **15 días hábiles** remunerados con sueldo íntegro (los días sábados se consideran siempre inhábiles para el cómputo del feriado).

Si el trabajador deja de pertenecer a la empresa antes de completar un año calendario, o cuenta con fracciones de un nuevo periodo en curso, se liquida el feriado proporcional:
- **Factor mensual básico**: cada mes calendario completo equivale a **1,25 días hábiles** de descanso remunerado (15 días divididos entre 12 meses).
- **Cálculo del valor día**: se toma el sueldo mensual devengado y se divide entre 30. Posteriormente, los días hábiles acumulados se convierten a días corridos adicionando los días inhábiles (sábados, domingos y festivos) que medien en el cómputo, multiplicándose por el valor diario de remuneración.

---

## Reglas de la Indemnización por Años de Servicio (Artículo 163)

Para tener derecho a la indemnización legal por años de servicio bajo la causal de necesidades de la empresa, el trabajador debe registrar una antigüedad mínima de un año completo:
1. **Un mes por año de servicio**: se abona el equivalente a un mes de la última remuneración devengada por cada año de prestación de labores.
2. **Fracción superior a seis meses**: si tras cumplir uno o más años completos de servicio, el trabajador registra una fracción adicional que supera los 6 meses (180 días), dicha fracción se computa automáticamente como un año entero adicional.
3. **Tope legal máximo**: la indemnización legal tiene un tope máximo absoluto de **11 años de servicio** (11 meses de remuneración para contratos suscritos a contar del 14 de agosto de 1981).
4. **Tope de remuneración mensual imponible**: el sueldo base mensual considerado para la indemnización no puede exceder el tope imponible fijado para efectos de la pensión y cesantía (aproximadamente 84,3 a 90 Unidades de Fomento - UF).

---

## La Ley Bustos: Nulidad del Despido por Cotizaciones Impagas (Artículo 162)

La conocida legislación consagrada en el Artículo 162, incisos 5º y siguientes del Código del Trabajo (Ley Nº 19.631 o Ley Bustos), estipula un requisito de validez infranqueable:

> Para que el despido sea jurídicamente válido y produzca plenos efectos de desvinculación, el empleador debe adjuntar a la carta de término los certificados que acrediten fehacientemente que **todas las cotizaciones previsionales se encuentran enteramente pagadas al último día del mes anterior al despido** (AFP, Salud Fonasa/Isapre, Seguro de Cesantía AFC).

Si el empleador notifica el despido adeudando cotizaciones previsionales, el despido no convalida y el empleador queda legalmente forzado a seguir pagando al trabajador su remuneración mensual íntegra hasta que convalide el despido acreditando el pago de todas las deudas previsionales acumuladas ante los tribunales o la DT.

---

## Plazo Legal de Pago, Firma y Reserva de Derechos (Artículo 177)

El Artículo 177 del Código del Trabajo establece perentoriamente que el finiquito deberá ser puesto a disposición del trabajador y pagado **dentro de los 10 días hábiles siguientes** a la fecha en que se produce la separación física del trabajador.

### Ratificación ante Ministro de Fe
Para tener validez legal liberatoria, el finiquito debe ser firmado por ambas partes y ratificado ante un ministro de fe: un Notario Público, el inspector de la Dirección del Trabajo, el oficial del Registro Civil de la comuna, o bien de forma remota y digital a través del portal oficial Mi DT mediante la ClaveÚnica del Estado.

### La Reserva de Derechos
Si el trabajador no está de acuerdo con la causal de despido aplicada, con los descuentos de AFC efectuados o con los montos ofrecidos, **jamás debe negarse a firmar el finiquito**, pues retrasaría el cobro de su dinero. La legislación y jurisprudencia chilena permiten estampar formalmente de puño y letra la mención: *"Me reservo el derecho a demandar despido injustificado, recargo legal y devolución de descuento de AFC"*. De este modo, el trabajador cobra de inmediato los montos ofrecidos y conserva íntegra la vía judicial ante los Juzgados de Letras del Trabajo.
`,
  examples: [
    {
      title: 'Exemplo 1: Despido por Necesidades de la Empresa con 3 Años y 7 Meses',
      scenario:
        'Trabajador despedido el 18 de agosto de 2026 por causal del Art. 161 (Necesidades de la Empresa) sin aviso previo de 30 días, con sueldo mensual de $800.000 y 3 años con 7 meses de servicio (la fracción de 7 meses computa como 4 años completos).',
      inputs: {
        'Sueldo Mensual': '$800.000',
        'Causal': 'Art. 161 (Necesidades de la empresa)',
        'Antigüedad': '3 años y 7 meses',
        'Años Reconocidos': '4 años (fracción > 6 meses)',
        'Aviso Previo': 'Sin aviso (Indemnizado)',
        'Días Mes de Salida': '18 días en agosto',
      },
      breakdown: [
        {
          item: 'Sueldo de días trabajados (18 días)',
          amount: '$480.000',
          note: '($800.000 ÷ 30) × 18 días',
        },
        {
          item: 'Feriado legal y proporcional (8,75 días hábiles)',
          amount: '$233.333',
          note: '7 meses × 1,25 días × ($800.000 ÷ 30)',
        },
        {
          item: 'Indemnización sustitutiva de aviso previo (1 mes)',
          amount: '$800.000',
          note: '1 mes completo de remuneración',
        },
        {
          item: 'Indemnización por años de servicio (4 años)',
          amount: '$3.200.000',
          note: '4 años reconocidos × $800.000',
        },
      ],
      total: '$4.713.333 Total Bruto Finiquito',
    },
    {
      title: 'Exemplo 2: Renuncia Voluntaria con 1 Año y 4 Meses de Servicio',
      scenario:
        'Trabajadora que formaliza renuncia voluntaria con fecha de cese al 30 de abril de 2026 (mes completo laborado), remuneración de $650.000 y 4 meses de feriado proporcional pendiente.',
      inputs: {
        'Sueldo Mensual': '$650.000',
        'Causal': 'Renuncia Voluntaria (Art. 159 Nº 2)',
        'Fecha de Salida': '30 de abril de 2026',
        'Feriado Acumulado': '5 días hábiles (4 meses × 1,25)',
      },
      breakdown: [
        {
          item: 'Sueldo del mes de abril (30 días)',
          amount: '$650.000',
          note: 'Mes completo laborado devengado',
        },
        {
          item: 'Feriado legal y proporcional (5 días hábiles)',
          amount: '$108.333',
          note: '5 días × ($650.000 ÷ 30)',
        },
      ],
      total: '$758.333 Total a Percibir en Finiquito',
    },
  ],
  faqs: [
    {
      q: '¿Cuál es el plazo legal que tiene el empleador para pagar el finiquito en Chile?',
      a: 'Conforme al Artículo 177 del Código del Trabajo, el empleador tiene un plazo de diez (10) días hábiles siguientes a la separación del trabajador para poner a disposición el finiquito y efectuar el pago íntegro de las sumas adeudadas.',
    },
    {
      q: '¿Qué ocurre si el empleador no paga el finiquito dentro de los 10 días hábiles?',
      a: 'El trabajador puede interponer un reclamo directo ante la Dirección del Trabajo (DT). La empresa se expone a multas administrativas que oscilan entre 1 y 60 UTM según el tamaño de la empresa, además de intereses penales y reajustes.',
    },
    {
      q: '¿Cómo se calcula el feriado proporcional de 1,25 días al mes?',
      a: 'La ley otorga 15 días hábiles de descanso por año trabajado. Al dividir 15 entre 12 meses, se obtiene 1,25 días hábiles por cada mes completo de servicios, los cuales se valoran de acuerdo a la remuneración íntegra diaria del empleado.',
    },
    {
      q: '¿Qué es la causal de necesidades de la empresa (Artículo 161)?',
      a: 'Es una causal objetiva de despido determinada por factores económicos o de modernización de la empresa. Obliga al empleador a pagar la indemnización por años de servicio y el mes sustitutivo de aviso previo si no dio aviso con 30 días.',
    },
    {
      q: '¿Cómo opera la regla de la fracción superior a 6 meses para los años de servicio?',
      a: 'Habiendo completado el primer año de servicio, cualquier fracción posterior que supere los 6 meses (más de 180 días) se redondea legalmente hacia arriba y se cuenta como un año completo adicional de indemnización.',
    },
    {
      q: '¿Cuál es el tope máximo de años de servicio que reconoce la ley chilena?',
      a: 'El Artículo 163 del Código del Trabajo establece un tope máximo legal de 11 años (11 meses de remuneración) para contratos celebrados desde el 14 de agosto de 1981 en adelante.',
    },
    {
      q: '¿Qué es la Ley Bustos y en qué casos invalida el despido?',
      a: 'La Ley Bustos (Art. 162) establece que el despido es nulo si el empleador adeuda cotizaciones previsionales (AFP, Fonasa o AFC). Mientras no pague la totalidad de la deuda y notifique al trabajador, subsiste la obligación de pagar el sueldo íntegro.',
    },
    {
      q: '¿Dónde se debe firmar y ratificar el finiquito laboral?',
      a: 'Debe ratificarse ante un ministro de fe: un Notario Público, el inspector del trabajo de la Dirección del Trabajo, el Registro Civil de la comuna, o digitalmente mediante el portal Mi DT con ClaveÚnica.',
    },
    {
      q: '¿Qué es la "reserva de derechos" al momento de firmar el finiquito?',
      a: 'Es una declaración escrita de puño y letra en el finiquito que permite al trabajador cobrar de inmediato los montos reconocidos por la empresa, reteniendo intacto el derecho a demandar en tribunales diferencias de dinero, nulidad o despido injustificado.',
    },
    {
      q: '¿Si renuncio a mi trabajo tengo derecho a cobrar indemnización por años de servicio?',
      a: 'No. En Chile, la renuncia voluntaria (Art. 159 Nº 2) no confiere derecho a indemnización por años de servicio ni aviso previo, salvo que el contrato colectivo o individual contemple expresamente un beneficio convencional de indemnización a todo evento.',
    },
  ],
  sources: [
    {
      label: 'Dirección del Trabajo de Chile (Portal Oficial DT / Mi DT)',
      url: 'https://www.dt.gob.cl',
    },
    {
      label: 'Biblioteca del Congreso Nacional - Código del Trabajo (LeyChile)',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=207436',
    },
    {
      label: 'Superintendencia de Pensiones (Topes Imponibles y Régimen de Previsión)',
      url: 'https://www.spensiones.cl',
    },
    {
      label: 'Poder Judicial de Chile (Juzgados de Letras del Trabajo)',
      url: 'https://www.pjud.cl',
    },
    {
      label: 'ChileAtiende - Trámite de Finiquito Laboral y Ratificación Electrónica',
      url: 'https://www.chileatiende.gob.cl',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Sueldo Líquido Chile',
      path: '/cl/calculadora-sueldo-liquido',
      description: 'Calcula tu sueldo neto mensual tras deducciones de AFP, Fonasa/Isapre e Impuesto Único de Segunda Categoría.',
    },
    {
      title: 'Calculadora de Vacaciones y Feriado Legal',
      path: '/cl/calculadora-vacaciones',
      description: 'Determina los días hábiles y progresivos de descanso remunerado que tienes acumulados.',
    },
    {
      title: 'Calculadora de Horas Extraordinarias',
      path: '/cl/calculadora-horas-extras',
      description: 'Calcula el valor de tus horas extras con el recargo legal obligatorio del 50%.',
    },
  ],
  relatedGuides: [
    {
      title: 'Guía del Finiquito y Causal de Necesidades de la Empresa',
      path: '/cl/guia-finiquito-necesidades-empresa',
      description: 'Aprende a revisar cada ítem de tu finiquito y cómo estampar la reserva de derechos ante Notario.',
    },
    {
      title: 'Guía de la Ley Bustos y Cotizaciones Previsionales',
      path: '/cl/guia-ley-bustos',
      description: 'Conoce cómo funciona la nulidad del despido cuando el empleador no ha pagado AFP o Fonasa.',
    },
  ],
  updatedAt: '2026-01-01',
};
