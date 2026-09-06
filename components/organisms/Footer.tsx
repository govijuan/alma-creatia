import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

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
      <div className="flex flex-col w-3/4 mx-auto bg-white rounded-2xl p-10">
        <div className="flex w-full items-center px-4 py-6">
          <div className="flex w-1/3">
                <a href="tel:+573008569353" className="w-100 flex justify-center"><Phone size={30} /><span className="ms-2">+57 300 8569353</span></a>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Alma Creatia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className={cn(
                "hover:text-gray-900/70",
                "dark:hover:text-gray-300",
                "transition-colors"
              )}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={cn(
                "hover:text-gray-900/70",
                "dark:hover:text-gray-300",
                "transition-colors"
              )}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={cn(
                "hover:text-gray-900/70",
                "dark:hover:text-gray-300",
                "transition-colors"
              )}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
