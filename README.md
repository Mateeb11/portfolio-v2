# Portfolio v2

Personal portfolio for Mateeb Alharbi. A React + Vite build of the "portfolio" design from Claude Design, with a space theme (starfield, orbiting skills, planet).

## Run locally

```sh
npm install
cp .env.example .env   # add your EmailJS keys for the contact form
npm run dev
```

## Build

```sh
npm run build    # outputs to dist/
npm run preview
```

## Content

All text (hero, focus areas, stack, projects, experience, links) lives in `src/data.js`.

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages at https://mateeb.com (see `.github/workflows/deploy.yml`). The contact form's EmailJS keys come from the repo secrets `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY`.
