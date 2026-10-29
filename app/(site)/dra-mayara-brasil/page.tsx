import type { Metadata } from "next";
import { Abertura } from "@/components/dra-mayara/Abertura";
import { ChamadaFinal } from "@/components/dra-mayara/ChamadaFinal";
import { ComoAtende } from "@/components/dra-mayara/ComoAtende";
import { FormacaoRegistro } from "@/components/dra-mayara/FormacaoRegistro";
import { Trajetoria } from "@/components/dra-mayara/Trajetoria";

export const metadata: Metadata = {
  title: "Dra. Mayara Brasil",
  description:
    "Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya, em Antônio Carlos/SC. Consultas presenciais e on-line.",
};

export default function DraMayaraBrasil() {
  return (
    <>
      <Abertura />
      <Trajetoria />
      <ComoAtende />
      <FormacaoRegistro />
      <ChamadaFinal />
    </>
  );
}
