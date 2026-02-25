import React from 'react';

const CampaniaAfiliacion = () => {
  return (
    <div>
      <section className="subpage-hero py-12 sm:py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Actividades
          </span>
          <h1 className="font-avenir text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-none mt-3">
            Campa&ntilde;a de Afiliaciones
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-5 sm:mt-6"></div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
            Sumate al partido Principios y Valores. Afiliarte es el primer paso
            para construir juntos la Argentina que merecemos.
          </p>
          <div className="mt-8">
            <a
              href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
              className="block sm:inline-block w-full sm:w-auto bg-azul-800 text-white font-body font-semibold px-8 py-3.5 text-sm tracking-wide hover:bg-celeste-600 transition-colors duration-300 press-feedback text-center"
            >
              Afiliate por WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaniaAfiliacion;
