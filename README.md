# Calcula (calcula.zetawala.com)

> Free, accurate, and fully static labor-law and monetary calculators for Latin America: **Brazil (🇧🇷 pt-BR)**, **Mexico (🇲🇽 es-MX)**, **Colombia (🇨🇴 es-CO)**, and **Chile (🇨🇱 es-CL)**. Part of the [Zetawala Network](https://zetawala.com).

Calcula is built with Next.js App Router (static export), TypeScript, and Tailwind CSS. All mathematical calculations run 100% in the user's browser—no user financial inputs ever touch a server.

---

## ⚡ Architecture & Tech Stack

- **Framework**: Next.js (App Router, strict TypeScript)
- **Export Mode**: Static HTML Export (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`)
- **Hosting Target**: Cloudflare Pages (`out/` output directory, zero server runtime or cold starts)
- **Styling**: Tailwind CSS with custom responsive UI system, zero CLS ad containers, and SVG iconography
- **Testing**: Vitest with unit test suites (960+ tests passing)
- **Code Quality**: ESLint + Prettier (0 warnings, 0 errors)
- **Auditing**: Custom crawler `scripts/check-site.mjs` verifying 0 broken links, canonicals, H1s, and reciprocal hreflang links

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation

```bash
git clone https://github.com/zetawala/calcula.git
cd calcula
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to browse the country picker and localized calculators.

### Running Tests & Linting

```bash
# Run unit test suite (33 test files, 960+ tests)
npm test

# Run ESLint validation
npm run lint

# Run TypeScript compiler check
npx tsc --noEmit
```

### Production Build & Static Audit

```bash
# Compile and statically export all ~207 pages into out/
npm run build

# Run site audit and crawler on generated static files
node scripts/check-site.mjs
```

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── update-data.yml       # Daily Chile indicator pipeline (Banco Central / mindicador.cl)
├── public/
│   ├── ads.txt                   # Authorized AdSense seller verification
│   ├── og/                       # Generated Open Graph 1200x630 cards
│   └── data/
│       ├── cl-indicators.json    # Latest daily UF, UTM, Dólar, Euro, IPC
│       └── cl-uf-history.json    # Complete historical daily UF values (2020+)
├── scripts/
│   ├── check-site.mjs            # Crawler: verifies broken links, canonicals, H1s, hreflangs
│   ├── make-og.mjs               # Node/Sharp script generating SVG-rendered OG images
│   └── update-cl-indicators.mjs  # Pipeline fetching daily economic data
├── src/
│   ├── app/
│   │   ├── (root)/               # Bilingual country picker (x-default)
│   │   ├── (br)/br/              # Brazil calculators & pages (pt-BR)
│   │   ├── (mx)/mx/              # Mexico calculators & pages (es-MX)
│   │   ├── (co)/co/              # Colombia calculators & pages (es-CO)
│   │   ├── (cl)/cl/              # Chile calculators & pages (es-CL)
│   │   ├── robots.ts             # Robots.txt route handler
│   │   ├── sitemap.ts            # Dynamic sitemap with alternates and priority
│   │   └── not-found.tsx         # Custom bilingual 404 with popular tools grid
│   ├── components/
│   │   ├── ads/                  # AdSense script and AdSlot container (CLS reserved)
│   │   ├── analytics/            # Cookieless Cloudflare Web Analytics
│   │   ├── layout/               # Header, Footer, CountrySuggestionBar
│   │   ├── seo/                  # JsonLd Schema.org component
│   │   └── ui/                   # MoneyInput, DatePicker, ResultSummary, DataTable
│   ├── content/                  # Localized editorial content (quick answers, FAQs, guides)
│   ├── i18n/                     # Typed localization dictionaries (pt-BR, es)
│   ├── lib/                      # Pure calculation engines and tests per country
│   └── rules/                    # Official legal tables (salary, tax, brackets)
└── test/
    └── calculators-qa.test.ts    # Comprehensive benchmark & edge-case test suite
```

---

## 🛠️ Step-by-Step: Adding a New Calculator

1. **Add Rules / Legal Data**:
   Ensure all official tax rates, caps, and legal articles are documented in `src/rules/<country>/<year>.ts`. Add sources and verification dates.

2. **Build Pure Calculation Function**:
   Create `src/lib/<country>/<calculatorName>.ts` and unit test `src/lib/<country>/<calculatorName>.test.ts` with at least 5 test cases including boundary tests.

3. **Create Editorial Content**:
   Add `src/content/<country>/<slug>.ts` conforming to the `PageContent` interface in `src/content/types.ts` (H1, 40-60 word quick answer, step-by-step formula, 8-10 FAQs, worked examples, and official citations).

4. **Register Route in Page Registry**:
   Add the slug, canonical title, and hreflang tag to `PAGE_REGISTRY` in `src/config/pages.ts`.

5. **Build Page Component**:
   Create `src/app/(<country>)/<country>/<slug>/page.tsx` using `CountryToolPage` and `generateMetadata()`.

6. **Verify with Tests & Crawler**:
   ```bash
   npm test
   npm run build
   node scripts/check-site.mjs
   ```

---

## 📅 Updating Annual Legal Tables (e.g., 2026 ➔ 2027)

Legal values and tax brackets are versioned in `src/rules/<country>/<year>.ts`:

1. Copy `src/rules/<country>/2026.ts` to `src/rules/<country>/2027.ts`.
2. Update the values from official gazettes:
   - **Brazil**: Receita Federal, Ministério do Trabalho e Emprego (Portaria Interministerial MPS/MF).
   - **Mexico**: CONASAMI (Salario Mínimo), INEGI (UMA), SAT (LISR Tablas).
   - **Colombia**: MinTrabajo (SMMLV y Auxilio de Transporte), DIAN (UVT y Retención en la Fuente).
   - **Chile**: SII (Tablas Impuesto Único de Segunda Categoría en UTM), Superintendencia de Pensiones (Topes imponibles AFP/Cesantía en UF).
3. Update `src/rules/index.ts` to export the new year's rule sets as default for 2027.
4. Update `VERIFY.md` with the publication dates and official URLs.
5. Run `npm test` and `npm run build` to confirm.

---

## 🔐 Environment Variables

The project runs completely without environment variables in local development. For production analytics, ads, and search console verification, configure the following:

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense Publisher Client ID | `ca-pub-XXXXXXXXXXXXXXXX` |
| `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` | Cloudflare Web Analytics Token (cookieless) | `0123456789abcdef` |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console site verification meta | `abc123xyz...` |

---

## 🔄 Daily Data Pipeline (Chile UF / Indicators)

Chilean monetary tools (`/cl/valor-uf-hoy/`, historical monthly/annual pages) consume official data published daily by the Central Bank of Chile:

- **Script**: `scripts/update-cl-indicators.mjs` fetches `https://mindicador.cl/api` using Node 20's built-in `fetch`.
- **Validation**: Strict validation prevents corrupt commits (rejects nulls, zeroes, or UF day-over-day changes ≥ 1%).
- **Outputs**: Generates `public/data/cl-indicators.json` and updates `public/data/cl-uf-history.json`.
- **Automation**: `.github/workflows/update-data.yml` triggers daily at 11:00 UTC and on manual dispatch. If indicators changed, it commits back to repository with `[skip ci] data-update`, which triggers an automatic Cloudflare Pages redeployment.

---

## ☁️ Cloudflare Pages Deployment

Deploying Calcula to Cloudflare Pages is seamless:

1. **Connect Repository**: Link the GitHub repository in Cloudflare Pages dashboard.
2. **Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: `20.x` (set environment variable `NODE_VERSION: 20`)
3. **Custom Domain**: Bind `calcula.zetawala.com` with automated Cloudflare SSL/TLS edge certificate.

---

## ⚖️ Legal & Privacy

- All calculations provided by Calcula are simulations for educational and informational guidance and do not constitute formal legal, accounting, or tax advice.
- **Privacy First**: 100% client-side computing. No salary inputs or personal data are ever collected, transmitted, or stored on servers.

---

© 2026 [Zetawala](https://zetawala.com). All rights reserved.
