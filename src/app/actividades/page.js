import React from 'react';

const actividades = [
  { href: '/actividades/campania-afiliacion', label: 'Campaña de Afiliación', desc: 'Sumate al partido, unite a la causa' },
  { href: '/actividades/club-de-lectura', label: 'Club de lectura', desc: 'Formación política y cultural colectiva' },
  { href: '/actividades/olla-popular', label: 'Olla popular', desc: 'El pueblo ayuda al pueblo' },
  { href: '/actividades/economia-popular', label: 'Economía Popular', desc: 'Red solidaria de intercambio y producción' },
];

const Actividades = () => {
  return (
    <div>
      {/* Subpage hero */}
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestro trabajo
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Actividades del Partido
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      {/* Activity list */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {actividades.map((act, idx) => (
              <a
                key={idx}
                href={act.href}
                className="group flex items-center justify-between border-b border-gray-200/80 pb-4 transition-all duration-300 hover:border-celeste-400"
              >
                <div>
                  <h3 className="font-display text-dark-950 text-lg md:text-xl tracking-tight group-hover:text-celeste-600 transition-colors duration-300">
                    {act.label}
                  </h3>
                  <p className="font-body text-dark-400 text-sm mt-1">{act.desc}</p>
                </div>
                <span className="text-dark-300 group-hover:text-celeste-500 transition-colors duration-300 text-lg ml-4 flex-shrink-0">&rarr;</span>
              </a>
            ))}
          </div>

          <p className="text-sm text-dark-400 mt-12 leading-relaxed">
            Si te interesa participar de cualquiera de nuestras actividades,
            no dudes en comunicarte haciendo click en los enlaces.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Actividades;
