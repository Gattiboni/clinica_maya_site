import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { CLINICA } from "@/lib/conteudo/clinica";
import { idPopup, INSTAGRAM_URL, type ChaveBloco, type Profissional } from "@/lib/conteudo/equipe";
import { MOV } from "@/lib/movimento";

/**
 * Blocos da bio na ordem da copy, com o título padrão de cada um; a bio pode
 * trocar o título de um bloco (`bio.titulos`). A frase em destaque fica fora, no fim.
 */
const BLOCOS: readonly { chave: ChaveBloco; titulo: string }[] = [
  { chave: "formacao", titulo: "Formação" },
  { chave: "atende", titulo: "O que atende e para quem" },
  { chave: "primeiraConsulta", titulo: "Como é a primeira consulta" },
  { chave: "acompanhamento", titulo: "Como é o acompanhamento" },
  { chave: "naoPrometo", titulo: "O que não faço e não prometo" },
  { chave: "porque", titulo: "Por que escolhi essa área" },
];

const CLASSES_FECHAR =
  "transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde";

/**
 * Pop-up da profissional (copy v1.3.1, "Pop-ups da Equipe"): `popover` nativo,
 * sem JavaScript, com o mesmo mecanismo e a mesma casca do modal da Política
 * de privacidade (`modal-prosa`: `::backdrop`, largura de prosa, rolagem
 * interna, Esc e clique fora fecham). Um por profissional com bio, renderizado
 * na própria página da Equipe (server component: o conteúdo está no HTML).
 * Cabeçalho igual ao card (foto em máscara, nome, título e registro,
 * modalidade, Instagram em nova aba); corpo com os blocos da copy, cada um com
 * `<h3>` e parágrafo, e bloco ausente não aparece; a frase em destaque no fim,
 * em Lora itálico. Entrada por `@starting-style` (classe `popup-entra`).
 * Textos de interface autorizados pela copy: "Fechar", "Agendar consulta" e
 * "Voltar para a equipe".
 */
export function PopupProfissional({ profissional }: { profissional: Profissional }) {
  const { nome, titulo, registro, modalidade, instagram, foto, bio } = profissional;
  if (!bio) return null;

  const id = idPopup(profissional);
  const idTitulo = `${id}-titulo`;

  return (
    <div
      id={id}
      popover="auto"
      role="dialog"
      aria-labelledby={idTitulo}
      className={`${MOV.modal} ${MOV.popupEntra}`}
    >
      <div className="relative px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <button
          type="button"
          popoverTarget={id}
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

        <article className="mx-auto flex max-w-prosa-longa flex-col gap-9 text-verde">
          <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
            <div
              className={`${MOV.mascara} aspect-[4/5] w-36 shrink-0 rounded-t-[72px] rounded-b-2xl sm:w-40`}
            >
              <Image
                src={foto.src}
                alt={nome}
                sizes="160px"
                className="h-full w-full object-cover"
                style={{ objectPosition: foto.posicao }}
              />
            </div>
            <div className="flex flex-col items-center gap-2.5 sm:items-start sm:pr-10">
              <h2 id={idTitulo} className="text-h2 font-medium">
                {nome}
              </h2>
              <p className="text-legenda font-bold tracking-rotulo text-marrom uppercase">
                {titulo} · {registro}
              </p>
              <span className="rounded-pilula border border-marrom/35 px-3.5 py-1 text-legenda font-bold tracking-rotulo uppercase">
                {modalidade}
              </span>
              <a
                href={`${INSTAGRAM_URL}${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nota font-bold break-all underline underline-offset-3 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
              >
                @{instagram}
              </a>
            </div>
          </header>

          {BLOCOS.map(({ chave, titulo: tituloPadrao }) => {
            const texto = bio[chave];
            if (!texto) return null;
            return (
              <section key={chave} className="flex flex-col gap-2.5">
                <h3 className="text-h3 font-semibold">{bio.titulos?.[chave] ?? tituloPadrao}</h3>
                <p className="text-corpo">{texto}</p>
              </section>
            );
          })}

          {bio.frase && (
            <p className="border-t border-marrom/25 pt-8 font-titulo text-h3 leading-normal italic">
              {bio.frase}
            </p>
          )}

          <footer className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Botao href={CLINICA.agendarHref} tamanho="pequeno">
              Agendar consulta
            </Botao>
            <button
              type="button"
              popoverTarget={id}
              popoverTargetAction="hide"
              className={`${CLASSES_FECHAR} text-corpo font-bold text-verde underline underline-offset-4`}
            >
              Voltar para a equipe
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}
