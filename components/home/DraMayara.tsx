import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";

/**
 * §Home 7 · Dra. Mayara. Abaixo de `lg` foto e texto centralizam.
 * Fase 4 (mapa §2 H7): foto abre de baixo para cima e se move dentro da
 * máscara; grafismo-5 atrás da foto, no mundo, com parallax e drift; as
 * pontas cortadas dele (em cima) ficam na borda da folha (2.7). Cabe em
 * 100svh no desktop, então é a folha que usa o recuo curto como as demais.
 */
export function DraMayara() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-top-16 -left-24 lg:left-[8%]"
          largura="w-72 lg:w-[360px]"
          opacidade="opacity-18"
          parallax="mundo"
          drift="mundo"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-18"
    >
      <div
        className={`${MOV.mascara} ${MOV.maskCima} aspect-[4/5] w-full max-w-[380px] justify-self-center rounded-3xl rounded-tr-[160px] lg:justify-self-start`}
      >
        <Image
          src={equipeMayara}
          alt="Dra. Mayara Brasil"
          sizes="(min-width: 1024px) 380px, 100vw"
          className={`${MOV.parallaxMidia} h-full w-full object-cover object-[50%_15%]`}
        />
      </div>
      <div
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Dra. Mayara Brasil</h2>
        <p className="max-w-prosa text-lead leading-relaxed">
          Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya. Reuniu na
          clínica profissionais que compartilham o mesmo jeito de cuidar: com ciência, escuta e sem
          julgamentos.
        </p>
        <p className="text-nota font-bold tracking-rotulo">
          Médica de Família · CRM SC 21112 · RQE 22484
        </p>
        <LinkTexto href="/dra-mayara-brasil" className="self-center lg:self-start">
          Conhecer a Dra. Mayara
        </LinkTexto>
      </div>
    </Secao>
  );
}
