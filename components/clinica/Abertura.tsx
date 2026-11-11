import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/**
 * §A Clínica 1 · Abertura. Abaixo de `lg` título e lead centralizam, como o
 * hero da Home.
 */
export function Abertura() {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Acolher, compreender e <em>transformar</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Essa é a essência da Clínica Maya: um atendimento personalizado e humanizado, onde cada
          pessoa é tratada de forma única, com respeito às suas particularidades, e toda
          transformação se constrói de maneira sustentável, com base em evidências científicas.
        </p>
      </Nevoa>
    </Secao>
  );
}
