# Pulse Documentation

Documentation site for the Pulse platform, powered by [Fumadocs](https://fumadocs.vercel.app/).

## Prerequisites

- Node.js 18+
- pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Adding or Editing Docs

Documentation content lives in `content/docs/`. Files use MDX format with YAML frontmatter:

```mdx
---
title: Page Title
description: A short description of the page
---

Your content here.
```

Pages are organized by directory structure. Create subdirectories for nested sections and add `meta.json` files to control ordering and titles.

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

The site auto-deploys to Vercel on push to the main branch.

Live site: _TBD_
