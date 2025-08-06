const HeroSection = () => {
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
          <div className="w-[344px] lg:w-[353px] px-4 py-2 flex items-center gap-1 bg-studio-yellow shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] rounded">
            <span className="text-studio-blue font-fanun text-base font-normal">
              Previsão de entrega em:
            </span>
            <span className="text-studio-blue font-fanun text-xl font-black">
              01/09/2025
            </span>
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

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-2">
                <button className="flex w-full sm:w-40 md:w-60 lg:w-60 px-4 sm:px-4 md:px-2 lg:px-2 py-[15px] justify-center items-center rounded-[32px] bg-white text-studio-dark font-fanun text-base font-light">
                  (11) 99999-1111
                </button>
                <button className="flex w-full lg:ml-[-4rem] sm:w-[173px] md:w-[173px] lg:w-[173px] px-4 sm:px-2 md:px-2 lg:px-2 py-[15px] justify-center items-center rounded-[32px] bg-studio-blue text-white font-fanun text-base font-normal hover:bg-opacity-90 transition-all">
                  Agendar Visita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection;