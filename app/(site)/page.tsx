import type { Metadata } from "next";
import { CamadaGrafismos } from "@/components/layout/CamadaGrafismos";
import { Areas } from "@/components/home/Areas";
import { Avaliacoes } from "@/components/home/Avaliacoes";
import { Blog } from "@/components/home/Blog";
import { ChamadaFinal } from "@/components/home/ChamadaFinal";
import { ComoComeca } from "@/components/home/ComoComeca";
import { DraMayara } from "@/components/home/DraMayara";
import { FaixaEmagrecimento } from "@/components/home/FaixaEmagrecimento";
import { Hero } from "@/components/home/Hero";
import { Metodo } from "@/components/home/Metodo";
import { CLINICA } from "@/lib/conteudo/clinica";

// ISR: a seção Blog relê o Sanity a cada 60s (padrão da Spinhardi); a página continua estática.
export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: CLINICA.nome },
  description: CLINICA.descricaoCurta,
};

export default function Home() {
  return (
    <>
      <CamadaGrafismos pagina="home" />
      <Hero />
      <Areas />
      <Metodo />
      <ComoComeca />
      <FaixaEmagrecimento />
      <DraMayara />
      <Avaliacoes />
      <Blog />
      <ChamadaFinal />
    </>
  );
}
