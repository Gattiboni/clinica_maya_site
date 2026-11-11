import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

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
 * header e footer em volta deste mesmo componente. Só `reveal` de abertura.
 * A camada de grafismos emite só o símbolo que usa (`sprite="usados"`): a
 * árvore do 404 entra no payload RSC de toda página (duas vezes: 404 global e
 * do grupo), e o sprite completo ali pesaria 2 × 29 KB.
 */
export default function NaoEncontrado() {
  return (
    <>
      <CamadaGrafismos pagina="nao-encontrado" sprite="usados" />
      <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
        <Nevoa
          className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
        >
          <p className="text-eyebrow font-bold uppercase">Erro 404</p>
          <h1 className="max-w-3xl text-h1 font-normal">Essa página não existe</h1>
          <p className="max-w-prosa-longa text-lead">
            O endereço pode ter mudado ou ter sido digitado errado. Os caminhos abaixo levam de
            volta.
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
            {CAMINHOS.map((caminho) => (
              <li key={caminho.href}>
                <LinkTexto href={caminho.href}>{caminho.rotulo}</LinkTexto>
              </li>
            ))}
          </ul>
        </Nevoa>
      </Secao>
    </>
  );
}
