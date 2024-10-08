import React from 'react';

const Actividades = () => {
  return (
    <div className="flex justify-center pt-8 px-4">
      <div className="flex flex-col max-w-lg">
        <h1 className="text-4xl text-cyan-800 font-bold mb-6">Nuestras actividades</h1>
        <ul className="space-y-4">
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-600 mr-2">✅</span>
            Ciclo de lectura (juventud)
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            La básica
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            Nosotros
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            Rama femenina
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            Olla popular
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            Nuestro candidato
          </li>
          <li className="flex items-center text-2xl bg-gray-200 rounded-md p-3">
            <span className="text-green-800 mr-2">✅</span>
            Campaña de adhesión
          </li>
        </ul>
        <p className="text-lg text-black mt-6">
          * Si te interesa participar de cualquiera de nuestras actividades, no dudes en comunicarte haciendo click en los enlaces.
        </p>
      </div>
    </div>
  );
}

export default Actividades;
