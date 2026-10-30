import { CirculoMaya as Simbolo } from "@/components/ui/CirculoMaya";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

const CITACAO = '"No Círculo Maya, ninguém caminha sozinha."';

/**
 * §A Clínica 4 · Círculo Maya. Abaixo de `lg` o texto centraliza sob o círculo.
 * Fase 4 (afinação 1, 2.4): o símbolo é o `CirculoMaya` em SVG, que se monta
 * ao entrar e se desmonta ao sair (regra 9: nenhum grafismo nem campo na
 * região dele); texto e citação entram em sequência. O grafismo-4 fica no
 * canto inferior direito, espelhado: as pontas cortadas dele caem fora da
 * folha (2.7).
 */
export function CirculoMaya() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-right-[110px] -bottom-[170px] -scale-x-100"
          largura="w-[360px]"
          opacidade="opacity-22"
          parallax="mundo"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18"
    >
      <Simbolo
        id="circulo-clinica"
        cor="bege"
        fundo="verde"
        rotulo="Círculo Maya: corpo, mente e espírito"
        className="mx-auto w-full max-w-[360px]"
      />
      <div
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">O Círculo Maya</h2>
        <p className="max-w-prosa-curta text-lead">
          Corpo, mente e espírito, três dimensões de um mesmo cuidado, que só se transformam quando
          caminham juntas.
        </p>
        <p className="font-titulo text-h3 leading-normal italic">{CITACAO}</p>
      </div>
    </Secao>
  );
}
