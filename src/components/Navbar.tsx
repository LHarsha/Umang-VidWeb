"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo — edit brand name here */}
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-foreground">
          Beazt<span className="text-accent">Motions</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:bg-accent-dim"
            >
              Book an edit
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background"
                onClick={() => setOpen(false)}
              >
                Book an edit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
