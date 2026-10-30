import type { CSSProperties } from "react";
import { LinhaDesenhada } from "@/components/ui/LinhaDesenhada";
import { Secao } from "@/components/ui/Secao";
import { PASSOS_ONLINE } from "@/lib/conteudo/atendimento";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

/**
 * §Atendimento on-line 2 · Como funciona, passo a passo. `<ol>` de seis
 * passos; o número grande é decorativo (`aria-hidden`), a ordem já está na
 * lista. Duas colunas no mobile, três a partir de `sm`, seis a partir de `lg`.
 * Afinação 1 (2.11): linha do tempo 1 → 6 como as Etapas do Método: o
 * invólucro é o trilho (`--linha`), a linha sob a fileira de números é
 * desenhada por scrub a partir de `lg` (colunas alinhadas à esquerda;
 * `pontos={1}` cobre a largura toda), cada passo revela quando a linha o
 * alcança e o número faz o pop ao entrar. Campo-1 na camada ambiente.
 */
export function ComoFunciona() {
  return (
    <Secao fundo="creme" campo="campo-1">
      <h2 className={`${MOV.reveal} mb-12 text-center text-h2 font-medium lg:text-left`}>
        Como funciona, passo a passo
      </h2>
      <div
        className={`${MOV.linhaTrilho} relative`}
        style={{ "--mov-pontos": PASSOS_ONLINE.length } as CSSProperties}
      >
        <LinhaDesenhada
          direcao="horizontal"
          pontos={1}
          timeline="trilho"
          className="top-11 left-0 hidden h-3 w-full text-marrom/60 lg:block"
        />
        <ol className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {PASSOS_ONLINE.map((passo, indice) => (
            <li key={passo.titulo} className="flex flex-col gap-3">
              <span
                aria-hidden="true"
                {...{ [AO_ENTRAR]: "" }}
                className={`${MOV.pop} origin-left font-titulo text-h2 leading-none text-verde lg:mb-3`}
              >
                {indice + 1}
              </span>
              <div
                className={`${MOV.revealLinha} flex flex-col gap-3`}
                style={{ "--mov-i": indice } as CSSProperties}
              >
                <h3 className="text-h3 font-semibold">{passo.titulo}</h3>
                <p className="text-nota">{passo.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Secao>
  );
}
