import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Arriendo en UF a Pesos Chile 2026',
  metaDescription:
    'Calcula cuánto pagarás de arriendo en pesos chilenos según la UF de hoy. Tabla de proyección histórica a 12 meses y variación por inflación acumulada.',
  h1: 'Calculadora de Arriendo en UF a Pesos Chilenos (CLP)',
  quickAnswer:
    'La calculadora de arriendo en UF convierte el canon mensual pactado en tu contrato de arrendamiento a pesos chilenos utilizando el valor oficial de la Unidad de Fomento al día de pago, proyectando además el costo anual y el reajuste por inflación acumulada durante los últimos 12 meses.',
  howItWorks: [
    {
      step: 1,
      title: 'Ingresa el canon de arriendo en UF',
      description:
        'Digita el monto mensual en UF convenido en tu contrato de arrendamiento (ej: 14,5 UF).',
    },
    {
      step: 2,
      title: 'Selecciona el día habitual de pago',
      description:
        'Elige el día de vencimiento estipulado (por ejemplo, el 5 de cada mes). La herramienta toma el valor exacto de la UF para esa fecha.',
    },
    {
      step: 3,
      title: 'Revisa la tabla de pagos y reajuste',
      description:
        'Observa el valor exacto en pesos a transferir, el promedio de los últimos 12 meses y la proyección del impacto del IPC en tu presupuesto.',
      formula: 'Arriendo_Pesos = Canon_UF × Valor_UF_del_día',
    },
  ],
  article: `## ¿Cómo funcionan los contratos de arriendo en UF en Chile?

En el dinámico mercado inmobiliario chileno, la Ley de Arrendamiento de Predios Urbanos (Ley Nº 18.101) faculta plenamente a las partes contratantes para fijar el canon mensual de arriendo en pesos chilenos nominales o en **Unidades de Fomento (UF)**.

Al estipular el arriendo en UF, el monto mensual en pesos que el arrendatario debe transferir al arrendador se reajusta de forma continua y automática con la variación del Índice de Precios al Consumidor (IPC). De este modo, el propietario preserva intacto el poder adquisitivo de su inversión sin necesidad de negociar complejas cláusulas periódicas de reajuste semestral o anual, mientras que el arrendatario asume un incremento mensual suave y predecible ligado a la inflación real oficial del país.

Esta modalidad se ha convertido en el estándar indiscutido en las principales ciudades de Chile, especialmente en la Región Metropolitana, Valparaíso, Concepción y Antofagasta, tanto para departamentos y casas habitacionales como para locales comerciales, oficinas y bodegas industriales.

---

## ¿Qué valor de la UF se debe aplicar al pagar el arriendo?

Tanto la doctrina jurídica como la jurisprudencia uniforme de los tribunales civiles chilenos y la práctica mercantil consolidada señalan tres reglas claras:
1. **La regla general de vencimiento:** El arriendo debe liquidarse con el **valor oficial de la UF correspondiente a la fecha fijada para el pago** en el contrato respectivo (habitualmente estipulado dentro de los primeros 5 o 10 días de cada mes calendario).
2. **Pagos en días inhábiles:** Si el día estipulado cae en domingo o festivo y el pago se efectúa el día hábil inmediatamente siguiente, rige la estipulación contractual expresa. A falta de cláusula especial, la costumbre inmobiliaria aplica la UF del día de vencimiento contractual original o del día en que se efectúa la transferencia bancaria.
3. **Mora o retraso culpable:** Si el arrendatario incurre en retraso o mora en el pago del canon, la ley y la equidad exigen que el pago se liquide con la UF de la fecha en que efectivamente se abona la renta, además de los intereses moratorios convencionales pactados en el contrato.

---

## Impacto de la inflación acumulada y proyección a doce meses

Cuando una persona o familia decide arrendar un inmueble pactado en UF, es indispensable contemplar que el desembolso mensual en pesos chilenos aumentará gradualmente a lo largo del año:
- **Evolución gradual mes a mes:** Con una inflación anual moderada del 3,5%, un arriendo de 15 UF (que a principios de año representaba aproximadamente $620.000 CLP) terminará costando cerca de $641.700 CLP al cabo de doce meses.
- **Comparación con contratos en pesos fijos:** En los contratos pactados en pesos chilenos, el arriendo parece mantenerse estático durante los primeros meses. Sin embargo, dichos contratos casi invariablemente contemplan reajustes semestrales o anuales acumulados por el 100% de la inflación del período, lo que genera un impacto presupuestario abrupto e imprevisto en un solo mes. En cambio, el arriendo en UF distribuye ese reajuste en doce cuotas mensuales prácticamente imperceptibles.
- **Herramienta de proyección:** Nuestra calculadora interactiva te permite visualizar la tabla completa de los últimos doce meses con los valores exactos en pesos devengados, calculando el reajuste total acumulado y el promedio anual efectivo.

---

## Qué ocurre en meses con deflación (IPC negativo)

Existe el mito extendido de que los arriendos en UF siempre suben de precio. Sin embargo, en aquellos meses en que el Instituto Nacional de Estadísticas (INE) reporta una variación mensual negativa del IPC (deflación de precios), **el valor diario de la UF desciende de forma efectiva**.

Durante los períodos de deflación, el monto en pesos a transferir por concepto de arriendo disminuye en comparación con el mes anterior, aliviando de manera directa el presupuesto de las familias arrendatarias. La UF refleja con absoluta fidelidad tanto las alzas como las bajas del costo de la vida.

---

## El mes de garantía en contratos en UF: reglas de restitución

La garantía de arrendamiento entregada al momento de suscribir el contrato (habitualmente equivalente a uno o dos meses de canon) tiene por finalidad legal exclusiva responder de los eventuales deterioros e indemnizaciones que fueren imputables al arrendatario, así como del pago de servicios básicos o gastos comunes pendientes al término de la ocupación.

La jurisprudencia judicial ha reiterado de manera categórica que **si el contrato se pactó en UF, la garantía debe restituirse reajustada según la misma unidad**. Por consiguiente, al momento de finalizar el contrato y verificada la entrega conforme del inmueble, el arrendador debe restituir la garantía multiplicando la cantidad de UF depositadas originalmente por el valor que tenga la UF en la fecha de la devolución efectiva, asegurando que el dinero devuelto conserve su poder adquisitivo real.

---

## Consejos prácticos para arrendatarios y propietarios

Para asegurar una relación contractual armónica y transparente, considera las siguientes pautas:
1. **Redacción clara de la cláusula de pago:** Especifica en el texto del contrato qué día del mes vence el pago (por ejemplo, "a más tardar el día 5 de cada mes") y qué valor de la UF se tomará como base de cálculo.
2. **Comprueba el valor oficial con anticipación:** Utiliza siempre nuestra calculadora conectada a las series estadísticas del Banco Central de Chile antes de hacer la transferencia, evitando diferencias de centavos o aproximaciones arbitrarias.
3. **Monitorea los gastos comunes:** Recuerda que los gastos comunes ordinarios del edificio o condominio suelen cobrarse en pesos chilenos según el gasto real devengado en el mes, sumándose al valor en pesos del arriendo en UF.
4. **Capacidad máxima de endeudamiento:** Como regla financiera prudencial, el costo combinado del arriendo y los gastos comunes no debiera superar entre el 25% y el 30% del ingreso líquido mensual familiar comprobable.`,
  examples: [
    {
      title: 'Departamento 2 dormitorios en Santiago Centro',
      scenario: 'Canon pactado de 14 UF con pago los días 5 de cada mes.',
      inputs: {
        'Arriendo mensual': '14 UF',
        'Día de pago': 'Día 5 del mes',
        'Valor UF aplicada': '$41.280',
      },
      breakdown: [
        { item: 'Cálculo', amount: '14 × $41.280', note: 'Multiplicación oficial' },
      ],
      total: '$577.920 CLP a transferir al arrendador',
    },
    {
      title: 'Casa habitacional en La Florida',
      scenario: 'Canon pactado de 22 UF con UF promedio de $41.330.',
      inputs: {
        'Arriendo mensual': '22 UF',
        'Valor UF': '$41.330',
      },
      breakdown: [
        { item: 'Canon pesos', amount: '22 × $41.330 = $909.260 CLP' },
        { item: 'Proyección anual (12 meses)', amount: '≈ $10.911.120 CLP anuales' },
      ],
      total: '$909.260 CLP mensual',
    },
  ],
  faqs: [
    {
      q: '¿Es legal que me cobren el arriendo en UF en Chile?',
      a: 'Sí. Es completamente legal y habitual en Chile. La Ley 18.101 permite convenir el arriendo en moneda nacional reajustable (UF) o en moneda extranjera.',
    },
    {
      q: '¿Qué día de la UF se aplica si pago con retraso?',
      a: 'Por regla general y salvo estipulación en contrario en el contrato, si el arrendatario incurre en mora, debe pagar la UF de la fecha en que efectivamente hace el pago, además de los intereses legales o pactados.',
    },
    {
      q: '¿Conviene más arrendar en UF o en pesos chilenos?',
      a: 'En UF el aumento es gradual y mensual de acuerdo a la inflación real. En pesos el valor se mantiene fijo pero suele sufrir un aumento brusco cada 6 o 12 meses por IPC acumulado.',
    },
    {
      q: '¿Puedo solicitar cambiar mi contrato de UF a pesos?',
      a: 'Solo si ambas partes (arrendador y arrendatario) están de acuerdo y firman un anexo modificatorio de contrato de arrendamiento.',
    },
    {
      q: '¿Cómo afecta la deflación a mi arriendo en UF?',
      a: 'Si en un mes determinado el IPC es negativo, el valor diario de la UF baja, y por ende el monto en pesos a pagar ese mes también disminuye.',
    },
    {
      q: '¿Los gastos comunes también se pueden cobrar en UF?',
      a: 'Generalmente los gastos comunes se cobran en pesos chilenos según el gasto real del edificio, pero el fondo de reserva o multas de copropiedad a veces se vinculan a UF o UTM.',
    },
    {
      q: '¿El mes de garantía se devuelve en UF o en pesos?',
      a: 'El mes de garantía debe restituirse reajustado según la misma unidad pactada en el contrato. Si el contrato se fijó en UF, la garantía se debe restituir al valor de la UF vigente a la fecha de la devolución.',
    },
    {
      q: '¿Dónde puedo verificar la UF oficial del día de mi pago?',
      a: 'En nuestra herramienta "Valor UF Hoy" o directamente en la página del Banco Central de Chile.',
    },
  ],
  sources: [
    { label: 'Ley Nº 18.101: Normas especiales sobre arrendamiento de predios urbanos', url: 'https://www.leychile.cl' },
    { label: 'Banco Central de Chile: Serie oficial histórica de la Unidad de Fomento', url: 'https://www.bcentral.cl' },
  ],
  relatedTools: [
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor diario actualizado de la UF y conversor a pesos chilenos.' },
    { title: 'Simulador de Crédito Hipotecario', path: '/cl/simulador-credito-hipotecario/', description: 'Calcula tu dividendo hipotecario mensual en UF y pesos.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Calcula tus ingresos netos para evaluar tu capacidad de pago.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Todo lo que necesitas saber sobre la Unidad de Fomento en Chile.' },
    { title: 'Qué es la UTM', path: '/cl/guias/que-es-la-utm/', description: 'Diferencias clave entre la Unidad de Fomento y la Unidad Tributaria Mensual.' },
  ],
  updatedAt: '2026-03-01',
};
