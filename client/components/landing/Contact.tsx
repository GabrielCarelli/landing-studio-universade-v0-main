"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";



const HUBSPOT_PREFIX = ""; // 🔁 Troque aqui o prefixo que quer enviar (ou deixe "" para usar nomes padrão)

const portalId = import.meta.env.VITE_PUBLIC_HUBSPOT_PORTAL_ID!;
const formId = import.meta.env.VITE_PUBLIC_HUBSPOT_FORM_ID_NEW_HOME!;

type FormValues = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem?: string;
};

if (!portalId || !formId){
  console.log("hubspots deram erro")
}
function getHubspotUtk() {
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function toHubspotFields(data: FormValues) {
  if (HUBSPOT_PREFIX) {
    return [
      { name: `${HUBSPOT_PREFIX}_nome`, value: data.nome },
      { name: `${HUBSPOT_PREFIX}_email`, value: data.email },
      data.telefone ? { name: `${HUBSPOT_PREFIX}_telefone`, value: data.telefone } : null,
      data.mensagem ? { name: `${HUBSPOT_PREFIX}_mensagem`, value: data.mensagem } : null,
      // Exemplo de meta extra:
      { name: `${HUBSPOT_PREFIX}_origem_form`, value: "Contato - Studio Universidades" },
    ].filter(Boolean);[
  {
    "name": "firstname",
    "value": "teste0908"
  },
  {
    "name": "email",
    "value": "teste0908@gmail.com"
  },
  {
    "name": "phone",
    "value": "090909090908"
  },
  {
    "name": "message",
    "value": "teste0908"
  }
]
  }

  return [
    { name: "firstname", value: data.nome },
    { name: "email", value: data.email },
    data.telefone ? { name: "phone", value: data.telefone } : null,
    data.mensagem ? { name: "message", value: data.mensagem } : null,
  ].filter(Boolean);
}

async function submitToHubspot(payload: any) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || `Erro HubSpot: ${res.status}`);
  }
}

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: { nome: "", email: "", telefone: "", mensagem: "" },
  });
  const { isSubmitting } = formState;
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const fields = toHubspotFields(data);

      const payload = {
        fields,
      };

      await submitToHubspot(payload);
      setSent(true);
      reset();
    } catch (e) {
      console.error(e);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  return (
    <section
      id="contato"
      className="flex flex-col lg:flex-row lg:h-[600px] px-6 sm:px-6 md:px-10 lg:px-20 items-center gap-10 lg:gap-20 py-20 mb-20"
    >
      <div className="flex w-full lg:w-[580px] flex-col justify-center items-start gap-6">
        <div className="flex flex-col items-start gap-6 w-full">
          <h2 className="text-studio-dark font-fanun text-2xl font-black">Quero morar aqui</h2>
          <p className="text-studio-gray font-fanun text-xl font-normal">
            Ficou interessado? Nossos consultores vão entrar em contato.
          </p>

          <a
            href="https://www.instagram.com/housebitapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-studio-dark hover:text-studio-blue transition-colors"
            aria-label="Instagram"
          >
            {/* ...teu SVG do Instagram aqui... */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{/* ... */}</svg>
          </a>
        </div>

        {/* FORM */}
        {!sent ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-6 w-full">
            {/* Nome */}
            <div className="flex flex-col items-start gap-1 w-full">
              <label className="text-studio-dark font-fanun text-sm">Nome</label>
              <div className="h-10 w-full relative">
                <input
                  type="text"
                  placeholder="Maria da Silva"
                  {...register("nome", { required: true, minLength: 2 })}
                  className="w-full h-10 rounded-full border border-studio-gray-light bg-white px-5 text-studio-dark font-fanun text-base outline-none"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col items-start gap-1 w-full">
              <label className="text-studio-dark font-fanun text-sm">E-mail</label>
              <div className="h-10 w-full relative">
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className="w-full h-10 rounded-full border border-studio-gray-light bg-white px-5 text-studio-dark font-fanun text-base outline-none"
                />
              </div>
            </div>

            {/* Telefone (opcional) */}
            <div className="flex flex-col items-start gap-1 w-full">
              <label className="text-studio-dark font-fanun text-sm">
                Telefone <span>(opcional)</span>
              </label>
              <div className="h-10 w-full relative">
                <input
                  type="tel"
                  placeholder="(11) 99999-1111"
                  {...register("telefone")}
                  className="w-full h-10 rounded-full border border-studio-gray-light bg-white px-5 text-studio-dark font-fanun text-base outline-none"
                />
              </div>
            </div>

            {/* Mensagem (opcional) */}
            <div className="flex flex-col items-start gap-1 w-full">
              <label className="text-studio-dark font-fanun text-sm">
                Mensagem <span>(opcional)</span>
              </label>
              <div className="w-full relative">
                <textarea
                  placeholder="Conte um pouco sobre o que você procura…"
                  {...register("mensagem")}
                  className="w-full min-h-24 rounded-2xl border border-studio-gray-light bg-white px-5 py-3 text-studio-dark font-fanun text-base outline-none resize-y"
                />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              className="flex h-12 px-6 justify-center items-center gap-2.5 w-full rounded-full bg-studio-dark text-white font-fanun text-lg hover:bg-opacity-90 transition-all disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Receber proposta personalizada"}
            </button>
          </form>
        ) : (
          // Estado de sucesso simples
          <div className="w-full rounded-2xl border border-studio-gray-light bg-white p-6 text-studio-dark">
            <p className="font-fanun text-xl font-bold mb-1">Tudo certo com seu envio.</p>
            <p className="font-fanun">
              Seus dados foram enviados. Você receberá uma simulação personalizada em breve.
            </p>
            <button
              className="mt-4 inline-flex h-10 px-5 items-center justify-center rounded-full bg-studio-dark text-white hover:bg-opacity-90"
              onClick={() => setSent(false)}
            >
              Preencher novo formulário
            </button>
          </div>
        )}
      </div>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a0240e2885e5b71dcdcd5ec7119ff9d9c9f469c2?width=1240"
        alt="Studio apartment exterior"
        className="w-full lg:h-[605px] lg:flex-1 rounded-lg object-cover"
      />
    </section>
  );
};

export default Contact;
