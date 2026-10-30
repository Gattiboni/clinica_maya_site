"use client";

import { useEffect } from "react";

/** Amortecimento: fração da distância até o alvo percorrida por quadro. */
const FATOR = 0.08;
/** Abaixo disto o laço para e só volta no próximo movimento do cursor. */
const REPOUSO = 0.001;

/**
 * Único JavaScript de movimento do site (Decisão 010). Em `pointer: fine` e
 * sem `prefers-reduced-motion`, lê o cursor e escreve `--mx` e `--my`
 * (de -1 a 1) no `<html>`, amortecidos por `requestAnimationFrame`; `drift` e
 * `tilt3d` são CSS que consomem as variáveis. Em touch não registra nada.
 * Não renderiza nada.
 */
export function Mundo() {
  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const raiz = document.documentElement;
    let alvoX = 0;
    let alvoY = 0;
    let x = 0;
    let y = 0;
    let quadro = 0;

    const passo = () => {
      x += (alvoX - x) * FATOR;
      y += (alvoY - y) * FATOR;
      raiz.style.setProperty("--mx", x.toFixed(3));
      raiz.style.setProperty("--my", y.toFixed(3));
      const emRepouso = Math.abs(alvoX - x) < REPOUSO && Math.abs(alvoY - y) < REPOUSO;
      quadro = emRepouso ? 0 : requestAnimationFrame(passo);
    };

    const aoMover = (evento: PointerEvent) => {
      alvoX = (evento.clientX / window.innerWidth) * 2 - 1;
      alvoY = (evento.clientY / window.innerHeight) * 2 - 1;
      if (!quadro) quadro = requestAnimationFrame(passo);
    };

    window.addEventListener("pointermove", aoMover, { passive: true });
    return () => {
      window.removeEventListener("pointermove", aoMover);
      cancelAnimationFrame(quadro);
      raiz.style.removeProperty("--mx");
      raiz.style.removeProperty("--my");
    };
  }, []);

  return null;
}
