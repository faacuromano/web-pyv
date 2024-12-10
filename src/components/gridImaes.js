'use client'

import Image from 'next/image';
import React from 'react';
import arbol01 from '../../public/arbol-01.webp';
import arbol02 from '../../public/arbol-02.webp';
import arbol03 from '../../public/arbol-03.webp';
import arbol04 from '../../public/arbol-04.webp';
import arbol05 from '../../public/arbol-05.webp';
import arbol06 from '../../public/arbol-06.webp';
import arbol07 from '../../public/arbol-07.webp';
import arbol08 from '../../public/arbol-08.webp';
import arbol09 from '../../public/arbol-09.webp';

const SquareImagesGrid = () => {


  const images = [
    { name: arbol01,alt: "Rama Femenina",  link: '/arbol/rama-femenina', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol02,alt: "Rama Sindical",  link: '/arbol/rama-sindical', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol03,alt: "Rama Juventud Peronista",  link: '/arbol/juventud-peronista', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol04,alt: "Rama Movimientos Sociales",  link: '/arbol/movimientos-sociales', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol05,alt: "Peron y Evita",  styleHover: 'none cursor-default' },
    { name: arbol06,alt: "Rama Politica",  link: '/arbol/rama-politica', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol07,alt: "Rama Empresarial",  link: '/arbol/rama-empresarial', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition ' },
    { name: arbol08,alt: "Arbol Peronista",  styleHover: 'none cursor-default' },
    { name: arbol09,alt: "Rama Tecnicos y Profesionales",  link: '/arbol/tecnicos-profesionales', styleHover: 'w-full h-auto hover:scale-110 hover:z-50 hover-shadow-sm transition' },
  ];

  return (
    <div className=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {images.map((image, index) => (
        <a key={index} href={image.link} >
          <div className="relative">
          <Image
            src={image.name}
            alt={image.alt}
            width={500}
            height={500}
            className={image.styleHover}  // Asegúrate de que 'styleHover' esté definido en tu archivo CSS
          />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SquareImagesGrid;
