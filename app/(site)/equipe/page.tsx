import type { Metadata } from "next";
import { Abertura } from "@/components/equipe/Abertura";
import { ChamadaFinal } from "@/components/equipe/ChamadaFinal";
import { SecaoArea } from "@/components/equipe/SecaoArea";
import { AREAS_EQUIPE } from "@/lib/conteudo/equipe";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Medicina, nutrição, psicologia, terapia e saúde capilar em Antônio Carlos/SC e on-line: conheça quem cuida de você na Clínica Maya.",
};

export default function Equipe() {
  return (
    <>
      <Abertura />
      {AREAS_EQUIPE.map((area, indice) => (
        <SecaoArea key={area.id} area={area} indice={indice} />
      ))}
      <ChamadaFinal />
    </>
  );
}
