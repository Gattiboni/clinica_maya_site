import { Secao } from "@/components/ui/Secao";
import { PASSOS_ONLINE } from "@/lib/conteudo/atendimento";

/**
 * §Atendimento on-line 2 · Como funciona, passo a passo. `<ol>` de seis
 * passos; o número grande é decorativo (`aria-hidden`), a ordem já está na
 * lista. Duas colunas no mobile, três a partir de `sm`, seis a partir de `lg`.
 */
export function ComoFunciona() {
  return (
    <Secao fundo="creme">
      <h2 className="mb-12 text-center text-h2 font-medium lg:text-left">
        Como funciona, passo a passo
      </h2>
      <ol className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {PASSOS_ONLINE.map((passo, indice) => (
          <li key={passo.titulo} className="flex flex-col gap-3">
            <span aria-hidden="true" className="font-titulo text-h2 leading-none text-verde">
              {indice + 1}
            </span>
            <h3 className="text-h3 font-semibold">{passo.titulo}</h3>
            <p className="text-nota">{passo.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
