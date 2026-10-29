import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Grafismo } from "@/components/ui/Grafismo";
import { CLINICA } from "@/lib/conteudo/clinica";
import { LINKS_INSTITUCIONAIS } from "@/lib/conteudo/navegacao";
import logoTagline from "@/public/marca/logo-tagline-vertical-bege.png";

const CLASSES_ICONE =
  "flex size-12 items-center justify-center rounded-full border border-bege/45 text-bege transition-colors hover:border-bege hover:bg-bege hover:text-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bege";

const CLASSES_LINK =
  "text-nota underline underline-offset-3 transition-colors hover:text-creme focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bege";

function TituloColuna({ children }: { children: string }) {
  return <h2 className="mb-1.5 text-corpo font-semibold tracking-rotulo uppercase">{children}</h2>;
}

/**
 * Footer de todas as páginas (server component). Abaixo de `md` as três
 * colunas viram uma, centralizada (regra de recentralização do lote).
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bege/25 bg-verde text-bege">
      <Grafismo
        nome="5"
        cor="bege"
        posicao="-right-10 -bottom-30"
        largura="w-[300px]"
        opacidade="opacity-18"
      />
      <Grafismo
        nome="circulo"
        cor="bege"
        posicao="-bottom-20 -left-[70px]"
        largura="w-[260px]"
        opacidade="opacity-10"
      />
      <Container className="relative pt-16 pb-8">
        <div className="grid gap-12 text-center md:grid-cols-[1.4fr_1fr_1fr] md:items-start md:text-left">
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Image
              src={logoTagline}
              alt="Clínica Maya, Esteja bem com você"
              sizes="150px"
              className="h-auto w-[150px]"
            />
            <p className="max-w-prosa-nota text-nota">
              Saúde integral com acompanhamento multiprofissional: medicina, nutrição, psicologia e
              saúde capilar. Presencial em Antônio Carlos/SC e on-line para todo o Brasil.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2.5 md:items-start">
            <TituloColuna>Onde estamos</TituloColuna>
            <p className="text-nota">
              {CLINICA.endereco.logradouro}
              <br />
              {CLINICA.endereco.bairroCidade}
              <br />
              {CLINICA.endereco.cep}
            </p>
            <p className="text-nota">{CLINICA.horario}</p>
            <p className="text-nota">{CLINICA.whatsapp.exibicao}</p>
            <div className="mt-2 flex gap-3">
              <a
                href={CLINICA.whatsapp.url}
                aria-label="WhatsApp da clínica"
                title={`WhatsApp ${CLINICA.whatsapp.exibicao}`}
                className={CLASSES_ICONE}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
                  <path d="M9 9.2c.2 2.4 3.4 5.6 5.8 5.8l1.3-1.3-1.9-1.2-1 .7c-.9-.4-1.9-1.4-2.3-2.3l.7-1L10.3 8z" />
                </svg>
              </a>
              <a
                href={CLINICA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da clínica, ${CLINICA.instagram.exibicao}`}
                title={CLINICA.instagram.exibicao}
                className={CLASSES_ICONE}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17" cy="7" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5 md:items-start">
            <TituloColuna>Institucional</TituloColuna>
            <ul className="flex flex-col items-center gap-2.5 md:items-start">
              {LINKS_INSTITUCIONAIS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={CLASSES_LINK}>
                    {item.rotulo}
                  </Link>
                </li>
              ))}
              {/* Política de privacidade: Lote 3. */}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-bege/25 pt-6 text-center text-legenda md:flex-row md:justify-between md:gap-6 md:text-left">
          <span>© 2026 {CLINICA.nome} · Todos os direitos reservados</span>
          <span>Responsável técnica: {CLINICA.responsavelTecnica}</span>
        </div>
      </Container>
    </footer>
  );
}
