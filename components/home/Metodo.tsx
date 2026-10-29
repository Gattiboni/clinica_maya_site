import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { PILARES } from "@/lib/conteudo/pilares";
import corpoMenteEspiritoClaro from "@/public/marca/corpo-mente-espirito-claro.png";

/**
 * §Home 4 · Método e Círculo Maya. Abaixo de `lg`, título, lead e link
 * centralizam; a lista de pilares continua alinhada à esquerda (lista com
 * marcadores centralizada lê mal), só com a largura limitada e centrada.
 *
 * Regra 9 do mapa: nenhum grafismo na região do símbolo. O grafismo-4 fica na
 * base, à direita (o mock o tem à esquerda, onde cruzava o símbolo), sem
 * deslocamento negativo embaixo: para baixo ele seria bege sobre o bege de
 * "Como começa" (invisível) e tocaria o símbolo decorativo daquela seção.
 * Abaixo de `lg` o símbolo ocupa o topo da seção, então o grafismo encolhe
 * para caber na base sem o alcançar (medido a 375, 768 e 1024).
 */
export function Metodo() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-right-25 bottom-0"
          largura="w-[300px] lg:w-[380px]"
          opacidade="opacity-22"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18"
    >
      <Image
        src={corpoMenteEspiritoClaro}
        alt="Círculo Maya: corpo, mente e espírito"
        sizes="(min-width: 1024px) 380px, 70vw"
        className="mx-auto h-auto w-full max-w-[380px]"
      />
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h2 className="text-h2 font-medium">O Método Maya</h2>
        <p className="max-w-prosa text-lead">
          Corpo, mente e espírito são três dimensões de um mesmo cuidado. No Círculo Maya, ninguém
          caminha sozinha.
        </p>
        <ul className="flex max-w-prosa flex-col gap-3 text-left">
          {PILARES.map((pilar) => (
            <li key={pilar.nome} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-bege" />
              <p className="text-corpo">
                <strong className="font-titulo font-semibold">{pilar.nome}.</strong> {pilar.texto}
              </p>
            </li>
          ))}
        </ul>
        <LinkTexto href="/metodo" tom="bege" className="self-center lg:self-start">
          Conhecer o método
        </LinkTexto>
      </div>
    </Secao>
  );
}
