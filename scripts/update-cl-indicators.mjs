/**
 * scripts/update-cl-indicators.mjs
 * Fetches daily economic indicators from mindicador.cl (Banco Central de Chile).
 * Node 20+ native fetch only, zero third-party dependencies.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../public/data');
const INDICATORS_FILE = path.join(DATA_DIR, 'cl-indicators.json');
const HISTORY_FILE = path.join(DATA_DIR, 'cl-uf-history.json');

function formatDate(isoString) {
  if (!isoString) return '';
  return isoString.split('T')[0];
}

function formatMonth(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

async function fetchWithRetry(url, retries = 3, delayMs = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Calcula-Chile-Pipeline/1.0 (https://calcula.zetawala.com)',
          Accept: 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} from ${url}`);
      }
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

async function main() {
  console.log('🔄 Starting Chile economic indicators update...');
  await fs.mkdir(DATA_DIR, { recursive: true });

  // 1. Fetch current indicators
  console.log('📡 Fetching https://mindicador.cl/api ...');
  const apiData = await fetchWithRetry('https://mindicador.cl/api');

  if (!apiData || typeof apiData !== 'object') {
    throw new Error('Invalid response received from mindicador.cl API');
  }

  const { uf, utm, dolar, euro, ipc } = apiData;

  // 2. Validate essential values
  if (!uf || typeof uf.valor !== 'number' || uf.valor <= 0) {
    throw new Error(`Invalid UF value: ${JSON.stringify(uf)}`);
  }
  if (!utm || typeof utm.valor !== 'number' || utm.valor <= 0) {
    throw new Error(`Invalid UTM value: ${JSON.stringify(utm)}`);
  }
  if (!dolar || typeof dolar.valor !== 'number' || dolar.valor <= 0) {
    throw new Error(`Invalid Dolar value: ${JSON.stringify(dolar)}`);
  }
  if (!euro || typeof euro.valor !== 'number' || euro.valor <= 0) {
    throw new Error(`Invalid Euro value: ${JSON.stringify(euro)}`);
  }
  if (!ipc || typeof ipc.valor !== 'number' || isNaN(ipc.valor)) {
    throw new Error(`Invalid IPC value: ${JSON.stringify(ipc)}`);
  }

  // 3. Load previous indicators if available and validate UF change rate (< 1%)
  let prevIndicators = null;
  try {
    const raw = await fs.readFile(INDICATORS_FILE, 'utf-8');
    prevIndicators = JSON.parse(raw);
  } catch {
    console.log('ℹ️ No previous indicators file found. Creating first version.');
  }

  if (prevIndicators && prevIndicators.uf && typeof prevIndicators.uf.value === 'number') {
    const prevUf = prevIndicators.uf.value;
    const diff = Math.abs(uf.valor - prevUf);
    const changeRate = diff / prevUf;
    if (changeRate >= 0.01) {
      throw new Error(
        `UF change validation failed! Previous: ${prevUf}, New: ${uf.valor}, Change: ${(changeRate * 100).toFixed(2)}% (limit is 1%)`
      );
    }
  }

  const newIndicators = {
    updatedAt: new Date().toISOString(),
    uf: {
      date: formatDate(uf.fecha),
      value: uf.valor,
    },
    utm: {
      month: formatMonth(utm.fecha),
      value: utm.valor,
    },
    dolar: {
      date: formatDate(dolar.fecha),
      value: dolar.valor,
    },
    euro: {
      date: formatDate(euro.fecha),
      value: euro.valor,
    },
    ipc: {
      date: formatMonth(ipc.fecha),
      value: ipc.valor,
    },
  };

  // 4. Update or backfill UF history from 2020 onwards
  let existingHistory = [];
  try {
    const rawHistory = await fs.readFile(HISTORY_FILE, 'utf-8');
    existingHistory = JSON.parse(rawHistory);
  } catch {
    console.log('ℹ️ No UF history file found. Backfill will be initiated from 2020.');
  }

  const historyMap = new Map();
  for (const item of existingHistory) {
    if (item && item.date && typeof item.value === 'number') {
      historyMap.set(item.date, item.value);
    }
  }

  const currentYear = new Date().getFullYear();
  const needsBackfill = !historyMap.has('2020-01-02') || historyMap.size < 500;

  if (needsBackfill) {
    console.log(`⏳ Backfilling UF history from 2020 to ${currentYear}...`);
    for (let yr = 2020; yr <= currentYear; yr++) {
      console.log(`   Fetching UF series for ${yr}...`);
      try {
        const yrData = await fetchWithRetry(`https://mindicador.cl/api/uf/${yr}`);
        if (yrData && Array.isArray(yrData.serie)) {
          for (const point of yrData.serie) {
            const d = formatDate(point.fecha);
            if (d && typeof point.valor === 'number') {
              historyMap.set(d, point.valor);
            }
          }
        }
      } catch (err) {
        console.warn(`   ⚠️ Warning: failed to fetch UF for ${yr}: ${err.message}`);
      }
      // Small pause between yearly queries to be gentle on mindicador.cl API
      await new Promise((r) => setTimeout(r, 600));
    }
  }

  // Also include today's UF
  historyMap.set(newIndicators.uf.date, newIndicators.uf.value);

  // Convert map to sorted array (2020-01-01 onwards)
  const sortedHistory = Array.from(historyMap.entries())
    .map(([date, value]) => ({ date, value }))
    .filter((item) => item.date >= '2020-01-01')
    .sort((a, b) => a.date.localeCompare(b.date));

  // 5. Atomic write to files
  const tempIndicators = `${INDICATORS_FILE}.tmp`;
  const tempHistory = `${HISTORY_FILE}.tmp`;

  await fs.writeFile(tempIndicators, JSON.stringify(newIndicators, null, 2), 'utf-8');
  await fs.writeFile(tempHistory, JSON.stringify(sortedHistory, null, 2), 'utf-8');

  await fs.rename(tempIndicators, INDICATORS_FILE);
  await fs.rename(tempHistory, HISTORY_FILE);

  console.log(`✅ Success! Updated indicators: UF=${newIndicators.uf.value} (${newIndicators.uf.date}), UTM=${newIndicators.utm.value}`);
  console.log(`✅ UF history saved with ${sortedHistory.length} daily entries from ${sortedHistory[0]?.date} to ${sortedHistory[sortedHistory.length - 1]?.date}.`);
}

main().catch((err) => {
  console.error('❌ Pipeline failed:', err.message);
  process.exit(1);
});
