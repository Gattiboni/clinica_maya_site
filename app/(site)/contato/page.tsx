import type { Metadata } from "next";
import { Abertura } from "@/components/contato/Abertura";
import { Agendar } from "@/components/contato/Agendar";
import { ModalPolitica } from "@/components/politica/ModalPolitica";

export const metadata: Metadata = {
  title: "Contato e agendamento",
  description:
    "Agende presencial em Antônio Carlos/SC ou on-line para todo o Brasil. Fale com a Clínica Maya pelo WhatsApp.",
};

/** O modal da Política de privacidade (`popover`) fica depois do formulário, que o abre pelo link "política de privacidade". */
export default function Contato() {
  return (
    <>
      <Abertura />
      <Agendar />
      <ModalPolitica />
    </>
  );
}
