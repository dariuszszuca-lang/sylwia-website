"use client";

import { useState } from "react";

const ML_ACCOUNT_ID = process.env.NEXT_PUBLIC_ML_ACCOUNT_ID ?? "";
const ML_FORM_ID = process.env.NEXT_PUBLIC_ML_NEWSLETTER_FORM_ID ?? "";

const BENEFITS = [
  "Tygodniowy update z rynku off-market",
  "Konkretne case'y (anonimowo)",
  "Wczesne info o aplikacji NSL",
];

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    body.append("fields[email]", (fd.get("email") || "").toString().trim());
    body.append("fields[name]", (fd.get("name") || "").toString().trim());
    body.append("ml-submit", "1");
    body.append("anticsrf", "true");

    try {
      if (ML_ACCOUNT_ID && ML_FORM_ID) {
        await fetch(
          `https://assets.mailerlite.com/jsonp/${ML_ACCOUNT_ID}/forms/${ML_FORM_ID}/subscribe`,
          { method: "POST", body, mode: "no-cors" },
        );
      }
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="newsletter-success">
        <div className="newsletter-success-icon" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="newsletter-success-title">Sprawdź skrzynkę i potwierdź zapis</h3>
        <p className="newsletter-success-text">
          Wysłaliśmy mail z linkiem do potwierdzenia. Po kliknięciu trafiasz na listę i dostajesz pierwszy update w najbliższy poniedziałek.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <div className="newsletter-fields">
        <div className="newsletter-field">
          <label htmlFor="nl-name">Imię</label>
          <input id="nl-name" name="name" type="text" required placeholder="Twoje imię" autoComplete="given-name" />
        </div>
        <div className="newsletter-field">
          <label htmlFor="nl-email">Adres e-mail</label>
          <input id="nl-email" name="email" type="email" required placeholder="twoj@email.pl" autoComplete="email" />
        </div>
      </div>

      <button type="submit" className="btn-primary newsletter-submit" disabled={status === "loading"}>
        {status === "loading" ? "Zapisuję…" : "Zapisz mnie na listę NSL"}
      </button>

      <ul className="newsletter-benefits">
        {BENEFITS.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <p className="newsletter-tiny">
        Bez spamu. Wypisujesz się jednym kliknięciem.
      </p>

      {status === "error" && (
        <p className="newsletter-error">Coś poszło nie tak. Spróbuj ponownie albo napisz: sylwia@nieruchomoscispodlady.pl</p>
      )}
    </form>
  );
}
