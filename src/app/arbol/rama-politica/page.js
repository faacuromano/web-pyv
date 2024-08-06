import Image from 'next/image';
import React from 'react';
import image from '@/../public/gm.jpg';

const Page = () => {
  return (
    <div className=" mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Rama Politica</h1>

      <div className="mb-8">
        <p className="text-xl">
        Esta rama se encarga de el analisis, la planificación estratégica, y el desarrollo de propuestas políticas. 
        </p>
        <p className="text-xl">
        En línea con los principios Peronistas sobre la importancia del previo analisis para la adecuada planificación, 
        esta rama trabaja en la elaboración de estrategias y políticas que reflejen los valores y principios del partido, respondiendo asi a las 
        necesidades de la comunidad. 
        </p>
      </div>

      <h2 className="text-xl mb-4 text-gray-700">Si quieres participar, contactate acá: (341) 5-123456</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg hover:shadow-md transition duration-300 ease-in-out transform scale-95 hover:scale-100">
            <Image
              src={image}
              alt=""
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
