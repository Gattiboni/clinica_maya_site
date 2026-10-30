import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { MOV } from "@/lib/movimento";

/**
 * §Emagrecimento 1 · Abertura. Abaixo de `lg` título e lead centralizam, como nas demais aberturas.
 * O grafismo-3 tem as pontas cortadas à esquerda e em cima: espelhado e ancorado no canto
 * superior direito, elas caem fora da tela (2.7).
 */
export function Abertura() {
  return (
    <>
      <SpriteGrafismos />
      <Secao
        fundo="bege"
        grafismo={
          <Grafismo
            nome="3"
            cor="marrom"
            posicao="-top-32 -right-[90px] -scale-x-100"
            largura="w-80 lg:w-[460px]"
            opacidade="opacity-35"
            parallax="mundo"
            drift="mundo"
            tilt
          />
        }
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Emagrecimento saudável, sem <em>radicalismos</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. Cada plano
          nasce da sua história.
        </p>
      </Secao>
    </>
  );
}
