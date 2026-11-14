export interface AnnualDeadline {
  /** 1-12 */
  month: number;
  day: number;
  /** Short label of what is due, e.g. "Pago del aguinaldo" */
  label: string;
}

export interface UpcomingDeadline extends AnnualDeadline {
  /** ISO date of the next occurrence */
  date: string;
  daysLeft: number;
}

const MS_PER_DAY = 86_400_000;

function utcDay(d: Date): number {
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * Returns the closest upcoming annual deadline (today included) when it falls within
 * `windowDays` days of `today`, otherwise null. Used for seasonal callouts.
 */
export function getUpcomingDeadline(
  deadlines: AnnualDeadline[],
  today: Date,
  windowDays = 60
): UpcomingDeadline | null {
  const todayUtc = utcDay(today);
  let best: UpcomingDeadline | null = null;

  for (const d of deadlines) {
    for (const year of [today.getFullYear(), today.getFullYear() + 1]) {
      const ts = Date.UTC(year, d.month - 1, d.day);
      const daysLeft = Math.round((ts - todayUtc) / MS_PER_DAY);
      if (daysLeft < 0) continue;
      if (daysLeft <= windowDays && (!best || daysLeft < best.daysLeft)) {
        best = {
          ...d,
          date: `${year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`,
          daysLeft,
        };
      }
      break;
    }
  }
  return best;
}
