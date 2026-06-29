import { SubpageLayout } from "@/components/SubpageLayout";
import { getPost } from "../posts";

const post = getPost("grilowanie-posrednikow")!;

export const metadata = {
  title: `${post.title} · Blog · Sylwia Wróblewska`,
  description:
    "Od kilku dni media grzeją temat prowizji pośredników. Sylwia Wróblewska o deregulacji rynku, modelu prowizyjnym i tym, za co naprawdę płaci klient.",
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [post.cover],
  },
};

export default function ArtykulGrilowanie() {
  return (
    <SubpageLayout
      kicker={`Blog · ${post.dateLabel}`}
      title={post.title}
      intro="Zanim zostawisz niemiły komentarz, na chwilę wejdź w nasze buty."
      image={{ src: post.cover, alt: post.coverAlt }}
    >
      <article className="mx-auto max-w-3xl">
        <div className="space-y-6 text-base leading-8 text-foreground-soft sm:text-lg sm:leading-9">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.9] first-letter:text-fuchsia-700">
            Od kilku dni media grzeją temat prowizji pośredników. Nagłówki krzyczą „Ukrócimy
            podwójne prowizje", politycy zapewniają, że wreszcie to uregulują. Rozumiem, skąd się
            to bierze. Naprawdę.
          </p>
          <p>
            Deregulacja z 2014 roku zniosła licencje zawodowe i obowiązek kształcenia, otwierając
            ten zawód dosłownie dla wszystkich. Efekt był do przewidzenia: na rynek weszły osoby bez
            przygotowania, często narażające klientów na realne problemy. Rząd, który tę
            deregulację przeprowadził, jest teraz zdziwiony wynikiem.
          </p>
          <p>
            Zmiany są potrzebne, ale projekt, który proponuje ministerstwo, nie rozwiązuje żadnego z
            problemów, a całą dyskusję sprowadza do ingerowania w nasze wynagrodzenia. Ani słowa o
            podwyższaniu kwalifikacji, ani jednego konkretnego narzędzia, które realnie zwiększy
            bezpieczeństwo klientów.
          </p>
          <p>Skoro jednak wszyscy skupiają się na prowizjach, to porozmawiajmy właśnie o tym.</p>
          <p>
            Pośrednik to przedsiębiorca. Ponad 90% z nas pracuje na własnych działalnościach,
            opłacamy sobie ZUS, nie mamy płatnych urlopów ani gwarancji wynagrodzenia. Nikt nas nie
            utrzymuje z podatków. Sami pracujemy na swój sukces albo na swoją porażkę.
          </p>
          <p>
            I tu ważna rzecz, która umyka w całej tej debacie: korzystanie z usług pośrednika jest
            dobrowolne. To wybór klienta, tak jak wyborem jest to, czy zatrudnimy prawnika do sprawy
            sądowej, czy sami złożymy pisma, czy sami zaaranżujemy mieszkanie, czy poprosimy o pomoc
            architekta wnętrz. Mogłabym tak wymieniać długo. Nikomu niczego nie każemy.
          </p>
          <p>
            Nasze wynagrodzenie jest prowizyjne. Płatne dopiero wtedy, gdy transakcja dojdzie do
            skutku. Wyobraź sobie prawnika, który dostaje pieniądze wyłącznie po wygraniu sprawy,
            albo lekarza, który bierze wynagrodzenie tylko wtedy, gdy pacjent wróci do zdrowia.
          </p>
          <p>
            Czy uważasz to za uczciwy model? Czy zgodziłbyś się tak pracować? Tak właśnie wygląda
            codzienność pośrednika.
          </p>
          <p>
            Zanim dostaniemy pierwsze pieniądze od klienta, inwestujemy swoje pieniądze i czas.
            Profesjonalna sesja fotograficzna, drony, rolki wideo, domy otwarte, portale, narzędzia
            branżowe. To wszystko kosztuje nas z góry, a jedno zlecenie potrafi wygenerować koszty
            rzędu 10 tysięcy złotych. I nie liczę tu naszego czasu. Nieruchomość może sprzedać się w
            tydzień. Może wisieć na rynku kilka miesięcy. Może w ogóle się nie sprzedać, bo klient
            zmienił zdanie. Kosztów nikt wtedy zwracać nie chce.
          </p>
          <p>
            Po stronie kupującego też nie jest łatwo. Przyjęcie zlecenia od kupującego to długie dni
            intensywnej pracy: przeszukiwanie ogólnodostępnych i zamkniętych baz danych, kontakt z
            deweloperami i spółdzielniami, analiza dziesiątek ofert pod konkretne parametry. A potem
            klient zmienia zdanie. Zmienia parametry albo po prostu znika. A przychodząc do agenta,
            oczekuje 0% prowizji. Serio? Czy wyobrażasz sobie pracować kilka dni dla kogoś bez
            żadnej pewności, że dostaniesz wynagrodzenie? Ile takich „pustych zleceń" możesz przyjąć
            w miesiącu?
          </p>
          <p>
            Podwójna reprezentacja jest prawnie dozwolona, praca bez wynagrodzenia już nie. Ale to
            „niby podwójne wynagrodzenie" najbardziej kole w oczy. I to zasługuje na uczciwą
            odpowiedź.
          </p>
          <p>
            Zdecydowana większość agentów, których znam, wolałaby pobierać wynagrodzenie od jednej
            strony transakcji. Tej, z którą ma podpisane zlecenie. To byłoby prostsze i przejrzyste.
          </p>
          <p>
            Dlaczego tak się nie dzieje? Często jest to wina „wyciskania" przez klientów jak
            najniższego wynagrodzenia i robienia castingu na najniższe prowizje, zamiast na jak
            najwyższą jakość usług. Jeśli masz podpisaną umowę na 1% czy 1,5%, to nie dziw się, że
            agent będzie chciał pobrać wynagrodzenie też od drugiej strony. Nie dziw się, że na
            profesjonalne wideo czy drona nie wystarczy, bo tak niskie wynagrodzenie najczęściej nie
            pokrywa naszych kosztów. Nie mówiąc już o takich narzędziach jak success fee dla agenta
            współpracującego.
          </p>
          <p>
            Oczywiście można „mieć zasady" i nie przyjmować takich zleceń. Ale tak da się pracować
            tylko w dwóch przypadkach:
          </p>
          <ol className="ml-1 space-y-3 border-l-2 border-fuchsia-200 pl-6">
            <li>
              <span className="font-semibold text-foreground">Masz zaplecze finansowe</span> i kilka
              pustych miesięcy nie wpływa na Twoją płynność, bo masz inne źródło dochodu lub
              utrzymuje Cię partner.
            </li>
            <li>
              <span className="font-semibold text-foreground">Pracujesz tyle lat</span>, że możesz
              przebierać w zleceniach.
            </li>
          </ol>
          <p>
            Kiedy zaczyna się pracę w nieruchomościach i chce się z tego utrzymać, zdarza się, że
            agenci przyjmują zlecenia na prowizjach tak niskich, że nie pokrywają kosztów, i starają
            się pobrać wynagrodzenie od drugiej strony, też bez zlecenia tych prac. To nie jest
            chciwość. To chęć przetrwania.
          </p>
          <p>
            Bo nierentownymi zleceniami i własnymi zasadami nie nakarmimy dzieci ani nie opłacimy
            rachunków. Zarabiamy dopiero wtedy, kiedy doprowadzamy do transakcji.
          </p>
          <p>
            W branży jest duża rotacja, szczególnie w pierwszym roku. Bo żeby utrzymać się z
            pośrednictwa przez wiele lat, trzeba być naprawdę zdeterminowanym i silnym człowiekiem,
            odpornym psychicznie, zaangażowanym i gotowym na to, że w tym zawodzie jest duże ryzyko,
            duże emocje i duże pieniądze w grze. Ale żadnej gwarancji.
          </p>
          <p>
            Prawdziwy problem po deregulacji z 2014 roku to brak mechanizmów weryfikacji
            kompetencji. Nie wiadomo, jak odróżnić profesjonalistę od osoby, która nie ma
            doświadczenia, ale ma „ładne rolki" i konto na Instagramie.
          </p>
          <p>
            Projekt ministerstwa tego nie rozwiązuje. Koncentruje się na regulacji wynagrodzeń, nie
            na podnoszeniu standardów obsługi klienta. Nie tworzy żadnych narzędzi, które zmuszałyby
            do kształcenia się i podwyższania kwalifikacji. Tworzy jedynie chwytliwe hasła.
          </p>
          <p>
            Dlatego mam osobistą prośbę. Kiedy następnym razem będziecie chcieli skorzystać z usług
            pośrednika, zapytajcie najpierw o zakres prac i koszty działań, zamiast o wysokość
            prowizji. Zamiast pytać „dlaczego bierzecie z dwóch stron", warto zapytać: „co dostanę
            za tę prowizję i jak wygląda plan działania". To jest właściwe pytanie.
          </p>

          <blockquote className="border-l-2 border-fuchsia-500 pl-6 font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            Dobra transakcja to taka, w której zadowolone są trzy strony: Sprzedający, Kupujący i
            Agent.
          </blockquote>

          <p>
            Dlatego dziękuję dziś wszystkim moim klientom za zaufanie. Doceniam każde zlecenie na
            wyłączność, które dostałam, bo to one pozwalają mi zarabiać na życie i robić tę pracę tak
            dobrze, że dziś mogę przebierać w zleceniach.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <span className="font-display text-lg italic text-fuchsia-700">Sylwia Wróblewska</span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-soft">
            Zajęło mi to 17 lat
          </span>
        </div>
      </article>
    </SubpageLayout>
  );
}
