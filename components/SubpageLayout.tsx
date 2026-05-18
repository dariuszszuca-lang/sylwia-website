import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { LogoText } from "./LogoText";

type Props = {
  kicker: string;
  title: ReactNode;
  intro?: string;
  /** Opcjonalne zdjęcie po prawej w hero (np. portret tematyczny). */
  image?: { src: string; alt: string };
  children: ReactNode;
};

/**
 * Wspólny layout dla podstron kategorii (Pośrednictwo, Inwestowanie, etc.)
 * Ten sam header, hero pattern i footer co na stronie głównej.
 */
export function SubpageLayout({ kicker, title, intro, image, children }: Props) {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden pt-2">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/20 blur-[140px]" />
          <div className="absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-champagne-100/40 blur-[160px]" />
          <div className="absolute bottom-[-10%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-100/25 blur-[160px]" />
        </div>

        {/* HERO podstrony */}
        <section className="relative px-6 pt-16 pb-12 sm:px-8 lg:px-10 lg:pt-24">
          <div className={`mx-auto ${image ? "max-w-7xl" : "max-w-5xl"}`}>
            <Link href="/" className="kicker hover:text-fuchsia-700 inline-flex items-center gap-1.5">
              <span>←</span>
              <span>Wróć do strony głównej</span>
            </Link>

            {image ? (
              <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="kicker">{kicker}</span>
                  <h1 className="display mt-5 text-4xl leading-[1] font-medium text-foreground sm:text-6xl lg:text-7xl">
                    {title}
                  </h1>
                  {intro ? (
                    <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">{intro}</p>
                  ) : null}
                </div>
                <div className="relative mx-auto lg:ml-auto w-full max-w-[28rem]">
                  <div className="portrait-frame aspect-[3/4] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 60vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <span className="kicker">{kicker}</span>
                <h1 className="display mt-5 text-4xl leading-[1] font-medium text-foreground sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
                {intro ? (
                  <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">{intro}</p>
                ) : null}
              </div>
            )}
          </div>
        </section>

        {/* CONTENT */}
        <div className="relative px-6 pb-16 sm:px-8 lg:px-10">{children}</div>

        {/* CTA KONTAKT */}
        <section className="relative px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="premium-panel champagne-line rounded-[2rem] px-8 py-12 sm:px-12 text-center">
              <span className="kicker">Kontakt</span>
              <h2 className="display mx-auto mt-5 max-w-2xl text-3xl leading-[1.02] font-medium text-foreground sm:text-4xl">
                Porozmawiajmy.
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="mailto:swroblewska@domhunter.pl" className="btn-primary">
                  swroblewska@domhunter.pl
                </a>
                <a href="tel:+48571309209" className="btn-secondary">
                  +48 571 309 209
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative px-6 pb-12 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel rounded-3xl px-7 py-9 sm:px-10">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <LogoText />
                <div className="flex flex-col gap-2 text-sm text-muted sm:text-right">
                  <a href="tel:+48571309209" className="font-mono hover:text-fuchsia-700">
                    +48 571 309 209
                  </a>
                  <a
                    href="mailto:swroblewska@domhunter.pl"
                    className="hover:text-fuchsia-700"
                  >
                    swroblewska@domhunter.pl
                  </a>
                  <Link href="/konsultacje" className="hover:text-fuchsia-700">
                    Konsultacje 1:1
                  </Link>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-6 text-xs text-muted-soft">
                © 2026 Sylwia Wróblewska. Licencja zawodowa nr 18311.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
