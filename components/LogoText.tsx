import { BrandMark } from "./BrandMark";

type Props = {
  /** Czy pokazywać linijkę z rolami pod imieniem. */
  showRoles?: boolean;
  /** Czy logo jest w trybie kompaktowym (mniejsza skala). */
  compact?: boolean;
  className?: string;
};

/**
 * Logo: ● Sylwia Wróblewska
 *        pośrednik · inwestor · trener
 */
export function LogoText({ showRoles = true, compact = false, className = "" }: Props) {
  return (
    <span className={`logo-stack ${compact ? "logo-stack-compact" : ""} ${className}`.trim()}>
      <span className="logo-row">
        <BrandMark size={compact ? 12 : 14} />
        <span className="logo-name">
          <span className="logo-first">Sylwia</span>{" "}
          <span className="logo-last">Wróblewska</span>
        </span>
      </span>
      {showRoles ? (
        <span className="logo-roles" aria-hidden>
          pośrednik · inwestor · trener
        </span>
      ) : null}
    </span>
  );
}
