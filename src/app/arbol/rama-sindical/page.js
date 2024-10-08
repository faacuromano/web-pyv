import React from 'react';
import Image from 'next/image';
import trabajo from "@/../public/trabajando.webp"
const HomePage = () => {
  return (
    <main className="flex justify-center ">
    <div className='flex flex-col items-center justify-evenly w-3/5 h-96 bg-gray-100 rounded-lg'>
      <div className='flex flex-row-reverse	p-4'>
      <h1 className='text-4xl font-bold text-blue-900 mb-4 m-2 flex items-center '>En construcción</h1>
      <Image
              src={trabajo}
              alt='Foto de Peron trabajando'
              className="object-cover w-40 aspect-square m-2 rounded-full"
            />
      </div>
      <p className='text-2xl text-gray-900 text-center mb-6 font-normal'>
      <em>Mejor que decir es hacer, mejor que prometer es realizar.</em>
      </p>
      <p className='text-lg text-gray-700 text-center'>
        Volvé pronto para ver los frutos de nuestro esfuerzo colectivo.
      </p>
    </div>
    </main>
  );
};

export default HomePage;