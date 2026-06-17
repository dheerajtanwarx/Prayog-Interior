"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-copper/10 bg-bg/85 py-3 backdrop-blur-xl backdrop-saturate-150"
          : "py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Link
          href="/#home"
          className="font-display text-2xl font-semibold tracking-[0.12em] text-gradient-cream"
        >
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                className="group relative text-[0.8rem] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-copper to-transparent transition-all duration-500 ease-out-expo group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full border border-copper/40 px-6 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:border-copper hover:shadow-[0_0_25px_rgba(193,127,89,0.2)] md:block"
          >
            Start a Project
          </Link>

          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-copper/30 text-copper-light transition-colors hover:border-copper lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/97 backdrop-blur-2xl transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={`/${link.href}`}
            onClick={() => setOpen(false)}
            className="text-lg uppercase tracking-[0.15em] text-cream-muted transition-colors hover:text-cream"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-2 rounded-full border border-copper px-8 py-3 text-sm uppercase tracking-[0.12em] text-cream"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
