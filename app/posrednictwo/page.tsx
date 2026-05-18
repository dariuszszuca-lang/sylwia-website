import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Pośrednictwo · Sylwia Wróblewska",
  description:
    "Pośrednictwo w sprzedaży nieruchomości, butikowe biuro Dom Hunter w Trójmieście. 17 lat praktyki, indywidualne podejście, większość klientów z polecenia.",
};

const jakMogePomoc = [
  {
    title: "Strategia cenowa",
    text: "Przygotuję strategię cenową dla Twojej nieruchomości i zasugeruję optymalną cenę. Dzięki współpracy z fachowcami oraz korzystaniu z nowoczesnych narzędzi wyceny, nie będzie ona ani przeszacowana, ani zaniżona.",
  },
  {
    title: "Dostęp do społeczności NSL",
    text: "Dzięki współpracy w ramach Nieruchomości Spod Lady, Twoja oferta trafi celnie, dokładnie do poszukujących takiej nieruchomości klientów. Skraca to czas sprzedaży bez zaniżania ceny.",
  },
  {
    title: "Spójna strategia marketingowa",
    text: "Wspólnie stworzymy spójną strategię, wykorzystując różne kanały dystrybucji i docierania do klienta. Połączymy działania off-market oraz w mediach społecznościowych z tradycyjną strategią marketingową na portalach.",
  },
  {
    title: "Profesjonalna oprawa",
    text: "Przygotujemy niezbędną oprawę Twojej nieruchomości: rzuty, spacery wirtualne, filmy i zdjęcia w zależności od potrzeb. Zorganizujemy dni otwarte dla klientów i pośredników.",
  },
];

const zakresUslug = [
  "Weryfikacja dokumentów",
  "Wycena nieruchomości",
  "Przygotowanie dni otwartych i odpowiednia ekspozycja nieruchomości",
  "Przygotowanie portfolio oferty dla klientów",
  "Profesjonalna sesja zdjęciowa, filmy reklamowe, rolki na social media",
  "Negocjacje, opieka nad całym procesem sprzedaży",
];

const ostatnieTransakcje = [
  "Dom w Baninie, 5 pokoi, 520 m² z działką",
  "Willa w Gdańsku Osowa, 350 m² dom, 1000 m² działka",
  "Działka budowlana 1500 m², Kolbudy",
  "Mały skomercjalizowany Park Handlowy, 250 m², trzy lokale, Warszawa",
  "Wynajem powierzchni biurowej, Gdańsk Rębiechowo, 300 m²",
  "Apartament w Sopocie, 100 m², sprzedaż bez publikacji",
  "Wynajem apartamentu Gdańsk River View",
  "Sprzedaż apartamentu inwestycyjnego Gdańsk Stare Miasto",
];

export default function PosrednictwoPage() {
  return (
    <SubpageLayout
      kicker="Pośrednictwo"
      title={
        <>
          Sprzedaż <span className="italic text-fuchsia-700">off-market.</span>
        </>
      }
      intro="Aktywny pośrednik nieruchomości, staż 17 lat. Do każdego zlecenia podchodzę indywidualnie i nieszablonowo, z uwzględnieniem potrzeb i oczekiwań klientów. Pracuję zespołowo, otaczając się zaangażowanymi i świadomymi pośrednikami."
      image={{ src: "/images/sylwia/klucze.jpg", alt: "Sylwia Wróblewska z kluczami do nieruchomości" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* JAK MOGĘ POMÓC */}
        <section className="mt-8">
          <span className="kicker">Jak mogę pomóc</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Cztery filary <span className="italic text-fuchsia-700">mojej pracy.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {jakMogePomoc.map((item) => (
              <article key={item.title} className="premium-panel rounded-3xl p-7">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ZAKRES USŁUG */}
        <section className="mt-20">
          <span className="kicker">Zakres usług</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Co konkretnie <span className="italic text-fuchsia-700">robię.</span>
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {zakresUslug.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft/60 p-5 text-sm leading-7 text-foreground-soft"
              >
                <span className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* OSTATNIE TRANSAKCJE */}
        <section className="mt-20">
          <span className="kicker">Moje ostatnie transakcje</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Wybrane <span className="italic text-fuchsia-700">realizacje.</span>
          </h2>
          <p className="mt-4 italic font-display text-base text-muted">
            Większość moich klientów pochodzi z polecenia.
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {ostatnieTransakcje.map((item, i) => (
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
      </div>
    </SubpageLayout>
  );
}
