import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Inwestowanie · Sylwia Wróblewska",
  description:
    "Doradztwo dla inwestorów w nieruchomościach. Wybór mieszkania pod wynajem, flip lub długoterminowy portfel. 17 lat praktyki na rynku Trójmiasta.",
};

export default function InwestowaniePage() {
  return (
    <SubpageLayout
      kicker="Inwestowanie"
      title={
        <>
          Inwestor <span className="italic text-fuchsia-700">i przedsiębiorca.</span>
        </>
      }
      intro="Inwestor i przedsiębiorca z 17-letnim stażem w nieruchomościach. Pomagam wybrać właściwą inwestycję, przeliczyć rentowność i zamknąć transakcję tak, żeby wszystkie ryzyka były policzone z głową."
    >
      <div className="mx-auto max-w-5xl">
        <section className="mt-8">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12">
            <span className="kicker">Z kim pracuję</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Inwestorzy, którzy <span className="italic text-fuchsia-700">liczą.</span>
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Pod wynajem",
                  text: "Mieszkania pod wynajem długoterminowy, krótkoterminowy, najem instytucjonalny.",
                },
                {
                  title: "Pod flip",
                  text: "Lokale do remontu, generalnej modernizacji, podziału lub zmiany funkcji.",
                },
                {
                  title: "Pod portfel",
                  text: "Budowa długoterminowego portfela nieruchomości w Trójmieście i regionie.",
                },
              ].map((c) => (
                <article key={c.title} className="rounded-2xl border border-border bg-background-soft/60 p-6">
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <span className="kicker">Co biorę pod uwagę</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Wybór mieszkania to <span className="italic text-fuchsia-700">nie tylko cena za metr.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            To lokalizacja, plan miejscowy, stan prawny, potencjał najmu, koszty utrzymania, perspektywy
            dzielnicy, otoczenie deweloperskie. Pomagam to wszystko przeliczyć przed decyzją, korzystając
            z bazy klientów i ofert dostępnych poza oficjalnym obiegiem.
          </p>
        </section>
      </div>
    </SubpageLayout>
  );
}
