import {
   About,
   Contact,
   Experience,
   Feedbacks,
   Hero,
   Navbar,
   StarsCanvas,
   Tech,
   Works,
} from "@/components"

export default function Home() {
   return (
      <>
         <div className="relative z-0 bg-primary">
            <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
               <Navbar />
               <Hero />
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
