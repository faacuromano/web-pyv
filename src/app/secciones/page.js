import Image from 'next/image';
import React from 'react';
import image from '@/../public/gm.jpg';

const Page = () => {
  return (
    <div className=" mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">NOMBRE DE LA RAMA</h1>

      <div className="mb-8">
        <p className="text-xl">
          Una descripcion de las actividades, la organizacion, ideas, objetivos, etc. La idea es poder explicar
          brevemente de que se trata para dar introduccion a las imagenes de las actividades. Una descripcion de las
          actividades, la organizacion, ideas, objetivos, etc. La idea es poder explicar brevemente de que se trata
          para dar introduccion a las imagenes de las actividades.
        </p>
      </div>

      <h2 className="text-xl mb-4 text-gray-700">Si quieres participar, contactate acá: (341) 5-123456</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
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
