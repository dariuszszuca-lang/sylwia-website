import Image from "next/image";
import { BookingWidget } from "@/components/BookingWidget";
import { SiteHeader } from "@/components/SiteHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { NewsletterForm } from "@/components/NewsletterForm";
import { BrandMark } from "@/components/BrandMark";

const metrics = [
  { value: "15+", label: "lat praktyki na rynku nieruchomości" },
  { value: "1 600+", label: "agentów w społeczności Nieruchomości Spod Lady" },
  { value: "18311", label: "numer licencji zawodowej" },
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
    text: "Język spójny z marką klienta. Skraca dystans i buduje zaufanie.",
  },
];

const trainingTopics = [
  "Sprzedaż premium i pozycjonowanie oferty",
  "Współpraca między agentami i rynek off-market",
  "Marka osobista pośrednika",
  "Komunikacja z klientem premium",
];

const faqItems = [
  {
    question: "Dla kogo jest konsultacja 1:1?",
    answer:
      "Dla pośredników, właścicieli biur, osób rozwijających markę osobistą w nieruchomościach oraz klientów, którzy chcą skonsultować strategię sprzedaży lub zakupu.",
  },
  {
    question: "Ile kosztuje konsultacja i jak długo trwa?",
    answer:
      "Jedna konsultacja trwa 60 minut i kosztuje 300 zł. Po wyborze terminu kontakt odbywa się mailowo i kończy potwierdzeniem spotkania.",
  },
  {
    question: "Jakie tematy najczęściej pojawiają się podczas konsultacji?",
    answer:
      "Najczęściej są to: strategia sprzedaży nieruchomości, rentowność współpracy z klientem, oferty off-market, negocjacje, proces obsługi i pozycjonowanie marki agenta.",
  },
  {
    question: "Czy Sylwia prowadzi także szkolenia dla zespołów i wydarzeń branżowych?",
    answer:
      "Tak. Możliwe są szkolenia, warsztaty i wystąpienia dla biur, społeczności agentów i eventów branżowych. Napisz mailem o czym chcesz porozmawiać.",
  },
  {
    question: "Czy konsultacja jest stacjonarnie czy online?",
    answer:
      "Obie formy są możliwe. Online prowadzę przez Google Meet — wystarczy laptop. Stacjonarnie spotykamy się w Trójmieście.",
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
        "Sylwia Wróblewska — pośredniczka nieruchomości z Trójmiasta, założycielka Nieruchomości Spod Lady, twórczyni Akademii AI w Nieruchomościach (z Dariuszem Szucą).",
      image: "https://sylwiawroblewska.pl/images/sylwia-wroblewska.jpg",
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
        "AI w nieruchomościach",
      ],
      sameAs: [
        "https://www.instagram.com/sylwiawroblewska.pl/",
        "https://www.facebook.com/groups/nieruchomoscispodlady",
        "https://nieruchomoscispodlady.pl",
        "https://akademia-ai-nieruchomosci.pl",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sylwiawroblewska.pl/#service",
      name: "Sylwia Wróblewska — konsultacje i szkolenia",
      url: "https://sylwiawroblewska.pl",
      image: "https://sylwiawroblewska.pl/images/sylwia-wroblewska.jpg",
      description:
        "Konsultacje 1:1 i szkolenia dla branży nieruchomości w Trójmieście i online. Założycielka Nieruchomości Spod Lady.",
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
              name: "Konsultacja 1:1 online lub stacjonarna",
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
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/20 blur-[140px]" />
          <div className="absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-champagne-100/40 blur-[160px]" />
          <div className="absolute bottom-[-10%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-100/25 blur-[160px]" />
        </div>

        {/* HERO — Sylwia jako osoba */}
        <section id="sylwia" className="relative px-6 pt-12 pb-16 sm:px-8 sm:pt-16 lg:px-10 lg:pt-24 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="reveal">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-background-soft/70 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.2em] text-foreground uppercase backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  Marka osobista · rynek premium
                </div>

                <h1 className="display mt-7 text-[2.5rem] leading-[0.95] font-medium text-foreground sm:text-[4rem] sm:leading-[0.92] lg:text-[6.25rem]">
                  Sprzedaż.
                  <br />
                  <span className="text-foreground-soft">Strategia.</span>
                  <br />
                  <span className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-champagne-400 bg-clip-text text-transparent">
                    Doświadczenie.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  Sylwia Wróblewska. Pośredniczka nieruchomości, założycielka{" "}
                  <strong className="font-semibold text-foreground-soft">Nieruchomości Spod Lady</strong>,
                  twórczyni Akademii AI w Nieruchomościach. Trójmiasto i online.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#konsultacja" className="btn-primary">
                    Umów konsultację · 300 zł / h
                  </a>
                  <a href="#projekty" className="btn-secondary">
                    Zobacz projekty
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted">
                  <span className="kicker">Aktywna w</span>
                  <span>Trójmiasto</span>
                  <span>·</span>
                  <span>Społeczność NSL</span>
                  <span>·</span>
                  <span>Eventy branżowe</span>
                </div>
              </div>

              {/* Portret */}
              <div className="reveal" style={{ ["--reveal-delay" as string]: "150ms" }}>
                <div className="relative ml-auto max-w-[34rem]">
                  <div className="portrait-frame aspect-[3/4] w-full">
                    <Image
                      src="/images/sylwia-wroblewska.jpg"
                      alt="Sylwia Wróblewska"
                      fill
                      priority
                      sizes="(min-width: 1024px) 34rem, (min-width: 640px) 60vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border-strong bg-background-soft/95 px-5 py-4 shadow-md backdrop-blur-xl sm:-left-6">
                    <p className="kicker">Kontakt bezpośredni</p>
                    <a
                      href="tel:+48571309209"
                      className="mt-2 block font-mono text-sm font-medium text-foreground hover:text-fuchsia-700"
                    >
                      +48 571 309 209
                    </a>
                  </div>

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

        {/* O MARCE / STORY */}
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
                Pracuje na relację, nie na pojedynczą prowizję. Każda transakcja ma
                być dobra dla obu stron.
              </p>
            </div>

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

        {/* KONSULTACJA — booking widget */}
        <section id="konsultacja" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <BookingWidget />
          </div>
        </section>

        {/* PROJEKTY ⭐ MOCNY WOW */}
        <section id="projekty" className="relative px-6 py-24 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="kicker">Projekty</span>
                <h2 className="display-tight mt-5 max-w-3xl text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                  Co Sylwia buduje poza pojedynczą sprzedażą.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                  Społeczność, agencja, edukacja. Trzy filary z których każdy żyje własnym
                  rytmem, ale dzieli ten sam standard pracy z klientem premium.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <ProjectsGrid />
            </div>
          </div>
        </section>

        {/* SZKOLENIA / WYSTĄPIENIA */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line rounded-[2.5rem] px-8 py-12 sm:px-12 lg:px-16">
              <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
                <div>
                  <span className="kicker">Szkolenia i wystąpienia</span>
                  <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                    Zaproś Sylwię na <span className="italic text-fuchsia-700">event branżowy</span>{" "}
                    albo do swojego biura.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
                    Warsztaty zamknięte dla biur i społeczności agentów, wystąpienia eventowe,
                    dłuższy mentoring dla osób budujących markę osobistą. Zakres i format
                    ustalamy po krótkiej rozmowie.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:sylwia@nieruchomoscispodlady.pl?subject=Szkolenie%20%2F%20wyst%C4%85pienie%20%E2%80%94%20zapytanie"
                      className="btn-primary"
                    >
                      Napisz o szkolenie
                    </a>
                    <a href="tel:+48571309209" className="btn-secondary">
                      +48 571 309 209
                    </a>
                  </div>
                </div>

                <div>
                  <p className="kicker mb-4">Tematy</p>
                  <ul className="space-y-3">
                    {trainingTopics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-sm leading-7 text-foreground-soft"
                      >
                        <span
                          className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500"
                          aria-hidden
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
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

        {/* NEWSLETTER NSL */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <div>
                <span className="kicker">Newsletter NSL</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Praktyczny update z rynku, raz w tygodniu.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                  Lista mailowa Nieruchomości Spod Lady. Konkretne case'y, narzędzia,
                  trendy z rynku off-market. Bez banałów.
                </p>
              </div>

              <div className="premium-panel champagne-line rounded-3xl p-8 sm:p-10">
                <NewsletterForm />
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
                  <div className="flex items-center gap-3">
                    <BrandMark size={40} />
                    <span className="brand-name inline-block">Sylwia Wróblewska</span>
                  </div>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                    Sprzedaż nieruchomości premium, konsultacje strategiczne i
                    szkolenia dla branży nieruchomości w Trójmieście i online.
                    Założycielka Nieruchomości Spod Lady.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">Nawigacja</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    <a href="#sylwia" className="hover:text-fuchsia-700">Sylwia</a>
                    <a href="#konsultacja" className="hover:text-fuchsia-700">Konsultacja</a>
                    <a href="#projekty" className="hover:text-fuchsia-700">Projekty</a>
                    <a href="#faq" className="hover:text-fuchsia-700">FAQ</a>
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
