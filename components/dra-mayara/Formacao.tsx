import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** Formação da Dra. Mayara (copy v1.3), na ordem da copy. */
const FORMACAO = [
  "Graduação em Medicina · Universidade do Sul de Santa Catarina (UNISUL) · 2014",
  "Título de Especialista em Medicina de Família e Comunidade · SBMFC/AMB",
  "Membra da ABESO · Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica",
] as const;

/** §Dra. Mayara · Formação (copy v1.3, substitui Formação e registro): lista de três itens e a linha de registro. */
export function Formacao() {
  return (
    <Secao fundo="creme" espaco="curto" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Formação</h2>
        <ul className="flex max-w-prosa-longa flex-col gap-3 text-left">
          {FORMACAO.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-marrom" />
              <p className="text-corpo">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-nota font-bold tracking-rotulo">
          Dra. Mayara Brasil Machado · CRM-SC 21112 · RQE 22484 · Medicina de Família e Comunidade
        </p>
      </Nevoa>
    </Secao>
  );
}
