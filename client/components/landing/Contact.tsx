const Contact = () => {
    return(
          <section
                id="contato"
                className="flex flex-col lg:flex-row lg:h-[600px] px-6 sm:px-6 md:px-10 lg:px-20 items-center gap-10 lg:gap-20 py-20"
              >
                <div className="flex w-full lg:w-[580px] flex-col justify-center items-start gap-6">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h2 className="text-studio-dark font-fanun text-2xl font-black">
                      Quero morar aqui
                    </h2>
                    <p className="text-studio-gray font-fanun text-xl font-normal">
                      Ficou interessado? Nossos consultores vão entrar em contato.
                    </p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1290)">
                        <path
                          d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                          stroke="#161F2E"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1290">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
        
                  <form className="flex flex-col items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <label className="text-studio-dark font-fanun text-sm font-normal leading-4 tracking-[0.175px]">
                        Nome
                      </label>
                      <div className="h-10 w-full relative">
                        <div className="w-full h-10 rounded-full border border-studio-gray-light bg-white"></div>
                        <input
                          type="text"
                          placeholder="Maria da Silva"
                          className="absolute left-5 top-3 w-full h-4 text-studio-gray-light font-fanun text-base font-normal bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
        
                    <div className="flex flex-col items-start gap-1 w-full">
                      <label className="text-studio-dark font-fanun text-sm font-normal leading-4 tracking-[0.175px]">
                        E-mail
                      </label>
                      <div className="h-10 w-full relative">
                        <div className="w-full h-10 rounded-full border border-studio-gray-light bg-white"></div>
                        <input
                          type="email"
                          placeholder="Campinas"
                          className="absolute left-5 top-3 w-full h-4 text-studio-gray-light font-fanun text-base font-normal bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
        
                    <div className="flex flex-col items-start gap-1 w-full">
                      <label className="text-studio-dark font-fanun text-sm font-normal leading-4 tracking-[0.175px]">
                        Telefone <span>(opcional)</span>
                      </label>
                      <div className="h-10 w-full relative">
                        <div className="w-full h-10 rounded-full border border-studio-gray-light bg-white"></div>
                        <input
                          type="tel"
                          placeholder="(11) 99999-1111"
                          className="absolute left-5 top-3 w-full h-4 text-studio-gray-light font-fanun text-base font-normal bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
        
                    <div className="flex flex-col items-start gap-1 w-full">
                      <label className="text-studio-dark font-fanun text-sm font-normal leading-4 tracking-[0.175px]">
                        Mensagem <span>(opcional)</span>
                      </label>
                      <div className="h-20 w-full relative">
                        <div className="w-full h-20 rounded-2xl border border-studio-gray-light bg-white"></div>
                        <textarea
                          placeholder="(11) 99999-1111"
                          className="absolute left-5 top-3 w-full h-16 text-studio-gray-light font-fanun text-base font-normal bg-transparent border-none outline-none resize-none"
                        />
                      </div>
                    </div>
        
                    <button className="flex h-10 px-[70px] py-4 justify-center items-center gap-2.5 w-full rounded-full bg-studio-dark text-white font-fanun text-lg sm:text-xl font-normal hover:bg-opacity-90 transition-all">
                      Receber proposta personalizada
                    </button>
                  </form>
                </div>
        
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a0240e2885e5b71dcdcd5ec7119ff9d9c9f469c2?width=1240"
                  alt="Studio apartment exterior"
                  className="w-full lg:h-[605px] lg:flex-1 rounded-lg object-cover"
                />
              </section>
    )
}

export default Contact;