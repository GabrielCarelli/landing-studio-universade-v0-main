import { useState, useCallback, KeyboardEvent, memo } from "react";
import { GalleryModal } from "../GalleryModal";


// =========================
// Config & Helpers
// =========================
const GALLERY_IMAGES: string[] = [
  "https://api.builder.io/api/v1/image/assets/TEMP/3fae655761c71946c78368423bc7d646e6e66e95?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/f305a2d2bbddf2a21d3c5bdadff06d26e45eeec2?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/b8ce951cc0557707b77c4383287ca6b3472afa28?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/647c10c0c7cad1d16929cdb854b6edecd62f166e?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/fffa0217b6f12d1a913152618da50d90dd2501e0?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/1796dbf2e934ea92e5d3b3c2c3ea985f6651611d?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/9282e47cbe88e05268656314b356582171960f30?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/93bd4d096b44f0fba2ef98af0fbc07a1718afc7d?width=580",
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
              className="flex px-4 sm:px-8 lg:px-20 justify-center items-center gap-6 lg:gap-10 overflow-x-auto"
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
        } }      />
    </section>
  );
};

export default GallerySection;
