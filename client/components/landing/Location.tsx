const Location = () => {
    return(
        <section
        id="localizacao"
        className="flex max-w-full flex-col items-start gap-6 py-20"
      >
        <div className="flex flex-col items-center gap-6 w-full px-6 sm:px-6 md:px-10 lg:px-20">
          <h2 className="text-studio-dark font-fanun text-xl sm:text-2xl md:text-2xl lg:text-[32px] font-black text-center">
            Localização estratégica em Campinas
          </h2>
          <p className="text-studio-dark text-center font-fanun text-lg sm:text-xl md:text-xl lg:text-xl font-normal max-w-[1174px]">
            A poucos passos da PUC-Campinas, hospitais, supermercados e outros
            serviços essenciais, o Studio Universidades está em uma das regiões
            mais valorizadas da cidade. Ideal para quem busca mobilidade,
            segurança e praticidade no dia a dia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          {/* Desktop/Tablet Address */}
          <div className="hidden md:flex px-6 lg:px-14 py-4 justify-center items-center gap-2 rounded-[32px] bg-white/40 backdrop-blur-sm max-w-[520px] md:max-w-[520px] lg:max-w-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10.334C20 15.327 14.461 20.527 12.601 22.133C12.4277 22.2633 12.2168 22.3337 12 22.3337C11.7832 22.3337 11.5723 22.2633 11.399 22.133C9.539 20.527 4 15.327 4 10.334C4 8.21225 4.84285 6.17742 6.34315 4.67713C7.84344 3.17684 9.87827 2.33398 12 2.33398C14.1217 2.33398 16.1566 3.17684 17.6569 4.67713C19.1571 6.17742 20 8.21225 20 10.334Z"
                stroke="#161F2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.334C13.6569 13.334 15 11.9908 15 10.334C15 8.67713 13.6569 7.33398 12 7.33398C10.3431 7.33398 9 8.67713 9 10.334C9 11.9908 10.3431 13.334 12 13.334Z"
                stroke="#161F2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-studio-dark text-center font-fanun text-base font-normal leading-[120%] flex-1">
              Rua Valentina Penteado de Freitas, 252 - Parque das Universidades
              - Campinas/SP
            </span>
          </div>

          {/* Mobile Address */}
          <div className="flex md:hidden px-6 py-4 justify-center items-center gap-2 rounded-[32px] bg-white/40 backdrop-blur-sm w-[312px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10.5C20 15.493 14.461 20.693 12.601 22.299C12.4277 22.4293 12.2168 22.4998 12 22.4998C11.7832 22.4998 11.5723 22.4293 11.399 22.299C9.539 20.693 4 15.493 4 10.5C4 8.37827 4.84285 6.34344 6.34315 4.84315C7.84344 3.34285 9.87827 2.5 12 2.5C14.1217 2.5 16.1566 3.34285 17.6569 4.84315C19.1571 6.34344 20 8.37827 20 10.5Z"
                stroke="#161F2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                stroke="#161F2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-studio-dark text-center font-fanun text-base font-normal leading-[120%] flex-1">
              Rua Valentina Penteado de Freitas, 252 - Parque das Universidades
              - Campinas/SP
            </span>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e563373a49c87f5bcbb34b6b423502f43d870499?width=2880"
            alt="Location map"
            className="h-[280px] md:h-[280px] lg:h-[560px] w-full md:w-[720px] lg:w-full aspect-[18/7] rounded-[32px] object-cover"
          />

          {/* Desktop Points */}
          <div className="hidden lg:flex w-full max-w-[1348px] px-6 lg:px-14 py-6 justify-center items-center gap-4 lg:gap-[92px] rounded-[32px] bg-white/30 backdrop-blur-sm flex-wrap">
            {[
              {
                title: "PUC",
                description:
                  "A apenas 2 min do campus principal da PUC-Campinas.",
              },
              {
                title: "Hospital Madre Theodora",
                description: "Atendimento médico a 4 min de distância.",
              },
              {
                title: "Oxxo Puccamp",
                description: "Conveniência 24h logo ali na esquina.",
              },
              {
                title: "Ronaldo Academy",
                description:
                  "Escola de futebol para crianças, bem pertinho do prédio.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex w-60 min-h-24 items-start gap-2 flex-shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 10L11 12L15 8M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="#161F2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col items-start gap-2 flex-1">
                  <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                    {item.title}
                  </h3>
                  <p className="text-studio-dark font-fanun text-base font-normal leading-[120%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet/Mobile Points */}
          <div className="flex lg:hidden px-6 py-6 flex-col justify-center items-center gap-6 md:gap-8 rounded-[32px] bg-white/30 backdrop-blur-sm w-full max-w-[520px]">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-6">
              {[
                {
                  title: "PUC",
                  description:
                    "A apenas 2 min do campus principal da PUC-Campinas.",
                },
                {
                  title: "Hospital Madre Theodora",
                  description: "Atendimento médico a 4 min de distância.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex w-60 items-start gap-2 flex-shrink-0"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 10L11 12L15 8M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                      stroke="#161F2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <h3 className="text-studio-dark font-fanun text-base font-bold leading-[120%]">
                      {item.title}
                    </h3>
                    <p className="text-studio-dark font-fanun text-sm font-normal leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-6">
              {[
                {
                  title: "Oxxo Puccamp",
                  description: "Conveniência 24h logo ali na esquina.",
                },
                {
                  title: "Ronaldo Academy",
                  description:
                    "Escola de futebol para crianças, bem pertinho do prédio.",
                },
              ].map((item, index) => (
                <div
                  key={index + 2}
                  className="flex w-60 items-start gap-2 flex-shrink-0"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 10L11 12L15 8M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                      stroke="#161F2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <h3 className="text-studio-dark font-fanun text-base font-bold leading-[120%]">
                      {item.title}
                    </h3>
                    <p className="text-studio-dark font-fanun text-sm font-normal leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Location;