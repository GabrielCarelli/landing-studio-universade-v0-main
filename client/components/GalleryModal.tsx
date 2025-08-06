import { useState, useEffect } from "react";

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryModalProps) {
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  useEffect(() => {
    setDisplayIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = () => {
    const newIndex = displayIndex > 0 ? displayIndex - 1 : images.length - 1;
    setDisplayIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = displayIndex < images.length - 1 ? displayIndex + 1 : 0;
    setDisplayIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setDisplayIndex(index);
    onNavigate(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, displayIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex items-center justify-center p-4">
      {/* Modal Content */}
      <div className="w-full max-w-[800px] bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-end p-4 pb-2">
          <button
            onClick={onClose}
            className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors"
            aria-label="Close gallery"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4 18.9924L5 17.5924L10.6 11.9924L5 6.39243L6.4 4.99243L12 10.5924L17.6 4.99243L19 6.39243L13.4 11.9924L19 17.5924L17.6 18.9924L12 13.3924L6.4 18.9924Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Header Text */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="text-center">
              <p className="text-studio-gray font-fanun text-sm mb-1">
                Explore os ambientes antes de visitar pessoalmente
              </p>
              <h2 className="text-studio-dark font-fanun text-xl font-black">
                Veja cada detalhe do seu futuro lar
              </h2>
            </div>
            <p className="text-studio-gray font-fanun text-sm text-center leading-relaxed">
              Conheça os detalhes do empreendimento em imagens que destacam o
              conforto, a praticidade e o estilo de vida que o Studio
              Universidade oferece. Cada ambiente foi pensado para atender às
              necessidades de estudantes e jovens profissionais, com plantas
              inteligentes, acabamentos modernos e espaços otimizados para o dia
              a dia.
            </p>
          </div>

          {/* Main Image with Navigation */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
              aria-label="Previous image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8848 20.2224L16.1148 21.9924L6.11477 11.9924L16.1148 1.99243L17.8848 3.76243L9.65477 11.9924L17.8848 20.2224Z"
                  fill="#161F2E"
                />
              </svg>
            </button>

            {/* Main Image */}
            <div className="flex-1 max-w-[500px]">
              <img
                src={images[displayIndex]?.replace("width=580", "width=1200")}
                alt={`Studio apartment view ${displayIndex + 1}`}
                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
              aria-label="Next image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.11523 20.2224L7.88523 21.9924L17.8852 11.9924L7.88523 1.99243L6.11523 3.76243L14.3452 11.9924L6.11523 20.2224Z"
                  fill="#161F2E"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === displayIndex
                    ? "border-studio-dark"
                    : "border-transparent hover:border-studio-gray"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[72px] h-[50px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
