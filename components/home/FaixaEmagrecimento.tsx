import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §Home 6 · Faixa emagrecimento (texto da Revisão v2). Abaixo de `lg` texto e botão centralizam. Só `reveal`: é respiro. */
export function FaixaEmagrecimento() {
  return (
    <Secao
      fundo="creme"
      espaco="curto"
      className={`${MOV.revealStagger} grid items-center gap-8 text-center lg:grid-cols-[1fr_auto] lg:gap-12 lg:text-left`}
    >
      <Nevoa className="flex flex-col items-center gap-3 lg:items-start">
        <h2 className="text-h2 font-medium">Emagrecimento saudável, sem radicalismos</h2>
        <p className="max-w-prosa-longa text-lead">
          Na primeira consulta, a Dra. Mayara conhece a sua história e indica o programa de
          acompanhamento que faz mais sentido para você. Além das consultas médicas, pode contar com
          o apoio de nutrição, psicologia e outras áreas da clínica. A decisão é sempre
          compartilhada: nada é imposto ou obrigatório.
        </p>
      </Nevoa>
      <Botao
        href="/emagrecimento"
        variante="contorno"
        className="justify-self-center lg:justify-self-start"
      >
        Saiba mais
      </Botao>
    </Secao>
  );
}
