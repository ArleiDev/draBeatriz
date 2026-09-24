import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Beatriz Rigobello | Harmonização Facial | São Paulo",
  description: "Realçando sua beleza natural: menos excessos, mais harmonia. Harmonização Facial, Método Bello, Rinomodelação, Preenchimento Labial e Botox em São Paulo. CRBM 65122.",
  keywords: [
    "Dra Beatriz Rigobello",
    "Harmonização Facial São Paulo",
    "Biomédica Esteta São Paulo",
    "Método Bello",
    "Rinomodelação São Paulo",
    "Preenchimento Labial SP",
    "Botox São Paulo",
    "CRBM 65122"
  ],
  openGraph: {
    title: "Dra. Beatriz Rigobello | Harmonização Facial | São Paulo",
    description: "Realçando sua beleza natural: menos excessos, mais harmonia. Agende sua avaliação personalizada.",
    locale: "pt_BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <body className="bg-beige-50 text-brown-900 font-sans antialiased selection:bg-beige-300 selection:text-brown-900">
        {children}
      </body>
    </html>
  );
}
