
const PoliticaActual = () => {
  return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-sky-900">Política Actual</h1>
        <p className="font-semibold text-gray-700 mt-4">
          Participamos en espacios de discusión y debate para avanzar en nuestra visión de un país justo. A continuación, 
          puedes hacer clic en cada carta para ver las reuniones y acciones específicas que llevamos a cabo.
        </p>
        <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Aquí puedes agregar componentes de cartas para cada reunión o acción */}
          <div className="p-4 bg-blue-50 rounded shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-blue-700">Reunión en Luna Park</h2>
            <p className="text-gray-600 mt-2">Detalles sobre la reunión del 25 de julio de 1949.</p>
          </div>
          {/* Agrega más cartas según sea necesario */}
        </div>
      </div>
  );
}

export default PoliticaActual
