const AccionPolitica = (imported) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {imported.imported === true ? (
        <h3 className="text-3xl font-bold text-center text-sky-900">
          Acción Política
        </h3>
      ) : (
        <h1 className="text-3xl font-bold text-center text-sky-900">
          Acción Política
        </h1>
      )}{" "}
      <p className="font-semibold text-gray-700 mt-2">
        La acción política es una acción colectiva; es menester terminar con la
        mentalidad individualista. En este sentido es necesario acostumbrarse a
        trabajar por equipos, sin sentido personal e individualista, trabajando
        uno para todos y todos para uno.
      </p>
      <p className="font-semibold text-gray-700 mt-2">
        En esa forma se conseguirá el objetivo más fundamental que conduce al
        éxito orgánico: fijar un objetivo común y dirigirse rectamente a él con
        la más firme unidad de acción. En síntesis, se trata de pasar de lo
        inorgánico a lo orgánico; de la acción disolvente a la unidad de acción,
        y dirección individual a la acción colectiva.
      </p>
      <blockquote className="font-semibold text-gray-500 italic mt-2">
        Este proceso de transformación orgánica, que ha de cambiar la turba por
        la masa organizada, será en el futuro la palanca que daremos al
        movimiento peronista y que permitirá levantar y mover a la república
        para el bien de la patria.
      </blockquote>
      <p className="text-gray-700 mt-2 text-right">
        - Juan Perón, 25 de julio de 1949
      </p>
    </div>
  );
};

export default AccionPolitica;
