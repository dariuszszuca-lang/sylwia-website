import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LogoText } from "@/components/LogoText";
import { CategoryCircles } from "@/components/CategoryCircles";

const metrics = [
  { value: "17", label: "lat praktyki na rynku nieruchomości" },
  { value: "2 000", label: "agentów w społeczności Nieruchomości Spod Lady" },
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
      "To zamknięta społeczność ponad 2 000 pośredników nieruchomości w Polsce. Wymieniamy się ofertami off-market, zamykamy transakcje wspólnie, dzielimy się wiedzą. Jestem założycielką i liderem tej społeczności. W 2025 roku NSL zostało uhonorowane tytułem Pioniera Etycznego Rynku Nieruchomości Off Market.",
  },
  {
    question: "Czy prowadzę szkolenia dla biur i grup agentów?",
    answer:
      "Tak. Jestem autorką jedynych warsztatów na rynku „Jak pracować, żeby każde zlecenie było rentowne”. Warsztaty prowadzę w grupach do 17 osób, format 4 godziny + sesja Q&A. Szczegóły na podstronie Szkolenia.",
  },
  {
    question: "Jak się ze mną skontaktować?",
    answer:
      "Bezpośrednio telefonem (+48 571 309 209) lub mailem (swroblewska@domhunter.pl). Odpisuję sama, bez asystentów i automatów.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sylwiawroblewska.pl/#person",
      name: "Sylwia Paulina Wróblewska",
      jobTitle: "Pośredniczka nieruchomości, inwestorka, trenerka",
      description:
        "Sylwia Wróblewska, pośredniczka nieruchomości z Trójmiasta, założycielka Nieruchomości Spod Lady (2000 agentów). Laureatka nagrody Pionier Etycznego Rynku Nieruchomości Off Market 2025.",
      image: "https://sylwiawroblewska.pl/images/sylwia-wroblewska.jpg",
      url: "https://sylwiawroblewska.pl",
      email: "mailto:swroblewska@domhunter.pl",
      telephone: "+48571309209",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gdańsk",
        addressRegion: "Pomorskie",
        addressCountry: "PL",
      },
      award: "Pionier Etycznego Rynku Nieruchomości Off Market 2025, Businesswoman Awards",
      worksFor: {
        "@type": "Organization",
        name: "Dom Hunter Sp. z o.o.",
        url: "https://www.domhunter.pl",
      },
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
        "https://www.domhunter.pl",
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
                  Sylwia Wróblewska. 17 lat na rynku nieruchomości, właścicielka butikowego biura{" "}
                  <strong className="font-semibold text-foreground-soft">Dom Hunter Sp. z o.o.</strong>{" "}
                  w Trójmieście, założycielka i lider społeczności{" "}
                  <strong className="font-semibold text-foreground-soft">Nieruchomości Spod Lady</strong>,
                  która zrzesza 2 000 agentów w Polsce.
                </p>

                <blockquote className="mt-8 max-w-xl border-l-2 border-fuchsia-500 pl-5 italic font-display text-lg leading-7 text-foreground-soft sm:text-xl sm:leading-8">
                  „Wierzę, że współpraca szybciej niż rywalizacja pomaga osiągnąć sukces."
                </blockquote>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:swroblewska@domhunter.pl" className="btn-primary">
                    Napisz do mnie
                  </a>
                  <a href="#czym-sie-zajmuje" className="btn-secondary">
                    Czym się zajmuję
                  </a>
                </div>

                {/* Nagroda pełna + logo NSL: dyskretny eksponent pod CTA */}
                <Link
                  href="/nagrody"
                  className="mt-10 flex items-center gap-4 rounded-2xl border border-border bg-background-soft/60 p-4 transition-all hover:border-fuchsia-300 hover:bg-background-soft hover:-translate-y-0.5 sm:max-w-2xl"
                >
                  <Image
                    src="/images/nagrody/nagroda-pelna.png"
                    alt="Pionier Etycznego Rynku Nieruchomości Off Market 2025"
                    width={160}
                    height={160}
                    className="h-auto w-16 sm:w-20 flex-shrink-0 object-contain drop-shadow-[0_8px_16px_rgba(122,82,16,0.15)]"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="kicker text-fuchsia-700">Wyróżnienie 2025</p>
                    <p className="mt-1.5 font-display italic text-sm leading-5 text-foreground-soft sm:text-base">
                      Pionier Etycznego Rynku Nieruchomości Off Market
                    </p>
                    <p className="mt-1 text-[0.65rem] font-mono text-muted-soft tracking-wider uppercase">
                      XXV Businesswoman Awards
                    </p>
                  </div>
                  <Image
                    src="/images/nsl-logo.png"
                    alt="Nieruchomości Spod Lady®"
                    width={140}
                    height={100}
                    className="hidden sm:block h-auto w-20 flex-shrink-0 object-contain"
                  />
                </Link>
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

                  {/* Telefon chip: ukryty na małym mobile, floating od sm+ */}
                  <div className="hidden sm:block absolute -top-4 -left-2 rounded-2xl border border-border-strong bg-background-soft/95 px-4 py-3 shadow-md backdrop-blur-xl sm:-left-6">
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
            </div>

            <CategoryCircles />
          </div>
        </section>

        {/* ========== GŁÓWNE OBSZARY (4 karty z menu) ========== */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <span className="kicker">Główne obszary</span>
              <h2 className="display-tight mt-5 max-w-3xl text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                Cztery filary <span className="italic text-fuchsia-700">mojej pracy.</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  href: "/posrednictwo",
                  label: "Pośrednictwo",
                  num: "01",
                  text: "Butikowe biuro Dom Hunter w Trójmieście. Sprzedaż off-market, indywidualne podejście, większość klientów z polecenia.",
                },
                {
                  href: "/inwestowanie",
                  label: "Inwestowanie",
                  num: "02",
                  text: "Doradztwo dla inwestorów. Wybór mieszkania pod wynajem, flip lub długoterminowy portfel, przeliczenie rentowności przed decyzją.",
                },
                {
                  href: "/szkolenia",
                  label: "Szkolenia",
                  num: "03",
                  text: "Autorskie warsztaty „Jak pracować, żeby każde zlecenie było rentowne”. 3 500 zł brutto, do 17 osób, zwracają się po pierwszej umowie.",
                },
                {
                  href: "/wystapienia",
                  label: "Wystąpienia",
                  num: "04",
                  text: "Konferencje branżowe, panele eksperckie i wystąpienia medialne. Tematy: rynek off-market, etyka zawodu, marka osobista pośrednika.",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="premium-panel champagne-line rounded-3xl p-8 transition-all hover:-translate-y-1 hover:border-fuchsia-300 group"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="kicker">{s.label}</span>
                    <span className="font-display italic text-2xl text-gold-glow text-fuchsia-300 group-hover:text-fuchsia-500">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="display-tight mt-4 text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                    {s.label}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-fuchsia-700">
                    Zobacz więcej <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== INWESTOWANIE (z perspektywy inwestora) ========== */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          {/* Glow tła */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[8%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-300/25 blur-[120px]" />
            <div className="absolute right-[5%] bottom-[10%] h-[24rem] w-[24rem] rounded-full bg-champagne-200/40 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line rounded-[2.5rem] px-8 py-14 sm:px-12 lg:px-16">
              {/* HERO sekcji: portret + tekst */}
              <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
                {/* Portret z floating badge */}
                <div className="relative mx-auto lg:ml-0 w-full max-w-[22rem]">
                  <div className="portrait-frame aspect-[3/4] w-full">
                    <Image
                      src="/images/sylwia/inwestowanie.jpg"
                      alt="Sylwia Wróblewska, inwestor i przedsiębiorca"
                      fill
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 60vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Floating badge: 17 lat */}
                  <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 px-5 py-3 shadow-[0_18px_40px_-8px_rgba(196,48,119,0.5)] rotate-[-3deg]">
                    <p className="text-[0.6rem] font-mono uppercase tracking-[0.18em] text-fuchsia-100">Inwestor</p>
                    <p className="mt-0.5 font-display italic text-2xl text-white leading-none">17 lat</p>
                  </div>
                  {/* Decoracyjny element po lewej górze */}
                  <div className="absolute -top-3 -left-3 hidden sm:flex h-16 w-16 items-center justify-center rounded-full bg-champagne-50 border border-champagne-200 shadow-md rotate-[6deg]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-champagne-400">
                      <path d="M3 18l6-6 4 4 8-10M13 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Tekst */}
                <div>
                  <span className="kicker text-fuchsia-700">Z perspektywy inwestora</span>
                  <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                    Wybór mieszkania to nie tylko{" "}
                    <span className="italic text-fuchsia-700">cena za metr.</span>
                  </h2>
                  <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
                    Sama inwestuję od lat. Wiem co policzyć i co łatwo przeoczyć, kiedy patrzysz tylko
                    na ofertę z portalu.
                  </p>
                  <Link
                    href="/inwestowanie"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-fuchsia-700 transition-colors group"
                  >
                    Zobacz więcej o inwestowaniu{" "}
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              {/* 3 karty z ikonami */}
              <div className="mt-14 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    label: "Pod wynajem",
                    text: "Długoterminowy, krótkoterminowy, instytucjonalny.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d="M3 21V10l9-7 9 7v11M10 21v-7h4v7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    label: "Pod flip",
                    text: "Lokale do remontu, podziału, zmiany funkcji.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d="M3 12a9 9 0 0115-6.7L21 8M21 12a9 9 0 01-15 6.7L3 16M21 3v5h-5M3 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    label: "Pod portfel",
                    text: "Budowa portfela nieruchomości w Trójmieście.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="group relative rounded-2xl border-2 border-border bg-background-soft p-6 transition-all duration-300 hover:border-fuchsia-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_-12px_rgba(196,48,119,0.35)]"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:to-fuchsia-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-[-6deg]">
                      {t.icon}
                    </div>
                    <p className="kicker text-fuchsia-700">{t.label}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground-soft">{t.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-gold-line pt-8">
                <p className="text-sm leading-7 text-muted sm:text-base">
                  Lokalizacja, plan miejscowy, stan prawny, potencjał najmu, koszty utrzymania,
                  perspektywy dzielnicy, otoczenie deweloperskie. Pomagam to wszystko przeliczyć
                  przed decyzją, korzystając z bazy klientów i ofert dostępnych poza oficjalnym
                  obiegiem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== OPINIE ========== */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <span className="kicker">Opinie</span>
              <h2 className="display-tight mt-5 max-w-3xl text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                Co mówią <span className="italic text-fuchsia-700">klienci i kursanci.</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  text: "Bardzo polecam! Nie wierzyłam, że tak szybko można sprzedać mieszkanie z rynku wtórnego w tak trudnym czasie, gdzie inni zawiedli. Tu było inaczej, było szybko, sprawnie i bez obietnic bez pokrycia. W dwa tygodnie miałam akt notarialny w ręku i pieniądze na koncie.",
                  author: "Magda",
                  location: "Opinia z Google",
                },
                {
                  text: "Bardzo polecam współpracę z Dom Hunter Biuro Nieruchomości, a szczególnie z Panią Sylwią. Proces sprzedaży nie był prosty ze względu na trudnego lokatora. Pani Sylwia zdołała jednak pokonać wszelkie trudności i z sukcesem zamknąć transakcję.",
                  author: "Przemysław Klimkowski",
                  location: "Klient Dom Hunter, Trójmiasto",
                },
                {
                  text: "Dziękuję za przeprowadzenie warsztatu na wysokim poziomie merytorycznym. Ogrom przekazanej wiedzy, konkretne przykłady oraz praktyczne podejście sprawiły, że było to niezwykle wartościowe doświadczenie. Prowizja przy podpisaniu umowy pośrednictwa, zrealizowana.",
                  author: "Beata Pietrasińska",
                  location: "Kursantka, Śląsk",
                },
                {
                  text: "Brawo Sylwia i dziękuję za zaproszenie! Jedno z lepszych szkoleń, na jakich byłem, a byłem na wielu. Świetny pomysł z przedstawieniem się wszystkich uczestników na początku, od razu zrobiło się bardziej familijnie. Czysty konkret poparty przykładami z życia. Może to być dla mojego biura game changer.",
                  author: "Konrad Bajerski",
                  location: "Kursant, Trójmiasto",
                },
              ].map((o) => (
                <article key={o.author} className="premium-panel rounded-3xl p-8">
                  <div className="text-fuchsia-500 text-sm tracking-widest">★★★★★</div>
                  <p className="mt-5 italic font-display text-base leading-7 text-foreground-soft sm:text-lg sm:leading-8">
                    „{o.text}”
                  </p>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-semibold text-foreground">{o.author}</p>
                    <p className="text-xs text-muted-soft uppercase tracking-widest mt-1">{o.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="relative px-6 py-20 sm:px-8 lg:px-10 scroll-mt-24">
          {/* Glow tła */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[15%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-200/30 blur-[120px]" />
            <div className="absolute right-[10%] bottom-[15%] h-[20rem] w-[20rem] rounded-full bg-champagne-100/40 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="kicker">FAQ</span>
              <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                Najczęstsze <span className="italic text-fuchsia-700">pytania.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-base leading-7 text-muted">
                Nie znalazłaś odpowiedzi? Napisz na <a href="mailto:swroblewska@domhunter.pl" className="text-foreground underline decoration-fuchsia-400 underline-offset-4 hover:text-fuchsia-700">swroblewska@domhunter.pl</a> albo zadzwoń.
              </p>
            </div>

            <FAQAccordion items={faqItems} />

            {/* Kontakt CTA pod FAQ */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="tel:+48571309209" className="btn-secondary">
                +48 571 309 209
              </a>
              <a href="mailto:swroblewska@domhunter.pl" className="btn-primary">
                Napisz do mnie
              </a>
            </div>
          </div>
        </section>

        {/* ========== NEWSLETTER NSL ========== */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <div>
                <Image
                  src="/images/nsl-logo.png"
                  alt="Logo Nieruchomości Spod Lady"
                  width={200}
                  height={144}
                  className="h-auto w-32 sm:w-40 mb-6 object-contain"
                />
                <span className="kicker">Newsletter NSL</span>
                <h2 className="display-tight mt-5 text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl">
                  Praktyczny update z rynku, raz w tygodniu.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                  Lista mailowa Nieruchomości Spod Lady®. Konkretne case'y, narzędzia, trendy z rynku off-market.
                </p>
              </div>

              <div className="premium-panel champagne-line rounded-3xl p-8 sm:p-10">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* ========== KONTAKT ========== */}
        <section className="relative px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel champagne-line relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-[120px]" />
              </div>

              <div className="relative">
                <span className="kicker">Kontakt</span>
                <h2 className="display mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] font-medium text-foreground sm:text-5xl lg:text-6xl">
                  Napisz albo zadzwoń.
                </h2>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="mailto:swroblewska@domhunter.pl" className="btn-primary">
                    swroblewska@domhunter.pl
                  </a>
                  <a href="tel:+48571309209" className="btn-secondary">
                    +48 571 309 209
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOOTER (compact) ========== */}
        <footer className="relative px-6 pb-8 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel rounded-2xl px-6 py-6 sm:px-8 sm:py-7">
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.7fr_0.9fr]">
                {/* Logo + tagline */}
                <div>
                  <LogoText />
                  <p className="mt-3 max-w-xs text-xs leading-5 text-muted">
                    Pośrednictwo, inwestowanie, szkolenia w Trójmieście i online.
                  </p>
                </div>

                {/* Działalność */}
                <div>
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-gold-mid">Działalność</p>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted">
                    <Link href="/posrednictwo" className="hover:text-fuchsia-700">Pośrednictwo</Link>
                    <Link href="/inwestowanie" className="hover:text-fuchsia-700">Inwestowanie</Link>
                    <Link href="/szkolenia" className="hover:text-fuchsia-700">Szkolenia</Link>
                    <Link href="/wystapienia" className="hover:text-fuchsia-700">Wystąpienia</Link>
                    <Link href="/mentoring" className="hover:text-fuchsia-700">Mentoring</Link>
                  </div>
                </div>

                {/* Marki + inne */}
                <div>
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-gold-mid">Marki</p>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted">
                    <Link href="/nsl" className="hover:text-fuchsia-700">NSL®</Link>
                    <Link href="/biuro" className="hover:text-fuchsia-700">Dom Hunter</Link>
                    <Link href="/nagrody" className="hover:text-fuchsia-700">Nagrody</Link>
                    <Link href="/publikacje" className="hover:text-fuchsia-700">Publikacje</Link>
                    <Link href="/konsultacje" className="hover:text-fuchsia-700">Konsultacje 1:1</Link>
                  </div>
                </div>

                {/* Kontakt */}
                <div>
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-gold-mid">Kontakt</p>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted">
                    <a href="tel:+48571309209" className="font-mono hover:text-fuchsia-700">
                      +48 571 309 209
                    </a>
                    <a href="mailto:swroblewska@domhunter.pl" className="hover:text-fuchsia-700 break-all">
                      swroblewska@domhunter.pl
                    </a>
                    <Link href="/kontakt" className="hover:text-fuchsia-700">Wszystkie kanały →</Link>
                    <div className="mt-1.5 flex gap-2.5 text-muted-soft">
                      <a href="https://www.instagram.com/sylwiawroblewska.pl/" target="_blank" rel="noreferrer" className="hover:text-fuchsia-700" aria-label="Instagram">IG</a>
                      <span>·</span>
                      <a href="https://www.facebook.com/groups/nieruchomoscispodlady" target="_blank" rel="noreferrer" className="hover:text-fuchsia-700" aria-label="Facebook NSL">FB</a>
                      <span>·</span>
                      <a href="https://www.domhunter.pl" target="_blank" rel="noreferrer" className="hover:text-fuchsia-700">DH</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-6 flex flex-col gap-1.5 border-t border-border pt-4 text-[0.7rem] text-muted-soft sm:flex-row sm:items-center sm:justify-between">
                <span>© 2026 Sylwia Wróblewska. Wszelkie prawa zastrzeżone.</span>
                <span className="font-mono">Licencja zawodowa nr 18311 · Pomorskie</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
