import React from 'react';
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const page = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-900 mb-8">Contacto</h1>
      <p className="text-gray-700 text-center mb-8">
        Encontranos en nuestras redes sociales o contactarnos directamente por WhatsApp. 
      </p>
      <div className="space-y-6">
        {/* Enlaces de contacto */}
        <a href="https://www.instagram.com/pyv_rosario/" target="_blank" rel="noopener noreferrer" aria-label="Instagram oficial" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-purple-600 hover:text-purple-800 transition">
          <span className="text-gray-800">Instagram oficial</span>
          <FaInstagram size={30} />
        </a>
        <a href="https://www.instagram.com/ramafemeninapyvsanta/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Rama femenina" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-purple-600 hover:text-purple-800 transition">
          <span className="text-gray-800">Rama femenina</span>
          <FaInstagram size={30} />
        </a>
        <a href="https://www.instagram.com/juventudpyvrosario/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Juventud peronista" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-purple-600 hover:text-purple-800 transition">
          <span className="text-gray-800">Juventud peronista</span>
          <FaInstagram size={30} />
        </a>
        <a href="https://www.youtube.com/@ConUnEscarbadientes" target="_blank" rel="noopener noreferrer" aria-label="Nuestro stream en YouTube" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-red-600 hover:text-red-800 transition">
          <span className="text-gray-800">Nuestro stream</span>
          <FaYoutube size={30} />
        </a>
        <a href="https://www.youtube.com/@TropadeLeales" target="_blank" rel="noopener noreferrer" aria-label="Canal de YouTube" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-red-600 hover:text-red-800 transition">
          <span className="text-gray-800">Canal de YouTube</span>
          <FaYoutube size={30} />
        </a>
        <a href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Afiliaciones" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-green-600 hover:text-green-800 transition">
          <span className="text-gray-800">Afiliaciones</span>
          <FaWhatsapp size={30} />
        </a>
        <a href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Quiero participar" className="flex hover:bg-gray-200 bg-gray-100 p-1 rounded-lg hover:scale-105 justify-between items-center text-green-600 hover:text-green-800 transition">
          <span className="text-gray-800">Quiero participar</span>
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default page;
