# Naveen Kumar — Portfolio

Personal portfolio of Naveen Kumar, DevOps · MLOps · AI Infra Engineer, Bangalore.

This repo has been through **three designs on three different stacks**. Only one is live in the working tree at a time, but every design is kept in git history so none of them is lost. This README records which one is current and where to find the others.

> **Last updated:** 2026-11-01

## Current design

| | |
|---|---|
| **Design** | Design 3 — *Wall of Doors* (warm plaster & brass) |
| **Stack** | Astro 7.4 · TypeScript (strict) · scoped CSS · vanilla JS (no UI framework) |
| **Branch** | `main` (merged from `astro-stack-new-desgin` in PR #5) |
| **Status** | On `main`, deployed to GitHub Pages by [`.github/workflows/astro.yml`](.github/workflows/astro.yml) |
| **Live** | https://naveen-929.github.io/naveen/ |
| **Since** | October 2026 |

## Design history

| # | Design | Stack | Active | Snapshot |
|---|--------|-------|--------|----------|
| 1 | Classic vCard | Static HTML · Bootstrap 4 · jQuery + plugins | 2022-09-23 → 2025-03-19 | [`7403e66`](https://github.com/NaveeN-929/naveen/tree/7403e66a20ec095f4398fef3ee26768cd4f60586) on `main` |
| 2 | Neo-Brutalist | Vanilla HTML / CSS / JS, no build step | 2026-03-02 → 2026-07-28 | [`a3de16b`](https://github.com/NaveeN-929/naveen/tree/a3de16b157ff7ada1adffb77f9f06461887c758f) on `main` |
| 3 | **Wall of Doors** (current) | Astro 7 · TypeScript | 2026-10 → present | `main` |

The snapshot commit is the **last commit of that design**. Check it out to get the design back exactly as it was.

### Design 1 — Classic vCard

- **Look:** a resume/vCard template with a loader, animated sections, a project gallery, a Google Maps block and a style switcher with 8 colour themes (default, blue, blue-munsell, green, orange, purple, slate, yellow).
- **Stack:** static HTML, Bootstrap 4, jQuery with Owl Carousel, Isotope/Packery, MixItUp, Fancybox, WOW.js + Animate.css, circle-progress and nicescroll; Font Awesome 4.7; Roboto; Google Maps JS API; contact form via the Web3Forms API.
- **Key files:** `index.html`, `home-one.html`, `assets/`, `css/`, `js/`, `demo/`.
- **Also archived as** `old profile.zip` inside the Design 2 snapshot.

### Design 2 — Neo-Brutalist

- **Look:** neo-brutalism: thick black borders, flat offset shadows, a yellow / cyan / pink / green palette, torn-paper section dividers, scroll-drawn highlights, a falling terminal icon, a matrix-typing greeting and a Leaflet journey map.
- **Stack:** vanilla HTML, CSS and JS with no build step; Leaflet 1.9.4; Font Awesome 6.4; Google Fonts (Space Grotesk, Space Mono, Caveat); JSON-LD and Open Graph meta for SEO.
- **Key files:** `index.html` (markup and inline JS), `neo-styles.css`, `image/`, `favicon.ico`, `robots.txt`. `neo-script.js`, `script.js` and `styles.css` (a terminal-style resume) are in the snapshot but not loaded by `index.html`.
- **Hosted** on GitHub Pages at https://naveen-929.github.io/naveen/, deployed straight from `main`. Its meta tags point to https://naveencenrayan.pages.dev/.
- Adapted from the open-source neo-brutalist portfolio at marjoballabani.me.

### Design 3 — Wall of Doors (current)

- **Look:** a warm plaster-and-paper palette with brass accents, in light and dark themes (follows the OS, toggled with a pull cord, remembered in `localStorage`). It opens with a boot loader (once per session). The hero has a desk flip-calendar that cycles through roles and a portrait that fills with colour along the pointer's trail. Below that sit an ability card and a wall of four doors (Cloud & DevOps, AI Infra & Agents, Platform & Reliability, Products I Build), each leading to its own case-study page. The story timeline runs over a canvas "clock tunnel". All motion respects `prefers-reduced-motion`.
- **Stack:** Astro 7.4.4 (static output), TypeScript strict, Astro components with scoped CSS and inline vanilla scripts, fonts self-hosted through Fontsource (Onest Variable, JetBrains Mono).
- **Content:** every piece of copy, link, door and timeline entry lives in [`src/data/profile.ts`](src/data/profile.ts). Components only render it.

## Working on the current design

Requires Node `>=22.23.4`.

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static site into dist/
npm run preview   # serve the built dist/
```

### Deploying

Every push to `main` runs [`.github/workflows/astro.yml`](.github/workflows/astro.yml), which builds the site with `--base /naveen` and publishes `dist/` to GitHub Pages.

- In **Settings → Pages**, **Source** must be **GitHub Actions**. With "Deploy from a branch", GitHub runs Jekyll over the raw `.astro` files and the build fails.
- The site lives under `/naveen/`, so internal links must go through `withBase()` from [`src/lib/paths.ts`](src/lib/paths.ts), e.g. `href={withBase('/#story')}`. A bare `href="/..."` works in `npm run dev` but 404s once deployed.

```
.
├── public/                 # favicon.ico, favicon.svg (served as-is)
├── src/
│   ├── assets/             # portrait images
│   ├── components/         # Header, Hero, Doors, Story, Loader, ThemeCord, ...
│   ├── data/profile.ts     # all site content
│   ├── layouts/Base.astro  # <head>, fonts, theme bootstrap
│   ├── lib/paths.ts        # withBase(): prefixes links with the deploy base
│   ├── pages/
│   │   ├── index.astro     # home
│   │   └── work/[slug].astro  # one case-study page per door
│   └── styles/global.css   # design tokens (colours, fonts) and base styles
├── astro.config.mjs
└── package.json
```

## Bringing back an old design

Designs 1 and 2 are plain static sites, so any static server can run them.

```bash
# Open an old design in a separate folder without touching your branch
git worktree add ../naveen-design-2 a3de16b   # use 7403e66 for Design 1
npx serve ../naveen-design-2

# Remove it when done
git worktree remove ../naveen-design-2

# Or copy a single file out of an old design
git show a3de16b:neo-styles.css > neo-styles.old.css
```

## Keeping the designs safe

When a design or stack changes:

1. Commit (and push) the final state of the outgoing design before you remove its files.
2. Add or update its row in **Design history** with its date range and last commit hash.
3. Update **Current design** and the **Last updated** date at the top.
4. Never squash, rebase or force-push over a snapshot commit listed above.
