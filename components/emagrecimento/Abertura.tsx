import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";

/** §Emagrecimento 1 · Abertura. Abaixo de `lg` título e lead centralizam, como nas demais aberturas. */
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
        Emagrecimento saudável, sem <em>radicalismos</em>
      </h1>
      <p className="max-w-prosa-longa text-lead">
        Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. Cada plano
        nasce da sua história.
      </p>
    </Secao>
  );
}
