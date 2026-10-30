import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";
import home2 from "@/public/fotos/home-2.jpg";

/**
 * §Home 1 · Hero. Abaixo de `lg` a coluna de texto centraliza e a foto fica
 * limitada a 28rem de largura e 60% da altura da viewport (escolha deste
 * lote; o mock não tem versão mobile).
 *
 * Fase 4, a capa (mapa §2 H1; afinação 1, 2.2): no desktop o hero cabe em
 * 100svh (padding vertical menor e foto limitada à altura) e é `sticky` real
 * em `top: 0`; no mobile fica preso pela borda inferior por translação. Pelo
 * relógio da entrada de Áreas (`--pos-capa`), a foto recua (0.94, desktop) e
 * sobe dentro da máscara (todas as larguras), o texto esmaece e sobe 24px
 * (mobile: só esmaece nos últimos 30%) e o grafismo-3 inclina. A foto é o
 * LCP: visível desde o primeiro frame, sem maskReveal. Os textos entram em
 * sequência na carga (200ms + 80ms por item) e o grafismo-3 faz o wipe de
 * 1,2s. O grafismo-3 tem as pontas cortadas à esquerda e em cima: no desktop
 * elas ficam atrás da foto e acima da viewport; no mobile ele é espelhado,
 * para as pontas caírem fora da tela à direita (2.7). O grafismo-5 pequeno é o
 * C4 do mapa; vive no slot de grafismo (sob o conteúdo), porque `Secao` não
 * tem camada à frente da mídia. O indicador de rolagem (desktop) some nos
 * primeiros 80px de scroll.
 */
export function Hero() {
  return (
    <>
      <SpriteGrafismos />
      <Secao
        fundo="bege"
        folha="capa"
        espaco="curto"
        grafismo={
          <>
            <Grafismo
              nome="3"
              cor="marrom"
              posicao="-top-32 -right-[90px] max-lg:-scale-x-100 lg:-top-10"
              largura="w-80 lg:w-[560px]"
              opacidade="opacity-35"
              parallax="mundo"
              drift="mundo"
              tilt
              scrub="inclinar"
              wipe
            />
            <Grafismo
              nome="5"
              cor="marrom"
              posicao="-bottom-8 -left-16 lg:left-[46%]"
              largura="w-56"
              opacidade="opacity-15"
              parallax="frente"
              drift="frente"
              gira={false}
              recorte={2}
            />
          </>
        }
        className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-18"
      >
        <div
          className={`${MOV.capaEsmaece} ${MOV.revealCarga} flex flex-col items-center gap-7 text-center lg:items-start lg:text-left`}
        >
          <p className="text-eyebrow font-bold uppercase">Clínica de saúde integral</p>
          <h1 className="text-display font-normal">
            Esteja bem com <em>você</em>
          </h1>
          <p className="max-w-prosa-curta text-lead">
            Medicina, nutrição, psicologia e mais especialidades num só lugar, com uma equipe que
            trabalha junta e um cuidado que começa pela escuta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
            <Botao href="/equipe">Conhecer a equipe</Botao>
          </div>
          <p className="text-nota">Atendimento presencial em Antônio Carlos/SC e também on-line.</p>
          <span aria-hidden="true" className="hidden text-marrom lg:block">
            <svg
              className={MOV.indicadorRolagem}
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
          </span>
        </div>
        <div
          className={`${MOV.mascara} ${MOV.capaRecua} aspect-[4/5] max-h-[60svh] w-full max-w-md justify-self-center rounded-t-[180px] rounded-b-3xl lg:max-h-[calc(100svh-10rem)] lg:max-w-none`}
        >
          <Image
            src={home2}
            alt="Dra. Mayara Brasil"
            priority
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
            className={`${MOV.capaFoto} h-full w-full object-cover object-[50%_20%]`}
          />
        </div>
      </Secao>
    </>
  );
}
