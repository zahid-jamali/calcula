import { describe, it, expect } from 'vitest';
import { calculateBrRescisao } from './rescisao';

describe('calculateBrRescisao', () => {
  it('1. calculates demissão sem justa causa with aviso prévio indenizado and projection', () => {
    const res = calculateBrRescisao({
      salary: 3000,
      startDate: '2024-01-01',
      endDate: '2026-06-30', // 2 years complete
      reason: 'sem-justa-causa',
      noticeType: 'indenizado',
      fgtsBalance: 5000,
    });

    expect(res.totalServiceYears).toBe(2);
    expect(res.noticeDays).toBe(36); // 30 + 2*3
    expect(res.projectedEndDate).toBe('2026-08-05'); // 2026-06-30 + 36 days

    const avisoItem = res.items.find((i) => i.key === 'aviso_previo');
    expect(avisoItem).toBeDefined();
    expect(avisoItem?.amount).toBe(3600); // 36 * 100

    // With notice projection extending to Aug 5, 13º and férias have 7/12 months
    const decimoItem = res.items.find((i) => i.key === 'decimo_terceiro');
    expect(decimoItem).toBeDefined();
    expect(decimoItem?.amount).toBe(1750); // (3000 / 12) * 7

    const feriasItem = res.items.find((i) => i.key === 'ferias_proporcionais');
    expect(feriasItem).toBeDefined();
    expect(feriasItem?.amount).toBe(1750); // (3000 / 12) * 7

    const tercoItem = res.items.find((i) => i.key === 'terco_ferias');
    expect(tercoItem).toBeDefined();
    expect(tercoItem?.amount).toBe(583.33);

    const multaItem = res.items.find((i) => i.key === 'multa_fgts');
    expect(multaItem).toBeDefined();
    expect(multaItem?.amount).toBe(2000); // 40% of 5000

    expect(res.fgtsWithdrawalAmount).toBe(7000); // 5000 + 2000
    expect(res.rightToSeguroDesemprego).toBe(true);
    expect(res.paymentDeadline).toBe('10 dias corridos a partir do término (Art. 477, § 6º da CLT)');
    expect(res.totalGross).toBeGreaterThan(0);
    expect(res.totalDeductions).toBeGreaterThan(0);
    expect(res.totalNet).toBe(res.totalGross - res.totalDeductions);
  });

  it('2. calculates pedido de demissão with aviso prévio não cumprido (30 days deduction)', () => {
    const res = calculateBrRescisao({
      salary: 3000,
      startDate: '2025-01-01',
      endDate: '2026-03-31',
      reason: 'pedido-demissao',
      noticeType: 'nao-cumprido',
      fgtsBalance: 4000,
    });

    // Employer deducts 30 days of salary
    const noticeDeduction = res.items.find((i) => i.key === 'desconto_aviso_previo');
    expect(noticeDeduction).toBeDefined();
    expect(noticeDeduction?.amount).toBe(3000);
    expect(noticeDeduction?.isDeduction).toBe(true);

    // No notice indemnity paid to employee
    expect(res.items.some((i) => i.key === 'aviso_previo')).toBe(false);

    // No FGTS fine or withdrawal on employee resignation
    expect(res.items.some((i) => i.key === 'multa_fgts')).toBe(false);
    expect(res.fgtsWithdrawalAmount).toBe(0);
    expect(res.rightToSeguroDesemprego).toBe(false);

    // Saldo and proportional vacation/13th are still due
    expect(res.items.some((i) => i.key === 'saldo_salario')).toBe(true);
    expect(res.items.some((i) => i.key === 'decimo_terceiro')).toBe(true);
    expect(res.items.some((i) => i.key === 'ferias_proporcionais')).toBe(true);
  });

  it('3. calculates acordo CLT art. 484-A (50% notice, 20% multa, 80% withdrawal)', () => {
    const res = calculateBrRescisao({
      salary: 4000,
      startDate: '2024-01-01',
      endDate: '2025-01-01', // 1 full year = 33 notice days
      reason: 'acordo',
      noticeType: 'indenizado',
      fgtsBalance: 10000,
    });

    expect(res.noticeDays).toBe(33); // 30 + 1*3

    // Notice indemnity at 50%
    const avisoItem = res.items.find((i) => i.key === 'aviso_previo');
    expect(avisoItem).toBeDefined();
    // 33 days * (4000 / 30) * 0.5 = 2200
    expect(avisoItem?.amount).toBe(2200);

    // FGTS fine at 20%
    const multaItem = res.items.find((i) => i.key === 'multa_fgts');
    expect(multaItem).toBeDefined();
    expect(multaItem?.amount).toBe(2000); // 20% of 10000

    // Withdrawal is 80% of balance + 20% multa
    expect(res.fgtsWithdrawalAmount).toBe(10000); // 8000 + 2000
    expect(res.rightToSeguroDesemprego).toBe(false); // Acordo doesn't grant seguro-desemprego
  });

  it('4. calculates demissão com justa causa (only saldo and férias vencidas)', () => {
    const res = calculateBrRescisao({
      salary: 3000,
      startDate: '2025-01-01',
      endDate: '2026-03-15',
      reason: 'justa-causa',
      noticeType: 'trabalhado',
      expiredVacations: 1,
    });

    expect(res.items.some((i) => i.key === 'saldo_salario')).toBe(true);
    expect(res.items.some((i) => i.key === 'ferias_vencidas')).toBe(true);
    expect(res.items.some((i) => i.key === 'terco_ferias_vencidas')).toBe(true);

    // Loses 13º proporcional, férias proporcionais, aviso, multa FGTS, seguro-desemprego
    expect(res.items.some((i) => i.key === 'aviso_previo')).toBe(false);
    expect(res.items.some((i) => i.key === 'decimo_terceiro')).toBe(false);
    expect(res.items.some((i) => i.key === 'ferias_proporcionais')).toBe(false);
    expect(res.items.some((i) => i.key === 'multa_fgts')).toBe(false);
    expect(res.fgtsWithdrawalAmount).toBe(0);
    expect(res.rightToSeguroDesemprego).toBe(false);
  });

  it('5. calculates término de contrato de experiência (at term)', () => {
    const res = calculateBrRescisao({
      salary: 2500,
      startDate: '2026-01-01',
      endDate: '2026-03-31',
      reason: 'termino-experiencia',
      noticeType: 'dispensado',
      fgtsBalance: 600,
    });

    expect(res.items.some((i) => i.key === 'saldo_salario')).toBe(true);
    expect(res.items.some((i) => i.key === 'decimo_terceiro')).toBe(true);
    expect(res.items.some((i) => i.key === 'ferias_proporcionais')).toBe(true);

    // No notice indemnity and no FGTS penalty at contract term
    expect(res.items.some((i) => i.key === 'aviso_previo')).toBe(false);
    expect(res.items.some((i) => i.key === 'multa_fgts')).toBe(false);

    // 100% of FGTS balance can be withdrawn (código 04)
    expect(res.fgtsWithdrawalAmount).toBe(600);
    expect(res.rightToSeguroDesemprego).toBe(false);
  });

  it('6. calculates férias vencidas pagas em dobro (CLT art. 137)', () => {
    const res = calculateBrRescisao({
      salary: 3000,
      startDate: '2023-01-01',
      endDate: '2026-01-01',
      reason: 'sem-justa-causa',
      noticeType: 'dispensado',
      expiredVacations: 1,
      vacationsInDouble: true,
    });

    const feriasVencidas = res.items.find((i) => i.key === 'ferias_vencidas');
    expect(feriasVencidas).toBeDefined();
    expect(feriasVencidas?.amount).toBe(6000); // 3000 * 2

    const tercoFeriasVencidas = res.items.find((i) => i.key === 'terco_ferias_vencidas');
    expect(tercoFeriasVencidas).toBeDefined();
    expect(tercoFeriasVencidas?.amount).toBe(2000); // 1000 * 2
  });

  it('7. calculates rescisão antecipada de experiência pelo empregador (Art. 479 CLT)', () => {
    const res = calculateBrRescisao({
      salary: 3000,
      startDate: '2026-01-01',
      endDate: '2026-02-15',
      reason: 'rescisao-antecipada-experiencia-empregador',
      noticeType: 'dispensado',
      remainingContractDays: 44,
      fgtsBalance: 400,
    });

    const art479Item = res.items.find((i) => i.key === 'indenizacao_art_479');
    expect(art479Item).toBeDefined();
    // 44 days * (3000 / 30) * 0.5 = 2200
    expect(art479Item?.amount).toBe(2200);

    // Receives 40% multa FGTS and full withdrawal
    const multaItem = res.items.find((i) => i.key === 'multa_fgts');
    expect(multaItem).toBeDefined();
    expect(multaItem?.amount).toBe(160); // 40% of 400
    expect(res.fgtsWithdrawalAmount).toBe(560); // 400 + 160
    expect(res.rightToSeguroDesemprego).toBe(true);
  });
});
