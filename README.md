# sivakarthikparimi.com

Personal portfolio & EB-1A visibility site for **Siva Karthik Parimi** — Senior Software
Engineer & AI Platforms Architect at PayPal.

Static, dependency-free (HTML + CSS + a little vanilla JS). No build step, near-zero
JavaScript — which keeps Core Web Vitals high and helps SEO.

```
.
├── index.html              # the whole single-page site
├── assets/
│   ├── css/styles.css
│   ├── js/main.js          # mobile nav, scroll reveal, year
│   └── img/                # portrait, headshot, OG card, favicons (WebP + JPG)
├── site.webmanifest
├── sitemap.xml             # update <lastmod> when content changes
├── robots.txt
├── CNAME                   # custom domain for GitHub Pages
└── .gitignore
```

## Preview locally

```bash
cd sivakarthikparimi.com
python3 -m http.server 4321
# open http://localhost:4321
```

## Deploy

### Option A — GitHub Pages (free, uses the included CNAME)

```bash
cd sivakarthikparimi.com
git init && git add -A && git commit -m "Initial site"
gh repo create sivakarthikparimi.com --public --source=. --push
```

Then in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch
→ `main` / root**. Pages will read `CNAME` and serve the site at
`https://sivakarthikparimi.com`.

DNS at your registrar (for an apex domain), point to GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
CNAME www <your-github-username>.github.io
```

Enable **Enforce HTTPS** in Settings → Pages once DNS resolves.

### Option B — Cloudflare Pages (free, fastest CDN)

1. Push the repo to GitHub (as above, minus the `gh repo` step is fine).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command: *(none)* · Output directory: `/`.
4. Add custom domain `sivakarthikparimi.com` in the Pages project → Custom domains.
   (If you also registered the domain at Cloudflare Registrar, DNS is automatic.)

> Note: if you deploy to Cloudflare Pages, the `CNAME` file is harmless but unused —
> it only matters for GitHub Pages.

## After it's live — SEO checklist

- [ ] **Register the domain** `sivakarthikparimi.com` (confirmed available). Cloudflare
      Registrar or Porkbun are at-cost (~$10/yr).
- [ ] **Google Search Console** → add property → verify → submit `sitemap.xml`.
- [ ] **Bing Webmaster Tools** → import from Search Console (covers Bing + ChatGPT search).
- [ ] Test structured data at <https://search.google.com/test/rich-results>.
- [ ] Run Lighthouse (Chrome DevTools) — target 95+ across the board.
- [ ] Share the URL from your LinkedIn profile (the `sameAs` link in the JSON-LD already
      points back to LinkedIn — a two-way link strengthens the knowledge-panel signal).

## TODO — content to fill in

1. **Press article links** — the outlets in the Recognition section are listed as
   text. Add `<a href="…">` to each in `index.html` once you have the live URLs.
2. **Patent / publication deep links** — optional, but linking IEEE Xplore DOIs and the
   Indian Patent Office journal entries adds authority signals.
3. **Citation count** — verify against the live Google Scholar profile
   (<https://scholar.google.com/citations?user=XLJHBDgAAAAJ>) periodically and update
   the hero stat, research heading, and meta/JSON-LD blocks together.

## Editing

Everything is in `index.html`. Sections are clearly commented (`<!-- WORK -->`,
`<!-- PATENTS -->`, etc.). Colors live as CSS variables at the top of `styles.css`.
