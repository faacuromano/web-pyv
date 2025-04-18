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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className=" sm:mx-40 flex flex-col items-center justify-center px-8" >
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">
        El pueblo ayuda al pueblo
      </h1>
      <h2 className="text-lg text-center w-full lg:w-3/4 font-bold text-gray-900">
        Entendemos esto como un principio fundamental de la vida en comunidad.
      </h2>
      <p className="text-lg w-full lg:w-3/4 m-4 text-gray-900">
        Desde Principios y Valores Rosario, queremos invitarte a colaborar,
        cocinar, difundir, o dar una mano en lo que te sea posible a la olla
        popular que se realiza todos los JUEVES en PLAZA SARMIENTO con el
        objetivo de brindar, no solamente un plato de comida, sino una charla,
        un abrazo, y un espacio de encuentro a quienes hoy lamentablemente no lo
        tienen.
      </p>
      <p className="text-lg w-full lg:w-3/4 text-gray-900">
        No hay mayor aporte a la comunidad que ayudar a la felicidad de quienes
        la habitan.
      </p>
      <p className="text-lg w-full lg:w-3/4 text-gray-900">
        La solidaridad de este pueblo es inmensa y queremos compartir con vos la
        felicidad de no ignorar al que tenemos al lado.
      </p>

      <div className="relative w-full lg:w-2/3 container mx-auto p-4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={image}
                  alt={`Imagen ${index + 1} de la olla popular`}
                  width={600}
                  height={400}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-700 text-white text-sm sm:text-2xl p-2 shadow-lg hover:bg-sky-600 focus:outline-none"
          aria-label="Anterior"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-700 text-white text-sm sm:text-2xl p-2 shadow-lg hover:bg-sky-600 focus:outline-none"
          aria-label="Siguiente"
        >
          &gt;
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-2 ${
                currentSlide === index ? "bg-sky-600 scale-150 border-2 border-black" : "bg-gray-400"
              } transition-colors`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className=" my-4">
      <div>
      <h4 className="text-xl md:text-3xl text-left text-cyan-900 font-bold ">El pueblo ayuda al pueblo...</h4>
      <h7 className='italic text-gray-500 my-4'> Un perqueño registro de nuestra olla</h7>
      </div>
      <iframe
        className="mt-2"
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/FHQeE_sDk7c?si=74PQiNGg88ceBRRc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
       </div>
    </main>
  );
};

export default OllaPopular;
