import Image from "next/image";
import Link from "next/link";
import { tempoLeitura } from "@/components/blog/tempoLeitura";
import { urlFor } from "@/lib/sanity/image";
import type { PostSanity } from "@/lib/sanity/queries";

type CardPostProps = {
  post: PostSanity;
};

const LARGURA_CAPA = 800;
const ALTURA_CAPA = 500;

/**
 * Card de post: capa (se houver), "Categoria · N min", título e "Por {área da autora}".
 * Capa sem `alt` no documento usa o título do post (Decisão 004, item 5).
 */
export function CardPost({ post }: CardPostProps) {
  const titulo = post.title ?? "";
  const capa = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage)?.width(LARGURA_CAPA).height(ALTURA_CAPA).url()
    : null;
  const categoria = post.categories?.find((c) => c.title)?.title;
  const minutos = `${tempoLeitura(post.body)} min`;
  const area = post.author?.area;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex w-full flex-col gap-4 text-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
    >
      {capa && (
        <Image
          src={capa}
          alt={post.mainImage?.alt || titulo}
          width={LARGURA_CAPA}
          height={ALTURA_CAPA}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full rounded-card object-cover"
        />
      )}
      <div className="flex flex-col gap-2">
        <span className="text-legenda font-bold tracking-rotulo uppercase">
          {categoria ? `${categoria} · ${minutos}` : minutos}
        </span>
        <h3 className="text-h3 font-semibold">{titulo}</h3>
        {area && <span className="text-nota text-marrom">Por {area}</span>}
      </div>
    </Link>
  );
}
