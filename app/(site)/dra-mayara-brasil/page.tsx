import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Abertura } from "@/components/dra-mayara/Abertura";
import { ChamadaFinal } from "@/components/dra-mayara/ChamadaFinal";
import {
  NAO_PROMETO,
  O_QUE_ATENDO,
  POR_QUE,
  PRIMEIRA_CONSULTA,
} from "@/components/dra-mayara/conteudo";
import { Formacao } from "@/components/dra-mayara/Formacao";
import { Frase } from "@/components/dra-mayara/Frase";
import { SecaoProsa } from "@/components/dra-mayara/SecaoProsa";

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
      <SecaoProsa bloco={O_QUE_ATENDO} fundo="creme" />
      <SecaoProsa bloco={PRIMEIRA_CONSULTA} fundo="bege" />
      <SecaoProsa bloco={NAO_PROMETO} fundo="creme" />
      <SecaoProsa bloco={POR_QUE} fundo="bege" />
      <Formacao />
      <Frase />
      <ChamadaFinal />
    </>
  );
}
