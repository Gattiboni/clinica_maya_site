import type { CSSProperties } from "react";
import { LinhaDesenhada } from "@/components/ui/LinhaDesenhada";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { PASSOS_ONLINE } from "@/lib/conteudo/atendimento";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

/**
 * §Atendimento on-line 2 · Como funciona, passo a passo. `<ol>` de seis
 * passos; o número grande é decorativo (`aria-hidden`), a ordem já está na
 * lista. Duas colunas no mobile, três a partir de `sm`, seis a partir de `lg`.
 * Afinação 2: mesma coreografia de tempo das Etapas do Método, de 1 a 6. A
 * partir de `lg`, quando o trilho entra inteiro na tela (`linha-gatilho`), a
 * linha sob a fileira de números se desenha da esquerda para a direita
 * (colunas alinhadas à esquerda; `pontos={1}` cobre a largura toda), cada
 * número faz o pop quando a linha o alcança (`--mov-t`) e o card desliza logo
 * depois. Abaixo de `lg`, pop e entrada por item.
 */
export function ComoFunciona() {
  return (
    <Secao fundo="creme">
      <Nevoa
        elemento="h2"
        className={`${MOV.reveal} mx-auto mb-12 w-fit text-center text-h2 font-medium lg:mx-0 lg:text-left`}
      >
        Como funciona, passo a passo
      </Nevoa>
      <Nevoa className={MOV.linhaTrilho}>
        <span aria-hidden="true" {...{ [AO_ENTRAR]: "" }} className={MOV.linhaGatilho} />
        <LinhaDesenhada
          direcao="horizontal"
          pontos={1}
          timeline="trilho"
          className="top-11 left-0 hidden h-3 w-full text-marrom/60 lg:block"
        />
        <ol className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {PASSOS_ONLINE.map((passo, indice) => (
            <li
              key={passo.titulo}
              className="flex flex-col gap-3"
              style={{ "--mov-t": indice / PASSOS_ONLINE.length } as CSSProperties}
            >
              <span
                aria-hidden="true"
                {...{ [AO_ENTRAR]: "" }}
                className={`${MOV.pop} ${MOV.linhaNumero} origin-left font-titulo text-h2 leading-none text-verde lg:mb-3`}
              >
                {indice + 1}
              </span>
              <div className={`${MOV.linhaCard} flex flex-col gap-3`}>
                <h3 className="text-h3 font-semibold">{passo.titulo}</h3>
                <p className="text-nota">{passo.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Nevoa>
    </Secao>
  );
}
