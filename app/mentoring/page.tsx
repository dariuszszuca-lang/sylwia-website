import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Mentoring · Sylwia Wróblewska",
  description:
    "Indywidualny mentoring 1:1 dla pośredników nieruchomości budujących markę osobistą i wchodzących na rynek off-market. Trójmiasto i online.",
};

const obszary = [
  {
    title: "Marka osobista pośrednika",
    text: "Pozycjonowanie, narracja, komunikacja w social media, materiały i język marki. Ustawiamy fundament, który pracuje na Ciebie latami.",
  },
  {
    title: "Wejście na rynek off-market",
    text: "Jak zbudować zaufanie, znaleźć pierwszych klientów na wyłączność, pracować na umowach na wyłączność, korzystać z społeczności.",
  },
  {
    title: "Strategia sprzedaży",
    text: "Plan rocznego portfela ofert, źródła leadów, proces obsługi klienta od pozyskania do aktu notarialnego.",
  },
  {
    title: "Rentowność pracy",
    text: "Jak ustawić ceny, pobierać wynagrodzenie z chwilą podpisania umowy, eliminować zlecenia, które nie mają szans.",
  },
];

export default function MentoringPage() {
  return (
    <SubpageLayout
      kicker="Mentoring"
      title={
        <>
          Indywidualny <span className="italic text-fuchsia-700">mentoring</span> dla agentów.
        </>
      }
      intro="Pracuję 1:1 z pośrednikami, którzy chcą zbudować markę osobistą, ułożyć strategię sprzedaży i wejść w rynek off-market świadomie. Format dopasowuję do potrzeb i etapu kariery."
    >
      <div className="mx-auto max-w-5xl">
        <section className="mt-8">
          <span className="kicker">Obszary mentoringu</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Cztery rzeczy, nad którymi <span className="italic text-fuchsia-700">pracujemy.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {obszary.map((o) => (
              <article key={o.title} className="premium-panel rounded-3xl p-7">
                <h3 className="text-base font-semibold text-foreground">{o.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{o.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="premium-panel champagne-line rounded-[2rem] p-8 sm:p-12">
            <span className="kicker">Jak to wygląda</span>
            <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
              Praca na <span className="italic text-fuchsia-700">konkretach.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Każda sesja kończy się ustaleniami i jasnym planem działania. Pracuję na Twoich realnych
              ofertach, klientach i sytuacjach. Bez teorii. Format ustalamy na pierwszej rozmowie,
              w zależności od tego, na czym Ci najbardziej zależy.
            </p>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}
