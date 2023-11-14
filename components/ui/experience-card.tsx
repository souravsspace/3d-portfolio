import Image, { StaticImageData } from "next/image"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

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

export  function ExperienceCard({ experience }: Props) {
   return (
      <VerticalTimelineElement
         contentStyle={{ background: "#1d1836", color: "#fff" }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         date={experience.date}
         iconStyle={{ background: experience.iconBg, color: "#fff" }}
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
         {experience.date}
      </VerticalTimelineElement>
   )
}
