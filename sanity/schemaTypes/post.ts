import { defineArrayMember, defineField, defineType } from "sanity";

export const CATEGORIAS = [
  { title: "Emagrecimento", value: "emagrecimento" },
  { title: "Saúde mental", value: "saude-mental" },
  { title: "Saúde da mulher", value: "saude-da-mulher" },
  { title: "Saúde capilar", value: "saude-capilar" },
];

/** Post do blog. A área exibida junto ao post vem da autora. */
export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo" },
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "resumo", title: "Resumo", type: "text", rows: 3 }),
    defineField({
      name: "corpo",
      title: "Corpo",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "autora",
      title: "Autora",
      type: "reference",
      to: [{ type: "profissional" }],
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: { list: CATEGORIAS, layout: "radio" },
    }),
    defineField({ name: "data", title: "Data", type: "date" }),
    defineField({
      name: "capa",
      title: "Capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "seoTitle", title: "Título para SEO", type: "string" }),
    defineField({ name: "seoDescription", title: "Descrição para SEO", type: "text", rows: 2 }),
  ],
  orderings: [{ title: "Mais recentes", name: "data", by: [{ field: "data", direction: "desc" }] }],
  preview: {
    select: { title: "titulo", subtitle: "categoria", media: "capa" },
  },
});
