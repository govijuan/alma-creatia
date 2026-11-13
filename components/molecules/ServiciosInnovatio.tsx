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
  ] as const;
  return(
  <section id="serviocios-innovatio">
      <h2 className="text-3xl font-bold mb-4">Ecosistema de Soluciones Innovatio</h2>
      <p>Diseñamos y producimos productos digitales interactivos, educativos y de alto impacto para conectar con tu audiencia:</p>
      <div className="flex flex-wrap gap-4">
        {soluciones.map((solucion, index) => (
          <GlassCard
            key={index}
            title={solucion.title}
            content={solucion.content}
            buttonColor={solucion.buttonColor}
            linkTxt={solucion.linkTxt}
            linkUrl={solucion.linkUrl}
            iconLetter={solucion.iconLetter}
          />
        ))}
      </div>
  </section>
  )
}

export default ServiciosInnovatio
