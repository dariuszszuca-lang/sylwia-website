import Image from "next/image";
import Link from "next/link";

type Category = {
  id: string;
  label: string;
  href: string;
  /** Ścieżka do zdjęcia (z public/), opcjonalna; jeśli brak, używamy ikony. */
  image?: string;
  /** Inline SVG ikona (używana, gdy brak zdjęcia). */
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    id: "posrednictwo",
    label: "Pośrednictwo",
    href: "/posrednictwo",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 17l4 4 6-6m4 8l8-8-3-3-8 8M11 6l3-3 8 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "inwestowanie",
    label: "Inwestowanie",
    href: "/inwestowanie",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 24l7-7 5 5 9-12M19 10h7v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "szkolenia",
    label: "Szkolenia",
    href: "/szkolenia",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 5l13 6-13 6L3 11l13-6zM9 14v8c0 1.5 3 3 7 3s7-1.5 7-3v-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "wystapienia",
    label: "Wystąpienia",
    href: "/wystapienia",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="13" y="4" width="6" height="14" rx="3" />
        <path d="M9 15a7 7 0 0014 0M16 22v6M11 28h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mentoring",
    label: "Mentoring",
    href: "/mentoring",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="11" r="4" />
        <path d="M4 26c0-4 4-7 8-7s8 3 8 7M22 14a3 3 0 110-6M28 24c0-3-2-5-5-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "biuro",
    label: "Biuro nieruchomości",
    href: "/biuro",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 27V13l11-7 11 7v14M13 27v-7h6v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "nagrody",
    label: "Nagrody",
    href: "/nagrody",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 5h12v6a6 6 0 11-12 0V5zM10 7H6v3a4 4 0 004 4M22 7h4v3a4 4 0 01-4 4M13 17l-1 5h8l-1-5M10 27h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "publikacje",
    label: "Publikacje",
    href: "/publikacje",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8c4-2 8-2 12 0v18c-4-2-8-2-12 0V8zM16 8c4-2 8-2 12 0v18c-4-2-8-2-12 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function CategoryCircles() {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={cat.href}
          className="category-circle"
          aria-label={cat.label}
        >
          <div className="category-circle-inner">
            {cat.image ? (
              <Image
                src={cat.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 120px"
                className="category-circle-image"
              />
            ) : (
              <span className="category-circle-icon">{cat.icon}</span>
            )}
            <span className="category-circle-overlay" aria-hidden />
            <span className="category-circle-label">{cat.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
