'use client'

import React from 'react';
import ProductList from '../../components/ProductList';
import logoPyV from '@/../public/logopyv.png'
import olla from '@/../public/dias_mas_felices.jpg'
import olla1 from '@/../public/remera_negra.jpg'
import olla2 from '@/../public/remera_blanca.jpg'
const products = [
  {
    id: 1,
    name: 'Remera Negra Tropa de Leales',
    description: 'Descripción breve del producto 1.',
    price: '15.000',
    image: olla1,
  },
  {
    id: 1,
    name: 'Remera Blanca Tropa de Leales',
    description: 'Descripción breve del producto 1.',
    price: '15.000',
    image: olla2,
  },
  {
    id: 3,
    name: 'Stickers',
    description: 'Stickers peronistas a consultar por privado',
    price: 'Consultar',
    image: logoPyV,
  },
  {
    id: 4,
    name: 'Los dias mas felices',
    description: 'Plan Economico Peronista',
    price: '18.000',
    image: olla,
  },
  // Agrega más productos según sea necesario
];

const CatalogPage = () => {
  return (
    <main className="min-h-screen ">
      <h1 className="text-3xl font-bold text-center text-blue-900 ">
        Catálogo de Productos
      </h1>
      <ProductList products={products} />
    </main>
  );
};

export default CatalogPage;
