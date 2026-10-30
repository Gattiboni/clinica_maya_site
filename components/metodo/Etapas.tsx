import type { CSSProperties } from "react";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { LinhaDesenhada } from "@/components/ui/LinhaDesenhada";
import { Secao } from "@/components/ui/Secao";
import { ETAPAS } from "@/lib/conteudo/metodo";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

/**
 * §Método 3 · Etapas como linha do tempo animada (afinação 1, 2.11). Mesma
 * gramática dos passos da Home: círculos numerados ligados por uma linha a
 * partir de `lg`. O invólucro é o trilho (`linha-trilho`, timeline `--linha`):
 * a linha 1 → 4 é desenhada por scrub ao longo dele, cada etapa (nome e texto)
 * revela quando a linha alcança o centro dela (`reveal-linha`) e o número faz
 * o pop ao entrar na viewport. Padding compacto: metade do normal, para
 * encostar na pilha dos pilares. Campo-1 na camada ambiente.
 */
export function Etapas() {
  return (
    <Secao fundo="bege" espaco="compacto" campo="campo-1">
      <CabecalhoSecao
        titulo={
          <>
            As quatro etapas da <em>jornada</em>
          </>
        }
        lead="Da primeira conversa à consolidação dos novos hábitos."
        className={`${MOV.reveal} mb-14`}
      />
      <div
        className={`${MOV.linhaTrilho} relative`}
        style={{ "--mov-pontos": ETAPAS.length } as CSSProperties}
      >
        <LinhaDesenhada
          direcao="horizontal"
          pontos={ETAPAS.length}
          timeline="trilho"
          className="top-[11px] left-0 hidden h-6 w-full text-marrom/60 lg:block"
        />
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {ETAPAS.map((etapa, indice) => (
            <li
              key={etapa.nome}
              className="relative flex flex-col items-center gap-3.5 text-center lg:px-5"
            >
              <span
                aria-hidden="true"
                {...{ [AO_ENTRAR]: "" }}
                className={`${MOV.pop} flex size-12 items-center justify-center rounded-full bg-verde font-titulo text-lead text-bege`}
              >
                {indice + 1}
              </span>
              <div
                className={`${MOV.revealLinha} flex flex-col items-center gap-3.5`}
                style={{ "--mov-i": indice } as CSSProperties}
              >
                <h3 className="text-h3 font-semibold">{etapa.nome}</h3>
                <p className="max-w-prosa-nota text-nota">{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Secao>
  );
}
