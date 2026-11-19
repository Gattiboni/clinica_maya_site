import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { AREAS_EMAGRECIMENTO } from "@/lib/conteudo/emagrecimento";
import { MOV } from "@/lib/movimento";

/**
 * §Emagrecimento 3 · Quem pode fazer parte do seu plano. Cada card leva à
 * âncora da área em /equipe; no hover, o card levanta, como nas Áreas da
 * Home (sem o fragmento de grafismo desde a Revisão v3, lote C). Cards
 * entram em sequência com profundidade (2.6).
 */
export function QuemFazParte() {
  return (
    <Secao fundo="bege">
      <div className="mx-auto mb-11 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo="Quem pode fazer parte do seu plano"
          lead="O acompanhamento é médico e nutricional. A psicologia entra quando faz sentido para você e para a equipe."
          className={MOV.reveal}
        />
      </div>
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {AREAS_EMAGRECIMENTO.map((area) => {
          return (
            <li
              key={area.nome}
              className={`${MOV.hoverEleva} flex flex-col gap-3 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde`}
            >
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
