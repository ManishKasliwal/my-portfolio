# Technical Setup

This project is a static SvelteKit portfolio deployed to GitHub Pages.

## Runtime and Tooling

- Node 22
- npm
- SvelteKit 2 with `@sveltejs/adapter-static`
- Svelte 5
- Tailwind CSS 4
- GSAP for selective motion
- Vitest for unit and component testing
- Playwright for end-to-end smoke testing

## Site Architecture

- The homepage is a single-page portfolio experience under `/`.
- Structured portfolio data is stored in `src/lib/content/site.ts`.
- Reusable presentation components live in `src/lib/components`.
- Global styles and typography are defined in `src/routes/layout.css`.

## Validation Model

The expected quality gates are:

```sh
npm run check
npm run test:unit
npm run test:e2e
npm run build
```

`npm run check` validates Svelte and TypeScript.

`npm run test:unit` covers content-driven rendering and configuration expectations.

`npm run test:e2e` runs a browser smoke test against the portfolio homepage and key anchor-navigation flows.

`npm run build` produces the static site output used by GitHub Pages.

## GitHub Pages

- Production output uses `@sveltejs/adapter-static`
- Base-path handling is controlled through `BASE_PATH`
- `src/routes/+layout.ts` keeps prerendering enabled with trailing slashes for static hosting compatibility

## Dev Container and Local Preview

The repository still supports the included VS Code Dev Container workflow.

- The container builds from the project `Dockerfile`
- It installs dependencies with npm
- It forwards the Vite dev-server port
- `vite.config.ts` enables polling only when needed for Windows host file watching

## Customization Guidance

To personalize the site further, start by updating the typed content model and placeholder contact details. Structural design changes can then happen at the component level without rewriting the content layer.
