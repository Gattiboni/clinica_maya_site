import Image from "next/image";
import { INSTAGRAM_URL, type Profissional } from "@/lib/conteudo/equipe";
import { MOV } from "@/lib/movimento";

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
 * Hover (Fase 4): o card levanta com rotateX 2° e a foto faz zoom 1,03 dentro
 * do card. Sem affordance de clique (cursor padrão, nome sem sublinhado): não
 * há bio ainda.
 *
 * Ponto de extensão (bios, lote futuro): o card vira `<button type="button"
 * popoverTarget={`bio-${id}`}>` e a bio entra num `<div popover>` com o mesmo
 * `modal-prosa` da Política de privacidade (`components/politica/ModalPolitica`),
 * sem JavaScript; aí sim o nome ganha sublinhado e o cursor, pointer.
 */
export function CardProfissional({ profissional, fundo }: CardProfissionalProps) {
  const { nome, atende, modalidade, instagram, foto } = profissional;

  return (
    <div
      className={`${MOV.hoverEleva} ${MOV.hoverZoom} flex w-full flex-col overflow-hidden rounded-card border border-marrom/18 text-verde ${FUNDOS[fundo]}`}
    >
      {foto && (
        <Image
          src={foto.src}
          alt={nome}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className={`${MOV.zoomFoto} aspect-[4/3] w-full object-cover`}
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
