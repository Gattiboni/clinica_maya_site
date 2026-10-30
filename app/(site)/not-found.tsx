import type { Metadata } from "next";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

const CAMINHOS = [
  { rotulo: "Página inicial", href: "/" },
  { rotulo: "Equipe", href: "/equipe" },
  { rotulo: "Contato", href: "/contato" },
];

/**
 * §404. Conteúdo da página não encontrada, renderizado dentro do layout do
 * site. Vale para `notFound()` lançado em qualquer rota de `(site)` (ex.: post
 * sem slug correspondente); para URLs sem rota, `app/not-found.tsx` compõe
 * header e footer em volta deste mesmo componente.
 */
export default function NaoEncontrado() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-top-[70px] -right-15"
          largura="w-64 lg:w-[340px]"
          opacidade="opacity-20"
        />
      }
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <p className="text-eyebrow font-bold uppercase">Erro 404</p>
      <h1 className="max-w-3xl text-h1 font-normal">Essa página não existe</h1>
      <p className="max-w-prosa-longa text-lead">
        O endereço pode ter mudado ou ter sido digitado errado. Os caminhos abaixo levam de volta.
      </p>
      <ul className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
        {CAMINHOS.map((caminho) => (
          <li key={caminho.href}>
            <LinkTexto href={caminho.href}>{caminho.rotulo}</LinkTexto>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
