// src/components/ActividadCard.js
import React from 'react';
import Image from 'next/image';
const ActividadCard = ({ titulo, subtitulo, texto, imagen }) => {
  return (
    <div className="p-4 bg-blue-50 rounded shadow hover:shadow-lg transition">
      <Image width={300} height={300} src={imagen} alt={titulo} className="w-full h-40 object-cover rounded-t" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-700">{titulo}</h2>
        <span className="text-sm text-red-600 font-semibold">{subtitulo}</span>
        <p className="text-gray-600 mt-2">{texto}</p>
      </div>
    </div>
  );
};

export default ActividadCard;
