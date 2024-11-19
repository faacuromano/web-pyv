const Proponemos = (imported) => {
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
      )}{" "}
      <p className="font-semibold text-gray-700 mt-4">
        La construcción de poder, entendida a partir de organizar la capacidad
        creativa de la comunidad y la práctica como marca del desarrollo
        político, y en su desarrollo, se irá dando la identidad, no sin un
        sentido comunitario, ante la libertad el deber, la armonía social del
        conjunto por sobre metas individuales.
      </p>
      <p className="font-semibold text-gray-700 mt-4">
        Nuestra acción política no la promovemos para el mañana, buscamos una
        tabla de valores pública, que todos estén entendidos, democratizar la
        forma de pensar, que un trabajador pueda hacer política, transparentando
        la forma de pensar del dirigente, para que el pueblo sepa que está
        haciendo.
      </p>
      <p className="font-semibold text-gray-700 mt-4">
        Así, la doctrina, lo ampara al trabajador, una nueva democracia,
        organizando al pueblo, dotando.
      </p>
    </div>
  );
};

export default Proponemos;
