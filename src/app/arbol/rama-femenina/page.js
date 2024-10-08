import Image from "next/image";
import React from "react";
import image0 from "./1.webp";
import image1 from "./2.webp";
import image2 from "./3.webp";
import image3 from "./4.webp";
import image4 from "./5.webp";
import image5 from "./6.webp";
import image6 from "./7.webp";
import image7 from "./8.webp";
import image8 from "./9.webp";

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8];

const Page = () => {
  return (
    <div className="lg:mx-40 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-cyan-900 font-bold mb-8">Rama Femenina</h1>

      <div className="mb-8">
        <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-200 rounded-l shadow-md">
            <p>
              <strong>Fomentar la formación política:</strong>
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="text-lg">Capacitaciones</li>
              <li className="text-lg">Talleres</li>
              <li className="text-lg">
                Charlas sobre temas de actualidad política
              </li>
              <li className="text-lg">Liderazgo</li>
              <li className="text-lg">Derechos de las mujeres</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-200 rounded-l shadow-md">
            <p>
              <strong>
                Prevenir y combatir la violencia contra las mujeres:
              </strong>
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="text-lg">Brindar apoyo a las víctimas</li>
              <li className="text-lg">Promover campañas de concientización</li>
              <li className="text-lg">Trabajar por el cambio cultural</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-200 rounded-l shadow-md">
            <p>
              <strong>Desarrollar acciones sociales y comunitarias:</strong>
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="text-lg">Organizar actividades solidarias</li>
              <li className="text-lg">Colectas</li>
              <li className="text-lg">Asistencia a comedores y merenderos</li>
              <li className="text-lg">Apoyo a comunidades vulnerables</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-60 overflow-hidden rounded-lg hover:shadow-md transition duration-300 ease-in-out"
          >
            <Image
              src={img}
              alt={`Actividad ${index + 1}`}
              layout="fill"
              className="object-cover  w-full h-auto"
            />
            <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                Actividad {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
