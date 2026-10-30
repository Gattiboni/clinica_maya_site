const FORMATADOR = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "America/Sao_Paulo",
});

const SO_DATA = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Data por extenso em pt-BR (ex.: "12 de agosto de 2026"), no fuso da clínica.
 * Aceita datetime ISO (como `publishedAt` do Sanity) ou só data (AAAA-MM-DD),
 * que é lida ao meio-dia de Brasília para não voltar um dia na conversão.
 * Retorna `null` quando o valor não é uma data.
 */
export function dataExtenso(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const data = new Date(SO_DATA.test(iso) ? `${iso}T12:00:00-03:00` : iso);
  return Number.isNaN(data.getTime()) ? null : FORMATADOR.format(data);
}
