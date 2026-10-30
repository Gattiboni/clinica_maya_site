import type { ReactNode } from "react";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";

type AberturaProps = {
  /** Fileira de chips do filtro (client component), renderizada sob o lead. */
  children?: ReactNode;
};

/** §Blog · Lista · Abertura (fundo bege, `grafismo-3`). Abaixo de `lg` tudo centraliza. */
export function Abertura({ children }: AberturaProps) {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="3"
          cor="marrom"
          posicao="-top-[70px] -right-[90px]"
          largura="w-80 lg:w-[440px]"
          opacidade="opacity-35"
        />
      }
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <h1 className="max-w-3xl text-h1 font-normal">
        Blog da Clínica <em>Maya</em>
      </h1>
      <p className="max-w-prosa-longa text-lead">
        Conteúdo escrito pela nossa equipe, para você entender o próprio corpo sem alarmismo e sem
        promessas.
      </p>
      {children && <div className="mt-3">{children}</div>}
    </Secao>
  );
}
