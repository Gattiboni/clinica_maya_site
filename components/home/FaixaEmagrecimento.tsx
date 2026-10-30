import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §Home 6 · Faixa emagrecimento. Abaixo de `lg` texto e botão centralizam. Só `reveal` e o campo-1 na camada ambiente: é respiro. */
export function FaixaEmagrecimento() {
  return (
    <Secao
      fundo="creme"
      espaco="curto"
      campo="campo-1"
      className={`${MOV.revealStagger} grid items-center gap-8 text-center lg:grid-cols-[1fr_auto] lg:gap-12 lg:text-left`}
    >
      <div className="flex flex-col items-center gap-3 lg:items-start">
        <h2 className="text-h2 font-medium">Emagrecimento saudável, sem radicalismos</h2>
        <p className="max-w-prosa-longa text-lead">
          Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. A Dra.
          Mayara indica o caminho depois da primeira consulta.
        </p>
      </div>
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
