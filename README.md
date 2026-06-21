# Beast Dev — Agency Website

A premium dark-themed agency website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Shadcn UI.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast build tooling
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — page transitions & scroll animations
- **Shadcn UI** — accessible component primitives (Radix UI)
- **React Router** — client-side routing

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/portfolio/:id` | Project Details |
| `/pricing` | Pricing |
| `/about` | About |
| `/contact` | Contact |
| `*` | 404 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI (Logo, CTA, FAQ, Cards)
│   ├── layout/       # Navbar, Footer, Layout
│   └── ui/           # Shadcn UI primitives
├── data/             # Mock content & types
├── hooks/            # Theme, scroll animations
├── pages/            # Route pages
├── types/            # TypeScript interfaces
└── lib/              # Utilities
```

## Features

- Premium dark theme with light mode toggle
- Glassmorphism effects & smooth animations
- Fully responsive layouts
- SEO meta tags per page
- Accessible components (Radix UI)
- Realistic placeholder content
# beastdev-ui
