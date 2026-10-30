import { ConteudoPolitica } from "@/components/politica/ConteudoPolitica";
import { MOV } from "@/lib/movimento";

/** `id` do popover; o link do formulário aponta para ele com `popovertarget`. */
export const ID_MODAL_POLITICA = "politica";

const CLASSES_FECHAR =
  "transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde";

/**
 * Política de privacidade como modal a partir do formulário de contato
 * (afinação 1, 2.10), sem JavaScript: `popover` nativo (`auto`: Esc fecha,
 * clique fora fecha, fundo escurecido pelo `::backdrop`), largura de prosa,
 * rolagem interna. Mesmo componente de conteúdo da página
 * `/politica-de-privacidade`, que continua existindo (footer, SEO, jurídico);
 * o modal só evita sair do formulário. Em navegador sem `popover`, o CSS
 * esconde o bloco e o link do footer continua levando à página. Textos novos
 * autorizados: "Fechar" e "Voltar ao formulário". Fica no fim da página, logo
 * depois do formulário, para a ordem de tabulação seguir do link para o botão
 * "Fechar".
 */
export function ModalPolitica() {
  return (
    <div
      id={ID_MODAL_POLITICA}
      popover="auto"
      role="dialog"
      aria-labelledby={`${ID_MODAL_POLITICA}-titulo`}
      className={MOV.modal}
    >
      <div className="relative px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <button
          type="button"
          popoverTarget={ID_MODAL_POLITICA}
          popoverTargetAction="hide"
          aria-label="Fechar"
          className={`${CLASSES_FECHAR} absolute top-4 right-4 flex size-11 items-center justify-center rounded-pilula text-verde sm:top-6 sm:right-6`}
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <ConteudoPolitica contexto="modal" idTitulo={`${ID_MODAL_POLITICA}-titulo`} />
        <p className="mx-auto mt-10 max-w-prosa-longa">
          <button
            type="button"
            popoverTarget={ID_MODAL_POLITICA}
            popoverTargetAction="hide"
            className={`${CLASSES_FECHAR} text-corpo font-bold text-verde underline underline-offset-4`}
          >
            Voltar ao formulário <span aria-hidden="true">→</span>
          </button>
        </p>
      </div>
    </div>
  );
}
