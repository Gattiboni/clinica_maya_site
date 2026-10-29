import { defineField, defineType } from "sanity";

/**
 * Configuração do site (singleton): dados que aparecem em várias páginas.
 * Só existe um documento deste tipo; a estrutura do Studio garante isso.
 */
export const siteConfig = defineType({
  name: "siteConfig",
  title: "Configuração do site",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "slogan", title: "Slogan", type: "string" }),
    defineField({
      name: "endereco",
      title: "Endereço",
      type: "object",
      fields: [
        defineField({ name: "rua", title: "Rua", type: "string" }),
        defineField({ name: "numero", title: "Número", type: "string" }),
        defineField({ name: "bairro", title: "Bairro", type: "string" }),
        defineField({ name: "cidade", title: "Cidade", type: "string" }),
        defineField({ name: "uf", title: "UF", type: "string" }),
        defineField({ name: "cep", title: "CEP", type: "string" }),
      ],
    }),
    defineField({
      name: "horario",
      title: "Horário de atendimento",
      type: "string",
      description: "Como aparece no site. Exemplo: segunda a sexta, das 8h às 18h.",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      description: "Só dígitos, com DDI e DDD. Exemplo: 5548996205000.",
    }),
    defineField({ name: "instagramClinica", title: "Instagram da clínica", type: "string" }),
    defineField({ name: "instagramDra", title: "Instagram da Dra. Mayara", type: "string" }),
    defineField({
      name: "responsavelTecnica",
      title: "Responsável técnica",
      type: "object",
      fields: [
        defineField({ name: "nome", title: "Nome", type: "string" }),
        defineField({ name: "crm", title: "CRM", type: "string" }),
        defineField({ name: "rqe", title: "RQE", type: "string" }),
      ],
    }),
    defineField({
      name: "registroClinicaCRM",
      title: "Registro da clínica no CRM",
      type: "text",
      rows: 2,
      description: "Opcional. Preencher só quando a clínica tiver o registro.",
    }),
    defineField({
      name: "geoSEO",
      title: "Texto geográfico para SEO",
      type: "text",
      rows: 3,
      description: "Frase de localização usada em metadados e rodapé.",
    }),
  ],
  preview: {
    select: { title: "nome", subtitle: "slogan" },
  },
});
