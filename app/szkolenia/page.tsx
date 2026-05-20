import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Szkolenia · Sylwia Wróblewska",
  description:
    "Autorskie warsztaty dla pośredników nieruchomości. „Jak pracować, żeby każde zlecenie było rentowne”. Do 17 osób. Warsztaty zwracają się po pierwszej podpisanej umowie.",
};

const opinie = [
  {
    text: "Dziękuję za przeprowadzenie warsztatu na wysokim poziomie merytorycznym. Ogrom przekazanej wiedzy, konkretne przykłady oraz praktyczne podejście sprawiły, że było to niezwykle wartościowe doświadczenie. Prowizja przy podpisaniu umowy pośrednictwa, zrealizowana.",
    author: "Beata Pietrasińska",
    location: "Śląsk",
  },
  {
    text: "Brawo Sylwia i dziękuję za zaproszenie! Jedno z lepszych szkoleń, na jakich byłem, a byłem na wielu. Świetny pomysł z przedstawieniem się wszystkich uczestników na początku, od razu zrobiło się bardziej familijnie. A potem czysty konkret poparty przykładami z życia. Naprawdę wierzę, że może to być dla mojego biura game changer. Genialne propozycje na zapanowanie nad stale rosnącymi kosztami. Wielkie dzięki raz jeszcze i gratuluję znakomitego występu!",
    author: "Konrad Bajerski",
    location: "Trójmiasto",
  },
];

export default function SzkoleniaPage() {
  return (
    <SubpageLayout
      kicker="Szkolenia"
      title={
        <>
          Jak pracować, żeby każde zlecenie było{" "}
          <span className="italic text-fuchsia-700">rentowne.</span>
        </>
      }
      intro="Jestem autorką jedynych warsztatów na rynku, na których uczę jak pobierać wynagrodzenie z chwilą podpisania umowy pośrednictwa. Warsztaty zwracają się po pierwszej podpisanej umowie."
    >
      <div className="mx-auto max-w-5xl">
        {/* HERO Z CYTATEM WARSZTATU */}
        <section className="mt-4">
          <blockquote className="border-l-2 border-fuchsia-500 pl-6 italic font-display text-xl leading-8 text-foreground-soft sm:text-2xl">
            „Jak pracować, żeby każde zlecenie było rentowne. Jak pobierać wynagrodzenie z chwilą
            podpisania umowy pośrednictwa sprzedaży.”
          </blockquote>
        </section>

        {/* OPINIE */}
        <section className="mt-16">
          <span className="kicker">Co mówią kursanci</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Opinie po <span className="italic text-fuchsia-700">warsztatach.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {opinie.map((o) => (
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
      </div>
    </SubpageLayout>
  );
}
