// src/pages/PoliticaActual.js
import React from "react";
import actividadesList from "./listaAct.js";
import ActividadCard from "./card.js";

const PoliticaActual = (imported) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {imported.imported === true ? (
        <h3 className="text-3xl font-bold text-center text-sky-900">
          Política Actual
        </h3>
      ) : (
        <h1 className="text-3xl font-bold text-center text-sky-900">
          Política Actual
        </h1>
      )}
      <p className="font-semibold text-gray-700 mt-4">
        Participamos en espacios de discusión y debate para avanzar en nuestra
        visión de un país justo. A continuación, puedes hacer clic en cada carta
        para ver las reuniones y acciones específicas que llevamos a cabo.
      </p>
      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {actividadesList.map((actividad, index) => (
          <ActividadCard key={index} {...actividad} />
        ))}
      </div>
    </div>
  );
};

export default PoliticaActual;
