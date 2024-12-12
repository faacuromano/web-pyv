// src/components/ActividadCard.js
import React from 'react';
import Image from 'next/image';
const ActividadCard = ({ titulo, subtitulo, texto, imagen }) => {
  return (
    <div className="shadow-sm bg-zinc-300 	border-solid border-gray-500  border	 rounded-lg rounded shadow hover:shadow-lg transition">
      <Image width={300} height={300} src={imagen} alt={titulo} className="shadow-sm w-full h-40 object-cover rounded-t-lg" />
      <div className=" p-4">
        <h2 className="text-lg font-semibold text-blue-700">{titulo}</h2>
        <span className="text-sm text-red-900 font-semibold">{subtitulo}</span>
        <p className="text-gray-800 mt-2">{texto}</p>
      </div>
    </div>
  );
};

export default ActividadCard;
