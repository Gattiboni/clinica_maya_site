import Image from "next/image";
import Link from "next/link";
import {
  ALTURA_CAPA_CARD,
  LARGURA_CAPA_CARD,
  type DadosCardPost,
} from "@/components/blog/dadosCardPost";
import { MOV } from "@/lib/movimento";

type CardPostProps = {
  dados: DadosCardPost;
  /** Mostra o resumo (`excerpt`) entre o título e a autoria, como na lista do blog. */
  comResumo?: boolean;
  /** Nível do título: `h3` sob um H2 de seção (Home, relacionados), `h2` sob o H1 da lista. */
  nivel?: "h2" | "h3";
};

/**
 * Card de post: capa (se houver), "Categoria · N min", título, resumo opcional
 * e "Por {área da autora}". Recebe dados já resolvidos (`dadosCardPost`), por
 * isso serve tanto a server components quanto ao filtro de categoria no cliente.
 * Hover (Fase 4): a capa faz zoom 1,04 dentro da máscara e o título sublinha.
 */
export function CardPost({ dados, comResumo = false, nivel = "h3" }: CardPostProps) {
  const Titulo = nivel;
  const minutos = `${dados.minutos} min`;
  const categoria = dados.categorias[0];

  return (
    <Link
      href={`/blog/${dados.slug}`}
      className={`${MOV.hoverZoom} flex w-full flex-col gap-4 text-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde`}
    >
      {dados.capa && (
        <div className={`${MOV.mascara} aspect-[16/10] w-full rounded-card`}>
          <Image
            src={dados.capa.src}
            alt={dados.capa.alt}
            width={LARGURA_CAPA_CARD}
            height={ALTURA_CAPA_CARD}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className={`${MOV.zoomCapa} h-full w-full object-cover`}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-legenda font-bold tracking-rotulo uppercase">
          {categoria ? `${categoria} · ${minutos}` : minutos}
        </span>
        <Titulo className={`${MOV.sublinhaHover} self-start text-h3 font-semibold`}>
          {dados.titulo}
        </Titulo>
        {comResumo && dados.resumo && <p className="text-nota">{dados.resumo}</p>}
        {dados.area && <span className="text-nota text-marrom">Por {dados.area}</span>}
      </div>
    </Link>
  );
}
