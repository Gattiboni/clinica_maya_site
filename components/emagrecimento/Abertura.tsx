import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/**
 * §Emagrecimento 1 · Abertura. Abaixo de `lg` título e lead centralizam, como
 * nas demais aberturas.
 */
export function Abertura() {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Emagrecimento saudável, sem <em>radicalismos</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Na primeira consulta, a Dra. Mayara conhece a sua história e indica o programa de
          acompanhamento que faz mais sentido para você. Além das consultas médicas, pode contar com
          o apoio de nutrição, psicologia e outras áreas da clínica. A decisão é sempre
          compartilhada: nada é imposto ou obrigatório.
        </p>
      </Nevoa>
    </Secao>
  );
}
