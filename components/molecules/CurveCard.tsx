import Image from "next/image";

interface CurveCardProps {
  cardContent: CardContent;
}

interface CardContent {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CurveCard = ({ cardContent }: CurveCardProps) => {
  const { title, description, image } = cardContent;

  return (
    <div
      className="
        group relative aspect-square w-full max-w-[220px]
        overflow-hidden rounded-full
        ring-4 ring-white/80 shadow-xl
        transition-all duration-500 ease-out
        hover:scale-110 hover:z-10 hover:shadow-2xl
        cursor-pointer
      "
    >
      {/* Background image that zooms on hover */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover object-center
          transition-transform duration-700 ease-out
          group-hover:scale-125
        "
        sizes="(max-width: 768px) 50vw, 220px"
      />

      {/* Dark overlay that fades in */}
      <div
        className="
          absolute inset-0 bg-black/40
          opacity-0 group-hover:opacity-100
          transition-opacity duration-400
        "
      />

      {/* Text that appears on hover */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          p-6 text-center
          opacity-0 group-hover:opacity-100
          translate-y-4 group-hover:translate-y-0
          transition-all duration-500 ease-out
        "
      >
        <h3 className="text-white text-xl font-semibold tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-snug max-w-[180px]">
          {description}
        </p>
      </div>
    </div>
    )
}

export default CurveCard
