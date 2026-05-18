import type { Metadata, Viewport } from "next";
import { Fraunces, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import UpdateBanner from "@/components/UpdateBanner";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const sans = Sora({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sylwiawroblewska.pl"),
  title: {
    default: "Sylwia Wróblewska | Pośrednik, inwestor, trener · Trójmiasto",
    template: "%s | Sylwia Wróblewska",
  },
  description:
    "Sylwia Wróblewska. 17 lat na rynku nieruchomości, właścicielka biura Dom Hunter w Trójmieście, założycielka Nieruchomości Spod Lady (2 000 agentów). Laureatka nagrody Pionier Etycznego Rynku Off Market 2025.",
  keywords: [
    "Sylwia Wróblewska",
    "Dom Hunter Trójmiasto",
    "Nieruchomości Spod Lady",
    "NSL",
    "pośrednik nieruchomości Gdańsk",
    "off-market nieruchomości",
    "Pionier Etycznego Rynku 2025",
    "szkolenia dla pośredników",
    "warsztaty dla agentów nieruchomości",
    "mentoring pośredników nieruchomości",
    "inwestowanie w nieruchomości Trójmiasto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sylwia Wróblewska | Pośrednik, inwestor, trener · Trójmiasto",
    description:
      "17 lat na rynku nieruchomości. Dom Hunter w Trójmieście, społeczność Nieruchomości Spod Lady (2 000 agentów), Pionier Etycznego Rynku Off Market 2025.",
    url: "https://sylwiawroblewska.pl",
    siteName: "Sylwia Wróblewska",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/sylwia-wroblewska.jpg",
        width: 500,
        height: 500,
        alt: "Sylwia Wróblewska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylwia Wróblewska | Pośrednik, inwestor, trener",
    description:
      "17 lat na rynku nieruchomości. Dom Hunter Trójmiasto, społeczność NSL, Pionier Etycznego Rynku 2025.",
    images: ["/images/sylwia-wroblewska.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "real estate",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F5F0" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UpdateBanner />
        {children}
      </body>
    </html>
  );
}
