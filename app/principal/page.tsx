const Principal = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
