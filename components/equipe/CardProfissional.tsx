import Image from "next/image";
import Link from "next/link";
import { idPopup, INSTAGRAM_URL, type Profissional } from "@/lib/conteudo/equipe";
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
 * "Ver mais →" do rodapé do card. O `::after` estica a área de clique para o
 * card inteiro (o card é `relative` pelo `hover-eleva`), então o card todo
 * funciona como o botão ou o link, sem que o resto do conteúdo fique dentro
 * do elemento interativo: o Instagram continua um `<a>` irmão, acima da área
 * esticada.
 */
const CLASSES_VER_MAIS = `cursor-pointer text-nota font-bold whitespace-nowrap text-verde underline-offset-3 hover:underline after:absolute after:inset-0 after:rounded-card after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-verde`;

/**
 * Card de profissional (copy v1.3.1): foto 4:3, nome, "título · registro",
 * resumo, modalidade e Instagram. Três estados:
 *
 * (a) com bio longa: o card inteiro abre o pop-up da profissional
 *     (`<button popovertarget>`, sem JavaScript), com "Ver mais →" discreto no
 *     rodapé e nome acessível "Ver mais sobre {nome}";
 * (b) com `href` (Dra. Mayara): o card inteiro é um link para a página dela,
 *     com o mesmo "Ver mais →";
 * (c) sem bio e sem `href` (Beatriz Nietsche, até mandar a versão longa): card estático, sem
 *     botão e com cursor padrão.
 *
 * Hover (Fase 4): o card levanta com rotateX 2° e a foto faz zoom 1,03.
 */
export function CardProfissional({ profissional, fundo }: CardProfissionalProps) {
  const { nome, titulo, registro, resumo, modalidade, instagram, foto, bio, href } = profissional;
  const rotulo = `Ver mais sobre ${nome}`;
  const verMais = (
    <>
      Ver mais <span aria-hidden="true">→</span>
    </>
  );

  return (
    <div
      className={`${MOV.hoverEleva} ${MOV.hoverZoom} flex w-full flex-col overflow-hidden rounded-card border border-marrom/18 text-verde ${FUNDOS[fundo]}`}
    >
      <Image
        src={foto.src}
        alt={nome}
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className={`${MOV.zoomFoto} aspect-[4/3] w-full object-cover`}
        style={{ objectPosition: foto.posicao }}
      />
      <div className="flex flex-1 flex-col gap-2 px-7 pt-6 pb-7">
        <h3 className="text-h3 font-semibold">{nome}</h3>
        <p className="text-legenda font-bold tracking-rotulo text-marrom uppercase">
          {titulo} · {registro}
        </p>
        <p className="flex-1 text-nota">{resumo}</p>
        <span className="mt-2 self-start rounded-pilula border border-marrom/35 px-3.5 py-1 text-legenda font-bold tracking-rotulo uppercase">
          {modalidade}
        </span>
        <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <a
            href={`${INSTAGRAM_URL}${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-nota font-bold break-all underline underline-offset-3 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
          >
            @{instagram}
          </a>
          {bio ? (
            <button
              type="button"
              popoverTarget={idPopup(profissional)}
              aria-label={rotulo}
              className={CLASSES_VER_MAIS}
            >
              {verMais}
            </button>
          ) : href ? (
            <Link href={href} aria-label={rotulo} className={CLASSES_VER_MAIS}>
              {verMais}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
