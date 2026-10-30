import { CirculoMaya } from "@/components/ui/CirculoMaya";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { PILARES } from "@/lib/conteudo/pilares";
import { MOV } from "@/lib/movimento";

/**
 * §Home 4 · Método e Círculo Maya. Abaixo de `lg`, título, lead e link
 * centralizam; a lista de pilares continua alinhada à esquerda (lista com
 * marcadores centralizada lê mal), só com a largura limitada e centrada.
 *
 * Regra 9 do mapa: nenhum grafismo (nem campo) na região do símbolo. O
 * grafismo-4 fica na base, à direita, espelhado: as pontas cortadas dele
 * (esquerda e base) caem fora da folha (2.7). Abaixo de `lg` o símbolo ocupa
 * o topo da seção, então o grafismo encolhe para caber na base sem o alcançar.
 *
 * Fase 4 (afinação 1, 2.4): o símbolo é o `CirculoMaya` em SVG, que se monta
 * ao entrar e se desmonta ao sair; pilares entram em sequência de 120ms.
 */
export function Metodo() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-right-25 -bottom-6 -scale-x-100"
          largura="w-[300px] lg:w-[380px]"
          opacidade="opacity-22"
          parallax="mundo"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18"
    >
      <CirculoMaya
        id="circulo-metodo"
        cor="bege"
        fundo="verde"
        rotulo="Círculo Maya: corpo, mente e espírito"
        className="mx-auto w-full max-w-[380px]"
      />
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h2 className={`${MOV.reveal} text-h2 font-medium`}>O Método Maya</h2>
        <p className={`${MOV.reveal} max-w-prosa text-lead`}>
          Corpo, mente e espírito são três dimensões de um mesmo cuidado. No Círculo Maya, ninguém
          caminha sozinha.
        </p>
        <ul
          className={`${MOV.revealStagger} ${MOV.stagger120} flex max-w-prosa flex-col gap-3 text-left`}
        >
          {PILARES.map((pilar) => (
            <li key={pilar.nome} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-bege" />
              <p className="text-corpo">
                <strong className="font-titulo font-semibold">{pilar.nome}.</strong> {pilar.texto}
              </p>
            </li>
          ))}
        </ul>
        <LinkTexto href="/metodo" tom="bege" className={`${MOV.reveal} self-center lg:self-start`}>
          Conhecer o método
        </LinkTexto>
      </div>
    </Secao>
  );
}
