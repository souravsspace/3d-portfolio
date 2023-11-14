"use client"

import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"

import Wrapper from "@/components/ui/wrapper"
import { experiences } from "@/constants"
import { textVariant } from "@/utils/motion"
import Image, { StaticImageData } from "next/image"

type Props = {
   experience: {
      title: string
      company_name: string
      icon: StaticImageData
      iconBg: string
      date: string
      points: string[]
   }
}

function ExperienceCard({ experience }: Props) {
   return (
      <VerticalTimelineElement
         contentStyle={{
            background: "#1d1836",
            color: "#fff",
         }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         date={experience.date}
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex justify-center items-center w-full h-full">
               <Image
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
               />
            </div>
         }
      >
         <div>
            <h3 className="text-white text-[24px] font-bold">
               {experience.title}
            </h3>
            <p
               className="text-secondary text-[16px] font-semibold"
               style={{ margin: 0 }}
            >
               {experience.company_name}
            </p>
         </div>

         <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
               <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
               >
                  {point}
               </li>
            ))}
         </ul>
      </VerticalTimelineElement>
   )
}

export function Experience() {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">What I have done so far</p>
            <h2 className="sectionHeadText">Work Experience.</h2>
         </motion.div>

         <div className="mt-20 flex flex-col">
            <VerticalTimeline>
               {experiences.map((experience, index) => (
                  <ExperienceCard
                     key={`experience-${index}`}
                     experience={experience}
                  />
               ))}
            </VerticalTimeline>
         </div>
      </>
   )
}

export default Wrapper(Experience, "experience")
