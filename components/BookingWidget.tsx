"use client";

import { useEffect, useRef, useState } from "react";

const BOOKING_URL = process.env.NEXT_PUBLIC_GCAL_BOOKING_URL ?? "";
const FALLBACK_EMAIL = "sylwia@nieruchomoscispodlady.pl";
const FALLBACK_PHONE = "+48571309209";

const SCOPE = [
  "Strategia sprzedaży i wyceny nieruchomości",
  "Proces współpracy z klientem premium",
  "Off-market, negocjacje i pozycjonowanie oferty",
  "Marka osobista pośrednika",
];

const STEPS = [
  { n: "01", text: "Wybierasz dogodny termin w kalendarzu" },
  { n: "02", text: "Otrzymujesz potwierdzenie i krótki brief mailowo" },
  { n: "03", text: "60 minut konkretu — strategia, decyzje, plan działań" },
];

type Status = "idle" | "loading" | "ready" | "error";

export function BookingWidget() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [status, setStatus] = useState<Status>(BOOKING_URL ? "loading" : "idle");

  useEffect(() => {
    if (!BOOKING_URL) return;

    const timer = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "error" : s));
    }, 12_000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      id="konsultacja"
      className="premium-panel champagne-line rounded-[2.5rem] p-6 sm:p-10 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        {/* Lewa kolumna — opis konsultacji */}
        <div>
          <span className="kicker">Konsultacja 1:1</span>

          <h2 className="display-tight mt-5 text-4xl font-medium leading-[0.98] text-foreground sm:text-5xl">
            Godzina konsultacji, która wskazuje kierunek dalszych działań.
          </h2>

          <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-muted">
            Dla pośredników, właścicieli biur i klientów rynku nieruchomości,
            którzy chcą uporządkować strategię sprzedaży, komunikację z klientem
            lub pozycjonowanie własnej marki.
          </p>

          {/* Cena — premium chip */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border-strong bg-background-soft px-5 py-2.5 shadow-soft">
            <span className="kicker !text-fuchsia-700">Cena</span>
            <span className="h-4 w-px bg-border-strong" aria-hidden />
            <span className="text-sm font-semibold text-foreground">
              300 zł <span className="text-muted font-normal">/ 60 min</span>
            </span>
          </div>

          {/* Zakres rozmowy */}
          <div className="mt-8">
            <p className="kicker">Zakres rozmowy</p>
            <ul className="mt-4 space-y-3">
              {SCOPE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted">
                  <span
                    className="mt-2.5 h-px w-5 flex-shrink-0 bg-fuchsia-500"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proces — 3 kroki */}
          <div className="mt-10 grid gap-3">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background-soft/60 px-5 py-4"
              >
                <span className="font-mono text-xs font-medium text-fuchsia-700">{step.n}</span>
                <span className="text-sm text-foreground-soft">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prawa kolumna — kalendarz */}
        <div className="relative">
          <div className="glass-strong rounded-[2rem] overflow-hidden">
            {BOOKING_URL ? (
              <div className="relative">
                {/* Loading state */}
                {status === "loading" && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-background-soft/80 backdrop-blur">
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-fuchsia-500 border-t-transparent" />
                      <span>Ładowanie kalendarza Google…</span>
                    </div>
                  </div>
                )}

                {/* Error fallback */}
                {status === "error" && (
                  <div className="p-8 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      Kalendarz nie odpowiada
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Napisz lub zadzwoń bezpośrednio — odezwę się tego samego dnia.
                    </p>
                    <ContactButtons />
                  </div>
                )}

                <iframe
                  ref={iframeRef}
                  src={BOOKING_URL}
                  title="Rezerwacja konsultacji 1:1 — Sylwia Wróblewska"
                  loading="lazy"
                  onLoad={() => setStatus("ready")}
                  className="block h-[640px] w-full border-0 bg-white"
                  style={{ colorScheme: "light" }}
                />
              </div>
            ) : (
              <FallbackBookingPanel />
            )}
          </div>

          <p className="mt-4 px-2 text-xs text-muted-soft">
            Płatność po potwierdzeniu terminu, przelewem lub Stripe link.
            Spotkanie online (Google Meet) lub stacjonarnie w Trójmieście.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactButtons() {
  const subject = encodeURIComponent("Konsultacja 1:1 — 300 zł / 60 min");
  const body = encodeURIComponent(
    "Dzień dobry,\n\nchcę umówić konsultację 1:1.\nProponowane terminy: \n\nProszę o potwierdzenie i link do spotkania.\n\nPozdrawiam,\n",
  );

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a href={`mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`} className="btn-primary">
        Napisz e-mail
      </a>
      <a href={`tel:${FALLBACK_PHONE}`} className="btn-secondary">
        Zadzwoń · 571 309 209
      </a>
    </div>
  );
}

function FallbackBookingPanel() {
  return (
    <div className="p-8 sm:p-10">
      <span className="kicker">Rezerwacja</span>
      <h3 className="display mt-4 text-2xl font-medium text-foreground sm:text-3xl">
        Wybierz formę kontaktu i umów termin.
      </h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        Bezpośrednia rezerwacja przez Google Calendar zostanie podpięta wkrótce.
        Na ten moment najszybsza droga to e-mail lub telefon — odezwę się tego
        samego dnia roboczego.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background-soft/70 p-5">
          <p className="kicker">Konsultacja</p>
          <p className="mt-3 text-sm font-semibold text-foreground">300 zł / 60 min</p>
          <p className="mt-1 text-xs text-muted">Online lub Trójmiasto</p>
        </div>
        <div className="rounded-2xl border border-border bg-background-soft/70 p-5">
          <p className="kicker">Odpowiedź</p>
          <p className="mt-3 text-sm font-semibold text-foreground">Tego samego dnia</p>
          <p className="mt-1 text-xs text-muted">Pon–Pt, 9:00–17:00</p>
        </div>
      </div>

      <ContactButtons />
    </div>
  );
}
