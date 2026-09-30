# Green Tech India

Responsive company website for Green Tech India, built with React, TypeScript, Vite, Tailwind CSS, and React Router. It presents fire rated doors, solar water heaters, garbage chute systems, company information, and client logos.

## Getting started

Install a current Node.js LTS release, then run:

```sh
npm install
npm run dev
```

Vite prints the local development address after startup.

## Product pages

- `/products/fire-rated-doors`
- `/products/solar-water-heaters`
- `/products/garbage-chute-systems`

Product content is defined in `src/data/site.ts`. Product detail layouts live in `src/pages/ProductPage.tsx`.

## Project structure

```text
src/
  components/   Shared page sections and UI components
  data/         Company and product content
  pages/        Route-level page compositions
  index.css     Design tokens, layout, and responsive styles
public/
  images/       Product, client, and section imagery
  *.pdf         Downloadable company brochure
```

## Available commands

```sh
npm run dev       # Start the local development server
npm run build     # Type-check and create a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run Oxlint
npm run typecheck # Run the TypeScript project check
npm run check     # Run lint and type checking
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for code conventions and the proposed change workflow. Before publishing this project as an open source repository, its maintainers should choose and add a license.
