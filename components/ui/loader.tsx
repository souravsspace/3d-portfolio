import { useProgress, Html } from "@react-three/drei"

export default function Loader() {
   const { progress } = useProgress()

   return (
      <Html>
         <span className="canvas-load"></span>
         <p className="text-base font-extrabold mt-10 text-white">
            {progress.toFixed(2)}%
         </p>
      </Html>
   )
}
