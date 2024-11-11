import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Actividades = () => {
  return (
    <div className="flex justify-center pt-8 px-4">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl text-cyan-800 font-bold mb-6">Actividades del Partido Principios y Valores</h1>
        <ul className="space-y-4">
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Ciclo de lectura (juventud)
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            La básica
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Nosotros
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Rama femenina
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Olla popular
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Nuestro candidato
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <FaCheckCircle className="text-green-800 mr-2" />
            Campaña de adhesión
          </li>
        </ul>
        <p className="text-lg text-black mt-6">
          * Si te interesa participar de cualquiera de nuestras actividades, no dudes en comunicarte haciendo click en los enlaces.
        </p>
      </div>
    </div>
  );
};

export default Actividades;
