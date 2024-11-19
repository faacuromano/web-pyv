import Image from 'next/image';
import React from 'react';

import image0 from './1.webp';
import image1 from './2.webp';
import image2 from './3.webp';
import image3 from './4.webp';
import image4 from './5.webp';
import image5 from './6.webp';
import image6 from './7.webp';

const images = [image0, image1, image2, image3, image4, image5, image6];

const Page = () => {
  return (
    <div className=" sm:mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Juventud Peronista</h1>

      <div className="mb-8">
        <p className="text-xl">
        Rama de la Juventud de Principios y Valores:
        </p>
        <p className="text-xl font-normal">
        Tenemos por finalidad la formación  de cuadros políticos; colaborar en la construcción del partido desde nuestro espacio y nuestra mirada; organizar la juventud.
        Queremos que este sea un espacio de construcción, compañerismo, organización y acción para todas y todos los jóvenes que sientan al movimiento peronista y quieran empezar a militar.
        </p>
      </div>
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
