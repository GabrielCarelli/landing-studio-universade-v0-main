import { useState } from "react";
import { FloorPlanModal } from "../FloorPlanModal";

const FloorPlan = () => {
     const [isFloorPlanModalOpen, setIsFloorPlanModalOpen] = useState(false)

    const handleFloorPlanClick = () => {
    setIsFloorPlanModalOpen(true);
  };
  const useFloorPlanModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
  const floorPlanModal = useFloorPlanModal();

    return(
        <><section
        id="planta"
        className="flex max-w-full px-6 sm:px-6 md:px-10 lg:px-20 py-6 justify-between items-center"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          <div className="flex w-full lg:w-[494px] flex-col justify-center items-start gap-6">
            <h2 className="text-studio-dark font-fanun text-xl sm:text-2xl md:text-2xl lg:text-[32px] font-black">
              Layouts pensados para sua rotina
            </h2>
            <p className="text-studio-gray font-fanun text-lg sm:text-xl md:text-xl lg:text-xl font-normal">
              Conheça os layouts disponíveis e escolha o que melhor se adapta ao
              seu estilo de vida. O Studio Universidades oferece plantas
              otimizadas para estudantes e jovens profissionais, com ambientes
              bem distribuídos, acabamentos modernos e soluções inteligentes
              para o dia a dia.
            </p>
          </div>

          {/* Desktop/Tablet Card */}
          <div className="hidden md:flex w-full lg:w-[666px] md:w-[560px] h-52 px-6 lg:px-12 py-6 items-center gap-6 rounded-3xl bg-studio-gray-bg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0b789879d13b58026b4a6223755db5cd9072ccd3?width=320"
              alt="Studio floor plan"
              className="w-40 h-40 flex-shrink-0 rounded object-cover" />
            <div className="flex flex-col justify-center items-start gap-6 w-full lg:w-[280px]">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                  Studio funcional com 24m²
                </h3>
                <p className="text-studio-dark font-fanun text-base font-normal leading-[120%] max-w-[386px]">
                  Ambiente compacto e bem distribuído, ideal para quem busca
                  praticidade no dia a dia.
                </p>
              </div>
              <button
                onClick={handleFloorPlanClick}
                className="flex h-12 justify-center items-center hover:opacity-80 transition-opacity"
              >
                <div className="flex justify-center items-center rounded-full">
                  <div className="flex px-3 py-1.5 justify-center items-center gap-1">
                    <span className="text-studio-dark font-fanun text-sm font-normal leading-5 tracking-[0.1px]">
                      Ver detalhes
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4788 11.667H3.33301V10.0003H13.4788L8.81217 5.33366L9.99967 4.16699L16.6663 10.8337L9.99967 17.5003L8.81217 16.3337L13.4788 11.667Z"
                        fill="#161F2E" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="flex md:hidden w-full flex-col px-6 py-6 gap-6 rounded-3xl bg-studio-gray-bg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7aff12dfac50da650d6222cfb713f3013df459b2?width=528"
              alt="Studio floor plan"
              className="h-[243px] w-full rounded object-cover" />
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="text-studio-dark font-fanun text-xl font-bold leading-[120%]">
                  Studio funcional com 24m²
                </h3>
                <p className="text-studio-dark font-fanun text-base font-normal leading-[120%]">
                  Ambiente compacto e bem distribuído, ideal para quem busca
                  praticidade no dia a dia.
                </p>
              </div>
              <button
                onClick={handleFloorPlanClick}
                className="flex h-12 justify-center items-center hover:opacity-80 transition-opacity"
              >
                <div className="flex justify-center items-center rounded-full">
                  <div className="flex px-3 py-1.5 justify-center items-center gap-1">
                    <span className="text-studio-dark font-fanun text-sm font-normal leading-5 tracking-[0.1px]">
                      Ver detalhes
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4788 10.8335H3.33301V9.16683H13.4788L8.81217 4.50016L9.99967 3.3335L16.6663 10.0002L9.99967 16.6668L8.81217 15.5002L13.4788 10.8335Z"
                        fill="#161F2E" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <FloorPlanModal
          isOpen={floorPlanModal.isOpen}
          onClose={floorPlanModal.closeModal} 
      />
    </>
    )
}

export default FloorPlan;