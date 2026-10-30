import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Navegacao } from "@/components/layout/Navegacao";
import { ID_TOPO, VoltarAoTopo } from "@/components/layout/VoltarAoTopo";
import { Botao } from "@/components/ui/Botao";
import { CAMADA } from "@/lib/camadas";
import { CLINICA } from "@/lib/conteudo/clinica";
import { NAVEGACAO } from "@/lib/conteudo/navegacao";
import { MOV } from "@/lib/movimento";
import logo from "@/public/marca/logo-vertical-verde.png";

/**
 * Header de todas as páginas (server component; só a navegação é client).
 * `menu:` é o breakpoint da navegação (globals.css): a partir dele o header
 * tem 96px e o logo 56px, como no mock; abaixo, 80px e 48px. Fica na camada
 * mais alta (`CAMADA.header`), acima do conteúdo e dos grafismos das seções.
 *
 * Fase 4: fundo bege e borda vivem no `::before` (classe `header-fixo`), bege
 * em qualquer navegador. Com scroll-driven animations o header é `sticky`,
 * transparente sobre a abertura e, após 80px de rolagem, banda bege de 72px
 * (pseudo-elemento em `scale`, conteúdo em `translate`, logo em `scale`),
 * sem animar altura. Afinação 1: leva a âncora `#topo` (o topo da página é o
 * header, em toda página, inclusive o 404 global, que monta o próprio `<main>`)
 * e o botão flutuante "Voltar ao topo", que precisa desta camada para ficar
 * acima do palco e do footer.
 */
export function Header() {
  return (
    <header id={ID_TOPO} className={`${MOV.headerFixo} relative ${CAMADA.header}`}>
      <Container
        className={`${MOV.headerConteudo} flex h-20 items-center justify-between gap-6 menu:h-24 menu:gap-8`}
      >
        <Link
          href="/"
          aria-label="Clínica Maya, página inicial"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
        >
          <Image
            src={logo}
            alt="Clínica Maya"
            priority
            sizes="90px"
            className={`${MOV.headerLogo} h-12 w-auto menu:h-14`}
          />
        </Link>
        <Navegacao itens={NAVEGACAO}>
          <Botao href={CLINICA.agendarHref} tamanho="pequeno">
            Agendar
          </Botao>
        </Navegacao>
      </Container>
      <VoltarAoTopo />
    </header>
  );
}
