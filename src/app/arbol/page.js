import React from 'react';
import SquareImagesGrid from '../../components/gridImaes.js';

const HomePage = () => {
  return (
    <main className="h-full flex flex-col items-center">
    <h1 className='text-3xl m-2 font-semibold w-full text-center'>Ingresa a las ramas para ver mas informacion</h1>
    <div className="container mx-auto flex justify-center">
      <SquareImagesGrid />
    </div>

    </main>
  );
};

export default HomePage;
