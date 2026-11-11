import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { AREAS_EQUIPE } from "@/lib/conteudo/equipe";
import { MOV } from "@/lib/movimento";

const CLASSES_CHIP = `${MOV.transicaoHover} inline-block rounded-pilula border border-marrom/35 bg-creme px-4.5 py-2 text-nota font-bold tracking-wide whitespace-nowrap text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde`;

/**
 * §Equipe 1 · Abertura. A fileira de âncoras para as cinco áreas vem do mock
 * (rótulos = nomes das áreas da copy). Abaixo de `lg` tudo centraliza. Fase 4:
 * título, lead e fileira entram na carga; os chips, em sequência de 40ms.
 */
export function Abertura() {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Uma equipe, um plano, <em>você</em> no centro
        </h1>
        <p className="max-w-prosa-longa text-lead">
          Medicina, nutrição, psicologia, terapia e saúde capilar trabalhando de forma integrada: a
          equipe conversa entre si para que o seu cuidado seja um só.
        </p>
        <ul
          className={`${MOV.revealCarga} ${MOV.carga40} ${MOV.cargaApos2} mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start`}
        >
          {AREAS_EQUIPE.map((area) => (
            <li key={area.id}>
              <a href={`#${area.id}`} className={CLASSES_CHIP}>
                {area.nome}
              </a>
            </li>
          ))}
        </ul>
      </Nevoa>
    </Secao>
  );
}
