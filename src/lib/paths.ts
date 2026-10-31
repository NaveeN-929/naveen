// Prefixes a site-root path with the deploy base, so links work both at / in local dev
// and under /naveen/ on GitHub Pages (the workflow passes --base at build time).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => base + path;
