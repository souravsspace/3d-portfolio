"use client"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
   Decal,
   Float,
   OrbitControls,
   Preload,
   useTexture,
} from "@react-three/drei"
import Loader from "@/components/ui/loader"

type Props = {
   icon: any
}

const Ball = ({ icon: imgUrl }: Props) => {
   const [decal] = useTexture([imgUrl])

   return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
         <ambientLight intensity={0.25} />
         <directionalLight position={[0, 0, 0.05]} />
         <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
               color="#fff8eb"
               polygonOffset
               polygonOffsetFactor={-5}
               flatShading
            />
            <Decal
               map={decal}
               position={[0, 0, 1]}
               rotation={[2 * Math.PI, 0, 6.25]}
               scale={1}
            />
         </mesh>
      </Float>
   )
}

export default function BallCanvas({ icon }: Props) {
   return (
      <Canvas
         frameloop="demand"
         dpr={[1, 2]}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} />
            <Ball icon={icon} />
         </Suspense>

         <Preload all />
      </Canvas>
   )
}
