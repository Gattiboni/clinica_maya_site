import Image from "next/image";
import { CirculoMaya } from "@/components/ui/CirculoMaya";
import { LinhaDesenhada } from "@/components/ui/LinhaDesenhada";
import { ProximaFolha } from "@/components/ui/ProximaFolha";
import { Secao } from "@/components/ui/Secao";
import { PASSOS } from "@/lib/conteudo/passos";
import { AO_ENTRAR, MOV } from "@/lib/movimento";
import home1 from "@/public/fotos/home-1.jpg";

const ID_PASSO = "passo";

/**
 * §Home 5 · Como começa. Abaixo de `lg` o cabeçalho e a foto centralizam.
 *
 * Fase 4 (mapa §2 H5; afinação 1, 2.3): os três passos viram `stack`, três
 * folhas creme `sticky` que se empilham; a seguinte começa a cobrir a anterior
 * enquanto ela ainda está inteira (trajeto de 65svh por folha no desktop,
 * folha de `min(56svh, 32rem)`; no mobile, conteúdo + respiro). O fundo da
 * pilha é creme como as folhas, então o espaço entre elas é folha contínua. A
 * linha 1 → 3 é desenhada ao longo da pilha (um trilho por folha, no mesmo
 * ponto e na mesma timeline, lido como um só); os números fazem o pop ao
 * entrar; botão "próximo" discreto no desktop rola até a folha seguinte ficar
 * inteira. A foto abre da esquerda para a direita e o símbolo decorativo é o
 * `CirculoMaya` estático no mundo, com parallax, cortado só pela borda da tela.
 */
export function ComoComeca() {
  return (
    <>
      <Secao
        fundo="bege"
        grafismo={
          <span className={`${MOV.parallaxMundo} absolute top-10 -right-15 w-[260px]`}>
            <CirculoMaya
              id="circulo-como-comeca"
              cor="marrom"
              fundo="bege"
              animado={false}
              className="opacity-12"
            />
          </span>
        }
        className="grid items-end gap-8 lg:grid-cols-[1fr_300px] lg:gap-12"
      >
        <div
          className={`${MOV.revealStagger} flex flex-col items-center gap-3 text-center lg:items-start lg:text-left`}
        >
          <h2 className="text-h2 font-medium">
            Toda jornada começa com uma <em>conversa</em>
          </h2>
          <p className="max-w-prosa-longa text-lead">
            Você não precisa saber de antemão qual área procurar.
            <br />A gente ajuda a encontrar o caminho.
          </p>
        </div>
        <Image
          src={home1}
          alt="Recepção da Clínica Maya"
          sizes="300px"
          className={`${MOV.maskDireita} aspect-[3/2] w-[300px] max-w-full justify-self-center rounded-card object-cover object-[50%_25%] lg:justify-self-end`}
        />
      </Secao>
      <div className={`${MOV.stack} bg-creme`}>
        {PASSOS.map((passo, indice) => (
          <Secao
            key={passo.titulo}
            id={`${ID_PASSO}-${indice + 1}`}
            fundo="creme"
            folha="pilha"
            className="grid items-center gap-8 lg:grid-cols-[3rem_auto_1fr] lg:gap-12"
          >
            <div className="relative hidden h-full lg:block">
              <LinhaDesenhada
                direcao="vertical"
                pontos={PASSOS.length}
                timeline="pilha"
                marcadores
                className="inset-0 text-marrom"
              />
            </div>
            <span
              aria-hidden="true"
              {...{ [AO_ENTRAR]: "" }}
              className={`${MOV.pop} mx-auto font-titulo text-display leading-none text-marrom lg:mx-0 lg:text-[8rem]`}
            >
              {indice + 1}
            </span>
            <div className="flex flex-col items-center gap-3.5 text-center lg:items-start lg:text-left">
              <h3 className="text-h2 font-semibold">{passo.titulo}</h3>
              <p className="max-w-prosa text-lead">{passo.texto}</p>
            </div>
            {indice < PASSOS.length - 1 && <ProximaFolha href={`#${ID_PASSO}-${indice + 2}`} />}
          </Secao>
        ))}
      </div>
    </>
  );
}
