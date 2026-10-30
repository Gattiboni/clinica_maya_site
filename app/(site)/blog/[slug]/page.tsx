import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { buscarPost, buscarRelacionados, buscarSlugs } from "@/components/blog/dados";
import { Post } from "@/components/blog/Post";
import { Relacionados } from "@/components/blog/Relacionados";

type Props = {
  params: Promise<{ slug: string }>;
};

// ISR como a lista; `dynamicParams` ligado: post novo renderiza sob demanda, sem redeploy.
export const revalidate = 60;
export const dynamicParams = true;

/** Slugs conhecidos no build. Qualquer falha do Sanity vira lista vazia (a leitura já é tolerante). */
export async function generateStaticParams() {
  try {
    const slugs = await buscarSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (erro) {
    const motivo = erro instanceof Error ? erro.message : String(erro);
    console.warn(`[Blog · slugs] Falha inesperada ao listar slugs (${motivo}): nenhum pré-gerado.`);
    return [];
  }
}

// Uma leitura por pedido, compartilhada entre `generateMetadata` e a página.
const obterPost = cache(buscarPost);

/**
 * Sem post, devolve metadata vazia e deixa a página lançar `notFound()`:
 * lançado daqui, o Next 16 caía para renderização no cliente e o HTML do 404
 * chegava sem header, footer e conteúdo (visto no `curl`).
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await obterPost(slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title || undefined,
    description: post.seoDescription || post.excerpt || undefined,
  };
}

export default async function PaginaPost({ params }: Props) {
  const { slug } = await params;
  const post = await obterPost(slug);
  if (!post) notFound();

  const categoria = post.categories?.find((c) => c.title)?.title ?? null;
  const relacionados = await buscarRelacionados(slug, categoria);

  return (
    <>
      <Post post={post} />
      <Relacionados posts={relacionados} />
    </>
  );
}
