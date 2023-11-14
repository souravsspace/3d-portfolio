"use client"

import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
   const [active, setActive] = useState("")

   return (
      <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
         <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
            <Link
               href="/"
               className="flex items-center gap-2"
               onClick={() => setActive("")}
               scroll={true}
            >
               <Image
                  alt="logo"
                  src="/logo.png"
                  width={30}
                  height={30}
                  className="object-contain"
               />
               <p className="cursor-pointer font-bold text-lg">
                  <span>Sourav&apos;s</span>
                  <span> | </span>
                  <span>Portfolio</span>
               </p>
            </Link>
            <ul className="hidden sm:flex flex-row gap-10">
               {navLinks.map((link) => (
                  <li
                     key={link.id}
                     className={`hover:text-white transition-all ease-in ${
                        active === link.id ? "text-white" : "text-secondary"
                     }`}
                     onClick={() => setActive(link.id)}
                  >
                     <Link
                        href={`#${link.id}`}
                        className="font-medium text-lg"
                        onClick={() => setActive("")}
                     >
                        {link.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}
