import GlassCard from "@/components/molecules/GlassCard";

const ServiciosInnovatio = () => {
  const soluciones = [
    {
      title: "Desarrollo de Apps",
      content: (
        <>
          <p className="mb-4 text-xl">
           Aplicaciones móviles e híbridas a la medida, enfocadas en la usabilidad, la funcionalidad y una experiencia de usuario memorable.
          </p>
        </>
      ),
      buttonColor: "yellow",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "d",
    },
    {
      title: "Advergaming y Juegos Digitales",
      content: (
        <>
          <p className="mb-4 text-xl">
            Experiencias lúdicas e interactivas diseñadas para enganchar a tu audiencia, fidelizar clientes o dinamizar la formación interna.
          </p>
        </>
      ),
      buttonColor: "green",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "e",
    },
    {
      title: "Configuración de Agentes Virtuales",
      content: (
        <>
          <p className="mb-4 text-xl">
            Implementación de asistentes inteligentes e integraciones de IA para automatizar procesos, potenciar la atención y transformar la interacción con el usuario.
          </p>
        </>
      ),
      buttonColor: "red",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "f",
    },
    {
      title: "E-books y Publicacione s Interactivas",
      content: (
        <>
          <p className="mb-4 text-xl">
            Maquetación y producción de contenido editorial digital envolvente, enriquecido con elementos multimedia y de diseño visual.
          </p>
        </>
      ),
      buttonColor: "blue",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "g",
    },
    {
      title: "E-learning y Cursos Digitales",
      content: (
        <>
          <p className="mb-4 text-xl">
            Diseño instruccional, producción de contenido educativo digital y estructuración de plataformas de aprendizaje a medida.
          </p>
        </>
      ),
      buttonColor: "violet",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "h",
    },
    {
      title: "Asesoría en Innovación de Servicio o Producto",
      content: (
        <>
          <p className="mb-4 text-xl">
            ¿Buscas estructurar un nuevo producto o escalar una iniciativa digital B2B?
          </p>
          <p>
            Agenda una sesión estratégica con nuestro equipo de consultoría e impulsa tu proceso de innovación.
          </p>
        </>
      ),
      buttonColor: "pink",
      linkTxt: "Solicitar Diagnóstico",
      linkUrl: "#",
      link2Txt: "Agenda una Sesión de Exploración",
      link2Url: "#",
      iconLetter: "i",
    },
  ] as Array<{
    title: string;
    content: React.ReactNode;
    buttonColor: 'yellow' | 'green' | 'red' | 'blue' | 'violet' | 'pink';
    linkTxt: string;
    linkUrl: string;
    iconLetter: string;
    link2Txt?: string;
    link2Url?: string;
  }>;
  return(
  <section id="serviocios-innovatio" className=" relative w-3/4 mx-auto mt-15 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ecosistema de Soluciones Innovatio</h2>
      <p>Diseñamos y producimos productos digitales interactivos, educativos y de alto impacto para conectar con tu audiencia:</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>article]:max-w-none mt-8">
        {soluciones.map((solucion, index) => (
          <GlassCard
            key={index}
            title={solucion.title}
            content={solucion.content}
            buttonColor={solucion.buttonColor}
            linkTxt={solucion.linkTxt}
            linkUrl={solucion.linkUrl}
            iconLetter={solucion.iconLetter}
            {...(solucion.link2Txt && { link2Txt: solucion.link2Txt })}
            {...(solucion.link2Url && { link2Url: solucion.link2Url })}
          />
        ))}
      </div>
  </section>
  )
}

export default ServiciosInnovatio
