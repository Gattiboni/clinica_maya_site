import { MOV } from "@/lib/movimento";

type ProximaFolhaProps = {
  /** Âncora da folha seguinte (ex.: `#pilar-2`); a rolagem é suave pelo `scroll-behavior` do site. */
  href: string;
  /** Cor do traço: `marrom` sobre folha clara, `bege` sobre folha verde. */
  tom?: "marrom" | "bege";
};

const TONS = {
  marrom: "text-marrom hover:text-verde focus-visible:outline-verde",
  bege: "text-bege/70 hover:text-bege focus-visible:outline-bege",
};

/**
 * Botão "próximo" discreto de uma folha de pilha (mapa §1.2, `stack`): seta
 * para baixo que rola até a folha seguinte. Só ícone, com nome acessível
 * fixo. O CSS (`folha-proximo`) só o exibe com scroll-driven animations e a
 * partir de `lg`; ocupa a última linha da grade da folha.
 */
export function ProximaFolha({ href, tom = "marrom" }: ProximaFolhaProps) {
  return (
    <a
      href={href}
      aria-label="Próxima folha"
      className={`${MOV.folhaProximo} ${MOV.transicaoHover} mt-4 size-11 items-center justify-center justify-self-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:col-span-full ${TONS[tom]}`}
    >
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v15M6 13l6 6 6-6" />
      </svg>
    </a>
  );
}
