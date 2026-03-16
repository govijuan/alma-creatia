import Image from "next/image";
// import Logo from "../public/alma-creatia-logo-500x186.png";

const MenuPageHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-transparent absolute z-2 w-full py-3">
      <Image
        src="/alma-creatia-logo-500x186.png"
        alt="Alma Creatia Logo"
        width={500}
        height={186}
      />
    </div>
  );
};

export default MenuPageHeader;
