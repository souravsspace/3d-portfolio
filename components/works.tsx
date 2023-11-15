"use client"

import Wrapper from "@/components/ui/wrapper"
import { projects } from "@/constants"
import ProjectCard from "@/components/ui/project-card"
import { fadeIn, textVariant } from "@/utils/motion"

import { motion } from "framer-motion"

function Works() {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">My work</p>
            <h2 className="sectionHeadText">Projects.</h2>
         </motion.div>
         <div className="w-full flex">
            <motion.p
               variants={fadeIn("", "", 0.1, 1)}
               className="mt-3 text-secondary text-base max-w-3xl leading-[30px]"
            >
               Following projects showcases my skills and experience through
               real-world examples of my work. Each project is briefly described
               with links to code repositories and live demos in it. It reflects
               my ability to solve complex problems, work with different
               technologies, and manage projects effectively.
            </motion.p>
         </div>
         <div className="mt-20 flex gap-7 flex-wrap">
            {projects.map((project, index) => (
               <ProjectCard
                  key={`project - ${index}`}
                  index={index}
                  {...project}
               />
            ))}
         </div>
      </>
   )
}

export default Wrapper(Works, "work")
