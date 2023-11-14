import Image, { StaticImageData } from "next/image"
import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"

type Props = {
   index: number
   service: {
      title: string
      icon: StaticImageData
   }
}

export default function ServiceCard({ index, service }: Props) {
   return (
      <Tilt
         options={{
            max: 45,
            scale: 1,
            speed: 450,
         }}
         className="xs:w-[250px] w-full"
      >
         <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
         >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
               <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
               />
               <h3 className="text-white text-[20px] font-bold text-center cursor-pointer">
                  {service.title}
               </h3>
            </div>
         </motion.div>
      </Tilt>
   )
}
