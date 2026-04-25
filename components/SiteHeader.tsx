"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#sylwia", label: "Sylwia" },
  { href: "#konsultacja", label: "Konsultacja" },
  { href: "#projekty", label: "Projekty" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className={[
            "flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3",
            scrolled
              ? "border-border-strong bg-background-soft/85 shadow-md backdrop-blur-2xl"
              : "border-border bg-background-soft/55 backdrop-blur-xl",
          ].join(" ")}
        >
          <a
            href="#top"
            className="flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.22em] text-foreground uppercase"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_12px_rgba(196,48,119,0.7)]"
              aria-hidden
            />
            Sylwia Wróblewska
          </a>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-background-soft hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#konsultacja" className="btn-primary !px-5 !py-2.5 !text-[0.8125rem]">
            Umów konsultację
          </a>
        </div>
      </div>
    </header>
  );
}
