import { useState } from "react";
const HUBSPOT_PREFIX = ""; 
const FIXED_CITY = "Campinas";
const portalId = import.meta.env.VITE_PUBLIC_HUBSPOT_PORTAL_ID!;
const formId  = import.meta.env.VITE_PUBLIC_HUBSPOT_FORM_ID_MONETIZE_RENT!;

function getHubspotUtk() {
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
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

function toHubspotVisitFields(phone: string) {
  const fixedName = "LeadStudioUniversidades";
  const fixedEmail = `${fixedName}@gmail.com`;

  if (HUBSPOT_PREFIX) {
    return [
      { name: `${HUBSPOT_PREFIX}_nome`, value: fixedName },
      { name: `${HUBSPOT_PREFIX}_email`, value: fixedEmail },
      { name: `${HUBSPOT_PREFIX}_telefone`, value: phone },
      { name: `${HUBSPOT_PREFIX}_city`, value: FIXED_CITY },
      { name: `${HUBSPOT_PREFIX}_origem_form`, value: "Agendar Visita - Studio Universidades" },
    ];
  }
  return [
    { name: "firstname", value: fixedName },
    { name: "email", value: fixedEmail },
    { name: "phone", value: phone },
    { name: "city", value: FIXED_CITY },
    { name: "origem_form", value: "Agendar Visita - Studio Universidades" }, // opcional
  ];
}

const Decorated = () => {
    const [phone, setPhone] = useState("");
    const [sending, setSending] = useState(false);
  
    const handleVisitSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const clean = phone.replace(/\D/g, "");
      if (clean.length < 10) {
        alert("Digite um telefone válido.");
        return;
      }
      try {
        setSending(true);
        const fields = toHubspotVisitFields(phone);
        const payload = {
          fields,
          // contexto ajuda a rastrear a origem no HubSpot (opcional, mas recomendado)
          context: {
            hutk: getHubspotUtk(),
            pageUri: window.location.href,
            pageName: "Studio Universidades - Hero",
          },
        };
        await submitToHubspot(payload);
        setPhone("");
        alert("Recebemos seu telefone! Em breve entraremos em contato. 🙌");
      } catch (err) {
        console.error(err);
        alert("Não foi possível enviar agora. Tente novamente em instantes.");
      } finally {
        setSending(false);
      }
    };
  return (
    <section className="px-6 sm:px-6 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row items-center bg-studio-gray-bg rounded-2xl px-6 py-8 gap-8 w-full">

        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-studio-dark font-fagun font-bold text-2xl">
            Conheça o decorado de perto
          </h3>
          <div className="flex items-center gap-2 text-studio-gray font-fagun font-normal text-base">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10.5C20 15.493 14.461 20.693 12.601 22.299C12.4277 22.4293 12.2168 22.4998 12 22.4998C11.7832 22.4998 11.5723 22.4293 11.399 22.299C9.539 20.693 4 15.493 4 10.5C4 8.37827 4.84285 6.34344 6.34315 4.84315C7.84344 3.34285 9.87827 2.5 12 2.5C14.1217 2.5 16.1566 3.34285 17.6569 4.84315C19.1571 6.34344 20 8.37827 20 10.5Z"
                stroke="#404A53"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                stroke="#404A53"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Rua Valentina Penteado de Freitas, 252 – Parque das Universidades
              – Campinas/SP
            </span>
          </div>
        </div>

        <div className="hidden md:flex lg:flex-1 justify-center px-4 text-center">
          <p className="text-studio-gray font-fagun font-normal text-xl">
            Visite a unidade decorada e veja de perto cada detalhe dos
            ambientes.
          </p>
        </div>

        <form onSubmit={handleVisitSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <input
                  type="tel"
                  placeholder="(11) 99999-1111"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full sm:w-40 lg:w-60 px-4 py-3 rounded-full bg-white border border-studio-gray-light text-studio-dark font-fagun focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-3 lg:ml-[-5rem] md:ml-[-5rem] rounded-full bg-studio-blue text-white font-fagun hover:bg-opacity-90 transition disabled:opacity-70"
                >
                  {sending ? "Enviando..." : "Agendar Visita"}
                </button>
              </form>
      </div>
    </section>
  );
};

export default Decorated;
