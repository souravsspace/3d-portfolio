"use client"

import { technologies } from "@/constants"
import Wrapper from "@/components/ui/wrapper"
import { BallCanvas } from "@/components/canvas"

function Tech() {
   return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
         {technologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
               <BallCanvas icon={tech.icon} />
            </div>
         ))}
      </div>
   )
}

export default Wrapper(Tech, "tech")
