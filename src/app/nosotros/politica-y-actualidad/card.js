import React from 'react';
import Image from 'next/image';

const ActividadCard = ({ titulo, subtitulo, texto, imagen }) => {
  return (
    <div className="group card-hover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          width={400}
          height={250}
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-display text-dark-950 text-lg tracking-tight">{titulo}</h3>
        <span className="font-body text-celeste-600 text-xs font-semibold tracking-wide uppercase">{subtitulo}</span>
        <p className="font-body text-dark-500 text-sm mt-2 leading-relaxed">{texto}</p>
      </div>
    </div>
  );
};

export default ActividadCard;
