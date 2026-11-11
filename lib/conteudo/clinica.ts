/**
 * Dados globais da clínica (docs/copy-site-v1.md §Global). Fonte única para
 * header, footer e metadata; nenhuma página repete estes valores.
 */
export const CLINICA = {
  nome: "Clínica Maya",
  slogan: "Esteja bem com você.",
  descricaoCurta:
    "Clínica de saúde integral em Antônio Carlos, Santa Catarina, com atendimento presencial e on-line.",
  whatsapp: {
    url: "https://wa.me/5548996205000",
    exibicao: "(48) 99620-5000",
  },
  instagram: {
    url: "https://instagram.com/clinicamaya.ac",
    exibicao: "@clinicamaya.ac",
  },
  endereco: {
    logradouro: "Av. João Antônio Besen, 265",
    bairroCidade: "Centro, Antônio Carlos/SC",
    cep: "CEP 88180-211",
  },
  horario: "Seg. a sex., 8h às 18h",
  /** Pessoa jurídica (copy v1.3, Revisão v2): rodapé e Política de privacidade. */
  razaoSocial: "Clínica Dra. Mayara Brasil Ltda",
  cnpj: "52.845.958/0001-87",
  /** Inscrição da clínica (pessoa jurídica) no CRM-SC. */
  inscricaoCrm: "11127",
  responsavelTecnica: {
    nome: "Dra. Mayara Brasil Machado",
    crm: "CRM-SC 21112",
    rqe: "RQE 22484",
  },
  /** Destino de todo CTA "Agendar" (página do Lote 3). */
  agendarHref: "/contato#agendar",
  politicaPrivacidade: {
    /**
     * Data de vigência da política (AAAA-MM-DD), preenchida no go-live (Fase 7).
     * Vazia, a linha "Vigente a partir de ..." não é renderizada.
     */
    vigenteDesde: "",
  },
} as const;
