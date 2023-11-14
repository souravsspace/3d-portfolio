"use client"

import { navLinks } from "@/constants"
import { menu, close as closeIcon } from "@/public/assets"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
   active: string
   setActive: React.Dispatch<React.SetStateAction<string>>
}

export default function Navbar({ setActive, active }: Props) {
   const [toggle, setToggle] = useState(false)

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
               {navLinks.map((nav) => (
                  <li
                     key={nav.id}
                     className={`hover:text-white transition-all ease-in ${
                        active === nav.id ? "text-white" : "text-secondary"
                     }`}
                     onClick={() => setActive(nav.id)}
                  >
                     <Link
                        href={`#${nav.id}`}
                        className="font-medium text-lg"
                        onClick={() => setActive("")}
                     >
                        {nav.title}
                     </Link>
                  </li>
               ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
               <Image
                  src={toggle ? closeIcon : menu}
                  width={23}
                  height={23}
                  alt="menu"
                  onClick={() => setToggle((prev) => !prev)}
                  className="object-contain absolute z-10"
               />
               <div
                  className={`${
                     toggle ? "flex" : "hidden"
                  } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
               >
                  <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                     {navLinks.map((nav) => (
                        <li
                           key={nav.id}
                           className={`font-poppins font-medium cursor-pointer text-[16px] ${
                              active === nav.title
                                 ? "text-white"
                                 : "text-secondary"
                           }`}
                           onClick={() => {
                              setToggle(!toggle)
                              setActive(nav.id)
                           }}
                        >
                           <Link href={`#${nav.id}`}>{nav.title}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   )
}
