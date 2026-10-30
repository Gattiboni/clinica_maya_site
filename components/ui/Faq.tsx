import { Secao } from "@/components/ui/Secao";

export type ItemFaq = {
  pergunta: string;
  resposta: string;
};

type FaqProps = {
  itens: readonly ItemFaq[];
};

/**
 * Seção "Perguntas frequentes" (Emagrecimento §6, Atendimento on-line §4;
 * movida de `components/emagrecimento/` no Lote 3a). `<details>`/`<summary>`
 * nativos: conteúdo sempre no DOM, abre-fecha sem JavaScript, cada pergunta
 * independente. O marcador padrão do navegador é escondido e substituído por
 * um "+" inline (`aria-hidden`) que vira "×" com o item aberto.
 */
export function Faq({ itens }: FaqProps) {
  return (
    <Secao fundo="creme">
      <h2 className="mb-10 text-center text-h2 font-medium lg:text-left">Perguntas frequentes</h2>
      <ul className="grid gap-6 lg:grid-cols-2">
        {itens.map((item) => (
          <li key={item.pergunta}>
            <details className="group rounded-card bg-bege px-7 py-6 text-verde">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde [&::-webkit-details-marker]:hidden">
                <h3 className="text-h3 font-semibold">{item.pergunta}</h3>
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="mt-1 shrink-0 text-marrom group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 max-w-prosa text-nota">{item.resposta}</p>
            </details>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
