import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Abertura } from "@/components/emagrecimento/Abertura";
import { ConhecaDra } from "@/components/emagrecimento/ConhecaDra";
import { ChamadaFinal } from "@/components/emagrecimento/ChamadaFinal";
import { Faq } from "@/components/emagrecimento/Faq";
import { OQueFazParte } from "@/components/emagrecimento/OQueFazParte";
import { PortaDeEntrada } from "@/components/emagrecimento/PortaDeEntrada";
import { Programas } from "@/components/emagrecimento/Programas";
import { QuemFazParte } from "@/components/emagrecimento/QuemFazParte";

export const metadata: Metadata = {
  title: "Emagrecimento saudável",
  description:
    "Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. A porta de entrada é a consulta com a Dra. Mayara.",
};

export default function Emagrecimento() {
  return (
    <>
      <CamadaGrafismos pagina="emagrecimento" />
      <Abertura />
      <PortaDeEntrada />
      <ConhecaDra />
      <QuemFazParte />
      <OQueFazParte />
      <Programas />
      <Faq />
      <ChamadaFinal />
    </>
  );
}
