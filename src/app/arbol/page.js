"use client";
import React, { useEffect } from "react";
import SquareImagesGrid from "../../components/gridImaes.js";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    const sound = new Audio("/arbolfrutos.mp3");
    sound.play().catch((e) => {
      console.log("El navegador bloqueó la reproducción automática:", e);
    });
  }, []);

  return (
    <main className="h-full flex flex-col items-center">
      <div className="container md:w-2/5 mx-auto flex justify-center">
        <SquareImagesGrid />
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full text-xl md:text-4xl font-light text-gray-700 italic text-center m-2 mt-12"
      >
        El árbol se conoce por sus frutos...
      </motion.h2>
    </main>
  );
};

export default HomePage;
