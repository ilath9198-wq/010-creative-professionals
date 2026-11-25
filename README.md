# ATELIER N°10 – Creative Studio (010 Creative Professionals)

> **Ideas Into Form. Creativity Into Experience.**  
> An international multidisciplinary design practice bringing together architecture, interior design, brand identity systems, and digital platforms across Zürich, Milan, and Tokyo.

This project is part of the **Industry-Specific Website Demonstrations** collection, demonstrating what an exceptionally beautiful, artistic, premium, modern, and highly interactive multi-page website looks like for architecture studios, interior design firms, branding agencies, and creative professionals.

---

## 1. Selected Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke studio palette (`ivory`, `charcoal`, `concrete`, `terracotta`, `olive`)
- **Typography**: Cormorant Garamond (Editorial serif), Inter (Geometric sans), Space Mono (Architectural coordinates & indices)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: `next/image` with remote patterns for verified Unsplash photography
- **State Architecture**: React Context API (`StudioContext.tsx`) for global modals, creative canvas transitions, and image lightboxes

---

## 2. 10 Dedicated Routes & Individual Detail Pages

**Strictly zero `.html` extensions anywhere across filenames, routing, and code:**

1. **Studio Homepage** (`/`) – Cinematic hero, manifesto, curated commissions showcase, multidisciplinary capabilities overview, and journal dispatches.
2. **About Us** (`/about`) – Studio origins, creative leadership profiles, four guiding spatial laws, and workshop archive.
3. **Creative Services** (`/services`) – Five core studio disciplines with comprehensive scope, deliverables, and metrics.
4. **Architecture** (`/architecture`) – Monolithic & spatial works, geological context, passive climate envelopes, and built case studies.
5. **Interiors** (`/interiors`) – Tactile calm, room photography, material finish selection, and private residence case studies.
6. **Branding & Identity** (`/branding`) – Visual systems, bespoke monograms, luxury packaging, and editorial monographs.
7. **Digital & UI/UX** (`/digital`) – Tokenised design systems, WebGL creative shaders, and sub-second edge performance benchmarks.
8. **Our Work** (`/work`) – Filterable portfolio index (Architecture, Interiors, Branding, Digital, Product Design) with interactive preview modal.
   - **Dedicated Project Monographs** (`/work/[slug]`):
     - `solis-pavilion-zurich` (Solis Monolithic Pavilion)
     - `casa-terrazzo-milan` (Casa Terrazzo & Mineral Loft)
     - `nocturne-parfumerie-paris` (Nocturne Botanical Parfumerie)
     - `kroma-design-system-tokyo` (KROMA Generative Design System)
     - `nordic-timber-residence` (Njord Cross-Laminated Timber Retreat)
     - `arch-lounge-chair-collection` (Cast Bronze & Wool Armchair)
     - `monolith-bookshop-seoul` (Monolith Flagship & Reading Library)
     - `vellum-identity-geneva` (Vellum Private Banking Identity)
9. **Studio Journal** (`/journal`) – Critical editorial essays on spatial silence, materiality, and the architecture of identity.
   - **Dedicated Journal Essays** (`/journal/[slug]`):
     - `the-importance-of-visual-identity`
     - `designing-spaces-that-feel-personal`
     - `understanding-colour-and-material`
     - `the-future-of-digital-design`
10. **Start a Project** (`/contact`) – Project initiation dossier form with capability multi-select, budget tiers, file attachment simulation, studio coordinates, and WhatsApp concierge.

---

## 3. Unique Feature: Creative Canvas Navigation

- **Asymmetric Hamburger Icon**: Minimal square outline holding three differently sized horizontal strokes.
- **Diagonal Slide-in Transition**: Expansive off-canvas modal sliding in diagonally from the upper-left corner (`origin-top-left`).
- **Two-Column Composition**: 10 numbered navigation links with live hover synchronization.
- **Rotating Studio Emblem**: Circular SVG emblem rotating infinitely at 24s cadence.
- **Floating Visual Viewport**: Dedicated image area updating dynamically as users explore sections.
- **Mobile-Adaptive Canvas**: Clean vertical layout with zero horizontal overflow.

---

## 4. Local Installation & Preview

```bash
# 1. Navigate to the project directory
cd "Industry-Specific Website Demonstrations/010 Creative Professionals"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Verification

```bash
# Verify static build and TypeScript validation
npm run build

# Start production server
npm run start
```

---

## 5. Deployment & GitHub

- **GitHub Repository**: `https://github.com/ilath9198-wq/010-creative-professionals.git`
- **Vercel Production**: `https://010-creative-professionals.vercel.app`
