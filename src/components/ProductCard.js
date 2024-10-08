'use client'
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const handleBuy = () => {
    // Redireccionar a WhatsApp con un mensaje predefinido
    const message = `Hola, estoy interesado en comprar el producto: ${product.name}`;
    window.open(`https://wa.me/XXXXXXXXXXX?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-900">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg text-green-600 font-semibold mt-2">$ {product.price}</p>
        <button
          onClick={handleBuy}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
