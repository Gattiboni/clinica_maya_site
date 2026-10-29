import { defineQuery } from "next-sanity";

/**
 * Queries GROQ do blog, na forma das queries da Spinhardi (`src/lib/sanity/queries.ts`).
 *
 * O cliente lê com `perspective: "published"`, então tudo que retorna aqui é
 * publicado. Só posts com slug entram. A ordem usa `publishedAt` com `_createdAt`
 * como reserva, para um post sem data não sumir da lista.
 */
const POST_PROJECTION = `{
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  ogImage,
  body,
  author->{ name, area, image },
  categories[]->{ title },
  seoTitle,
  seoDescription
}`;

const POSTS_PUBLICADOS = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)`;

/** Todos os posts publicados, do mais recente ao mais antigo (listagem do blog, Lote 3). */
export const POSTS_QUERY = defineQuery(`${POSTS_PUBLICADOS} ${POST_PROJECTION}`);

/** Um post pelo slug (página do post, Lote 3). */
export const POST_POR_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`,
);

/** Os 3 posts mais recentes (seção Blog da Home). */
export const POSTS_HOME_QUERY = defineQuery(`${POSTS_PUBLICADOS} [0...3] ${POST_PROJECTION}`);

/** Imagem do Sanity com o `alt` aninhado (campo `mainImage` do schema). */
export type ImagemSanity = {
  _type?: "image";
  asset?: { _ref?: string; _type?: string };
  alt?: string | null;
  hotspot?: unknown;
  crop?: unknown;
};

/** Bloco do Portable Text; só o que a contagem de palavras precisa. */
export type BlocoTexto = {
  _type: string;
  children?: { text?: string }[];
};

/** Forma crua que `POST_PROJECTION` entrega. Campos vazios no Studio chegam `null`. */
export type PostSanity = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: ImagemSanity | null;
  ogImage: ImagemSanity | null;
  body: BlocoTexto[] | null;
  author: { name: string | null; area: string | null; image: ImagemSanity | null } | null;
  categories: { title: string | null }[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
};
