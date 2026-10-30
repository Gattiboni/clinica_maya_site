import Image from "next/image";
import Link from "next/link";
import { dataExtenso } from "@/components/blog/dataExtenso";
import { PortableTextPost } from "@/components/blog/PortableTextPost";
import { tempoLeitura } from "@/components/blog/tempoLeitura";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { CHAMADA_POST } from "@/lib/conteudo/blog";
import { CLINICA } from "@/lib/conteudo/clinica";
import { urlFor } from "@/lib/sanity/image";
import type { PostSanity } from "@/lib/sanity/queries";

const LARGURA_CAPA = 1600;
const ALTURA_CAPA = 800;

/**
 * §Blog · Post: linha superior, H1, autoria, data por extenso, capa (só com
 * imagem no documento), corpo em Portable Text e o bloco de chamada da copy
 * (bloco verde, como no mock). Coluna de leitura estreita (`max-w-3xl`).
 */
export function Post({ post }: { post: PostSanity }) {
  const titulo = post.title ?? "";
  const categoria = post.categories?.find((c) => c.title)?.title ?? null;
  const minutos = tempoLeitura(post.body);
  const data = dataExtenso(post.publishedAt);
  const capa = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage)?.width(LARGURA_CAPA).height(ALTURA_CAPA).url()
    : null;
  const autoria = [post.author?.area, CLINICA.nome].filter(Boolean).join(" · ");

  return (
    <Secao fundo="bege">
      <article className="mx-auto flex max-w-3xl flex-col gap-10 text-verde">
        <header className="flex flex-col gap-5">
          <p className="text-legenda font-bold tracking-rotulo uppercase">
            <Link
              href="/blog"
              className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
            >
              Blog
            </Link>
            {categoria && <> · {categoria}</>} · {minutos} min de leitura
          </p>
          <h1 className="text-h1 font-medium">{titulo}</h1>
          <div className="flex flex-col gap-0.5">
            <p className="text-nota font-bold">{autoria}</p>
            {data && post.publishedAt && (
              <p className="text-nota">
                <time dateTime={post.publishedAt}>{data}</time>
              </p>
            )}
          </div>
        </header>

        {capa && (
          <Image
            src={capa}
            alt={post.mainImage?.alt || titulo}
            width={LARGURA_CAPA}
            height={ALTURA_CAPA}
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="aspect-[2/1] w-full rounded-card object-cover"
          />
        )}

        {post.body && post.body.length > 0 && <PortableTextPost value={post.body} />}

        <aside className="mt-4 flex flex-col items-start gap-4 rounded-card bg-verde px-8 py-10 text-bege">
          <h2 className="text-h2 font-semibold">{CHAMADA_POST.titulo}</h2>
          <p className="max-w-prosa text-corpo">{CHAMADA_POST.texto}</p>
          <Botao href={CLINICA.agendarHref} variante="bege" tamanho="pequeno">
            {CHAMADA_POST.botao}
          </Botao>
        </aside>
      </article>
    </Secao>
  );
}
