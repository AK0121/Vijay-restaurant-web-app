"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col item-center justify-start w-full min-h-screen gap-16">
      <div className="header flex h-96 w-7xl mx-auto items-cente relative top-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="logo absolute top-12 left-0 lg:left-16 lg:-top-48"
        >
          <Image
            alt="Vijay-Restaurant Logo Image"
            src="/images/logo-transparent.png"
            priority = "true"
            width={650}
            height={550}
            className="w-7xl h-7xl lg:w-3xl lg:h-2xl"
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
            className="w-52 h-52 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-md"
          />
        </motion.div>
      </div>
      <div className="body items-center">
        <div className="hero-text">
          <h1 className="">Skip Lines</h1>
          <h1>&</h1>
          <h2>Eat like a genius</h2>
        </div>
      </div>
    </div>
  );
}
