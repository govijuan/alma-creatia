"use client"; // Required for framer-motion hooks

import LogoTxt from "@/components/logo-txt";
import PageTitle from "@/components/pageTitle";
import ArrowDown from "@/components/ui/ArrowDown";
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';

const Principal = () => {
  return (
    <div className="flex flex-col items-center">
      {/*
        SECTION 1: The Video Header
        - Fixed or Sticky to stay in place while others scroll over.
        - We use 'sticky' here so it stays until covered.
      */}
      <section
        id="top-section"
        className="relative w-full overflow-hidden z-10 top-0 text-white"
      >
        <video
          className="fixed top-0 left-0 w-full h-screen object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/backgrounds/buceadoras-perlas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <ScrollStack useWindowScroll={true} >
        <ScrollStackItem itemClassName="text-white" isTop={true}>
        {/*<div className="relative z-20 flex flex-col justify-center h-full text-white w-full px-4 pb-4">*/}
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-center"><LogoTxt /></div>
            <PageTitle title="INICIO" />
            <div className="flex justify-center pb-4">
              <div className="flex flex-col">
                <div className="text-2xl text-center">Estudio Creativo & Digital</div>
                <div className="text-2xl text-center">ALMACREATIASTUDIO</div>
              </div>
            </div>
            <div className="flex justify-center">
              <ArrowDown size={48} color="white" bounceDuration="1.5s" targetId="bienvenidos" />
            </div>
          </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
              <div className="flex-2">
                <h2 className="text-3xl font-bold mb-4">Bienvenidos</h2>
                <p className="mb-4 text-lg">
                  Creamos marcas diseñadas para quedarse en la mente y el corazón de
                  las personas como extensión (resultado) del alma que crea
                </p>
                <p>
                  Guiados por la filosofía de Alma Creatia, las ideas actúan como
                  una fuerza flexible y complementaria
                </p>
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Metodología Inside Out
              </a>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
        {/*<div className="relative z-21 flex flex-col justify-center h-full text-white w-full px-4 pb-4">


        </div>*/}
      </section>


      {/*
        SCROLL CONTAINER
        - This div creates the "scrollable distance" required for the animation.
        - Height = Number of sections * Viewport Height.

      // <div className="relative w-full z-20">*/}

        {/* SECTION 2: Animated Overlap
        <ScrollOverlapSection>
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div className="flex-2">
              <h2 className="text-3xl font-bold mb-4">Bienvenidos</h2>
              <p className="mb-4 text-lg">
                Creamos marcas diseñadas para quedarse en la mente y el corazón de
                las personas como extensión (resultado) del alma que crea
              </p>
              <p>
                Guiados por la filosofía de Alma Creatia, las ideas actúan como
                una fuerza flexible y complementaria
              </p>
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Metodología Inside Out
            </a>
          </div>
        </ScrollOverlapSection>*/}

        {/* SECTION 3: Animated Overlap
        <ScrollOverlapSection>
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div className="flex-2">
              <h2 className="text-3xl font-bold mb-4">Nuestra Esencia</h2>
              <p className="mb-4 text-lg">
                Integramos estrategia, diseño creativo y tecnología de vanguardia
                para startups, emprendedores y empresas medianas que quieren
                destacar con su voz
              </p>
              <p>
                Convertimos ideas en marcas resonantes que conectan emocionalmente
                y generan confianza
              </p>
            </div>
          </div>
          <div className="flex mt-8 gap-2 justify-center">
            <a className="px-6 py-3 bg-cyan-50 text-gray-600 rounded-full hover:bg-gray-400 transition duration-300">
              SERVICIOS
            </a>
            <a className="px-6 py-3 bg-cyan-50 text-gray-600 rounded-full hover:bg-gray-400 transition duration-300">
              CALCULADOR DE COTIZACIÓN
            </a>
          </div>
        </ScrollOverlapSection>

      </div>*/}

      {/* Standard Footer */}
      {/*<section className="relative z-30 w-full py-20 bg-white text-gray-800 mt-[-10vh]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Alma Creatia</h1>
          <p className="text-lg text-gray-600 mb-8">Tu espacio de creatividad e innovación</p>
          <a href="/proyectos" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Explorar Proyectos
          </a>
        </div>
      </section>*/}
    </div>
  );
};

// Reusable Component for the Overlap Effect
// const ScrollOverlapSection = ({ children }: { children: React.ReactNode }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   // Track scroll progress of this specific section relative to the viewport
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start start"], // Start animation when section bottom hits viewport bottom, end when top hits top
//   });

//   // Transform scroll progress to Y position:
//   // Starts at 100% (100vh down) and moves to 0% (natural position)
//   const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }}
//       className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center py-20 bg-black/30 backdrop-blur-lg text-white will-change-transform"
//     >
//       {children}
//     </motion.div>
//   );
// };

export default Principal;
