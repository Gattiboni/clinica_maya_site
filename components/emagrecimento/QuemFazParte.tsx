import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { AREAS_EMAGRECIMENTO } from "@/lib/conteudo/emagrecimento";
import { MOV } from "@/lib/movimento";

/** Um fragmento de grafismo por card (recortes por `clip-path`, sem asset novo). */
const FRAGMENTOS = [
  { nome: "3", recorte: 1, posicao: "-top-12 -right-24", largura: "w-72" },
  { nome: "4", recorte: 2, posicao: "-bottom-28 -left-20", largura: "w-64" },
  { nome: "5", recorte: 3, posicao: "-top-10 -left-24", largura: "w-72" },
] as const;

/**
 * §Emagrecimento 3 · Quem pode fazer parte do seu plano. Cada card leva à
 * âncora da área em /equipe; no hover, o card levanta e o fragmento de
 * grafismo acende atrás dele (hoverAcende), como nas Áreas da Home. Cards
 * entram em sequência com profundidade (2.6).
 */
export function QuemFazParte() {
  return (
    <Secao fundo="bege">
      <CabecalhoSecao
        titulo="Quem pode fazer parte do seu plano"
        lead="O acompanhamento é médico e nutricional. A psicologia entra quando faz sentido para você e para a equipe."
        className={`${MOV.reveal} mb-11`}
      />
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {AREAS_EMAGRECIMENTO.map((area, indice) => {
          const fragmento = FRAGMENTOS[indice % FRAGMENTOS.length];
          return (
            <li
              key={area.nome}
              className={`${MOV.hoverEleva} ${MOV.hoverAcende} flex flex-col gap-3 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde`}
            >
              <Grafismo
                nome={fragmento.nome}
                cor="marrom"
                posicao={fragmento.posicao}
                largura={fragmento.largura}
                opacidade="opacity-0"
                recorte={fragmento.recorte}
                acende
              />
              <h3 className="text-h3 font-semibold">{area.nome}</h3>
              <p className="flex-1 text-nota">{area.texto}</p>
              <LinkTexto href={area.href} className="self-start">
                Conhecer
              </LinkTexto>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
