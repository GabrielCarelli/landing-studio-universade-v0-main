"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Instagram } from "lucide-react";

const HUBSPOT_PREFIX = "";
const FIXED_CITY = "Campinas";

const portalId = import.meta.env.VITE_PUBLIC_HUBSPOT_PORTAL_ID!;
const formId = import.meta.env.VITE_PUBLIC_HUBSPOT_FORM_ID_MONETIZE_RENT!;

type FormValues = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem?: string;
  city: string;
};

if (!portalId || !formId) {
  console.log("HubSpot não configurado corretamente");
}

/**
 * Mapeia os campos do formulário para as propriedades do HubSpot:
 * - firstname, email, phone, property_detail, sales_contact_type, interest,
 *   city, nome_da_imobiliaria, tipo_de_imovel, finalidade, property_type.
 *
 * Se quiser usar prefixo, preencha HUBSPOT_PREFIX (ex.: "leadstudio")
 * e garanta que esses campos existam no HubSpot.
 */
function toHubspotFields(data: FormValues) {
  const F = (name: string) => (HUBSPOT_PREFIX ? `${HUBSPOT_PREFIX}_${name}` : name);

  return [
    { name: F("firstname"), value: data.nome },
    { name: F("email"), value: data.email },
    data.telefone ? { name: F("phone"), value: data.telefone } : null,
    data.mensagem ? { name: F("property_detail"), value: data.mensagem } : null,

    // Campos fixos solicitados
    { name: F("sales_contact_type"), value: "Inquilino" },
    { name: F("interest"), value: "Studio Universidades / Soul Taquaral" },
    { name: F("city"), value: FIXED_CITY },
    {
      name: F("nome_da_imobiliaria"),
      value: "EasyStudios (Studio Taquaral) / De Sodi Broker (Soul Taquaral)",
    },
    { name: F("tipo_de_imovel"), value: "Studio (Studio Taquaral) / Casa (Soul Taquaral)" },
    { name: F("finalidade"), value: "Locação (Studio Taquaral) / Venda (Soul Taquaral)" },
    { name: F("property_type"), value: "Residencial" },
  ].filter(Boolean) as { name: string; value: string }[];
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
      await submitToHubspot({ fields });
      setSent(true);
      reset();
    } catch (e) {
      console.error(e);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Texto + Form */}
        <div className="w-full lg:w-[580px]">
          <div className="mb-6">
            <h2 className="text-soul-dark font-fagun text-2xl font-black mb-6">
              Quero morar aqui
            </h2>
            <p className="text-soul-gray font-fagun text-xl font-normal mb-6">
              Incentive o contato com um tom amigável. Quanto mais simples o formulário, maior a chance de conversão.
            </p>
            <a
              href="https://www.instagram.com/housebitapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 text-soul-dark hover:text-soul-blue transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Maria da Silva"
                  {...register("nome", { required: true, minLength: 2 })}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Telefone <span className="text-soul-dark">(opcional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-1111"
                  {...register("telefone")}
                  className="w-full px-5 py-3 border border-soul-light-gray rounded-full text-base placeholder-soul-light-gray font-fagun"
                />
              </div>

              <div>
                <label className="block text-soul-dark font-fagun text-sm font-normal mb-1">
                  Mensagem <span className="text-soul-dark">(opcional)</span>
                </label>
                <textarea
                  placeholder="Conte um pouco sobre o que você procura…"
                  rows={3}
                  {...register("mensagem")}
                  className="w-full px-5 py-3 border border-studio-light-gray rounded-2xl text-base placeholder-soul-light-gray resize-none font-fagun"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-studio-dark text-white py-4 px-8 rounded-full text-xl font-fagun font-normal hover:bg-opacity-90 transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Receber proposta personalizada"}
              </button>
            </form>
          ) : (
            <div className="w-full rounded-2xl border border-studio-light-gray bg-white p-6 text-studio-dark">
              <p className="font-fagun text-xl font-bold mb-1">Tudo certo com seu envio.</p>
              <p className="font-fagun">
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

        {/* Imagem */}
        <img
          src="https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.25%20(3).jpeg?raw=true"
          alt="Imagem de contato"
          className="w-96 lg:flex-1 lg:h-[605px] object-cover rounded-lg mb-[-5rem] "
        />
      </div>
    </section>
  );
};

export default Contact;
