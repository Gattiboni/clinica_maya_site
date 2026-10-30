import { client } from "@/lib/sanity/client";
import {
  CATEGORIAS_QUERY,
  POST_POR_SLUG_QUERY,
  POSTS_QUERY,
  POSTS_RECENTES_EXCETO_QUERY,
  POSTS_RELACIONADOS_QUERY,
  SLUGS_POSTS_QUERY,
  type CategoriaSanity,
  type PostSanity,
} from "@/lib/sanity/queries";

/**
 * Leituras do Sanity para as páginas do blog, só no servidor. Mesma
 * tolerância a falha da seção Blog da Home: sem env, sem cliente ou erro de
 * rede, cada leitura devolve o valor de reserva e registra um `console.warn`;
 * o build nunca quebra (TRAP da Spinhardi: falha do Sanity no build derrubava
 * o deploy).
 */
async function consultar<T>(
  contexto: string,
  reserva: T,
  query: string,
  params: Record<string, string> = {},
): Promise<T> {
  if (!client) {
    console.warn(`[Blog · ${contexto}] Sanity não configurado: usando valor vazio.`);
    return reserva;
  }
  try {
    return await client.fetch<T>(query, params);
  } catch (erro) {
    const motivo = erro instanceof Error ? erro.message : String(erro);
    console.warn(`[Blog · ${contexto}] Falha ao ler o Sanity (${motivo}): usando valor vazio.`);
    return reserva;
  }
}

/** Todos os posts publicados, do mais recente ao mais antigo. */
export function buscarPosts(): Promise<PostSanity[]> {
  return consultar<PostSanity[]>("lista", [], POSTS_QUERY);
}

/** Títulos das categorias existentes no dataset, em ordem alfabética; a copy reordena. */
export async function buscarNomesCategorias(): Promise<string[]> {
  const categorias = await consultar<CategoriaSanity[]>("categorias", [], CATEGORIAS_QUERY);
  return categorias.flatMap((c) => (c.title ? [c.title] : []));
}

/** Slugs de todos os posts publicados, para `generateStaticParams`. */
export function buscarSlugs(): Promise<string[]> {
  return consultar<string[]>("slugs", [], SLUGS_POSTS_QUERY);
}

/** Um post pelo slug; `null` quando não existe (ou quando o Sanity falha). */
export function buscarPost(slug: string): Promise<PostSanity | null> {
  return consultar<PostSanity | null>("post", null, POST_POR_SLUG_QUERY, { slug });
}

/**
 * Até 3 posts relacionados, sem o atual: da mesma categoria; se ela não tiver
 * outro post (ou o post não tiver categoria), os mais recentes.
 */
export async function buscarRelacionados(
  slug: string,
  categoria: string | null,
): Promise<PostSanity[]> {
  if (categoria) {
    const mesmaCategoria = await consultar<PostSanity[]>(
      "relacionados",
      [],
      POSTS_RELACIONADOS_QUERY,
      { slug, categoria },
    );
    if (mesmaCategoria.length > 0) return mesmaCategoria;
  }
  return consultar<PostSanity[]>("relacionados", [], POSTS_RECENTES_EXCETO_QUERY, { slug });
}
