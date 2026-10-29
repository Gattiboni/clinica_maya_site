import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Dor: entidade leve que alimenta a seção "Talvez você se reconheça aqui"
 * da Home. Cada dor aponta para as áreas que podem ajudar.
 */
export const dor = defineType({
  name: "dor",
  title: "Dor",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "frase", title: "Frase", type: "text", rows: 3 }),
    defineField({
      name: "areas",
      title: "Quem pode ajudar",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "area" }] })],
    }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordem", by: [{ field: "ordem", direction: "asc" }] }],
  preview: {
    select: { title: "titulo", subtitle: "frase" },
  },
});
