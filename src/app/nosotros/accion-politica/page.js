const AccionPolitica = (imported) => {
  const HeadingTag = imported.imported === true ? 'h3' : 'h1';
  return (
    <div>
      {!imported.imported && (
        <section className="subpage-hero py-12 sm:py-16 md:py-24 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
              Nosotros
            </span>
            <h1 className="font-avenir text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-none mt-3">
              Acci&oacute;n Pol&iacute;tica
            </h1>
            <div className="w-12 h-0.5 bg-amarillo-400 mt-5 sm:mt-6"></div>
          </div>
        </section>
      )}

      <section className={`${imported.imported ? '' : 'py-10 sm:py-16 md:py-20'} px-5 sm:px-6`}>
        <div className="max-w-3xl mx-auto">
          {imported.imported && (
            <HeadingTag className="font-display text-dark-950 text-2xl md:text-3xl tracking-tighter leading-tight mb-6">
              Acción Política
            </HeadingTag>
          )}

          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed">
            La acción política es una acción colectiva; es menester terminar con la
            mentalidad individualista. En este sentido es necesario acostumbrarse a
            trabajar por equipos, sin sentido personal e individualista, trabajando
            uno para todos y todos para uno.
          </p>
          <p className="font-body text-dark-600 text-base md:text-lg leading-relaxed mt-4">
            En esa forma se conseguirá el objetivo más fundamental que conduce al
            éxito orgánico: fijar un objetivo común y dirigirse rectamente a él con
            la más firme unidad de acción. En síntesis, se trata de pasar de lo
            inorgánico a lo orgánico; de la acción disolvente a la unidad de acción,
            y dirección individual a la acción colectiva.
          </p>

          <blockquote className="border-l-2 border-celeste-400 pl-4 sm:pl-6 my-6 sm:my-8">
            <p className="font-display text-dark-700 text-lg md:text-xl leading-relaxed">
              Este proceso de transformación orgánica, que ha de cambiar la turba por
              la masa organizada, será en el futuro la palanca que daremos al
              movimiento peronista y que permitirá levantar y mover a la república
              para el bien de la patria.
            </p>
          </blockquote>

          <p className="font-body text-dark-400 text-sm text-right">
            — Juan Perón, 25 de julio de 1949
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccionPolitica;
