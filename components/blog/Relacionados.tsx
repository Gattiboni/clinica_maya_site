import { CardPost } from "@/components/blog/CardPost";
import { dadosCardPost } from "@/components/blog/dadosCardPost";
import { Secao } from "@/components/ui/Secao";
import type { PostSanity } from "@/lib/sanity/queries";

/** §Blog · Post · Posts relacionados (fundo creme). Sem nenhum outro post, a seção não aparece. */
export function Relacionados({ posts }: { posts: PostSanity[] }) {
  if (posts.length === 0) return null;

  return (
    <Secao fundo="creme">
      <h2 className="mb-8 text-center text-h2 font-medium lg:text-left">Posts relacionados</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post._id} className="flex">
            <CardPost dados={dadosCardPost(post)} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
