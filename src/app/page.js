import Image from "next/image";
import moreno_img from '../../public/morenohome.png'

function Home() {
  return (
    <main className="h-full flex min-h-screen flex-col items-center justify-evenly px-4">
      <div className="flex place-content-evenly w-full items-center max-md:flex-col max-md:pb-12 px-4">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-double border-cyan-600 border-2"
          src={moreno_img}
          alt="Next.js Logo"
          style={{ maxWidth: "100%", height: "auto" }}
          width={270}
          height={100}
          priority
        />
        <div className="flex flex-col mt-4 max-md:mt-0">
          <h1 className="text-5xl text-center max-md:text-3xl leading-tight mt-4">
            Partido Principios y Valores
          </h1>
          <h2 className="text-xl text-cyan-800 text-center leading-snug sm:text-2xl sm:text-left">
            Rosario, Santa Fe
          </h2>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:text-left">
        <a
          href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
          className="group ml-4 rounded-lg bg-gray-700 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="group-hover:text-cyan-800 text-white mb-3 text-2xl font-semibold">
            Afiliate{" "}
            <span className="text-white inline-block transition-transform group-hover:text-cyan-800 group-hover:translate-x-3 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-gray-400 m-0 max-w-[30ch] text-sm group-hover:text-gray-700">
            Afiliate al partido completando el formulario, también podes darnos un aval
          </p>
        </a>

        <a
          href="https://drive.google.com/drive/folders/1aTioaBjhAQ-QV6EJbCW1gOLR7Fgc5Qno"
          className="group ml-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold group-hover:text-cyan-800">
            Biblioteca{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100">
            Accede a la biblioteca de peronismo más grande del país, cuenta con +50GB de información.
          </p>
        </a>

        <a
          href="/arbol"
          className="group ml-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold group-hover:text-cyan-800">
            Árbol peronista{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100">
            Ramas del movimiento peronista integradas en un árbol interactivo para conocer más sobre el partido y su organización.
          </p>
        </a>

        <a
          href="/olla-popular"
          className="group ml-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold group-hover:text-cyan-800">
            Olla popular{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100">
            Súmate a ayudar al pueblo mediante la olla popular que se realiza en Rosario.
          </p>
        </a>
      </div>
    </main>
  );
}

export default Home;
