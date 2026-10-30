import { tempoLeitura } from "@/components/blog/tempoLeitura";
import { urlFor } from "@/lib/sanity/image";
import type { PostSanity } from "@/lib/sanity/queries";

export const LARGURA_CAPA_CARD = 800;
export const ALTURA_CAPA_CARD = 500;

/** O que um card de post precisa, já resolvido no servidor e serializável para o filtro no cliente. */
export type DadosCardPost = {
  id: string;
  slug: string;
  titulo: string;
  capa: { src: string; alt: string } | null;
  /** Títulos das categorias do post; o card exibe a primeira, o filtro considera todas. */
  categorias: string[];
  minutos: number;
  area: string | null;
  resumo: string | null;
};

/**
 * Reduz um `PostSanity` ao que o card mostra: URL da capa montada com hotspot
 * e crop, tempo de leitura calculado do corpo, categorias e área da autora.
 * Capa sem `alt` no documento usa o título do post (Decisão 004, item 5).
 */
export function dadosCardPost(post: PostSanity): DadosCardPost {
  const titulo = post.title ?? "";
  const src = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage)?.width(LARGURA_CAPA_CARD).height(ALTURA_CAPA_CARD).url()
    : null;

  return {
    id: post._id,
    slug: post.slug ?? "",
    titulo,
    capa: src ? { src, alt: post.mainImage?.alt || titulo } : null,
    categorias: (post.categories ?? []).flatMap((c) => (c.title ? [c.title] : [])),
    minutos: tempoLeitura(post.body),
    area: post.author?.area ?? null,
    resumo: post.excerpt ?? null,
  };
}
