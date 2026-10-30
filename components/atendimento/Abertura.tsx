import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";

/** §Atendimento on-line 1 · Abertura. Abaixo de `lg` título e lead centralizam, como nas demais aberturas. */
export function Abertura() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-top-[70px] -right-15"
          largura="w-64 lg:w-[340px]"
          opacidade="opacity-35"
        />
      }
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <h1 className="max-w-3xl text-h1 font-normal">
        O mesmo cuidado, onde você <em>estiver</em>
      </h1>
      <p className="max-w-prosa-longa text-lead">
        Consultas on-line de medicina e nutrição para todo o Brasil, com a mesma escuta e a mesma
        atenção do atendimento presencial.
      </p>
    </Secao>
  );
}
