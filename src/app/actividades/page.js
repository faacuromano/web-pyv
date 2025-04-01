import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Actividades = () => {
  return (
    <div className="flex justify-center pt-8 px-4">

      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl text-cyan-800 font-light text-center mb-6 shadow-sm">NUESTRAS ACTIVIDADES</h1>
        <ul className="space-y-4">
        <a href='/actividades/campania-afiliacion' className="group flex w-full items-center text-2xl ml-2 hover:text-center bg-gray-100 hover:shadow-md hover:scale-105 transition-all rounded-md p-3">
            <FaCheckCircle className="text-green-600 mx-2" />
            <h3 className='group-hover:ml-2  hover:ml-4 transition-all'>Campaña de Afiliación</h3>
          </a>
          <a href='/actividades/club-de-lectura' className="group flex w-full items-center text-2xl ml-2 hover:text-center bg-gray-100 hover:shadow-md hover:scale-105 transition-all rounded-md p-3">
            <FaCheckCircle className="text-green-600 mx-2" />
            <h3 className='group-hover:ml-2 hover:ml-4 transition-all'>Club de lectura</h3>
          </a>
          <a href='/actividades/olla-popular' className="group flex w-full items-center text-2xl ml-2 hover:text-center bg-gray-100 hover:shadow-md hover:scale-105 transition-all rounded-md p-3">
            <FaCheckCircle className="text-green-600 mx-2" />
            <h3 className='group-hover:ml-2 hover:ml-4 transition-all'>Olla popular</h3>
          </a>
          <a href='/actividades/economia-popular' className="group flex w-full items-center text-2xl ml-2 hover:text-center bg-gray-100 hover:shadow-md hover:scale-105 transition-all rounded-md p-3">
            <FaCheckCircle className="text-green-600 mx-2" />
            <h3 className='group-hover:ml-2 hover:ml-4 transition-all'>Economia Popular</h3>
          </a>
        </ul>
        <p className="text-lg text-gray-600 italic mt-3 mx-2">
          *Si te interesa participar de cualquiera de nuestras actividades, no dudes en comunicarte haciendo click en los enlaces.
        </p>
      </div>
    </div>
  );
};

export default Actividades;
