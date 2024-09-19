import Image from "next/image";
import SquareImagesGrid from "@/components/gridImaes";

function Home() {
  return (
    <main className="h-full flex min-h-screen flex-col items-center justify-between px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full mb-12 md:space-x-8">
          <div className="w-full md:w-1/2">
            {/* Adjust image grid size */}
            <SquareImagesGrid className="w-full h-auto max-w-full" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl max-md:text-3xl leading-tight mt-4">
              Partido Principios y Valores
            </h1>
            <h2 className="text-xl text-cyan-800 mb-4 leading-snug sm:text-2xl">
              Rosario, Santa Fe
            </h2>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full md:grid-cols-2 lg:grid-cols-4 gap-6 lg:text-left mx-auto">
        {/* Affiliate button */}
        <a
          href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
          className="group flex flex-col items-center justify-center bg-gray-700 border border-transparent rounded-lg px-5 py-4 transition hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="group-hover:text-cyan-800 text-white mb-3 text-2xl font-semibold">
            Afiliate <span className="group-hover:text-cyan-800">&gt;</span>
          </h2>
          <p className="text-gray-400 text-sm group-hover:text-gray-700">
          Afiliate al partido completando el formulario, también podes darnos un aval
          </p>
        </a>

        {/* Biblioteca */}
        <a
          href="https://drive.google.com/drive/folders/1aTioaBjhAQ-QV6EJbCW1gOLR7Fgc5Qno"
          className="group flex flex-col items-center justify-center border border-transparent rounded-lg px-5 py-4 transition hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold group-hover:text-cyan-800">
            Biblioteca <span>&gt;</span>
          </h2>
          <p className="text-sm opacity-50 group-hover:opacity-100">
          Accede a unas de las bibliotecas de peronismo más grande del país, cuenta con +50GB de información.
          </p>
        </a>

        {/* Árbol Peronista */}
        <a
          href="/arbol"
          className="group flex flex-col items-center justify-center border border-transparent rounded-lg px-5 py-4 transition hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className="text-2xl font-semibold group-hover:text-cyan-800">
            Árbol peronista <span>&gt;</span>
          </h2>
          <p className="text-sm opacity-50 group-hover:opacity-100">
          Explora las ramas del movimiento peronista integradas en un árbol interactivo para conocer más sobre el partido y su organización.          </p>
        </a>

        {/* Olla Popular */}
        <a
          href="/olla-popular"
          className="group flex flex-col items-center justify-center border border-transparent rounded-lg px-5 py-4 transition hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className="text-2xl font-semibold group-hover:text-cyan-800">
            Olla popular <span>&gt;</span>
          </h2>
          <p className="text-sm opacity-50 group-hover:opacity-100">
          Súmate a ayudar al pueblo mediante la olla popular que se realiza en Rosario.
          </p>
        </a>
      </div>
    </main>
  );
}

export default Home;
