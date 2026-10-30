import { CardPost } from "@/components/blog/CardPost";
import { dadosCardPost } from "@/components/blog/dadosCardPost";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import { client } from "@/lib/sanity/client";
import { POSTS_HOME_QUERY, type PostSanity } from "@/lib/sanity/queries";

/**
 * Único fetch ao Sanity do Lote 1. Qualquer falha (sem env, sem cliente, rede)
 * vira lista vazia com um `console.warn`: a seção some e o build não quebra.
 */
async function buscarPostsRecentes(): Promise<PostSanity[]> {
  if (!client) {
    console.warn("[Home · Blog] Sanity não configurado: seção Blog não renderizada.");
    return [];
  }
  try {
    return await client.fetch<PostSanity[]>(POSTS_HOME_QUERY);
  } catch (erro) {
    const motivo = erro instanceof Error ? erro.message : String(erro);
    console.warn(
      `[Home · Blog] Falha ao buscar posts no Sanity (${motivo}): seção não renderizada.`,
    );
    return [];
  }
}

/** §Home 9 · Blog. Sem post publicado, a seção inteira não é renderizada. Cards em sequência; hover no `CardPost`. */
export async function Blog() {
  const posts = await buscarPostsRecentes();
  if (posts.length === 0) return null;

  return (
    <Secao fundo="creme">
      <CabecalhoSecao
        titulo="Para ler com calma"
        acao={<LinkTexto href="/blog">Ver o blog</LinkTexto>}
        className={`${MOV.reveal} mb-12`}
      />
      <ul className={`${MOV.revealStagger} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
        {posts.map((post) => (
          <li key={post._id} className="flex">
            <CardPost dados={dadosCardPost(post)} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
