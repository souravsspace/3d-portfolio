import {
   About,
   Contact,
   Experience,
   Feedbacks,
   StarsCanvas,
   Tech,
   Works,
} from "@/components"
import NavbarHeroContainer from "@/components/ui/navbar-hero-container"

export default function Home() {
   return (
      <>
         <div className="relative z-0 bg-primary">
            <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
               <NavbarHeroContainer />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
               <Contact />
               <StarsCanvas />
            </div>
         </div>
      </>
   )
}
