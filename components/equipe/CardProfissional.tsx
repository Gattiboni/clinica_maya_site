import Image from "next/image";
import { INSTAGRAM_URL, type Profissional } from "@/lib/conteudo/equipe";

type CardProfissionalProps = {
  profissional: Profissional;
  /** Fundo do card: o oposto do fundo da seção, como no mock. */
  fundo: "bege" | "creme";
};

const FUNDOS = {
  bege: "bg-bege",
  creme: "bg-creme",
};

/**
 * Card de profissional: foto 4:3 (quando existe), nome, para quem atende,
 * modalidade e Instagram (quando existe). Sem foto, o card começa direto no
 * nome: nada de silhueta ou caixa vazia; a grade da seção mantém o alinhamento.
 */
export function CardProfissional({ profissional, fundo }: CardProfissionalProps) {
  const { nome, atende, modalidade, instagram, foto } = profissional;

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-card border border-marrom/18 text-verde ${FUNDOS[fundo]}`}
    >
      {foto && (
        <Image
          src={foto.src}
          alt={nome}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover"
          style={{ objectPosition: foto.posicao }}
        />
      )}
      <div className="flex flex-1 flex-col gap-2 px-7 pt-6 pb-7">
        <h3 className="text-h3 font-semibold">{nome}</h3>
        <p className="flex-1 text-nota">{atende}</p>
        <span className="mt-2 self-start rounded-pilula border border-marrom/35 px-3.5 py-1 text-legenda font-bold tracking-rotulo uppercase">
          {modalidade}
        </span>
        {instagram && (
          <a
            href={`${INSTAGRAM_URL}${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 self-start text-nota font-bold underline underline-offset-3 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
          >
            @{instagram}
          </a>
        )}
      </div>
    </div>
  );
}
