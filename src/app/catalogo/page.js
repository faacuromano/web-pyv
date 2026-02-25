'use client'

import React from 'react';
import ProductList from '../../components/ProductList';
import logoPyV from '@/../public/logopyv.webp'
import olla from '@/../public/dias_mas_felices.webp'
import remera_negra from '@/../public/remera_negra.webp'
import remera_blanca from '@/../public/remera_blanca.webp'

const products = [
  {
    id: 1,
    name: 'Remera Negra Tropa de Leales',
    description: 'Remera negra oficial del partido.',
    price: '15.000',
    image: remera_negra,
  },
  {
    id: 2,
    name: 'Remera Blanca Tropa de Leales',
    description: 'Remera blanca oficial del partido.',
    price: '15.000',
    image: remera_blanca,
  },
  {
    id: 3,
    name: 'Stickers',
    description: 'Stickers peronistas a consultar por privado.',
    price: 'Consultar',
    image: logoPyV,
  },
  {
    id: 4,
    name: 'Los días más felices',
    description: 'Plan Económico Peronista.',
    price: '18.000',
    image: olla,
  },
];

const CatalogPage = () => {
  return (
    <div>
      <section className="subpage-hero py-12 sm:py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-celeste-400 font-body text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestros productos
          </span>
          <h1 className="font-avenir text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-none mt-3">
            Cat&aacute;logo
          </h1>
          <div className="w-12 h-0.5 bg-amarillo-400 mt-5 sm:mt-6"></div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ProductList products={products} />
          <p className="font-body text-sm text-dark-400 mt-12 leading-relaxed">
            Si estás interesado en alguno de los productos, comunicate por WhatsApp
            para ver los diferentes medios de pago y stock disponible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;
