import React from "react";
import { images } from "./constants";
import left from "/public/left.svg"
import right from "/public/right.svg"
import { motion } from "framer-motion";
import Image from "next/image";


const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="grid place-items-start w-full bg-sky-600 relative md:rounded-tr-3xl md:rounded-br-3xl">

      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "easeInOut",
              duration: .75,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-100">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <button className="bg-sky-800 text-white uppercase px-4 py-2 rounded-md my-10">
            Leer mas
          </button>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="Flecha al anterior | Left Arrow" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="Flecha al siguiente | Rigth Arrow" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
