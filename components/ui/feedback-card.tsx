import { motion } from "framer-motion"

import { fadeIn } from "@/utils/motion"
import Image from "next/image"

type Props = {
   testimonial: string
   name: string
   designation: string
   company: string
   image: string
   index: number
}

export default function FeedbackCard({
   testimonial,
   name,
   designation,
   company,
   image,
   index,
}: Props) {
   return (
      <motion.div
         variants={fadeIn("", "spring", index * 0.5, 0.75)}
         className="bg-black-200 p-10 rounded-lg xs:w-[320px] w-full"
      >
         <p className="text-white font-bold text-5xl">&quot;</p>
         <section className="mt-1">
            <p className="text-white tracking-wider text-[18px]">
               {testimonial}
            </p>
         </section>
         <section className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
               <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient text-[18px]">@</span>{" "}
                  {name}
               </p>
               <p className="mt-1 text-secondary text-[12px]">
                  {designation} of {company}
               </p>
            </div>
            <Image
               src={image}
               alt={`feedback-by-${name}`}
               width={40}
               height={40}
               className="rounded-full object-cover"
            />
         </section>
      </motion.div>
   )
}
