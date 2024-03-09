"use client"

import Image from "next/image";
import { motion } from 'framer-motion'

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

          <p className="text-slate-300">Hello there! I am Shakidul Islam Shakil, a web application developer with a passion for crafting awesome digital experiences. I started my journey as an intern at Kylo Apps, where I learned the ropes of full-stack development. After a year of hard working, I landed a sweet gig as a front-end developer at Translanse Pvt Ltd. I`&apos;`m always eager to stay on top of the latest trends and technologies in web development, so I can bring fresh ideas to the table. I thrive in fast-paced environments where I can put my skills to the test and make a real impact. <br /> Let`&apos;`s work together to create something amazing!</p>
          <div className="flex gap-4 flex-start w-full">
            <button className="px-4 py-2 rounded-sm ring-black border border-white">Checkout my work</button>
            <button className="px-4 py-2 rounded-sm ring-black bg-white text-black">Contact with me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



// <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />