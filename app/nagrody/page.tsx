import Image from "next/image";
import { SubpageLayout } from "@/components/SubpageLayout";

export const metadata = {
  title: "Nagrody · Sylwia Wróblewska",
  description:
    "Pionier Etycznego Rynku Nieruchomości Off Market 2025, wyróżnienie od Businesswoman & Life. Nieruchomości Spod Lady uhonorowane za wkład w nowoczesny, etyczny rynek.",
};

const kryteriaKapituly = [
  "Wpływ na społeczeństwo",
  "Pozytywne rekomendacje klientów",
  "Innowacyjność marki",
  "Jakość świadczonych usług",
  "Wartości i idee firmy",
];

export default function NagrodyPage() {
  return (
    <SubpageLayout
      kicker="Nagrody"
      title={
        <>
          Pionier Etycznego Rynku Nieruchomości{" "}
          <span className="italic text-fuchsia-700">Off Market 2025.</span>
        </>
      }
      intro="Nieruchomości Spod Lady zostały uhonorowane przez Businesswoman & Life w kategorii Pionier Etycznego Rynku Nieruchomości Off Market 2025. Odebrałam go w imieniu wszystkich agentów NSL, bo takie wyróżnienia nie należą do jednej osoby."
    >
      <div className="mx-auto max-w-5xl">
        {/* ZDJĘCIA STATUETKI + ODZNAKI */}
        <section className="mt-4">
          <div className="premium-panel champagne-line rounded-[2.5rem] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/nagrody/nagroda-pelna.png"
                  alt="Pionier Etycznego Rynku Nieruchomości Off Market 2025 — statuetka i odznaka"
                  width={600}
                  height={600}
                  className="h-auto w-full max-w-[34rem] object-contain drop-shadow-[0_30px_50px_rgba(122,82,16,0.18)]"
                />
              </div>
              <div>
                <p className="kicker">Data</p>
                <p className="mt-2 font-display text-2xl text-foreground">26 września 2025</p>
                <p className="mt-1 text-sm text-muted-soft">
                  XXV Gala Polish Businesswomen Awards
                </p>
                <p className="text-sm text-muted-soft">Hotel Regent Warsaw</p>
              </div>
            </div>
          </div>
        </section>

        {/* CYTAT Z UZASADNIENIA KAPITUŁY */}
        <section className="mt-16">
          <span className="kicker">Z uzasadnienia kapituły</span>
          <blockquote className="mt-5 border-l-2 border-fuchsia-500 pl-6 italic font-display text-xl leading-8 text-foreground-soft sm:text-2xl">
            „W uznaniu za wyjątkowy wkład w budowanie nowoczesnego, etycznego i opartego na
            współpracy rynku nieruchomości w Polsce. Wspólnota, którą Pani współtworzy, jest dowodem
            na to, że współpraca, zaufanie i dzielenie się wiedzą mogą tworzyć silną, skuteczną
            i szlachetną przestrzeń zawodową."
          </blockquote>
        </section>

        {/* CO TO OZNACZA */}
        <section className="mt-16">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <span className="kicker">Co to oznacza</span>
              <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
                Nagroda nie jest <span className="italic text-fuchsia-700">o mnie.</span>
              </h2>
            </div>
            <div className="text-base leading-8 text-muted sm:text-lg space-y-4">
              <p>
                To wyróżnienie dla całej społeczności Nieruchomości Spod Lady. Dla 2 000 pośredników,
                którzy każdego dnia pokazują, że agent nieruchomości to przewodnik, zaufany partner,
                nie zbędne ogniwo.
              </p>
              <p>
                Dzięki współpracy, zaufaniu i dzieleniu się wiedzą udowadniamy, że rynek nieruchomości
                może być etyczny, nowoczesny i skuteczny.
              </p>
            </div>
          </div>
        </section>

        {/* KRYTERIA KAPITUŁY */}
        <section className="mt-16">
          <span className="kicker">Kryteria kapituły</span>
          <h2 className="display-tight mt-5 text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl">
            Czynniki decydujące o <span className="italic text-fuchsia-700">nominacji.</span>
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {kryteriaKapituly.map((k) => (
              <li
                key={k}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background-soft/60 p-5 text-sm leading-7 text-foreground-soft"
              >
                <span className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500" aria-hidden />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SubpageLayout>
  );
}
