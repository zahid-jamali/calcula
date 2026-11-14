import { describe, it, expect } from 'vitest';
import { getUpcomingDeadline } from './deadlines';

const aguinaldo = [{ month: 12, day: 20, label: 'Pago del aguinaldo' }];
const prima = [
  { month: 6, day: 30, label: 'Primera prima' },
  { month: 12, day: 20, label: 'Segunda prima' },
];

describe('getUpcomingDeadline', () => {
  it('shows the deadline when it is within 60 days', () => {
    const r = getUpcomingDeadline(aguinaldo, new Date(2026, 10, 14));
    expect(r?.date).toBe('2026-12-20');
    expect(r?.daysLeft).toBe(36);
  });

  it('hides the banner when the deadline is more than 60 days away', () => {
    expect(getUpcomingDeadline(aguinaldo, new Date(2026, 8, 1))).toBeNull();
  });

  it('includes the deadline day itself', () => {
    expect(getUpcomingDeadline(aguinaldo, new Date(2026, 11, 20))?.daysLeft).toBe(0);
  });

  it('rolls over to the next year after the deadline passes', () => {
    expect(getUpcomingDeadline(aguinaldo, new Date(2026, 11, 21))).toBeNull();
    expect(getUpcomingDeadline(aguinaldo, new Date(2026, 11, 21), 365)?.date).toBe('2027-12-20');
  });

  it('picks the closest of several deadlines', () => {
    expect(getUpcomingDeadline(prima, new Date(2026, 4, 15))?.label).toBe('Primera prima');
    expect(getUpcomingDeadline(prima, new Date(2026, 10, 1))?.label).toBe('Segunda prima');
  });
});
