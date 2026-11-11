import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Abertura } from "@/components/metodo/Abertura";
import { ChamadaFinal } from "@/components/metodo/ChamadaFinal";
import { ComoComeca } from "@/components/metodo/ComoComeca";
import { Diferenciais } from "@/components/metodo/Diferenciais";
import { Etapas } from "@/components/metodo/Etapas";
import { Pilares } from "@/components/metodo/Pilares";

export const metadata: Metadata = {
  title: "Método Maya",
  description:
    "Humanização e ciência caminhando juntas: os quatro pilares e as quatro etapas da jornada na Clínica Maya.",
};

export default function Metodo() {
  return (
    <>
      <CamadaGrafismos pagina="metodo" />
      <Abertura />
      <Pilares />
      <Etapas />
      <Diferenciais />
      <ComoComeca />
      <ChamadaFinal />
    </>
  );
}
