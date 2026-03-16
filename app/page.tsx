import InfiniteMenu from "@/components/InfiniteMenu";
import MenuPageHeader from "@/components/MenuPageHeader";

const items = [
  {
    image: "https://picsum.photos/300/300?grayscal'",
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
    <>
      <MenuPageHeader />
      <div style={{ height: "100vh", position: "relative" }}>
        <InfiniteMenu items={items} scale={1.7} />
      </div>
    </>
  );
}
