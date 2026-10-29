import type { ReactNode } from "react";

type BotaoProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * Botão sólido da marca: fundo verde, texto bege, formato de pílula.
 * Links externos (WhatsApp, Instagram) abrem em nova aba com rel seguro.
 */
export function Botao({ href, children, className }: BotaoProps) {
  const externo = /^https?:\/\//.test(href);
  const classes = [
    "inline-flex items-center justify-center rounded-pilula bg-verde px-7 py-3",
    "text-lg font-bold text-bege transition-colors hover:bg-marrom",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
