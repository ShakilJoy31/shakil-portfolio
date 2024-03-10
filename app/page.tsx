"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 gap-2 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 w-full relative rounded-md">
          <Image
            src="https://i.ibb.co/d0Bv8YY/DSC-1902-2-removebg-preview.png"
            alt="Developer Image"
            fill
            className="object-contain rounded-md"
          />
        </div>

        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center pt-[400px] md:pt-0 lg:pt-0 xl:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold w-full flex justify-start">Shakidul Islam Shakil</h1>

          <p className="text-slate-300">"Hi! I`&apos;`m Shakidul Islam Shakil, a web developer passionate about crafting digital experiences. I began as an intern at Kylo Apps, mastering full-stack development. After a year, I joined Translanse Pvt Ltd as a front-end developer. I'm dedicated to staying updated on the latest web technologies to bring fresh ideas. Thriving in fast-paced environments, I enjoy putting my skills to the test. Let`&apos;`s work together to create something amazing!"</p>
          <div className="flex gap-4 flex-start w-full">
            <Link href="/portfolio" className="px-4 py-2 rounded-sm ring-black border border-white">Checkout my work</Link>
            <Link href="/contact" className="px-4 py-2 rounded-sm ring-black bg-white text-black">Contact with me</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}