"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
import BrandingGrid from "@/components/organisms/BrandingGrid";
import Footer from "@/components/organisms/Footer";

const Idea = () => {
  const IdeaStickySections = [
    {
      id: "idea",
      title: "IDEA",
      content: (
        <>
          <p className="mb-4 text-lg">
            Creamos marcas diseñadas para quedarse en la mente y el corazón de
            las personas como extensión (resultado) del alma que crea
          </p>
          <p>
            Guiados por la filosofía de Alma Creatia, las ideas actúan como
            una fuerza flexible y complementaria
          </p>
        </>
      ),
      buttonText: "Metodología Inside Out",
      buttonLink: "#",
    },
    {
      id: "desarrollo",
      title: "DESARROLLO",
      content: (
        <>
          <p className="mb-4 text-lg">
            Integramos estrategia, diseño creativo y tecnología de vanguardia
            para startups, emprendedores y empresas medianas que quieren
            destacar con su voz
          </p>
          <p>
            Convertimos ideas en marcas resonantes que conectan emocionalmente
            y generan confianza
          </p>
        </>
      ),
      buttonText: "Servicios",
      buttonLink: "#",
    },
    {
      id: "proyectos",
      title: "PROYECTOS",
      content: (
        <>
          <p className="mb-4 text-lg">
            Descubre algunos de nuestros proyectos más destacados, donde la
            creatividad y la innovación se unen para crear experiencias
            únicas.
          </p>
          <p>
            Cada proyecto refleja nuestra pasión por el diseño y la
            estrategia, ofreciendo soluciones que impactan y conectan con las
            audiencias.
          </p>
        </>
      ),
      buttonText: "Ver Proyectos",
      buttonLink: "#",
    },
  ];
  return (
    <div className="relative w-screen">
      <PageVideoHeader videoSrc="/backgrounds/rostro-arcilla.mp4" pageTitle="IDEA" targetId="idea" />
      <div className="mt-[100vh] h-[500vh] flex flex-col items-center">
        {IdeaStickySections.map((section, index) => (
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
      <Footer />
    </div>
  );
};

export default Idea;
