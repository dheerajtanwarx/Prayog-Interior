import Link from "next/link";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/data/site";
import { projects } from "@/data/projects";

const socials = [
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-copper/10 bg-bg-elevated pb-8 pt-[clamp(4rem,8vw,6rem)]">
      <div className="container-px">
        <div className="mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Link
              href="/#home"
              className="font-display text-2xl font-semibold tracking-[0.1em] text-gradient-cream"
            >
              {site.name}
            </Link>
            <p className="mt-5 text-[0.85rem] leading-relaxed text-ink-muted">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-copper/15 text-ink-muted transition-all hover:border-copper hover:bg-copper/10 hover:text-copper-light"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Explore">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={`/${link.href}`} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Projects">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="footer-link">
                  {p.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in Touch">
            <li>
              <a href={`mailto:${site.email}`} className="footer-link">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="footer-link">
                {site.phone}
              </a>
            </li>
            <li className="text-[0.85rem] text-ink-muted">{site.address}</li>
            <li>
              <Link
                href="/#contact"
                className="mt-2 inline-flex items-center gap-1.5 text-[0.8rem] uppercase tracking-[0.1em] text-copper-light hover:text-copper-bright"
              >
                Start a Project <ArrowUpRight size={14} />
              </Link>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-copper/10 pt-8">
          <p className="text-[0.78rem] text-ink-subtle">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.78rem] text-ink-subtle">
            Designed &amp; built with care in Jaipur, India.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-[0.72rem] uppercase tracking-[0.15em] text-copper">
        {title}
      </h3>
      <ul className="flex flex-col gap-3.5 [&_.footer-link]:text-[0.85rem] [&_.footer-link]:text-ink-muted [&_.footer-link]:transition-colors hover:[&_.footer-link]:text-cream">
        {children}
      </ul>
    </div>
  );
}
