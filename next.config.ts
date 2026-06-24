import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optymalizator Vercela (/_next/image) zwracał 402 (limit konta) -> zdjęcia się nie ładowały.
    // Wyłączamy optymalizację: pliki z /public serwowane są bezpośrednio (200), bez limitu.
    unoptimized: true,
  },
};

export default nextConfig;
