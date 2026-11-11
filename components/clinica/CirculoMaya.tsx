import { CirculoMaya as Simbolo } from "@/components/ui/CirculoMaya";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

const CITACAO = '"No Círculo Maya, ninguém caminha sozinha."';

/**
 * §A Clínica 4 · Círculo Maya. Abaixo de `lg` o texto centraliza sob o círculo.
 * Fase 4 (afinação 1, 2.4): o símbolo é o `CirculoMaya` em SVG, que se monta
 * ao entrar e se desmonta ao sair; texto e citação entram em sequência.
 * Regra 9 do mapa: disco verde opaco atrás do símbolo, para a camada global
 * de grafismos passar por trás dele.
 */
export function CirculoMaya() {
  return (
    <Secao
      fundo="verde"
      className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18"
    >
      <Simbolo
        id="circulo-clinica"
        cor="bege"
        fundo="verde"
        rotulo="Círculo Maya: corpo, mente e espírito"
        className="mx-auto w-full max-w-[360px] rounded-full bg-verde"
      />
      <Nevoa
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">O Círculo Maya</h2>
        <p className="max-w-prosa-curta text-lead">
          Corpo, mente e espírito, três dimensões de um mesmo cuidado, que só se transformam quando
          caminham juntas.
        </p>
        <p className="font-titulo text-h3 leading-normal italic">{CITACAO}</p>
      </Nevoa>
    </Secao>
  );
}
