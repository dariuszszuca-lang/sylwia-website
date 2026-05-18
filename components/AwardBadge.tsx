/**
 * Floating badge w hero — sygnalizuje nagrodę Pioniera 2025
 * Klikalny → scroll do sekcji #nagrody
 */
export function AwardBadge() {
  return (
    <a href="#nagrody" className="award-badge" aria-label="Pionier Etycznego Rynku Nieruchomości Off Market 2025">
      <span className="award-badge-icon" aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M7 4h10v4a5 5 0 11-10 0V4zM7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M9 13l-1 4h8l-1-4M7 20h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="award-badge-text">
        <span className="award-badge-kicker">Laureatka 2025</span>
        <span className="award-badge-title">
          Pionier Etycznego Rynku<br />
          Nieruchomości Off Market
        </span>
        <span className="award-badge-meta">XXV Businesswoman Awards · 26.09.2025</span>
      </span>
    </a>
  );
}
