"use client";
import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import olla01 from "../../../../public/Olla_0.webp";
import olla02 from "../../../../public/Olla_1.webp";
import olla03 from "../../../../public/Olla_2.webp";
import olla04 from "../../../../public/Olla_3.webp";
import olla05 from "../../../../public/Olla_4.webp";

const OllaPopular = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStart = useRef(null);
  const images = [olla01, olla02, olla03, olla04, olla05];

  const goTo = useCallback((index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, isTransitioning]);

  const next = useCallback(() => {
    goTo(current === images.length - 1 ? 0 : current + 1);
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? images.length - 1 : current - 1);
  }, [current, images.length, goTo]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div>
      <section className="subpage-hero py-12 sm:py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Actividades
          </span>
          <h1 className="font-avenir text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-none mt-3">
            Olla Popular
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-5 sm:mt-6"></div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-dark-950 text-2xl md:text-3xl tracking-tighter leading-tight">
            El pueblo ayuda al pueblo
          </h2>
          <div className="w-10 h-0.5 bg-amarillo-400 mt-4 mb-6"></div>

          <div className="space-y-4">
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              Entendemos esto como un principio fundamental de la vida en comunidad.
              Desde Principios y Valores Rosario, queremos invitarte a colaborar,
              cocinar, difundir, o dar una mano en lo que te sea posible a la olla
              popular que se realiza todos los <strong className="text-dark-950">jueves en Plaza Sarmiento</strong> con el
              objetivo de brindar, no solamente un plato de comida, sino una charla,
              un abrazo, y un espacio de encuentro a quienes hoy lamentablemente no lo
              tienen.
            </p>
            <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
              No hay mayor aporte a la comunidad que ayudar a la felicidad de quienes
              la habitan. La solidaridad de este pueblo es inmensa y queremos compartir
              con vos la felicidad de no ignorar al que tenemos al lado.
            </p>
          </div>

          {/* ── Gallery ── */}
          <div className="mt-10 sm:mt-14">
            {/* Image frame */}
            <div
              className="relative aspect-[16/10] overflow-hidden bg-dark-950 select-none"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Olla popular ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className={`object-cover transition-all duration-700 ease-out ${
                    i === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  priority={i === 0}
                />
              ))}

              {/* Counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:bottom-3 z-10 bg-azul-950/70 backdrop-blur-sm border border-celeste-400/30 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <span className="font-avenir text-white text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest tabular-nums text-center block">
                  {current + 1} <span className="text-celeste-400/70">/</span> {images.length}
                </span>
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                disabled={isTransitioning}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 active:scale-90 transition-all duration-150"
                aria-label="Anterior"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 3L5 8L10 13" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={isTransitioning}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 active:scale-90 transition-all duration-150"
                aria-label="Siguiente"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3L11 8L6 13" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="flex gap-1 mt-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-0.5 flex-1 bg-dark-100 overflow-hidden group"
                  aria-label={`Ir a imagen ${i + 1}`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 bg-celeste-400 transition-all duration-500 ease-out ${
                      i === current ? "w-full" : i < current ? "w-full bg-dark-300" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Video ── */}
          <div className="mt-12 sm:mt-16">
            <h3 className="font-display text-dark-950 text-xl tracking-tight mb-1">
              El pueblo ayuda al pueblo...
            </h3>
            <p className="font-body text-dark-400 text-sm mb-4">
              Un peque&ntilde;o registro de nuestra olla
            </p>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FHQeE_sDk7c?si=74PQiNGg88ceBRRc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OllaPopular;
