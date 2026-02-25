import React from 'react';
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const links = [
    { href: "https://www.instagram.com/pyv_rosario/", label: "Instagram oficial", icon: FaInstagram, platform: "instagram" },
    { href: "https://www.instagram.com/ramafemeninapyvsanta/", label: "Rama femenina", icon: FaInstagram, platform: "instagram" },
    { href: "https://www.instagram.com/juventudpyvrosario/", label: "Juventud peronista", icon: FaInstagram, platform: "instagram" },
    { href: "https://www.youtube.com/@ConUnEscarbadientes", label: "Nuestro stream", icon: FaYoutube, platform: "youtube" },
    { href: "https://www.youtube.com/@TropadeLeales", label: "Canal de YouTube", icon: FaYoutube, platform: "youtube" },
    { href: "https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8", label: "Afiliaciones", icon: FaWhatsapp, platform: "whatsapp" },
    { href: "https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8", label: "Quiero participar", icon: FaWhatsapp, platform: "whatsapp" },
  ];

  return (
    <div>
      <section className="subpage-hero py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Comunicate
          </span>
          <h1 className="font-display text-white text-3xl md:text-5xl tracking-tighter leading-none mt-3">
            Contacto
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-6"></div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-dark-500 text-base mb-10 leading-relaxed">
            Encontranos en nuestras redes sociales o contactanos directamente por WhatsApp.
          </p>

          <div className="space-y-3">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group flex items-center justify-between border-b border-gray-200/80 pb-3 transition-all duration-300 hover:border-celeste-400"
              >
                <div className="flex items-center gap-4">
                  <item.icon size={18} className="text-dark-400 group-hover:text-celeste-500 transition-colors duration-300 flex-shrink-0" />
                  <div>
                    <span className="font-body text-dark-900 text-base font-medium group-hover:text-celeste-600 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="block text-xs text-dark-400 capitalize">{item.platform}</span>
                  </div>
                </div>
                <span className="text-dark-300 group-hover:text-celeste-500 transition-colors duration-300">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
