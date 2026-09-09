import FooterContactLink from "../atoms/FooterContactLink";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

interface FooterContentProps {
  /** Optional className to extend or override default styles */
  className?: string;
}

const FooterContent = ({ className = "" }: FooterContentProps) => {
  const contactLinks = [
    {
      href: "tel:+573008569353",
      icon: FaPhone,
      iconSize: 28,
      text: "+57 300 8569353",
    },
    {
      href: "https://wa.me/5511980111193?text=Hola!%20Quisiera%20más%20información.",
      icon: FaWhatsapp,
      iconSize: 32,
      text: "+55(11) 98011-1193",
    },
    {
      href: "mailto:juan@almacreatiastudio.work",
      icon: AiOutlineMail,
      iconSize: 32,
      text: "juan@almacreatiastudio.work",
    }
  ];
  return (
    <div className={`flex w-full items-center px-4 py-6 ${className}`}>
      {contactLinks.map((link, index) => (
        <div key={index} className="flex flex-col w-1/3">
          <FooterContactLink href={link.href} icon={link.icon} iconSize={link.iconSize} text={link.text} />
        </div>
      ))}
    </div>
  );
};

export default FooterContent;
