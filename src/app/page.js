import Image from "next/image";
import communityImage from "../../public/home.png";
import actionImage from "../../public/gm.webp";
import proposeImage from "../../public/gm.webp";
import politicsImage from "../../public/gm.webp";
import Accion from "@/app/nosotros/accion-politica/page.js";
import Actualidad from "@/app/nosotros/politica-y-actualidad/page.js";
import Proponemos from "@/app/nosotros/proponemos/page.js";
import SquareImagesGrid from "@/components/gridImaes";

const HomePage = () => {
  return (
    <main className="bg-gray-100">
      {/* Encabezado */}


        {/* Agregar alt a la imagen del banner */}
        <Image
    src={communityImage.src}
    alt="Imagen de banner del Partido Principios y Valores en Rosario, Santa Fe"
    className="md:w-full max-width-100 max-w-none h-full object-cover opacity-0 animate-zoom-in"
    width={1600}
    height={1068}
        />
      {/* Sección de Propuestas */}
      <section className="py-4">
        <div className="text-center my-4 p-2">
          <p className="text-md sm:text-xl text-gray-900">
            Nuestra forma de hacer política, desde la acción, siempre con el
            norte y el compromiso en la justicia social de Santa Fe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
          <a
            href="/nosotros/accion-politica"
            className="cursor-pointer sm:aspect-[15/3] aspect-[6/3] shadow-lg p-6 w-100 relative overflow-hidden hover:shadow-xl transition text-center"
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
                Acción en Santa Fe
              </h3>
              <h4 className="text-gray-400 mb-2">Para formar comunidad</h4>
              <p className="text-gray-200 m-2">
                La acción política es una acción colectiva; es menester terminar
                con la mentalidad individualista.
              </p>
            </div>
          </a>

          <a
            href="/nosotros/proponemos"
            className="cursor-pointer sm:aspect-[15/3] aspect-[6/3] shadow-lg p-6 w-100 relative overflow-hidden hover:shadow-xl transition text-center"
          >
            <Image
              src={proposeImage}
              alt="Propuestas transformadoras para Rosario y Santa Fe"
              width={320}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="bg-gray-200 hover:bg-yellow-100 transition-colors duration-500 hover:bg-opacity-80 bg-opacity-90 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-black">Propuestas</h3>
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
            className="cursor-pointer sm:aspect-[15/3] aspect-[6/3] shadow-lg p-6 w-100 relative overflow-hidden hover:shadow-xl transition text-center"
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
      <div className="bg-white p-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold w-full text-center m-2">
          Ramas del movimiento peronista
        </h1>
        <div className="container md:w-2/5 mx-auto flex justify-center">
          <SquareImagesGrid />
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-500 italic font-logth w-full text-center mt-8">
          El arbol se conoce por sus frutos...
        </h1>
      </div>

      {/* Cita Final */}
      <section className="py-8 bg-gray-00 text-center">
        <p className="text-lg italic text-gray-800">
          Mejor que decir es hacer, mejor que prometer es realizar.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

{
  /*
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
      */
}
