# Fontes Oficiais e Verificação de Regras Legais / Fuentes Oficiales

Este documento registra todas as fontes governamentais e de órgãos oficiais utilizadas para os cálculos laborais e financeiros no **Calcula**, parte da rede Zetawala.

Valores com data de verificação pendente (`verifiedOn: null`) são listados abaixo para auditoria contínua.

---

## 🇧🇷 Brasil (pt-BR)

| Parâmetro / Tabela | Valor / Referência | Órgão Oficial | Fonte | Verificado em |
|---|---|---|---|---|
| Salário Mínimo 2026 | R$ 1.518,00 | Governo Federal / Presidência da República | [gov.br / Planalto](https://www.planalto.gov.br) | 2026-01-01 |
| Teto Salário Mínimo Histórico (10 anos) | Histórico 2017 a 2026 oficial | Presidência da República / Leis e Decretos anuais | [Planalto Histórico](https://www.planalto.gov.br) | 2026-01-01 |
| Alíquota FGTS | 8% | Caixa Econômica Federal / Lei 8.036/90 | [Planalto Lei 8.036](https://www.planalto.gov.br/ccivil_03/leis/l8036.htm) | 2026-01-01 |
| Multa Rescisória FGTS (sem justa causa) | 40% | CLT / Lei 8.036/90 art. 18 | [Planalto](https://www.planalto.gov.br) | 2026-01-01 |
| Multa Rescisória FGTS (acordo mútuo) | 20% | CLT Art. 484-A | [Planalto](https://www.planalto.gov.br) | 2026-01-01 |
| Tabela Progressiva INSS 2026 | Faixas de 7,5% a 14% (Teto R$ 8.157,41) | Ministério da Previdência Social / INSS | [Portaria Interministerial MPS/MF](https://www.gov.br/inss) | 2026-01-01 |
| Tabela Progressiva IRRF 2026 | Isenção até R$ 2.259,20 (desconto simplificado R$ 564,80) | Receita Federal do Brasil | [Receita Federal](https://www.gov.br/receitafederal) | 2026-01-01 |
| Dedução por Dependente IRRF | R$ 189,59 por dependente | Receita Federal do Brasil | [Receita Federal](https://www.gov.br/receitafederal) | 2026-01-01 |
| Tabela Seguro-Desemprego 2026 | Faixas de 80%, 50% e Teto R$ 2.351,09 | Ministério do Trabalho e Emprego (MTE) | [MTE Seguro-Desemprego](https://www.gov.br/trabalho-e-emprego) | 2026-01-01 |
| Tabela Saque-Aniversário FGTS | Alíquotas de 50% a 5% + parcela adicional | Caixa Econômica Federal / Lei 13.932/2019 | [Caixa Econômica Federal](https://www.caixa.gov.br) | 2026-01-01 |

---

## 🇲🇽 México (es-MX) — `src/rules/mx/2026.ts`

| Parámetro | Valor | Fuente | Verificado |
|---|---|---|---|
| Salario mínimo general 2026 | $315.04 diario | CONASAMI / DOF 9-dic-2025 | 2026-11-14 (fuentes secundarias que citan el DOF) |
| Salario mínimo ZLFN 2026 | $440.87 diario | CONASAMI / DOF 9-dic-2025 | 2026-11-14 (ídem) |
| UMA 2026 (desde 1-feb-2026) | $117.31 / $3,566.22 / $42,794.64 | INEGI, DOF 9-ene-2026 | 2026-11-14 |
| Subsidio para el empleo 2026 | 15.02% UMA mensual = $535.65; límite $11,492.66 | Decreto DOF 31-dic-2025 | 2026-11-14 |
| Tarifa ISR mensual 2026, renglones 1-7 | Anexo 8 RMF 2026 | SAT | 2026-11-14 (fuentes secundarias) |
| LFT: aguinaldo 15 días, prima vacacional 25%, tabla art. 76, 90 días, 20 días/año, prima de antigüedad 12 días con tope 2 SM | LFT | Cámara de Diputados | 2026-01-01 |

### ⚠️ Pendientes de verificar (`verifiedOn: null`)
- **Tarifa ISR 2026, renglones 8-11** ($55,736.69 en adelante): derivados con el mismo factor de actualización (≈13.21%); confirmar contra el PDF del Anexo 8.
- **Cuotas obreras IMSS** (0.40% excedente 3 UMA, 0.25%, 0.375%, 0.625%, 1.125%; tope SBC 25 UMA).
- **Exenciones ISR** (aguinaldo 30 UMA, prima vacacional 15 UMA, PTU 15 UMA, separación 90 UMA/año).
- **Historial salario mínimo 2017-2026 e historial UMA 2017-2025.**
- El monto del subsidio en enero 2026 (15.59% de la UMA 2025) no se modela; la calculadora usa $535.65.

---

## 🇨🇴 Colombia (es-CO) — `src/rules/co/2026.ts`

| Parámetro | Valor | Fuente | Verificado |
|---|---|---|---|
| SMMLV 2026 | $1.750.905 | Decreto 1469 de 2025; transitorio 0159 de 2026 | 2026-11-14 (fuentes secundarias) — ver nota |
| Auxilio de transporte 2026 | $249.095 (salarios ≤ 2 SMMLV) | Decreto 1470 de 2025 | 2026-11-14 |
| UVT 2026 | $52.374 | Resolución DIAN 000238 de 2025 | 2026-11-14 |
| Jornada máxima (Ley 2101 de 2021) | 47 h (15-jul-2023), 46 h (2024), 44 h (2025), 42 h (15-jul-2026) | Ley 2101 de 2021 | 2026-11-14 |
| Recargo dominical y festivo | 75% → 80% (1-jul-2025) → 90% (1-jul-2026) → 100% (1-jul-2027) | Ley 2466 de 2025, art. 14 | 2026-11-14 (fuentes secundarias) |
| Horas extra / recargo nocturno | 25% diurna, 75% nocturna, 35% nocturno | CST arts. 168 y 179 | 2026-01-01 |
| Cesantías, intereses, prima, vacaciones, art. 64 | 30 días/año, 12%, 30 días/año, 15 días hábiles, tablas 30+20 / 20+15, fijo = tiempo faltante, obra mín. 15 días | CST | 2026-01-01 |

> **Nota SMMLV 2026:** el Consejo de Estado suspendió provisionalmente el Decreto 1469 de 2025; el Decreto 0159 del 19-feb-2026 fijó transitoriamente el mismo valor hasta la sentencia de fondo. Hay reportes contradictorios sobre una posterior revocatoria de la suspensión. Revisar el estado del proceso (rad. 11001-03-25-000-2026-00004-00) y actualizar si la sentencia cambia el valor.

### ⚠️ Pendientes de verificar (`verifiedOn: null`)
- **Inicio del trabajo nocturno a las 7 p. m. desde el 25-dic-2025** (Ley 2466): la mayoría de fuentes da esa fecha; algunas citan 26-dic-2025 o 1-jul-2026. Confirmar en el texto oficial / concepto de Mintrabajo.
- **Calendario de la reforma** (`reformaTimeline`), incluida la duración máxima de 4 años del contrato a término fijo y el régimen de aprendices mencionados en el contenido.
- **Aportes del trabajador**: salud 4%, pensión 4%, IBC mín. 1 / máx. 25 SMMLV, salario integral 13 SMMLV con IBC 70% (reforma pensional Ley 2381 de 2024 en transición).
- **Fondo de Solidaridad Pensional**: 1% desde 4 SMMLV; 1,2/1,4/1,6/1,8/2% desde 16/17/18/19/20 SMMLV.
- **Retención en la fuente, procedimiento 1** (art. 383 ET en UVT: 95/150/360/640/945/2300; 19/28/33/35/37/39%), renta exenta 25% con tope 790 UVT/año, límite global 40% y 1.340 UVT/año, dependientes 10% hasta 32 UVT/mes, redondeo al millar.
- **Historial SMMLV y auxilio 2017-2025** y los números de decreto de 2017-2021 (indicados como "Decreto anual").
- Afirmaciones del contenido: retención del 20% sobre indemnizaciones con ingreso > 204 UVT (art. 401-3 ET); exención de cesantías hasta 350 UVT (art. 206 ET).

### Supuestos del cálculo
- Liquidación: el salario pendiente se toma por defecto como los días del último mes (máx. 30); salud y pensión (8%) se descuentan solo del salario pendiente; no se estima retención sobre la indemnización.
- Vacaciones: salario básico (sin auxilio); la calculadora de vacaciones permite sumar el promedio de variables (CST art. 192).
- Horas extras: los recargos (nocturno, dominical) se pagan solo como porcentaje adicional; las horas extra pagan la hora completa + recargo. Horas mensuales = jornada semanal × 5.

---

## 🇨🇱 Chile (es-CL)

| Parámetro / Tabla | Valor / Referencia | Órgano Oficial | Fuente | Verificado el |
|---|---|---|---|---|
| Ingreso Mínimo Mensual (IMM) 2026 | $500.000 | Ministerio de Hacienda / Ley 21.578 | [bcn.cl / LeyChile](https://www.bcn.cl/leychile) | 2026-01-01 |
| Feriado Anual (Vacaciones) | 15 días hábiles por año | Código del Trabajo art. 67 | [Dirección del Trabajo](https://www.dt.gob.cl) | 2026-01-01 |
| Indemnización por Años de Servicio | 1 mes por año de servicio (tope 11 años) | Código del Trabajo art. 163 | [Dirección del Trabajo](https://www.dt.gob.cl) | 2026-01-01 |
| Indemnización Sustitutiva del Aviso Previo | 1 mes de remuneración | Código del Trabajo art. 161/162 | [Dirección del Trabajo](https://www.dt.gob.cl) | 2026-01-01 |
| Tope Imponible AFP | 84,3 UF | Superintendencia de Pensiones | [spensiones.cl](https://www.spensiones.cl) | 2026-01-01 |

---

## Valores pendentes de confirmação oficial (`verifiedOn: null`)
Ver as listas "Pendientes de verificar" nas seções de México e Colombia acima.
