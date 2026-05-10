import InfiniteMenu from "@/components/InfiniteMenu";
import MenuPageHeader from "@/components/MenuPageHeader";

const items = [
  {
    image: "/almacreatiaredondo2blanco.png",
    link: "/principal",
    title: "Principal",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "/servicios",
    title: "Servicios",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

export default function Home() {
  return (
    // <div style={{ height: "100vh", position: "relative" }}>

    //   {/*<InfiniteMenu items={items} scale={1.7} />*/}
    // </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-center">
        Alma Creatia Studio
      </h1>
      <img
        src="/almavreatiocircular.png"
        alt="Alma Creatia Studio Logo"
        className="mx-auto my-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
      />
      <p className="text-xl md:text-3xl text-gray-400 text-center">
        Página en Construcción
      </p>
    </div>
  );
}
