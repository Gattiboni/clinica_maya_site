import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { MOV } from "@/lib/movimento";

/**
 * §Atendimento on-line 1 · Abertura. Abaixo de `lg` título e lead centralizam, como nas demais aberturas.
 * O grafismo-5 tem as pontas cortadas em cima: a 128px acima da seção elas ficam acima da viewport (2.7).
 */
export function Abertura() {
  return (
    <>
      <SpriteGrafismos />
      <Secao
        fundo="bege"
        grafismo={
          <Grafismo
            nome="5"
            cor="marrom"
            posicao="-top-32 -right-15"
            largura="w-72 lg:w-[380px]"
            opacidade="opacity-35"
            parallax="mundo"
            drift="mundo"
          />
        }
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          O mesmo cuidado, onde você <em>estiver</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Consultas on-line de medicina e nutrição para todo o Brasil, com a mesma escuta e a mesma
          atenção do atendimento presencial.
        </p>
      </Secao>
    </>
  );
}
