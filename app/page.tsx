import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LogoText } from "@/components/LogoText";
import { CategoryCircles } from "@/components/CategoryCircles";
import { AwardBadge } from "@/components/AwardBadge";

const metrics = [
  { value: "15+", label: "lat praktyki na rynku nieruchomości" },
  { value: "1 600+", label: "agentów w społeczności Nieruchomości Spod Lady" },
  { value: "18311", label: "numer licencji zawodowej" },
];

const faqItems = [
  {
    question: "Jak wygląda współpraca ze mną?",
    answer:
      "Każda współpraca zaczyna się od krótkiej rozmowy, w której ustalamy zakres i tempo działania. Pracuję na relację, nie na pojedynczą transakcję.",
  },
  {
    question: "Czy obsługuję całą Polskę, czy tylko Trójmiasto?",
    answer:
      "Pośrednictwo i butikowe biuro Dom Hunter prowadzę przede wszystkim w Trójmieście. Szkolenia, mentoring i wystąpienia robię w całej Polsce, online i stacjonarnie.",
  },
  {
    question: "Czym jest Nieruchomości Spod Lady?",
    answer:
      "To zamknięta społeczność ponad 1 600 pośredników nieruchomości w Polsce. Wymieniamy się ofertami off-market, zamykamy transakcje wspólnie, dzielimy się wiedzą. Jestem założycielką tej społeczności.",
  },
  {
    question: "Czy prowadzę szkolenia dla biur i grup agentów?",
    answer:
      "Tak. Warsztaty autorskie prowadzę w grupach od 8 do 30 osób, formaty zamknięte dla biur i otwarte dla społeczności agentów. Napisz mailem o terminach.",
  },
  {
    question: "Jak się ze mną skontaktować?",
    answer:
      "Bezpośrednio telefonem (+48 571 309 209) lub mailem (sylwia@nieruchomoscispodlady.pl). Odpisuję sama, bez asystentów i automatów.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sylwiawroblewska.pl/#person",
      name: "Sylwia Wróblewska",
      jobTitle: "Pośredniczka nieruchomości, inwestorka, trenerka",
      description:
        "Sylwia Wróblewska, pośredniczka nieruchomości z Trójmiasta, założycielka Nieruchomości Spod Lady. Laureatka nagrody Pionier Etycznego Rynku Nieruchomości Off Market 2025.",
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
      award: "Pionier Etycznego Rynku Nieruchomości Off Market 2025, Businesswoman Awards",
      knowsAbout: [
        "sprzedaż nieruchomości",
        "nieruchomości off-market",
        "inwestycje w nieruchomości",
        "szkolenia dla pośredników",
        "mentoring agentów nieruchomości",
      ],
      sameAs: [
        "https://www.instagram.com/sylwiawroblewska.pl/",
        "https://www.facebook.com/groups/nieruchomoscispodlady",
        "https://nieruchomoscispodlady.pl",
        "https://akademia-ai-nieruchomosci.pl",
      ],
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
        {/* Subtelny ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/20 blur-[140px]" />
          <div className="absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-champagne-100/40 blur-[160px]" />
          <div className="absolute bottom-[-10%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-100/25 blur-[160px]" />
        </div>

        {/* ========== HERO ========== */}
        <section className="relative px-6 pt-12 pb-16 sm:px-8 sm:pt-16 lg:px-10 lg:pt-24 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="reveal">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-background-soft/70 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.2em] text-foreground uppercase backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  Trójmiasto · Polska
                </div>

                <h1 className="display mt-7 text-[2.5rem] leading-[0.95] font-medium text-foreground sm:text-[4rem] sm:leading-[0.92] lg:text-[5.5rem]">
                  Pośrednik.
                  <br />
                  <span className="text-foreground-soft">Inwestor.</span>
                  <br />
                  <span className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-fuchsia-500 bg-clip-text text-transparent">
                    Trener.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  Sylwia Wróblewska. 15 lat na rynku nieruchomości, właścicielka butikowego biura{" "}
                  <strong className="font-semibold text-foreground-soft">Dom Hunter</strong>,
                  założycielka{" "}
                  <strong className="font-semibold text-foreground-soft">Nieruchomości Spod Lady</strong>{" "}
                  , społeczności 1 600 pośredników w Polsce.
                </p>

                <blockquote className="mt-8 max-w-xl border-l-2 border-fuchsia-500 pl-5 italic font-display text-lg leading-7 text-foreground-soft sm:text-xl sm:leading-8">
                  „Wierzę, że współpraca szybciej niż rywalizacja pomaga osiągnąć sukces."
                </blockquote>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#kontakt" className="btn-primary">
                    Napisz do mnie
                  </a>
                  <a href="#czym-sie-zajmuje" className="btn-secondary">
                    Czym się zajmuję
                  </a>
                </div>
              </div>

              {/* Portret + Award Badge */}
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

                  {/* Award badge: floating prawy dolny rog */}
                  <div className="absolute -bottom-6 -right-3 sm:-right-6 max-w-[20rem]">
                    <AwardBadge />
                  </div>

                  <div className="absolute -top-4 -left-2 rounded-2xl border border-border-strong bg-background-soft/95 px-4 py-3 shadow-md backdrop-blur-xl sm:-left-6">
                    <p className="kicker">Telefon</p>
                    <a
                      href="tel:+48571309209"
                      className="mt-1.5 block font-mono text-sm font-medium text-foreground hover:text-fuchsia-700"
                    >
                      +48 571 309 209
                    </a>
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

        {/* ========== KÓŁKA KATEGORII ========== */}
        <section id="czym-sie-zajmuje" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="kicker">Czym się zajmuję</span>
              <h2 className="display-tight mx-auto mt-5 max-w-3xl text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                Osiem obszarów. <span className="italic text-fuchsia-700">Jedna spójna praca.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
                Wszystko, czym zajmuję się zawodowo, łączy ta sama zasada: współpraca, zaufanie, konkretne efekty.
              </p>
            </div>

            <CategoryCircles />
          </div>
        </section>

        {/* ========== POŚREDNICTWO ========== */}
        <section id="posrednictwo" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <span className="kicker">Pośrednictwo</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Sprzedaż <span className="italic text-fuchsia-700">off-market.</span>
                </h2>
              </div>
              <div className="text-base leading-8 text-muted sm:text-lg space-y-4">
                <p>
                  Prowadzę butikowe biuro Dom Hunter w Trójmieście. Mała liczba projektów rocznie, każdy klient
                  dostaje moją głowę i czas, nie zespołu juniorów.
                </p>
                <p>
                  Klienci coraz częściej nie chcą afiszować się ze sprzedażą na portalach. Prywatność i dyskrecja
                  zyskują na wartości. Pracuję tam, gdzie zaufanie i relacja są ważniejsze niż liczba ofert w bazie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== INWESTOWANIE ========== */}
        <section id="inwestowanie" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line rounded-[2.5rem] px-8 py-12 sm:px-12 lg:px-16">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <span className="kicker">Inwestowanie</span>
                  <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                    Pomagam wybrać <span className="italic text-fuchsia-700">właściwą inwestycję.</span>
                  </h2>
                </div>
                <div className="text-base leading-7 text-muted">
                  <p>
                    Współpracuję z inwestorami szukającymi nieruchomości pod wynajem, flipy lub długoterminowy portfel.
                    Wybór mieszkania to nie tylko cena za metr. To lokalizacja, plan miejscowy, stan prawny, potencjał
                    najmu, koszty utrzymania. Pomagam to wszystko przeliczyć przed decyzją.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SZKOLENIA ========== */}
        <section id="szkolenia" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
              <div>
                <span className="kicker">Szkolenia</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Autorskie warsztaty dla <span className="italic text-fuchsia-700">pośredników.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  Warsztaty zamknięte dla biur i otwarte dla społeczności agentów. Pracuję na konkretach z rynku,
                  nie na slajdach. Grupa minimum 8, maksimum 30 osób.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:sylwia@nieruchomoscispodlady.pl?subject=Zapytanie%20o%20warsztat"
                    className="btn-primary"
                  >
                    Zapytaj o termin
                  </a>
                </div>
              </div>
              <div className="premium-panel rounded-3xl p-8">
                <p className="kicker">Tematy szkoleń</p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Sprzedaż off-market w praktyce",
                    "Współpraca między agentami",
                    "Marka osobista pośrednika",
                    "Praca z klientem na wyłączność",
                    "Pozycjonowanie i narracja ceny",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm leading-7 text-foreground-soft">
                      <span className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500" aria-hidden />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WYSTĄPIENIA ========== */}
        <section id="wystapienia" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <span className="kicker">Wystąpienia</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Konferencje, panele, <span className="italic text-fuchsia-700">media.</span>
                </h2>
              </div>
              <div className="text-base leading-8 text-muted sm:text-lg space-y-4">
                <p>
                  Występuję na konferencjach branży nieruchomości, w panelach eksperckich i w mediach.
                  Tematy: rynek off-market, etyka zawodu, budowa społeczności agentów, marka osobista.
                </p>
                <p className="text-sm text-muted-soft">
                  Zaproszenie do wystąpienia? Napisz na{" "}
                  <a href="mailto:sylwia@nieruchomoscispodlady.pl" className="text-foreground hover:text-fuchsia-700">
                    sylwia@nieruchomoscispodlady.pl
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== MENTORING ========== */}
        <section id="mentoring" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel rounded-[2.5rem] px-8 py-12 sm:px-12 lg:px-16">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <span className="kicker">Mentoring</span>
                  <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                    Indywidualny <span className="italic text-fuchsia-700">mentoring</span> dla agentów.
                  </h2>
                </div>
                <div className="text-base leading-7 text-muted">
                  <p>
                    Pracuję 1:1 z agentami, którzy chcą zbudować markę osobistą, ułożyć strategię sprzedaży i wejść
                    w rynek off-market świadomie. Format dopasowuję do potrzeb i etapu kariery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BIURO ========== */}
        <section id="biuro" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <span className="kicker">Biuro nieruchomości</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Dom Hunter <span className="italic text-fuchsia-700">Trójmiasto.</span>
                </h2>
              </div>
              <div className="text-base leading-8 text-muted sm:text-lg space-y-4">
                <p>
                  Butikowe biuro nieruchomości w Trójmieście. Mała liczba projektów rocznie, dyskrecja, praca na
                  relację. Sprzedaż wtórna, pierwotna, działki, komercja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== NAGRODY ========== */}
        <section id="nagrody" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line rounded-[2.5rem] px-8 py-12 sm:px-12 lg:px-16">
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
                <div>
                  <span className="kicker">Nagrody</span>
                  <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                    Pionier Etycznego Rynku Nieruchomości{" "}
                    <span className="italic text-fuchsia-700">Off Market 2025.</span>
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-7 text-muted">
                    Nieruchomości Spod Lady zostały uhonorowane podczas XXV Gali Businesswoman Awards (26.09.2025).
                    Wyróżnienie za wkład w budowanie nowoczesnego, etycznego i opartego na współpracy rynku
                    nieruchomości w Polsce.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-[20rem] rounded-3xl overflow-hidden border border-border-luxe bg-gradient-to-br from-champagne-50 to-champagne-100">
                    <div className="absolute inset-0 flex items-center justify-center text-champagne-400">
                      <svg viewBox="0 0 120 160" className="w-32 h-44" fill="currentColor">
                        <path d="M60 20 L65 35 L80 30 L72 45 L85 55 L70 60 L75 75 L60 70 L45 75 L50 60 L35 55 L48 45 L40 30 L55 35 Z" opacity="0.4" />
                        <rect x="45" y="80" width="30" height="50" rx="2" />
                        <rect x="40" y="130" width="40" height="10" rx="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PUBLIKACJE ========== */}
        <section id="publikacje" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <span className="kicker">Publikacje</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Magazyn <span className="italic text-fuchsia-700">Nieruchomości</span> i media branżowe.
                </h2>
              </div>
              <div className="text-base leading-8 text-muted sm:text-lg space-y-4">
                <p>
                  Komentarze, wywiady i artykuły dla magazynu Nieruchomości oraz innych mediów branżowych.
                  Tematy: rynek off-market, etyka zawodu, marka osobista pośrednika, współpraca agentów.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <span className="kicker">FAQ</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Najczęstsze pytania.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                  Nie znalazłeś odpowiedzi? Napisz albo zadzwoń bezpośrednio.
                </p>
              </div>

              <div className="premium-panel rounded-3xl px-8 py-2 sm:px-10">
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </div>
        </section>

        {/* ========== NEWSLETTER NSL ========== */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <div>
                <span className="kicker">Newsletter NSL</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Praktyczny update z rynku, raz w tygodniu.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                  Lista mailowa Nieruchomości Spod Lady. Konkretne case'y, narzędzia, trendy z rynku off-market.
                </p>
              </div>

              <div className="premium-panel champagne-line rounded-3xl p-8 sm:p-10">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* ========== KONTAKT ========== */}
        <section id="kontakt" className="relative px-6 py-16 sm:px-8 lg:px-10 scroll-mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-[120px]" />
              </div>

              <div className="relative">
                <span className="kicker">Kontakt</span>
                <h2 className="display mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] font-medium text-foreground sm:text-5xl lg:text-6xl">
                  Napisz albo zadzwoń bezpośrednio.
                </h2>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="mailto:sylwia@nieruchomoscispodlady.pl" className="btn-primary">
                    sylwia@nieruchomoscispodlady.pl
                  </a>
                  <a href="tel:+48571309209" className="btn-secondary">
                    +48 571 309 209
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="relative px-6 pb-12 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel rounded-3xl px-7 py-9 sm:px-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
                <div>
                  <LogoText />
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                    Pośrednictwo nieruchomości, inwestowanie, szkolenia i mentoring w Trójmieście i online.
                    Założycielka Nieruchomości Spod Lady. Laureatka nagrody Pioniera Etycznego Rynku 2025.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">Sekcje</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    <a href="#posrednictwo" className="hover:text-fuchsia-700">Pośrednictwo</a>
                    <a href="#inwestowanie" className="hover:text-fuchsia-700">Inwestowanie</a>
                    <a href="#szkolenia" className="hover:text-fuchsia-700">Szkolenia</a>
                    <a href="#wystapienia" className="hover:text-fuchsia-700">Wystąpienia</a>
                    <a href="#mentoring" className="hover:text-fuchsia-700">Mentoring</a>
                    <a href="#biuro" className="hover:text-fuchsia-700">Dom Hunter</a>
                    <a href="#nagrody" className="hover:text-fuchsia-700">Nagrody</a>
                    <a href="#publikacje" className="hover:text-fuchsia-700">Publikacje</a>
                    <Link href="/konsultacje" className="hover:text-fuchsia-700">
                      Konsultacje 1:1
                    </Link>
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
                    <a
                      href="https://www.facebook.com/groups/nieruchomoscispodlady"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-fuchsia-700"
                    >
                      Grupa NSL
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
