import React from "react";

const page = () => {
  return (
    <main className="flex justify-center ">
      <div className="flex flex-col items-center md:w-3/5 h-96 bg-gray-100 rounded-lg">
          {" "}
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 m-2 flex items-center ">
            Economia Popular
          </h1>
          <p className="font-semibold text-gray-800 mt-2">
          Los distintos integrantes ofrecen y demandan; productos para la
            venta (alimentos envasados y elaborados), servicios personales
            (oficios varios) y las compras comunitarias a la baja de precios por
            bultos y un entramado solidario para reunir los dineros y la
            logística a su entrega.
          </p>
          <p className="font-semibold text-gray-800 mt-2">
          Con 200 miembros y en este marco, las
            actividades solidarias que se fueron desplegando conforman una red
            económica donde; encontrarse, (primer paso a la organización)
            reconocerse (en las necesidades de los demás), y comprender (en el
            ejercicio la fuerza colaborativa de nuestro pueblo solidario) es,
            reponer la fuerza como pueblo.
          </p>
      </div>
    </main>
  );
};

export default page;
