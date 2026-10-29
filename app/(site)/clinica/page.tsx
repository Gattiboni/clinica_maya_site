import type { Metadata } from "next";
import { Abertura } from "@/components/clinica/Abertura";
import { ChamadaFinal } from "@/components/clinica/ChamadaFinal";
import { CirculoMaya } from "@/components/clinica/CirculoMaya";
import { Espaco } from "@/components/clinica/Espaco";
import { Manifesto } from "@/components/clinica/Manifesto";
import { QuemFaz } from "@/components/clinica/QuemFaz";

export const metadata: Metadata = {
  title: "A Clínica",
  description:
    "Acolher, compreender e transformar: a essência da Clínica Maya, em Antônio Carlos/SC e on-line.",
};

export default function AClinica() {
  return (
    <>
      <Abertura />
      <Manifesto />
      <Espaco />
      <CirculoMaya />
      <QuemFaz />
      <ChamadaFinal />
    </>
  );
}
