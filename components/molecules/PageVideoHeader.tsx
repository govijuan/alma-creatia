import LogoTxt from "@/components/atoms/logo-txt";
import PageTitle from "@/components/atoms/pageTitle";
import ArrowDown from "@/components/ui/ArrowDown";

interface PageVideoHeaderProps {
  videoSrc: string;
  pageTitle: string;
  targetId: string;
}

export default function PageVideoHeader({videoSrc, pageTitle, targetId}: PageVideoHeaderProps) {
  return (
    <section className="fixed inset-0 w-full h-screen overflow-hidden text-white z-0 test3">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col justify-center h-full text-white w-full px-4 pb-4">
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-center">
            <LogoTxt />
          </div>
          <PageTitle title={pageTitle} />
          <div className="flex justify-center pb-4">
            <div className="flex flex-col">
              <div className="text-2xl text-center">
                Estudio Creativo & Digital
              </div>
              <div className="text-2xl text-center">ALMACREATIASTUDIO</div>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowDown
              size={48}
              color="white"
              bounceDuration="1.5s"
              targetId={targetId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
