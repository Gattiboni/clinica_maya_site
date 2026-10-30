import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { BlocoTexto, ImagemSanity } from "@/lib/sanity/queries";

const LARGURA_IMAGEM = 1600;

const CLASSES_LINK =
  "underline underline-offset-4 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde";

type ImagemCorpo = ImagemSanity & { _key?: string };

/** Largura e altura originais codificadas no `_ref` do asset (`image-<id>-<w>x<h>-<ext>`). */
function dimensoesDoRef(ref: string): { largura: number; altura: number } | null {
  const m = /-(\d+)x(\d+)-/.exec(ref);
  return m ? { largura: Number(m[1]), altura: Number(m[2]) } : null;
}

/**
 * Imagem do corpo via `lib/sanity/image.ts`. O schema do `body` ainda não tem
 * campo `alt` (sanity/** fora do escopo do Lote 3a): usa `alt` quando vier e
 * `alt=""` (decorativa) quando não vier. Sem asset ou sem projeto, não renderiza.
 */
function ImagemDoCorpo({ value }: { value: ImagemCorpo }) {
  const ref = value.asset?._ref;
  if (!ref) return null;
  const dimensoes = dimensoesDoRef(ref);
  if (!dimensoes) return null;
  const largura = Math.min(LARGURA_IMAGEM, dimensoes.largura);
  const altura = Math.round((largura * dimensoes.altura) / dimensoes.largura);
  const src = urlFor(value)?.width(largura).url();
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={value.alt ?? ""}
      width={largura}
      height={altura}
      sizes="(min-width: 1024px) 768px, 100vw"
      className="h-auto w-full rounded-card"
    />
  );
}

/**
 * Componentes do Portable Text mapeados para os tokens: títulos (h1 do corpo
 * vira h2, para a página ter um só H1), parágrafos, citação, listas, negrito,
 * itálico, sublinhado, tachado, código, links (externos em nova aba com `rel`
 * seguro) e imagens.
 */
const COMPONENTES: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-lead">{children}</p>,
    h1: ({ children }) => <h2 className="mt-4 text-h2 font-semibold">{children}</h2>,
    h2: ({ children }) => <h2 className="mt-4 text-h2 font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-2 text-h3 font-semibold">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-2 text-lead font-bold">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-marrom pl-6 text-lead italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex list-disc flex-col gap-2 pl-6 text-lead marker:text-marrom">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex list-decimal flex-col gap-2 pl-6 text-lead marker:text-marrom">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u className="underline underline-offset-4">{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => <code className="rounded-md bg-creme px-1.5 py-0.5">{children}</code>,
    link: ({ children, value }) => {
      const href: string = value?.href ?? "";
      const externo = /^https?:\/\//.test(href);
      if (externo) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={CLASSES_LINK}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href || "/"} className={CLASSES_LINK}>
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ImagemDoCorpo,
  },
};

/** Corpo do post em Portable Text, com os componentes da marca. */
export function PortableTextPost({ value }: { value: BlocoTexto[] }) {
  return (
    <div className="flex flex-col gap-6 text-verde">
      <PortableText value={value} components={COMPONENTES} />
    </div>
  );
}
