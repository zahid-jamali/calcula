import fs from 'fs';
import path from 'path';

const KEY = 'e8f49b1a2c3d4e5f6a7b8c9d0e1f2a3b';
const HOST = 'calcula.zetawala.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read URLs from gsc-urls.txt or out/sitemap.xml
let urls = [];
const urlsFilePath = path.resolve('gsc-urls.txt');
const sitemapPath = path.resolve('out/sitemap.xml');

if (fs.existsSync(urlsFilePath)) {
  urls = fs
    .readFileSync(urlsFilePath, 'utf-8')
    .split('\n')
    .map((u) => u.trim())
    .filter((u) => u.length > 0 && u.startsWith('http'));
} else if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  urls = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

if (urls.length === 0) {
  console.error('❌ No URLs found to submit!');
  process.exit(1);
}

console.log(`📡 Preparing to submit ${urls.length} URLs to IndexNow (Bing / Search Engines)...`);
console.log(`Host: ${HOST}`);
console.log(`Key: ${KEY}`);
console.log(`Key Location: ${KEY_LOCATION}\n`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const endpoints = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/IndexNow',
];

async function submit() {
  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response Status: ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`✅ Successfully submitted ${urls.length} URLs to ${endpoint}!`);
      } else {
        const text = await res.text();
        console.log(`⚠️ Endpoint returned code ${res.status}: ${text}`);
      }
    } catch (err) {
      console.error(`❌ Failed to submit to ${endpoint}:`, err.message);
    }
    console.log('---');
  }
}

submit();
