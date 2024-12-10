import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Actividades = () => {
  return (
    <div className="flex justify-center pt-8 px-4">

      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl text-cyan-800 font-bold mb-6">Actividades del Partido Principios y Valores</h1>
        <ul className="space-y-4">
        <a href='/campania-afiliacion' className="flex w-full items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Campaña de Afiliación
          </a>
          <a href='/club-de-lectura' className="flex w-full items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Club de lectura
          </a>
          <a href='/olla-popular' className="flex w-full items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Olla popular
          </a>
          <a href='/economia-popular' className="flex w-full items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Economia Popular
          </a>
        </ul>
        <p className="text-lg text-black mt-6">
          * Si te interesa participar de cualquiera de nuestras actividades, no dudes en comunicarte haciendo click en los enlaces.
        </p>
      </div>
    </div>
  );
};

export default Actividades;
