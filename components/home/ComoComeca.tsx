import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { PASSOS } from "@/lib/conteudo/passos";
import home1 from "@/public/fotos/home-1.jpg";

/** §Home 5 · Como começa. Abaixo de `lg` o cabeçalho e a foto centralizam. */
export function ComoComeca() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="circulo"
          cor="marrom"
          posicao="top-10 -right-15"
          largura="w-[260px]"
          opacidade="opacity-12"
        />
      }
    >
      <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <h2 className="text-h2 font-medium">
            Toda jornada começa com uma <em>conversa</em>
          </h2>
          <p className="max-w-prosa-longa text-lead">
            Você não precisa saber de antemão qual área procurar.
            <br />A gente ajuda a encontrar o caminho.
          </p>
        </div>
        <Image
          src={home1}
          alt="Recepção da Clínica Maya"
          sizes="300px"
          className="aspect-[3/2] w-[300px] max-w-full justify-self-center rounded-card object-cover object-[50%_25%] lg:justify-self-end"
        />
      </div>
      <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-0">
        <span
          aria-hidden="true"
          className="absolute top-[23px] right-[16.6%] left-[16.6%] hidden h-px bg-marrom/35 lg:block"
        />
        {PASSOS.map((passo, indice) => (
          <li
            key={passo.titulo}
            className="relative flex flex-col items-center gap-3.5 text-center lg:px-7"
          >
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-full bg-verde font-titulo text-lead text-bege"
            >
              {indice + 1}
            </span>
            <h3 className="text-h3 font-semibold">{passo.titulo}</h3>
            <p className="max-w-prosa-nota text-corpo">{passo.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
