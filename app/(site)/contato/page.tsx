import type { Metadata } from "next";
import { Abertura } from "@/components/contato/Abertura";
import { Agendar } from "@/components/contato/Agendar";

export const metadata: Metadata = {
  title: "Contato e agendamento",
  description:
    "Agende presencial em Antônio Carlos/SC ou on-line para todo o Brasil. Fale com a Clínica Maya pelo WhatsApp.",
};

export default function Contato() {
  return (
    <>
      <Abertura />
      <Agendar />
    </>
  );
}
