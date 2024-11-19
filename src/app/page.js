import Image from "next/image";
import communityImage from "../../public/asd.webp";
import actionImage from "../../public/gm.webp";
import proposeImage from "../../public/gm.webp";
import politicsImage from "../../public/gm.webp";
import Accion from "@/app/nosotros/accion-politica/page.js";
import Actualidad from "@/app/nosotros/politica-y-actualidad/page.js";
import Proponemos from "@/app/nosotros/proponemos/page.js";

const HomePage = () => {
  return (
    <main className="bg-gray-100">
      {/* Encabezado */}
      <section
        className="relative h-dvh flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${communityImage.src})` }}
      >
        {/* Capa negra de transparencia */}
        <div className="absolute inset-0 bg-black opacity-50" />
        {/* Contenido */}
        <div className="bg-white bg-opacity-80 p-8 text-center rounded-md z-10">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
            Partido Principios y Valores 
          </h1>
          <h2 className="text-2xl text-cyan-800">
          Rosario, Santa Fe
          </h2>
        </div>
      </section>

      {/* Sección de Propuestas */}
      <section className="py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-900">
            Nuestra forma de hacer política, desde la acción, siempre con
            compromiso hacia la justicia social en Santa Fe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <a
            href="/nosotros/accion-politica"
            className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center"
          >
            <Image
              src={actionImage}
              alt="Reunión de acción política promoviendo la justicia social en Santa Fe"
              width={320}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="hover:opacity-90 hover:bg-cyan-700 bg-cyan-800 bg-opacity-90 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-white">
                Acción Política 
              </h3>
              <h4 className="text-gray-400 mb-2">
                Para formar comunidad
              </h4>
              <p className="text-gray-200 m-2">
                La acción política es una acción colectiva; es menester terminar
                con la mentalidad individualista.
              </p>
            </div>
          </a>

          <a
            href="/nosotros/proponemos"
            className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center"
          >
            <Image
              src={proposeImage}
              alt="Propuestas transformadoras para Rosario y Santa Fe"
              width={320}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="bg-gray-200 hover:bg-yellow-100 transition-colors duration-500 hover:bg-opacity-80 bg-opacity-90 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-black">
                Propuestas
              </h3>
              <h4 className="text-gray-600 mb-2">
                Propuestas que Transforman Rosario y Santa Fe
              </h4>
              <p className="text-black m-2">
                Estar al tanto de lo que está ocurriendo en nuestro país y cómo
                respondemos.
              </p>
            </div>
          </a>

          <a
            href="/nosotros/politica-y-actualidad"
            className="cursor-pointer aspect-[5/3] rounded-lg shadow-lg p-6 w-80 relative overflow-hidden hover:shadow-xl transition text-center"
          >
            <Image
              src={politicsImage}
              alt="Política actual orientada al bien común y la justicia social"
              width={320}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="hover:opacity-90 hover:bg-cyan-700 bg-cyan-800 bg-opacity-90 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-white ">
                Política Actual
              </h3>
              <h4 className="text-gray-400 mb-2">
                Justicia Social y Bienestar Común. <br></br>
              </h4>
              <p className="text-white m-2">
              Iniciativas para el bien común que promuevan la justicia social.
              </p>
            </div>
          </a>
        </div>
      </section>

      <hr className="mb-4"></hr>
      <Proponemos></Proponemos>
      <hr className="mb-4"></hr>
      <Accion></Accion>
      <hr className="mb-4"></hr>
      <Actualidad></Actualidad>
      <hr className="m-0"></hr>
      
      {/* Cita Final */}
      <section className="py-16 bg-gray-100 text-center">
        <p className="text-lg italic text-gray-800">
          Mejor que decir es hacer, mejor que prometer es realizar.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

{/*
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Actualidad</h2>
        <p className="text-lg text-gray-700">
          Mantente informado sobre nuestras últimas acciones y noticias en
          Santa Fe.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-xl font-semibold mb-2">
              Reunión comunitaria en Rosario
            </h3>
            <p className="text-gray-600">
              Descubre cómo estamos colaborando con vecinos para generar cambios
              significativos.
            </p>
            <button className="mt-4 text-blue-500 hover:underline">
              Leer más
            </button>
          </div>
        </div>
      </section>
      */}