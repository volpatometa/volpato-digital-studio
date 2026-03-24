import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volpato Digital Studio — Presença Digital para Pequenos Negócios",
  description:
    "Criamos sites profissionais que posicionam, geram confiança e fazem você ser encontrado por quem já está procurando o que você oferece. Saia da invisibilidade digital.",
  keywords: [
    "criação de sites",
    "presença digital",
    "site profissional",
    "pequenas empresas",
    "posicionamento online",
    "Volpato Digital Studio",
    "web design",
    "identidade visual",
  ],
  authors: [{ name: "Volpato Digital Studio" }],
  creator: "Volpato Digital Studio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Volpato Digital Studio — Presença Digital para Pequenos Negócios",
    description:
      "Criamos sites profissionais que posicionam, geram confiança e fazem você ser encontrado por quem já está procurando o que você oferece.",
    siteName: "Volpato Digital Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volpato Digital Studio",
    description:
      "Você existe no mundo físico mas é invisível online — nós mudamos isso.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full antialiased bg-[#0f1a08] text-[#f0f4eb] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
