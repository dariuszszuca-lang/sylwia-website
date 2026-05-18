import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { BookingWidget } from "@/components/BookingWidget";
import { LogoText } from "@/components/LogoText";

export const metadata = {
  title: "Konsultacje 1:1 · Sylwia Wróblewska",
  description:
    "Godzinna konsultacja strategiczna z Sylwią Wróblewską — dla pośredników, właścicieli biur i klientów rynku nieruchomości. 300 zł / 60 min, online lub Trójmiasto.",
};

export default function KonsultacjePage() {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden pt-2">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/20 blur-[140px]" />
          <div className="absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-champagne-100/40 blur-[160px]" />
        </div>

        {/* HERO */}
        <section className="relative px-6 pt-16 pb-12 sm:px-8 lg:px-10 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <Link href="/" className="kicker hover:text-fuchsia-700">
              ← Wróć do strony głównej
            </Link>

            <h1 className="display mt-8 text-4xl leading-[1] font-medium text-foreground sm:text-6xl lg:text-7xl">
              Konsultacja 1:1
            </h1>
            <p className="mt-6 mx-auto max-w-xl text-base leading-8 text-muted sm:text-lg">
              60 minut bezpośredniej rozmowy ze mną. Strategia sprzedaży, rynek off-market, marka osobista,
              negocjacje, proces pozyskania. Online lub w Trójmieście.
            </p>
            <p className="mt-6 font-mono text-sm text-foreground-soft">
              300 zł · 60 min · online lub Trójmiasto
            </p>
          </div>
        </section>

        {/* DLA KOGO */}
        <section className="relative px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Pośrednicy",
                  text: "Agenci budujący markę osobistą, wchodzący na rynek off-market, planujący przejście na wyłączności.",
                },
                {
                  title: "Właściciele biur",
                  text: "Wsparcie strategiczne dla biur, organizacja procesu, szkolenie zespołu, pozycjonowanie marki.",
                },
                {
                  title: "Klienci rynku",
                  text: "Osoby sprzedające lub kupujące nieruchomość, potrzebujące drugiego zdania albo strategii negocjacyjnej.",
                },
              ].map((card) => (
                <div key={card.title} className="premium-panel rounded-3xl p-7">
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="relative px-6 py-12 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <BookingWidget />
          </div>
        </section>

        {/* CO PO KONSULTACJI */}
        <section className="relative px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="premium-panel champagne-line rounded-3xl p-8 sm:p-10">
              <span className="kicker">Co dostajesz</span>
              <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                Konkretne ustalenia, nie ogólniki.
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "60 minut bezpośredniej rozmowy ze mną — bez asystentów, bez automatów",
                  "Krótkie podsumowanie mailowe najważniejszych ustaleń",
                  "Opcja kontynuacji w formie projektowej, jeśli temat tego wymaga",
                  "Format: Google Meet (online) lub spotkanie w Trójmieście",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-foreground-soft">
                    <span className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                    href="mailto:sylwia@nieruchomoscispodlady.pl"
                    className="hover:text-fuchsia-700"
                  >
                    sylwia@nieruchomoscispodlady.pl
                  </a>
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
