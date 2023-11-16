"use client"

import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { ChangeEvent, FormEvent, useRef, useState } from "react"

import { EarthCanvas } from "@/components/canvas"
import Wrapper from "@/components/ui/wrapper"
import { slideIn } from "@/utils/motion"
import toast from "react-hot-toast"

function Contact() {
   const formRef = useRef<HTMLFormElement>(null)

   const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
   })
   const [loading, setLoading] = useState(false)

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target

      setForm((prev) => ({ ...prev, [name]: value }))
   }
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)

      const serviceId = process.env.EMAILJS_SERVICE_ID as string
      const templateId = process.env.EMAILJS_TEMPLATE_ID as string
      const userId = process.env.EMAILJS_USER_ID as string

      emailjs
         .send(
            serviceId,
            templateId,
            {
               from_name: form.name,
               to_name: "Sourav",
               from_email: form.email,
               to_email: "weedmanop420@gmail.com",
               message: form.message,
            },
            userId
         )
         .then(() => {
            setLoading(false)
            toast.success("Message sent!")
            setForm({
               name: "",
               email: "",
               message: "",
            })
         })
         .catch(() => {
            setLoading(false)
            toast.error("Something went wrong!")
         })
   }

   return (
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
         <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
         >
            <p className="sectionSubText">Get in touch</p>
            <h3 className="sectionHeadText">Contact.</h3>
            <form
               ref={formRef}
               onSubmit={handleSubmit}
               className="mt-12 flex flex-col gap-8"
            >
               <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
                     placeholder="What's your name?"
                     className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
                  />
               </label>
               <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                     Your Email
                  </span>
                  <input
                     type="text"
                     name="email"
                     value={form.email}
                     onChange={handleChange}
                     placeholder="What's your email?"
                     className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
                  />
               </label>
               <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                     Your Message
                  </span>
                  <textarea
                     rows={7}
                     name="message"
                     value={form.message}
                     onChange={handleChange}
                     placeholder="What do you want to say?"
                     className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
                  />
               </label>
               <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                  {loading ? "Loading.." : "Send Message"}
               </button>
            </form>
         </motion.div>

         <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 h-[350px] md:h-[550px] xl:h-auto"
         >
            <EarthCanvas />
         </motion.div>
      </div>
   )
}

export default Wrapper(Contact, "contact")
