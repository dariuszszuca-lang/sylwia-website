import Image from "next/image";
import { BookingWidget } from "@/components/BookingWidget";
import { SiteHeader } from "@/components/SiteHeader";
import { FAQAccordion } from "@/components/FAQAccordion";

const metrics = [
  { value: "15+", label: "lat praktyki na rynku nieruchomości" },
  { value: "1 600+", label: "agentów w społeczności Nieruchomości Spod Lady" },
  { value: "18311", label: "numer licencji zawodowej" },
];

const offers = [
  {
    index: "01",
    badge: "Sprzedaż",
    title: "Sprzedaż nieruchomości premium",
    text: "Prowadzenie sprzedaży z naciskiem na pozycjonowanie oferty, selekcję kupujących, narrację ceny i wysoki standard komunikacji.",
    points: ["Pozycjonowanie oferty", "Selekcja kupujących", "Narracja ceny", "Off-market"],
  },
  {
    index: "02",
    badge: "Konsultacje",
    title: "Konsultacje strategiczne 1:1",
    text: "Godzina konkretu dla pośredników, właścicieli biur i osób, które chcą poukładać ofertę, sprzedaż, markę osobistą lub proces obsługi klienta.",
    points: ["Strategia sprzedaży", "Marka osobista", "Proces współpracy", "300 zł / 60 min"],
    featured: true,
  },
  {
    index: "03",
    badge: "Szkolenia",
    title: "Szkolenia i wystąpienia branżowe",
    text: "Warsztaty o sprzedaży, współpracy między agentami, rynku off-market i budowaniu przewagi przez zaufanie, nie przez hałas.",
    points: ["Warsztaty dla biur", "Wystąpienia eventowe", "Mentoring zespołów"],
  },
];

const differentiators = [
  {
    title: "Butik, nie korporacja",
    text: "Mała liczba projektów rocznie. Każdy klient dostaje moją głowę i czas, nie zespołu juniorów.",
  },
  {
    title: "Doświadczenie praktyka",
    text: "15+ lat sprzedaży nieruchomości w Trójmieście. Konkrety z rynku, nie wnioski z prezentacji.",
  },
  {
    title: "Pozycja w branży",
    text: "Założycielka Nieruchomości Spod Lady — społeczności 1 600+ agentów rynku off-market.",
  },
  {
    title: "Komunikacja premium",
    text: "Język spójny z marką klienta. Skraca dystans do decyzji i buduje zaufanie po jednej rozmowie.",
  },
];

const process = [
  {
    step: "01",
    name: "Diagnoza",
    text: "Krótka analiza celu, sytuacji i miejsca, w którym jesteś dziś. Bez ogólników, bez ankiet.",
  },
  {
    step: "02",
    name: "Strategia",
    text: "Ustalenie kierunku: sprzedaż, pozycjonowanie oferty, współpraca między agentami lub marka osobista.",
  },
  {
    step: "03",
    name: "Decyzja",
    text: "Konkretny plan działań, priorytety i ruchy, które mają sens biznesowo i są wykonalne w Twojej rzeczywistości.",
  },
];

const faqItems = [
  {
    question: "Dla kogo jest konsultacja 1:1?",
    answer:
      "Dla pośredników, właścicieli biur, osób rozwijających markę osobistą w nieruchomościach oraz klientów, którzy chcą skonsultować strategię sprzedaży lub zakupu. Konsultacja ma sens, gdy masz konkretną sytuację i decyzję do podjęcia, a nie szukasz ogólnej wiedzy.",
  },
  {
    question: "Ile kosztuje konsultacja i jak długo trwa?",
    answer:
      "Jedna konsultacja trwa 60 minut i kosztuje 300 zł. Po wybraniu terminu w kalendarzu otrzymasz potwierdzenie mailowe oraz link do spotkania (Google Meet) lub adres do spotkania stacjonarnego w Trójmieście.",
  },
  {
    question: "Jakie tematy najczęściej pojawiają się podczas konsultacji?",
    answer:
      "Najczęściej są to: strategia sprzedaży konkretnej nieruchomości, rentowność współpracy z klientem, pozyskiwanie ofert off-market, negocjacje z kupującym, proces obsługi i pozycjonowanie marki agenta na rynku premium.",
  },
  {
    question: "Czy prowadzisz szkolenia dla zespołów i wydarzeń branżowych?",
    answer:
      "Tak. Możliwe są szkolenia dla biur i społeczności agentów, wystąpienia eventowe oraz dłuższy mentoring dla osób budujących markę osobistą. Zakres i format ustalamy po krótkiej rozmowie.",
  },
  {
    question: "Czy konsultacja jest stacjonarnie czy online?",
    answer:
      "Obie formy są możliwe. Online prowadzę przez Google Meet — wystarczy laptop. Stacjonarnie spotykamy się w Trójmieście, miejsce ustalamy indywidualnie.",
  },
  {
    question: "Co dzieje się po konsultacji?",
    answer:
      "Otrzymujesz krótkie podsumowanie najważniejszych ustaleń mailowo. Jeśli chcesz pracować dalej, możemy umówić kolejne spotkanie lub przejść do współpracy projektowej.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sylwiawroblewska.pl/#person",
      name: "Sylwia Wróblewska",
      jobTitle: "Pośredniczka nieruchomości, konsultantka i trenerka branży nieruchomości",
      description:
        "Sylwia Wróblewska to pośredniczka nieruchomości z Trójmiasta, założycielka Nieruchomości Spod Lady i praktyczka sprzedaży off-market.",
      image: "https://sylwiawroblewska.pl/images/sylwia-wroblewska.png",
      url: "https://sylwiawroblewska.pl",
      email: "mailto:sylwia@nieruchomoscispodlady.pl",
      telephone: "+48571309209",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gdańsk",
        addressRegion: "Pomorskie",
        addressCountry: "PL",
      },
      knowsAbout: [
        "sprzedaż nieruchomości",
        "nieruchomości off-market",
        "konsultacje dla agentów nieruchomości",
        "negocjacje",
        "marka osobista pośrednika",
      ],
      sameAs: [
        "https://www.instagram.com/sylwiawroblewska.pl/",
        "https://www.facebook.com/groups/nieruchomoscispodlady",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sylwiawroblewska.pl/#service",
      name: "Sylwia Wróblewska",
      url: "https://sylwiawroblewska.pl",
      image: "https://sylwiawroblewska.pl/images/sylwia-wroblewska.png",
      description:
        "Butikowa sprzedaż nieruchomości, konsultacje i szkolenia dla branży nieruchomości w Trójmieście i online.",
      areaServed: ["Trójmiasto", "Polska"],
      priceRange: "300 PLN",
      founder: { "@id": "https://sylwiawroblewska.pl/#person" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Oferta Sylwii Wróblewskiej",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Konsultacja 1:1 online",
              description:
                "Godzinna konsultacja strategiczna dla pośredników i klientów rynku nieruchomości.",
            },
            price: "300",
            priceCurrency: "PLN",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://sylwiawroblewska.pl/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main id="top" className="relative overflow-hidden pt-2">
        {/* Subtle ambient glow — kremowo + fuksja punktowo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/20 blur-[140px]" />
          <div className="absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-champagne-100/40 blur-[160px]" />
          <div className="absolute bottom-[-10%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-100/25 blur-[160px]" />
        </div>

        {/* HERO */}
        <section className="relative px-6 pt-12 pb-16 sm:px-8 sm:pt-16 lg:px-10 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="reveal">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-background-soft/70 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.2em] text-foreground uppercase backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  Marka osobista · rynek premium
                </div>

                <h1 className="display mt-7 text-[3.5rem] leading-[0.92] font-medium text-foreground sm:text-[4.75rem] lg:text-[6.25rem]">
                  Sprzedaż.
                  <br />
                  <span className="text-foreground-soft">Strategia.</span>
                  <br />
                  <span className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-champagne-400 bg-clip-text text-transparent">
                    Reputacja.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  Sylwia Wróblewska prowadzi sprzedaż nieruchomości premium,
                  konsultacje 1:1 i szkolenia dla osób, które chcą działać
                  precyzyjnie, spokojnie i skutecznie — w Trójmieście i online.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#konsultacja" className="btn-primary">
                    Umów konsultację · 300 zł / h
                  </a>
                  <a href="#oferta" className="btn-secondary">
                    Poznaj ofertę
                  </a>
                </div>

                {/* Hairline trust */}
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted">
                  <span className="kicker">Zaufali</span>
                  <span>Społeczność NSL</span>
                  <span>·</span>
                  <span>Klienci premium Trójmiasto</span>
                  <span>·</span>
                  <span>Eventy branżowe</span>
                </div>
              </div>

              {/* Portret */}
              <div className="reveal" style={{ ["--reveal-delay" as string]: "150ms" }}>
                <div className="relative ml-auto max-w-[34rem]">
                  <div className="portrait-frame aspect-[4/5] w-full">
                    <Image
                      src="/images/sylwia-wroblewska.png"
                      alt="Sylwia Wróblewska"
                      fill
                      priority
                      sizes="(min-width: 1024px) 34rem, (min-width: 640px) 60vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Floating chip — kontakt */}
                  <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border-strong bg-background-soft/95 px-5 py-4 shadow-md backdrop-blur-xl sm:-left-6">
                    <p className="kicker">Kontakt bezpośredni</p>
                    <a
                      href="tel:+48571309209"
                      className="mt-2 block font-mono text-sm font-medium text-foreground hover:text-fuchsia-700"
                    >
                      +48 571 309 209
                    </a>
                  </div>

                  {/* Floating chip — lokalizacja */}
                  <div className="absolute -top-4 -right-2 rounded-2xl border border-border-luxe bg-champagne-50/80 px-5 py-3 shadow-soft backdrop-blur-xl sm:-right-6">
                    <p className="text-xs font-semibold text-champagne-400">Trójmiasto</p>
                    <p className="text-xs text-muted">+ online (Polska)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metryki */}
            <div className="mt-20 grid gap-4 md:grid-cols-3">
              {metrics.map((item, i) => (
                <div
                  key={item.label}
                  className="premium-panel champagne-line rounded-3xl p-7"
                  style={{ ["--reveal-delay" as string]: `${300 + i * 100}ms` }}
                >
                  <div className="display text-5xl font-medium text-foreground tabular-nums sm:text-6xl">
                    {item.value}
                  </div>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O MARCE */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
              <div>
                <span className="kicker">O marce</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                  Doświadczenie, dyskrecja i wysoki standard współpracy.
                </h2>
              </div>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Sylwia od ponad 15 lat pracuje na rynku nieruchomości i jest
                założycielką Nieruchomości Spod Lady. Łączy dyskrecję, strategiczne
                podejście do sprzedaży i wysokie standardy pracy z klientem premium.
                Jej praca to nie sprintowa konwersja, lecz długi horyzont relacji,
                w której obie strony robią dobry biznes.
              </p>
            </div>

            {/* Bento z wyróżnikami */}
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="premium-panel rounded-3xl p-7"
                >
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="kicker">Oferta</span>
                <h2 className="display-tight mt-5 max-w-3xl text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                  Trzy formaty współpracy, jeden standard pracy.
                </h2>
              </div>
              <a
                href="#konsultacja"
                className="text-sm font-medium text-fuchsia-700 underline-offset-4 hover:underline"
              >
                Zacznij od konsultacji →
              </a>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className={[
                    "premium-panel relative rounded-3xl p-8",
                    offer.featured
                      ? "border-fuchsia-200 lg:scale-[1.02] lg:shadow-glow"
                      : "",
                  ].join(" ")}
                >
                  {offer.featured && (
                    <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-300 bg-fuchsia-50 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-fuchsia-700 uppercase">
                      Najczęściej wybierane
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-fuchsia-700">
                      {offer.index}
                    </span>
                    <span className="kicker !text-fuchsia-700">{offer.badge}</span>
                  </div>

                  <h3 className="display mt-6 text-2xl leading-[1.15] font-medium text-foreground sm:text-[1.625rem]">
                    {offer.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">{offer.text}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {offer.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-border bg-background-soft/70 px-3 py-1 text-xs text-foreground-soft"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>

                  {offer.featured && (
                    <a
                      href="#konsultacja"
                      className="btn-primary mt-7 !w-full !justify-center"
                    >
                      Wybierz termin
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section id="proces" className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <span className="kicker">Proces</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Trzy kroki, zero ankiet, decyzja do podjęcia.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                  Każda współpraca zaczyna się od krótkiej rozmowy. Bez prezentacji
                  na 40 slajdów, bez ankiet na 12 stron. Spotykamy się, ustalamy
                  cel, wychodzimy z konkretnym planem.
                </p>
              </div>

              <ol className="relative space-y-4 border-l border-border pl-8">
                {process.map((item) => (
                  <li
                    key={item.step}
                    className="premium-panel relative rounded-2xl p-6"
                  >
                    <div className="absolute -left-[2.55rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-fuchsia-200 bg-background-soft font-mono text-[0.7rem] font-medium text-fuchsia-700">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* KONSULTACJA — booking widget */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <BookingWidget />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <span className="kicker">FAQ</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Najczęstsze pytania przed pierwszą rozmową.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                  Nie znalazłeś odpowiedzi? Napisz albo zadzwoń bezpośrednio.
                </p>
                <div className="mt-6 flex flex-col gap-2 text-sm">
                  <a
                    href="mailto:sylwia@nieruchomoscispodlady.pl"
                    className="text-foreground hover:text-fuchsia-700"
                  >
                    sylwia@nieruchomoscispodlady.pl
                  </a>
                  <a
                    href="tel:+48571309209"
                    className="font-mono text-muted hover:text-fuchsia-700"
                  >
                    +48 571 309 209
                  </a>
                </div>
              </div>

              <div className="premium-panel rounded-3xl px-8 py-2 sm:px-10">
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-[120px]" />
              </div>

              <div className="relative">
                <span className="kicker">Kontakt</span>
                <h2 className="display mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] font-medium text-foreground sm:text-5xl lg:text-6xl">
                  Porozmawiajmy o sprzedaży, strategii albo współpracy.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted">
                  Jeśli zależy Ci na sprzedaży, strategii lub konsultacji prowadzonej
                  na wysokim poziomie — wybierz termin albo napisz.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#konsultacja" className="btn-primary">
                    Umów konsultację · 300 zł / h
                  </a>
                  <a
                    href="mailto:sylwia@nieruchomoscispodlady.pl"
                    className="btn-secondary"
                  >
                    Napisz e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative px-6 pb-12 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel rounded-3xl px-7 py-9 sm:px-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
                <div>
                  <p className="kicker">Sylwia Wróblewska</p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    Sprzedaż nieruchomości premium, konsultacje strategiczne i
                    szkolenia dla branży nieruchomości w Trójmieście i online.
                    Założycielka Nieruchomości Spod Lady.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">Nawigacja</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    <a href="#oferta" className="hover:text-fuchsia-700">
                      Oferta
                    </a>
                    <a href="#proces" className="hover:text-fuchsia-700">
                      Proces
                    </a>
                    <a href="#konsultacja" className="hover:text-fuchsia-700">
                      Konsultacja
                    </a>
                    <a href="#faq" className="hover:text-fuchsia-700">
                      FAQ
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">Kontakt</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    <a
                      href="tel:+48571309209"
                      className="font-mono hover:text-fuchsia-700"
                    >
                      +48 571 309 209
                    </a>
                    <a
                      href="mailto:sylwia@nieruchomoscispodlady.pl"
                      className="hover:text-fuchsia-700"
                    >
                      sylwia@nieruchomoscispodlady.pl
                    </a>
                    <a
                      href="https://www.instagram.com/sylwiawroblewska.pl/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-fuchsia-700"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-soft sm:flex-row sm:items-center sm:justify-between">
                <span>© 2026 Sylwia Wróblewska. Wszelkie prawa zastrzeżone.</span>
                <span className="font-mono">Licencja zawodowa nr 18311</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
