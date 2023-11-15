"use client"

import { motion } from "framer-motion"

import { services } from "@/constants"
import { fadeIn, textVariant } from "@/utils/motion"
import Wrapper from "@/components/ui/wrapper"
import ServiceCard from "@/components/ui/service-card"

function About() {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">Introduction</p>
            <h2 className="sectionHeadText">Overview.</h2>
         </motion.div>

         <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-base max-w-3xl leading-8"
         >
            I&apos;m a skilled software developer with experience in TypeScript
            and JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I&apos;m a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let&apos;s work together to bring
            your ideas to life!
         </motion.p>

         <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
               <ServiceCard
                  key={service.title}
                  index={index}
                  service={service}
               />
            ))}
         </div>
      </>
   )
}

export default Wrapper(About, "about")
