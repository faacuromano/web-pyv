import Image from 'next/image';
import logo_pyv from '../../public/logopyv.webp';

function Footer() {
  return (
    <footer className="footer-bg text-dark-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:px-8">

        {/* Top accent line (Sol de Mayo yellow) */}
        <div className="w-12 h-0.5 bg-amarillo-400 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4">
            <Image
              src={logo_pyv}
              alt="Logo Principios y Valores"
              className="h-11 w-auto mb-4 brightness-200"
              width={120}
              height={44}
            />
            <p className="text-sm text-dark-400 leading-relaxed max-w-[30ch]">
              Principios y Valores Santa Fe.
              Construyendo comunidad desde la acci&oacute;n y el compromiso.
            </p>
          </div>

          {/* Navegaci&oacute;n */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-gray-100 text-sm font-semibold tracking-wide mb-4">
              Navegaci&oacute;n
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/nosotros/accion-politica" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Acci&oacute;n Pol&iacute;tica</a></li>
              <li><a href="/nosotros/proponemos" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Propuestas</a></li>
              <li><a href="/actividades" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Actividades</a></li>
              <li><a href="/arbol" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">&Aacute;rbol Peronista</a></li>
              <li><a href="/catalogo" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Cat&aacute;logo</a></li>
            </ul>
          </div>

          {/* Actividades */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-gray-100 text-sm font-semibold tracking-wide mb-4">
              Actividades
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/actividades/campania-afiliacion" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Campa&ntilde;a de Afiliaci&oacute;n</a></li>
              <li><a href="/actividades/club-de-lectura" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Club de Lectura</a></li>
              <li><a href="/actividades/olla-popular" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Olla Popular</a></li>
              <li><a href="/actividades/economia-popular" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Econom&iacute;a Popular</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-gray-100 text-sm font-semibold tracking-wide mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.instagram.com/pyv_rosario/" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Instagram</a></li>
              <li><a href="https://www.youtube.com/@TropadeLeales" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">YouTube</a></li>
              <li><a href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">WhatsApp</a></li>
              <li><a href="/contacto" className="text-dark-400 hover:text-celeste-400 transition-colors duration-300">Todos los contactos</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-800/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-600">
            Principios y Valores &mdash; Santa Fe, Argentina
          </p>
          <p className="text-xs text-dark-700">
            Tropa de Leales
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
