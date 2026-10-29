import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { AREAS_EMAGRECIMENTO } from "@/lib/conteudo/emagrecimento";

/** §Emagrecimento 3 · Quem pode fazer parte do seu plano. Cada card leva à âncora da área em /equipe. */
export function QuemFazParte() {
  return (
    <Secao fundo="bege">
      <CabecalhoSecao
        titulo="Quem pode fazer parte do seu plano"
        lead="O acompanhamento é médico e nutricional. A psicologia entra quando faz sentido para você e para a equipe."
        className="mb-11"
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS_EMAGRECIMENTO.map((area) => (
          <li
            key={area.nome}
            className="flex flex-col gap-3 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde"
          >
            <h3 className="text-h3 font-semibold">{area.nome}</h3>
            <p className="flex-1 text-nota">{area.texto}</p>
            <LinkTexto href={area.href} className="self-start">
              Conhecer
            </LinkTexto>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
