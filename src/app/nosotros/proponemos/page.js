const Proponemos = (imported) => {
  const HeadingTag = imported.imported === true ? 'h3' : 'h1';
  return (
    <div>
      {!imported.imported && (
        <section className="subpage-hero py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
              Nosotros
            </span>
            <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
              Proponemos
            </h1>
            <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
          </div>
        </section>
      )}

      <section className={`${imported.imported ? '' : 'py-16 md:py-20'} px-6`}>
        <div className="max-w-3xl mx-auto">
          {imported.imported && (
            <HeadingTag className="font-display text-dark-950 text-2xl md:text-3xl tracking-tighter leading-tight mb-6">
              Proponemos
            </HeadingTag>
          )}

          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
            La construcción, entendida a partir de organizar la capacidad
            creativa de la comunidad y la práctica como marca del desarrollo
            político, y en su desarrollo, se irá dando la identidad, no sin un
            sentido comunitario, ante la libertad el deber, la armonía social del
            conjunto por sobre metas individuales.
          </p>
          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mt-4">
            Nuestra acción política no la promovemos para el mañana, buscamos una
            tabla de valores pública, que todos estén entendidos, democratizar la
            forma de pensar, que un trabajador pueda hacer política, transparentando
            la forma de pensar del dirigente, para que el pueblo sepa qué está
            haciendo.
          </p>
          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mt-4">
            Así, la doctrina, lo ampara al trabajador, una nueva democracia,
            organizando al pueblo, dotando.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Proponemos;
