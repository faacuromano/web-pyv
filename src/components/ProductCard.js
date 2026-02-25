'use client'
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const handleBuy = () => {
    const message = `Hola! Estoy interesado en el articulo: _*${product.name}*_ . \n¿Podrían confirmarme los detalles para la compra? \n *Muchas gracias.*`;
    window.open(`https://wa.me/5493416829410?text=${encodeURIComponent(message)}`);
  };
  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="font-display text-dark-950 text-sm sm:text-base md:text-lg tracking-tight leading-snug">{product.name}</h3>
        <p className="font-body text-dark-400 text-xs sm:text-sm mt-1 flex-1 hidden sm:block">{product.description}</p>
        <p className="font-body text-celeste-600 font-semibold text-sm sm:text-base mt-2">$ {product.price}</p>
        <button
          onClick={handleBuy}
          className="mt-2 sm:mt-3 bg-azul-800 text-white font-body font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 tracking-wide hover:bg-celeste-600 transition-colors duration-300 press-feedback self-start"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
