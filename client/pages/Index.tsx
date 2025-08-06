import { useState } from "react";

// Components
import { Header } from "../components/Header";
import { GalleryModal } from "../components/GalleryModal";
import { FloorPlanModal } from "../components/FloorPlanModal";
import HeroSection from "@/components/landing/HeroSection";
import GallerySection from "@/components/landing/GallerySection";
import Decorated from "@/components/landing/Decorated";
import Diferentials from "@/components/landing/Diferentials";
import FloorPlan from "@/components/landing/FloorPlan";
import Amenities from "@/components/landing/Amenities";
import Location from "@/components/landing/Location";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

// Constants
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

// Custom hooks
const useGalleryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return {
    isOpen,
    currentImageIndex,
    openModal,
    closeModal,
    navigateToImage,
  };
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

// Main sections component
const LandingSections = () => (
  <>
    <HeroSection />
    <GallerySection />
    <Decorated />
    <Diferentials />
    <FloorPlan />
    <Amenities />
    <Location />
    <Contact />
    <Footer />
  </>
);

// Modals component
interface ModalsProps {
  galleryModal: {
    isOpen: boolean;
    currentImageIndex: number;
    closeModal: () => void;
    navigateToImage: (index: number) => void;
  };
  floorPlanModal: {
    isOpen: boolean;
    closeModal: () => void;
  };
}

const Modals = ({ galleryModal, floorPlanModal }: ModalsProps) => (
  <>
    <GalleryModal
      images={GALLERY_IMAGES}
      currentIndex={galleryModal.currentImageIndex}
      isOpen={galleryModal.isOpen}
      onClose={galleryModal.closeModal}
      onNavigate={galleryModal.navigateToImage}
    />
    
    <FloorPlanModal
      isOpen={floorPlanModal.isOpen}
      onClose={floorPlanModal.closeModal}
    />
  </>
);

// Main component
export default function Index() {
  const galleryModal = useGalleryModal();
  const floorPlanModal = useFloorPlanModal();

  return (
    <div className="min-h-screen bg-white font-fanun">
      <Header />
      <LandingSections />
      <FloatingChat />
      
      <Modals 
        galleryModal={galleryModal}
        floorPlanModal={floorPlanModal}
      />
    </div>
  );
}