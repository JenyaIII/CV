# EVGENY.FIRM Portfolio

Responsive bilingual portfolio for Senior Mobile Developer Evgeny Zabolotniy.
Built with React, TypeScript, Vite, Three.js, and React Three Fiber.

## Local Development

Requirements: Node.js 20.19+ and npm.

```bash
npm install
npm run dev
```

The local URL is printed by Vite, usually `http://localhost:5173`.

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run check` runs lint and the production build together.

## Production Build

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Deploy to Vercel

1. Import the `JenyaIII/CV` GitHub repository in Vercel.
2. Keep the detected framework preset as `Vite`.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy the `main` branch.

No environment variables or backend services are required.

After Vercel assigns the final domain, update:

- the URL in `public/sitemap.xml`;
- the Open Graph image URL if an absolute URL is preferred;
- a canonical link in `index.html`.

The current sitemap assumes `https://cv-jenyaiii.vercel.app/`.

## Replace Project Mockups

Project images live in `public/projects/`:

- `gobot.svg`
- `corptime.svg`
- `nordwind.svg`
- `placetime.svg`

Replace a file while keeping its filename to update the site without changing React
components. Recommended source ratio: `4:3`, at least `1600 × 1200`, optimized WebP or
AVIF for screenshots.

## Resume

The downloadable PDF is stored at:

`public/resume/evgeny-zabolotniy-cv.pdf`

Replace that file with a newer resume while keeping the filename to preserve all links.

## Content

Localized copy is stored in:

- `src/content/ru.ts`
- `src/content/en.ts`

Both dictionaries implement the same TypeScript contract from `src/content/types.ts`.
