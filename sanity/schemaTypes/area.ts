import { defineField, defineType } from "sanity";

/**
 * Área de cuidado. O slug é a âncora da área em /equipe (medicina, nutricao,
 * psicologia, terapia, capilar) e o alvo das campanhas.
 */
export const area = defineType({
  name: "area",
  title: "Área de cuidado",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (âncora)",
      type: "slug",
      description: "Atuais: medicina, nutricao, psicologia, terapia, capilar.",
      options: { source: "nome" },
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "descricaoCurta", title: "Descrição curta", type: "string" }),
    defineField({ name: "textoPublico", title: "Texto público", type: "text", rows: 5 }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordem", by: [{ field: "ordem", direction: "asc" }] }],
  preview: {
    select: { title: "nome", subtitle: "slug.current" },
  },
});
