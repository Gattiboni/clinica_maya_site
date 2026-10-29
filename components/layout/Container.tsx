import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Largura máxima e respiro lateral padrão de toda seção do site.
 * Header e footer (Fase 3) usam este mesmo Container.
 */
export function Container({ children, className }: ContainerProps) {
  const classes = ["mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
