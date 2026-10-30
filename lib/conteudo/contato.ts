import { CLINICA } from "@/lib/conteudo/clinica";

/** Opções do campo "Com quem você quer agendar?" (§Contato 2); o valor gravado na mensagem é o próprio rótulo. */
export const OPCOES_AREA = [
  "Ainda não sei",
  "Medicina",
  "Nutrição",
  "Psicologia",
  "Terapia",
  "Saúde capilar",
] as const;

/** Opções do campo "Como prefere ser atendida?" (§Contato 2); entram na mensagem em minúsculas. */
export const OPCOES_MODALIDADE = ["Presencial", "On-line"] as const;

export type OpcaoArea = (typeof OPCOES_AREA)[number];
export type OpcaoModalidade = (typeof OPCOES_MODALIDADE)[number];

export const AREA_PADRAO: OpcaoArea = "Ainda não sei";
export const MODALIDADE_PADRAO: OpcaoModalidade = "Presencial";

export type DadosMensagem = {
  nome: string;
  whatsapp: string;
  area: OpcaoArea;
  modalidade: OpcaoModalidade;
  mensagem: string;
};

/**
 * Mensagem montada, literal do mock (§Contato 2): `Olá! Me chamo {nome}. Gostaria
 * de agendar ({modalidade em minúsculas}) com: {área}.` + (se houver WhatsApp)
 * ` Meu WhatsApp: {whatsapp}.` + (se houver mensagem) ` {mensagem}`.
 * Só texto: nada é enviado nem armazenado pelo site.
 */
export function montarMensagemWhatsApp({
  nome,
  whatsapp,
  area,
  modalidade,
  mensagem,
}: DadosMensagem): string {
  const partes = [
    `Olá! Me chamo ${nome.trim()}. Gostaria de agendar (${modalidade.toLowerCase()}) com: ${area}.`,
  ];
  if (whatsapp.trim()) partes.push(`Meu WhatsApp: ${whatsapp.trim()}.`);
  if (mensagem.trim()) partes.push(mensagem.trim());
  return partes.join(" ");
}

/** URL do WhatsApp da clínica com a mensagem já codificada. */
export function urlWhatsAppComMensagem(texto: string): string {
  return `${CLINICA.whatsapp.url}?text=${encodeURIComponent(texto)}`;
}

/** Bloco "Onde estamos" da página Contato (§Contato 2), com o horário por extenso dessa página. */
export const ONDE_ESTAMOS = {
  linhas: [
    CLINICA.endereco.logradouro,
    `${CLINICA.endereco.bairroCidade} · ${CLINICA.endereco.cep}`,
    `WhatsApp ${CLINICA.whatsapp.exibicao}`,
  ],
  horario: "Segunda a sexta, 8h às 18h",
  /** Busca do Google Maps pelo endereço: sem iframe, sem chave, sem cookie de terceiro. */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINICA.endereco.logradouro}, ${CLINICA.endereco.bairroCidade}, ${CLINICA.endereco.cep}`,
  )}`,
} as const;

/** Perfis da seção Redes (§Contato 2), na ordem da copy. */
export const REDES = [
  { exibicao: CLINICA.instagram.exibicao, url: CLINICA.instagram.url },
  { exibicao: "@dramayarabrasilm", url: "https://instagram.com/dramayarabrasilm" },
] as const;
