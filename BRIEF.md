# BRIEF — Sylwia Wróblewska (sylwiawroblewska.pl)

> Status: **BUILD v2 gotowy do review klientki** | Ostatnia aktualizacja: 2026-04-25 (CEO)
> Repo: `STRONY/wlasne/sylwia-website/` | Deploy: `git push` → Vercel auto

---

## KIM JEST KLIENTKA

**Sylwia Wróblewska** — pośredniczka nieruchomości z Trójmiasta, założycielka **Nieruchomości Spod Lady (NSL)** — społeczności 1 600+ agentów rynku off-market.

- 15+ lat praktyki na rynku nieruchomości
- Numer licencji zawodowej: **18311**
- Lokalizacja: Gdańsk (Trójmiasto), praca też online (Polska)
- Telefon: **+48 571 309 209**
- E-mail: **sylwia@nieruchomoscispodlady.pl**
- IG: [@sylwiawroblewska.pl](https://www.instagram.com/sylwiawroblewska.pl/)
- FB grupa NSL: [nieruchomoscispodlady](https://www.facebook.com/groups/nieruchomoscispodlady)

## CEL STRONY

Wizytówka osobista — pokazuje pozycję, oferuje 3 formaty współpracy, zbiera rezerwacje na konsultację 1:1.

## OFERTA (3 formaty)

| # | Produkt | Cena | Notatka |
|---|---------|------|---------|
| 01 | Sprzedaż nieruchomości premium | indywidualnie | Off-market, klient premium, butik |
| 02 | **Konsultacja 1:1** | **300 zł / 60 min** | **Główne CTA strony**, online lub Trójmiasto |
| 03 | Szkolenia i wystąpienia branżowe | indywidualnie | Warsztaty dla biur, eventy, mentoring |

## TON GŁOSU

- Premium butik, nie korporacja
- Dyskrecja, klasa, konkret bez nadęcia
- Dla pośredników: "współpraca między agentami, off-market, marka osobista"
- Dla klientów: "pozycjonowanie oferty, narracja ceny, selekcja kupujących"
- Bez bulletów-marketingowych, bez "innowacyjny/holistyczny/kompleksowy"

## DESIGN SYSTEM v2 (WDROŻONY)

| Element | Wartość |
|---------|---------|
| Tło | Cream `#F8F5F0` |
| Tekst | Ink `#15131C` |
| Akcent luxe | Champagne `#C0A472` (hairline na kartach) |
| Akcent CTA | Magenta głęboka `#C43077`–`#82184C` (gradient) |
| Display font | **Fraunces** (variable, axes opt-szn + SOFT) |
| Body font | **Inter** (variable) |
| Mono | Geist Mono |
| Cienie | 3 poziomy: soft / md / xl + glow magenta |

**Filozofia:** 1 punkt fuksji na sekcję, nie 5. Premium = subtelność.

## STRUKTURA STRONY

1. **Sticky pill nav** (auto-blur na scroll) — Oferta · Proces · Konsultacja · FAQ + CTA
2. **Hero** — wielki serif "Sprzedaż. / Strategia. / Reputacja." + portret w premium frame z 2 floating chips (telefon, lokalizacja)
3. **Trust metrics** — 15+ lat / 1 600+ agentów NSL / licencja 18311
4. **About** — 4-card bento z wyróżnikami (butik, doświadczenie, pozycja, komunikacja)
5. **Oferta** — 3 karty, konsultacja 1:1 wyróżniona (badge "Najczęściej wybierane", scale 1.02, glow shadow)
6. **Proces** — timeline 3 kroki (Diagnoza → Strategia → Decyzja)
7. **BookingWidget** — Google Calendar embed + opis + cena + zakres + 3 kroki
8. **FAQ** — accordion (`details/summary`), 6 pytań
9. **CTA "Porozmawiajmy"** — duży panel z gradientem
10. **Footer** — 3 kolumny (opis / nawigacja / kontakt) + licencja zawodowa

## SEO / SCHEMA

JSON-LD `@graph`:
- `Person` (Sylwia, jobTitle, knowsAbout, sameAs)
- `ProfessionalService` (areaServed, priceRange "300 PLN", hasOfferCatalog → Konsultacja)
- `FAQPage` (6 Q&A automatycznie z page state)

OpenGraph + Twitter Card z `/images/sylwia-wroblewska.png`. Robots: index/follow + max-image-preview large.

## INTEGRACJE

### Google Calendar — rezerwacja konsultacji

Komponent `BookingWidget.tsx` czyta zmienną:

```
NEXT_PUBLIC_GCAL_BOOKING_URL=<link do Appointment Schedule Sylwii>
```

**Bez tej zmiennej** widget pokazuje **fallback panel** (cena + przyciski mail/tel) — nadal działa, ale bez prawdziwej rezerwacji.

**Konfiguracja (do zrobienia przez Sylwię):**
1. Wejść na `calendar.google.com` (Workspace lub osobiste)
2. **+ Create → Appointment Schedule**
3. Ustawić: 60 min slot, cena 300 zł (Stripe), dostępne dni/godziny, bufor czasu, opis
4. Skopiować **"Booking page" link** (format: `https://calendar.google.com/calendar/appointments/AcZssZ.../?gv=true`)
5. Wkleić do **`.env.local`** (lokalnie) i **Vercel → Settings → Environment Variables → NEXT_PUBLIC_GCAL_BOOKING_URL** (produkcja)
6. Redeploy → embed widoczny

**Alternatywa:** Cal.com (free) — ten sam mechanizm, inny URL. Można podmienić w 5 minut.

## TECH

- **Framework:** Next.js 16.2.2 (App Router, Turbopack default)
- **React:** 19.2.4
- **Styling:** Tailwind CSS v4 (postcss) + custom CSS w `globals.css`
- **Fonty:** `next/font/google` (Fraunces, Inter, Geist_Mono)
- **Images:** `next/image` z portretem Sylwii w `/public/images/sylwia-wroblewska.png`

## ⚠️ ZNANE OGRANICZENIA / GOTCHAS

- **`next dev` nie startuje na repo w iCloud Drive** — żaden output, port nie nasłuchuje. Lock collisions z synchronizacją iCloud.
  **Workaround:** `rsync -a --exclude=node_modules --exclude=.next --exclude=.git . /tmp/sylwia-build/` → `cd /tmp/sylwia-build && npm install && PORT=3030 npm run dev`. Edycja kodu zostaje w iCloud (`STRONY/wlasne/sylwia-website/`), preview lokalny w `/tmp`.
- **Deploy nie ma tego problemu** — Vercel buduje z gita w cloudzie. `git push` działa.

## STATUS i NASTĘPNE KROKI

**Zrobione (25.04.2026):**
- ✅ Pełny rewrite design system, page.tsx, BookingWidget z Google Calendar embed
- ✅ SiteHeader sticky + FAQAccordion jako osobne komponenty
- ✅ Metadata, OG, JSON-LD, viewport, theme color
- ✅ Local preview działa (`/tmp/sylwia-build`, port 3030) — http://localhost:3030
- ✅ Mobile responsive zweryfikowane

**Pending (czeka na Sylwię / Darka):**
- ⏳ Feedback Sylwii na nowy design (live preview lub screenshoty)
- ⏳ Sylwia tworzy Google Calendar Appointment Schedule, podaje URL
- ⏳ Korekty po feedbacku
- ⏳ Commit + push → Vercel deploy
- ⏳ Domena `sylwiawroblewska.pl` → DNS → Vercel
- ⏳ Testimonials od klientów (3 cytaty) — opcjonalne, można dodać później

## KONTAKT W ZESPOLE

- **Wykonanie:** CEO + (frontend self-build, w razie zmian — @cto)
- **Copy/treści:** @cmo (jeśli Sylwia będzie chciała przeredagować sekcje)
- **Schema/SEO:** @cmo + @cto
- **Domena/DNS/Vercel:** @cto
