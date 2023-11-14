"use client"

import { staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"

export default function Wrapper(Component: any, idName: string) {
   return function HOC() {
      return (
         <motion.div
            variants={staggerContainer() as any}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="padding max-w-7xl mx-auto relative z-0"
         >
            <span className="hash-span" id={idName} />
            <Component />
         </motion.div>
      )
   }
}
