// components/organisms/TallerGrid.tsx
"use client";

const items = [
  { id: 1, label: "Concepto" },
  { id: 2, label: "Exploración" },
  { id: 3, label: "Prototipo" },
  { id: 4, label: "Validación" },
  { id: 5, label: "Iteración" },
  { id: 6, label: "Implementación" },
];

export default function TallerGrid() {
  return (
    <section className="relative h-screen w-3/4 mx-auto overflow-hidden rounded-2xl">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-center justify-center"
          >
            {/* Masked black layer – creates the circular hole */}
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

            {/* Text sits above the mask, so it is never clipped */}
            <span
              className="relative z-10 pointer-events-none select-none text-center text-base font-semibold
                         tracking-wide text-white opacity-0 transition-all duration-300
                         group-hover:opacity-100 group-hover:scale-110
                         sm:text-lg md:text-xl"
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
