"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
import Footer from "@/components/organisms/Footer";
import GlassCard from "@/components/molecules/GlassCard";
import ServiciosInnovatio from "@/components/molecules/ServiciosInnovatio";

const Innovacion = () => {
  const InnovacionStickySections = [
    {
      id: "creatividad",
      title: "Donde la creatividad digital cobra vida y se transforma en realidad.",
      content: (
        <></>
      ),
      buttonText: "",
      buttonLink:""
    },
    {
      id: "transformamos",
      title: "Transformamos Ideas Disruptivas en Experiencias Digitales Unicas",
      content: (
        <>
          <p className="mb-4 text-xl">
            En el ecosistema digital actual, innovar ya no es una opción: es la clave para destacar. <b>Innovatio</b> es nuestro laboratorio de creación y desarrollo digital, un espacio donde la imaginación, la estrategia visual y la tecnología convergente se unen para dar forma a productos digitales totalmente nuevos.
          </p>
          <p className="text-xl">
            No solo desarrollamos tecnología; <b>te acompañamos en la aventura de dar vida a tu idea</b>. Desde la concepción del concepto y el diseño de la experiencia hasta la producción y el lanzamiento, caminamos junto a tu empresa o proyecto en cada etapa del camino.
          </p>
        </>
      ),
      buttonText: "",
      buttonLink: "",
    },
    {
      id: "filosofia",
      title: "Nuestra Filosofía: Co-creación y Acompañamiento",
      content: (
        <>
          <p className="mb-4 text-xl">
            Entender un nuevo proyecto digital puede sentirse como internarse en territorio desconocido. Por eso, en <b>Innovatio</b> nos convertimos en tu aliado estratégico:
          </p>
          <ol className="text-xl">
            <li><b>Aterrizamos la Idea</b>: Escuchamos tu visión y la estructuramos en un concepto digital viabilizado y atractivo.</li>
            <li><b>Diseño & Experiencia</b>: Creamos interfaces (UI/UX) intuitivas, estéticas y alineadas con la identidad de tu marca.</li>
            <li><b>Desarrollo & Producción</b>: Construimos soluciones sólidas, escalables y adaptadas a las mejores prácticas tecnológicas.</li>
            <li><b>Lanzamiento & Acompañamiento</b>: No te dejamos solo. Te guiamos en el despliegue y optimización de tu producto digital.</li>
          </ol>
        </>
      ),
      buttonText: "",
      buttonLink: "",
    },
  ];
  return (
    <div className="relative w-screen">
      <PageVideoHeader videoSrc="/backgrounds/seashel-fobonacci-symbols.mp4" pageTitle="INNOVATIO" targetId="futuro" />
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
      <ServiciosInnovatio />
      <Footer />
    </div>
  );
};

export default Innovacion;
