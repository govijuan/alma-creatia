// components/ServicesGrid.tsx
"use client";

import CurveCard from "../molecules/CurveCard";

const brandingItems = [
  {
    id: 1,
    title: "Misión",
    description: "Claridad en Propósito,Impacto y Dirección",
    image: "/textures/clay-1.jpg", // replace with your images
  },
  {
    id: 2,
    title: "Visión",
    description: "Definición del estado futuro y tu gran mapa",
    image: "/textures/clay-2.jpg",
  },
  {
    id: 3,
    title: "Valores",
    description: "Principios, acuerdos innegociables y estándares. Arquitectura emocional común",
    image: "/textures/clay-3.jpg",
  },
  {
    id: 4,
    title: "Posicionamiento",
    description: "Reconociendo la presencia y personalidad de la audiencia con categorización y diferenciación",
    image: "/textures/clay-4.jpg",
  },
  {
    id: 5,
    title: "Promesa de Valor",
    description: "¿Qué soluciono a mi audiencia?",
    image: "/textures/clay-5.jpg",
  },
  {
    id: 6,
    title: "Voz de la marca Tono de comunicación, personalidad y lenguaje.",
    description: "",
    image: "/textures/clay-6.jpg",
  },
  {
    id: 7,
    title: "Visibilidad ",
    description: "",
    image: "/textures/clay-7.jpg",
  },
  {
    id: 8,
    title: "Canales",
    description: "",
    image: "/textures/clay-8.jpg",
  },
  {
    id: 9,
    title: "Temáticas, formatos creativos y frecuencia constante",
    description: "",
    image: "/textures/clay-9.jpg",
  },
  {
    id: 10,
    title: "Medición de alcance, interacción (engagement) y conversión.",
    description: "",
    image: "/textures/clay-10.jpg",
  },
  {
    id: 11,
    title: "",
    description: "",
    image: "/textures/clay-11.jpg",
  },
  {
    id: 12,
    title: "",
    description: "",
    image: "/textures/clay-12.jpg",
  }
  // add more as needed
];

export default function BrandingGrid() {
  return (
    <section className="bg-[#f5f2eb] p-15 w-3/4 mx-auto mt-15">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-white/9 rounded-3xl text-white p-4">Our Branding Services</h2>
        </div>

        {/* Organic-looking grid – adjust columns / gaps to taste */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {brandingItems.map((item) => (
            <CurveCard key={item.id} cardContent={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
