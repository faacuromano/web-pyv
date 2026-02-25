'use client'
import React, { useEffect } from 'react';
import SquareImagesGrid from '../../components/gridImaes.js';

const ArbolPage = () => {
  useEffect(() => {
    const sound = new Audio('/arbolfrutos.mp3')
    sound.play().catch((e) => {
      console.log('El navegador bloqueó la reproducción automática:', e);
    });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestro movimiento
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Árbol Peronista
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      {/* Tree grid on dark background */}
      <section className="tree-section-bg py-16 md:py-24 px-6">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
          <SquareImagesGrid />
        </div>

        <div className="text-center mt-14 md:mt-20">
          <div className="w-8 h-0.5 bg-amarillo-400 mx-auto mb-8"></div>
          <blockquote className="font-display text-gray-200/80 text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug max-w-2xl mx-auto">
            &ldquo;El árbol se conoce por sus frutos...&rdquo;
          </blockquote>
          <p className="font-body text-dark-400 text-sm mt-6">
            Las ramas que conforman nuestro movimiento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArbolPage;
