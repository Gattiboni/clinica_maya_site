import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Secao } from "@/components/ui/Secao";
import { ETAPAS } from "@/lib/conteudo/metodo";

/** §Método 3 · Etapas. Mesma gramática dos passos da Home: círculos numerados ligados por uma linha a partir de `lg`. */
export function Etapas() {
  return (
    <Secao fundo="bege">
      <CabecalhoSecao
        titulo={
          <>
            As quatro etapas da <em>jornada</em>
          </>
        }
        lead="Da primeira conversa à consolidação dos novos hábitos."
        className="mb-14"
      />
      <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <span
          aria-hidden="true"
          className="absolute top-[23px] right-[12.5%] left-[12.5%] hidden h-px bg-marrom/35 lg:block"
        />
        {ETAPAS.map((etapa, indice) => (
          <li
            key={etapa.nome}
            className="relative flex flex-col items-center gap-3.5 text-center lg:px-5"
          >
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-full bg-verde font-titulo text-lead text-bege"
            >
              {indice + 1}
            </span>
            <h3 className="text-h3 font-semibold">{etapa.nome}</h3>
            <p className="max-w-prosa-nota text-nota">{etapa.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
