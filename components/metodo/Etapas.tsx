import type { CSSProperties } from "react";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { LinhaDesenhada } from "@/components/ui/LinhaDesenhada";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { ETAPAS } from "@/lib/conteudo/metodo";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

/**
 * §Método 3 · Etapas como linha do tempo animada. Círculos numerados ligados
 * por uma linha a partir de `lg`.
 *
 * Afinação 2 (achado: a coreografia por scrub existia, mas cabia em ~370px de
 * rolagem com a seção ainda entrando por baixo, e os quatro números faziam o
 * pop juntos; passava despercebida). Agora é de tempo, disparada uma vez
 * quando o trilho entra inteiro na tela (gatilho `linha-gatilho`, marcado
 * pelo `AoEntrar`): a linha se desenha de 1 a 4, cada número faz o pop quando
 * a linha o alcança (`--mov-t`, a fração do percurso em que ele está) e o card
 * desliza da linha (translateX 24px → 0) logo depois do número. Abaixo de
 * `lg` não há linha: cada número faz o pop e cada card entra ao aparecer.
 * Padding compacto, para encostar na pilha dos pilares.
 */
export function Etapas() {
  const ultimo = ETAPAS.length - 1;

  return (
    <Secao fundo="bege" espaco="compacto">
      <Nevoa className="mx-auto mb-14 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo={
            <>
              As quatro etapas da <em>jornada</em>
            </>
          }
          lead="Da primeira conversa à consolidação dos novos hábitos."
          className={MOV.reveal}
        />
      </Nevoa>
      <Nevoa className={MOV.linhaTrilho}>
        <span aria-hidden="true" {...{ [AO_ENTRAR]: "" }} className={MOV.linhaGatilho} />
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
              style={{ "--mov-t": indice / ultimo } as CSSProperties}
            >
              <span
                aria-hidden="true"
                {...{ [AO_ENTRAR]: "" }}
                className={`${MOV.pop} ${MOV.linhaNumero} flex size-12 items-center justify-center rounded-full bg-verde font-titulo text-lead text-bege`}
              >
                {indice + 1}
              </span>
              <div className={`${MOV.linhaCard} flex flex-col items-center gap-3.5`}>
                <h3 className="text-h3 font-semibold">{etapa.nome}</h3>
                <p className="max-w-prosa-nota text-nota">{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Nevoa>
    </Secao>
  );
}
