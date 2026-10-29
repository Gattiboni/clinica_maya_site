"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import type { ItemNavegacao } from "@/lib/conteudo/navegacao";

type NavegacaoProps = {
  itens: readonly ItemNavegacao[];
  /** Botão Agendar, renderizado no servidor e sempre visível. */
  children: ReactNode;
};

const ID_LISTA = "menu-principal";

/**
 * Navegação principal. Client component só pelo que exige: o estado "página
 * atual" (usePathname) e o abre-fecha do menu mobile. A partir do breakpoint
 * `menu:` (globals.css) a lista fica sempre visível numa linha; abaixo disso
 * o botão "Menu" a mostra e esconde.
 */
export function Navegacao({ itens, children }: NavegacaoProps) {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  const ehAtual = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav aria-label="Principal" className="flex items-center gap-3 menu:gap-9">
      <ul
        id={ID_LISTA}
        className={`${aberto ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-marrom/18 bg-bege px-4 py-4 sm:px-6 menu:static menu:flex menu:flex-row menu:items-center menu:gap-9 menu:border-0 menu:bg-transparent menu:p-0`}
      >
        {itens.map((item) => {
          const atual = ehAtual(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={atual ? "page" : undefined}
                onClick={() => setAberto(false)}
                className={`inline-block border-b-2 py-2 text-corpo tracking-wide whitespace-nowrap text-verde transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde menu:py-1 ${
                  atual ? "border-verde font-bold" : "border-transparent font-normal"
                }`}
              >
                {item.rotulo}
              </Link>
            </li>
          );
        })}
      </ul>
      {children}
      <button
        type="button"
        aria-expanded={aberto}
        aria-controls={ID_LISTA}
        onClick={() => setAberto((valor) => !valor)}
        className="inline-flex h-11 items-center rounded-pilula border border-marrom/35 px-4 text-corpo font-bold text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde menu:hidden"
      >
        Menu
      </button>
    </nav>
  );
}
