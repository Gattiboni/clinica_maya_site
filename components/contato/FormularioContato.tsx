"use client";

import { useId, useState, type FormEvent } from "react";
import { ID_MODAL_POLITICA } from "@/components/politica/ModalPolitica";
import {
  AREA_PADRAO,
  MODALIDADE_PADRAO,
  montarMensagemWhatsApp,
  OPCOES_AREA,
  OPCOES_MODALIDADE,
  urlWhatsAppComMensagem,
  type OpcaoArea,
  type OpcaoModalidade,
} from "@/lib/conteudo/contato";
import { MOV } from "@/lib/movimento";

const CLASSES_ROTULO = "text-nota font-bold tracking-wide";

const CLASSES_CAMPO = `${MOV.transicaoHover} w-full rounded-xl border border-marrom/35 bg-bege px-4 py-3.5 text-corpo text-verde outline-none transition-colors focus-visible:border-verde focus-visible:ring-2 focus-visible:ring-verde/40 aria-invalid:border-marrom aria-invalid:ring-2 aria-invalid:ring-marrom/40`;

const CLASSES_CHIP = `${MOV.transicaoHover} inline-block cursor-pointer rounded-pilula border border-marrom/35 bg-creme px-4.5 py-2 text-nota font-bold tracking-wide whitespace-nowrap text-verde transition-colors hover:border-verde peer-checked:border-verde peer-checked:bg-verde peer-checked:text-bege peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-verde`;

const CLASSES_BOTAO = `${MOV.transicaoHover} inline-flex items-center justify-center self-start rounded-pilula bg-verde px-9 py-4 text-botao font-bold whitespace-nowrap text-bege transition-[color,background-color,opacity] hover:bg-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-verde`;

type GrupoChipsProps<T extends string> = {
  legenda: string;
  nome: string;
  opcoes: readonly T[];
  valor: T;
  aoMudar: (valor: T) => void;
};

/** Chips de escolha única: `<input type="radio">` só para leitor de tela e teclado, rótulo estilizado como pílula. */
function GrupoChips<T extends string>({
  legenda,
  nome,
  opcoes,
  valor,
  aoMudar,
}: GrupoChipsProps<T>) {
  return (
    <fieldset className="flex flex-col gap-2.5">
      <legend className={`${CLASSES_ROTULO} mb-2.5`}>{legenda}</legend>
      <div className="flex flex-wrap gap-2.5">
        {opcoes.map((opcao) => (
          <label key={opcao}>
            <input
              type="radio"
              name={nome}
              value={opcao}
              checked={valor === opcao}
              onChange={() => aoMudar(opcao)}
              className="peer sr-only"
            />
            <span className={CLASSES_CHIP}>{opcao}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * §Contato 2 · Formulário. Segundo client component do site (Decisão 001:
 * "client components só para movimento e formulário"). Só monta o texto da
 * copy e abre o WhatsApp da pessoa em nova aba: nenhum `fetch`, server action
 * ou armazenamento. Sem nome, o botão fica desabilitado e o campo, marcado
 * obrigatório (`required`; `aria-invalid` depois que a pessoa sai do campo vazio).
 *
 * Movimento (Fase 4), só por classes: campos entram em sequência de 60ms na
 * chegada; chips e botão com transições de 200ms. O botão habilitado é outro
 * elemento (`<a>` no lugar do `<button disabled>`), então a troca não transiciona.
 * O link "política de privacidade" é um `<button popovertarget>` (afinação 1,
 * 2.10): abre a política num modal nativo, sem JavaScript, sem sair do
 * formulário; a página da política continua no footer.
 */
export function FormularioContato() {
  const id = useId();
  const [nome, setNome] = useState("");
  const [nomeTocado, setNomeTocado] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [area, setArea] = useState<OpcaoArea>(AREA_PADRAO);
  const [modalidade, setModalidade] = useState<OpcaoModalidade>(MODALIDADE_PADRAO);
  const [mensagem, setMensagem] = useState("");

  const nomeValido = nome.trim().length > 0;
  const href = nomeValido
    ? urlWhatsAppComMensagem(montarMensagemWhatsApp({ nome, whatsapp, area, modalidade, mensagem }))
    : null;

  // O formulário não envia nada: a única saída é o link do WhatsApp.
  const impedirEnvio = (evento: FormEvent<HTMLFormElement>) => evento.preventDefault();

  return (
    <form
      onSubmit={impedirEnvio}
      noValidate
      className={`${MOV.revealStagger} mt-5 flex max-w-lg flex-col gap-5`}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-nome`} className={CLASSES_ROTULO}>
          Nome
        </label>
        <input
          id={`${id}-nome`}
          type="text"
          name="nome"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={nomeTocado && !nomeValido ? true : undefined}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          onBlur={() => setNomeTocado(true)}
          className={CLASSES_CAMPO}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-whatsapp`} className={CLASSES_ROTULO}>
          WhatsApp
        </label>
        <input
          id={`${id}-whatsapp`}
          type="tel"
          name="whatsapp"
          autoComplete="tel"
          value={whatsapp}
          onChange={(evento) => setWhatsapp(evento.target.value)}
          className={CLASSES_CAMPO}
        />
      </div>

      <GrupoChips
        legenda="Com quem você quer agendar?"
        nome="area"
        opcoes={OPCOES_AREA}
        valor={area}
        aoMudar={setArea}
      />

      <GrupoChips
        legenda="Como prefere ser atendida?"
        nome="modalidade"
        opcoes={OPCOES_MODALIDADE}
        valor={modalidade}
        aoMudar={setModalidade}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-mensagem`} className={CLASSES_ROTULO}>
          Mensagem (opcional)
        </label>
        <textarea
          id={`${id}-mensagem`}
          name="mensagem"
          rows={3}
          value={mensagem}
          onChange={(evento) => setMensagem(evento.target.value)}
          className={`${CLASSES_CAMPO} min-h-20 resize-y`}
        />
      </div>

      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={CLASSES_BOTAO}>
          Enviar pelo WhatsApp
        </a>
      ) : (
        <button type="button" disabled className={CLASSES_BOTAO}>
          Enviar pelo WhatsApp
        </button>
      )}

      <p className="text-legenda">
        Ao enviar, você concorda com a nossa{" "}
        <button
          type="button"
          popoverTarget={ID_MODAL_POLITICA}
          className="cursor-pointer underline underline-offset-3 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
        >
          política de privacidade
        </button>
        .
      </p>
    </form>
  );
}
