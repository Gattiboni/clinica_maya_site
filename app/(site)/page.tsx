import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Botao } from "@/components/ui/Botao";
import logo from "@/public/marca/logo-vertical-verde.png";

const WHATSAPP_URL = "https://wa.me/5548996205000";

export default function Home() {
  return (
    <main className="flex flex-1 items-center py-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Image
          src={logo}
          alt="Clínica Maya"
          priority
          sizes="(max-width: 640px) 160px, 220px"
          className="h-auto w-40 sm:w-56"
        />
        <h1 className="font-titulo text-4xl leading-tight sm:text-5xl">Esteja bem com você</h1>
        <p className="max-w-prose text-lg leading-relaxed sm:text-xl">
          Clínica de saúde integral em Antônio Carlos, Santa Catarina, com atendimento presencial e
          on-line.
        </p>
        <Botao href={WHATSAPP_URL}>Agendar consulta</Botao>
      </Container>
    </main>
  );
}
