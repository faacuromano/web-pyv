import Image from 'next/image';
import communityImage from '../../public/asd.jpg';
import actionImage from '../../public/gm.jpg';
import proposeImage from '../../public/gm.jpg';
import politicsImage from '../../public/gm.jpg';

const HomePage = () => {
  return (
  <main className="bg-gray-100">
    {/* Encabezado */}
    <section className="relative h-dvh flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${communityImage.src})` }}>
      {/* Capa negra de transparencia */}
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* Contenido */}
      <div className="bg-white bg-opacity-80 p-8 text-center rounded-md z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">Partido Principios y Valores</h1>
        <p className="text-2xl text-cyan-800">Rosario, Santa Fe</p>
      </div>
    </section>

      {/* Sección de Propuestas */}
      <section className="py-12">
  <div className="text-center mb-12">
    <p className="text-2xl text-gray-900">Nuestra forma de hacer política, desde la accion, siempre con compromiso.</p>
  </div>
  <div className="flex grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    
    <a href='/nosotros/accion-politica' className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center">
      <Image src={actionImage} alt="Acción Política" width={320} height={200} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="bg-cyan-800 bg-opacity-80 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold text-white mb-2">Acción Política</h3>
        <p className="text-gray-200">Iniciativas para el bien común que promuevan la justicia social.</p>
      </div>
    </a>

    <a href='/nosotros/proponemos' className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center">
      <Image src={proposeImage} alt="Proponemos" width={320} height={200} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="bg-gray-200 bg-opacity-80 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold text-black mb-2">Proponemos</h3>
        <p className="text-gray-800">Estar al tanto de lo que está ocurriendo en nuestro país y cómo respondemos.</p>
      </div>
    </a>

    <a href='/nosotros/politica-y-actualidad' className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center">
      <Image src={politicsImage} alt="Política Actual" width={320} height={200} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="bg-cyan-800 bg-opacity-80 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold text-white mb-2">Política Actual</h3>
        <p className="text-gray-200">Iniciativas para el bien común que promuevan la justicia social.</p>
      </div>
    </a>

  </div>
  
</section>


      {/* Sección de Noticias o Destacados
      <section className="py-16 bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Actualidad</h2>
          <p className="text-lg text-gray-700">Últimas noticias y actividades destacadas.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">Nuevo</span>
            <h3 className="text-xl font-semibold mb-2">Actividades y noticias partidarias</h3>
            <p className="text-gray-600">Entra y mira las iniciativas y actividades del partido..</p>
            <button className="mt-4 text-blue-500 hover:underline">Leer más</button>
          </div>
        </div>
      </section> */}

      {/* Cita Final */}
      <section className="py-16 bg-gray-100 text-center">
        <p className="text-xl italic text-gray-800">
          Mejor que decir es hacer, mejor que prometer es realizar.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
