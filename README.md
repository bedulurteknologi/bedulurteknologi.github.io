# Bedulur Teknologi Indonesia (BTI) — Technology Studio Portfolio

> **Technology Built Around Your Business.**  
> A high-performance, dark-aesthetic portfolio and digital engineering showcase website for **Bedulur Teknologi Indonesia (BTI)**, built with React, Vite, TypeScript, Tailwind CSS, Three.js/WebGL, and Framer Motion.

---

## 1. Project Overview

This website serves as the primary portfolio and digital presence for Bedulur Teknologi Indonesia (BTI). It demonstrates technical credibility, systems thinking, and software engineering capabilities across:

- **Custom Business Applications** (Point of Sale, Inventory, ERP, Operations)
- **Web Applications & Portals** (High-Performance Platforms, Diagnostics, CMS)
- **Mobile Applications** (Flutter, Android, Offline Sync, Field Systems)
- **Workflow & Process Automation** (Microsoft Power Apps, Power Automate, SharePoint)
- **IoT & Infrastructure** (Arduino, Environmental & Industrial Telemetry, Linux)
- **API & System Integrations** (Stateless REST APIs, Microservices, Data Sync)

The architecture is purely **static** and deployable to **GitHub Pages**, Vercel, Netlify, or custom VPS hosting with zero server-side dependencies.

---

## 2. Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler / Tooling**: Vite 8 (with automated code-splitting and optimized chunking)
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite`, custom dark-graphite design tokens, glassmorphism, and responsive tech grids)
- **3D Graphics & WebGL**: Three.js (interactive digital core sphere with real-time mouse tracking, lighting, particles, and automatic battery-saving viewport observer) + CSS fallback
- **Motion & Interactions**: Framer Motion + Lenis (smooth wheel scrolling with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React
- **Routing**: React Router (HashRouter with SPA compatibility for GitHub Pages)

---

## 3. Quick Start & Local Development

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bedulurteknologi.git
cd bedulurteknologi

# Install dependencies
npm install
```

### Run Locally (Dev Server)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The compiled, minified production assets will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 4. Project Content & Configuration

All portfolio, service, and contact information is organized in `src/data/`:

| File | Purpose |
|---|---|
| [`src/data/site.ts`](file:///d:/_projects/bedulurteknologi/src/data/site.ts) | Studio branding, headline, tagline, and founder bio |
| [`src/data/projects.ts`](file:///d:/_projects/bedulurteknologi/src/data/projects.ts) | 9 structured projects, challenges, solutions, capabilities, tech tags |
| [`src/data/services.ts`](file:///d:/_projects/bedulurteknologi/src/data/services.ts) | 6 capability cards & 5-step delivery methodology |
| [`src/data/technologies.ts`](file:///d:/_projects/bedulurteknologi/src/data/technologies.ts) | Technology constellation items and categories |
| [`src/data/contact.ts`](file:///d:/_projects/bedulurteknologi/src/data/contact.ts) | Email, WhatsApp phone & direct URL, LinkedIn, GitHub, Upwork |

---

## 5. Adding or Editing a Portfolio Project

To add a new project to the showcase:

1. Open [`src/data/projects.ts`](file:///d:/_projects/bedulurteknologi/src/data/projects.ts).
2. Append a new object conforming to the `Project` interface:

```typescript
{
  id: 'unique-id',
  slug: 'unique-id',
  name: 'Project Title',
  category: 'Retail / Business Application',
  filterCategory: 'business', // 'all' | 'web' | 'mobile' | 'business' | 'automation' | 'iot' | 'enterprise'
  headline: 'One-line summary of the system',
  description: 'Full narrative overview of what the system does.',
  challenge: 'Specific operational bottleneck or business problem.',
  solution: 'How BTI designed and engineered the architecture.',
  features: [
    'Feature point 1',
    'Feature point 2',
  ],
  technologies: ['Flutter', 'Laravel', 'MySQL'],
  coverImage: '/images/projects/unique-id/cover.svg',
  gallery: [
    '/images/projects/unique-id/screen-1.svg',
    '/images/projects/unique-id/screen-2.svg',
  ],
  year: '2025',
  featured: true,
  order: 10,
  clientType: 'Enterprise',
  impact: [
    'Qualitative, verifiable outcome 1',
    'Qualitative, verifiable outcome 2',
  ],
}
```

3. Place corresponding mockups or screenshots in `public/images/projects/unique-id/`.

---

## 6. Screenshots & Media Management

- **Screenshots Directory**: `public/images/projects/{slug}/`
- Default format: High-resolution `.png`, `.webp`, or `.svg` (1200x750 or 16:9 ratio recommended).
- Ensure file names in `public/images/projects/{slug}/` match the paths specified in `projects.ts`.
- Mockup generator script: `node scripts/generate-mockups.cjs` can be re-run anytime to regenerate baseline dark-mode vector UI mockups.

---

## 7. Contact Information Configuration

Edit [`src/data/contact.ts`](file:///d:/_projects/bedulurteknologi/src/data/contact.ts) to update direct contact channels:

```typescript
export const contactConfig = {
  email: 'contact@bedulurteknologi.id',
  whatsapp: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  linkedinUrl: 'https://linkedin.com/company/bedulurteknologi',
  githubUrl: 'https://github.com/bedulurteknologi',
  upworkUrl: 'https://www.upwork.com',
  location: 'Indonesia',
  statusText: 'Available for selected projects',
};
```

---

## 8. GitHub Pages Deployment

### Automatic Deployment (GitHub Actions)

A GitHub Actions workflow is pre-configured in [`.github/workflows/deploy.yml`](file:///d:/_projects/bedulurteknologi/.github/workflows/deploy.yml).

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial release of BTI portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/repository-name.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every push to `main` will build and publish to `https://<username>.github.io/<repository-name>/`.

### Subpath Configuration (if using repository subfolder)

If deploying to `https://<username>.github.io/<repository-name>/`, you can set the Vite base path via environment variable:

```bash
VITE_BASE_PATH=/repository-name/ npm run build
```

Or leave default `./` in [`vite.config.ts`](file:///d:/_projects/bedulurteknologi/vite.config.ts) which resolves assets relatively.

### Custom Domain

1. In GitHub repository **Settings** → **Pages**, enter your custom domain (e.g. `bedulurteknologi.id`).
2. Add a `CNAME` file in `public/CNAME` containing your domain name.
3. Configure your DNS provider with an `A` record pointing to GitHub Pages IP addresses (`185.199.108.153`, etc.) or `CNAME` pointing to `<username>.github.io`.

---

## 9. Performance & Accessibility Notes

- **Three.js Performance**: Clamped to a max pixel ratio of `2.0` (and `1.5` on mobile) to maintain 60 FPS.
- **Intersection Observer**: The WebGL animation loop automatically suspends when the hero section scrolls out of the viewport, eliminating unnecessary CPU/GPU battery drain.
- **Reduced Motion**: Respects `prefers-reduced-motion` settings. The 3D canvas falls back to a clean CSS visual core, and Lenis smooth scrolling is disabled.
- **Custom Cursor**: Active on desktop pointer devices only; disabled on touch devices and accessibility scenarios.
- **Zero Third-Party Tracking**: No external analytics scripts or cookies are loaded by default.

---

## 10. License & Credits

Designed and engineered by **Bedulur Teknologi Indonesia (BTI)**. All rights reserved.
