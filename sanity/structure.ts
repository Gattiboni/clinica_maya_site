import type { StructureResolver } from "sanity/structure";

/** Painel do Studio: só o blog. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("author").title("Autoras"),
      S.documentTypeListItem("category").title("Categorias"),
    ]);
