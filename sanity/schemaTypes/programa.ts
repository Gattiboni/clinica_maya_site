import { defineField, defineType } from "sanity";

/**
 * Programa (Maya Essencial, Evolução, Contínuo). Duração e número de consultas
 * ficam guardados mas só aparecem no Studio quando `exibirDetalhes` é verdadeiro;
 * o site não exibe esses dados nesta fase.
 */
export const programa = defineType({
  name: "programa",
  title: "Programa",
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
      title: "Slug",
      type: "slug",
      options: { source: "nome" },
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "frase", title: "Frase", type: "text", rows: 2 }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
    defineField({
      name: "ativoNoSite",
      title: "Ativo no site",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "exibirDetalhes",
      title: "Exibir detalhes",
      type: "boolean",
      description: "Libera os campos de duração e consultas. Fica desligado nesta fase.",
      initialValue: false,
    }),
    defineField({
      name: "duracao",
      title: "Duração",
      type: "string",
      hidden: ({ document }) => !document?.exibirDetalhes,
    }),
    defineField({
      name: "consultas",
      title: "Consultas",
      type: "number",
      hidden: ({ document }) => !document?.exibirDetalhes,
    }),
  ],
  orderings: [{ title: "Ordem", name: "ordem", by: [{ field: "ordem", direction: "asc" }] }],
  preview: {
    select: { title: "nome", subtitle: "frase" },
  },
});
