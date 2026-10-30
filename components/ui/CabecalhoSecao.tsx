import type { ReactNode } from "react";

type CabecalhoSecaoProps = {
  titulo: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  /** Link ou botão alinhado à direita do cabeçalho (desktop). */
  acao?: ReactNode;
  /** `centro`: fica centralizado também no desktop (seções de área da Equipe, afinação 1). */
  alinhar?: "esquerda" | "centro";
  className?: string;
};

/**
 * Cabeçalho de seção: eyebrow opcional, H2 e lead opcional, com ação à direita.
 * Abaixo de `lg` vira uma coluna centralizada (regra de recentralização do lote).
 */
export function CabecalhoSecao({
  titulo,
  eyebrow,
  lead,
  acao,
  alinhar = "esquerda",
  className,
}: CabecalhoSecaoProps) {
  const centro = alinhar === "centro";
  const classes = [
    "flex flex-col items-center gap-6 text-center",
    centro ? "" : "lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:text-left",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={`flex flex-col items-center gap-3 ${centro ? "" : "lg:items-start"}`}>
        {eyebrow && <p className="text-eyebrow font-bold uppercase">{eyebrow}</p>}
        <h2 className="text-h2 font-medium">{titulo}</h2>
        {lead && <p className="max-w-prosa text-lead">{lead}</p>}
      </div>
      {acao && <div className="shrink-0">{acao}</div>}
    </div>
  );
}
