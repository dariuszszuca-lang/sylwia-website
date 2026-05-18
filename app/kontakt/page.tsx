import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Kontakt · Sylwia Wróblewska",
  description:
    "Skontaktuj się bezpośrednio: swroblewska@domhunter.pl, +48 571 309 209. Biuro Dom Hunter Sp. z o.o. w Trójmieście. Społeczność Nieruchomości Spod Lady.",
};

const kanały = [
  {
    label: "E-mail",
    value: "swroblewska@domhunter.pl",
    href: "mailto:swroblewska@domhunter.pl",
    note: "Odpisuję sama. Bez asystentów, bez automatów. Zwykle w ciągu doby.",
  },
  {
    label: "Telefon",
    value: "+48 571 309 209",
    href: "tel:+48571309209",
    note: "Najszybciej w godzinach pracy biura. SMS też działa.",
  },
];

const obecnoscOnline = [
  {
    label: "Dom Hunter",
    value: "domhunter.pl",
    href: "https://www.domhunter.pl",
    note: "Strona butikowego biura nieruchomości w Trójmieście.",
  },
  {
    label: "Nieruchomości Spod Lady",
    value: "nieruchomoscispodlady.pl",
    href: "https://www.nieruchomoscispodlady.pl",
    note: "Społeczność 2 000 pośredników, której jestem założycielką i liderem.",
  },
  {
    label: "Instagram",
    value: "@sylwiawroblewska.pl",
    href: "https://www.instagram.com/sylwiawroblewska.pl/",
    note: "Codzienność pośrednika, kulisy transakcji, refleksje z branży.",
  },
  {
    label: "Grupa Facebook NSL",
    value: "Nieruchomości Spod Lady",
    href: "https://www.facebook.com/groups/nieruchomoscispodlady",
    note: "Zamknięta grupa dla pośredników, weryfikowane członkostwo.",
  },
];

export default function KontaktPage() {
  return (
    <SubpageLayout
      kicker="Kontakt"
      title={
        <>
          Napisz albo zadzwoń <span className="italic text-fuchsia-700">bezpośrednio.</span>
        </>
      }
      intro="Każda współpraca zaczyna się od krótkiej rozmowy, w której ustalamy zakres i tempo działania. Odpisuję sama, bez asystentów. Wybierz najwygodniejszy dla Ciebie kanał."
    >
      <div className="mx-auto max-w-5xl">
        {/* KANAŁY BEZPOŚREDNIE */}
        <section className="mt-8">
          <span className="kicker">Kontakt bezpośredni</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Najszybsze <span className="italic text-fuchsia-700">drogi.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {kanały.map((k) => (
              <a
                key={k.label}
                href={k.href}
                className="premium-panel champagne-line rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-fuchsia-300"
              >
                <p className="kicker">{k.label}</p>
                <p className="mt-3 font-display text-2xl text-foreground">{k.value}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{k.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* BIURO */}
        <section className="mt-16">
          <div className="premium-panel rounded-[2rem] p-8 sm:p-12">
            <span className="kicker">Biuro</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Dom Hunter Sp. z o.o. <span className="italic text-fuchsia-700">Trójmiasto.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Butikowe biuro nieruchomości w Gdańsku. Spotkania stacjonarne po wcześniejszym ustaleniu
              terminu. Szczegółowy adres podaję mailem po umówieniu spotkania.
            </p>
            <a
              href="https://www.domhunter.pl"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-fuchsia-700"
            >
              Strona biura: domhunter.pl <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ONLINE */}
        <section className="mt-16">
          <span className="kicker">W sieci</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Tam też mnie <span className="italic text-fuchsia-700">znajdziesz.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {obecnoscOnline.map((o) => (
              <a
                key={o.label}
                href={o.href}
                target="_blank"
                rel="noreferrer"
                className="premium-panel rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-fuchsia-300"
              >
                <p className="kicker">{o.label}</p>
                <p className="mt-3 font-display text-xl text-foreground">{o.value}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{o.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* KONSULTACJA SHORTCUT */}
        <section className="mt-16">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12 text-center">
            <span className="kicker">Konsultacja 1:1</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Chcesz porozmawiać <span className="italic text-fuchsia-700">w cztery oczy?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
              60 minut bezpośredniej rozmowy. Strategia sprzedaży, rynek off-market, marka osobista,
              negocjacje. Online lub w Trójmieście.
            </p>
            <a href="/konsultacje" className="btn-primary mt-8 inline-flex">
              Zobacz szczegóły
            </a>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}
