'use client'
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const handleBuy = () => {
    const message = `Hola! Estoy interesado en el articulo: _*${product.name}*_ . \n¿Podrían confirmarme los detalles para la compra? \n *Muchas gracias.*`;
    window.open(`https://wa.me/5493416829410?text=${encodeURIComponent(message)}`);
  };
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-dark-950 text-base md:text-lg tracking-tight">{product.name}</h3>
        <p className="font-body text-dark-400 text-sm mt-1">{product.description}</p>
        <p className="font-body text-celeste-600 font-semibold text-base mt-2">$ {product.price}</p>
        <button
          onClick={handleBuy}
          className="mt-3 bg-azul-800 text-white font-body font-medium text-sm px-6 py-2.5 tracking-wide hover:bg-celeste-600 transition-colors duration-300 press-feedback"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
