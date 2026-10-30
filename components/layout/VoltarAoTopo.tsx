import { MOV } from "@/lib/movimento";

/** Âncora do topo da página: fica no `<header>`, presente em toda página (inclusive o 404 global). */
export const ID_TOPO = "topo";

/**
 * Botão flutuante "Voltar ao topo" (afinação 1, 2.9): pílula verde com seta,
 * 48px, canto inferior direito. Só existe com scroll-driven animations: por
 * `scroll(root)`, aparece depois de 100svh de rolagem e some 70svh antes do
 * fim, para não cobrir o footer quando a cortina abre (dois elementos, uma
 * animação cada; `visibility` tira o clique quando está invisível). Vive no
 * `Header` (camada mais alta, acima do palco e do footer) e aponta para a
 * âncora do próprio header; a rolagem é suave pelo `scroll-behavior` do site,
 * desligado com `prefers-reduced-motion`. Texto de navegação autorizado.
 */
export function VoltarAoTopo() {
  return (
    <a href={`#${ID_TOPO}`} aria-label="Voltar ao topo" className={MOV.voltarTopo}>
      <span
        className={`${MOV.voltarTopoSome} ${MOV.transicaoHover} flex size-12 items-center justify-center rounded-pilula bg-verde text-bege shadow-[0_12px_24px_-12px_rgb(63_79_79_/_0.6)] transition-colors hover:bg-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde`}
      >
        <span className="sr-only">Voltar ao topo</span>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V5M6 11l6-6 6 6" />
        </svg>
      </span>
    </a>
  );
}
