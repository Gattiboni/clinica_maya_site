import type { StructureResolver } from "sanity/structure";

/**
 * Estrutura do painel do Studio: a configuração do site como item fixo
 * (singleton) e os demais tipos como listas.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configuração do site")
        .id("siteConfig")
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
      S.divider(),
      S.documentTypeListItem("area").title("Áreas de cuidado"),
      S.documentTypeListItem("profissional").title("Profissionais"),
      S.documentTypeListItem("dor").title("Dores"),
      S.documentTypeListItem("programa").title("Programas"),
      S.documentTypeListItem("post").title("Posts"),
    ]);
