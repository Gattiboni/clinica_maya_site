import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Abertura } from "@/components/dra-mayara/Abertura";
import { ChamadaFinal } from "@/components/dra-mayara/ChamadaFinal";
import { ComoEAConsulta } from "@/components/dra-mayara/ComoEAConsulta";
import { Formacao } from "@/components/dra-mayara/Formacao";
import { Sobre } from "@/components/dra-mayara/Sobre";

export const metadata: Metadata = {
  title: "Dra. Mayara Brasil",
  description:
    "Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya, em Antônio Carlos/SC. Consultas presenciais e on-line.",
};

export default function DraMayaraBrasil() {
  return (
    <>
      <CamadaGrafismos pagina="dra-mayara" />
      <Abertura />
      <Sobre />
      <ComoEAConsulta />
      <Formacao />
      <ChamadaFinal />
    </>
  );
}
