import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Barbearia Passos | Estilo, Precisão e Cuidado",
  description: "Uma experiência premium de barbearia contemporânea. Cortes, barba e acabamento com profissionais de excelência.",
  openGraph: {
    title: "Barbearia Passos",
    description: "Cuidado masculino contemporâneo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF9F6] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
