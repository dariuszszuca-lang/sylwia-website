"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  link: { url: string; label: string };
  status?: "live" | "soon";
  accent: "fuchsia" | "champagne" | "ink";
};

const PROJECTS: Project[] = [
  {
    id: "nsl",
    badge: "Społeczność i sklep",
    title: "Nieruchomości Spod Lady",
    tagline: "Społeczność 1 600+ agentów off-market.",
    description:
      "Grupa, sklep z materiałami i wkrótce aplikacja matchingowa do wymiany ofert między agentami w całej Polsce.",
    metrics: [
      { label: "Agentów", value: "1 600+" },
      { label: "Regionów", value: "8" },
      { label: "Aplikacja", value: "wkrótce" },
    ],
    link: { url: "https://nieruchomoscispodlady.pl", label: "Zobacz NSL" },
    status: "live",
    accent: "fuchsia",
  },
  {
    id: "domhunter",
    badge: "Agencja nieruchomości",
    title: "DomHunter",
    tagline: "Butikowa sprzedaż off-market w Trójmieście.",
    description:
      "Agencja nieruchomości skoncentrowana na rynku premium. Pozycjonowanie oferty, selekcja kupujących, dyskrecja w komunikacji.",
    metrics: [
      { label: "Format", value: "Butik" },
      { label: "Rejon", value: "Trójmiasto" },
      { label: "Status", value: "wkrótce" },
    ],
    link: { url: "https://domhunter.pl", label: "Poznaj DomHunter" },
    status: "soon",
    accent: "champagne",
  },
  {
    id: "akademia-ai",
    badge: "Akademia AI",
    title: "Akademia AI w Nieruchomościach",
    tagline: "Szkolenia AI dla agentów (z Dariuszem Szucą).",
    description:
      "Praktyczne warsztaty AI dla pośredników i biur. Format: środa online, czwartek-piątek stacjonarnie, sobota Q&A. Certyfikat KW-NSL-AI.",
    metrics: [
      { label: "Format", value: "4 dni" },
      { label: "Online", value: "środa + sobota" },
      { label: "Stacjonarnie", value: "czw-pt" },
    ],
    link: { url: "https://akademia-ai-nieruchomosci.pl", label: "Zobacz Akademię" },
    status: "live",
    accent: "ink",
  },
];

export function ProjectsGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    refs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-grid">
      {PROJECTS.map((p, i) => (
        <article
          key={p.id}
          ref={(el) => {
            if (el) refs.current.set(p.id, el);
          }}
          className={`project-card project-card--${p.accent}${activeId === p.id ? " is-active" : ""}`}
          style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
          onMouseEnter={() => setActiveId(p.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          {/* Decorative orb top-right */}
          <div className="project-orb" aria-hidden />

          <header className="project-header">
            <div className="project-meta">
              <span className="project-badge">{p.badge}</span>
              {p.status === "soon" && <span className="project-status">wkrótce</span>}
              {p.status === "live" && <span className="project-status project-status--live">live</span>}
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-tagline">{p.tagline}</p>
          </header>

          <p className="project-description">{p.description}</p>

          <div className="project-metrics">
            {p.metrics.map((m) => (
              <div key={m.label} className="project-metric">
                <div className="project-metric-value">{m.value}</div>
                <div className="project-metric-label">{m.label}</div>
              </div>
            ))}
          </div>

          <a
            href={p.link.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`${p.link.label} — otwiera się w nowej karcie`}
          >
            <span>{p.link.label}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </article>
      ))}
    </div>
  );
}
