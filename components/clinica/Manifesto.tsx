import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { MANIFESTO } from "@/lib/conteudo/manifesto";

/** Blocos 1 e 3 em verde, bloco 2 em bege, como no mock. */
const FUNDOS_BLOCO = [
  "bg-verde text-bege",
  "border border-marrom/25 bg-bege text-verde",
  "bg-verde text-bege",
];

/** §A Clínica 2 · Manifesto. */
export function Manifesto() {
  return (
    <Secao
      fundo="creme"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-bottom-[110px] -left-[90px]"
          largura="w-[300px]"
          opacidade="opacity-22"
        />
      }
    >
      <CabecalhoSecao
        titulo="O nosso manifesto"
        lead="Por que existimos, como cuidamos e o que oferecemos."
        className="mb-12"
      />
      <ul className="grid gap-6 lg:grid-cols-3">
        {MANIFESTO.map((bloco, indice) => (
          <li
            key={bloco.eyebrow}
            className={`flex flex-col gap-3.5 rounded-card px-8 py-9 ${FUNDOS_BLOCO[indice]}`}
          >
            <span className="text-eyebrow font-bold uppercase">{bloco.eyebrow}</span>
            <h3 className="text-h3 font-semibold">{bloco.titulo}</h3>
            <p className="text-nota">{bloco.texto}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
