"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const NAV = [
  { href: "#sylwia", id: "sylwia", label: "Sylwia" },
  { href: "#konsultacja", id: "konsultacja", label: "Konsultacja" },
  { href: "#projekty", id: "projekty", label: "Projekty" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("sylwia");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size === 0) return;
        let topId = "";
        let topRatio = -1;
        for (const [id, ratio] of visible) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }
        if (topId) setActiveId(topId);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
    <header className="sticky top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 sm:py-2.5",
            scrolled
              ? "border-border-strong bg-background-soft/85 shadow-md backdrop-blur-2xl"
              : "border-border bg-background-soft/55 backdrop-blur-xl",
          ].join(" ")}
        >
          <a
            href="#top"
            className="group flex items-center gap-3 pr-2"
            aria-label="Sylwia Wróblewska — strona główna"
            onClick={() => setMenuOpen(false)}
          >
            <BrandMark size={36} className="brand-mark-header" />
            <span className="brand-name hidden min-[480px]:inline-block">
              Sylwia Wróblewska
            </span>
          </a>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={["nav-link", isActive ? "nav-link-active" : ""].join(" ")}
                >
                  {item.label}
                  <span className="nav-link-dot" aria-hidden />
                </a>
              );
            })}
          </nav>

          <a href="#konsultacja" className="btn-luxe hidden md:inline-flex">
            Umów konsultację
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
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={["mobile-nav-link", isActive ? "mobile-nav-link-active" : ""].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-arrow" aria-hidden>→</span>
                </a>
              );
            })}
            <a
              href="#konsultacja"
              onClick={() => setMenuOpen(false)}
              className="btn-luxe inline-flex mobile-nav-cta"
            >
              Umów konsultację · 300 zł / h
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
