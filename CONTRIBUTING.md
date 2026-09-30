# Contributing

Thanks for helping improve Green Tech India. Keep changes focused and preserve the responsive layouts and existing product routes.

## Before making a change

- Read the relevant page, component, and content in `src/` before editing.
- Keep product facts and company contact details in `src/data/site.ts` when they are shared across views.
- Use the existing CSS tokens and responsive breakpoints in `src/index.css`.
- Keep product-specific route content in `src/pages/ProductPage.tsx` and reusable page sections in `src/components/`.
- Store public images under `public/images/` and use descriptive, lowercase, hyphenated filenames.

## Local workflow

```sh
npm install
npm run dev
npm run check
npm run build
```

Before submitting, describe the user-visible change, list the commands you ran, and include screenshots for visual changes when possible. Do not commit generated output from `dist/` or dependencies from `node_modules/`.

## Pull requests

- Keep each pull request focused on one change.
- Explain why the change is needed and how it was checked.
- Call out content or image source changes that need maintainer review.
