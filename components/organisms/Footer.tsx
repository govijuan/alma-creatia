import { cn } from "@/lib/utils";

interface FooterProps {
  /** Optional className to extend or override default styles */
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative bg-white/90 dark:bg-gray-900/50",
        "text-gray-900 dark:text-gray-100",
        "py-12",
        className
      )}
    >
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
    </footer>
  );
}
