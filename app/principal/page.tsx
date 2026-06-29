import LogoTxt from "@/components/logo-txt";
import PageTitle from "@/components/pageTitle";

const Principal = () => {
  return (
    <div className="flex flex-col items-center h-screen">
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
        <div className="relative z-20 flex justify-center h-full text-white w-full px-4">
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <LogoTxt />
            </div>
            <PageTitle title="Inicio" />
          </div>
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
