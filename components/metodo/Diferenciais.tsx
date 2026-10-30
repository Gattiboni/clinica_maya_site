import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { CirculoMaya } from "@/components/ui/CirculoMaya";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { DIFERENCIAIS } from "@/lib/conteudo/metodo";
import { MOV } from "@/lib/movimento";

/** Um fragmento de grafismo por card (recortes por `clip-path`, sem asset novo). */
const FRAGMENTOS = [
  { nome: "3", recorte: 1, posicao: "-top-12 -right-24", largura: "w-72" },
  { nome: "4", recorte: 2, posicao: "-bottom-28 -left-20", largura: "w-64" },
  { nome: "5", recorte: 3, posicao: "-top-10 -left-24", largura: "w-72" },
  { nome: "3", recorte: 4, posicao: "-right-28 -bottom-24", largura: "w-80" },
] as const;

/**
 * §Método 4 · Diferenciais: quatro cards em linha a partir de `lg`, em duas
 * colunas a partir de `sm`. O símbolo corpo-mente-espírito é o `CirculoMaya`
 * (afinação 1, 2.4), que se monta ao entrar e se desmonta ao sair, sobre o
 * creme sólido do canto superior direito (regra 9: sem grafismo nem campo
 * nesta seção, e o slot da folha recorta a sangria das vizinhas); inteiro
 * dentro da folha, nunca cortado. Abaixo de `md` ele cruzaria o título, então
 * não aparece (decisão: símbolo cortado ou sobre texto é pior que ausente).
 * Cards com profundidade, hover e fragmento que acende (2.6). Sem fotos, como no mock.
 */
export function Diferenciais() {
  return (
    <Secao
      fundo="creme"
      grafismo={
        <CirculoMaya
          id="circulo-diferenciais"
          cor="marrom"
          fundo="creme"
          className="absolute top-6 right-[4%] hidden w-56 opacity-30 md:block lg:w-72"
        />
      }
    >
      <CabecalhoSecao titulo="O que torna o método diferente" className={`${MOV.reveal} mb-12`} />
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid gap-5 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {DIFERENCIAIS.map((diferencial, indice) => {
          const fragmento = FRAGMENTOS[indice % FRAGMENTOS.length];
          return (
            <li
              key={diferencial.titulo}
              className={`${MOV.hoverEleva} ${MOV.hoverAcende} flex flex-col gap-3 rounded-card bg-bege px-6 py-7 text-verde`}
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
              <span aria-hidden="true" className="size-9 rounded-full border-2 border-marrom" />
              <h3 className="text-h3 font-semibold">{diferencial.titulo}</h3>
              <p className="text-nota">{diferencial.texto}</p>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
