import Image from 'next/image';
import React from 'react';
import image0 from './1.webp';
import image1 from './2.webp';
import image2 from './3.webp';

const images = [image0, image1, image2];

const Page = () => {
  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            El árbol peronista
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Rama Política
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              Esta rama se encarga del análisis, la planificación estratégica, y el
              desarrollo de propuestas políticas.
            </p>
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mt-4">
              En línea con los principios peronistas sobre la importancia del previo
              análisis para la adecuada planificación, esta rama trabaja en la
              elaboración de estrategias y políticas que reflejen los valores y
              principios del partido, respondiendo así a las necesidades de la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img}
                  alt={`Rama Política - Actividad ${index + 1}`}
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
