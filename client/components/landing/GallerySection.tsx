import { useState, useCallback, KeyboardEvent, memo } from "react";
import { GalleryModal } from "../GalleryModal";

const GALLERY_IMAGES: string[] = [
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.20.jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.27%20(1).jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.27%20(2).jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.27%20(3).jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.28%20(1).jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.28%20(2).jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.28.jpeg?raw=true",
  "https://github.com/GabrielCarelli/images-studio/blob/main/WhatsApp%20Image%202025-06-06%20at%2011.24.29%20(1).jpeg?raw=true",
];

const ROW_HEIGHT = 200; // apenas referência semântica
const CARD_CLASSES =
  "w-[290px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0 hover:opacity-90 focus-visible:opacity-90 transition-opacity outline-none";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function buildAlt(index: number) {
  return `Foto do interior do studio — imagem ${index + 1}`;
}

// =========================
// Thumbnail (SRP)
// =========================
type ImageThumbProps = {
  src: string;
  index: number;
  onOpen: (index: number) => void;
};

const ImageThumb = memo(({ src, index, onOpen }: ImageThumbProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(index);
    }
  };

  return (
    <button
      type="button"
      aria-label={`Abrir imagem ${index + 1} da galeria em tela cheia`}
      title="Ver imagem em tela cheia"
      className={CARD_CLASSES}
      onClick={() => onOpen(index)}
      onKeyDown={handleKeyDown}
    >
      <img
        src={src}
        alt={buildAlt(index)}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </button>
  );
});
ImageThumb.displayName = "ImageThumb";

// =========================
const GallerySection = () => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalAt = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsGalleryModalOpen(false);
  }, []);

  const rows = chunkArray(GALLERY_IMAGES, 4);

  return (
    <section id="galeria" className="flex max-w-full flex-col items-start gap-10 py-20">
      {/* Header */}
      <div className="flex px-6 sm:px-6 md:px-10 lg:px-20 flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col items-center gap-1">
          <p className="max-w-4xl text-studio-gray text-center font-fanun text-base sm:text-base md:text-xl lg:text-xl font-normal">
            Explore os ambientes antes de visitar pessoalmente
          </p>
          <h2 className="max-w-[568px] text-studio-dark font-fanun text-xl sm:text-2xl md:text-[32px] lg:text-[32px] font-black text-center">
            Veja cada detalhe do seu futuro lar
          </h2>
        </div>
        <p className="text-studio-gray text-center font-fanun text-lg sm:text-xl md:text-xl lg:text-xl font-normal max-w-full">
          Conheça os detalhes do empreendimento em imagens que destacam o
          conforto, a praticidade e o estilo de vida que o Studio Universidade
          oferece. Cada ambiente foi pensado para atender às necessidades de
          estudantes e jovens profissionais, com plantas inteligentes,
          acabamentos modernos e espaços otimizados para o dia a dia.
        </p>
      </div>

      {/* Grid horizontal scroll */}
      <div className="w-full h-[440px] relative overflow-hidden">
        <div className="flex flex-col gap-10 w-full h-[440px]">
          {rows.map((row, rowIdx) => (
            <div
              key={`row-${rowIdx}`}
              className={[
                "flex px-4 sm:px-8 lg:px-20 justify-center items-center gap-6 lg:gap-10",
                "overflow-x-auto overflow-y-hidden",
                "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              ].join(" ")}
            >
              {row.map((src, i) => {
                const index = rowIdx * 4 + i;
                return (
                  <ImageThumb key={src} src={src} index={index} onOpen={openModalAt} />
                );
              })}
            </div>
          ))}
        </div>

        {/* Gradient overlays (mantidos) */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-40 h-[440px] bg-gradient-to-l from-white to-transparent pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 w-40 h-[440px] bg-gradient-to-r from-white to-transparent pointer-events-none"
        />
      </div>

      {/* Modal (ajuste as props conforme teu componente) */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={closeModal}
        images={GALLERY_IMAGES}
        currentIndex={currentImageIndex}
        onNavigate={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </section>
  );
};

export default GallerySection;
