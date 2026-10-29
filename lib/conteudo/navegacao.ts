export type ItemNavegacao = {
  rotulo: string;
  href: string;
};

/** Navegação principal, na ordem da copy (§Header). Rotas além de / e /clinica são de lotes futuros. */
export const NAVEGACAO: readonly ItemNavegacao[] = [
  { rotulo: "A Clínica", href: "/clinica" },
  { rotulo: "Equipe", href: "/equipe" },
  { rotulo: "Método", href: "/metodo" },
  { rotulo: "Emagrecimento", href: "/emagrecimento" },
  { rotulo: "Blog", href: "/blog" },
];

/** Coluna "Institucional" do footer (§Footer). Política de privacidade entra no Lote 3. */
export const LINKS_INSTITUCIONAIS: readonly ItemNavegacao[] = [
  { rotulo: "Dra. Mayara Brasil", href: "/dra-mayara-brasil" },
  { rotulo: "Equipe", href: "/equipe" },
  { rotulo: "Atendimento on-line", href: "/atendimento-online" },
];
