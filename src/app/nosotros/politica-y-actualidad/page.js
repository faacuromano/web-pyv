import React from "react";
import actividadesList from "./listaAct.js";
import ActividadCard from "./card.js";

const PoliticaActual = (imported) => {
  const HeadingTag = imported.imported === true ? 'h3' : 'h1';
  return (
    <div>
      {!imported.imported && (
        <section className="subpage-hero py-12 sm:py-16 md:py-24 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
              Nosotros
            </span>
            <h1 className="font-avenir text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-none mt-3">
              Pol&iacute;tica en Santa Fe
            </h1>
            <div className="w-12 h-0.5 bg-amarillo-400 mt-5 sm:mt-6"></div>
          </div>
        </section>
      )}

      <section className={`${imported.imported ? '' : 'py-10 sm:py-16 md:py-20'} px-5 sm:px-6`}>
        <div className="max-w-4xl mx-auto">
          {imported.imported && (
            <HeadingTag className="font-display text-dark-950 text-2xl md:text-3xl tracking-tighter leading-tight mb-6">
              Política en Santa Fe
            </HeadingTag>
          )}

          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mb-10">
            Participamos en espacios de discusión y debate para avanzar en nuestra
            visión de un país justo. Hacé click en cada tarjeta para ver las reuniones
            y acciones que llevamos a cabo.
          </p>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {actividadesList.map((actividad, index) => (
              <ActividadCard key={index} {...actividad} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaActual;
