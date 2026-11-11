import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/**
 * §Atendimento on-line 1 · Abertura. Abaixo de `lg` título e lead centralizam,
 * como nas demais aberturas.
 */
export function Abertura() {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          O mesmo cuidado, onde você <em>estiver</em>
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Consultas on-line de medicina e nutrição para todo o Brasil, com a mesma escuta e a mesma
          atenção do atendimento presencial.
        </p>
      </Nevoa>
    </Secao>
  );
}
