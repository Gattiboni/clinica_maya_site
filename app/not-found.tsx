import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import NaoEncontrado from "@/app/(site)/not-found";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

/**
 * 404 para URLs sem rota (fora de qualquer segmento). O layout raiz só tem
 * html/body, então header, `<main>` e footer entram aqui, iguais aos de
 * `app/(site)/layout.tsx`, em volta do mesmo conteúdo de
 * `app/(site)/not-found.tsx`. Resposta HTTP 404 real, página estática.
 */
export default function NaoEncontradoGlobal() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <NaoEncontrado />
      </main>
      <Footer />
    </>
  );
}
