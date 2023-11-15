import Image, { StaticImageData } from "next/image"
import { Tilt } from "react-tilt"

import { github } from "@/public/assets"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motion"
import Link from "next/link"

type Props = {
   index: number
   name: string
   description: string
   tags: {
      name: string
      color: string
   }[]
   image: StaticImageData
   source_code_link: string
}

export default function ProjectCard({
   index,
   name,
   description,
   tags,
   image,
   source_code_link,
}: Props) {
   return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <Tilt
            options={{
               max: 50,
               scale: 1,
               speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
         >
            <section className="relative w-full min-h-[230px]">
               <Image
                  src={image}
                  alt={name}
                  className="w-full h-full aspect-auto sm:aspect-video object-cover rounded-2xl"
               />
               <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <Link
                     href="/"
                     target="_blank"
                     className="h-10 w-10 black-gradient rounded-full flex justify-center items-center cursor-pointer p-1"
                  >
                     <Image
                        src={github}
                        alt="github"
                        className="object-contain"
                     />
                  </Link>
               </div>
            </section>
            <section className="mt-5">
               <h3 className="text-white font-bold text-xl">{name}</h3>
               <p className="mt-2 text-secondary text-base">{description}</p>
            </section>
            <section className="mt-3 flex flex-wrap gap-2">
               {tags.map((tag, index) => (
                  <span
                     key={`project-tag-${index}`}
                     className={`text-sm ${tag.color}`}
                  >
                     #{tag.name}
                  </span>
               ))}
            </section>
         </Tilt>
      </motion.div>
   )
}
