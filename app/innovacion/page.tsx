"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
import BrandingGrid from "@/components/organisms/BrandingGrid";
import TallerGrid from "@/components/organisms/TallerGrid";
import Footer from "@/components/organisms/Footer";

const Innovacion = () => {
  const InnovacionStickySections = [
    {
      id: "futuro",
      title: "El futuro se diseña hoy, con visión y tecnología",
      content: (
        <>
          <p className="mb-4 text-xl">
            Innovación no es solo adoptar lo nuevo, es anticipar lo que viene
          </p>
        </>
      ),
      buttonText: "EXPLORAR",
      buttonLink: "#",
    },
    {
      id: "tecnologia",
      title: "Tecnología al servicio de la creatividad humana",
      content: (
        <>
          <p className="mb-4 text-xl">
            IA, Web3, Realidad Extendida: herramientas que amplifican
            el talento, no lo reemplazan
          </p>
          <p className="text-xl">
            Integramos las tecnologías emergentes en tu estrategia de marca
            para crear experiencias que antes eran imposibles
          </p>
        </>
      ),
      buttonText: "DESCUBRIR",
      buttonLink: "#",
    },
    {
      id: "impacto",
      title: "Innovación con propósito genera impacto real",
      content: (
        <>
          <p className="mb-4 text-xl">
            Cada experimento, cada prototipo, cada iteración
            tiene un objetivo: resolver problemas que importan
          </p>
          <p className="text-xl">
            Medimos el éxito no por lo novedoso, sino por lo transformador
          </p>
        </>
      ),
      buttonText: "",
      buttonLink: "",
    },
  ];
  return (
    <div className="relative w-screen">
      <PageVideoHeader videoSrc="/backgrounds/rostro-arcilla.mp4" pageTitle="INNOVACIÓN" targetId="futuro" />
      <div className="mt-[100vh] h-[500vh] flex flex-col items-center">
        {InnovacionStickySections.map((section, index) => (
          <StickySection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            buttonText={section.buttonText}
            buttonLink={section.buttonLink}
            index={index}
          />
        ))}
      </div>
      <BrandingGrid />
      <TallerGrid />
      <Footer />
    </div>
  );
};

export default Innovacion;