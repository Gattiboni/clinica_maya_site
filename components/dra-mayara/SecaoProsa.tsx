import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import type { BlocoProsa } from "@/components/dra-mayara/conteudo";

type SecaoProsaProps = {
  bloco: BlocoProsa;
  fundo: "bege" | "creme";
};

/**
 * Seção de prosa da página da Dra. Mayara (Revisão v3, lote B): título e parágrafos com
 * `reveal`, na largura de prosa longa; o primeiro parágrafo em `lead`, os demais em corpo.
 * Página de confiança, não de espetáculo. Mesmo padrão das seções que substitui (Sobre, Como
 * é a consulta).
 */
export function SecaoProsa({ bloco, fundo }: SecaoProsaProps) {
  return (
    <Secao fundo={fundo} className="flex flex-col items-center lg:items-start">
      <div
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">{bloco.titulo}</h2>
        {bloco.paragrafos.map((paragrafo, indice) => (
          <p
            key={paragrafo}
            className={`max-w-prosa-longa ${indice === 0 ? "text-lead" : "text-corpo"}`}
          >
            {paragrafo}
          </p>
        ))}
      </div>
    </Secao>
  );
}
