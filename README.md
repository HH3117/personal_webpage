# Personal Academic Portfolio

A distinctive personal website that separates a professional academic profile from a more informal personal notebook. The landing page presents key contact and job information, then guides visitors toward either side of the portfolio.

## Pages

- `/` — name, title, job, phone, email, address, and links to both profiles
- `/academic` — avatar, biography, academic positions, publications, research, teaching activities, and downloadable CV links
- `/personal` — avatar, personal-interest prompts, experiences, and a diary-style entry

## Technology

- TanStack Start and React 19
- TanStack Router file-based routes
- Tailwind CSS 4 with a custom editorial design system
- Netlify deployment through the TanStack Start Vite plugin
- Lucide icons

## Personalizing the Site

Update the shared identity and academic lists in `src/data/profile.ts`. Longer page copy lives directly in `src/routes/academic.tsx` and `src/routes/personal.tsx` so each section is easy to find and rewrite.

Replace the sample CV links in `src/routes/academic.tsx`, and place the matching PDF files in `public/`. Replace the illustrated avatar component in `src/components/profile-avatar.tsx` with an image if a photographic portrait is preferred.

## Local Development

Install dependencies and start the Netlify development environment:

```bash
pnpm install
netlify dev --port 8889
```

The project is configured for deployment on Netlify through `netlify.toml`.
