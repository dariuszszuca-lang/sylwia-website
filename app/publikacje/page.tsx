import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Publikacje · Sylwia Wróblewska",
  description:
    "Komentarze, wywiady i artykuły dla magazynu Nieruchomości oraz innych mediów branżowych. Tematy: rynek off-market, etyka zawodu, marka osobista, współpraca agentów.",
};

const tematy = [
  "Rynek off-market i dyskretna sprzedaż nieruchomości",
  "Etyka zawodu pośrednika",
  "Marka osobista agenta nieruchomości",
  "Współpraca między biurami i agentami",
  "Praca z klientem premium",
  "Społeczność Nieruchomości Spod Lady",
];

export default function PublikacjePage() {
  return (
    <SubpageLayout
      kicker="Publikacje"
      title={
        <>
          Magazyn <span className="italic text-fuchsia-700">Nieruchomości</span> i media branżowe.
        </>
      }
      intro="Komentarze, wywiady i artykuły dla magazynu Nieruchomości oraz innych mediów branży nieruchomości. Dzielę się tym, co działa w pracy pośrednika i co buduje branżę długoterminowo."
    >
      <div className="mx-auto max-w-5xl">
        <section className="mt-8">
          <span className="kicker">Tematy publikacji</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            O czym <span className="italic text-fuchsia-700">piszę.</span>
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {tematy.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft/60 p-5 text-sm leading-7 text-foreground-soft"
              >
                <span className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12 text-center">
            <span className="kicker">Zaproszenie do wypowiedzi</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Potrzebujesz <span className="italic text-fuchsia-700">komentarza eksperta?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
              Napisz, o czym chcesz porozmawiać. Odpowiadam sama, bez asystentów. Format dopasuję
              do redakcji: wywiad pisemny, rozmowa telefoniczna, komentarz na piśmie, panel.
            </p>
            <a
              href="mailto:swroblewska@domhunter.pl?subject=Pro%C5%9Bba%20o%20komentarz"
              className="btn-primary mt-8 inline-flex"
            >
              Napisz do mnie
            </a>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}
