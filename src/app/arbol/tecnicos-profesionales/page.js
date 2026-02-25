import React from 'react';
import Image from 'next/image';
import trabajo from "@/../public/trabajando.webp";

const Page = () => {
  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            El árbol peronista
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            T&eacute;cnicos y Profesionales
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="relative w-24 h-24 mx-auto mb-8 overflow-hidden rounded-full">
            <Image
              src={trabajo}
              alt="En construcción"
              fill
              className="object-cover"
            />
          </div>
          <blockquote className="font-display text-dark-950 text-xl md:text-2xl tracking-tight leading-snug">
            &ldquo;Mejor que decir es hacer, mejor que prometer es realizar.&rdquo;
          </blockquote>
          <div className="w-10 h-0.5 bg-amarillo-400 mx-auto mt-6 mb-6"></div>
          <p className="font-body text-dark-400 text-base">
            En construcción. Volv&eacute; pronto para ver los frutos de nuestro esfuerzo colectivo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
