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
    default: "Sylwia Wróblewska | Strategia sprzedaży nieruchomości i konsultacje 1:1",
    template: "%s | Sylwia Wróblewska",
  },
  description:
    "Butikowa marka osobista Sylwii Wróblewskiej: sprzedaż nieruchomości premium, konsultacje dla pośredników, strategia off-market i szkolenia dla branży.",
  keywords: [
    "Sylwia Wróblewska",
    "nieruchomości Trójmiasto",
    "konsultacje dla agentów nieruchomości",
    "off-market",
    "Nieruchomości Spod Lady",
    "sprzedaż nieruchomości premium",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sylwia Wróblewska | Sprzedaż nieruchomości, konsultacje i szkolenia",
    description:
      "Nowoczesna strona wizytówkowa Sylwii Wróblewskiej. Strategia sprzedaży, konsultacje 1:1 za 300 zł/h i wiedza z rynku off-market.",
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
    title: "Sylwia Wróblewska | Konsultacje i strategia nieruchomości",
    description:
      "Butikowa marka osobista dla klientów premium i pośredników, którzy chcą działać skuteczniej.",
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
