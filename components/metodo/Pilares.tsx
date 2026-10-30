import { Grafismo } from "@/components/ui/Grafismo";
import { ProximaFolha } from "@/components/ui/ProximaFolha";
import { Secao } from "@/components/ui/Secao";
import { PILARES } from "@/lib/conteudo/pilares";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

const ID_PILAR = "pilar";

/**
 * §Método 2 · Pilares: o momento de cena do site (mapa §3). Bloco verde com o
 * título e o lead (padding compacto: metade do normal, para encostar na pilha),
 * seguido da pilha: quatro folhas verdes `sticky` no mesmo topo, uma por pilar
 * (número grande com pop, nome e texto). Afinação 1 (2.3): a seguinte começa
 * a cobrir a anterior enquanto ela ainda está inteira (trajeto de 65svh por
 * folha e folha de `min(56svh, 32rem)` no desktop; conteúdo + respiro no
 * mobile); a anterior recua 3% em escala e 10% em opacidade; o fundo da pilha
 * é verde como as folhas. O grafismo-3 fica "atrás da pilha": cada folha leva o
 * mesmo grafismo, na mesma posição e na mesma timeline da pilha, então ele se
 * desloca ao longo das quatro como se fosse um só; espelhado, as pontas
 * cortadas dele caem fora da folha (2.7). Botão "próximo" rola até a folha
 * seguinte ficar inteira. Sem o símbolo corpo-mente-espírito, como no mock (o
 * da página fica em Diferenciais, sobre fundo sólido). Sem scroll-driven
 * animations, são cinco faixas verdes em sequência.
 */
export function Pilares() {
  return (
    <>
      <Secao
        fundo="verde"
        espaco="compacto"
        campo="campo-2"
        className={`${MOV.revealStagger} flex flex-col items-center gap-3 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Os quatro pilares</h2>
        <p className="max-w-prosa text-lead">O que sustenta cada jornada dentro da clínica.</p>
      </Secao>
      <div className={`${MOV.stack} bg-verde`}>
        {PILARES.map((pilar, indice) => (
          <Secao
            key={pilar.nome}
            id={`${ID_PILAR}-${indice + 1}`}
            fundo="verde"
            folha="pilha"
            grafismo={
              <Grafismo
                nome="3"
                cor="bege"
                posicao="-top-20 -right-30 -scale-x-100"
                largura="w-80 lg:w-[460px]"
                opacidade="opacity-18"
                scrub="pilha"
              />
            }
            className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16"
          >
            <span
              aria-hidden="true"
              {...{ [AO_ENTRAR]: "" }}
              className={`${MOV.pop} mx-auto font-titulo text-display leading-none text-bege/60 lg:mx-0 lg:text-[9rem]`}
            >
              {String(indice + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <h3 className="text-h2 font-semibold">{pilar.nome}</h3>
              <p className="max-w-prosa text-lead">{pilar.textoLongo}</p>
            </div>
            {indice < PILARES.length - 1 && (
              <ProximaFolha href={`#${ID_PILAR}-${indice + 2}`} tom="bege" />
            )}
          </Secao>
        ))}
      </div>
    </>
  );
}
