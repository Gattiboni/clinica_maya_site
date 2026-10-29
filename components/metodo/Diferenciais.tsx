import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { DIFERENCIAIS } from "@/lib/conteudo/metodo";

/**
 * §Método 4 · Diferenciais: quatro cards em linha a partir de `lg`, em duas
 * colunas a partir de `sm`. O símbolo corpo-mente-espírito é decorativo
 * (`alt=""`) e fica sobre o creme sólido: sem grafismo nesta seção nem
 * sangria das vizinhas (regra 9 do mapa). Sem fotos, como no mock.
 */
export function Diferenciais() {
  return (
    <Secao
      fundo="creme"
      grafismo={
        <Grafismo
          nome="circulo"
          cor="marrom"
          posicao="-top-15 -right-20"
          largura="w-[300px]"
          opacidade="opacity-14"
        />
      }
    >
      <CabecalhoSecao titulo="O que torna o método diferente" className="mb-12" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DIFERENCIAIS.map((diferencial) => (
          <li
            key={diferencial.titulo}
            className="flex flex-col gap-3 rounded-card bg-bege px-6 py-7 text-verde"
          >
            <span aria-hidden="true" className="size-9 rounded-full border-2 border-marrom" />
            <h3 className="text-h3 font-semibold">{diferencial.titulo}</h3>
            <p className="text-nota">{diferencial.texto}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
