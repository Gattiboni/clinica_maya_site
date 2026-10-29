import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Largura máxima e respiro lateral padrão de toda seção do site, header e
 * footer. Conteúdo de até 1240px (token `site`, mock v3.1) com respiro de
 * 16px no mobile e 40px no desktop: `box-content` deixa o respiro fora da
 * largura máxima, como no mock.
 */
export function Container({ children, className }: ContainerProps) {
  const classes = ["mx-auto box-content max-w-site px-4 sm:px-6 lg:px-10", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
