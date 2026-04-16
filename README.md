# Startup Advisor Portfolio

This repository contains a custom SvelteKit portfolio site designed for a bold, results-driven startup advisor serving founders and investors.

It is built as a static site and deployed through GitHub Pages.

## Stack

- SvelteKit 2
- Svelte 5
- Tailwind CSS 4
- TypeScript
- GSAP
- Vitest
- Playwright
- GitHub Actions
- `@sveltejs/adapter-static`

## Local Development

```sh
npm install
npm run dev
```

The local dev server runs through Vite. In the included dev container, port forwarding is already configured for previewing the site in the browser.

## Validation Commands

```sh
npm run check
npm run test:unit
npm run test:e2e
npm run build
```

These commands are the same checks expected in CI.

## Updating Portfolio Content

Most portfolio copy lives in [src/lib/content/site.ts](/workspaces/my-portfolio/src/lib/content/site.ts). Update that file to change:

- your name and role
- hero messaging
- advisory services
- proof points
- principles
- contact links
- SEO metadata

The homepage layout is component-based, so copy changes usually do not require structural edits.

## Deployment

GitHub Actions builds the site and deploys the static output to GitHub Pages.

- `ci.yml` runs type checks, unit tests, end-to-end smoke tests, and the production build on pushes and pull requests.
- `deploy-pages.yml` deploys from `main` using the SvelteKit static adapter output.

The deploy workflow preserves GitHub Pages base-path compatibility for both project pages and user or organization pages.

## Project Structure

- [src/routes/+page.svelte](/workspaces/my-portfolio/src/routes/+page.svelte): portfolio homepage
- [src/lib/content/site.ts](/workspaces/my-portfolio/src/lib/content/site.ts): typed content model and editable portfolio data
- [src/lib/components](/workspaces/my-portfolio/src/lib/components): reusable page sections
- [tests/e2e/home.spec.ts](/workspaces/my-portfolio/tests/e2e/home.spec.ts): Playwright smoke coverage

## Notes

- Contact details are currently placeholders until you replace them with your real information.
- The site is intentionally one-page first, optimized for fast trust and a strong founder or investor-facing narrative.
