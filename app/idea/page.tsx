"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
import BrandingGrid from "@/components/organisms/BrandingGrid";
import Footer from "@/components/organisms/Footer";

const Idea = () => {
  const IdeaStickySections = [
    {
      id: "transformacion",
      title: "Transforma tus ideas, insignts y data en una clara dirección de tu proyecto",
      content: (
        <>
          <p className="mb-4 text-xl">
            creatividad + estrategia + diseño + tecnología
          </p>
        </>
      ),
      buttonText: "CONECTEMOS",
      buttonLink: "#",
    },
    {
      id: "personalidad",
      title: "Branding es el trabajo intencional de la personalidad de tu marca.",
      content: (
        <>
          <p className="mb-4 text-xl">
            Si una Idea es el chispazo inicial,
            Branding es la personalidad que le da vida a esa chispa. La estrategia es
            el mapa y la hoja de ruta que lleva tu marca del punto de partida a las metas
          </p>
        </>
      ),
      buttonText: "CONECTEMOS",
      buttonLink: "#",
    },
    {
      id: "coherencia",
      title: "Una marca bien pensadano solo es visualmente coherente.También es intencional",
      content: (
        <>
          <p className="mb-4 text-xl">
            Desde el concepto hasta la creación, tu marca está articulada en su forma de pensar, comunicar y presentarse.
            La dirección se vuelve más clara y esta cualidad facilita Las decisiones diarias y a largo plazo . Tu branding se define con una voz integrada. Eso es lo que la gente reconoce. Eso es en lo que la gente confía. Eso es lo que la gente recuerda.
          </p>
          <p className="text-xl">
            Cuando un fundador aporta una visión, sus valores y una dirección clara el diseño se convierte en una construcción
            intencional
          </p>
        </>
      ),
      buttonText: "",
      buttonLink: "",
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
