const Location = () => {
  const GLASS_CLASSES =
    "bg-white/55 backdrop-blur-md backdrop-saturate-150 ring-1 ring-white/50 border border-white/30 shadow-md rounded-[32px]";

  const points = [
    { title: "PUC", desc: "A apenas 2 min do campus principal da PUC-Campinas." },
    { title: "Hospital Madre Theodora", desc: "Atendimento médico a 4 min de distância." },
    { title: "Oxxo Puccamp", desc: "Conveniência 24h logo ali na esquina." },
    { title: "Ronaldo Academy", desc: "Escola de futebol para crianças, bem pertinho do prédio." },
  ];

  const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" aria-hidden="true">
      <path d="M20 10.334C20 15.327 14.461 20.527 12.601 22.133C12.4277 22.2633 12.2168 22.3337 12 22.3337C11.7832 22.3337 11.5723 22.2633 11.399 22.133C9.539 20.527 4 15.327 4 10.334C4 8.21225 4.84285 6.17742 6.34315 4.67713C7.84344 3.17684 9.87827 2.33398 12 2.33398C14.1217 2.33398 16.1566 3.17684 17.6569 4.67713C19.1571 6.17742 20 8.21225 20 10.334Z" stroke="#161F2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13.334C13.6569 13.334 15 11.9908 15 10.334C15 8.67713 13.6569 7.33398 12 7.33398C10.3431 7.33398 9 8.67713 9 10.334C9 11.9908 10.3431 13.334 12 13.334Z" stroke="#161F2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CheckPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 10L11 12L15 8M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#161F2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PointItem = ({ title, desc }: { title: string; desc: string }) => (
    <div className="flex items-start gap-2 w-[260px] min-w-[220px]">
      <CheckPinIcon />
      <div className="min-w-0">
        <h3 className="text-studio-dark font-fanun text-base lg:text-lg font-bold leading-tight">
          {title}
        </h3>
        <p className="text-studio-dark/80 font-fanun text-sm leading-snug">{desc}</p>
      </div>
    </div>
  );

  return (
    <section id="localizacao" className="flex max-w-full flex-col items-start gap-6 py-20">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center gap-6 w-full px-6 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-studio-dark font-fanun text-xl sm:text-2xl md:text-2xl lg:text-[32px] font-black text-center">
          Localização estratégica em Campinas
        </h2>
        <p className="text-studio-dark text-center font-fanun text-lg sm:text-xl md:text-xl lg:text-xl font-normal max-w-[1174px]">
          A poucos passos da PUC-Campinas, hospitais, supermercados e outros serviços essenciais, o
          Studio Universidades está em uma das regiões mais valorizadas da cidade. Ideal para quem
          busca mobilidade, segurança e praticidade no dia a dia.
        </p>
      </div>

      {/* Mapa + Overlays */}
      <div className="flex flex-col items-center gap-6 w-full px-6 sm:px-6 md:px-10 lg:px-20">
        <div className="relative w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e563373a49c87f5bcbb34b6b423502f43d870499?width=2880"
            alt="Mapa da região do Studio Universidades em Campinas"
            className="h-[280px] md:h-[280px] lg:h-[560px] w-full aspect-[18/7] rounded-[32px] object-cover"
          />

          {/* Pílula de endereço - sempre visível como overlay */}
          <div
            className={`flex ${GLASS_CLASSES} absolute left-1/2 -translate-x-1/2 top-3 md:-top-6 
                        items-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 max-w-[780px] w-[90%] justify-center`}
            aria-label="Endereço"
          >
            <MapPinIcon />
            <span className="text-studio-dark text-center font-fanun text-xs md:text-base leading-[120%] truncate">
              Rua Valentina Penteado de Freitas, 252 — Parque das Universidades — Campinas/SP
            </span>
          </div>

          {/* Barra de pontos (overlay em lg+) */}
          <div
            className={`hidden lg:flex ${GLASS_CLASSES} absolute left-1/2 -translate-x-1/2 -bottom-6 
                        w-[92%] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-6 lg:gap-10`}
            aria-label="Pontos de interesse próximos"
          >
            {points.map((p) => (
              <PointItem key={p.title} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>

        {/* Versão mobile/tablet dos pontos de interesse */}
        <div className={`lg:hidden ${GLASS_CLASSES} px-6 py-6 w-full max-w-[520px] mx-auto`}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {points.slice(0, 2).map((p) => (
                <PointItem key={p.title} title={p.title} desc={p.desc} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {points.slice(2).map((p) => (
                <PointItem key={p.title} title={p.title} desc={p.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
