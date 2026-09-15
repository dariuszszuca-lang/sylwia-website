export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  cover: string;
  coverAlt: string;
};

export const posts: Post[] = [
  {
    slug: "czule-slowka",
    title: "Czułe słówka, czyli o randkowaniu z nieruchomościami",
    excerpt:
      "18 lat w związku z tą branżą. Setki randek i relacji. I mimo tego stażu dalej czasem daję się nabrać na czułe słówka.",
    date: "2026-09-15",
    dateLabel: "15 września 2026",
    cover: "/images/blog/czule-slowka.jpg",
    coverAlt: "Czułe słówka. Sylwia Wróblewska z filiżanką kawy o randkowaniu z klientami na rynku nieruchomości.",
  },
  {
    slug: "grilowanie-posrednikow",
    title: "Grilowanie pośredników",
    excerpt:
      "Od kilku dni media grzeją temat prowizji pośredników. Zanim zostawisz niemiły komentarz, na chwilę wejdź w nasze buty.",
    date: "2026-06-29",
    dateLabel: "29 czerwca 2026",
    cover: "/images/blog/grilowanie-posrednikow.jpg",
    coverAlt: "Grilowanie pośredników. Sylwia Wróblewska o prowizjach i deregulacji rynku nieruchomości.",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
