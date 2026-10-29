import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Áreas da clínica, com os mesmos rótulos da copy. O valor gravado é o próprio
 * rótulo: o site exibe a string como está ("Por Psicologia").
 */
export const AREAS_AUTORA = ["Medicina", "Nutrição", "Psicologia", "Terapia", "Saúde capilar"];

/**
 * Autora do blog. Espelha `studio/schemas/author.ts` da Spinhardi (name, slug,
 * image, bio).
 *
 * Extensão exclusiva da Maya sobre o espelho: `area`. O site mostra a área da
 * autora junto ao post ("Por {área}"), não o nome (esqueleto v3).
 */
export const author = defineType({
  name: "author",
  title: "Autora",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "area",
      title: "Área",
      type: "string",
      description: "Área exibida junto aos posts da autora. Campo exclusivo da Maya.",
      options: {
        list: AREAS_AUTORA.map((rotulo) => ({ title: rotulo, value: rotulo })),
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "area", media: "image" },
  },
});
