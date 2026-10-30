import type { Metadata } from "next";
import { Abertura } from "@/components/blog/Abertura";
import { buscarNomesCategorias, buscarPosts } from "@/components/blog/dados";
import { dadosCardPost } from "@/components/blog/dadosCardPost";
import { ChipsCategoria, FiltroCategoria, GradePosts } from "@/components/blog/FiltroCategoria";
import { Secao } from "@/components/ui/Secao";
import { ordenarCategorias } from "@/lib/conteudo/blog";

// ISR: a lista relê o Sanity a cada 60s, como a Home; o filtro roda no cliente sobre a lista carregada.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos da equipe da Clínica Maya sobre emagrecimento, saúde mental, saúde da mulher e saúde capilar, sem alarmismo e sem promessas.",
};

/**
 * §Blog · Lista. Os chips só aparecem quando o dataset tem alguma categoria
 * (um filtro com a opção "Todos" sozinha não filtra nada); sem post, a grade
 * mostra o estado vazio da copy.
 */
export default async function Blog() {
  const [posts, nomesCategorias] = await Promise.all([buscarPosts(), buscarNomesCategorias()]);
  const categorias = ordenarCategorias(nomesCategorias);
  const cards = posts.filter((post) => post.slug).map(dadosCardPost);

  return (
    <FiltroCategoria>
      <Abertura>{categorias.length > 0 && <ChipsCategoria categorias={categorias} />}</Abertura>
      <Secao fundo="creme">
        <GradePosts posts={cards} />
      </Secao>
    </FiltroCategoria>
  );
}
