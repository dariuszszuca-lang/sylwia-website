import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Wystąpienia · Sylwia Wróblewska",
  description:
    "Konferencje branżowe, panele eksperckie i wystąpienia medialne. Tematy: rynek off-market, etyka zawodu, marka osobista pośrednika, budowa społeczności agentów.",
};

const tematy = [
  {
    title: "Rynek off-market",
    text: "Jak działa sprzedaż dyskretna, dlaczego klienci coraz częściej tego oczekują, jakie wartości daje pośrednikowi i klientowi.",
  },
  {
    title: "Etyka zawodu pośrednika",
    text: "Współpraca ponad konkurencją, transparentność, dzielenie się wiedzą. Co tworzy nowoczesny standard branży.",
  },
  {
    title: "Marka osobista pośrednika",
    text: "Jak budować autorytet, pozycjonować się na rynku premium, pracować na relację zamiast na pojedynczą prowizję.",
  },
  {
    title: "Społeczność agentów (NSL)",
    text: "Jak zbudowałam społeczność 2 000 agentów. Co tworzy zaufanie, jakie zasady utrzymują standard, dlaczego współpraca działa.",
  },
];

export default function WystapieniaPage() {
  return (
    <SubpageLayout
      kicker="Wystąpienia"
      title={
        <>
          Konferencje, panele, <span className="italic text-fuchsia-700">media.</span>
        </>
      }
      intro="Występuję na konferencjach branży nieruchomości, w panelach eksperckich i w mediach. Dzielę się tym, co naprawdę działa w pracy pośrednika i co buduje branżę długoterminowo."
      image={{ src: "/images/sylwia/popiersie.jpg", alt: "Sylwia Wróblewska z popiersiem, energiczna postawa" }}
    >
      <div className="mx-auto max-w-5xl">
        <section className="mt-8">
          <span className="kicker">Tematy</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            O czym <span className="italic text-fuchsia-700">opowiadam.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tematy.map((t) => (
              <article key={t.title} className="premium-panel rounded-3xl p-7">
                <h3 className="text-base font-semibold text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{t.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12 text-center">
            <span className="kicker">Zaproszenie</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Konferencja, panel, podcast?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
              Napisz, o czym chcesz porozmawiać. Format i czas dopasuję do potrzeb.
            </p>
            <a
              href="mailto:swroblewska@domhunter.pl?subject=Zaproszenie%20na%20wyst%C4%85pienie"
              className="btn-primary mt-8 inline-flex"
            >
              Zaproś mnie
            </a>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}
