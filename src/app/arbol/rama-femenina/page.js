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

const objectives = [
  {
    title: "Fomentar la formación política",
    items: ["Capacitaciones", "Talleres", "Charlas sobre temas de actualidad política", "Liderazgo", "Derechos de las mujeres"],
  },
  {
    title: "Prevenir y combatir la violencia contra las mujeres",
    items: ["Brindar apoyo a las víctimas", "Promover campañas de concientización", "Trabajar por el cambio cultural"],
  },
  {
    title: "Desarrollar acciones sociales y comunitarias",
    items: ["Organizar actividades solidarias", "Colectas", "Asistencia a comedores y merenderos", "Apoyo a comunidades vulnerables"],
  },
];

const Page = () => {
  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            El árbol peronista
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Rama Femenina
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {objectives.map((obj, idx) => (
              <div key={idx} className="border-t-2 border-celeste-400/40 pt-6">
                <h3 className="font-display text-dark-950 text-lg tracking-tight mb-4">
                  {obj.title}
                </h3>
                <ul className="space-y-2">
                  {obj.items.map((item, i) => (
                    <li key={i} className="font-body text-dark-500 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-celeste-400 before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img}
                  alt={`Rama Femenina - Actividad ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-azul-950/0 group-hover:bg-azul-950/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
