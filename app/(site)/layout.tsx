import { AoEntrar } from "@/components/layout/AoEntrar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Mundo } from "@/components/layout/Mundo";

/**
 * Layout das páginas do site: header, um `<main>` por página e footer.
 * `Mundo` (Fase 4) só escreve as variáveis do cursor no `<html>`; `AoEntrar`
 * (afinação 1) só marca `data-entrou` em quem pede. O `<main>` é o palco da
 * cortina do footer (fundo opaco e sombra, por `body > main` no CSS; a âncora
 * `#topo` e o botão "Voltar ao topo" vivem no `Header`, presente também no 404
 * global, que monta o próprio `<main>`).
 * O Studio (`/studio`) fica fora deste grupo, direto sob o layout raiz.
 */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Mundo />
      <AoEntrar />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
