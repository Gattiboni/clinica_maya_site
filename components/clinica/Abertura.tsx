import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";

/** §A Clínica 1 · Abertura. Abaixo de `lg` título e lead centralizam, como o hero da Home. */
export function Abertura() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="3"
          cor="marrom"
          posicao="-top-[70px] -right-[90px]"
          largura="w-80 lg:w-[460px]"
          opacidade="opacity-35"
        />
      }
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <h1 className="max-w-3xl text-h1 font-normal">
        Acolher, compreender e <em>transformar</em>
      </h1>
      <p className="max-w-prosa-longa text-lead">
        Essa é a essência da Clínica Maya: um atendimento personalizado e humanizado, onde cada
        pessoa é tratada de forma única, com respeito às suas particularidades, e toda transformação
        se constrói de maneira sustentável, com base em evidências científicas.
      </p>
    </Secao>
  );
}
