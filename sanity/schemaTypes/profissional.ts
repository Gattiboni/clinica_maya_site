import { defineArrayMember, defineField, defineType } from "sanity";

export const MODALIDADES = [
  { title: "Presencial", value: "presencial" },
  { title: "On-line", value: "on-line" },
];

/**
 * Profissional da equipe. `publicavel` controla a exibição no site;
 * `aConfirmar` lista o que ainda depende da clínica (ex.: modalidade, registro).
 */
export const profissional = defineType({
  name: "profissional",
  title: "Profissional",
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
    defineField({
      name: "rotulo",
      title: "Rótulo",
      type: "string",
      description: "Como a pessoa é apresentada. Exemplos: Dra., Dr., Nutricionista, Psicóloga.",
    }),
    defineField({
      name: "area",
      title: "Área",
      type: "reference",
      to: [{ type: "area" }],
    }),
    defineField({
      name: "registro",
      title: "Registro profissional",
      type: "string",
      description: "Exemplo: CRM SC 00000, CRN 0 00000, CRP 00/00000.",
    }),
    defineField({
      name: "atende",
      title: "Atende",
      type: "string",
      description: "Para quem atende. Exemplo: adultos; mulheres adultas; infância e adolescência.",
    }),
    defineField({
      name: "modalidades",
      title: "Modalidades",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { list: MODALIDADES, layout: "grid" },
    }),
    defineField({ name: "instagram", title: "Instagram", type: "string" }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "bioCurta", title: "Bio curta", type: "text", rows: 3 }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "publicavel",
      title: "Publicável",
      type: "boolean",
      description: "Desmarque para tirar a pessoa do site sem apagar o cadastro.",
      initialValue: true,
    }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
    defineField({
      name: "aConfirmar",
      title: "A confirmar",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      description: "O que ainda depende de confirmação da clínica. Exemplos: modalidade, registro.",
    }),
  ],
  orderings: [{ title: "Ordem", name: "ordem", by: [{ field: "ordem", direction: "asc" }] }],
  preview: {
    select: { title: "nome", subtitle: "area.nome", media: "foto" },
  },
});
