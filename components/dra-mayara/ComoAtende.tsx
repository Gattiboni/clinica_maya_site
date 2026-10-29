import { Secao } from "@/components/ui/Secao";

/** §Dra. Mayara 3 · Como ela atende. Única página onde a duração aproximada da consulta aparece. */
export function ComoAtende() {
  return (
    <Secao
      fundo="bege"
      espaco="curto"
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <h2 className="text-h2 font-medium">Como ela atende</h2>
      <p className="max-w-prosa-longa text-lead">
        Consultas de aproximadamente 1h30, que olham além da balança: sono, rotina, história,
        ansiedade e relação com a comida fazem parte da conversa. Quando faz sentido, o cuidado é
        integrado com nutrição, psicologia e outras áreas da clínica.
      </p>
    </Secao>
  );
}
