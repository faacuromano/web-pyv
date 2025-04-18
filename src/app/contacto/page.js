import React from 'react';
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl text-cyan-800 font-light text-center mb-6 shadow-sm">CONTACTOS</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Encontranos en nuestras redes sociales o contactarnos directamente por WhatsApp.
      </p>
      {/* Layout adaptativo con grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Enlaces de contacto */}
        <a
          href="https://www.instagram.com/pyv_rosario/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram oficial"
          className="group duration-200 pl-2 flex hover:bg-violet-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-purple-600 hover:text-purple-800 transition"
        >
          <span className="text-gray-800 text-lg group-hover:ml-3  duration-200">Instagram oficial</span>
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.instagram.com/ramafemeninapyvsanta/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Rama femenina"
          className="group duration-200 pl-2 flex hover:bg-violet-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-purple-600 hover:text-purple-800 transition"
        >
          <span className="text-gray-800 text-lg group-hover:ml-3  duration-200">Rama femenina</span>
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.instagram.com/juventudpyvrosario/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Juventud peronista"
          className="group duration-200 pl-2 flex hover:bg-violet-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-purple-600 hover:text-purple-800 transition"
        >
          <span className="text-gray-800 text-lg group-hover:ml-3  duration-200">Juventud peronista</span>
          <FaInstagram size={30} />
        </a>
        
        <a
          href="https://www.youtube.com/@ConUnEscarbadientes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nuestro stream en YouTube"
          className="group duration-200 pl-2 flex hover:bg-red-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-red-600 hover:text-red-800 transition"
        >
          <span className="text-gray-800 text-lg groupe-hover:ml-2 group-hover:ml-3 duration-200">Nuestro stream</span>
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.youtube.com/@TropadeLeales"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Canal de YouTube"
          className="group duration-200 pl-2 flex hover:bg-red-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-red-600 hover:text-red-800 transition"
        >
          <span className="text-gray-800 text-lg groupe-hover:ml-2 group-hover:ml-3 duration-200">Canal de YouTube</span>
          <FaYoutube size={30} />
        </a>
        <br></br>
        <a
          href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Afiliaciones"
          className="group duration-200 pl-2 flex hover:bg-green-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-green-600 hover:text-green-800 transition"
        >
          <span className="text-gray-800 text-lg groupe-hover:ml-2 group-hover:ml-3 duration-200">Afiliaciones</span>
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Quiero participar"
          className="group duration-200 pl-2 flex hover:bg-green-100 bg-gray-100 p-4 rounded-lg hover:shadow-md justify-between items-center text-green-600 hover:text-green-800 transition"
        >
          <span className="text-gray-800 text-lg groupe-hover:ml-2 group-hover:ml-3 duration-200">Quiero participar</span>
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default page;
