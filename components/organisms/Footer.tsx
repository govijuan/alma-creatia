import { cn } from "@/lib/utils";
import Copyright from "../atoms/Copyright";
import FooterContent from "../molecules/FooterContent";

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
        <FooterContent />
        <Copyright />
      </div>
    </footer>
  );
}
