import Image from 'next/image';
import React from 'react';

import image0 from "./1.webp";
import image1 from "./2.webp";
import image2 from "./3.webp";
import image3 from "./4.webp";
import image4 from "./5.webp";
import image5 from "./6.webp";
import image6 from "./7.webp";
import image7 from "./8.webp";
import image8 from "./9.webp";
import image9 from "./10.webp";

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Page = () => {
  return (
    <div className="md:mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Rama Empresarial</h1>

      <div className="mb-8">
        <p className="text-xl font-normal">
        Con la industrialización como vector fundante del proyecto nacional, es necesario conformar esta rama, donde se representan los intereses del sector privado desde el partido, buscando promover un entorno económico favorable para el desarrollo y la inversión dentro del país.
        </p>
        <p className="text-xl font-normal">
        Siguiendo el mandato de Perón sobre el equilibrio entre el desarrollo económico y la justicia social, esta rama trabaja en la creación de políticas que apoyen a las empresas y fomenten el crecimiento económico de Nación. 
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
              alt={`Imagen numero ${index + 1}`}
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
