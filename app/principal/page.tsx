import LogoTxt from "@/components/logo-txt";
import PageTitle from "@/components/pageTitle";
import ArrowDown from "@/components/ui/ArrowDown";

const Principal = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/backgrounds/buceadoras-perlas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-50 z-10"></div>

        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col justify-center h-full text-white w-full px-4 pb-4">
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-center">
              <LogoTxt />
            </div>
            <PageTitle title="INICIO" />
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
                targetId="bienvenidos"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="bienvenidos"
        className="flex flex-col items-center justify-center py-20 bg-gray-100 w-full"
      >
        {/*<div className="flex">
          <h3 className="text-4xl font-bold">Bienvenidos</h3>
        </div>*/}
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-2">
            <p className="mb-4">
              Creamos marcas diseñadas para quedarse en la mente y el corazón de
              las personas como extensión (resultado) del alma que crea
            </p>
            <p>
              Guiados por la filosofía de Alma Creatia, las ideas actúan como
              una fuerza flexible y complementaria
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mt-8">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Metodología Inside Out
          </a>
        </div>
      </section>
      <section className="bg-lead-blue flex flex-col items-center text-gray-100 justify-center py-20 w-full">
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-2">
            <p className="mb-4">
              Integramos estrategia, diseño creativo y tecnología de vanguardia
              para startups, emprendedores y empresas medianas que quieren
              destacar con su voz
            </p>
            <p>
              Convertimos ideas en marcas resonantes que conectan emocionalmente
              y generan confianza
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mt-8">
          <a className="px-6 py-3 bg-cyan-50 text-gray-600 rounded-full hover:bg-gray-400 transition duration-300 mr-2">
            SERVICIOS
          </a>
          <a className="px-6 py-3 bg-cyan-50 text-gray-600 rounded-full hover:bg-gray-400 transition duration-300">
            CALCULADOR DE COTIZACIÓN
          </a>
        </div>
      </section>
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Alma Creatia</h1>
      <p className="text-lg text-gray-600 mb-8">
        Tu espacio de creatividad e innovación
      </p>
      <a
        href="/proyectos"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Explorar Proyectos
      </a>
    </div>
  );
};

export default Principal;
