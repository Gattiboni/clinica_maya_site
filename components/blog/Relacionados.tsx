import { CardPost } from "@/components/blog/CardPost";
import { dadosCardPost } from "@/components/blog/dadosCardPost";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import type { PostSanity } from "@/lib/sanity/queries";

/** §Blog · Post · Posts relacionados (fundo creme). Sem nenhum outro post, a seção não aparece. */
export function Relacionados({ posts }: { posts: PostSanity[] }) {
  if (posts.length === 0) return null;

  return (
    <Secao fundo="creme">
      <Nevoa
        elemento="h2"
        className={`${MOV.reveal} mx-auto mb-8 w-fit text-center text-h2 font-medium lg:mx-0 lg:text-left`}
      >
        Posts relacionados
      </Nevoa>
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
