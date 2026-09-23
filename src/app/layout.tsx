import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0C0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Barbearia Passos | Estilo, Precisão e Cuidado no Jundiaí",
  description:
    "Experiência premium de barbearia contemporânea em Anápolis - GO. Cortes clássicos e modernos, barba alinhada com toalha quente e atendimento com horário marcado no Jundiaí.",
  keywords: [
    "Barbearia Passos",
    "Barbearia em Anápolis",
    "Barbearia Jundiaí Anápolis",
    "Corte de cabelo masculino",
    "Barba toalha quente",
    "Degradê Anápolis",
    "Barbeiro Anápolis"
  ],
  authors: [{ name: "Barbearia Passos" }],
  openGraph: {
    title: "Barbearia Passos | Estilo, Precisão e Cuidado",
    description:
      "Cuidado masculino contemporâneo de alta precisão. Agende seu horário no Jundiaí, Anápolis.",
    type: "website",
    locale: "pt_BR",
    siteName: "Barbearia Passos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-brand-bg text-brand-ink antialiased selection:bg-brand-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
