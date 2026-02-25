"use client";
import React, { useState } from "react";
import Image from "next/image";
import olla01 from "../../../../public/Olla_0.webp";
import olla02 from "../../../../public/Olla_1.webp";
import olla03 from "../../../../public/Olla_2.webp";
import olla04 from "../../../../public/Olla_3.webp";
import olla05 from "../../../../public/Olla_4.webp";

const OllaPopular = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [olla01, olla02, olla03, olla04, olla05];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Actividades
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Olla Popular
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
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

          {/* Carousel */}
          <div className="relative mt-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <Image
                      src={image}
                      alt={`Imagen ${index + 1} de la olla popular`}
                      width={800}
                      height={500}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-azul-900/70 text-white hover:bg-celeste-600 transition-colors duration-200"
              aria-label="Anterior"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-azul-900/70 text-white hover:bg-celeste-600 transition-colors duration-200"
              aria-label="Siguiente"
            >
              &gt;
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 transition-colors duration-200 ${
                    currentSlide === index ? "bg-celeste-400" : "bg-dark-200"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mt-12">
            <h3 className="font-display text-dark-950 text-xl tracking-tight mb-1">
              El pueblo ayuda al pueblo...
            </h3>
            <p className="font-body text-dark-400 text-sm mb-4">
              Un pequeño registro de nuestra olla
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
