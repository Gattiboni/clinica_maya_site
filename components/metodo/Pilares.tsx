import { ProximaFolha } from "@/components/ui/ProximaFolha";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { PILARES } from "@/lib/conteudo/pilares";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

const ID_PILAR = "pilar";

/**
 * §Método 2 · Pilares: o momento de cena do site (mapa §3). Bloco verde com o
 * título e o lead (padding compacto, para encostar na pilha), seguido da
 * pilha: quatro folhas `sticky` no mesmo topo, uma por pilar.
 *
 * Afinação 2: a pilha tem de ler como quatro cartas distintas, não como uma
 * cor só. As folhas alternam a superfície: 1 e 3 em verde, com texto bege e
 * número em bege; 2 e 4 em verde com um cartão creme interno, texto verde
 * e número em verde. O número é grande (`text-display`) e decorativo. Nenhum
 * grafismo dentro das folhas: a camada global passa atrás da pilha (as folhas
 * são cartas opacas à frente dela). Trajeto de 55svh por folha no desktop; a
 * anterior recua mais (escala 0.95, opacidade 0.85) e a sombra da que sobe é
 * mais forte (tokens `--mov-pilar-*`, classe `stack-pilares`). Botão "próximo"
 * rola até a folha seguinte ficar inteira. Sem scroll-driven animations, são
 * cinco faixas em sequência.
 */
export function Pilares() {
  return (
    <>
      <Secao fundo="verde" espaco="compacto" className="flex flex-col items-center lg:items-start">
        <Nevoa
          className={`${MOV.revealStagger} flex flex-col items-center gap-3 text-center lg:items-start lg:text-left`}
        >
          <h2 className="text-h2 font-medium">Os quatro pilares</h2>
          <p className="max-w-prosa text-lead">O que sustenta cada jornada dentro da clínica.</p>
        </Nevoa>
      </Secao>
      <div className={`${MOV.stack} ${MOV.stackPilares} bg-verde`}>
        {PILARES.map((pilar, indice) => {
          const cartao = indice % 2 === 1;
          return (
            <Secao key={pilar.nome} id={`${ID_PILAR}-${indice + 1}`} fundo="verde" folha="pilha">
              <div
                className={`grid items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-14 ${
                  cartao
                    ? "rounded-card bg-creme px-7 py-9 text-verde shadow-[0_24px_48px_-28px_rgb(0_0_0/0.55)] lg:px-14 lg:py-12"
                    : "lg:px-14"
                }`}
              >
                <span
                  aria-hidden="true"
                  {...{ [AO_ENTRAR]: "" }}
                  className={`${MOV.pop} mx-auto font-titulo text-display leading-none lg:mx-0 ${
                    cartao ? "text-verde" : "text-bege"
                  }`}
                >
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                  <h3 className="text-h2 font-semibold">{pilar.nome}</h3>
                  <p className="max-w-prosa text-lead">{pilar.textoLongo}</p>
                </div>
              </div>
              {indice < PILARES.length - 1 && (
                <div className="grid">
                  <ProximaFolha href={`#${ID_PILAR}-${indice + 2}`} tom="bege" />
                </div>
              )}
            </Secao>
          );
        })}
      </div>
    </>
  );
}
