'use client'
import Image from 'next/image';
import React from 'react';
import arbol01 from '../../public/arbol-01.jpg';
import arbol02 from '../../public/arbol-02.jpg';
import arbol03 from '../../public/arbol-03.jpg';
import arbol04 from '../../public/arbol-04.jpg';
import arbol05 from '../../public/arbol-05.jpg';
import arbol06 from '../../public/arbol-06.jpg';
import arbol07 from '../../public/arbol-07.jpg';
import arbol08 from '../../public/arbol-08.jpg';
import arbol09 from '../../public/arbol-09.jpg';

const SquareImagesGrid = () => {
  const images = [
    { name: arbol01, link: '/rama-femenina', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol02, link: '/rama-sindical', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol03, link: '/juventud-peronista', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol04, link: '/movimientos-sociales', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol05, styleHover: 'none cursor-default' },
    { name: arbol06, link: '/rama-politica', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol07, link: '/rama-empresarial', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol08, styleHover: 'none cursor-default' },
    { name: arbol09, link: '/tecnicos-profesionales', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition' },
  ];

  return (
    <div className="w-1/2  grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <Image
              src={image.name}
              alt={`Imagen ${index + 1}`}
              width={500}
              height={500}
              className={image.styleHover}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SquareImagesGrid;
