import Image from "next/image";
import communityImage from "../../public/home.png";
import actionImage from "../../public/gm.webp";
import proposeImage from "../../public/trabajando.webp";
import SquareImagesGrid from "@/components/gridImaes";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          HERO — Asymmetric Split Screen
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-[1fr_0.85fr]">
        {/* Left — Text Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 order-2 lg:order-1">
          <span className="text-celeste-400 font-body text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase opacity-0 animate-reveal-up">
            Santa Fe &middot; Tropa de Leales
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tighter leading-[0.9] mt-6 opacity-0 animate-reveal-up-1">
            Principios
            <br />
            <span className="text-celeste-500">y Valores</span>
          </h1>

          <div className="accent-line mt-8 opacity-0 animate-line-grow"></div>

          <p className="font-body text-dark-500 text-base md:text-lg leading-relaxed max-w-[50ch] mt-6 opacity-0 animate-reveal-up-3">
            Desde la acci&oacute;n, con el norte y el compromiso
            en la justicia social de Santa Fe.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-reveal-up-4">
            <a
              href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
              className="bg-azul-800 text-white font-body font-semibold px-8 py-3.5 text-sm tracking-wide hover:bg-celeste-600 transition-colors duration-300 press-feedback"
            >
              Afiliate ahora
            </a>
            <a
              href="/contacto"
              className="border border-dark-300 text-dark-800 font-body font-medium px-8 py-3.5 text-sm tracking-wide hover:border-celeste-400 hover:text-celeste-600 transition-all duration-300"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="relative h-[45vh] lg:h-auto lg:min-h-[100dvh] overflow-hidden order-1 lg:order-2">
          <Image
            src={communityImage}
            alt="Militantes de Principios y Valores en Santa Fe"
            fill
            className="object-cover opacity-0 animate-fade-in"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Mobile — bottom fade for text below */}
          <div className="hero-fade-bottom absolute inset-0 lg:hidden"></div>
          {/* Desktop — left fade into white bg */}
          <div className="hero-fade-left absolute inset-0 hidden lg:block"></div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          POLITICAL ACTION — Asymmetric Zig-Zag
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Section header — left aligned */}
          <div className="mb-16 max-w-xl opacity-0 animate-reveal-up">
            <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
              Nuestra forma de hacer pol&iacute;tica
            </span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-none mt-4">
              Acci&oacute;n, propuestas
              <br />
              <span className="text-dark-400">y actualidad</span>
            </h2>
          </div>

          {/* Row 1 — Large left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10 mb-6 lg:mb-10">
            <a href="/nosotros/accion-politica" className="group relative overflow-hidden block aspect-[16/10] lg:aspect-[16/9] card-hover">
              <Image
                src={actionImage}
                alt="Accion politica en Santa Fe"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-azul-950/40 group-hover:bg-azul-950/55 transition-colors duration-400"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10">
                <span className="text-celeste-300 font-body text-xs font-semibold tracking-[0.2em] uppercase">
                  Acci&oacute;n pol&iacute;tica
                </span>
                <h3 className="font-display text-white text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight mt-2">
                  Para formar<br />comunidad
                </h3>
                <p className="text-gray-300/80 text-sm md:text-base mt-3 max-w-[45ch] leading-relaxed hidden sm:block">
                  La acci&oacute;n pol&iacute;tica es colectiva; es menester terminar
                  con la mentalidad individualista.
                </p>
              </div>
            </a>

            <a href="/nosotros/proponemos" className="group relative overflow-hidden block aspect-[4/3] lg:aspect-auto card-hover">
              <Image
                src={proposeImage}
                alt="Propuestas para Rosario y Santa Fe"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-azul-950/40 group-hover:bg-azul-950/55 transition-colors duration-400"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-celeste-300 font-body text-xs font-semibold tracking-[0.2em] uppercase">
                  Propuestas
                </span>
                <h3 className="font-display text-white text-xl md:text-2xl tracking-tight leading-tight mt-2">
                  Transformando<br />Santa Fe
                </h3>
              </div>
            </a>
          </div>

          {/* Row 2 — Full width, shorter */}
          <a href="/nosotros/politica-y-actualidad" className="group relative overflow-hidden block aspect-[21/9] md:aspect-[3/1] card-hover">
            <Image
              src={communityImage}
              alt="Politica y actualidad en Santa Fe"
              fill
              className="object-cover img-zoom"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-azul-950/50 group-hover:bg-azul-950/60 transition-colors duration-400"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between w-full">
              <div>
                <span className="text-celeste-300 font-body text-xs font-semibold tracking-[0.2em] uppercase">
                  Pol&iacute;tica y actualidad
                </span>
                <h3 className="font-display text-white text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight mt-2">
                  Justicia social y bienestar com&uacute;n
                </h3>
              </div>
              <span className="text-celeste-300 font-body text-sm font-medium tracking-wide mt-3 sm:mt-0 hidden sm:inline-block">
                Ver m&aacute;s &rarr;
              </span>
            </div>
          </a>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          TREE SECTION — Dark, Dramatic, Highlighted
      ═══════════════════════════════════════════ */}
      <section className="tree-section-bg relative py-20 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14 md:mb-20">
            <div>
              <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
                El &aacute;rbol peronista
              </span>
              <h2 className="font-display text-white text-3xl md:text-5xl xl:text-6xl tracking-tighter leading-[0.9] mt-4">
                Ramas del
                <br />
                <span className="text-celeste-400">movimiento</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="font-body text-dark-400 text-base md:text-lg leading-relaxed max-w-[50ch] lg:ml-auto">
                Conoce las ramas que conforman nuestro movimiento.
                Cada una representa un pilar fundamental de la organizaci&oacute;n.
              </p>
            </div>
          </div>

          {/* Tree Grid */}
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <SquareImagesGrid />
          </div>

          {/* Quote */}
          <div className="text-center mt-14 md:mt-20">
            <div className="w-8 h-0.5 bg-amarillo-400 mx-auto mb-8"></div>
            <blockquote className="font-display text-gray-200/80 text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug max-w-2xl mx-auto">
              &ldquo;El &aacute;rbol se conoce por sus frutos...&rdquo;
            </blockquote>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          CTA — Conclusion
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
            <div>
              <blockquote className="font-display text-dark-950 text-2xl sm:text-3xl md:text-4xl xl:text-5xl tracking-tighter leading-[1.1]">
                &ldquo;Mejor que decir es hacer, mejor que prometer es realizar.&rdquo;
              </blockquote>
              <div className="accent-line mt-6"></div>
              <p className="font-body text-dark-500 text-base md:text-lg leading-relaxed mt-6 max-w-[55ch]">
                Sumate a Principios y Valores.
                Juntos construimos la Santa Fe que merecemos.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
                className="bg-azul-800 text-white font-body font-semibold px-10 py-4 text-sm tracking-wide hover:bg-celeste-600 transition-colors duration-300 press-feedback text-center whitespace-nowrap"
              >
                Afiliate ahora &rarr;
              </a>
              <a
                href="/contacto"
                className="border border-dark-300 text-dark-800 font-body font-medium px-10 py-4 text-sm tracking-wide hover:border-celeste-400 hover:text-celeste-600 transition-all duration-300 text-center whitespace-nowrap"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
