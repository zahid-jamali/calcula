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

## 🇨🇴 Colombia (es-CO)

| Parámetro / Tabla | Valor / Referencia | Órgano Oficial | Fuente | Verificado el |
|---|---|---|---|---|
| SMMLV 2026 (Salario Mínimo Mensual) | $1.423.500 | Ministerio del Trabajo / Presidencia de la República | [mintrabajo.gov.co](https://www.mintrabajo.gov.co) | 2026-01-01 |
| Auxilio de Transporte 2026 | $200.000 | Presidencia de la República / Decreto | [mintrabajo.gov.co](https://www.mintrabajo.gov.co) | 2026-01-01 |
| Cesantías | 1 mes de salario por año (8.33%) | Código Sustantivo del Trabajo (CST art. 249) | [Secretaría del Senado CST](http://www.secretariasenado.gov.co) | 2026-01-01 |
| Intereses sobre Cesantías | 12% anual sobre el saldo acumulado | Ley 52 de 1975 / CST | [Secretaría del Senado](http://www.secretariasenado.gov.co) | 2026-01-01 |
| Prima de Servicios | 1 mes de salario por año (dividido en 2 cuotas) | CST art. 306 | [Secretaría del Senado](http://www.secretariasenado.gov.co) | 2026-01-01 |
| Vacaciones | 15 días hábiles remunerados por año laborado | CST art. 186 | [Secretaría del Senado](http://www.secretariasenado.gov.co) | 2026-01-01 |

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
*Nenhum valor pendente. Todas as tabelas legais de 2026 estão baseadas em normas vigentes devidamente referenciadas.*
