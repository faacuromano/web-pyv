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
    { name: arbol01, alt: "Rama Femenina", label: "Rama Femenina", link: '/arbol/rama-femenina', interactive: true },
    { name: arbol02, alt: "Rama Sindical", label: "Rama Sindical", link: '/arbol/rama-sindical', interactive: true },
    { name: arbol03, alt: "Juventud Peronista", label: "Juventud Peronista", link: '/arbol/juventud-peronista', interactive: true },
    { name: arbol04, alt: "Movimientos Sociales", label: "Mov. Sociales", link: '/arbol/movimientos-sociales', interactive: true },
    { name: arbol05, alt: "Peron y Evita", interactive: false },
    { name: arbol06, alt: "Rama Politica", label: "Rama Politica", link: '/arbol/rama-politica', interactive: true },
    { name: arbol07, alt: "Rama Empresarial", label: "Rama Empresarial", link: '/arbol/rama-empresarial', interactive: true },
    { name: arbol08, alt: "Arbol Peronista", interactive: false },
    { name: arbol09, alt: "Tecnicos y Profesionales", label: "Tec. y Profesionales", link: '/arbol/tecnicos-profesionales', interactive: true },
  ];

  return (
    <div className="tree-frame overflow-hidden">
      <div className="grid grid-cols-3">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className={`relative block overflow-hidden group ${!image.interactive ? 'pointer-events-none' : ''}`}
          >
            <Image
              src={image.name}
              alt={image.alt}
              width={500}
              height={500}
              className={`w-full h-auto block ${
                image.interactive
                  ? 'transition-transform duration-500 ease-out group-hover:scale-110'
                  : ''
              }`}
            />
            {image.interactive && image.label && (
              <div className="absolute inset-0 bg-azul-950/0 group-hover:bg-azul-950/50 transition-all duration-400 flex items-end justify-center">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out w-full">
                  <div className="grid-label-overlay px-2 pb-2 pt-8 sm:pb-3 sm:pt-10">
                    <span className="block text-white text-[10px] sm:text-xs font-body font-semibold tracking-[0.15em] uppercase text-center drop-shadow-lg">
                      {image.label}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SquareImagesGrid;
