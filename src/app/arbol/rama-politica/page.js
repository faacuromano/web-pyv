import Image from 'next/image';
import React from 'react';
import image from '@/../public/gm.webp';

import image0 from './1.webp';
import image1 from './2.webp';
import image2 from './3.webp';

const images = [image0, image1, image2]

const Page = () => {
  return (
    <div className=" sm:mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Rama Politica</h1>

      <div className="mb-8">
        <p className="text-xl font-normal">
        Esta rama se encarga de el analisis, la planificación estratégica, y el desarrollo de propuestas políticas. 
        </p>
        <p className="text-xl font-normal">
        En línea con los principios Peronistas sobre la importancia del previo analisis para la adecuada planificación, 
        esta rama trabaja en la elaboración de estrategias y políticas que reflejen los valores y principios del partido, respondiendo asi a las 
        necesidades de la comunidad. 
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
