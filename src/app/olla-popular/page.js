'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import olla01 from '../../../public/Olla_0.jpg';
import olla02 from '../../../public/Olla_1.jpg';
import olla03 from '../../../public/Olla_2.jpg';
import olla04 from '../../../public/Olla_3.jpg';
import olla05 from '../../../public/Olla_4.jpg';

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
    <main className="h-full flex flex-col items-center">
      <h1 className='text-3xl w-2/3 m-2 font-semibold text-center'>El pueblo ayuda al pueblo</h1>
      <h3 className='text-1xl w-2/3 m-2'>
        Entendemos esto, como un principio fundamental de la vida en comunidad. Desde Principios y Valores Rosario, queremos invitarte a colaborar, cocinar, difundir, o dar una mano en lo que te sea posible a la olla popular que se realiza todos los JUEVES en PLAZA SARMIENTO con el objetivo de brindar, no solamente un plato de comida, sino una charla, un abrazo, y un espacio de encuentro a quienes hoy lamentablemente no lo tienen. No hay mayor aporte a la comunidad que ayudar a la felicidad de quienes la habitan. La solidaridad de este pueblo es inmensa y queremos compartir con vos la felicidad de no ignorar al que tenemos al lado.
      </h3>
      <div className="relative w-1/2 container mx-auto p-4">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <Image src={image} alt={`Imagen ${index + 1} olla popular`} width={400} height={200} className="aspect-[16/9] w-full rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white text-xl p-2 rounded-full shadow-md focus:outline-none">
          &lt;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white text-xl p-2 rounded-full shadow-md focus:outline-none">
          &gt;
        </button>
      </div>
    </main>
  );
};

export default OllaPopular;
