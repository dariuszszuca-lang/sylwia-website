type Props = {
  size?: number;
  className?: string;
};

export function BrandMark({ size = 36, className = "" }: Props) {
  return (
    <span
      className={`brand-mark ${className}`}
      aria-hidden
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 36 36" className="brand-mark-svg">
        <defs>
          <linearGradient id="brandMarkBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c43077" />
            <stop offset="55%" stopColor="#a4205f" />
            <stop offset="100%" stopColor="#c0a472" />
          </linearGradient>
          <radialGradient id="brandMarkGloss" cx="0.3" cy="0.25" r="0.7">
            <stop offset="0%" stopColor="rgba(255, 240, 220, 0.55)" />
            <stop offset="55%" stopColor="rgba(255, 240, 220, 0)" />
          </radialGradient>
        </defs>

        {/* Tło kuli */}
        <circle cx="18" cy="18" r="18" fill="url(#brandMarkBg)" />
        <circle cx="18" cy="18" r="18" fill="url(#brandMarkGloss)" />

        {/* Cienki pierścień ozdobny — sygnet */}
        <circle
          cx="18"
          cy="18"
          r="15.6"
          fill="none"
          stroke="rgba(247, 240, 227, 0.38)"
          strokeWidth="0.5"
        />

        {/* Monogram SW — Fraunces italic, ciasny kerning, naturalna ligature */}
        <text
          x="18"
          y="23.4"
          textAnchor="middle"
          className="brand-mark-mono"
        >
          SW
        </text>

        {/* Ozdobny punkt pod monogramem */}
        <circle cx="18" cy="29" r="0.7" fill="rgba(247, 240, 227, 0.75)" />
      </svg>
    </span>
  );
}
