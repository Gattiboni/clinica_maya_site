import type { Metadata } from "next";
import { ConteudoPolitica } from "@/components/politica/ConteudoPolitica";
import { Secao } from "@/components/ui/Secao";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Clínica Maya trata os dados de quem visita o site e entra em contato.",
};

/**
 * §Política de privacidade: texto literal da copy em largura de prosa, fundo
 * bege, sem grafismo. O conteúdo vive em `components/politica/ConteudoPolitica`,
 * compartilhado com o modal do formulário de contato (afinação 1, 2.10); esta
 * página continua existindo (link do footer, SEO, jurídico).
 * Movimento: só o cabeçalho entra na carga; nenhum movimento no corpo.
 */
export default function PoliticaDePrivacidade() {
  return (
    <Secao fundo="bege">
      <ConteudoPolitica contexto="pagina" />
    </Secao>
  );
}
