import Image from 'next/image';
import React from 'react';
import image from '@/../public/gm.jpg';

const Page = () => {
  return (
    <div className=" mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Juventud Peronista</h1>

      <div className="mb-8">
        <p className="text-xl">
        Rama de la Juventud de Principios y Valores:
        </p>
        <p className="text-xl">
        Tenemos por finalidad la formación  de cuadros políticos; colaborar en la construcción del partido desde nuestro espacio y nuestra mirada; organizar la juventud.
        Queremos que este sea un espacio de construcción, compañerismo, organización y acción para todas y todos los jóvenes que sientan al movimiento peronista y quieran empezar a militar.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg hover:shadow-md transition duration-300 ease-in-out transform scale-95 hover:scale-100">
            <Image
              src={image}
              alt=""
              layout="responsive"
              width={400}
              height={250}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">Actividad {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
