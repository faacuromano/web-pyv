import Image from 'next/image';
import React from 'react';
import image0 from "./1.jpg";
import image1 from "./2.jpg";
import image2 from "./3.jpg";

const images = [image0, image1, image2];
const Page = () => {
  return (
    <div className="lg:mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Rama Sindical</h1>

      <div className="mb-8">
        <p className="text-xl">
        La Rama Sindical está orientada a colaborar con los sindicatos y los trabajadores. 
        </p>
        <p className="text-xl">
        Encolumnados en Juan Domingo Peron destacamos para la Argentina la dignidad del trabajo y el bienestar de los trabajadores, quienes son los constructores de la patria actual y futura.
        En la rama se trabaja la defensa de los derechos laborales, la unidad y organización de los trabajadores en pos de políticas que mejoren las condiciones de vida de nuestros obreros. 
        </p>
        <p className="text-xl">
        Su objetivo es conectar el partido con el movimiento sindical y apoyar el desarrollo del equilibrio y la armonía entre trabajadores y capital.
        </p>
      </div>

      <h2 className="text-xl mb-4 text-gray-700">Si quieres participar, contactate acá: (341) 5-123456</h2>

      <div className="grid  grid-cols-2 md:grid-cols-4 gap-1 w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-60 overflow-hidden rounded-lg hover:shadow-md transition duration-300 ease-in-out"
          >
            <Image
              src={img}
              alt={`Actividad ${index + 1}`}
              layout="fill"
              className="object-cover  w-full h-auto"
            />
            <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                Actividad {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
