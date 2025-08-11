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


const HeroSection = () => {
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
    return(
              
    <section className="relative w-full h-[800px] md:h-[821px] sm:h-[936px] mt-20 md:mt-20 sm:mt-34">
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6f2f9ab0592be02ae32ab9735a18765d434326fd?width=2880"
            alt="Studio Universidade building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent"></div>
        </div>

        {/* Delivery Tag */}
        <div className="hidden md:flex absolute top-6 right-0 px-6 lg:px-14 justify-end">
           <div className="absolute top-4 -right-0 bg-studio-yellow px-4 py-2 shadow-md">
              <p className="text-studio-blue font-fanun md:text-lg text-base font-normal whitespace-nowrap">
                Previsão de entrega em: <span className="font-black">01/09/2025</span>
              </p>
            </div>
        </div>

        <div className="relative z-10 flex w-full h-full">
          <div className="flex flex-col justify-center px-6 sm:px-6 md:px-14 lg:px-14 max-w-full sm:max-w-full md:max-w-[544px] lg:max-w-[559px] sm:mt-12 md:mt-0">
            <div className="flex flex-col gap-6 lg:gap-10">
              <div className="flex flex-col gap-6 max-w-full sm:max-w-full md:max-w-[409px]">
                <h1 className="text-white font-fagun text-2xl sm:text-[32px] md:text-[40px] lg:text-[40px] font-black leading-[140%]">
                  Seu studio mobiliado no coração do Parque das Universidades
                </h1>
                <p className="text-white font-fagun text-lg sm:text-xl md:text-xl lg:text-xl font-normal">
                  Perto da PUC e principais hospitais. Ideal para estudantes,
                  médicos e profissionais da saúde.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H6.01M18 12H18.01M4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white font-fagun text-lg lg:text-xl font-normal">
                      A partir de R$ 2.500,00
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 5H19M19 5V11M19 5L5 19M11 19H5M5 19V13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white font-fagun text-lg lg:text-xl font-normal">
                      25m²
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 9V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V9M20 9C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18M20 9C19.4696 9 18.9609 9.21071 18.5858 9.58579C18.2107 9.96086 18 10.4696 18 11V12.5C18 12.6326 17.9473 12.7598 17.8536 12.8536C17.7598 12.9473 17.6326 13 17.5 13H6.5C6.36739 13 6.24021 12.9473 6.14645 12.8536C6.05268 12.7598 6 12.6326 6 12.5V11C6 10.4696 5.78929 9.96086 5.41421 9.58579C5.03914 9.21071 4.53043 9 4 9M4 9C3.46957 9 2.96086 9.21071 2.58579 9.58579C2.21071 9.96086 2 10.4696 2 11V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18M4 18H20M4 18V20M20 18V20M12 4V13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white font-fagun text-lg lg:text-xl font-normal">
                      Unidades mobiliadas
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 20V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10M5 10H19M5 10V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V10M19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V20M3 18H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white font-fagun text-lg lg:text-xl font-normal">
                      1 dormitório + vaga de garagem opcional
                    </span>
                  </div>
                </div>
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
          </div>
        </div>
      </section>
    )
}

export default HeroSection;