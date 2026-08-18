interface StickySectionProps {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
  id?: string;
}

const StickySection = ({ children, index, bgColor, id }: StickySectionProps) => {
  return (
    <div
      id={id}
      className="sticky top-0 w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 pointer-events-none backdrop-blur-lg"
      style={{ backgroundColor: bgColor ? bgColor : 'transparent' }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center p-10 text-white pointer-events-auto ">
        {children}
      </div>
      <span className="mt-8 text-sm opacity-60">
        {index + 1}
      </span>
    </div>
  )
}

export default StickySection
