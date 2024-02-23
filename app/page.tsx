import Image from "next/image";
import HomeCSS from "../style/Home.module.css";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full ${HomeCSS.rainContainer}`}>
    <h1>This is shakidul portfolio. </h1>
  </main>  
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