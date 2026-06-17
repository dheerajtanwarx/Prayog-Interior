# Prayog Interiors

A premium, production-ready portfolio website for **Prayog Interiors**, an interior design studio. Built with the Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

The visual identity is adapted from a dark, copper-and-cream design reference, while all project content is sourced from the studio's portfolio PDF.

## Tech Stack

- **Next.js 14** (App Router, Server Components, static generation)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom design-token palette
- **Framer Motion** for scroll reveals, staggers, and the gallery lightbox
- **next/image** for responsive, lazy-loaded, optimized imagery
- **lucide-react** icons + **next/font** (Playfair Display + Inter)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
src/
  app/
    layout.tsx                 # fonts, metadata, Navbar + Footer shell
    page.tsx                   # home page (all landing sections)
    projects/[slug]/page.tsx   # dynamic project detail pages (SSG)
    sitemap.ts | robots.ts     # SEO
    not-found.tsx
    globals.css
  components/
    Hero, Navbar, Footer, Marquee
    AboutSection, ServicesSection, ProjectsSection, PortfolioSection
    WhyChooseUs, ProcessSection, Testimonials
    CTASection, ContactSection, ContactForm
    ProjectCard
    project/                   # ProjectBanner, ProjectGallery, ImageLightbox, ProjectNav
    ui/                        # Button, SectionHeading, Reveal (animation primitives)
  data/
    site.ts                    # brand, nav, contact, stats
    services.ts                # services catalogue
    projects.ts                # structured project data + helpers
  lib/
    types.ts                   # shared TypeScript types
public/projects/<slug>/        # optimized .webp imagery per project
```

## Content Source

Project titles, descriptions, categories, locations, materials, and imagery are
extracted from the studio portfolio PDF. The five projects are:

1. **Velora Jewels** — Luxury retail showroom
2. **Urban Rustic Dining** — Hospitality / restaurant
3. **Dhaka House** — Residential façade
4. **Khichar Villa** — Contemporary villa
5. **Giriraj House** — 1390 sq.ft. residence

Edit `src/data/projects.ts` to add or update projects — pages, the sitemap, the
portfolio wall, and footer links all derive from this single source.

## Notes

- The **hero background image is intentionally preserved** from the original design reference.
- Images are served as optimized AVIF/WebP via `next/image` with responsive `sizes` and lazy loading.
- The contact form is front-end only (no backend) — wire it to an email/API route as needed.
# Prayog-Interior
