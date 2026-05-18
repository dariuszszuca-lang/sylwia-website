type Props = {
  size?: number;
  className?: string;
};

/** Sygnet: tylko fuksjowa kropka (gradient + delikatny gloss). */
export function BrandMark({ size = 14, className = "" }: Props) {
  return (
    <span
      className={`brand-mark ${className}`}
      aria-hidden
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 14 14" className="brand-mark-svg">
        <defs>
          <radialGradient id="brandDotBg" cx="0.35" cy="0.3" r="0.85">
            <stop offset="0%" stopColor="#e9479c" />
            <stop offset="55%" stopColor="#c43077" />
            <stop offset="100%" stopColor="#82184c" />
          </radialGradient>
          <radialGradient id="brandDotGloss" cx="0.3" cy="0.25" r="0.55">
            <stop offset="0%" stopColor="rgba(255, 240, 250, 0.7)" />
            <stop offset="60%" stopColor="rgba(255, 240, 250, 0)" />
          </radialGradient>
        </defs>
        <circle cx="7" cy="7" r="6.5" fill="url(#brandDotBg)" />
        <circle cx="7" cy="7" r="6.5" fill="url(#brandDotGloss)" />
      </svg>
    </span>
  );
}
