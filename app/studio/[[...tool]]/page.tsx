import type { Metadata, Viewport } from "next";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";
import { Container } from "@/components/layout/Container";
import { sanityConfigurado } from "@/lib/sanity/env";
import { Studio } from "./Studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Sanity Studio",
};

export const viewport: Viewport = studioViewport;

export default function StudioPage() {
  if (!sanityConfigurado) {
    return (
      <main className="flex flex-1 items-center py-16">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl">Sanity não configurado</h1>
          <p className="max-w-prose text-lg">
            Preencha NEXT_PUBLIC_SANITY_PROJECT_ID e NEXT_PUBLIC_SANITY_DATASET no arquivo
            .env.local e reinicie o servidor para abrir o Studio.
          </p>
        </Container>
      </main>
    );
  }

  return <Studio />;
}
