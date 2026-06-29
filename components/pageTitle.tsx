import React from "react";
import { ArrowLeft } from "lucide-react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-start w-full pt-8">
      <div className="flex flex-col">
        <div className="flex justify-start mb-3">
          <ArrowLeft /> volver al menú principal
        </div>
        <h2 className="text-8xl">{title}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
