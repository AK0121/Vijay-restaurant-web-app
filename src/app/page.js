"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-16">
      <div className="header flex h-96 w-7xl mx-auto items-center relative top-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="logo absolute top-6 left-0 lg:left-16 lg:-top-48"
        >
          <Image
            alt="Vijay-Restaurant Logo Image"
            src="/images/logo-transparent.png"
            priority = "true"
            width={650}
            height={550}
            className="w-4xl h-4xl lg:w-3xl lg:h-2xl"
          />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          whileHover={{rotate: 0}}
          className="dosaImg absolute right-0 top-0"
        >
          <Image
            alt="dosa-image"
            src="/images/dosa-img.png"
            width={650}
            height={650}
            className="w-md h-md sm:w-md sm:h-md md:w-md md:h-md lg:w-96 lg:h-md"
          />
        </motion.div>
      </div>

      <div className="body">
        <div className="main-heading">
        <h1>Skip lines</h1>
        <h1>&</h1>
        <h2>Eat like a genius</h2>
        </div>

        <button className="cta-btn capitalize bg-red-600 py-2 px-5 cursor-pointer rounded-xl text-xl hover:scale-105 transition-all">Skip the queue</button>
      </div>
     
    </div>
  );
}
