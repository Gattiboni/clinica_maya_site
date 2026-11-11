import { Botao } from "@/components/ui/Botao";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { AVALIACOES, AVALIACOES_GOOGLE_URL } from "@/lib/conteudo/avaliacoes";
import { MOV } from "@/lib/movimento";

/**
 * §Home · O que dizem as pacientes (Revisão v2), entre Dra. Mayara e Blog.
 * Três avaliações públicas do Google, transcritas literalmente, em cartões
 * creme sobre a folha bege, com a mesma profundidade dos demais cards (entram
 * em sequência com rotateX, levantam no hover). Sem estrelas, sem nota
 * numérica e sem logotipo: só a aspa decorativa, o texto e o nome. O botão
 * leva à página de avaliações no Google, em nova aba (`Botao` trata link
 * externo com `rel` seguro).
 */
export function Avaliacoes() {
  return (
    <Secao fundo="bege">
      <Nevoa className="mx-auto mb-12 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo="O que dizem as pacientes"
          lead="Avaliações públicas deixadas no Google."
          className={MOV.reveal}
        />
      </Nevoa>
      <ul className={`${MOV.revealStagger} ${MOV.profundo} grid gap-6 lg:grid-cols-3`}>
        {AVALIACOES.map((avaliacao) => (
          <li key={avaliacao.nome} className="flex">
            <figure
              className={`${MOV.hoverEleva} flex w-full flex-col gap-4 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde`}
            >
              <span
                aria-hidden="true"
                className="h-7 font-titulo text-display leading-none text-marrom/55"
              >
                “
              </span>
              <blockquote className="flex-1 text-corpo">
                <p>{avaliacao.texto}</p>
              </blockquote>
              <figcaption className="border-t border-marrom/20 pt-4 text-nota font-bold">
                {avaliacao.nome}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className={`${MOV.reveal} mt-10 flex justify-center`}>
        <Botao href={AVALIACOES_GOOGLE_URL} variante="contorno">
          Ver todas as avaliações no Google
        </Botao>
      </div>
    </Secao>
  );
}
