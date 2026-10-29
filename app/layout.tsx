import type { Metadata } from "next";
import { Alegreya_Sans, Lora } from "next/font/google";
import "./globals.css";

// Fontes self-hosted pelo Next no build: zero request ao Google em runtime.
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alegreya-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Clínica Maya",
    template: "%s | Clínica Maya",
  },
  description: "Clínica de saúde integral em Antônio Carlos, Santa Catarina.",
  icons: {
    icon: "/marca/logo-vertical-verde.png",
  },
  // TEMPORÁRIO até o go-live (plano, Fase 7): remover este campo inteiro ao apontar clinicamaya.com.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${alegreyaSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
