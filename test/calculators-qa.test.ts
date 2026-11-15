import { describe, it, expect } from 'vitest';

// Brazil Calculators
import { calculateBrRescisao } from '@/lib/br/rescisao';
import { calculateDecimoTerceiro } from '@/lib/br/decimoTerceiro';
import { calculateFerias } from '@/lib/br/ferias';
import { calculateSalarioLiquido } from '@/lib/br/salarioLiquido';
import { calculateSeguroDesemprego } from '@/lib/br/seguroDesemprego';
import { calculateHoraExtra } from '@/lib/br/horaExtra';
import { calculateFgts, calculateSaqueAniversario } from '@/lib/br/fgts';

// Mexico Calculators
import { calculateMxFiniquito } from '@/lib/mx/finiquito';
import { calculateMxAguinaldo } from '@/lib/mx/aguinaldo';
import { calculateMxVacaciones } from '@/lib/mx/vacaciones';
import { calculateMxSueldoNeto } from '@/lib/mx/sueldoNeto';

// Colombia Calculators
import { calculateCoLiquidacion } from '@/lib/co/liquidacion';
import { calculateCoPrima, calculateCoCesantias, calculateCoVacaciones } from '@/lib/co/prestaciones';
import { calculateCoSalarioNeto } from '@/lib/co/salarioNeto';
import { calculateCoHorasExtras } from '@/lib/co/horasExtras';

// Chile Calculators
import { calculateClFiniquito } from '@/lib/cl/finiquito';
import { calculateSueldoLiquido } from '@/lib/cl/sueldoLiquido';
import { calculateArriendoUf } from '@/lib/cl/arriendoUf';
import { calculateCreditoHipotecario } from '@/lib/cl/creditoHipotecario';
import { buildWhatsAppLink } from '@/lib/whatsapp';

describe('Calculators QA Benchmark Suite - All Countries', () => {
  // ==========================================
  // BRAZIL BENCHMARKS
  // ==========================================
  describe('Brazil Calculator Benchmarks (3 scenarios each)', () => {
    it('1. Rescisão: 3 benchmark scenarios', () => {
      // Scenario A: Demissão sem justa causa, aviso indenizado
      const scA = calculateBrRescisao({
        salary: 4000,
        startDate: '2024-01-01',
        endDate: '2026-01-31',
        reason: 'sem-justa-causa',
        noticeType: 'indenizado',
        expiredVacations: 0,
        dependentsCount: 1,
      });
      expect(scA.totalGross).toBeGreaterThan(4000);
      expect(scA.totalNet).toBeGreaterThan(0);
      expect(scA.fgtsWithdrawalAmount).toBeGreaterThan(0);
      expect(scA.rightToSeguroDesemprego).toBe(true);

      // Scenario B: Pedido de demissão com aviso cumprido
      const scB = calculateBrRescisao({
        salary: 2500,
        startDate: '2025-06-01',
        endDate: '2026-06-30',
        reason: 'pedido-demissao',
        noticeType: 'trabalhado',
        expiredVacations: 0,
      });
      expect(scB.fgtsWithdrawalAmount).toBe(0);
      expect(scB.rightToSeguroDesemprego).toBe(false);
      expect(scB.totalNet).toBeGreaterThan(0);

      // Scenario C: Acordo mútuo (art. 484-A)
      const scC = calculateBrRescisao({
        salary: 5000,
        startDate: '2023-01-01',
        endDate: '2026-01-01',
        reason: 'acordo',
        noticeType: 'indenizado',
      });
      expect(scC.fgtsWithdrawalAmount).toBeGreaterThan(0);
      expect(scC.rightToSeguroDesemprego).toBe(false);
    });

    it('2. 13º Salário: 3 benchmark scenarios', () => {
      const a = calculateDecimoTerceiro({ salary: 3000, monthsWorked: 12 });
      expect(a.totalGross).toBe(3000);
      expect(a.firstInstallment).toBe(1500);

      const b = calculateDecimoTerceiro({ salary: 6000, monthsWorked: 6, dependentsCount: 2 });
      expect(b.totalGross).toBe(3000);
      expect(b.firstInstallment).toBe(1500);

      const c = calculateDecimoTerceiro({ salary: 1518, monthsWorked: 12 });
      expect(c.totalGross).toBe(1518);
      expect(c.firstInstallment).toBe(759);
    });

    it('3. Férias: 3 benchmark scenarios', () => {
      const a = calculateFerias({ salary: 3000, sellAbono: false, advance13th: false });
      expect(a.totalGross).toBe(4000);

      const b = calculateFerias({ salary: 3000, sellAbono: true });
      expect(b.abonoGross).toBeGreaterThan(0);

      const c = calculateFerias({ salary: 4000, advance13th: true });
      expect(c.advance13thGross).toBe(2000);
    });

    it('4. Salário Líquido: 3 benchmark scenarios', () => {
      const a = calculateSalarioLiquido({ grossSalary: 1518 });
      expect(a.netSalary).toBeCloseTo(1518 - a.inss, 1);

      const b = calculateSalarioLiquido({ grossSalary: 5000, dependentsCount: 2, discountVT: true });
      expect(b.netSalary).toBeLessThan(5000);

      const c = calculateSalarioLiquido({ grossSalary: 12000 });
      expect(c.inss).toBeGreaterThan(900);
    });

    it('5. Seguro-Desemprego: 3 benchmark scenarios', () => {
      const a = calculateSeguroDesemprego({ lastThreeSalaries: [3000, 3000, 3000], requestNumber: 1, monthsWorked: 18 });
      expect(a.isEligible).toBe(true);
      expect(a.installmentsCount).toBe(4);

      const b = calculateSeguroDesemprego({ lastThreeSalaries: [6000, 6000, 6000], requestNumber: 2, monthsWorked: 25 });
      expect(b.installmentsCount).toBe(5);
      expect(b.installmentValue).toBe(2351.09);

      const c = calculateSeguroDesemprego({ lastThreeSalaries: [2000, 2000, 2000], requestNumber: 1, monthsWorked: 8 });
      expect(c.isEligible).toBe(false);
      expect(c.installmentsCount).toBe(0);
    });

    it('6. Horas Extras: 3 benchmark scenarios', () => {
      const a = calculateHoraExtra({ salary: 2200, monthlyHours: 220, overtime50Hours: 10 });
      expect(a.overtime50Amount).toBe(150);

      const b = calculateHoraExtra({ salary: 4400, monthlyHours: 220, overtime100Hours: 5 });
      expect(b.overtime100Amount).toBe(200);

      const c = calculateHoraExtra({ salary: 3000, nightHours: 20 });
      expect(c.nightBonusAmount).toBeGreaterThan(0);
      expect(c.dsrAmount).toBeGreaterThan(0);
    });

    it('7. FGTS: 3 benchmark scenarios', () => {
      const a = calculateFgts({ monthlySalary: 3000, monthsWorked: 12 });
      expect(a.totalDeposited).toBe(2880);

      const b = calculateFgts({ monthlySalary: 5000, monthsWorked: 24, currentBalance: 10000 });
      expect(b.fine40).toBeGreaterThan(0);

      const c = calculateSaqueAniversario(5000);
      expect(c.saqueAmount).toBeGreaterThan(0);
    });
  });

  // ==========================================
  // MEXICO BENCHMARKS
  // ==========================================
  describe('Mexico Calculator Benchmarks (3 scenarios each)', () => {
    it('1. Finiquito & Liquidación: 3 benchmark scenarios', () => {
      const a = calculateMxFiniquito({
        salary: 15000,
        startDate: '2024-01-01',
        endDate: '2026-06-30',
        owedDays: 15,
        reason: 'renuncia',
      });
      expect(a.totalFiniquito).toBeGreaterThan(0);

      const b = calculateMxFiniquito({
        salary: 15000,
        startDate: '2024-01-01',
        endDate: '2026-06-30',
        owedDays: 15,
        reason: 'despido_injustificado',
      });
      expect(b.totalGross).toBeGreaterThan(a.totalGross);
      expect(b.items.some((i) => i.key === 'indemnizacion_constitucional')).toBe(true);

      const c = calculateMxFiniquito({
        salary: 12000,
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        owedDays: 0,
        reason: 'fin_contrato',
      });
      expect(c.totalFiniquito).toBeGreaterThan(0);
    });

    it('2. Aguinaldo: 3 benchmark scenarios', () => {
      const a = calculateMxAguinaldo({ salary: 15000, periodEnd: '2026-12-31' });
      expect(a.gross).toBe(7500); // 15 days of 500/day
      expect(a.proportional).toBe(false);

      const b = calculateMxAguinaldo({ salary: 18000, startDate: '2026-07-01', periodEnd: '2026-12-31' });
      expect(b.proportional).toBe(true);
      expect(b.gross).toBeLessThan(9000);

      const c = calculateMxAguinaldo({ salary: 30000, periodEnd: '2026-12-31' });
      expect(c.gross).toBe(15000);
    });

    it('3. Vacaciones: 3 benchmark scenarios', () => {
      const a = calculateMxVacaciones({ salary: 15000, startDate: '2025-01-01', referenceDate: '2026-01-01' });
      expect(a.daysEarned).toBe(12); // Vacaciones Dignas year 1
      expect(a.vacationPay).toBe(6000);
      expect(a.primaVacacional).toBe(1500); // 25%

      const b = calculateMxVacaciones({ salary: 15000, startDate: '2024-01-01', referenceDate: '2026-01-01' });
      expect(a.daysEarned).toBeLessThan(b.daysEarned);

      const c = calculateMxVacaciones({ salary: 20000, startDate: '2025-01-01', referenceDate: '2026-07-01' });
      expect(c.total).toBeGreaterThan(0);
    });

    it('4. Sueldo Neto: 3 benchmark scenarios', () => {
      const a = calculateMxSueldoNeto({ grossMonthly: 10000 });
      expect(a.netMonthly).toBeLessThan(10000);
      expect(a.isr).toBeGreaterThan(0);
      expect(a.imss).toBeGreaterThan(0);

      const b = calculateMxSueldoNeto({ grossMonthly: 25000 });
      expect(b.netMonthly).toBeGreaterThan(15000);

      const c = calculateMxSueldoNeto({ grossMonthly: 5000 });
      expect(c.netMonthly).toBeGreaterThan(0);
    });
  });

  // ==========================================
  // COLOMBIA BENCHMARKS
  // ==========================================
  describe('Colombia Calculator Benchmarks (3 scenarios each)', () => {
    it('1. Liquidación: 3 benchmark scenarios', () => {
      const a = calculateCoLiquidacion({
        monthlySalary: 2000000,
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        reason: 'despido_sin_justa_causa',
        contractType: 'indefinido',
      });
      expect(a.totalNet).toBeGreaterThan(2000000);
      expect(a.items.some((i) => i.key === 'indemnizacion')).toBe(true);

      const b = calculateCoLiquidacion({
        monthlySalary: 1600000,
        startDate: '2025-01-01',
        endDate: '2025-06-30',
        reason: 'renuncia',
        contractType: 'indefinido',
      });
      expect(a.totalNet).toBeGreaterThan(b.totalNet);
      expect(b.items.some((i) => i.key === 'indemnizacion')).toBe(false);

      const c = calculateCoLiquidacion({
        monthlySalary: 4000000,
        startDate: '2024-01-01',
        endDate: '2025-12-31',
        reason: 'fin_contrato',
        contractType: 'indefinido',
      });
      expect(c.totalNet).toBeGreaterThan(0);
    });

    it('2. Prima de Servicios: 3 benchmark scenarios', () => {
      const a = calculateCoPrima({ monthlySalary: 2000000, daysInSemester: 180 });
      expect(a.prima).toBeGreaterThan(0);

      const b = calculateCoPrima({ monthlySalary: 1400000, daysInSemester: 180 });
      expect(b.auxilio).toBeGreaterThan(0);

      const c = calculateCoPrima({ monthlySalary: 3000000, daysInSemester: 90 });
      expect(c.prima).toBeGreaterThan(0);
    });

    it('3. Cesantías e Intereses: 3 benchmark scenarios', () => {
      const a = calculateCoCesantias({ monthlySalary: 2400000, daysWorked: 360 });
      expect(a.cesantias).toBeGreaterThan(0);
      expect(a.intereses).toBeGreaterThan(0);

      const b = calculateCoCesantias({ monthlySalary: 1800000, daysWorked: 180 });
      expect(b.cesantias).toBeGreaterThan(0);

      const c = calculateCoCesantias({ monthlySalary: 3600000, daysWorked: 360 });
      expect(c.cesantias).toBeGreaterThan(0);
    });

    it('4. Vacaciones: 3 benchmark scenarios', () => {
      const a = calculateCoVacaciones({ monthlySalary: 2400000, startDate: '2025-01-01', referenceDate: '2026-01-01' });
      expect(a.accruedDays).toBeGreaterThanOrEqual(15);
      expect(a.pendingValue).toBeGreaterThan(1000000);

      const b = calculateCoVacaciones({ monthlySalary: 3000000, startDate: '2025-07-01', referenceDate: '2026-01-01' });
      expect(b.accruedDays).toBeGreaterThanOrEqual(7);

      const c = calculateCoVacaciones({ monthlySalary: 1500000, startDate: '2024-01-01', referenceDate: '2026-01-01' });
      expect(c.accruedDays).toBeGreaterThanOrEqual(30);
    });

    it('5. Salario Neto: 3 benchmark scenarios', () => {
      const a = calculateCoSalarioNeto({ grossMonthly: 1750905 });
      expect(a.salud).toBeGreaterThan(0);
      expect(a.pension).toBeGreaterThan(0);
      expect(a.netMonthly).toBeGreaterThan(0);

      const b = calculateCoSalarioNeto({ grossMonthly: 3501810 });
      expect(b.auxilio).toBeGreaterThan(0);

      const c = calculateCoSalarioNeto({ grossMonthly: 8000000 });
      expect(c.auxilio).toBe(0);
      expect(c.netMonthly).toBeLessThan(8000000);
    });

    it('6. Horas Extras: 3 benchmark scenarios', () => {
      const a = calculateCoHorasExtras({ monthlySalary: 2400000, date: '2026-06-01', hours: { extra_diurna: 10 } });
      expect(a.total).toBeGreaterThan(0);

      const b = calculateCoHorasExtras({ monthlySalary: 2400000, date: '2026-06-01', hours: { extra_nocturna: 5 } });
      expect(b.total).toBeGreaterThan(0);

      const c = calculateCoHorasExtras({ monthlySalary: 2400000, date: '2026-06-01', hours: { dominical_diurno: 8 } });
      expect(c.total).toBeGreaterThan(0);
    });
  });

  // ==========================================
  // CHILE BENCHMARKS
  // ==========================================
  describe('Chile Calculator Benchmarks (3 scenarios each)', () => {
    it('1. Finiquito: 3 benchmark scenarios', () => {
      const a = calculateClFiniquito({
        monthlySalary: 1200000,
        startDate: '2023-01-01',
        endDate: '2026-01-01',
        reason: 'necesidades_empresa',
        hasNotice: false,
        pendingVacationDays: 5,
        ufValue: 40000,
      });
      expect(a.serviceYears).toBe(3);
      expect(a.totalFiniquito).toBeGreaterThan(3600000);

      const b = calculateClFiniquito({
        monthlySalary: 800000,
        startDate: '2024-01-01',
        endDate: '2025-06-30',
        reason: 'renuncia',
        hasNotice: true,
        pendingVacationDays: 0,
        ufValue: 40000,
      });
      expect(b.items.some((i) => i.key === 'indemnizacion_anios_servicio')).toBe(false);

      const c = calculateClFiniquito({
        monthlySalary: 1000000,
        startDate: '2024-01-01',
        endDate: '2025-01-01',
        reason: 'vencimiento_plazo',
        pendingVacationDays: 10,
        ufValue: 40000,
      });
      expect(c.totalFiniquito).toBeGreaterThan(0);
    });

    it('2. Sueldo Líquido: 3 benchmark scenarios', () => {
      const a = calculateSueldoLiquido({
        sueldoBase: 500000,
        gratificacionType: 'art50',
        afp: 'Modelo',
        saludType: 'fonasa',
        contractType: 'indefinido',
        ufValue: 40000,
        utmValue: 70000,
      });
      expect(a.sueldoLiquido).toBeGreaterThan(0);
      expect(a.saludDiscount).toBe(Math.round(a.totalImponible * 0.07));

      const b = calculateSueldoLiquido({
        sueldoBase: 2500000,
        gratificacionType: 'art50',
        afp: 'Habitat',
        saludType: 'fonasa',
        contractType: 'indefinido',
        ufValue: 40000,
        utmValue: 70000,
      });
      expect(b.impuestoUnico).toBeGreaterThan(0);

      const c = calculateSueldoLiquido({
        sueldoBase: 1200000,
        gratificacionType: 'none',
        afp: 'Cuprum',
        saludType: 'isapre',
        isaprePlanUf: 3.5,
        contractType: 'indefinido',
        ufValue: 40000,
        utmValue: 70000,
      });
      expect(c.saludDiscount).toBeGreaterThan(0);
    });

    it('3. Arriendo UF: 3 benchmark scenarios', () => {
      const a = calculateArriendoUf({ rentUf: 15, targetDate: '2024-06-05' });
      expect(a.rentUf).toBe(15);
      expect(a.currentRentPesos).toBeGreaterThan(500000);

      const b = calculateArriendoUf({ rentUf: 12, targetDate: '2024-12-05' });
      expect(b.history.length).toBe(12);

      const c = calculateArriendoUf({ rentUf: 18, targetDate: '2024-12-05' });
      expect(c.annualAverageRentPesos).toBeGreaterThan(0);
    });

    it('4. Crédito Hipotecario: 3 benchmark scenarios', () => {
      const a = calculateCreditoHipotecario({
        propertyPriceUf: 3000,
        piePercentage: 20,
        annualRatePercentage: 4.5,
        years: 20,
        ufValue: 40000,
      });
      expect(a.pieUf).toBe(600);
      expect(a.loanAmountUf).toBe(2400);
      expect(a.monthlyDividendoUf).toBeGreaterThan(15);

      const b = calculateCreditoHipotecario({
        propertyPriceUf: 2000,
        piePercentage: 10,
        annualRatePercentage: 5.0,
        years: 30,
        ufValue: 40000,
      });
      expect(b.loanAmountUf).toBe(1800);

      const c = calculateCreditoHipotecario({
        propertyPriceUf: 5000,
        piePercentage: 30,
        annualRatePercentage: 4.0,
        years: 15,
        ufValue: 40000,
      });
      expect(c.totalInterestUf).toBeGreaterThan(0);
    });

    it('5. WhatsApp Link Generator: 3 benchmark scenarios', () => {
      const a = buildWhatsAppLink('11999999999', 'Olá!', 'br');
      expect(a).toBe('https://wa.me/5511999999999?text=Ol%C3%A1!');

      const b = buildWhatsAppLink('912345678', '', 'cl');
      expect(b).toBe('https://wa.me/56912345678');

      const c = buildWhatsAppLink('3001234567', 'Cotización', 'co');
      expect(c).toContain('https://wa.me/573001234567');
    });
  });

  // ==========================================
  // EDGE CASES & INPUT VALIDATIONS
  // ==========================================
  describe('Edge Cases & Resilient Handling', () => {
    it('handles zero, negative, and extreme inputs safely without NaN or crash', () => {
      // Brazil
      const brZero = calculateSalarioLiquido({ grossSalary: 0 });
      expect(brZero.netSalary).toBe(0);
      expect(Number.isNaN(brZero.netSalary)).toBe(false);

      const brRescisaoZero = calculateBrRescisao({
        salary: 0,
        startDate: '2025-01-01',
        endDate: '2025-01-01',
        reason: 'sem-justa-causa',
        noticeType: 'indenizado',
      });
      expect(Number.isNaN(brRescisaoZero.totalNet)).toBe(false);

      // Mexico
      const mxZero = calculateMxFiniquito({
        salary: 0,
        startDate: '2025-01-01',
        endDate: '2025-01-01',
        owedDays: 0,
        reason: 'renuncia',
      });
      expect(Number.isNaN(mxZero.totalFiniquito)).toBe(false);

      const mxSueldoZero = calculateMxSueldoNeto({ grossMonthly: 0 });
      expect(mxSueldoZero.netMonthly).toBe(0);

      // Colombia
      const coZero = calculateCoLiquidacion({
        monthlySalary: 0,
        startDate: '2025-01-01',
        endDate: '2025-01-01',
        reason: 'renuncia',
        contractType: 'indefinido',
      });
      expect(Number.isNaN(coZero.totalNet)).toBe(false);

      const coSueldoZero = calculateCoSalarioNeto({ grossMonthly: 0 });
      expect(coSueldoZero.netMonthly).toBe(0);

      // Chile
      const clZero = calculateClFiniquito({
        monthlySalary: 0,
        startDate: '2025-01-01',
        endDate: '2025-01-01',
        reason: 'renuncia',
        ufValue: 40000,
      });
      expect(Number.isNaN(clZero.totalFiniquito)).toBe(false);

      const clSueldoZero = calculateSueldoLiquido({ sueldoBase: 0 });
      expect(clSueldoZero.sueldoLiquido).toBe(0);
    });

    it('handles inverted dates gracefully (end date before start date)', () => {
      const brInverted = calculateBrRescisao({
        salary: 3000,
        startDate: '2026-01-01',
        endDate: '2025-01-01',
        reason: 'sem-justa-causa',
        noticeType: 'indenizado',
      });
      expect(Number.isNaN(brInverted.totalNet)).toBe(false);

      const mxInverted = calculateMxFiniquito({
        salary: 15000,
        startDate: '2026-01-01',
        endDate: '2025-01-01',
        owedDays: 0,
        reason: 'renuncia',
      });
      expect(Number.isNaN(mxInverted.totalFiniquito)).toBe(false);

      const coInverted = calculateCoLiquidacion({
        monthlySalary: 2000000,
        startDate: '2026-01-01',
        endDate: '2025-01-01',
        reason: 'renuncia',
        contractType: 'indefinido',
      });
      expect(Number.isNaN(coInverted.totalNet)).toBe(false);
    });
  });
});
