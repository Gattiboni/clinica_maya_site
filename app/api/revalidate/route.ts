import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type CorpoWebhook = {
  _type: string;
  slug?: { current?: string };
};

/**
 * Webhook de revalidação chamado pelo Sanity a cada publicação.
 *
 * Configuração no painel do Sanity (API > Webhooks): URL
 * https://<dominio>/api/revalidate, método POST, dataset production,
 * trigger em create/update/delete, projection `{_type, slug}`, e o mesmo
 * segredo de SANITY_REVALIDATE_SECRET no campo Secret. A assinatura do
 * pedido é verificada aqui antes de qualquer ação.
 *
 * Fase 1: revalida o site inteiro. Quando as páginas buscarem conteúdo com
 * tags por tipo, trocar por `revalidateTag(body._type, "max")`.
 */
export async function POST(req: NextRequest) {
  const segredo = process.env.SANITY_REVALIDATE_SECRET;

  if (!segredo) {
    return NextResponse.json(
      { mensagem: "SANITY_REVALIDATE_SECRET não configurado no servidor." },
      { status: 503 },
    );
  }

  try {
    const { isValidSignature, body } = await parseBody<CorpoWebhook>(req, segredo);

    if (!isValidSignature) {
      return NextResponse.json({ mensagem: "Assinatura inválida." }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ mensagem: "Corpo do webhook sem _type." }, { status: 400 });
    }

    revalidatePath("/", "layout");

    return NextResponse.json({
      revalidado: true,
      tipo: body._type,
      slug: body.slug?.current ?? null,
      em: new Date().toISOString(),
    });
  } catch (erro) {
    const mensagem = erro instanceof Error ? erro.message : "Erro desconhecido.";
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}
