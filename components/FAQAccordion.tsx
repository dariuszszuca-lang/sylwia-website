type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <details key={item.question} className="faq-item" open={index === 0}>
          <summary>
            <div className="faq-question-wrap">
              <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-base font-semibold text-foreground sm:text-lg">
                {item.question}
              </span>
            </div>
            <span className="faq-icon" aria-hidden>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M1 7H13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="faq-content">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
