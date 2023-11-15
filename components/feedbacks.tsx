"use client"

import { motion } from "framer-motion"

import Wrapper from "@/components/ui/wrapper"
import { textVariant } from "@/utils/motion"
import { testimonials } from "@/constants"
import FeedbackCard from "@/components/ui/feedback-card"

function Feedbacks() {
   return (
      <div className="mt-12 bg-black-100 rounded-[20px]">
         <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
            <motion.div variants={textVariant()}>
               <p className="sectionSubText">What others say</p>
               <h2 className="sectionHeadText">Testimonials.</h2>
            </motion.div>
         </div>

         <div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
            {testimonials.map((testimonial, index) => (
               <FeedbackCard
                  key={"testimonial-card-" + index}
                  index={index}
                  {...testimonial}
               />
            ))}
         </div>
      </div>
   )
}

export default Wrapper(Feedbacks, "feedbacks")
