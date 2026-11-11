import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MANIFESTO } from "@/lib/conteudo/manifesto";
import { MOV } from "@/lib/movimento";

/** Blocos 1 e 3 em verde, bloco 2 em bege, como no mock. */
const FUNDOS_BLOCO = [
  "bg-verde text-bege",
  "border border-marrom/25 bg-bege text-verde",
  "bg-verde text-bege",
];

/** Um fragmento de grafismo por bloco (recortes por `clip-path`, sem asset novo), na cor do bloco. */
const FRAGMENTOS = [
  { nome: "3", recorte: 1, posicao: "-top-12 -right-24", largura: "w-72", cor: "bege" },
  { nome: "4", recorte: 2, posicao: "-bottom-28 -left-20", largura: "w-64", cor: "marrom" },
  { nome: "5", recorte: 3, posicao: "-top-10 -left-24", largura: "w-72", cor: "bege" },
] as const;

/**
 * §A Clínica 2 · Manifesto. Blocos entram em sequência de 120ms com
 * profundidade (é leitura, mais lento); no hover levantam e o fragmento do
 * original acende atrás (afinação 1, 2.6).
 */
export function Manifesto() {
  return (
    <Secao fundo="creme">
      <Nevoa className="mx-auto mb-12 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo="O nosso manifesto"
          lead="Por que existimos, como cuidamos e o que oferecemos."
          className={MOV.reveal}
        />
      </Nevoa>
      <ul
        className={`${MOV.revealStagger} ${MOV.stagger120} ${MOV.profundo} grid gap-6 lg:grid-cols-3`}
      >
        {MANIFESTO.map((bloco, indice) => {
          const fragmento = FRAGMENTOS[indice % FRAGMENTOS.length];
          return (
            <li
              key={bloco.eyebrow}
              className={`${MOV.hoverEleva} ${MOV.hoverAcende} flex flex-col gap-3.5 rounded-card px-8 py-9 ${FUNDOS_BLOCO[indice]}`}
            >
              <Grafismo
                nome={fragmento.nome}
                cor={fragmento.cor}
                posicao={fragmento.posicao}
                largura={fragmento.largura}
                opacidade="opacity-0"
                recorte={fragmento.recorte}
                acende
              />
              <span className="text-eyebrow font-bold uppercase">{bloco.eyebrow}</span>
              <h3 className="text-h3 font-semibold">{bloco.titulo}</h3>
              <p className="text-nota">{bloco.texto}</p>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
