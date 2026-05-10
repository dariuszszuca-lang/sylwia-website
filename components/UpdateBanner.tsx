"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sylwia-update-banner-dismissed-v1";

export default function UpdateBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;
    setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "1");
    }
  };

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-50 bg-[var(--champagne-50)] border-b border-[var(--border-luxe)] text-[var(--foreground-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:px-8 lg:px-10 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <p className="leading-snug">
          <span aria-hidden className="mr-2">✨</span>
          Trwa aktualizacja. Niektóre treści mogą ulec zmianie.
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Zamknij komunikat"
          className="shrink-0 rounded-full p-1.5 text-[var(--muted)] transition-colors hover:bg-black/5 hover:text-[var(--foreground)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
