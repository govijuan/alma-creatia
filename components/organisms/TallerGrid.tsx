// components/organisms/TallerGrid.tsx
"use client";

const items = [
  { id: 1, label: "Producción de Páginas Web Fullstack (Backend + Frontend + mobile)" },
  { id: 2, label: "Diseño Digital para redes y canales" },
  { id: 3, label: "Producción Visual, Videos, shorts, presentaciones animaciones, afiches, posts, materiales impresos: libros, cartillas, manuales" },
  { id: 4, label: "Producción de Audio, Podcasts" },
  { id: 5, label: "Producción Escrita Contenidos Libros" },
  { id: 6, label: "Desarrollo de productos, empaques de recordación" },
  { id: 7, label: "Desarrollo de eventos no convencionales, acciones creativas y talleres de experiencia" },
  { id: 8, label: "" },
  { id: 9, label: "" }
];

export default function TallerGrid() {
  return (
    <section className="relative mt-15">
      <div className="relative block z-10 w-3/4 mx-auto" >
        <h2 className="text-3xl font-bold text-center bg-black rounded-t-2xl text-white p-4 pt-8">
          Taller Studio
        </h2>
      </div>
      <div className="relative h-screen w-3/4 mx-auto overflow-hidden p-25">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-center justify-center"
          >
            {/* 1. Blur layer BEHIND everything */}
            <div className="pointer-events-none absolute inset-0 backdrop-blur-md" />

            {/* 2. Sharp black mask ON TOP (defines the clean circle edge) */}
            <div
              className="absolute inset-0 bg-black
                         [mask-image:radial-gradient(circle_at_center,transparent_0%,transparent_38%,white_39%)]
                         [-webkit-mask-image:radial-gradient(circle_at_center,transparent_0%,transparent_38%,white_39%)]
                         [mask-size:100%_100%]
                         [mask-repeat:no-repeat]
                         [mask-position:center]
                         transition-all duration-500 ease-out
                         group-hover:[mask-image:radial-gradient(circle_at_center,transparent_0%,transparent_52%,white_53%)]
                         group-hover:[-webkit-mask-image:radial-gradient(circle_at_center,transparent_0%,transparent_52%,white_53%)]"
            />

            {/* 3. Label on top */}
            <span
              className="relative z-10 pointer-events-none select-none text-center text-base font-semibold
                         tracking-wide text-white opacity-0 transition-all duration-300
                         group-hover:opacity-100 scale-80 group-hover:scale-100
                         sm:text-lg md:text-xl"
            >
              {item.label}
            </span>
          </div>
        ))}
        </div>
      </div>
      <div className="relative w-3/4 mx-auto z-10">
        <div className="text-center text-lg py-6 rounded-b-2xl bg-black text-white" >Acompañamos desde concepto hasta ejecución</div>
      </div>
    </section>
  );
}
