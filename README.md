# Marketing site starter

Scheletro **Vite + React 19 + TypeScript + Tailwind v4** per un sito marketing statico (stile simile allo stack di ZenBake, ma **progetto separato** — il repo ZenBake non viene toccato).

## Cosa modificare per un nuovo cliente

1. **`src/content/site.ts`** — Unico file con testi, URL `origin`, menu, footer, home, privacy (placeholder legale).
2. **`public/robots.txt`** e **`public/sitemap.xml`** — Sostituisci il placeholder del dominio con l’URL pubblico reale.
3. **`index.html`** — Titolo e meta description di fallback (prima che React monti; allinea a `site.ts`).
4. **Favicon** — Aggiungi `favicon.jpg` (o altro formato) in `public/` e allinea il tag in `index.html`.
5. **`src/index.css`** — Sezione `@theme` per colori e font del brand.

## Avvio

```bash
npm install
npm run dev
```

Build produzione:

```bash
npm run build
```

Output in `dist/` (adatto a Cloudflare Pages, Netlify, S3+CDN, ecc.).

## Deploy: GitHub + Cloudflare Pages

1. **Repository Git** — Da questa cartella: `git init`, `git add -A`, `git commit`, branch `main` (`git branch -M main`). Collega GitHub (`git remote add origin …`, `git push -u origin main`) oppure `gh repo create kyne-site --public --source=. --remote=origin --push` (nome repo adattabile).
2. **Cloudflare** — Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → autorizza GitHub, scegli repo e branch **`main`**.
3. **Impostazioni build**

| Campo | Valore |
|--------|--------|
| Framework preset | **None** o **Vite** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (se il repo è solo questo progetto; se monorepo, sottocartella dove c’è `package.json`) |

4. **Node** — È presente [`.nvmrc`](.nvmrc) (`22`). Su Pages, in alternativa, imposta la versione Node nelle variabili di build se il runner non legge `.nvmrc`. `package.json` include `engines.node` (`>=20.18.0`).
5. **Variabili** — Sito statico: nessuna `VITE_*` obbligatoria.
6. **Dominio** — **Custom domains**: aggiungi `kyne.it` e/o `www.kyne.it`. Il canonical nel codice è **`https://kyne.it`** ([`src/content/site.ts`](src/content/site.ts), sitemap, robots). Per **www → apex**: il file `public/_redirects` di Pages **non** supporta redirect tra hostname diversi; usa **Cloudflare** → **Rules** → **Redirect Rules** (o **Bulk Redirects**), es. da `https://www.kyne.it/*` a `https://kyne.it/:splat` con **301**.
7. **Dopo il primo deploy** — Verifica `*.pages.dev`, poi il dominio reale; controlla HTTPS, `/sitemap.xml`, redirect www.

## Archivio da distribuire (senza `node_modules`)

**Tar.gz** (esempio già creato accanto alla cartella):

```bash
cd /path/to/sites
tar --exclude='marketing-site-starter/node_modules' \
    --exclude='marketing-site-starter/dist' \
    -czvf marketing-site-starter.tar.gz marketing-site-starter
```

**Zip** (se hai `zip` installato):

```bash
zip -r marketing-site-starter.zip marketing-site-starter \
  -x "marketing-site-starter/node_modules/*" \
  -x "marketing-site-starter/dist/*"
```

## Cosa **non** include rispetto a ZenBake

- Nessun cookie banner, Analytics, reCAPTCHA, Freshdesk, D1, Framer Motion.
- CSP in `public/_headers` è **minima** (solo `'self'`): se aggiungi script esterni (GA, reCAPTCHA), estendi la CSP come nel progetto principale.

## Estensioni tipiche

- Nuove route: `App.tsx` + pagina in `src/pages/` + voci in `site.nav` / `site.footer.links`.
- Form contatti: copia pattern da ZenBake (`ContactForm`, Function `api/contact`) e aggiorna CSP / variabili ambiente.
