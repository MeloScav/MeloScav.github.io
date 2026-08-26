# MeloScav.github.io

Portfolio of Méloé Scavezzoni, UX / UI designer and frontend developer. All
user-facing content is in French.

## Branches

- `main` holds the site that is live today: plain HTML, CSS and a bundled
  `index.js`, served by GitHub Pages. It is still the reference for content.
- `nextjs` is the rewrite in progress and the branch to work on. It has no
  deployment pipeline yet.

Content that already exists on `main` (projects, descriptions, images) should be
pulled from there instead of being written from scratch.

## Stack

Next.js 14 App Router, React 18, TypeScript, SCSS, Bootstrap 5 with
react-bootstrap, GSAP for animation.

## Commands

```bash
npm run dev     # regenerates the SVG sprite, then starts the dev server
npm run build
npm run lint
npx tsc --noEmit
```

`public/images/sprite.svg` is generated from `src/assets/icons/` by
`npm run sprite-svg-generate`, which both `dev` and `build` run first. Do not
edit it by hand and do not commit it with unrelated work.

## Layout

```
src/app/                 routes, layout and components
src/app/components/      shared components, decorations/ for the SVG flourishes
src/app/projects/        project routes plus their card components
src/app/services/        read helpers over the data files
src/app/styles/          SCSS, one folder per concern, index.scss imports them
src/data/                projects, categories, menus, constants
src/types.ts             CategoryType enum, IProject, ICategory
```

## Conventions

- Files are kebab-case, components are default exports, prop interfaces are
  named `I<Component>Props` and read through a single `const { … } = props`.
- Components are server components unless they need the browser, in which case
  they start with `"use client"`.
- Data lives in `src/data/` as typed arrays and is read through
  `src/app/services/`. Components never import the data files directly.
- Styling goes through Bootstrap utilities and the SCSS partials. Reach for a
  new partial rather than an inline style.
- Decorative markup is wrapped in a component (`TitleDecorated`,
  `TextHighlighted`, `ButtonDecoration`, `SpriteSVG`) instead of being repeated.

## Gotchas

- A category slug in the URL maps to `CategoryType` by uppercasing it, so the
  slug is always singular: `/projects/illustration`, never `illustrations`.
- Strings in `src/data/` are plain JavaScript, not JSX. Write a real apostrophe,
  never `&apos;`.
- `getProjects()` reverses the array by default, so `src/data/projects.ts` is
  ordered oldest first.
- Projects have no tags yet. The static site never had any, so leave the field
  out rather than inventing values.
