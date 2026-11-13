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
      buttonColor: "",
      linkTxt: "Ver más",
      linkUrl: "#",
      iconLetter: "d",}
  ]
  return(
  <section id="serviocios-innovatio">
      <h2 className="text-3xl font-bold mb-4">Ecosistema de Soluciones Innovatio</h2>
      <p>Diseñamos y producimos productos digitales interactivos, educativos y de alto impacto para conectar con tu audiencia:</p>
      <div className="flex">
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
