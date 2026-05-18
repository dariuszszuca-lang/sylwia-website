import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Dom Hunter · Sylwia Wróblewska",
  description:
    "Dom Hunter Sp. z o.o., butikowe biuro nieruchomości w Trójmieście prowadzone przez Sylwię Wróblewską. Sprzedaż mieszkań, domów, działek, komercji i obiektów inwestycyjnych.",
};

const najwazniejszeTransakcje = [
  "Alfa Centrum Park Handlowy, Gdańsk Morena",
  "Obiekt biurowy, Gdańsk Centrum Wrzeszcza, 600 m²",
  "Mały skomercjalizowany Park Handlowy, 150 m², trzy lokale, Warszawa",
  "Dwa butikowe hotele w centrum Gdańska, ulica Długa, na umowach najmu",
  "Działka w Sopocie z PNB hotelu, ulica Wydmy (hotel już stoi)",
  "Sprzedaż hali magazynowej z małym biurowcem, Reda",
  "Komercjalizacja biurowców dla PKP Energetyka oraz Pomorska Izba Rzemieślnicza",
  "Sprzedaż małych parków handlowych w Warszawie",
];

const opinieKlientow = [
  {
    text: "Bardzo polecam! Nie wierzyłam, że tak szybko można sprzedać mieszkanie z rynku wtórnego w tak trudnym czasie, gdzie inni zawiedli. Tu było inaczej, było szybko, sprawnie i bez obietnic bez pokrycia. W dwa tygodnie miałam akt notarialny w ręku i pieniądze na koncie. Serdecznie polecam Panią Agnieszkę i Panią Sylwię.",
    author: "Magda",
    location: "Opinia z Google",
  },
  {
    text: "Bardzo polecam współpracę z Dom Hunter Biuro Nieruchomości, a szczególnie z Panią Sylwią. Proces sprzedaży nie był prosty ze względu na trudnego lokatora. Pani Sylwia zdołała jednak pokonać wszelkie trudności i z sukcesem zamknąć transakcję. Serdecznie polecam.",
    author: "Przemysław Klimkowski",
    location: "Klient Dom Hunter",
  },
];

export default function BiuroPage() {
  return (
    <SubpageLayout
      kicker="Biuro nieruchomości"
      title={
        <>
          Dom Hunter <span className="italic text-fuchsia-700">Trójmiasto.</span>
        </>
      }
      intro="Dom Hunter Sp. z o.o., butikowe biuro nieruchomości w Trójmieście. Mała liczba projektów rocznie, dyskrecja, praca na relację. Sprzedaż wtórna, pierwotna, działki, obiekty komercyjne i inwestycyjne."
      image={{ src: "/images/sylwia/dom-hunter-teczka.jpg", alt: "Sylwia Wróblewska z teczką Dom Hunter Nieruchomości" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* NAJWAŻNIEJSZE TRANSAKCJE */}
        <section className="mt-8">
          <span className="kicker">Moje najważniejsze transakcje</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Wybrane <span className="italic text-fuchsia-700">realizacje.</span>
          </h2>
          <p className="mt-4 italic font-display text-base text-muted">
            Większość moich klientów pochodzi z polecenia.
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {najwazniejszeTransakcje.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft/60 p-5 text-sm leading-7 text-foreground-soft"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-fuchsia-500 font-mono text-[0.7rem] text-fuchsia-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* OPINIE KLIENTÓW */}
        <section className="mt-20">
          <span className="kicker">Co mówią klienci</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            <span className="italic text-fuchsia-700">Opinie.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {opinieKlientow.map((o) => (
              <article key={o.author} className="premium-panel rounded-3xl p-7">
                <div className="text-fuchsia-500 text-sm tracking-widest">★★★★★</div>
                <p className="mt-4 italic font-display text-base leading-7 text-foreground-soft">
                  „{o.text}"
                </p>
                <p className="mt-6 font-semibold text-foreground">{o.author}</p>
                <p className="text-xs text-muted-soft uppercase tracking-widest">{o.location}</p>
              </article>
            ))}
          </div>
        </section>

        {/* REFERENCJE */}
        <section className="mt-20">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12">
            <span className="kicker">List referencyjny</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              PKP <span className="italic text-fuchsia-700">Energetyka S.A.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              „Pani Sylwia Wróblewska, prowadząca biuro Dom Hunter, należycie wykonała dla nas usługę
              pośrednictwa najmu pomieszczeń biurowych o powierzchni 300 m² w nieruchomości
              położonej w Sopocie. Sprawnie i w krótkim czasie pomogła nam znaleźć właściwych najemców
              oraz oszacować stawkę najmu. Dzięki jej profesjonalizmowi, sumienności i fachowej wiedzy
              usługa pośrednictwa była na najwyższym poziomie, a współpracę uważamy za udaną i godną
              polecenia."
            </p>
            <p className="mt-6 text-sm text-muted-soft">
              Zdzisław Wesołowski, Dyrektor Zakładu Północnego PKP Energetyka S.A.
            </p>
          </div>
        </section>

        {/* LINK DO DOMHUNTER */}
        <section className="mt-12 text-center">
          <a
            href="https://www.domhunter.pl"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-fuchsia-700"
          >
            Strona biura: domhunter.pl <span aria-hidden>→</span>
          </a>
        </section>
      </div>
    </SubpageLayout>
  );
}
