import type { ReactNode } from "react";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

type AberturaProps = {
  /** Fileira de chips do filtro (client component), renderizada sob o lead. */
  children?: ReactNode;
};

/** §Blog · Lista · Abertura (fundo bege). Abaixo de `lg` tudo centraliza. */
export function Abertura({ children }: AberturaProps) {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Blog da Clínica <em>Maya</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Conteúdo escrito pela nossa equipe, para você entender o próprio corpo sem alarmismo e sem
          promessas.
        </p>
        {children && <div className="mt-3">{children}</div>}
      </Nevoa>
    </Secao>
  );
}
