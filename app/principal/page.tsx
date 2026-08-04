"use client"; // Required for framer-motion hooks

import LogoTxt from "@/components/logo-txt";
import PageTitle from "@/components/pageTitle";
import ArrowDown from "@/components/ui/ArrowDown";
import {useScroll, motion, useTransform, useMotionTemplate} from "framer-motion"
import { useRef } from "react";

const Principal = () => {

  return (
    <div className="relative flex flex-col items-center h-screen w-screen">
      {/*
        SECTION 1: The Video Header
        - Fixed or Sticky to stay in place while others scroll over.
        - We use 'sticky' here so it stays until covered.
      */}
      <section
        id="top-section"
        className="fixed w-full overflow-hidden  top-0 text-white"
      >
        <video
          className="fixed  inset-0 w-full h-screen object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/backgrounds/buceadoras-perlas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center h-screen text-white w-full px-4 pb-4">
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
        </div>
      </section>
      <div className="relative mt-[100vh]">
        <div className="h-[20vh]" />
          <StickySection index={0} total={3} color="#1E293B">
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
        </StickySection>
        <StickySection index={1} total={3} color="#0F172A">
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div className="flex-2">
              <h2 className="text-3xl font-bold mb-4">Nuestra Esencia</h2>
              <p className="mb-4 text-lg">
                Integramos estrategia, diseño creativo y tecnología de vanguardia
                para startups, emprendedores y empresas medianas que quieren
                destacar con su voz</p>
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
        <StickySection index={2} total={3} color="#1E293B">
          <div className="flex w-full max-w-4xl px-4 h-full items-center justify-center text-center">
            <div className="flex-2">
              <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
              <p className="mb-4 text-lg">
                Descubre algunos de nuestros proyectos más destacados, donde la creatividad y la innovación se unen para crear experiencias únicas.
              </p>
              <p>
                Cada proyecto refleja nuestra pasión por el diseño y la estrategia, ofreciendo soluciones que impactan y conectan con las audiencias.
              </p>
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              VER PROYECTOS
            </a>
          </div>
        </StickySection>
        <div className="h-[50vh]" />
      </div>
    </div>
  );
};

const StickySection = ({ index, total, children, color, }: { index: number; total: number; children: React.ReactNode, color: string }) => {
  const ref = useRef<HTMLDivElement>(null);

    // Track when this section is approaching / reaching the sticky point
    const { scrollYProgress } = useScroll({
      target: ref,
      // "start end" → section enters viewport
      // "start start" → section reaches the top (sticky position)
      offset: ["start end", "start start"],
    });

    // Scale & opacity (optional polish)
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.75, 1, 1]);

    // Blur amount: 0 → 16px as it becomes sticky
    const blur = useTransform(scrollYProgress, [0.4, 1], [0, 16]);

    // Background opacity for the frosted effect
    const bgOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0.45]);

    // Dynamic styles
    const backdropFilter = useMotionTemplate`blur(${blur}px)`;
    const backgroundColor = useTransform(
      bgOpacity,
      (o) => {
        // Convert hex color to rgba with dynamic opacity
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${o})`;
      }
    );
  return (
    <div ref={ref} className="h-[100vh] relative">
          <motion.div
            style={{
              scale,
              opacity,
              top: 60,                    // sticky position
              zIndex: index + 1,
              backdropFilter,             // the blur
              backgroundColor,            // transparent version of original color
              // Optional: slight offset for a more stacked look
              // top: `calc(60px + ${index * 10}px)`,
            }}
            className="sticky w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="w-full h-full flex flex-col justify-center items-center p-10 text-white">
              {children}
              <span className="mt-8 text-sm opacity-60">
                {index + 1} / {total}
              </span>
            </div>
          </motion.div>
    </div>
  )
}

export default Principal;
