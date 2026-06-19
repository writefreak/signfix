# Signfix Industrial Limited — Landing Page

A Next.js 16 (App Router) landing page for Signfix Industrial Limited, a Lagos-based
signage fabrication and installation company.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (token-based theme in `app/globals.css`)
- Framer Motion for animation
- lucide-react for icons
- next-themes for light/dark mode switching (shadcn-style pattern)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/globals.css` — all design tokens (colors, fonts, radii) for light + dark mode
- `app/layout.tsx` — root layout, fonts, theme provider
- `app/page.tsx` — assembles all sections
- `components/sections/` — Navbar, Hero, Services, Work, Process, Reviews, Contact, Footer
- `components/ui/button.tsx` — shared button component
- `components/theme-toggle.tsx` — light/dark switch
- `components/image-placeholder.tsx` — placeholder used everywhere a real photo goes later

## Swapping in real images

Every photo slot currently renders `<ImagePlaceholder />`. To swap one in, replace it with
Next.js `<Image />` pointing at a file in `/public`, keeping the same `aspect` wrapper sizing
so the grid layout doesn't shift.

## Editable content

- Services list: `components/sections/services.tsx`
- Portfolio/work items: `components/sections/work.tsx`
- Process steps: `components/sections/process.tsx`
- Reviews: `components/sections/reviews.tsx`
- Contact details (phone, email): `components/sections/contact.tsx`
