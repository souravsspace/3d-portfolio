"use client"

import { motion } from "framer-motion"
import { ComputersCanvas } from "@/components/canvas"
import Link from "next/link"

type Props = {
   setActive: React.Dispatch<React.SetStateAction<string>>
}

export default function Hero({ setActive }: Props) {
   return (
      <section className="relative w-full h-screen mx-auto">
         <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
               <div className="w-5 h-5 rounded-full bg-violet" />
               <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
               <h1 className="heroHeadText">
                  Hi I&apos;m <span className="text-violet">Sourav</span>
               </h1>
               <p className="heroSubText mt-2 text-white-100">
                  I develop 3D visuals, user <br className="sm:block hidden" />
                  interfaces and web applications
               </p>
            </div>
         </div>

         <ComputersCanvas />

         <Link href="#about" onClick={() => setActive("about")}>
            <div className="absolute -bottom-0  w-full flex items-center justify-center">
               <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start gap-2 scale-75 sm:scale-90">
                  <motion.div
                     animate={{
                        y: [0, 24, 0],
                     }}
                     transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                     }}
                     className="w-3 h-3 rounded-full bg-secondary mt-2"
                  />
               </div>
            </div>
         </Link>
      </section>
   )
}
