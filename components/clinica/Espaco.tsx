import Image from "next/image";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import clinica1 from "@/public/fotos/clinica-1.jpg";
import clinica2 from "@/public/fotos/clinica-2.jpg";
import clinica3 from "@/public/fotos/clinica-3.jpg";
import clinica4 from "@/public/fotos/clinica-4.jpg";

const CLASSES_FOTO = `${MOV.zoomCapa} h-full w-full object-cover`;
const CLASSES_MASCARA = `${MOV.mascara} ${MOV.maskCima} ${MOV.hoverZoom} rounded-card`;

/**
 * §A Clínica 3 · Espaço. Grade do mock a partir de `lg` (4 unidades: a sala
 * de espera ocupa 2 colunas de altura, a fachada 2 de largura; células de
 * 300×260). Abaixo, 2 colunas com proporção fixa por célula: sala e fachada
 * em 16/10 na largura toda, os dois detalhes quadrados lado a lado (escolha
 * deste lote: a sala em retrato estreito cortava mal).
 *
 * Fase 4: cada foto fica numa máscara (a célula da grade) que abre de baixo
 * para cima em sequência de 80ms; hover: zoom 1,04 dentro da máscara. Campo-1
 * na camada ambiente (afinação 1).
 */
export function Espaco() {
  return (
    <Secao fundo="bege" campo="campo-1">
      <CabecalhoSecao
        titulo="O nosso espaço"
        lead="Um ambiente pensado para você se sentir em casa, em Antônio Carlos/SC."
        className={`${MOV.reveal} mb-10`}
      />
      <div
        className={`${MOV.stagger} ${MOV.stagger80} grid grid-cols-2 gap-4 lg:grid-cols-[2fr_1fr_1fr] lg:gap-5`}
      >
        <div
          className={`${CLASSES_MASCARA} col-span-2 aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto`}
        >
          <Image
            src={clinica4}
            alt="Sala de espera da Clínica Maya"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`${CLASSES_FOTO} object-[50%_60%]`}
          />
        </div>
        <div className={`${CLASSES_MASCARA} aspect-square lg:aspect-[300/260]`}>
          <Image
            src={clinica2}
            alt="Detalhe da recepção"
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`${CLASSES_FOTO} object-[50%_60%]`}
          />
        </div>
        <div className={`${CLASSES_MASCARA} aspect-square lg:aspect-[300/260]`}>
          <Image
            src={clinica3}
            alt="Detalhe do consultório"
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`${CLASSES_FOTO} object-[50%_55%]`}
          />
        </div>
        <div className={`${CLASSES_MASCARA} col-span-2 aspect-[16/10] lg:aspect-[31/13]`}>
          <Image
            src={clinica1}
            alt="Fachada da Clínica Maya"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`${CLASSES_FOTO} object-[50%_40%]`}
          />
        </div>
      </div>
    </Secao>
  );
}
