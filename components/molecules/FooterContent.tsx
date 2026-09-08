import FooterContactLink from "../atoms/FooterContactLink";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

interface FooterContentProps {
  /** Optional className to extend or override default styles */
  className?: string;
}

const FooterContent = ({ className = "" }: FooterContentProps) => {
  return (
    <div className={`flex w-full items-center px-4 py-6 ${className}`}>
      <div className="flex flex-col w-1/3">
        <FooterContactLink href="tel:+573008569353" icon={FaPhone} iconSize={28} text="+57 300 8569353" />
      </div>
      <div className="flex flex-col w-1/3">
        <FooterContactLink href="" icon={FaWhatsapp} iconSize={32} text="+55(11) 98011-1193" />
      </div>
      <div className="flex flex-col w-1/3">
        <FooterContactLink href="mailto:juan@almacreatiastudio.work" icon={AiOutlineMail} iconSize={32} text="juan@almacreatiastudio.work" />
      </div>
    </div>
  );
};

export default FooterContent;
