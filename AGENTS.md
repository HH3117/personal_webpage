# Project Guide

## Overview

This project is a personal academic portfolio built with TanStack Start, React, TypeScript, and Tailwind CSS. It uses a warm editorial visual system and intentionally keeps portfolio content static and source-controlled. No database or authentication layer is required for the current feature set.

## Architecture

- `src/routes/__root.tsx` defines the document shell and global navigation.
- `src/routes/index.tsx` contains the landing page and contact overview.
- `src/routes/academic.tsx` contains the structured academic profile.
- `src/routes/personal.tsx` contains the personal notebook and diary layout.
- `src/components/site-header.tsx` contains shared navigation.
- `src/components/profile-avatar.tsx` contains the reusable illustrated portrait.
- `src/data/profile.ts` is the primary source for identity, contact, publication, position, and teaching data.
- `src/styles.css` contains the complete visual system, responsive behavior, and motion.
- `public/` is the correct location for CV PDFs and other downloadable files.

## Conventions

- Use file-based routes in `src/routes/`.
- Keep shared identity data in `src/data/profile.ts` rather than duplicating it across pages.
- Use semantic HTML and preserve visible focus, hover, and reduced-motion behavior.
- Reuse the existing CSS variables for color, typography, spacing, and borders.
- Keep the asymmetric editorial layout; avoid replacing it with generic card grids.
- Use descriptive names and TypeScript types. Do not add unused imports or one-letter variables.

## Content Decisions

The displayed person and academic record are polished sample content because no personal details were supplied. Replace these values before publishing. CV entries intentionally point to expected files in `public/`; adding those PDFs completes the download links without application code changes.

The personal-page prompts are display content, not a browser-based CMS. If future work adds visitor editing or saved diary entries, use Netlify Database rather than local files or in-memory storage.

## Commands

- `pnpm install` installs dependencies.
- `netlify dev --port 8889` runs the site with Netlify emulation.
- `pnpm build` creates the production build when explicitly needed outside automated validation.
