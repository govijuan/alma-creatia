import { cn } from "@/lib/utils";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

interface FooterProps {
  /** Optional className to extend or override default styles */
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative dark:bg-gray-900/50 mt-4",
        "text-gray-900 dark:text-gray-100",
        "py-12",
        className
      )}
    >
      <div className="flex flex-col w-3/4 mx-auto bg-white rounded-2xl p-5">
        <div className="flex w-full items-center px-4 py-6">
          <div className="flex flex-col w-1/3">
            <a href="tel:+573008569353" className="w-100 flex"><FaPhone size={28} /><span className="ms-2">+57 300 8569353</span></a>
          </div>
          <div className="flex flex-col w-1/3"><a href="" className="w-100 flex mt-2"><FaWhatsapp size={32} /><span className="ms-2">+55(11) 98011-1193</span></a></div>
          <div className="flex flex-col w-1/3"><a href="mailto:juan@almacreatiastudio.work" className="w-100 flex mt-2"><AiOutlineMail size={32}/><span className="ms-2">juan@almacreatiastudio.work</span></a></div>
        </div>
        <div className="mb-4 w-full text-center text-xs mt-1">
          © {new Date().getFullYear()} Alma Creatia. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
