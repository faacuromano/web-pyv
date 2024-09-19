import React from 'react';
import SquareImagesGrid from '../../components/gridImaes.js';

const HomePage = () => {
  return (
    <main className="h-full flex flex-col items-center">
    <h1 className='text-3xl m-2 font-semibold w-full text-center mb-6'>El arbol se conoce por sus frutos...</h1>
    <div className="container md:w-2/5 mx-auto flex justify-center">
      <SquareImagesGrid />
    </div>

    </main>
  );
};

export default HomePage;
