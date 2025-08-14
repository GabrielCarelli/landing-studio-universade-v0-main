import { useRef } from "react";

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-studio-dark hover:text-studio-blue"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.835 3.8701L16.055 2.1001L6.16504 12.0001L16.065 21.9001L17.835 20.1301L9.70504 12.0001L17.835 3.8701Z"
      fill="currentColor"
    />
  </svg>
);
const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-studio-dark hover:text-studio-blue"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.11523 20.564L7.88523 22.334L17.8852 12.334L7.88523 2.33398L6.11523 4.10398L14.3452 12.334L6.11523 20.564Z"
      fill="currentColor"
    />
  </svg>
);

const Amenities = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    const offset = direction === "left" ? -clientWidth : clientWidth;
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

    const items = [
    {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/e34f271386302fa52bda465cf3850971a66a6e34?width=700",
              title: "Studios mobiliados",
              description:
                'Pronto para morar: mobílias, TV 42", eletrodomésticos, ar-condicionado e mais.',
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/87c82bc29f7c6370a10fdcadfd12c846a3bbfef1?width=700",
              title: "Sistema de segurança eletrônico",
              description:
                "Câmeras, controle de acesso e tranquilidade para o dia a dia.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/66d6ceba8b7a816a6592697ad8d51270e6039524?width=700",
              title: "Lavanderia compartilhada 24h",
              description: "Conveniência para a rotina dos moradores.",
            },
            {
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/2b2cea0b96c73a1d9df0683dd0148b59b5b45151?width=700",
              title: "Minimercado 24h no prédio",
              description: "Tudo o que você precisa a poucos passos.",
            },
            {
              image: "https://github.com/GabrielCarelli/images-studio/blob/main/left%20bg%20(7).png?raw=true",
              title: "Bicicletário com recarga elétrica",
              description: "Sustentabilidade e mobilidade urbana integrada.",
            },
            {
              image: "https://raw.githubusercontent.com/GabrielCarelli/images-studio/refs/heads/main/left%20bg%20(3).png",
              title: "Energia solar fotovoltaica",
              description: "Redução de custos e impacto ambiental.",
            },
            {
              image: "https://github.com/GabrielCarelli/images-studio/blob/main/left%20bg%20(6).png?raw=true",
              title: "Reúso de água cinza",
              description: "Solução inteligente para irrigação e lavanderia.",
            },
  ]

  return (
    <section
      id="comodidades"
      className="px-6 sm:px-6 md:px-10 lg:px-20 py-20"
    >
      {/* Título + Setas */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-studio-dark font-fagun text-[32px] font-black">
            Mais comodidade no seu dia a dia
          </h2>
          <p className="text-studio-gray font-fagun text-xl mt-2  ">
            O Studio Universidades foi pensado para proporcionar praticidade e conforto em todos os detalhes. Desde ambientes inteligentes até facilidades no prédio, cada diferencial contribui para um dia a dia mais funcional, seguro e conectado com o que você precisa.
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scroll("left")} aria-label="Scroll left">
            <ArrowLeft />
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll right">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-hidden snap-x snap-mandatory"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="snap-start w-[350px] flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] rounded-lg object-cover z-0"
              />
              <div className="relative left-1/2 -translate-x-1/2 bottom-4 w-[300px] h-[110px] rounded-lg bg-white shadow p-4 z-20 flex-col items-center justify-start text-left">
                <h3 className="text-studio-dark font-fagun text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-studio-gray font-fagun text-sm mt-1 leading-snug ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
