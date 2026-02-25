import Image from 'next/image';
import React from 'react';
import image0 from "./1.webp";
import image1 from "./2.webp";
import image2 from "./3.webp";
import image3 from "./4.webp";
import image4 from "./5.webp";
import image5 from "./6.webp";
import image6 from "./7.webp";
import image7 from "./8.webp";
import image8 from "./9.webp";
import image9 from "./10.webp";

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Page = () => {
  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            El árbol peronista
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Rama Empresarial
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              Con la industrialización como vector fundante del proyecto nacional, es
              necesario conformar esta rama, donde se representan los intereses del
              sector privado desde el partido, buscando promover un entorno económico
              favorable para el desarrollo y la inversión dentro del país.
            </p>
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mt-4">
              Siguiendo el mandato de Perón sobre el equilibrio entre el desarrollo
              económico y la justicia social, esta rama trabaja en la creación de
              políticas que apoyen a las empresas y fomenten el crecimiento económico
              de la Nación.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img}
                  alt={`Rama Empresarial - Imagen ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-azul-950/0 group-hover:bg-azul-950/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
