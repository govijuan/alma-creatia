"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
import Footer from "@/components/organisms/Footer";

interface StickySectionData {
  id?: string;
  title?: string;
  content: React.ReactElement | string;
  buttonText?: string;
  buttonLink?: string;
}



const Principal = () => {
  const PrincipalStickySections: StickySectionData[] = [
    {
      id: "bienvenidos",
      title: "Bienvenidos",
      content: <>
        <p className="mb-4 text-lg">
          Creamos marcas diseñadas para quedarse en la mente y el corazón de
          las personas como extensión (resultado) del alma que crea
        </p>
        <p>
          Guiados por la filosofía de Alma Creatia, las ideas actúan como
          una fuerza flexible y complementaria
        </p>
      </>,
      buttonText: "Metodología Inside Out",
      buttonLink: "#",
    },
    {
      id: "servicios",
      title: "Nuestra Esencia",
      content: <>
        <p className="mb-4 text-lg">
          Integramos estrategia, diseño creativo y tecnología de vanguardia
          para startups, emprendedores y empresas medianas que quieren
          destacar con su voz
        </p>
        <p>
          Convertimos ideas en marcas resonantes que conectan emocionalmente
          y generan confianza
        </p>
      </>,
      buttonText: "Servicios",
      buttonLink: "#",
    },
    {
      id: "proyectos",
      title: "Proyectos Destacados",
      content: <>
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
      </>,
      buttonText: "Ver Proyectos",
      buttonLink: "#",
    },
  ];
  return (
    <div className="relative w-screen">
      <PageVideoHeader videoSrc="/backgrounds/buceadoras-perlas.mp4" pageTitle="INICIO" targetId="bienvenidos" />
      <div className="mt-[100vh] h-[500vh] flex flex-col items-center">
        {PrincipalStickySections.map((section, index) => (
          <StickySection
            key={index}
            index={index}
            id={section.id}
            blurDistance={100}
            className={`w-3/4 ${index < PrincipalStickySections.length - 1 ? 'mb-50' : ''}`}
            title={section.title}
            content={section.content}
            buttonText={section.buttonText}
            buttonLink={section.buttonLink}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Principal;
