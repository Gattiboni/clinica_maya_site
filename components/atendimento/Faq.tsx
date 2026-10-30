import { Faq as FaqUi } from "@/components/ui/Faq";
import { PERGUNTAS_FREQUENTES_ONLINE } from "@/lib/conteudo/atendimento";

/** §Atendimento on-line 4 · Perguntas frequentes: mesmo componente `<details>` do Emagrecimento (`components/ui/Faq`). */
export function Faq() {
  return <FaqUi itens={PERGUNTAS_FREQUENTES_ONLINE} />;
}
