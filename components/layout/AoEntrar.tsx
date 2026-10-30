"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AO_ENTRAR, AO_ENTRAR_LIMIAR, ENTROU } from "@/lib/movimento";

/**
 * Segundo (e último) client component de movimento do site, exceção à
 * Decisão 010 autorizada na afinação 1 da Fase 4 (item 2.5): os pops de tempo
 * (montagem do Círculo Maya, números das pilhas e das etapas) precisam de
 * excesso de escala e ritmo que o `view()` não dá. Um único
 * IntersectionObserver observa todo elemento com `data-ao-entrar` e marca
 * `data-entrou` quando ele entra 20% na viewport, uma vez; o CSS faz o resto.
 * Refaz a busca a cada rota (navegação no cliente) e observa nós que cheguem
 * depois (streaming), com um MutationObserver barato. Com
 * `prefers-reduced-motion` marca na hora: o CSS já desliga as animações, e o
 * conteúdo fica no estado final. Não renderiza nada.
 */
export function AoEntrar() {
  const pathname = usePathname();

  useEffect(() => {
    const seletor = `[${AO_ENTRAR}]:not([${ENTROU}])`;
    const marcar = (elemento: Element) => elemento.setAttribute(ENTROU, "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(seletor).forEach(marcar);
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          marcar(entrada.target);
          observador.unobserve(entrada.target);
        }
      },
      { threshold: AO_ENTRAR_LIMIAR },
    );

    const observarTodos = () =>
      document.querySelectorAll(seletor).forEach((e) => observador.observe(e));
    observarTodos();

    const mutacoes = new MutationObserver((lista) => {
      if (lista.some((m) => m.addedNodes.length > 0)) observarTodos();
    });
    mutacoes.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutacoes.disconnect();
      observador.disconnect();
    };
  }, [pathname]);

  return null;
}
