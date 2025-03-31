"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
           <motion.div
  initial={{
    opacity: idx === activeImage ? 0 : 0.5,
    scale: idx === activeImage ? 0.5 : 0.3,
    rotateY: idx === activeImage ? -90 : 0, // Inicia girado
  }}
  animate={{
    opacity: idx === activeImage ? 1 : 0.5,
    scale: idx === activeImage ? 1 : 0.3,
    rotateY: idx === activeImage ? 0 : 20, // Gira suavemente
  }}
  transition={{
    ease: "easeInOut",
    duration: 1,
    x: { duration: 1 },
  }}
  className="h-full"
  style={{ perspective: 1000 }} // Da más efecto de profundidad
>

            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
            />
            </motion.div>
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
