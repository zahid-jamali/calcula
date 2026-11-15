import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const OUT_DIR = path.resolve('out');
const PORT = 8899;
const SCREENSHOT_DIR = path.resolve('scratch-previews');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(OUT_DIR, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found: ' + reqPath);
  }
});

function capture(edgePath, url, outFile, width, height) {
  return new Promise((resolve, reject) => {
    const args = [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      `--screenshot=${outFile}`,
      url,
    ];
    const proc = spawn(edgePath, args);
    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(outFile)) {
        resolve();
      } else {
        reject(new Error(`Failed with code ${code}`));
      }
    });
    proc.on('error', reject);
  });
}

server.listen(PORT, async () => {
  console.log(`Server started on http://localhost:${PORT}`);
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  const targets = [
    { name: 'landing-mobile', url: `http://localhost:${PORT}/`, width: 390, height: 844 },
    { name: 'landing-desktop', url: `http://localhost:${PORT}/`, width: 1280, height: 850 },
    { name: 'br-home-mobile', url: `http://localhost:${PORT}/br/`, width: 390, height: 844 },
    { name: 'rescisao-mobile', url: `http://localhost:${PORT}/br/calculadora-rescisao/`, width: 390, height: 844 },
  ];

  for (const t of targets) {
    const outFile = path.join(SCREENSHOT_DIR, `${t.name}.png`);
    try {
      console.log(`Taking screenshot: ${t.name}...`);
      await capture(edgePath, t.url, outFile, t.width, t.height);
      const sz = fs.statSync(outFile).size;
      console.log(`✓ ${t.name} created (${sz} bytes)`);
    } catch (e) {
      console.error(`✗ ${t.name} failed:`, e.message);
    }
  }

  server.close(() => {
    console.log('Finished capturing all screenshots.');
    process.exit(0);
  });
});
