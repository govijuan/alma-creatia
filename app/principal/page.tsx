"use client";

import PageVideoHeader from "@/components/molecules/PageVideoHeader";
import StickySection from "@/components/molecules/StickySection";
const Principal = () => {
  return (
    <div className="relative w-screen">
      <PageVideoHeader videoSrc="/backgrounds/buceadoras-perlas.mp4" pageTitle="INICIO" targetId="bienvenidos" />
      <div
        className="mt-[100vh] h-[500vh] flex flex-col items-center"
      >
        <StickySection index={0} id="bienvenidos" blurDistance={100} className="mb-[200px] w-3/4">
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div>
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
        </StickySection>
        <StickySection index={1} id="servicios" blurDistance={100} className="mb-[200px] w-3/4">
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div>
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
        </StickySection>
        <StickySection index={2} id="proyectos" blurDistance={100} className="w-3/4">
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
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
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              VER PROYECTOS
            </a>
          </div>
        </StickySection>
      </div>
    </div>
  );
}

export default Principal;
