import { Faq as FaqUi } from "@/components/ui/Faq";
import { PERGUNTAS_FREQUENTES } from "@/lib/conteudo/emagrecimento";

/**
 * §Emagrecimento 6 · Perguntas frequentes. A marcação vive em
 * `components/ui/Faq.tsx` (compartilhada com o Atendimento on-line desde o
 * Lote 3a); este arquivo é a seção da página, para a Fase 4 animar por seção.
 */
export function Faq() {
  return <FaqUi itens={PERGUNTAS_FREQUENTES} />;
}
