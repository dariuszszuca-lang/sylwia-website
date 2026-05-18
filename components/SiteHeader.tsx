"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoText } from "./LogoText";

const NAV = [
  { href: "/posrednictwo", id: "posrednictwo", label: "Pośrednictwo" },
  { href: "/inwestowanie", id: "inwestowanie", label: "Inwestowanie" },
  { href: "/szkolenia", id: "szkolenia", label: "Szkolenia" },
  { href: "/wystapienia", id: "wystapienia", label: "Wystąpienia" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-40 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-full border px-3 py-2 sm:px-4 sm:py-2.5",
            scrolled
              ? "border-border-strong bg-background-soft/85 shadow-md backdrop-blur-2xl"
              : "border-border bg-background-soft/65 backdrop-blur-xl",
          ].join(" ")}
        >
          <Link
            href="/"
            className="group flex items-center pr-2"
            aria-label="Sylwia Wróblewska, strona główna"
            onClick={() => setMenuOpen(false)}
          >
            <LogoText compact />
          </Link>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={["nav-link", isActive ? "nav-link-active" : ""].join(" ")}
                >
                  {item.label}
                  <span className="nav-link-dot" aria-hidden />
                </Link>
              );
            })}
          </nav>

          <a href="mailto:swroblewska@domhunter.pl" className="btn-luxe hidden md:inline-flex">
            Kontakt
          </a>

          <button
            type="button"
            className="hamburger inline-flex md:hidden"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={["hamburger-bar", menuOpen ? "hamburger-bar-1-open" : ""].join(" ")}
            />
            <span
              className={["hamburger-bar", menuOpen ? "hamburger-bar-2-open" : ""].join(" ")}
            />
          </button>
        </div>

        {/* Mobile nav drawer */}
        <div
          id="mobile-nav"
          className={["mobile-nav", menuOpen ? "mobile-nav-open" : ""].join(" ")}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-nav-inner" aria-label="Główna nawigacja (mobile)">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={["mobile-nav-link", isActive ? "mobile-nav-link-active" : ""].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-arrow" aria-hidden>→</span>
                </Link>
              );
            })}
            <a
              href="mailto:swroblewska@domhunter.pl"
              onClick={() => setMenuOpen(false)}
              className="btn-luxe inline-flex mobile-nav-cta"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
