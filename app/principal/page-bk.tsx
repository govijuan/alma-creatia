"use client";

import LogoTxt from "@/components/atoms/logo-txt";
import PageTitle from "@/components/atoms/pageTitle";
import ArrowDown from "@/components/ui/ArrowDown";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const sections = [
  {
    id: "bienvenidos",
    color: "#1E293B",
    content: (
      <>
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
      </>
    ),
  },
  {
    color: "#0F172A",
    content: (
      <>
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
      </>
    ),
  },
  {
    color: "#1E293B",
    content: (
      <>
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
      </>
    ),
  },
];

const Principal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative w-screen">
      {/* VIDEO HEADER */}
      <section className="fixed inset-0 w-full h-screen overflow-hidden text-white z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/backgrounds/buceadoras-perlas.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center h-full text-white w-full px-4 pb-4">
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-center">
              <LogoTxt />
            </div>
            <PageTitle title="INICIO" />
            <div className="flex justify-center pb-4">
              <div className="flex flex-col">
                <div className="text-2xl text-center">
                  Estudio Creativo & Digital
                </div>
                <div className="text-2xl text-center">ALMACREATIASTUDIO</div>
              </div>
            </div>
            <div className="flex justify-center">
              <ArrowDown
                size={48}
                color="white"
                bounceDuration="1.5s"
                targetId="bienvenidos"
              />
            </div>
          </div>
        </div>
      </section>

      {/*
        Scroll container
        - mt-[100vh] → full video visible first
        - height gives each card a full viewport of scroll room
      */}
      <div
        ref={containerRef}
        className="relative mt-[100vh]"
        style={{ height: `${sections.length * 100}vh` }}
      >
        {sections.map((section, i) => (
          <FixedCard
            key={i}
            index={i}
            total={sections.length}
            color={section.color}
            id={section.id}
            scrollYProgress={scrollYProgress}
          >
            {section.content}
          </FixedCard>
        ))}
      </div>

      <div className="h-[50vh]" />
    </div>
  );
};

function FixedCard({
  index,
  total,
  color,
  children,
  id,
  scrollYProgress,
}: {
  index: number;
  total: number;
  color: string;
  children: React.ReactNode;
  id?: string;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;

  // Timeline for this card
  const enterStart = index * segment;           // card starts entering
  const lockPoint = enterStart + segment * 0.4; // card reaches 60px and locks
  const fadeStart = enterStart + segment * 0.75;// next card is covering it
  const fadeEnd = enterStart + segment;         // fully gone

  // Y animation: comes from below → locks at 60px
  const y = useTransform(
    scrollYProgress,
    [enterStart, lockPoint, fadeEnd],
    ["110vh", "60px", "60px"]
  );

  // Opacity: invisible → fully visible → stays → fades out
  const opacity = useTransform(
    scrollYProgress,
    [enterStart, enterStart + segment * 0.15, fadeStart, fadeEnd],
    [0, 1, 1, 0]
  );

  // Blur + frosted background only after locking
  const blur = useTransform(
    scrollYProgress,
    [lockPoint - segment * 0.1, lockPoint],
    [0, 16]
  );
  const bgOpacity = useTransform(
    scrollYProgress,
    [lockPoint - segment * 0.1, lockPoint],
    [0.95, 0.4]
  );

  const backdropFilter = useMotionTemplate`blur(${blur}px)`;
  const backgroundColor = useTransform(bgOpacity, (o) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${o})`;
  });

  return (
    <motion.div
      id={id}
      style={{
        y,
        opacity,
        backdropFilter,
        backgroundColor,
        zIndex: index + 10,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
      className="w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 pointer-events-none"
    >
      <div className="w-full h-full flex flex-col justify-center items-center p-10 text-white pointer-events-auto">
        {children}
        <span className="mt-8 text-sm opacity-60">
          {index + 1} / {total}
        </span>
      </div>
    </motion.div>
  );
}

export default Principal;
