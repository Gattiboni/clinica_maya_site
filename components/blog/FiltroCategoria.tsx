"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { CardPost } from "@/components/blog/CardPost";
import type { DadosCardPost } from "@/components/blog/dadosCardPost";
import { ESTADO_VAZIO_BLOG, ROTULO_TODOS } from "@/lib/conteudo/blog";
import { MOV } from "@/lib/movimento";

type EstadoFiltro = {
  /** Nome da categoria escolhida; `null` é "Todos". */
  atual: string | null;
  escolher: (categoria: string | null) => void;
};

const ContextoFiltro = createContext<EstadoFiltro>({ atual: null, escolher: () => {} });

const CLASSES_CHIP = `${MOV.transicaoHover} inline-block rounded-pilula border px-4.5 py-2 text-nota font-bold tracking-wide whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde`;

const CHIP_INATIVO = "border-marrom/35 bg-creme text-verde hover:border-verde";
const CHIP_ATIVO = "border-verde bg-verde text-bege";

/**
 * Filtro por categoria da lista do blog (§Blog · Lista). Terceiro client
 * component do site, autorizado pela instrução do Lote 3a: filtra no cliente
 * a lista já carregada, então a página continua estática com revalidação.
 * O estado vive neste provedor; os chips (na abertura) e a grade (na seção
 * seguinte) são folhas que o consomem, para as duas seções continuarem server
 * components com seus grafismos. Movimento (Fase 4) só por classes CSS: o
 * chip selecionado muda de fundo em 200ms e os cards entram em sequência.
 */
export function FiltroCategoria({ children }: { children: ReactNode }) {
  const [atual, escolher] = useState<string | null>(null);
  return <ContextoFiltro.Provider value={{ atual, escolher }}>{children}</ContextoFiltro.Provider>;
}

/** Chips "Todos" + categorias, na ordem recebida (já ordenada pela copy). */
export function ChipsCategoria({ categorias }: { categorias: readonly string[] }) {
  const { atual, escolher } = useContext(ContextoFiltro);
  const opcoes: { rotulo: string; valor: string | null }[] = [
    { rotulo: ROTULO_TODOS, valor: null },
    ...categorias.map((nome) => ({ rotulo: nome, valor: nome })),
  ];

  return (
    <div
      role="group"
      aria-label="Filtro por categoria"
      className="flex flex-wrap justify-center gap-2.5 lg:justify-start"
    >
      {opcoes.map((opcao) => {
        const ativo = atual === opcao.valor;
        return (
          <button
            key={opcao.rotulo}
            type="button"
            aria-pressed={ativo}
            onClick={() => escolher(opcao.valor)}
            className={`${CLASSES_CHIP} ${ativo ? CHIP_ATIVO : CHIP_INATIVO}`}
          >
            {opcao.rotulo}
          </button>
        );
      })}
    </div>
  );
}

/** Grade de cards filtrada pela categoria atual; sem post (na lista ou na categoria), o estado vazio da copy. */
export function GradePosts({ posts }: { posts: readonly DadosCardPost[] }) {
  const { atual } = useContext(ContextoFiltro);
  const visiveis = atual ? posts.filter((post) => post.categorias.includes(atual)) : posts;

  if (visiveis.length === 0) {
    return <p className="text-center text-lead lg:text-left">{ESTADO_VAZIO_BLOG}</p>;
  }

  return (
    <ul className={`${MOV.revealStagger} grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3`}>
      {visiveis.map((post) => (
        <li key={post.id} className="flex">
          <CardPost dados={post} comResumo nivel="h2" />
        </li>
      ))}
    </ul>
  );
}
