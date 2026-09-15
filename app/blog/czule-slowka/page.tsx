import { SubpageLayout } from "@/components/SubpageLayout";
import { getPost } from "../posts";

const post = getPost("czule-slowka")!;

export const metadata = {
  title: `${post.title} · Blog · Sylwia Wróblewska`,
  description:
    "18 lat w branży nieruchomości i dalej zdarza się dać nabrać na czułe słówka klienta. Sylwia Wróblewska o zawyżonej cenie, „chociaż na chwilę” i o tym, kto na końcu płaci rachunek.",
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [post.cover],
  },
};

export default function ArtykulCzuleSlowka() {
  return (
    <SubpageLayout
      kicker={`Blog · ${post.dateLabel}`}
      title={post.title}
      intro="Setki randek i relacji. Kilka takich na całe życie, parę toksycznych, po których jeszcze długo bolał brzuch."
      image={{ src: post.cover, alt: post.coverAlt }}
    >
      <article className="mx-auto max-w-3xl">
        <div className="space-y-6 text-base leading-8 text-foreground-soft sm:text-lg sm:leading-9">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.9] first-letter:text-fuchsia-700">
            18 lat „w związku” z tą branżą. Setki randek i relacji. Kilka takich na całe życie,
            parę toksycznych, po których jeszcze długo bolał brzuch. I mimo tego stażu dalej czasem
            daję się nabrać na czułe słówka. Bo one działają, nawet kiedy wiesz, jak to się skończy.
          </p>
          <p>Bo wiecie, jak to jest.</p>
          <p>
            On, czyli Klient, przychodzi na pierwszą randkę i już w progu zaczyna love bombing:
          </p>
          <blockquote className="border-l-2 border-fuchsia-500 pl-6 font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            „Nie możemy sprzedać tej nieruchomości od roku. Znajomi Panią polecili, same
            superlatywy, opinie w internecie też wspaniałe. Na pewno Pani to załatwi. Tylko szybko,
            3 do 4 miesięcy…”
          </blockquote>
          <p>
            Serducho rośnie, prawda? No i wtedy pojawia się pierwsza czerwona flaga. Widzę ją,
            oczywiście, że widzę, ale ignoruję. Bo przecież jest tak miło.
          </p>
          <div className="space-y-2 rounded-2xl border border-fuchsia-100 bg-white/60 px-6 py-5 font-display text-lg italic text-foreground sm:text-xl">
            <p>Super, ale macie cenę zawyżoną o 20%.</p>
            <p>Wiemy. Obniżymy. Troszkę. 5%.</p>
            <p>To wciąż za dużo.</p>
            <p>Ale Pani jest taka skuteczna. Niech Pani spróbuje. Chociaż na chwilę.</p>
          </div>
          <p>
            „Chociaż na chwilę”. Klasyk. Nikt jeszcze nie zaczął toksycznego związku, myśląc, że
            to na stałe.
          </p>
          <p>
            I ja, kobieta z doświadczeniem, czasami mięknę. Dobrze. Spróbujmy. Cena z kosmosu, ale
            przecież „tylko spróbujemy”.
          </p>
          <p>
            Mija miesiąc. Rynek mówi: nie. I nie pomoże nawet cała społeczność{" "}
            <a
              href="https://www.facebook.com/nieruchomoscispodlady"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fuchsia-700 underline decoration-fuchsia-300 underline-offset-4 hover:decoration-fuchsia-700"
            >
              Nieruchomości Spod Lady
            </a>
            .
          </p>
          <p>
            Tymczasem Klient zdążył się przywiązać do swojej wymarzonej ceny, a każda rozmowa o
            kompromisie boli jak rozstanie. Mnie też. Bo znowu zaczynam od zera, a czas płynie.
          </p>
          <p>I wiecie, jak to się kończy? On odchodzi, ale elegancko:</p>
          <blockquote className="border-l-2 border-fuchsia-500 pl-6 font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            „Od początku miała Pani rację. Fantastyczny marketing, świetne prezentacje, ale nie
            przedłużamy umowy. Obniżamy teraz cenę o 20% i spróbujemy sami albo z kilkoma biurami
            naraz. Ale fajnie było z Panią współpracować.”
          </blockquote>
          <p>Klasyczne „to nie Ty, to ja”.</p>
          <p>
            Nieważne, że powiedziałam to na pierwszej randce. Nieważne, że moje kilka tysięcy
            złotych kosztów właśnie wyparowało razem z nim.
          </p>
          <p>
            I to jest chyba najbardziej przewrotne w tej branży: doświadczenie nie zawsze chroni
            przed czułymi słówkami.
          </p>
          <p>
            A mama dawno powtarzała: nie nabieraj się na czułe słówka. Bo to jak darmowy prezent,
            nic nie kosztują. Tylko rachunek zawsze ktoś później płaci.
          </p>
          <p>
            A Wam zdarzyły się takie relacje? Macie swoje „chociaż na próbę i na chwilę”?
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <span className="font-display text-lg italic text-fuchsia-700">Sylwia Wróblewska</span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-soft">
            18 lat w związku z branżą
          </span>
        </div>
      </article>
    </SubpageLayout>
  );
}
