"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#sylwia", id: "sylwia", label: "Sylwia" },
  { href: "#konsultacja", id: "konsultacja", label: "Konsultacja" },
  { href: "#projekty", id: "projekty", label: "Projekty" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("sylwia");

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

  return (
    <header className="sticky top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className={[
            "flex items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 sm:py-2.5",
            scrolled
              ? "border-border-strong bg-background-soft/85 shadow-md backdrop-blur-2xl"
              : "border-border bg-background-soft/55 backdrop-blur-xl",
          ].join(" ")}
        >
          <a
            href="#top"
            className="group flex items-center gap-3 pr-2"
            aria-label="Sylwia Wróblewska — strona główna"
          >
            <span className="brand-orb" aria-hidden>
              <span className="brand-orb-letters">SW</span>
            </span>
            <span className="brand-name">
              <span className="brand-name-first">Sylwia</span>{" "}
              <span className="brand-name-last">Wróblewska</span>
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
                  className={[
                    "nav-link",
                    isActive ? "nav-link-active" : "",
                  ].join(" ")}
                >
                  {item.label}
                  <span className="nav-link-dot" aria-hidden />
                </a>
              );
            })}
          </nav>

          <a href="#konsultacja" className="btn-luxe">
            Umów konsultację
          </a>
        </div>
      </div>
    </header>
  );
}
