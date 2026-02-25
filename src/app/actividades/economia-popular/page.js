import React from "react";

const EconomiaPopular = () => {
  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Actividades
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Economía Popular
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              Los distintos integrantes ofrecen y demandan; productos para la
              venta (alimentos envasados y elaborados), servicios personales
              (oficios varios) y las compras comunitarias a la baja de precios por
              bultos y un entramado solidario para reunir los dineros y la
              logística a su entrega.
            </p>
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              Con <strong className="text-dark-950">200 miembros</strong> y en este marco, las
              actividades solidarias que se fueron desplegando conforman una red
              económica donde; encontrarse, (primer paso a la organización)
              reconocerse (en las necesidades de los demás), y comprender (en el
              ejercicio la fuerza colaborativa de nuestro pueblo solidario) es,
              reponer la fuerza como pueblo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomiaPopular;
