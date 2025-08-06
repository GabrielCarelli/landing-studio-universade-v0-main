const Diferentials = () => {
    return (
        <section
        id="diferenciais"
        className="flex max-w-full px-6 sm:px-6 md:px-10 lg:px-20 py-10 lg:py-20 flex-col justify-center items-center gap-14 bg-white"
      >
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h2 className="text-studio-dark font-fanun text-xl sm:text-2xl md:text-2xl lg:text-[32px] font-black text-center">
            Projetado com atenção aos detalhes
          </h2>
          <p className="text-studio-gray text-center font-fanun text-lg sm:text-xl md:text-xl lg:text-xl font-normal">
            Muito além da praticidade do dia a dia, o Studio Universidades se
            destaca por oferecer soluções que valorizam o imóvel, otimizam os
            espaços e garantem mais qualidade de vida para moradores.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 lg:gap-8 w-full">
          <div className="flex w-full lg:w-[339px] justify-center items-center gap-8">
            <div className="flex w-19 h-19 p-[22px] justify-center items-center flex-shrink-0 rounded-2xl bg-gray-200/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 12.5V20.5M21.8333 20.5V28.5M21.8333 4.5V12.5M4.5 20.5H28.5M4.5 12.5H28.5M11.1667 20.5V28.5M11.1667 4.5V12.5M7.16667 4.5H25.8333C27.3061 4.5 28.5 5.69391 28.5 7.16667V25.8333C28.5 27.3061 27.3061 28.5 25.8333 28.5H7.16667C5.69391 28.5 4.5 27.3061 4.5 25.8333V7.16667C4.5 5.69391 5.69391 4.5 7.16667 4.5Z"
                  stroke="#161F2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2 flex-1">
              <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                Padrão de acabamento
              </h3>
              <p className="text-studio-gray font-fanun text-base font-normal leading-[120%]">
                Piso vinílico, bancada em granito e qualidade em cada detalhe.
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-[339px] justify-center items-center gap-8">
            <div className="flex w-19 h-19 p-[22px] justify-center items-center flex-shrink-0 rounded-2xl bg-gray-200/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.167 26.6668H3.16699M25.8337 26.6668L16.823 28.9188C16.6265 28.9678 16.4214 28.9714 16.2233 28.9293C16.0252 28.8872 15.8392 28.8006 15.6796 28.6759C15.52 28.5512 15.3909 28.3918 15.3021 28.2098C15.2132 28.0278 15.167 27.828 15.167 27.6254V6.08277C15.1673 5.67767 15.2598 5.27663 15.4376 4.91265C15.6154 4.54867 15.8738 4.22999 16.1932 3.98078C16.5126 3.73158 16.8845 3.55842 17.2808 3.47444C17.6771 3.39046 18.0873 3.39787 18.4803 3.4961L23.8137 4.82943C24.3906 4.97364 24.9027 5.30653 25.2687 5.77521C25.6347 6.24388 25.8336 6.82145 25.8337 7.4161V26.6668ZM25.8337 26.6668H29.8337M15.167 5.33343H11.167C10.4597 5.33343 9.78147 5.61438 9.28137 6.11448C8.78128 6.61458 8.50033 7.29286 8.50033 8.0001V26.6668M19.167 16.0001H19.1803"
                  stroke="#161F2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2 flex-1">
              <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                Tudo no lugar certo
              </h3>
              <p className="text-studio-gray font-fanun text-base font-normal leading-[120%]">
                Studio mobiliado e pronto para morar, com eletrodoméstico e ar
                condicionado.
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-[339px] justify-center items-center gap-8">
            <div className="flex w-19 h-19 p-[22px] justify-center items-center flex-shrink-0 rounded-2xl bg-gray-200/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50033 29.3334V5.33341C8.50033 4.62617 8.78128 3.94789 9.28137 3.4478C9.78147 2.9477 10.4597 2.66675 11.167 2.66675H21.8337C22.5409 2.66675 23.2192 2.9477 23.7193 3.4478C24.2194 3.94789 24.5003 4.62617 24.5003 5.33341V29.3334M8.50033 29.3334H24.5003M8.50033 29.3334H5.83366C5.12641 29.3334 4.44814 29.0525 3.94804 28.5524C3.44794 28.0523 3.16699 27.374 3.16699 26.6667V18.6667C3.16699 17.9595 3.44794 17.2812 3.94804 16.7811C4.44814 16.281 5.12641 16.0001 5.83366 16.0001H8.50033M24.5003 29.3334H27.167C27.8742 29.3334 28.5525 29.0525 29.0526 28.5524C29.5527 28.0523 29.8337 27.374 29.8337 26.6667V14.6667C29.8337 13.9595 29.5527 13.2812 29.0526 12.7811C28.5525 12.281 27.8742 12.0001 27.167 12.0001H24.5003M13.8337 8.00008H19.167M13.8337 13.3334H19.167M13.8337 18.6667H19.167M13.8337 24.0001H19.167"
                  stroke="#161F2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2 flex-1">
              <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                Perto de tudo
              </h3>
              <p className="text-studio-gray font-fanun text-base font-normal leading-[120%]">
                Próximo a Universidade, Academia e Restaurantes.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Diferentials;