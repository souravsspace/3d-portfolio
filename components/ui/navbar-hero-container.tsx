"use client"

import { Hero, Navbar } from "@/components"
import { useState } from "react"

export default function NavbarHeroContainer() {
   const [active, setActive] = useState("")

   return (
      <>
         <Navbar active={active} setActive={setActive} />
         <Hero setActive={setActive} />
      </>
   )
}
