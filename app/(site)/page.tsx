import type { Metadata } from "next";
import { Areas } from "@/components/home/Areas";
import { Blog } from "@/components/home/Blog";
import { ChamadaFinal } from "@/components/home/ChamadaFinal";
import { ComoComeca } from "@/components/home/ComoComeca";
import { Dores } from "@/components/home/Dores";
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
      <Hero />
      <Areas />
      <Dores />
      <Metodo />
      <ComoComeca />
      <FaixaEmagrecimento />
      <DraMayara />
      {/* §Home 8 · Prova social: não renderizada. Ver docs/copy-site-v1.md §Home 8. */}
      <Blog />
      <ChamadaFinal />
    </>
  );
}
