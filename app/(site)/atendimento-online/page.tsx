import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Abertura } from "@/components/atendimento/Abertura";
import { ChamadaFinal } from "@/components/atendimento/ChamadaFinal";
import { ComoFunciona } from "@/components/atendimento/ComoFunciona";
import { Faq } from "@/components/atendimento/Faq";
import { OQueMuda } from "@/components/atendimento/OQueMuda";

export const metadata: Metadata = {
  title: "Atendimento on-line",
  description:
    "Consultas on-line de medicina e nutrição para todo o Brasil, com a mesma escuta do atendimento presencial. Como funciona, passo a passo.",
};

export default function AtendimentoOnline() {
  return (
    <>
      <CamadaGrafismos pagina="atendimento" />
      <Abertura />
      <ComoFunciona />
      <OQueMuda />
      <Faq />
      <ChamadaFinal />
    </>
  );
}
