import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Qué es la UTM en Chile y Para Qué Sirve: Guía 2026',
  metaDescription:
    'Descubre qué es la Unidad Tributaria Mensual (UTM) en Chile, cómo se calcula su valor mensual según el IPC, qué es la UTA y sus usos en multas e impuestos.',
  h1: 'Qué es la UTM en Chile: Significado, Cálculo y Aplicaciones',
  quickAnswer:
    'La Unidad Tributaria Mensual (UTM) es una medida económica oficial en Chile reajustada mensualmente según la inflación (IPC). Sirve como unidad de referencia para fijar los tramos del Impuesto Único de Segunda Categoría, multas de juzgados de policía local, aranceles y pagos tributarios.',
  howItWorks: [
    {
      step: 1,
      title: 'Ajuste Mensual por el SII',
      description: 'El Servicio de Impuestos Internos calcula mensualmente el valor oficial aplicable a todo el mes calendario.',
    },
    {
      step: 2,
      title: 'Indexación al IPC',
      description: 'La UTM sube o baja de acuerdo con la inflación informada por el INE en el penúltimo mes anterior.',
      formula: 'UTM_mes = UTM_mes_anterior × (1 + IPC_penultimo)',
    },
    {
      step: 3,
      title: 'Aplicación en Tributos y Sanciones',
      description: 'Se multiplica la cantidad de UTM indicada por la ley o sentencia judicial por el valor en pesos del mes.',
    },
  ],
  article: `## Concepto y origen legal de la Unidad Tributaria Mensual en Chile

La **Unidad Tributaria Mensual (UTM)** fue establecida en el ordenamiento jurídico de Chile mediante el Decreto Ley Nº 830 de 1974 (Código Tributario), en su artículo 8º. Se trata de una unidad económica de cuenta y referencia oficial creada para garantizar que los tributos fiscales, las multas judiciales y los aranceles públicos no pierdan su valor real a causa de la inflación.

A diferencia del peso chileno, cuyo valor adquisitivo se erosiona en el tiempo debido al alza sostenida de los precios, la UTM se reajusta periódicamente con base en la variación oficial del **Índice de Precios al Consumidor (IPC)** que elabora el Instituto Nacional de Estadísticas (INE). De esta manera, el Estado de Chile asegura la equidad tributaria y la efectividad disuasiva de las sanciones administrativas y judiciales.

A diferencia de la Unidad de Fomento (UF), que se modifica diariamente, la UTM **mantiene un único valor invariable durante todo el mes calendario**, entrando en vigencia el primer día y rigiendo hasta el último día del mes respectivo.

---

## Determinación y reajuste mensual por el Servicio de Impuestos Internos

El valor oficial de la UTM es fijado y publicado mensualmente por el **Servicio de Impuestos Internos (SII)** en su portal institucional y en el Diario Oficial.

La norma del artículo 8º del Código Tributario establece la siguiente regla de cálculo:
- Para determinar la UTM de un determinado mes, se toma el valor del mes anterior y se le aplica la variación porcentual del IPC registrada en el **penúltimo mes anterior**.
- Por ejemplo, para fijar el valor de la UTM de mayo se utiliza la inflación del mes de marzo; para la UTM de junio, la de abril, y así sucesivamente.
- Si en ese período el IPC fue positivo, la UTM sube de valor. Si la variación fue negativa (deflación), la ley estipula que la UTM disminuya proporcionalmente en pesos chilenos.

---

## Principales aplicaciones de la UTM en la vida ciudadana

La UTM se utiliza en ámbitos muy concretos del sistema público y legal chileno:

### 1. Tramos del Impuesto Único de Segunda Categoría (Sueldos)
La escala de tasas progresivas del impuesto que pagan los trabajadores dependientes en Chile está determinada por ley en tramos de UTM:
- **Hasta 13,5 UTM:** Tramo completamente exento de impuesto a la renta (tasa 0%). Con una UTM de $72.440 en 2026, esto protege sueldos líquidos de hasta aproximadamente $978.000 CLP.
- **De 13,5 a 30 UTM:** Tasa del 4% con rebaja legal del SII.
- **Tramos superiores:** Tasas del 8%, 13,5%, 23%, 30,4%, 35% y hasta 40%.
Al expresarse en UTM, cuando los precios aumentan, el tramo exento se expande en pesos, evitando que un simple reajuste salarial por costo de la vida obligue al trabajador a pagar más impuestos.

### 2. Multas de tránsito en Juzgados de Policía Local
Todas las infracciones contempladas en la Ley de Tránsito (Ley Nº 18.290) se cobran en UTM:
- **Infracciones Gravísimas (1,5 a 3 UTM):** No respetar luz roja, manejar sin licencia de conducir o circular a exceso de velocidad en más de 20 km/h.
- **Infracciones Graves (1 a 1,5 UTM):** Conducir sin revisión técnica al día, usar el teléfono al volante sin manos libres o no llevar puesto el cinturón de seguridad.
- **Infracciones Menos Graves (0,5 a 1 UTM) y Leves (0,2 a 0,5 UTM):** Mal estacionamiento y contravenciones menores.

### 3. Pensiones de alimentos en Tribunales de Familia
Los jueces de familia fijan comúnmente las pensiones alimenticias en múltiplos o fracciones de UTM para que la cuota de manutención infantil aumente mes a mes con la inflación de forma automática, sin requerir liquidaciones judiciales periódicas.

### 4. Derechos municipales y aranceles notariales
Las patentes de negocios y las tarifas de trámites en notarías y conservadores de bienes raíces están reguladas por ley en fracciones de UTM.

---

## Qué es la UTA (Unidad Tributaria Anual)

La **Unidad Tributaria Anual (UTA)** equivale al valor de la UTM de un determinado mes multiplicado por doce ($12 \times \text{UTM}$).

Se aplica en el ámbito contable anual:
- En la Operación Renta de abril para los tramos del **Impuesto Global Complementario**.
- Para determinar el tope de ventas de las pequeñas empresas acogidas al régimen tributario Pro Pyme.
- Para sanciones administrativas anuales de la Dirección del Trabajo y del SII.

---

## Consejos para contribuyentes y ciudadanos frente a la UTM

1. **Revisa tu liquidación mensual:** Asegúrate de que el departamento de recursos humanos o contabilidad aplique la UTM exacta del mes correspondiente para calcular la rebaja legal de tu Impuesto Único de Segunda Categoría.
2. **Aprovecha el descuento por pronto pago en multas:** Si recibes una citación del Juzgado de Policía Local, acudir dentro de los primeros cinco días hábiles te otorga por ley una rebaja del 25% del total en pesos.
3. **Consulta tablas oficiales:** Utiliza siempre nuestra herramienta y el sitio del SII para verificar los valores históricos o presentes de la UTM y la UTA antes de efectuar pagos fiscales.

---

## Diferencias esenciales: UF vs UTM en Chile

- **Periodicidad:** La UF cambia todos los días del año; la UTM cambia una sola vez al mes (el día 1).
- **Ámbito:** La UF rige en el mercado financiero e inmobiliario privado (créditos hipotecarios, arriendos, planes de Isapre). La UTM rige en el sector público, tributario y judicial (impuestos, multas de tránsito y aranceles).
- **Institución:** La UF es calculada por el Banco Central de Chile; la UTM es formalizada por el Servicio de Impuestos Internos (SII).`,
  examples: [
    {
      title: 'Multa de tránsito por estacionar en sitio de discapacitados (1,5 UTM)',
      scenario: 'Infracción grave con UTM fijada en $72.440.',
      inputs: { 'Multa': '1,5 UTM', 'Valor UTM': '$72.440' },
      breakdown: [{ item: 'Cálculo', amount: '1,5 × $72.440', note: 'Pago en Tesorería Municipal' }],
      total: '$108.660 CLP de multa a cancelar',
    },
    {
      title: 'Pensión alimenticia pactada en 2 UTM',
      scenario: 'Tribunal fija pensión mensual reajustable para manutención infantil.',
      inputs: { 'Pensión decretada': '2 UTM', 'Valor UTM': '$72.440' },
      breakdown: [{ item: 'Monto mensual', amount: '2 × $72.440' }],
      total: '$144.880 CLP depositados en la cuenta de alimentos',
    },
  ],
  faqs: [
    { q: '¿Quién fija el valor de la UTM?', a: 'El Servicio de Impuestos Internos (SII) publica formalmente el valor de la UTM para cada mes en base a los datos del INE.' },
    { q: '¿Cuál es la diferencia entre la UF y la UTM?', a: 'La UF cambia todos los días y se usa en finanzas y créditos bancarios. La UTM cambia mensualmente y se usa en impuestos, multas judiciales y tributos estatales.' },
    { q: '¿A cuánto equivale 1 UTA?', a: '1 UTA (Unidad Tributaria Anual) equivale exactamente a 12 UTM del mes correspondiente.' },
    { q: '¿La UTM puede bajar?', a: 'Sí. Cuando la variación del IPC del penúltimo mes anterior es negativa, la UTM del mes siguiente experimenta una reducción.' },
    { q: '¿Cómo afecta la UTM a mi sueldo mensual?', a: 'Determina el tramo exento de Impuesto Único (13,5 UTM). Cuando la UTM sube, el límite en pesos libres de impuestos también sube.' },
    { q: '¿Dónde se pagan las multas fijadas en UTM?', a: 'En las Tesorerías Municipales del Juzgado de Policía Local o mediante pago electrónico habilitado por el municipio respectivo.' },
    { q: '¿Cuándo entra en vigencia el nuevo valor de la UTM?', a: 'El día 1 de cada mes calendario.' },
    { q: '¿Dónde puedo consultar la tabla anual completa de la UTM?', a: 'En nuestra herramienta "Valor UTM 2026", con la tabla histórica mes a mes y conversor a pesos chilenos.' },
  ],
  sources: [
    { label: 'Servicio de Impuestos Internos (SII): Serie Histórica de la UTM', url: 'https://www.sii.cl' },
    { label: 'Decreto Ley Nº 830 de 1974 (Código Tributario de Chile)', url: 'https://www.leychile.cl' },
  ],
  relatedTools: [
    { title: 'Valor UTM 2026', path: '/cl/valor-utm/', description: 'Tabla mensual de la UTM y conversor interactivo a pesos chilenos.' },
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor diario actualizado de la UF y conversor a pesos.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Calcula el Impuesto Único de Segunda Categoría en base a UTM.' },
  ],
  relatedGuides: [
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Aprende qué es la Unidad de Fomento y cómo se diferencia de la UTM.' },
    { title: 'De Sueldo Bruto a Líquido en Chile', path: '/cl/guias/de-sueldo-bruto-a-liquido/', description: 'Conoce cómo impacta la UTM en las deducciones de tu liquidación.' },
  ],
  updatedAt: '2026-03-01',
};
