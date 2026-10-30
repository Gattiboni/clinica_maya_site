import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { MOV } from "@/lib/movimento";
import clinica3 from "@/public/fotos/clinica-3.jpg";

/**
 * §Método 1 · Abertura. Abaixo de `lg` o texto centraliza e a foto vai para baixo.
 * Fase 4: texto entra na carga; a foto é `priority` (LCP provável da página),
 * então fica sem maskReveal (regra 3 do mapa) e só se move dentro da máscara.
 * O grafismo-4 tem as pontas cortadas à esquerda e embaixo: espelhado e
 * ancorado no canto inferior direito, elas caem fora da tela e atrás da folha
 * seguinte (2.7; antes, no topo direito, a ponta esquerda ficava solta).
 */
export function Abertura() {
  return (
    <>
      <SpriteGrafismos />
      <Secao
        fundo="bege"
        grafismo={
          <Grafismo
            nome="4"
            cor="marrom"
            posicao="-right-15 -bottom-24 -scale-x-100"
            largura="w-64 lg:w-80"
            opacidade="opacity-35"
            parallax="mundo"
            drift="mundo"
          />
        }
        className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
      >
        <div
          className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
        >
          <h1 className="text-h1 font-medium">Método Maya</h1>
          <p className="max-w-prosa-longa text-lead">
            Humanização e ciência caminhando juntas: um jeito de cuidar que combina evidências
            científicas com escuta ativa, empatia e respeito pelo seu ritmo.
          </p>
        </div>
        <div
          className={`${MOV.mascara} aspect-[4/3] w-full max-w-md justify-self-center rounded-card lg:max-w-[420px] lg:justify-self-end`}
        >
          <Image
            src={clinica3}
            alt="Detalhe do consultório"
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 28rem, 100vw"
            className={`${MOV.parallaxMidia} h-full w-full object-cover object-[50%_55%]`}
          />
        </div>
      </Secao>
    </>
  );
}
