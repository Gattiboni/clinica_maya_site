import type { Metadata } from "next";
import { Abertura } from "@/components/equipe/Abertura";
import { ChamadaFinal } from "@/components/equipe/ChamadaFinal";
import { PopupProfissional } from "@/components/equipe/PopupProfissional";
import { SecaoArea } from "@/components/equipe/SecaoArea";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { AREAS_EQUIPE, PROFISSIONAIS_COM_BIO } from "@/lib/conteudo/equipe";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Medicina, nutrição, psicologia, terapia e saúde capilar em Antônio Carlos/SC e on-line: conheça quem cuida de você na Clínica Maya.",
};

/** Os pop-ups das profissionais (`popover`, um por bio) ficam depois das seções, no fim do `<main>`. */
export default function Equipe() {
  return (
    <>
      <CamadaGrafismos pagina="equipe" />
      <Abertura />
      {AREAS_EQUIPE.map((area, indice) => (
        <SecaoArea key={area.id} area={area} indice={indice} />
      ))}
      <ChamadaFinal />
      {PROFISSIONAIS_COM_BIO.map((profissional) => (
        <PopupProfissional key={profissional.id} profissional={profissional} />
      ))}
    </>
  );
}
