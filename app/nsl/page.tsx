import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Nieruchomości Spod Lady · Sylwia Wróblewska",
  description:
    "Największa społeczność współpracujących agentów nieruchomości w Polsce — 2 000 pośredników, rynek off-market, ofert na wyłączność. Laureatka nagrody Pionier Etycznego Rynku Off Market 2025.",
};

const wartosci = [
  {
    title: "Współpraca ponad konkurencją",
    text: "Codziennie zamykamy wspólne transakcje. Każdy reprezentuje swojego klienta. Często z dodatkowym success fee dla współpracującego agenta.",
  },
  {
    title: "Zaufanie i weryfikacja",
    text: "Członkostwo jest weryfikowane i płatne. W ofertach „spod lady” są tylko nieruchomości na umowach pośrednictwa na wyłączność.",
  },
  {
    title: "Dzielenie się wiedzą",
    text: "Doświadczeni pośrednicy dzielą się know-how, strategiami i kontaktami. To środowisko, w którym agent rozwija się szybciej niż w pojedynkę.",
  },
];

const przewagi = [
  "Indywidualne podejście do kupujących, dostęp do wyselekcjonowanych klientów",
  "Bezpieczeństwo informacji — dane nie trafiają na publiczne portale",
  "Sprzedaż w dobrym momencie, najlepszy timing wejścia na rynek",
  "Lepsza pozycja negocjacyjna, ograniczona dostępność zwiększa prestiż oferty",
  "Brak „wypalenia” oferty zbyt długą ekspozycją w Internecie",
  "Oszczędność czasu i energii, mniej przypadkowych pokazów",
  "Dyskrecja w wyjątkowych sytuacjach (powody osobiste, rodzinne, biznesowe)",
  "Możliwość wyprzedzenia konkurencji, sprzedaż klientom z bazy agenta",
  "Testowanie strategii cenowych przed ogłoszeniem publicznym",
  "Budowanie poczucia ekskluzywności oferty",
  "Mniej osób wie o Twoich planach życiowych",
];

export default function NSLPage() {
  return (
    <SubpageLayout
      kicker="Nieruchomości Spod Lady"
      title={
        <>
          Największa społeczność współpracujących{" "}
          <span className="italic text-fuchsia-700">pośredników w Polsce.</span>
        </>
      }
      intro="Założyłam i współtworzę największą społeczność współpracujących agentów nieruchomości w Polsce. Wyrosła z potrzeby współpracy, zaufania i dzielenia się wartościowymi ofertami poza utartymi schematami."
    >
      <div className="mx-auto max-w-5xl">
        {/* LICZBA + NAGRODA */}
        <section className="mt-4">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
              <div className="text-center lg:text-left">
                <div className="big-num fuchsia">2 000</div>
                <p className="kicker mt-3">Pośredników w Polsce</p>
              </div>
              <div className="text-base leading-7 text-muted sm:text-lg">
                <p>
                  Więcej niż wszystkie biura sieciowe w Polsce razem. Codziennie wspólnie zamykamy
                  kolejne transakcje dzięki współpracy, zaufaniu, szacunkowi i dobrym wzajemnym
                  relacjom.
                </p>
                <p className="mt-4 italic font-display text-foreground-soft">
                  „Najlepsze oferty są te, których nie ma.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section className="mt-16">
          <span className="kicker">Jak to się zaczęło</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Od Trójmiasta do <span className="italic text-fuchsia-700">całej Polski.</span>
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-base leading-7 text-muted sm:text-lg">
              Społeczność powstała kilka lat temu w Trójmieście z inicjatywy mojej, jako agentki
              nieruchomości z wizją współpracy. Zaczęło się niepozornie od małej grupy na Facebooku,
              która miała skrócić pośrednikom drogę do wspólnego kontaktu.
            </p>
            <p className="text-base leading-7 text-muted sm:text-lg">
              Szybko się okazało, że agentów, którzy chcą tak pracować i wyznają podobne wartości,
              jest więcej. Dziś to społeczność, która liczy już 2 000 profesjonalistów w całej Polsce
              i ciągle rośnie.
            </p>
          </div>
        </section>

        {/* WARTOŚCI */}
        <section className="mt-16">
          <span className="kicker">Wartości społeczności</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Trzy <span className="italic text-fuchsia-700">filary NSL.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {wartosci.map((w) => (
              <article key={w.title} className="premium-panel rounded-3xl p-7">
                <h3 className="text-base font-semibold text-foreground">{w.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{w.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PRZEWAGI DLA KLIENTA */}
        <section className="mt-16">
          <span className="kicker">Przewagi off-market dla klienta</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Dlaczego klienci wybierają <span className="italic text-fuchsia-700">spod lady.</span>
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {przewagi.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft/60 p-5 text-sm leading-6 text-foreground-soft"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-fuchsia-500 font-mono text-[0.7rem] text-fuchsia-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* LOGO I SYMBOLIKA */}
        <section className="mt-16">
          <div className="premium-panel rounded-[2rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-fuchsia-light via-fuchsia-mid to-fuchsia-dark shadow-[0_24px_50px_-8px_rgba(196,48,119,0.5)]" />
                </div>
              </div>
              <div>
                <span className="kicker">Logo i symbolika</span>
                <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                  <span className="italic text-fuchsia-700">Fuksjowa kropka</span>{" "}
                  nie jest przypadkowa.
                </h2>
                <p className="mt-6 text-base leading-7 text-muted">
                  Fuksja to pasja, życzliwość, zrozumienie i akceptacja. Symbolizuje energię,
                  charyzmę, kobiecość i siłę. Buduje relacje, przyciąga uwagę, harmonizuje namiętność
                  czerwieni i spokój niebieskiego.
                </p>
                <p className="mt-4 text-sm text-muted-soft">
                  Logo zaprojektowała Magdalena Rutkowska. Nazwa i logo „Nieruchomości Spod Lady”
                  mają ochronę Urzędu Patentowego, numer prawa 373872.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAGRODA */}
        <section className="mt-16">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12">
            <span className="kicker">Wyróżnienie 2025</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Pionier Etycznego Rynku Nieruchomości{" "}
              <span className="italic text-fuchsia-700">Off Market 2025.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Społeczność została uhonorowana podczas XXV Gali Businesswoman Awards w uznaniu za
              wyjątkowy wkład w budowanie nowoczesnego, etycznego i opartego na współpracy rynku
              nieruchomości w Polsce.
            </p>
            <a
              href="/nagrody"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-fuchsia-700"
            >
              Więcej o nagrodzie <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* LINKI */}
        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <a
            href="https://www.nieruchomoscispodlady.pl"
            target="_blank"
            rel="noreferrer"
            className="premium-panel rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-fuchsia-300"
          >
            <span className="kicker">Strona społeczności</span>
            <p className="mt-3 font-display text-xl text-foreground">nieruchomoscispodlady.pl</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Oficjalna strona społeczności, regulamin, jak dołączyć, listy regionalne.
            </p>
          </a>
          <a
            href="https://www.facebook.com/groups/nieruchomoscispodlady"
            target="_blank"
            rel="noreferrer"
            className="premium-panel rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-fuchsia-300"
          >
            <span className="kicker">Grupa Facebook</span>
            <p className="mt-3 font-display text-xl text-foreground">Nieruchomości Spod Lady</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Zamknięta grupa dla pośredników. Codzienna komunikacja, wymiana ofert, networking.
            </p>
          </a>
        </section>
      </div>
    </SubpageLayout>
  );
}
