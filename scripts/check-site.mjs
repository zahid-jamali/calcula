import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('out');

if (!fs.existsSync(OUT_DIR)) {
  console.error(`❌ Output directory ${OUT_DIR} does not exist. Run "npm run build" first.`);
  process.exit(1);
}

// 1. Collect all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`🔍 Found ${htmlFiles.length} HTML files in ${OUT_DIR}`);

// Map file to relative route URL e.g. /out/mx/index.html -> /mx/
function fileToRoute(filePath) {
  let rel = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404.html';
  if (rel.endsWith('/index.html')) {
    return '/' + rel.replace(/\/index\.html$/, '/');
  }
  if (rel.endsWith('.html')) {
    return '/' + rel.replace(/\.html$/, '/');
  }
  return '/' + rel;
}

const routes = new Set();
const routeToFile = new Map();
for (const f of htmlFiles) {
  const r = fileToRoute(f);
  routes.add(r);
  routeToFile.set(r, f);
}

const errors = [];
const warnings = [];
let totalLinksChecked = 0;

// Data collectors
const pageData = new Map();
// route -> { title, description, h1s: [], canonical, hreflangs: [], links: [] }

// Helper: extract simple regex
function extractTagContent(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim() : null;
}

function extractAll(html, regex) {
  const matches = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    matches.push(m);
  }
  return matches;
}

for (const [route, file] of routeToFile.entries()) {
  if (route.startsWith('/404')) continue;

  const content = fs.readFileSync(file, 'utf8');

  // Title
  const title = extractTagContent(content, /<title[^>]*>([^<]*)<\/title>/i);

  // Meta description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // H1 tags
  const h1Matches = extractAll(content, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  const h1s = h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  // Canonical link
  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                         content.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  // Hreflang alternates
  const hreflangRegex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']*)["'][^>]*href=["']([^"']*)["']/gi;
  const hreflangs = [];
  let hm;
  while ((hm = hreflangRegex.exec(content)) !== null) {
    hreflangs.push({ lang: hm[1], href: hm[2] });
  }

  // Links: a href
  const linkRegex = /<a[^>]*href=["']([^"']*)["']/gi;
  const internalLinks = [];
  let lm;
  while ((lm = linkRegex.exec(content)) !== null) {
    const rawHref = lm[1].trim();
    if (rawHref && !rawHref.startsWith('http') && !rawHref.startsWith('mailto:') && !rawHref.startsWith('tel:') && !rawHref.startsWith('#') && !rawHref.startsWith('javascript:')) {
      internalLinks.push(rawHref);
    }
  }

  pageData.set(route, {
    route,
    file,
    title,
    description,
    h1s,
    canonical,
    hreflangs,
    internalLinks,
  });
}

// ---------------------------------------------------------------------------
// TEST 1: Exactly one H1 per page
// ---------------------------------------------------------------------------
for (const [route, data] of pageData.entries()) {
  if (data.h1s.length !== 1) {
    errors.push(`[H1 Check] ${route}: expected exactly 1 <h1>, found ${data.h1s.length} (${JSON.stringify(data.h1s)})`);
  }
}

// ---------------------------------------------------------------------------
// TEST 2: Title and Description presence
// ---------------------------------------------------------------------------
for (const [route, data] of pageData.entries()) {
  if (!data.title) {
    errors.push(`[Title Check] ${route}: missing <title> tag`);
  }
  if (!data.description) {
    errors.push(`[Description Check] ${route}: missing meta description`);
  }
}

// ---------------------------------------------------------------------------
// TEST 3: Canonical URL matches route
// ---------------------------------------------------------------------------
for (const [route, data] of pageData.entries()) {
  if (!data.canonical) {
    errors.push(`[Canonical Check] ${route}: missing canonical link`);
  } else {
    const expectedBase = 'https://calcula.zetawala.com';
    const cleanRoute = route.endsWith('/') ? route : route + '/';
    const expectedCanonical = expectedBase + cleanRoute;
    if (data.canonical !== expectedCanonical && data.canonical !== expectedCanonical.slice(0, -1)) {
      errors.push(`[Canonical Check] ${route}: expected canonical "${expectedCanonical}", got "${data.canonical}"`);
    }
  }
}

// ---------------------------------------------------------------------------
// TEST 4: Zero broken internal links
// ---------------------------------------------------------------------------
for (const [route, data] of pageData.entries()) {
  for (const rawHref of data.internalLinks) {
    totalLinksChecked++;
    // Strip query or hash
    const urlPath = rawHref.split('?')[0].split('#')[0];
    if (!urlPath) continue; // Pure hash link on current page

    // Normalize path
    let target = urlPath.startsWith('/') ? urlPath : path.posix.join(route, urlPath);
    if (!target.endsWith('/')) target += '/';

    if (!routes.has(target)) {
      errors.push(`[Broken Link] In ${route}: link to "${rawHref}" (normalized "${target}") not found in output files`);
    }
  }
}

// ---------------------------------------------------------------------------
// TEST 5: Reciprocal hreflang links
// ---------------------------------------------------------------------------
for (const [route, data] of pageData.entries()) {
  for (const h of data.hreflangs) {
    try {
      const url = new URL(h.href);
      let targetPath = url.pathname;
      if (!targetPath.endsWith('/')) targetPath += '/';

      if (routes.has(targetPath)) {
        const targetPage = pageData.get(targetPath);
        if (targetPage) {
          // Does target page have an alternate pointing back to route?
          const hasReciprocal = targetPage.hreflangs.some(th => {
            try {
              const tUrl = new URL(th.href);
              let thPath = tUrl.pathname;
              if (!thPath.endsWith('/')) thPath += '/';
              return thPath === route;
            } catch {
              return false;
            }
          });
          if (!hasReciprocal && targetPath !== route) {
            errors.push(`[Hreflang Reciprocal] ${route} -> ${h.href} (${h.lang}) exists, but ${targetPath} has no reciprocal alternate pointing back to ${route}`);
          }
        }
      }
    } catch (e) {
      errors.push(`[Hreflang Syntax] ${route}: invalid URL "${h.href}"`);
    }
  }
}

// ---------------------------------------------------------------------------
// TEST 6: No orphan pages (reachable within 3 clicks from home or country home)
// ---------------------------------------------------------------------------
const homeRoots = ['/', '/br/', '/mx/', '/co/', '/cl/'];
const distances = new Map();
const queue = [];

for (const root of homeRoots) {
  if (routes.has(root)) {
    distances.set(root, 0);
    queue.push(root);
  }
}

while (queue.length > 0) {
  const current = queue.shift();
  const currentDist = distances.get(current);
  const data = pageData.get(current);
  if (!data) continue;

  for (const rawHref of data.internalLinks) {
    const urlPath = rawHref.split('?')[0].split('#')[0];
    if (!urlPath) continue;
    let target = urlPath.startsWith('/') ? urlPath : path.posix.join(current, urlPath);
    if (!target.endsWith('/')) target += '/';

    if (routes.has(target) && !distances.has(target)) {
      distances.set(target, currentDist + 1);
      queue.push(target);
    }
  }
}

let orphanCount = 0;
for (const route of pageData.keys()) {
  const d = distances.get(route);
  if (d === undefined) {
    orphanCount++;
    warnings.push(`[Orphan Page] ${route} is not reachable from any root/country home.`);
  } else if (d > 3) {
    warnings.push(`[Deep Page] ${route} requires ${d} clicks from home (target <= 3 clicks).`);
  }
}

// ---------------------------------------------------------------------------
// TEST 7: Sitemap completeness
// ---------------------------------------------------------------------------
const sitemapPath = path.join(OUT_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  const sitemapUrls = new Set();
  let m;
  while ((m = locRegex.exec(sitemapContent)) !== null) {
    try {
      const u = new URL(m[1].trim());
      let p = u.pathname;
      if (!p.endsWith('/')) p += '/';
      sitemapUrls.add(p);
    } catch {}
  }

  console.log(`🗺️ Sitemap URLs found: ${sitemapUrls.size}`);

  // Check every pageData route is in sitemap
  for (const route of pageData.keys()) {
    if (!sitemapUrls.has(route)) {
      warnings.push(`[Sitemap Missing] Page ${route} is not listed in sitemap.xml`);
    }
  }

  // Check every sitemap URL exists in out/
  for (const sRoute of sitemapUrls) {
    if (!routes.has(sRoute)) {
      errors.push(`[Sitemap Extra] Sitemap lists ${sRoute}, but no HTML file was found in out/`);
    }
  }
} else {
  warnings.push(`[Sitemap Check] sitemap.xml not found at ${sitemapPath}`);
}

// ---------------------------------------------------------------------------
// SUMMARY REPORT
// ---------------------------------------------------------------------------
console.log('\n=============================================================');
console.log('              CALCULA SITE QA AUDIT REPORT                   ');
console.log('=============================================================');
console.log(`📄 Total HTML Pages Audited:    ${pageData.size}`);
console.log(`🔗 Total Internal Links Tested:  ${totalLinksChecked}`);
console.log(`⚠️  Warnings:                     ${warnings.length}`);
console.log(`❌ Errors:                       ${errors.length}`);
console.log('=============================================================');

if (warnings.length > 0) {
  console.log('\n--- Warnings (first 10) ---');
  warnings.slice(0, 10).forEach(w => console.log('  ' + w));
  if (warnings.length > 10) console.log(`  ... and ${warnings.length - 10} more warnings`);
}

if (errors.length > 0) {
  console.log('\n--- ERRORS FOUND ---');
  errors.slice(0, 20).forEach(e => console.error('  ' + e));
  if (errors.length > 20) console.error(`  ... and ${errors.length - 20} more errors`);
  console.log('\n❌ QA check FAILED. Please resolve errors before production deployment.');
  process.exit(1);
} else {
  console.log('\n✅ QA check PASSED with 0 errors! All links, canonicals, H1s, and pages verified.\n');
  process.exit(0);
}
