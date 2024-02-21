import Image from "next/image";

import moreno_img from '../../public/morenohome.png'
function Home() {
  return (
    <main className="h-full flex min-h-screen flex-col items-center justify-evenly">
      <div className="flex place-content-evenly w-full items-center max-md:flex-col max-md:pb-12">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-double	border-cyan-600	border-2"
          src={moreno_img}
          alt="Next.js Logo"
          width={270}
          height={100}
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-5xl	max-md:text-3xl">Principios y Valores </h1>
          <h2 className="text-2xl	text-cyan-800">Santa Fe </h2>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://drive.google.com/drive/folders/1aTioaBjhAQ-QV6EJbCW1gOLR7Fgc5Qno"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Libreria {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Accede a la libreria de peronismo mas grande del pais, cuenta con +50GB de informacion.
          </p>
        </a>

        <a
          href="https://chat.whatsapp.com/L6mRV6vtzLr2HozmjWSrVL"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Afiliate{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Afiliate al partido completando el formulario, tambien podes darnos un aval
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mas info{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium .
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mas info{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium .
          </p>
        </a>
      </div>
    </main>
  );
}

export default Home;